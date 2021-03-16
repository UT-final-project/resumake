const mongoose = require("mongoose");
const db = require("../models");
require('../initDB')();

// This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/reactreadinglist"
// );

const userSeed = [
  {
    email: "stephen@mail.com",
    firstname: "stephen",
    lastname: "price",
    password: "password"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });