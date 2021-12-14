const mongoose = require("mongoose");
const likeModel = new mongoose.Schema({
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "gameModel" },
  like:{type:Array}
});
module.exports = mongoose.model("likeModel", likeModel);