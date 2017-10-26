import React, {Component} from 'react';
import WatsonData from './WatsonData';
import TwitterProfile from './TwitterProfile';
import History from './History';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('mernToken'),
            user: this.props.user
        }
    }

    componentDidMount() {
        /* Here is where a call for the persons profile needs to be made. Once the verification is made the credentials will be stored in the 
        state. The credentials will be passed down as props to all the other components so that when a component loads the information will 
        be much faster to show up. */
        console.log(this.state)
        console.log(this.props)
        // var tokenLength = (this.state.token).length
        // console.log(tokenLength)
    }

    
    render(){
        // var tokenLength = (this.state.user.name).length
        // if(tokenLength === 0){
        //     return <Redirect to ='/signin'/>
        // };
        return(
            <div>
                <Router>
                    <div className="row user">
                        <div className="col s12 m6">
                            <div className="card">
                            <div className="card-content white-text">
                                <span className="card-title">Your Profile</span>
                                <p>Welcome to your Wym profile {this.state.user.name}!</p>
                            </div>
                            <div className="card-action">
                                <Link to ='/history'>Saved Wyms</Link>
                                <Link to ='/twitterprofile'>Twitter</Link>
                                <Link to ='/'>Upload new text</Link>
                            </div>
                            </div>
                            </div>
                        <Route path = '/history' component = { History }/>
                        <Route path = '/twitterprofile' component = { TwitterProfile } />
                    </div>
                </Router>
                <WatsonData />
            </div>
        )
    }
}

export default Profile;