import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: ''}
    }

    componentDidMount() {
          switch(document.location.pathname) {
            case "/home":
                this.setState({activeItem: 'home'})
                break;
            case "/ecommerce":
                this.setState({activeItem: 'ecommerce'})
                break;
            case "/checkout":
                this.setState({activeItem: 'checkout'})
                break;
            case "/orderassist":
                this.setState({activeItem: 'orderassist'})
                break;
            case "/ordermanagement":
                this.setState({activeItem: 'ordermanagement'})
                break;
            default:
                this.setState({activeItem: 'home'})
          }
       }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        return (

                <Menu labeled="true" color='blue'  size='massive'>
                    <Menu.Item as={ Link } name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} to='/'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as={ Link } name='ecommerce' active={this.state.activeItem === 'ecommerce'} onClick={this.handleItemClick} to='/ecommerce'>
                        <Icon name='cart' />
                        E-commerce
                    </Menu.Item>
                </Menu>

        )
    }
}

export default Header