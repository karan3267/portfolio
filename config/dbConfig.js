const mongoose= require('mongoose');
const dbUrl=`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.omcuk69.mongodb.net/portfolio`;

mongoose.connect(dbUrl);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error occured while connection to database");
});
connection.on("connected", () => {
  console.log("sucessfully connected to database");
});

module.exports = connection;
