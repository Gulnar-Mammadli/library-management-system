const { Sequelize } = require("@sequelize/core");
const env = require("./env");

let db;

module.exports.connect = async function () {
  //   try {
  //     if (!db) {
  //       db = new Sequelize({
  //         host: env.DB_HOST,
  //         port: env.DB_PORT,
  //         username: env.DB_USER,
  //         password: env.DB_PASSWORD,
  //         database: env.DB_NAME,
  //         dialect: "mysql",
  //       });
  //     }
  //     return db;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  try {
    db = new Sequelize({
      host: env.DB_HOST,
      port: env.DB_PORT,
      username: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      dialect: "mysql",
    });
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
