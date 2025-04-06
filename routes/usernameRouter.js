const express = require("express")
const usernameRouter = express.Router()
const usernameController = require("../controllers/usernameController")

usernameRouter.get("/", usernameController.get)
usernameRouter.post("/", usernameController.post)

module.exports = usernameRouter
