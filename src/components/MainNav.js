import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import TestResults from '../components/TestResults'

class SidebarTopPush extends Component {


  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} direction='top' visible={true} inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='shopping'>
              <Icon name='shopping bag' />
              Ecomm
            </Menu.Item>
            <Menu.Item name='payment'>
              <Icon name='payment' />
              Payments
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
             <TestResults></TestResults>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarTopPush
