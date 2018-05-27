const typeDefs = `
type User {
  _id: ID! @unique
  email: String! @unique
  picture: String
}

type AuthPayload {
  token: String
}
`

const queries = `
  userAllQuery: [User]
  profile: User
`

const mutations = `
  signup(email: String!, password: String!): User
  login(email: String!, password: String!): User
  logout: AuthPayload
  userDelete(_id:String!): User
`

const userSchema = { typeDefs, queries, mutations }

module.exports = userSchema
