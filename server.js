const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const app = express();
const port = process.env.port || 8000;
const portfolioRoute = require('./routes/portfolioRoute');

app.use(express.json());
app.use('/api/portfolio',portfolioRoute);

app.listen(port, () => {
  console.log("hello! server started on port:" + port);
});
