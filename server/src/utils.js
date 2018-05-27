const jwt = require('jsonwebtoken')

const config = require('../config')

function getUserId(ctx) {
  const userToken = ctx.req.session.userToken
  if (userToken) {
    const token = userToken.replace('Bearer ', '')
    const { userId } = jwt.verify(token, config.secret)
    return userId
  }
  throw new Error('Not authenticated')
}

module.exports = {
  getUserId
}
