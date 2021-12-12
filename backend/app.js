const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());
//
const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute = require("./routers/routes/logInRoute");
app.use(signUpRoute);
app.use(loginRoute);
////////////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server is running");
});
