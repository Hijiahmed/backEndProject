const gameModel = require("../../db/models/gamesModels");
//
const postGame = async (req, res) => {
  let { name, description, img, video } = req.body;
  console.log({ name, description, img, video });
  const newGame =new gameModel({ name, description, img, video });
  try {
    const saveGame = await newGame.save();
    res.status(201).json(saveGame);
  } catch (error) {
    res.send(error);
  }
};
//
const getGame = async (req, res) => {
  try {
    const game = await gameModel.find({}).populate("user");
    res.status(200).json(game);
  } catch (error) {
    res.send(error);
  }
};
const deleteGame= async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const game = await gameModel.findOneAndDelete({ _id: id })
      res.status(200).json(game);
  } catch (error) {
    res.send(error);
  }

}
module.exports = { postGame, getGame,deleteGame };
