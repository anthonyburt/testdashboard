import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor () {
        super();
        this.state = {
        activeItem: ''
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state;

        return (

            <Menu color='blue' inverted size='tiny' icon='labeled'>
                <Menu.Item as={ Link } name='home' active={activeItem === 'home'} onClick={this.handleItemClick} to='/'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as={ Link } name='shopx'  active={activeItem === 'shopx'} onClick={this.handleItemClick} to='shopx'>
                    <Icon name='shopping bag'/>
                    Shop X
                </Menu.Item>
                <Menu.Item as={ Link } name='checkout' active={activeItem === 'checkout'} onClick={this.handleItemClick} to='checkout'>
                    <Icon name='credit card alternative'/>
                    Checkout
                </Menu.Item>
                <Menu.Item as={ Link } name='orderassist' active={activeItem === 'orderassist'} onClick={this.handleItemClick} to='/orderassist'>
                    <Icon name='doctor'/>
                    Order Assist
                </Menu.Item>
                <Menu.Item as= { Link} name='ordermanagement'  active={activeItem === 'ordermanagement'} onClick={this.handleItemClick} to='/ordermanagement'>
                    <Icon name='database'/>
                    Order Mgmt.
                </Menu.Item>
            </Menu>
        )
    }
}

export default Header