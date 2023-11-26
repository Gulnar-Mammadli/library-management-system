const express = require("express");
const app = express();
const { connect } = require("./database");

const port = 8000;
app.listen(port, () => {
  console.log("connected");
});

connect();
app.use(express.json());
