import React, {Component} from 'react';
import User from './User';
import Entry from './Entry';
import Response from './Response';

class Profile extends Component {
    render(){
        return(
            <div>
                User's Profile Page
                <User />
                <Entry />
                <Response />
            </div>
        )
    }
}

export default Profile