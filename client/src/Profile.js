import React, {Component} from 'react';
import WatsonData from './WatsonData';
import User from './User';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            this: 'that',
            token: localStorage.getItem('mernToken'),
            user: this.props.user.name
        }
    }

    componentDidMount() {
        /* Here is where a call for the persons profile needs to be made. Once the verification is made the credentials will be stored in the 
        state. The credentials will be passed down as props to all the other components so that when a component loads the information will 
        be much faster to show up. */
        console.log(this.state)
        console.log(this.props)
    }

    
    render(){
        return(
            <div>
                <div>Welcome: {this.state.user}</div>
                <User />
                <WatsonData />
            </div>
        )
    }
}

export default Profile;