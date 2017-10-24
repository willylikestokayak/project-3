import React, {Component} from 'react';
import User from './User';
import TweetAnalysis from './TweetAnalysis';

class Twitter extends Component {
    render(){
        return(
            <div>
                here's the Twitter page
                <User />
                <TweetAnalysis />
            </div>
        )
    }
}

export default Twitter