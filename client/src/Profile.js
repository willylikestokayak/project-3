import React, {Component} from 'react';
import User from './User';
import Entry from './Entry';
import Response from './Response';

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

    /* THIS IS FOR THE ENTRY COMPONENT */



    /* END OF ENTRY COMPONENT */

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