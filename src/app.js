import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Squad from './pages/Squad'
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
                        path='/shopx'
                        render={(props) => <Squad squad="Shop X"/>}
                        />
                    }/>
                    <Route
                         path='/checkout'
                         render={(props) => <Squad squad="Checkout"/>}
                         />
                     }/>
                    <Route
                         path='/orderassist'
                         render={(props) => <Squad squad="Order Assist"/>}
                         />
                     }/>
                    <Route
                         path='/ordermanagement'
                         render={(props) => <Squad squad="Inventory And Order Management"/>}
                         />
                     }/>
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default App
