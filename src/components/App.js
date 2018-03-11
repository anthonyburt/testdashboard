import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import EcommMain from './EcommMain'
import ShopX from './ShopX'
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
                        render={(props) => <ShopX />}
                        />
                    }/>
                    <Route path='/checkout' component={EcommMain}/>
                    <Route path='/orderassist' component={EcommMain}/>
                    <Route path='/ordermanagement' component={EcommMain}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default App
