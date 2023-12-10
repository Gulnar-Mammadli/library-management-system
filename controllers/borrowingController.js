const Borrowing = require("../models/borrowing");
const Copy = require("../models/copies");
const Book = require("../models/books");
const Student = require("../models/student");
const User = require("../models/user");

const calculateDueDate = (borrowDate) => {
  const borrowDateObj = new Date(borrowDate);
  const dueDateObj = new Date(
    borrowDateObj.getTime() + 15 * 24 * 60 * 60 * 1000
  ); // Add 15 days

  const formattedDueDate = dueDateObj.toISOString().split("T")[0];

  return formattedDueDate;
};

const calculateTotalFine = (returnDate, dueDate) => {
  const returnDateObj = new Date(returnDate);
  const dueDateObj = new Date(dueDate);

  if (returnDateObj > dueDateObj) {
    const daysLate = Math.floor(
      (returnDateObj - dueDateObj) / (24 * 60 * 60 * 1000)
    );
    const totalFine = daysLate * 0.2;
    return totalFine.toFixed(2); // Round to 2 decimal places
  } else {
    return "0.00";
  }
};

const createBorrowing = async (req, res) => {
  try {
    // Set borrowDate to the current date and time
    const borrowDate = new Date();

    // Check if the student has available books to borrow
    const copy = await Copy.findByPk(req.body.copyId);
    const book = await Book.findByPk(copy.bookId);
    const student = await Student.findByPk(req.body.studentId);

    if (!book || book.numAvailableCopies <= 0) {
      return res.status(400).json({
        msg: "Unfortunately, we do not have any copy of this book right now!",
      });
    }

    // Check if the student has reached their borrowing limit
    if (student.actualNumBooks >= student.allowedNumBooks) {
      return res.status(400).json({
        msg: "You have reached your limit. You cannot borrow a new book right now. You can borrow a new book when you return some loans.",
      });
    }

    // Calculate the dueDate
    const dueDate = calculateDueDate(borrowDate);

    // Include borrowDate, dueDate, and status in the borrowing data
    const borrowingData = {
      ...req.body,
      borrowDate: borrowDate.toISOString().split("T")[0], // Format borrowDate as "yyyy-mm-dd"
      dueDate: dueDate,
      status: "Borrowed",
    };

    // Create a new borrowing record
    const newBorrowing = await Borrowing.create(borrowingData);

    // Update numAvailableCopies in the Books table
    book.numAvailableCopies -= 1;
    await book.save();

    // Update actualNumBooks in the Student table
    student.actualNumBooks += 1;
    await student.save();

    res.status(200).json({ newBorrowing });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllBorrowings = async (req, res) => {
  try {
    const allBorrowings = await Borrowing.findAll();
    return res.status(200).json({ allBorrowings });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllStudentBorrowings = async (req, res) => {
  try {
    const { username } = req.query;

    const user = await User.findOne({
      where: { username: username },
    });

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    const student = await Student.findOne({
      where: { userId: user.id },
    });

    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }

    const studentBorrowings = await Borrowing.findAll({
      where: { studentId: student.id, status: "Borrowed" },
    });

    const borrowedData = [];

    for (const borrowing of studentBorrowings) {
      const copy = await Copy.findByPk(borrowing.copyId);

      if (copy) {
        const book = await Book.findByPk(copy.bookId, {
          attributes: ["title"],
        });

        if (book) {
          borrowedData.push({
            ...borrowing.toJSON(),
            title: book.title,
          });
        }
      }
    }

    return res.status(200).json({ borrowedData });
  } catch (error) {
    console.error("Error getting student borrowings:", error);
    return res
      .status(500)
      .json({ msg: "Error getting student borrowings", error: error.message });
  }
};

module.exports = {
  createBorrowing,
  getAllBorrowings,
  getAllStudentBorrowings,
};
