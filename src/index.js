import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import 'typeface-roboto'
import App from './components/App'

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjdz30buh2px90159fuptggd5'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

render((
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
),
document.getElementById('root')
)