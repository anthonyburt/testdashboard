import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import EcommMain from './EcommMain'
import ShopX from './ShopX'

class Main extends Component {

    render() {
        return (
            <Switch>
                <Route
                    exact path='/'
                    render={(props) => <Home {...props} activeItem="home" />}
                    />
                }/>
                <Route path='/shopx' render={ ()  => <ShopX
                    activeItem={'shopx'}
                    />
                }/>
                <Route path='/checkout' component={EcommMain}/>
                <Route path='/orderassist' component={EcommMain}/>
                <Route path='/ordermanagement' component={EcommMain}/>
                <Redirect to="/" />
            </Switch>
        )
    }
}

export default Main
