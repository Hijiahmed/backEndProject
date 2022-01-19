// const mongoose = require("mongoose");n
// mongoose.connect("mongodb://localhost:27017/gamesDR").then(
//   () => {
//     console.log("DB connected");
//   },
//   (err) => {
//     console.log(err);
//   }
// );

const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.DB_URL).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);