import React, {Component} from 'react';
import App from './App';
import Profile from './Profile';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {Button, Icon, SideNav, SideNavItem, Modal} from 'react-materialize';
import { findDOMNode } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

// function requireAuth(nextState, replace){
//         console.log("AUTH IS REQUIRED")
//         if (this.state.token === null) {
//             replace({
//             pathname: '/login',
//             state: { nextPathname: nextState.location.pathname }
//             })
//         }
//       };

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          token: {},
          user: {}
        }
        this.liftTokenToState = this.liftTokenToState.bind(this)
        this.logOut = this.logOut.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
      }
      liftTokenToState(data) {
        this.setState({
            token: data.token,
            user: data.user,
            isLoggedIn: true
        })
      }
      logOut(event){
        event.preventDefault();
        localStorage.removeItem('mernToken')
        console.log("LOGOUT CLICKED")
        this.setState({
            token: {},
            user: {},
            isLoggedIn: false
        })
      }
      handleLogIn(){
          this.setState({
              
          })
      }
      componentDidMount(){
        console.log(this.state);
        
        
      }
      componentDidUpdate(){
        console.log(this.state);

      }

    render(){
        if (this.state.isLoggedIn){
        return(
            <Router>
                <div>
                    <nav>
                      <div className="nav-wrapper navbar">
                        <Link to ='/' className="brand-logo">WYM</Link>
                        <SideNav style={{background: '#0b132b', color: 'white', width: 220}}
                          trigger={<a href="#" data-activities="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>}
                          options={{closeClick: true}}
                        >
                          <SideNavItem className="links"><Link to ='/profile'>Profile</Link></SideNavItem>
                          <SideNavItem className="links"><Link to ='/login'>Log In</Link></SideNavItem>
                          <SideNavItem className="links"><Link to ='/signup'>Sign Up</Link></SideNavItem>
                        </SideNav>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                          <li className="links"><Link to ='/profile'>Profile</Link></li>
                          <li className="links"><a href="/logout" onClick={this.logOut}>log out</a></li>
                        </ul>
                      </div>
                    </nav>
                    <Route exact path="/" component = {Home} />
                    <Route path='/profile' render={(props) => ( 
                        <Profile {...props} user={this.state.user}  />
                    )}  />
                    <Route path='/login' render={(props) => (
                        <Login {...props} lift={this.liftTokenToState}  />
                    )} />
                    <Route path='/signup' render={(props) => (
                        <Signup {...props} lift={this.liftTokenToState} />
                    )} />
                </div>
            </Router>
        );
    } else {
        return(
            <Router>
                <div>
                    <nav>
                      <div className="nav-wrapper navbar">
                        <Link to ='/' className="brand-logo">WYM</Link>
                        <SideNav style={{background: '#0b132b', color: 'white', width: 220}}
                          trigger={<a href="#" data-activities="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>}
                          options={{closeClick: true}}
                        >
                          <SideNavItem><Link to ='/profile'>Profile</Link></SideNavItem>
                          <SideNavItem><Link to ='/login'>Log In</Link></SideNavItem>
                          <SideNavItem><Link to ='/signup'>Sign Up</Link></SideNavItem>
                        </SideNav>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                          {/* <li className="active"><Link to ='/profile'>Profile</Link></li> */}
                          <li className="active"><Link to ='/login'>Log In</Link></li>
                          <li className="active"><Link to ='/signup'>Sign Up</Link></li>
                          {/* <li><a href="/logout" onClick={this.logOut}>log out</a></li> */}
                        </ul>
                      </div>
                    </nav>
                    <Route exact path="/" component = {Home} />
                    <Route path='/profile' render={(props) =>  this.state.token ? ( 
                        <Profile {...props} user={this.state.user}  />
                    ): <Login {...props} lift={this.liftTokenToState} />}  />
                    <Route path='/login' render={(props) => (
                        <Login {...props} lift={this.liftTokenToState} />
                    )} />
                    <Route path='/signup' render={(props) => (
                        <Signup {...props} lift={this.liftTokenToState} />
                    )} />
                </div>
            </Router>
        )
    }
}   
}

export default Navbar;
