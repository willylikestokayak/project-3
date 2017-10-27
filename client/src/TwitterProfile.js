import React, {Component} from 'react';
import TweetAnalysis from './TweetAnalysis';
import axios from 'axios';
import {Row, Input, Button} from 'react-materialize';

class TwitterProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            handle: ''
        }
    }
   onChange(e){
        console.log("changed")
        var text = e.target.value
            this.setState({
                handle: text,
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
        console.log(this.props.user.id)
        axios.get('/twitter', {
            user: this.props.user
        })
    }
    render(){
        return(
            <div>
                <Row onSubmit={this.handleSubmit}>
                    <Input s={6} label="Your Twitter" onChange={ (e) => this.onChange(e)} />
                    {/* <input className='green' type='submit' onClick={ (e) => this.onClick(e) } value='My Tweets'/> */}
                    <Button type='submit' onClick={ (e) => this.onClick(e) }>My Tweets</Button>
                </Row>
                <TweetAnalysis />
            </div>
        );
    }
}

export default TwitterProfile;