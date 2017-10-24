import React, {Component} from 'react';
import App from './App';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';

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
                        <Link to ='/home' class="brand-logo">Watson</Link>
                        <ul class="right hide-on-med-and-down">
                          <li><Link to ='/profile'>Profile</Link></li>
                          <li><Link to ='/login'>Log In</Link></li>
                          <li><Link to ='/signup'>Sign Up</Link></li>
                        </ul>
                      </div>
                    </nav>
                    <Route path='/profile' component ={Profile} />
                    <Route path='/login' component ={Login} />
                    <Route path='/sign' component ={Signup} />
                </div>
            </Router>
        )
    }
}



export default Navbar
