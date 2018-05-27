const mongoose = require('mongoose')

const Product = mongoose.model('Product')

const Query = {
  Query: {
    productAllQuery: () => {
      const products = Product.find()
      return products
    }
  }
}
const Mutation = {
  Mutation: {
    productCreate: async (_, { title, content }) => {
      const product = new Product({ title, content })
      //console.log('productCreate', product)
      await product.save()
      return product
    },
    productUpdate: async (_, { _id, title, content }) => {
      await Product.findOneAndUpdate({ _id }, { title, content })
      return _id
    },
    productDelete: async (_, { _id }) => {
      await Product.findOneAndRemove({ _id })
      return { _id }
    }
  }
}

module.exports = { Query, Mutation }
