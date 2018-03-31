import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

import ApiDash from '../components/API_Dash'
import UiDash from '../components/UI_Dash'
import PerformanceDash from '../components/Performance_dash'


export default class Tribe extends Component {

    render() {

        const panes = [
          {
            menuItem: { key: 'api', content: 'API' },
            render: () => <Tab.Pane><ApiDash tribe={this.props.tribe} /></Tab.Pane>,
          },
          {
            menuItem: { key: 'ui', content: 'Selenium' },
            render: () => <Tab.Pane><UiDash tribe={this.props.tribe} /></Tab.Pane>,
          },
          {
              menuItem: { key: 'performance', content: 'Performance' },
              render: () => <Tab.Pane><PerformanceDash/></Tab.Pane>,
            },
        ]

        return (
            <Tab panes={panes} />
        )
    }
}
