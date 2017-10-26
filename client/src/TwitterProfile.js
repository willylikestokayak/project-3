import React, {Component} from 'react';
import TweetAnalysis from './TweetAnalysis';

class TwitterProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            handle: ''
        }
    }
    onSubmit(e){
        var text = e.target.value
		this.setState({
			handle: text,
		})
    }
    onClick(e){
        console.log()
    }
    render(){
        return(
            <div>
                <form action="">
                    Input your Twitter Handle
                    <input type="text" onChange={ (e) => this.onSubmit(e) } />
                    <input type='submit' onClick={ (e) => this.onClick(e) } value='Find Tweets'/>
                </form>
                <TweetAnalysis />
            </div>
        );
    }
}

export default TwitterProfile;