import React from 'react'
import gql from 'graphql-tag'
import adpot from 'react-adopt'
import { Query, Mutation } from 'react-apollo'

export const loginGql = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
// tslint:disable-next-line:variable-name
export const userAllQuery = gql`
  query userAllQuery {
    userAllQuery {
      email
    }
  }
`
const loginFn = ({ render }) => (
  <Mutation mutation={loginGql} fetchPolicy="cache-and-network">
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
)
// const loginFetch = ({ render }) => (
//   <Mutation mutation={loginGql} fetchPolicy="cache-and-network">
//     {(mutation, result) => render({ mutation, result })}
//   </Mutation>
// )

export const AllGraphql = adpot({
  query: <Query query={userAllQuery} />,
  loginFn: loginFn
})
