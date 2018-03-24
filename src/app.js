import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import ShopX from './pages/ShopX'
import Checkout from './pages/Checkout'
import OrderManagement from './pages/OrderManagement'
import OrderAssist from './pages/OrderAssist'
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
                        render={(props) => <ShopX squad="Shop X"/>}
                        />
                    }/>
                    <Route
                         path='/checkout'
                         render={(props) => <Checkout squad="Checkout"/>}
                         />
                     }/>
                    <Route
                         path='/orderassist'
                         render={(props) => <OrderAssist squad="Order Assist"/>}
                         />
                     }/>
                    <Route
                         path='/ordermanagement'
                         render={(props) => <OrderManagement squad="Inventory And Order Management"/>}
                         />
                     }/>
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default App
