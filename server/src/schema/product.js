const queries = `
     productAllQuery:[product],
     productOneQuery(_id:String):product
`
const typeDefs = ` type product{
  _id:String,
  title:String,
  content:String,
  startDate:String,
  endDate:String 
}`

const mutations = `
  productUpdate(_id:String,title:String,content:String):product,
  productCreate(title:String,content:String):product,
  productDelete(_id:String):product
`

const productSchema = { typeDefs, queries, mutations }

module.exports = productSchema
