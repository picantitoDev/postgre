const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const usernameController = require("./controllers/usernameController")
const usernameRouter = require("./routes/usernameRouter")

app.get("/", async (req, res) => {
  const users = await usernameController.getUsernames() // returns array of usernames
  res.render("index", { users })
})

app.use("/new", usernameRouter)

app.listen(8080, () => {
  console.log("Running on localhost...")
})
