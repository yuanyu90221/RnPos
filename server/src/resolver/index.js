const { merge } = require('lodash')

const User = require('./user')
const Board = require('./board')
const Customer = require('./customer')
const Product = require('./product')
const OutIndex = merge(User, Board, Customer, Product)
const AllResolve = [OutIndex.Query, OutIndex.Mutation]

module.exports = AllResolve
