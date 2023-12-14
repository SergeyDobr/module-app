import { gql } from "@apollo/client"


export const GET_TOKEN = gql`
   query Login($login: String, $password: String) {
      login(login: $login, password: $password)
   }
`;

export const GET_CATEGORIES_SCHEMA = gql`
   query getGoods($query: String!) {
     CategoryFind(query: $query) {
       _id
       name
       image {
         url
       }
     }
   }
 `;


export const GET_GOODS = gql`
   query getGoods($query: String!) {
      CategoryFindOne(query: $query) {
         _id
         name
         goods 
            {
               _id
               name
               price
               images {
                  url
            }
            categories{
               _id
               name
            }
         }
      }
   }
`
export const GET_ONE_GOOD = gql`
    query getGoodOne($query: String!) {
        GoodFindOne(query: $query) {
            _id
            name
            description
            price
            images {
                url
            }
            categories{
               _id
            }
        }
    }
`;

export const FIND_GOODS = gql`
    query getGoods($query: String!) {
      GoodFind(query: $query) {
            _id
            name
            categories{
               _id
            }
        }
    }
`;