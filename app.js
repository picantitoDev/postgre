const express = require("express")
const app = express()
app.set("view engine", "ejs")

const usernameRouter = require("./routes/usernameRouter")

app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip")
})

app.use("/new", usernameRouter)
