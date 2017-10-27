import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      redirect: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      console.log(result.data)
      localStorage.setItem('mernToken', result.data.token)
      //Justen - I commented this out for it to work
      console.log(this.props)
      console.log(this)
      this.props.lift(result.data)
      this.setState({redirect: true})
    })
  }

  render() {
    const {redirect} = this.state;
    if(redirect){
      return <Redirect to ='/'/>
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name: <input type='text' value={this.state.name} onChange={this.handleNameChange} /><br />
          Email: <input type='text' value={this.state.email} onChange={this.handleEmailChange} /><br />
          Password: <input type='password' value={this.state.password} onChange={this.handlePasswordChange} /><br />
          <input type='submit' value='Sign Up' />
        </form>
        <div className="card">
          <img src="http://fillmurray.com/g/300/300" id="img-preview" />

            <input id="file-upload" type="file" />
            Select a Profile image

        </div>
      </div>
    );
  }
}

export default Signup;
