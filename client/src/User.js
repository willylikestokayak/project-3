import React, {Component} from 'react';
import TwitterProfile from './TwitterProfile';
import History from './History';
import Profile from './Profile';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class User extends Component {
    render(){
        return(
            <Router>
                <div className='userNav'>
                    here's the User Profile
                    <nav>
                        <Link to ='/history'>History</Link>
                        <Link to ='/twitterprofile'>Twitter</Link>
                        <Link to ='/profile'>Upload new text</Link>
                    </nav>
                    <Route path = '/history' component = { History }/>
                    <Route path = '/twitterprofile' component = { TwitterProfile } />
                </div>
            </Router>
        )
    }
}

export default User;
