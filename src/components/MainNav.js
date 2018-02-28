import React, { Component } from 'react'
import { Dropdown, Segment, Menu, Icon, Sidebar } from 'semantic-ui-react'
import TestResults from '../components/TestResults'

class SidebarTopPush extends Component {


  render() {
    return (
        <Segment.Group>
            <Segment>
                <Menu>
                    <Menu.Item icon='home'>
                      Home
                    </Menu.Item>
                    <Dropdown text='E-Commerce' pointing className='link item'>
                      <Dropdown.Menu>
                        <Dropdown.Header>Tribes</Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item>Shop X</Dropdown.Item>
                        <Dropdown.Item>Checkout</Dropdown.Item>
                        <Dropdown.Item>Order Assist</Dropdown.Item>
                        <Dropdown.Item>Order Mgmt.</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown text='Payments' pointing className='link item'>
                      <Dropdown.Menu>
                        <Dropdown.Header>Tribes</Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item>Tribe 1</Dropdown.Item>
                        <Dropdown.Item>Tribe 2</Dropdown.Item>
                        <Dropdown.Item>Tribe 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </Segment>
            <Segment attached='bottom'>
            <TestResults></TestResults>
           </Segment>
           </Segment.Group>



    

    )
  }
}

export default SidebarTopPush
