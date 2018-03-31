import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Tribe from './pages/Tribe'
import Header from './components/Header'

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route
                        exact path='/'
                        render={(props) => <Home />}
                        />
                    }/>
                    <Route
                        path='/ecommerce'
                        render={(props) => <Tribe tribe="E-commerce"/>}
                        />
                    }/>
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default App
