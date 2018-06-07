import gql from 'graphql-tag'
import adpot from 'react-adopt'

export const loginGql = gql`
      mutaion login($email:String,$password:String){
          login(email:$email,password:$password){
           token 
          }
      }
`
// tslint:disable-next-line:variable-name
const userAllQuery = gql`
  query userAllQuery {
    userAllQuery {
      email
    }
  }
`

const loginFetch = ({ render }) => (
  <Mutation mutation={loginGql} fetchPolicy="cache-and-network">
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
)

export const AllGraphql = adpot({
  query: <Query query={userAllQuery} />,
  login: loginFetch
})
