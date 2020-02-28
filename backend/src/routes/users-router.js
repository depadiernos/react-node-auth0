const express = require("express")
const usersModel = require("../models/users-model")

const router = express.Router()

router.get("/users", async (req, res, next) => {
  try {
    const users = await usersModel.find(req.user)
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get("/user", async (req, res, next) => {
  try {
    const user = await usersModel.findById(req.user.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.put("/user", async (req, res, next) => {
  try {
    const user = await usersModel.update(req.body, req.user.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

module.exports = router