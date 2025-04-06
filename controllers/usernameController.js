const get = (req, res) => {
  res.render("new", { title: "New User" })
}

const post = (req, res) => {
  console.log("username to be saved: ", req.body.username)
  res.redirect("/")
}

module.exports = {
  get,
  post,
}
