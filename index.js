const express = require("express");
const app = express();
const student = require("./routes/student");
const user = require("./routes/user");
const employee = require("./routes/employee");
const code = require("./routes/code");
const sequelize = require("./database");
const cors = require("cors");
sequelize.sync();

app.use(express.json());
app.use(cors());

const port = 8000;
app.listen(port, "localhost");
app.on("listening", function () {
  console.log(
    "Express server started on port %s at %s",
    server.address().port,
    server.address().address
  );
});

app.use("/students", student);
app.use("/users", user);
app.use("/employees", employee);
app.use("/codes", code);
