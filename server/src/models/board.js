const mongoose = require('mongoose')
const { Schema } = mongoose

const BoardSchema = new Schema({
  title: String,
  content: String,
  startDate: String,
  endDate: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Board', BoardSchema)
