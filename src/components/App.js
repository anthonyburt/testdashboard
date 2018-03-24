import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import ShopX from './ShopX'
import Checkout from './Checkout'
import OrderManagement from './OrderManagement'
import OrderAssist from './OrderAssist'
import Header from './Header'

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
