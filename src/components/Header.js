import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: ''}
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        return (

                <Menu color='blue' inverted size='tiny' icon='labeled'>
                    <Menu.Item as={ Link } name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} to='/'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as={ Link } name='shopx'  active={this.state.activeItem === 'shopx'} onClick={this.handleItemClick} to='shopx'>
                        <Icon name='shopping bag'/>
                        Shop X
                    </Menu.Item>
                    <Menu.Item as={ Link } name='checkout' active={this.state.activeItem === 'checkout'} onClick={this.handleItemClick} to='checkout'>
                        <Icon name='credit card alternative'/>
                        Checkout
                    </Menu.Item>
                    <Menu.Item as={ Link } name='orderassist' active={this.state.activeItem === 'orderassist'} onClick={this.handleItemClick} to='/orderassist'>
                        <Icon name='doctor'/>
                        Order Assist
                    </Menu.Item>
                    <Menu.Item as= { Link } name='ordermanagement'  active={this.state.activeItem === 'ordermanagement'} onClick={this.handleItemClick} to='/ordermanagement'>
                        <Icon name='database'/>
                        Order Mgmt.
                    </Menu.Item>
                </Menu>

        )
    }
}

export default Header