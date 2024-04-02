const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const app = express();
const port = process.env.PORT || 5000;
const portfolioRoute = require("./routes/portfolioRoute");
const path = require("path");

app.use(express.json());
app.use("/api/portfolio", portfolioRoute);
app.use(express.static(path.join(__dirname, "./client/build")));
console.log(__dirname);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), (error) => {
    res.status(500).send(error);
  });
});

app.listen(port, async () => {
  try {
    console.log("hello! server started on port:" + port);
  } catch (error) {
    console.log(error);
  }
});
