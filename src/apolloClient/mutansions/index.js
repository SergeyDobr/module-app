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

export const ADD_USERS_ORDER = gql`
mutation newOrder($goods: [OrderGoodInput]) {
  OrderUpsert(order: {orderGoods: $goods}) {
    _id
  }
}
`;