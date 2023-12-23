const User = require("../models/user");
const UserPermissions = require("../models/userPermissions");
const Permissions = require("../models/permissions");

const checkPermission = async (req, res, next) => {
  try {
    const { username } = req.query;
    console.log("username", username);
    const user = await User.findOne({
      where: { username: username },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const route = req.baseUrl + req.path;
    const method = req.method;

    const userPermissions = await UserPermissions.findAll({
      where: { userId: user.id },
    });
    console.log("user permisions", userPermissions);
    if (!userPermissions) {
      return res.status(404).json({ msg: "Permission not found" });
    }

    let hasPermission = false;

    const result = userPermissions.map(async (permission) => {
      const response = await Permissions.findOne({
        where: { id: permission.permissionId, method, route },
      });
      console.log("has permission", response);
      if (response && response.hasPermission) {
        hasPermission = true;
      }
    });

    await Promise.all(result);

    if (hasPermission) {
      next();
    } else {
      res.status(403).json({ error: "Insufficient permissions" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { checkPermission };
