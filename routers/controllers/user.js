const userModel = require("../../db/models/userModels");
//
const userProfile = async (req, res) => {
    const userId = req.token.userId;
try {
    const user = await userModel.findOne({ _id: userId });
    res.status(200).json(user);
} catch (error) {
    res.send(error)
}
};
//
const deleteUser= async(req,res)=>{
try {
    const userId = req.token.userId;
    const user = await userModel.findOneAndDelete({ _id: userId });
    res.status(200).json(user);
} catch (error) {
    res.send(error)
}

}
//
const updateName=async(req,res)=>{
    const { name  } = req.body;
    try {
      const userId = req.token.userId;
      const response = await userModel.findOneAndUpdate(
        { _id: userId },
        { name },
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
}
//
const updateImg=async(req,res)=>{
    const { img  } = req.body;
    try {
      const userId = req.token.userId;
      const response = await userModel.findOneAndUpdate(
        { _id: userId },
        { img : img},
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
}
//
module.exports = {
    userProfile,deleteUser,updateName,updateImg
};
