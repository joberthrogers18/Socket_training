const routes = require("express").Router();

const mainController = require('../controllers/mainChatController');

routes.get("/", mainController.index);

module.exports = routes;
