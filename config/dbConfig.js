const mongoose= require('mongoose');

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error occured while connection to database");
});
connection.on("connected", () => {
  console.log("sucessfully connected to database");
});

module.exports = connection;
