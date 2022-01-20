const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
require("./db/db");
app.use(express.json());
app.use(cors());
//
const GamesRoute = require("./routers/routes/gamesRoute");
const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute = require("./routers/routes/logInRoute");
const LikeRoute=require("./routers/routes/likeRoute")
const userRoute=require("./routers/routes/userRoute")
//
app.use(LikeRoute)
app.use(GamesRoute);
app.use(signUpRoute);
app.use(loginRoute);
app.use(userRoute)
////////////////////////////
console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
