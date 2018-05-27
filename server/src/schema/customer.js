const typeDefs = `type Customer {
  _id: String,
  name: String,
  tel: String,
  cellphone: String,
  memo: String
}`

const queries = `
  customerAllQuery: [Customer]
`

const mutations = `
  customerCreate(name: String, tel: String, cellphone: String, memo: String): Customer
  customerUpdate(_id: String, name: String, tel: String, cellphone: String, memo: String): Customer
  customerDelete(_id: String): Customer
`

const CustomerSchema = { typeDefs, queries, mutations }

module.exports = CustomerSchema
