import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
   uri: 'http://shop-roles.node.ed.asmer.org.ua/graphql',
   cache: new InMemoryCache(),
});
