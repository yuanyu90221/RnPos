const mongoose = require('mongoose')

const { getUserId } = require('../utils')

const Customer = mongoose.model('Customer')

const Query = {
  Query: {
    customerAllQuery: async (parent, args, ctx) => {
      getUserId(ctx)
      const customers = await Customer.find()
      return customers
    }
  }
}

const Mutation = {
  Mutation: {
    customerCreate: async (_, { name, tel, cellphone, memo }) => {
      const customer = new Customer({ name, tel, cellphone, memo })
      await customer.save()
      return customer
    },
    customerUpdate: async (_, { _id, name, tel, cellphone, memo }) => {
      await Customer.findOneAndUpdate({ _id }, { name, tel, cellphone, memo })
      return _id
    },
    customerDelete: async (_, { _id }) => {
      await Customer.findOneAndRemove({ _id })
      return { _id }
    }
  }
}

module.exports = { Query, Mutation }
