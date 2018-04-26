import React, { Component } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
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
    handleSignIn = (e, { name }) => {

    }

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
                <Menu.Menu position='right'>

                    <Menu.Item>
                        <Button
                            primary
                            animated
                            onClick={this.handleSignIn}
                        >
                            <Button.Content visible>Sign in</Button.Content>
                            <Button.Content hidden>
                                <Icon name='sign in' />
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header