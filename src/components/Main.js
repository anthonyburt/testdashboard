import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import EcommMain from './EcommMain'
import PaymentsMain from './PaymentsMain'

class Main extends Component {

  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/ecommerce' component={EcommMain}/>
          <Route path='/payments' component={PaymentsMain}/>
        </Switch>
    )
  }
}

export default Main
