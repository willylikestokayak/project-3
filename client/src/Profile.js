import React, {Component} from 'react';
import User from './User';
import WatsonData from './WatsonData';
import History from './History';
import TwitterProfile from './TwitterProfile';


class Profile extends Component {
    render(){
        return(
            <div>
                User's Profile Page
                <User />
                <WatsonData />
                <History />
                <TwitterProfile />
            </div>
        )
    }
}

export default Profile;