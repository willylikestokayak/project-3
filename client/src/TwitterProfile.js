import React, {Component} from 'react';
import TweetAnalysis from './TweetAnalysis';
import axios from 'axios';
import {Row, Input, Button} from 'react-materialize';

class TwitterProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            handle: '',
            twitterList: []
        }
    }
   onChange(e){
        console.log("changed")
        var text = e.target.value
            this.setState({
                handle: text
            })
   }
    onClick(e){
        axios.post('/twitter', {
            user: this.props.user,
            handle: this.state.handle,
        }).catch(function(error){
            if (error.response) {
                console.log(error.response);
            }
        })
    }
    componentDidMount(){
        //Getting the User's saved Twitter Handles
        axios.post('/twitter/user', {
            user: this.props.user.id
        }).then(result => {
            console.log(result.data)
            this.setState({twitterList: result.data})
        }).then(console.log(this.state.handle))
    }
    render(){
        let twitterHandles = this.state.twitterList.map((item, index) => (
            <Row>
                <li className="inline" key={index}>{item.handle}</li>
                {/* Need to create new onClick Function below to find user's tweets */}
                <Button className="inline" key={index} onClick={(e) => this.onClick(e)} value={item._id}>View</Button>
            </Row>
            )
        );
        return(
            <div>
                <Row onSubmit={this.handleSubmit}>
                    <Input s={6} label="Your Twitter" onChange={ (e) => this.onChange(e)} />
                    {/* <input className='green' type='submit' onClick={ (e) => this.onClick(e) } value='My Tweets'/> */}
                    <Button className="left button" type='submit' onClick={ (e) => this.onClick(e) }>My Tweets</Button>
                </Row>
                <h2>Your Saved Handles:</h2>
                {twitterHandles}
                <TweetAnalysis />
            </div>
        );
    }
}

export default TwitterProfile;