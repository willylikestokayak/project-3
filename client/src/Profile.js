import React, {Component} from 'react';
import WatsonData from './WatsonData';
import History from './History';
import User from './User';
import TwitterProfile from './TwitterProfile';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            this: 'that'
        }
    }

    //componentDidMount() {
        /* Here is where a call for the persons profile needs to be made. Once the verification is made the credentials will be stored in the 
        state. The credentials will be passed down as props to all the other components so that when a component loads the information will 
        be much faster to show up. */
    //}


    render(){
        return(
            <div>
                User's Profile Page
                <User />
                <WatsonData />
            </div>
        )
    }
}

export default Profile;