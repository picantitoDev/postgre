const express = require("express")
const deleteUsernameRouter = express.Router()
const usernameController = require("../controllers/usernameController")

deleteUsernameRouter.get("/", usernameController.deleteUsernames)
module.exports = deleteUsernameRouter
