import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: `https://${process.env.GATSBY_WORDPRESS_URL}/graphql`,
  fetch,
})
