const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const usernameController = require("./controllers/usernameController")
const usernameRouter = require("./routes/usernameRouter")
const deleteUsernameRouter = require("./routes/deleteUsernameRouter")

app.get("/", usernameController.handleHomePage)

app.use("/new", usernameRouter)

app.use("/delete", deleteUsernameRouter)

app.listen(8080, () => {
  console.log("Running on localhost...")
})
