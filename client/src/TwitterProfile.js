import React, {Component} from 'react';
import User from './User';
import TweetAnalysis from './TweetAnalysis';

class TwitterProfile extends Component {
    render(){
        return(
            <div>
                here's the Twitter page
                <TweetAnalysis />
            </div>
        );
    }
}

export default TwitterProfile;