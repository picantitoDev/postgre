const express = require("express")
const usernameRouter = express.Router()

usernameRouter.get("/", usernameController.get)
usernameRouter.post("/", usernameController.post)

module.exports = usernameRouter
