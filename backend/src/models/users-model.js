const db = require("../../db/db-config")

const find = (user) => {
  if (user.admin) {
    return db("users").select("id", "email", "name")
  }
  return []
}

const findBy = (filter) => {
  return db("users")
    .where(filter)
    .select(["id", "email", "name", "password", "avatar_url", "goal"])
    .first()
}

const findById = (id) => {
  return db("users")
    .where({ id })
    .first("id", "email", "name")
}

const add = async ({ email, name, password, admin }) => {
  const [id] = await db("users").insert(
    { email, name, password, admin },
    process.env.NODE_ENV === "production" ? "id" : null
  )
  return findById(id)
}

const update = async (user, id) => {
  await db("users")
    .where({ id })
    .update(user)
  return findBy({ id })
}

const remove = (id) => {
  return db("users")
    .where({ id })
    .del()
}

module.exports = { find, findBy, findById, add, update, remove }
