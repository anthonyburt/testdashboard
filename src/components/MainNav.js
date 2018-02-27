import React, { Component } from 'react'
import { Dropdown, Segment, Menu, Icon } from 'semantic-ui-react'
import TestResults from '../components/TestResults'

class SidebarTopPush extends Component {


  render() {
    return (
        <div>
            <Menu attached='top' inverted>
                <Menu.Item name='home' >
                    <Icon name='home' />
                </Menu.Item>

                <Dropdown item icon='shopping bag' simple>
                    <Dropdown.Menu>
                        <Dropdown.Item>Shop X</Dropdown.Item>
                        <Dropdown.Item>Checkout</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Order Assist</Dropdown.Item>
                        <Dropdown.Item>Inventory Management</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown item icon='payment' simple>
                    <Dropdown.Menu>
                        <Dropdown.Item>Tribe 1</Dropdown.Item>
                        <Dropdown.Item>Tribe 2</Dropdown.Item>
                        <Dropdown.Item>Tribe 3</Dropdown.Item>
                        <Dropdown.Item>Tribe 4</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>

            <Segment attached='bottom'>
                <TestResults></TestResults>
            </Segment>
        </div>
    )
  }
}

export default SidebarTopPush
