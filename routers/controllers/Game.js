const gameModel = require("../../db/models/gamesModels");
const userModels = require("../../db/models/userModels")
//
const postGame = async (req, res) => {
  let { name, description, img,img1,img2,img3, video } = req.body;
  const user= req.token.userId
  const newGame =new gameModel({ name, description, img ,img1 , img2 , img3, video , user });
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
  // const id = req.params.id;
  // const user = req.token.userId;
  // try {
  //   const game = await gameModel.findOneAndDelete({ _id: id,user:user })
  //     res.status(200).json(game);
  // } catch (error) {
  //   res.send(error);
  // }
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const userAdmin = await userModels.findOne({ _id: user });
    if (userAdmin.admin == true) {
      const remove = await gameModel.findOneAndDelete({ _id: id });
      if (remove) {
        res.send("deleted");
      } else {
        res.send("can't deleted");
      }
    } else {
      const remove = await gameModel.findOneAndDelete({ _id: id, user: user });
      if (remove) {
        res.send("deleted");
      } else {
        res.send("can't deleted");
      }
    }
  } catch (error) {
    res.send(error, "error");
  }

}
//
const updateGame=async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  let  { name, description, img,img1,img2,img3, video }= req.body;
  // console.log(user,id);
  try {
    const game = await gameModel.findOneAndUpdate({_id:id}, { name, description, img,img1,img2,img3, video },{new:true})
    // const game = await gameModel.findOne({_id:id})
    console.log(game);
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
module.exports = { postGame, getGames,deleteGame,getGamee,deleteComment,addComment,updateGame };

