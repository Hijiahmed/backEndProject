const likeModel=require("../../db/models/likeModels");
const userModel=require("../../db/models/userModels");
//
const postLike=async(req,res)=>{
    const id = req.params.id;
    const user = req.token.userId;
    try {
      const newLike = await userModel.findOneAndUpdate({ _id: user }, { $push: { like: id } },{new:true});
      res.status(201).json(newLike);
    } catch (error) {
      res.send(error);
    }
}
//
const getLike=(req,res)=>{

}
//
const deleteLike=(req,res)=>{

}
//
module.exports={postLike,getLike,deleteLike}