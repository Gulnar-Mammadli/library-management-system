const express = require("express");
const app = express();
const student = require("./routes/student");
const employee = require("./routes/employee");
const code = require("./routes/code");
const user = require("./routes/user");
const book = require("./routes/book");
const subject = require("./routes/subject");
const author = require("./routes/author");
const publisher = require("./routes/publisher");
const borrowing = require("./routes/borrowing");
const copy = require("./routes/copy");
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
app.use("/books", book);
app.use("/subjects", subject);
app.use("/authors", author);
app.use("/publishers", publisher);
app.use("/copies", copy);
app.use("/borrowings", borrowing);
