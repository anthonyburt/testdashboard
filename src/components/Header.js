import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (

            <Menu color='blue' inverted size='mini' icon='labeled' pointing secondary class="blah">
                <Menu.Item name='home'  active={activeItem === 'home'} onClick={this.handleItemClick}>
                    <Icon name='home'/>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item name='shopx'  active={activeItem === 'shopx'} onClick={this.handleItemClick}>
                    <Icon name='shopping bag'/>
                    <Link to='/shopx'>Shop X</Link>
                </Menu.Item>
                <Menu.Item name='checkout' active={activeItem === 'checkout'} onClick={this.handleItemClick}>
                    <Icon name='credit card alternative'/>
                    <Link to='/checkout'>Checkout</Link>
                </Menu.Item>
                <Menu.Item name='orderassist' active={activeItem === 'orderassist'} onClick={this.handleItemClick}>
                    <Icon name='doctor'/>
                    <Link to='/orderassist'>Order Assist</Link>
                </Menu.Item>
                <Menu.Item name='ordermanagement'  active={activeItem === 'ordermanagement'} onClick={this.handleItemClick}>
                    <Icon name='database'/>
                    <Link to='/ordermanagement'>Order Mgmt.</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Header