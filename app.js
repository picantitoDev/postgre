const express = require("express")
const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const usernameRouter = require("./routes/usernameRouter")

app.get("/", (req, res) => {
  res.render("index")
  console.log("usernames will be logged here - wip")
})

app.use("/new", usernameRouter)

app.listen(8080, () => {
  console.log("Running on localhost...")
})
