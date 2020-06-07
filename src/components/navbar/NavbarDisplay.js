
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image,Icon } from 'semantic-ui-react'
import logoImage from '../../assets/img/logo.png';
import { withRouter } from 'react-router'
import Logout from '../auth/Logout'

class NavbarDisplay extends Component {
    state = {
      activeItem: ""
    }
  
    handleItemClick = (e, { name }) =>{
      this.setState({ activeItem: name })
    }


    render() {
  
      return (
        <Menu fixed='top' inverted>
          <Menu.Item>
             <Image src={logoImage} size='mini' />
          </Menu.Item>
  
          <Menu.Item as={ Link }
            name='home'
            to="/"
            active={this.state.activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name='home' size="large"/>
          </Menu.Item>
  
          <Menu.Item as={ Link }
            name='live'
            to="/live"
            active={this.state.activeItem === 'live'}
            onClick={this.handleItemClick}
          >
            Live
          </Menu.Item>
  
          <Menu.Item as={ Link } 
            to="/replays"
            name='replays'
            active={this.state.activeItem === 'replays'}
            onClick={this.handleItemClick}
          >
            Replays
          </Menu.Item>
  
          <Menu.Item as={ Link } 
            to="/clip"
            name='clip'
            active={this.state.activeItem === 'clip'}
            onClick={this.handleItemClick}
          >
            Clip
          </Menu.Item>
  
          <Menu.Menu position='right'>
            <Logout />
            <Menu.Item
              name='help'
              active={this.state.activeItem === 'help'}
              onClick={this.handleItemClick}
            >
              Help
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
  
  }
  
  export default  withRouter(NavbarDisplay);
