const gameModel = require("../../db/models/gamesModels");
//
const postGame = async (req, res) => {
  let { name, description, img, video } = req.body;
  const user= req.token.userId
  const newGame =new gameModel({ name, description, img, video ,user});
  try {
    const saveGame = await newGame.save();
    res.status(201).json(saveGame);
  } catch (error) {
    res.send(error);
  }
};
//
const getGames = async (req, res) => {
  try {
    const game = await gameModel.find({}).populate("user");
    res.status(200).json(game);
  } catch (error) {
    res.send(error);
  }
};
//
const deleteGame= async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const game = await gameModel.findOneAndDelete({ _id: id,user:user })
      res.status(200).json(game);
  } catch (error) {
    res.send(error);
  }
}
//
const getGamee = async (req, res)=> {
  const id = req.params.id
  try {
    const response = await gameModel.findOne({_id:id}).populate("user")
    res.status(200).json(response);
  } catch (error) {
    res.send(error);
  }
}
//
const addComment = (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  const user = req.token.userId;
  const userName=req.token.userName
  gameModel
    .findOneAndUpdate({ _id: id }, { $push: { comment: {comment, userName} } },{
      new: true
    })
    .populate("user")
    .then((result) => {
      res.send(result);
    }).catch(err=>{
      res.send(err)
    });
};
//
const deleteComment = (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  const user = req.token.userId;
  const userName=req.token.userName
  gameModel
    .findOneAndUpdate({ _id: id }, { $pull: { comment: {comment, userName} } },{
      new: true
    })
    .populate("user")
    .then((result) => {
      res.send(result);
    }).catch(err=>{
      res.send(err)
    });
};
//
module.exports = { postGame, getGames,deleteGame,getGamee,deleteComment,addComment };

