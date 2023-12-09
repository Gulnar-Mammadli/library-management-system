const Card = require("../models/cards");
const User = require("../models/user");
const Student = require("../models/student");
const { v4: uuidv4 } = require("uuid");

const createCard = async (req, res) => {
  try {
    const data = {
      cardNumber: uuidv4(),
      actv_date: new Date(),
      status: "Activated",
      type: req.body.type,
      studentId: req.body.studentId,
    };
    const newCard = await Card.create(data);
    return res.status(201).json({ newCard });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const activateCard = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (user) {
      const student = await Student.findOne({ where: { userId: user.id } });
      if (student) {
        const card = await Card.findOne({
          where: { studentId: student.id, type: req.body.type },
        });

        if (!card) {
          return res.status(201).json({ msg: "Card could not find" });
        }

        await card.update({ status: "Activated" });
        return res.status(201).json({ msg: "Card sucessfully activated" });
      }
    }
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const deactivateCard = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (user) {
      const student = await Student.findOne({ where: { userId: user.id } });
      if (student) {
        const card = await Card.findOne({
          where: { studentId: student.id, type: req.body.type },
        });

        if (!card) {
          return res.status(201).json({ msg: "Card could not find" });
        }

        await card.update({ status: "Deactivated" });
        return res.status(201).json({ msg: "Card sucessfully deactivated" });
      }
    }
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  createCard,
  activateCard,
  deactivateCard,
};
