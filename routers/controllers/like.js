const likeModel=require("../../db/models/likeModels");
const userModel=require("../../db/models/userModels");
//
const postLike=async(req,res)=>{
    const id = req.params.id;
    const user = req.token.userId;
    try {
      const newLike = await likeModel.findOneAndUpdate({ user:user }, { $push: { like: id } },{new:true}).populate("user")
      res.status(201).json(newLike);
    } catch (error) {
      res.send(error);
    }
}
//
const getLike= async(req,res)=>{
  const user = req.token.userId;
  try {
    const like = await likeModel.findOne({user}).populate("like")
    res.status(200).json(like.like);
  } catch (error) {
    res.send(error);
  }
}
//
const deleteLike= async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const deleteLike = await likeModel.findOneAndUpdate({ user: user }, { $pull: { like: id } },{new:true}).populate("user")
    res.status(200).json(deleteLike);
  } catch (error) {
    res.send(error);
  }
}
//
module.exports={postLike,getLike,deleteLike}