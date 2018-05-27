const queries = `
     boardAllQuery:[board],
     boardOneQuery(_id:String):board
`
const typeDefs = ` type board{
  _id:String,
  title:String,
  content:String,
  startDate:String,
  endDate:String  
  
}`

const mutations = `
  boardUpdate(_id:String,title:String,content:String):board,
  boardCreate(title:String,content:String):board,
  boardDelete(_id:String):board
`

const boardSchema = { typeDefs, queries, mutations }

module.exports = boardSchema
