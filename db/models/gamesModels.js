const mongoose = require("mongoose");
//
const gameModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img: { type: String },
  img1: { type: String },
  img2: { type: String },
  img3: { type: String },
  video: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
  comment:{type:Array}
});
//
module.exports = mongoose.model("gameModel", gameModel);
