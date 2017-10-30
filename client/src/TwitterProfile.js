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
    getTweets(e){
        axios.post('/twitter/find', {
            id: e.target.value
        }).then(result => {
            console.log(result.data)
        })
    }
    render(){
        let twitterHandles = this.state.twitterList.map((item, index) => (
            <Row>
                <Button className="inline halfWidth" key={index} onClick={(e) => this.getTweets(e)} value={item._id}>@{item.handle}</Button>
            </Row>
            )
        );
        return(
            <div>
                <Row onSubmit={this.handleSubmit}>
                    <Input s={6} label="Your Twitter" onChange={ (e) => this.onChange(e)} />
                    <Button className="left button" type='submit' onClick={ (e) => this.onClick(e) }>Find Tweets</Button>
                </Row>
                <h3>Saved Handles:</h3>
                <h5>Click on the profile to view tweets</h5>
                {twitterHandles}
                <TweetAnalysis />
            </div>
        );
    }
}

export default TwitterProfile;