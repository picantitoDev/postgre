const db = require("../db/queries")

async function getUsernames() {
  const usernames = await db.getAllUsernames()
  return usernames.map((user) => user.username)
}

async function createUsernameGet(req, res) {
  // render the form
  res.render("new", { title: "New User" })
}

async function createUsernamePost(req, res) {
  const { username } = req.body
  await db.insertUsername(username)
  res.redirect("/")
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
}
