const express = require("express");
const app = express();
const student = require("./routes/student");
const sequelize = require("./database");

// const user = require("./routes/user");

sequelize.sync();

const port = 8000;
app.listen(port, () => {
  console.log("connected");
});

app.use(express.json());
app.use("/students", student);
