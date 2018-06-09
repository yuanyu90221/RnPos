import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

export const loginGql = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const signUpGql = gql`
  mutation signup($email: String!, $password: String!, $nickname: String!) {
    signup(email: $email, password: $password, nickname: $nickname) {
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

export const queryFn = <Query query={userAllQuery} />

export const loginFn = ({ render }) => (
  <Mutation mutation={loginGql} fetchPolicy="cache-and-network">
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
)

export const signUpFn = ({ render }) => (
  <Mutation mutation={signUpGql} fetchPolicy="cache-and-network">
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
)

// const loginFetch = ({ render }) => (
//   <Mutation mutation={loginGql} fetchPolicy="cache-and-network">
//     {(mutation, result) => render({ mutation, result })}
//   </Mutation>
// )

// export const CrudContainer = adopt({
//   query: <Query query={userAllQuery} fetchPolicy="network-only" />,
//   loginFn: loginFn
// })
