const pool = require("./pool")

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames")
  return rows
}

async function getUsernamesMatching(word) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username LIKE $1",
    [`%${word}%`]
  )
  return rows
}

async function deleteUsernames() {
  await pool.query("TRUNCATE TABLE usernames")
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username])
}

module.exports = {
  getAllUsernames,
  deleteUsernames,
  insertUsername,
  getUsernamesMatching,
}
