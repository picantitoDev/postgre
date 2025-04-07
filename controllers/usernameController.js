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

async function searchUsernameGet(word) {
  const usernames = await db.getUsernamesMatching(word)
  return usernames.map((user) => user.username)
}

async function handleHomePage(req, res) {
  const query = req.query.search
  const users = query ? await searchUsernameGet(query) : await getUsernames()
  res.render("index", { users })
}

async function deleteUsernames(req, res) {
  await db.deleteUsernames()
  res.send("All data has been deleted")
}

module.exports = {
  deleteUsernames,
  getUsernames,
  handleHomePage,
  createUsernameGet,
  createUsernamePost,
  searchUsernameGet,
}
