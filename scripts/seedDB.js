const db = require("../models");
require('../initDB')();

const userSeed = [
  {
    email: "stephen@mail.com",
    firstname: "stephen",
    lastname: "price",
    password: "password"
  },
  {
    email: "trevor@mail.com",
    firstname: "trevor",
    lastname: "smith",
    password: "password"
  },
  {
    email: "dana@mail.com",
    firstname: "dana",
    lastname: "corona",
    password: "password"
  },
  {
    email: "carlos@mail.com",
    firstname: "carlos",
    lastname: "cantu",
    password: "password"
  },
  {
    email: "jake@mail.com",
    firstname: "jake",
    lastname: "hendershott",
    password: "password"
  }
];

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
