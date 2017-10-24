import React, {Component} from 'react';
import App from './App';
import Profile from './Profile';
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
                    </nav>
                    <Route path='/profile' component ={Profile} />
                </div>
            </Router>
        )
    }
}

export default Navbar