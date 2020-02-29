const express = require("express")
const cors = require("cors")
const usersRouter = require("./routes/users-router")
const authorization = require("./middleware/authorization")


const server = express()
const port = process.env.PORT || 5000

const logger = () => (req, res, next) => {
  console.log(
    `[${new Date().toISOString()}]: ${req.method} - ${req.url} `,
    req.params ? req.params : null` - ${req.ip} \n`,
    req.body
  )
  next()
}


server.use(cors())
server.use(logger())

server.use("/api/", authorization, usersRouter)

server.get("/", (req, res) => {
  res.json({ message: "Backend API" })
})

server.use((err, req, res, next) => {
  console.log(err)
  if (err.message) {
    res.status(500).json({ message: err.message })
  }
  res.status(500).json({ message: err })
})

if (!module.parent) {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

module.exports = server
