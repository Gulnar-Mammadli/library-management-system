const express = require("express");
const app = express();
const student = require("./routes/student");
const user = require("./routes/user");
const sequelize = require("./database");
const cors = require("cors");
sequelize.sync();

app.use(cors());
app.use(express.json());

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
