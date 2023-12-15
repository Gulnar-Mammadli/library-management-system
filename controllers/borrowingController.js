const Borrowing = require("../models/borrowing");
const Book = require("../models/books");
const Copy = require("../models/copies");
const Student = require("../models/Student");
const User = require("../models/User");
const { Op } = require("sequelize");


const calculateDueDate = (borrowDate) => {
  const borrowDateObj = new Date(borrowDate);
  const dueDateObj = new Date(borrowDateObj.getTime() + 15 * 24 * 60 * 60 * 1000); // Add 15 days

  const formattedDueDate = dueDateObj.toISOString().split('T')[0];

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
      borrowDate: borrowDate.toISOString().split('T')[0], // Format borrowDate as "yyyy-mm-dd"
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

    return res.status(200).json({ newBorrowing });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateBorrowing = async (req, res) => {
  try {
    const { id } = req.params;

    const borrowingToUpdate = await Borrowing.findOne({
      where: { id: id },
    });

    if (!borrowingToUpdate) {
      console.log(`Borrowing record with ID ${id} not found`);
      return res.status(404).json({ msg: 'Borrowing record not found' });
    }

    const returnDate = new Date();
    borrowingToUpdate.returnDate = returnDate.toISOString().split('T')[0];
    borrowingToUpdate.status = "Returned";
    borrowingToUpdate.totalFine = calculateTotalFine(returnDate, borrowingToUpdate.dueDate);

    // Save the changes
    await borrowingToUpdate.save();

    // Update numAvailableCopies in the Books table
    const copy = await Copy.findByPk(borrowingToUpdate.copyId);
    const book = await Book.findByPk(copy.bookId);

    if (book) {
      book.numAvailableCopies += 1;
      await book.save();
    }

    // Update actualNumBooks in the Student table
    const student = await Student.findByPk(borrowingToUpdate.studentId);
    if (student) {
      student.actualNumBooks -= 1;
      await student.save();
    }

    console.log(`Borrowing record with ID ${id} successfully updated. Return Date: ${returnDate}`);

    return res.status(200).json({ msg: 'Borrowing record successfully updated', updatedBorrowing: borrowingToUpdate });
  } catch (error) {
    console.error('Error updating borrowing record:', error);
    return res.status(500).json({ msg: 'Error updating borrowing record', error: error.message });
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
      return res.status(401).json({ msg: 'User not found' });
    }

    const student = await Student.findOne({
      where: { userId: user.id },
    });

    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    const studentBorrowings = await Borrowing.findAll({
      where: { studentId: student.id, status: "Borrowed" },
    });

    const borrowedData = [];

    for (const borrowing of studentBorrowings) {
      const copy = await Copy.findByPk(borrowing.copyId);

      if (copy) {
        const book = await Book.findByPk(copy.bookId, {
          attributes: ['title'],
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
    console.error('Error getting student borrowings:', error);
    return res.status(500).json({ msg: 'Error getting student borrowings', error: error.message });
  }
};


const getExpiredBorrowings = async (req, res) => {
  try {
    const currentDate = new Date();

    const expiredBorrowings = await Borrowing.findAll({
      where: {
        status: "Borrowed",
        dueDate: { [Op.lt]: currentDate.toISOString().split('T')[0] },
      },
      attributes: ['copyId', 'borrowDate', 'dueDate'], // Include necessary attributes
    });

    const booksData = [];

    for (const borrowing of expiredBorrowings) {
      const copy = await Copy.findByPk(borrowing.copyId);

      if (copy) {
        const book = await Book.findByPk(copy.bookId, {
          attributes: ['ISBN', 'title'],
        });

        if (book) {
          booksData.push({
            book: {
              barcode: copy.barcode,
              purchaseDate: copy.purchaseDate, // Include purchaseDate from Copy
              price: copy.price, // Include price from Copy
              borrowDate: borrowing.borrowDate, // Include borrowDate from Borrowing
              dueDate: borrowing.dueDate, // Include dueDate from Borrowing
              ...book.toJSON(),
            },
          });
        }
      }
    }

    return res.status(200).json({ booksData });
  } catch (error) {
    console.error('Error getting book data for expired borrowings:', error);
    return res.status(500).json({ msg: 'Error getting book data for expired borrowings', error: error.message });
  }
};



module.exports = {
  createBorrowing,
  updateBorrowing,
  getAllBorrowings,
  getAllStudentBorrowings,
  getExpiredBorrowings,
};
