import React, {Component} from 'react';
import App from './App';
import Profile from './Profile';
import Login from './Login';
import SignUp from './Signup';
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
                    <Link to ='/profile'>Profile</Link>
                    <Link to ='/login'>LogIns</Link>
                    <Link to ='/signUp'>Signs Ups</Link>
                    </nav>
                    <Route path ='/profile' component = {Profile} />
                    <Route path ='/login' component = {Login} />
                    <Route path ='/signUp' component = {SignUp} />
                </div>
            </Router>
        );
    }
}

export default Navbar;