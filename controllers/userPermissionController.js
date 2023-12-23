const UserPermission = require("../models/userPermissions");

const createUserPermission = async (req, res) => {
  try {
    const { userId, permissionId } = req.body;

    const existingPermission = await UserPermission.findOne({
      where: { userId, permissionId },
    });

    if (existingPermission) {
      return res.status(400).json({ msg: "Permission already exists for the user." });
    }

    // If the permission doesn't exist, create a new one
    const newUserPermission = await UserPermission.create({ userId, permissionId });

    return res.status(200).json({ newUserPermission });
  } catch (error) {
    return res.status(500).json({ msg: error});
  }
};

const getAllUserPermissions = async (req, res) => {
  try {
    const allUserPermissions = await UserPermission.findAll();
    return res.status(200).json({ allUserPermissions });
  } catch (error) {
    return res.status(500).json({ msg: error});
  }
};

module.exports = {
  createUserPermission,
  getAllUserPermissions,
};
