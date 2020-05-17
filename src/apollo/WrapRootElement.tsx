import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './client'

export const WrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
