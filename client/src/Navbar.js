import React, {Component} from 'react';
import App from './App';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import {Button, Icon, SideNav, SideNavItem} from 'react-materialize';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <Router>
                <div>
                    <nav>

                      <div className="nav-wrapper black">
                        <Link to ='/home' className="brand-logo">Watson</Link>
                        <SideNav style={{background: 'black', color: 'white', width: 220}}
                          trigger={<a href="#" data-activities="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>}
                          options={{closeClick: true}}
                        >
                          <SideNavItem className="active"><Link to ='/profile'>Profile</Link></SideNavItem>
                          <SideNavItem className="active"><Link to ='/login'>Log In</Link></SideNavItem>
                          <SideNavItem className="active"><Link to ='/signup'>Sign Up</Link></SideNavItem>
                        </SideNav>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                          <li className="active"><Link to ='/profile'>Profile</Link></li>
                          <li className="active"><Link to ='/login'>Log In</Link></li>
                          <li className="active"><Link to ='/signup'>Sign Up</Link></li>
                        </ul>
                      </div>
                    </nav>
                    <Route path='/profile' component ={Profile} />
                    <Route path='/login' component ={Login} />
                    <Route path='/sign' component ={Signup} />
                </div>
            </Router>
        );
    }
}


export default Navbar;
