const express = require("express");
const GamesRoute = express.Router();
//
const { getGames, postGame,deleteGame,getGamee,addComment,deleteComment,updateGame } = require("../controllers/Game");
const { authentication } = require("../middlewares/authentication");
//
GamesRoute.get("/games", getGames);
GamesRoute.get("/game/:id", getGamee);
GamesRoute.delete("/games/:id", authentication, deleteGame);
GamesRoute.post("/games", authentication, postGame);
GamesRoute.put("/game/:id",authentication,updateGame);
//
GamesRoute.post("/comment/:id", authentication, addComment);
GamesRoute.put("/comment/:id", authentication, deleteComment);
//
module.exports = GamesRoute;
