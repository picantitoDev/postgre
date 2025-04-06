const get = (req, res) => {
  res.render("new")
}

const post = (req, res) => {
  console.log("username to be saved: ", req.body.username)
}

module.exports = {
  get,
  post,
}
