import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {store} from "../store"

const httpLink = createHttpLink({
   uri: 'http://shop-roles.node.ed.asmer.org.ua/graphql',
 });
 
 const authLink = setContext((_, { headers }) => {
   const token = store.getState().user.token;
   return {
     headers: {
       ...headers,
       authorization: token ? `Bearer ${token}` : "",
     }
   }
 });


export const client = new ApolloClient({
   cache: new InMemoryCache(),
   link: authLink.concat(httpLink)
});

