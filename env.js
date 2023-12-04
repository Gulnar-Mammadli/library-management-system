const envalid = require("envalid");
const { str, num } = require("envalid");

module.exports = envalid.cleanEnv(process.env, {
  DB_NAME: str({ default: "library_management_db" }),
  DB_HOST: str({ default: "localhost" }),
  DB_PORT: num({ default: 3306 }),
  DB_USER: str({ default: "root" }),
  DB_PASSWORD: num({ default: "123456" }),
});
