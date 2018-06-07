const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/user')
const config = require('../../config')

// const { getUserId } = require('../utils')

const Query = {
  Query: {
    profile: async (parent, args, ctx) => {
      const user = await User.findOne({ _id })
      return user
    },

    userAllQuery: async () => User.find()
  }
}

const Mutation = {
  Mutation: {
    signup: async (_, args, ctx) => {
      let user = new User()
      user.email = args.email
      user.password = args.password
      user.picture = user.gravatar()

      const existingUser = await User.findOne({ email: args.email })

      if (existingUser) {
        throw new Error('Account with that email is already exist')
      } else {
        user.save()

        const token = jwt.sign(
          {
            userId: user._id
          },
          config.secret,
          {
            expiresIn: '7d'
          }
        )

        // ctx.req.session.userToken = token

        return user
      }
    },

    login: async (_, args, ctx) => {
      const user = await User.findOne({ email: args.email })

      if (!user) {
        throw new Error('No such user found')
      }

      const valid = await bcrypt.compare(args.password, user.password)
      if (!valid) {
        throw new Error('Invalid password')
      }

      const token = jwt.sign(
        {
          userId: user._id
        },
        config.secret,
        {
          expiresIn: '7d'
        }
      )

      //ctx.req.session.userToken = token

      return token
    },

    logout: async (_, args, ctx) => {
      const token = ctx.req.session.userToken
      ctx.req.session.userToken = null

      return {
        token
      }
    },

    userDelete: async (_, { _id }) => {
      await User.findOneAndRemove({ _id })
      return { _id }
    }
  }
}

module.exports = { Query, Mutation }
