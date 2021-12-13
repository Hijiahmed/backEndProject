const express = require("express");
const GamesRoute = express.Router();

const { getGame, postGame,deleteGame } = require("../controllers/Game");
const { authentication } = require("../middlewares/authentication");

GamesRoute.get("/games", authentication, getGame);
GamesRoute.delete("/games/:id", authentication, deleteGame);
GamesRoute.post("/games", authentication, postGame);

module.exports = GamesRoute;
