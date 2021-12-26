const express = require("express");
const GamesRoute = express.Router();
//
const { getGames, postGame,deleteGame,getGamee,addComment,deleteComment } = require("../controllers/Game");
const { authentication } = require("../middlewares/authentication");
//
GamesRoute.get("/games", authentication, getGames);
GamesRoute.get("/game/:id", authentication, getGamee);
GamesRoute.delete("/games/:id", authentication, deleteGame);
GamesRoute.post("/games", authentication, postGame);
//
GamesRoute.post("/comment/:id", authentication, addComment);
GamesRoute.put("/comment/:id", authentication, deleteComment);
//
module.exports = GamesRoute;
