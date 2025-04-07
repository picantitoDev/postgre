const express = require("express")
const usernameRouter = express.Router()
const usernameController = require("../controllers/usernameController")

usernameRouter.get("/", usernameController.createUsernameGet)
usernameRouter.post("/", usernameController.createUsernamePost)

module.exports = usernameRouter
