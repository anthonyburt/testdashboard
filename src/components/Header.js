import React, { Component } from 'react'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'
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
            case "/shopx":
                this.setState({activeItem: 'shopx'})
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

                <Menu labeled color='blue'  size='massive'>
                    <Menu.Item as={ Link } name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} to='/'>
                        <Icon name='home' />
                    </Menu.Item>
                    <Dropdown item icon='cart' size='tiny' simple>
                        <Dropdown.Menu>
                            <Dropdown.Item as={ Link } to='/shopx'>API</Dropdown.Item>
                            <Dropdown.Item as={ Link } to='/ui'>UI</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown item icon='credit card alternative' size='tiny' simple>
                          <Dropdown.Menu>
                              <Dropdown.Item as={ Link } to='/shopx'>API</Dropdown.Item>
                              <Dropdown.Item as={ Link } to='/ui'>UI</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                </Menu>

        )
    }
}

export default Header