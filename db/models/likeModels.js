const mongoose = require("mongoose");
const likeModel = new mongoose.Schema({

  user:{type: mongoose.Schema.Types.ObjectId, ref: "userModel"},
  like:[{type: mongoose.Schema.Types.ObjectId, ref: "gameModel"}]
});
module.exports = mongoose.model("likeModel", likeModel);