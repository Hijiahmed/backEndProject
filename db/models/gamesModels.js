const mongoose = require("mongoose");
//
const gameModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img: { type: String },
  extraImg: { type: Array },
  video: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
  comment:{type:Array},
  rating:{type:Number,default:0}
});
//
module.exports = mongoose.model("gameModel", gameModel);
