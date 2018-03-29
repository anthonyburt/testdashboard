import React, { Component } from 'react'
import { Menu, Tab } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import API_dash from '../components/API_dash'
import UI_dash from '../components/UI_dash'
import Performance_dash from '../components/Performance_dash'


export default class Squad extends Component {

    render() {

        const panes = [
          {
            menuItem: { key: 'api', content: 'API' },
            render: () => <Tab.Pane><API_dash tribe={this.props.tribe} /></Tab.Pane>,
          },
          {
            menuItem: { key: 'ui', content: 'Selenium' },
            render: () => <Tab.Pane><UI_dash tribe={this.props.tribe} /></Tab.Pane>,
          },
          {
              menuItem: { key: 'performance', content: 'Performance' },
              render: () => <Tab.Pane><Performance_dash/></Tab.Pane>,
            },
        ]

        return (
            <Tab panes={panes} />
        )
    }
}
