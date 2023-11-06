
import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
   query Login($login: String, $password: String) {
      login(login: $login, password: $password)
   }
`;