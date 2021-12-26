const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  img:{type:String ,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKC_-LmsI_OXxtCSTOMuYyqQxlHMxfsFPGQ&usqp=CAU"},
  admin:{type:Boolean}
});
module.exports = mongoose.model("userModel", userModel);
