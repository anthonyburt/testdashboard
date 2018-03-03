import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import EcommMain from './EcommMain'
import ShopX from './ShopX'

class Main extends Component {

  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shopx' component={ShopX}/>
          <Route path='/checkout' component={EcommMain}/>
          <Route path='/orderassist' component={EcommMain}/>
          <Route path='/ordermanagement' component={EcommMain}/>
        </Switch>
    )
  }
}

export default Main
