// const jwt = require("jsonwebtoken");
// //
// const adminRole = (req, res, next) => {
//   try {
//     const admin = req.headers.authorization.split(" ")[1];
//     const cheecks = jwt.verify(admin, "hiji");
//     req.token = cheecks;
//     next();
//   } catch (error) {
//     res.status(403);
//     res.send(error);
//   }
// };
// //
// module.exports = { adminRole };

