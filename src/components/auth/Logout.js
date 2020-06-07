
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { Auth, Hub } from 'aws-amplify';

class Logout extends Component{
    state = {
      isLogged: false
    }
  
    constructor(props){
      super(props)
      this.updateLoggedStatus = this.updateLoggedStatus.bind(this)
    }

    onSignOutClick = async () => {
        await Auth.signOut()
            .then(data => console.log("data",data))
            .catch(err => console.log("err signout",err));
        window.location.reload();
    }

    onSigninClick = async () => {
        await Auth.signIn()
            .then(data => console.log("data",data))
            .catch(err => console.log("err signin",err));
        window.location.reload();
    }

    getCurrentUsername = () => {
        return new Promise((resolve, reject) => {
         Auth.currentAuthenticatedUser()
          .then(user => {
           if (user.username) {
            console.log("user.username",user.username)
            resolve(user.username)
           } else {
            console.log("user",user)
            resolve(null)
           }
          })
          .catch(err => {
            resolve(null)
        });
        })
    }
    componentDidMount() {
        this.updateLoggedStatus();
        Hub.listen('auth', this.updateLoggedStatus);
    }
       
    componentWillUnmount() {
        Hub.remove('auth');
    }
       
    updateLoggedStatus = async () => {
        const username = await this.getCurrentUsername()
        let newLoggedStatus = false;
        if (username) newLoggedStatus = true;
        return this.setState({ isLogged: newLoggedStatus });
    }
       
    render(){
        return(
        <Menu.Item as={ Link }
            name={this.state.isLogged ? "logout" : "login"}
            onClick={this.onSignOutClick}
            to={this.state.isLogged ? "/" : "/clip"}
          >
          {this.state.isLogged ? "Logout" : "Login"}
        </Menu.Item>
        )
    }
}
  
export default Logout;
