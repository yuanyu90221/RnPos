const mongoose = require('mongoose')
const { Schema } = mongoose
const productSchema = new Schema({
  title: String,
  content: String,
  startDate: String,
  endDate: String
})

module.exports = mongoose.model('Product', productSchema)
