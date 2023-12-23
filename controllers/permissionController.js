const Permission = require("../models/permissions");

const createPermission = async (req, res) => {
  try {
    const newPermission = await Permission.create(req.body);
    return res.status(200).json({ newPermission });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllPermissions = async (req, res) => {
  try {
    const allPermissions = await Permission.findAll();
    return res.status(200).json({ allPermissions });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};


module.exports = {
  createPermission,
  getAllPermissions,
};
