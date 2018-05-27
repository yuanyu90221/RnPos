const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const config = require('./config')

require('./src/models/customer')
require('./src/models/user')
require('./src/models/board')
require('./src/models/product')

const schema = require('./src')
const {
  apolloMiddleInterFace,
  apolloMiddle
} = require('./middleware/apolloMiddle')

mongoose.Promise = global.Promise
mongoose.connect(config.mongoURI)

const port = process.env.PORT || 8080

const server = express()

server.use(cors({ credentials: true, origin: config.origin }))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]
  })
)

apolloMiddle(server, schema)
apolloMiddleInterFace(server)

server.listen(port, err => {
  if (err) throw err
  // eslint-disable-next-line no-console
  console.log(`> ready on http://localhost:${port}`)
})
