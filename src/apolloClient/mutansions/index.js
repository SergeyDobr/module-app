import { gql } from "@apollo/client";

export const CREATE_NEW_USER = gql`
mutation UserUpsert($user: UserInput) {
  UserUpsert(user: $user) {
    _id
    createdAt
    login
    nick
  }
}
`; 