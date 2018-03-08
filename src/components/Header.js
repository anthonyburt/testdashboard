import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {


        return (
            <nav>
                <Menu color='blue' inverted size='tiny' icon='labeled'>
                    <Menu.Item as={ Link } name='home' active={this.props.activeItem === 'home'} onClick={this.handleItemClick} to='/'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as={ Link } activeClassName="active" name='shopx'  active={this.props.activeItem === 'shopx'} onClick={this.handleItemClick} to='shopx'>
                        <Icon name='shopping bag'/>
                        Shop X
                    </Menu.Item>
                    <Menu.Item as={ Link } name='checkout' active={this.props.activeItem === 'checkout'} onClick={this.handleItemClick} to='checkout'>
                        <Icon name='credit card alternative'/>
                        Checkout
                    </Menu.Item>
                    <Menu.Item as={ Link } name='orderassist' active={this.props.activeItem === 'orderassist'} onClick={this.handleItemClick} to='/orderassist'>
                        <Icon name='doctor'/>
                        Order Assist
                    </Menu.Item>
                    <Menu.Item as= { Link} name='ordermanagement'  active={this.props.activeItem === 'ordermanagement'} onClick={this.handleItemClick} to='/ordermanagement'>
                        <Icon name='database'/>
                        Order Mgmt.
                    </Menu.Item>
                </Menu>
            </nav>
        )
    }
}

export default Header