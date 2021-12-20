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
const updateName=(req,res)=>{

}
//
const updateImg=(req,res)=>{

}
module.exports = {
    userProfile,deleteUser,updateName,updateImg
};
