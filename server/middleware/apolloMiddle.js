const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')

const apolloMiddle = (server, schema) =>
  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(async req => {
      return {
        schema,
        context: { req }
      }
    })
  )

const apolloMiddleInterFace = server => {
  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  )
}

module.exports = { apolloMiddle, apolloMiddleInterFace }
