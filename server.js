const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const app = express();
const port = process.env.PORT || 8000;
const portfolioRoute = require("./routes/portfolioRoute");
const path =require('path');


app.use(express.json());
app.use("/api/portfolio", portfolioRoute);
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), (error) => {
    res.status(500).send(error);
  });
});

app.listen(port, () => {
  console.log("hello! server started on port:" + port);
});
