import React from 'react'
import ReactDOM from 'react-dom'
import TestResults from './components/TestResults'
import Test from './components/Test'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjdz30buh2px90159fuptggd5'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route path='/' component={TestResults} />
    </BrowserRouter>
  </ApolloProvider>
  ),
  document.getElementById('root')
)