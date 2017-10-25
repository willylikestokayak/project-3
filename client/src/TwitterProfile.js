import React, {Component} from 'react';
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