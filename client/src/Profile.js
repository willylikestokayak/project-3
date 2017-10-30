import React, {Component} from 'react';
import Entry from './Entry';
import TwitterProfile from './TwitterProfile';
import History from './History';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import {Row, Col} from 'react-materialize';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('mernToken'),
            user: this.props.user
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
                <Row>
                    {/* <Col s={4}> */}
                        <Router>

                            <div>
                            <Col s={12} m={4}>
                                <div className="card">
                                    <div className="card-content white-text">
                                        <img src={this.state.user.profilePic} className="circle responsive-img" height="100" width="100" />
                                        <span className="card-title">Welcome to your WYM Profile, {this.state.user.name}!</span>

                                    </div>
                                    <div className="card-action white-text">
                                        <Link className="navList center" to ='/'>Upload new text</Link>
                                        <Link className="navList center" to ='/history'>Saved Wyms</Link>
                                        <Link className="navList center" to ='/twitterprofile'>Twitter</Link>
                                    </div>
                                </div>
                             </Col>
                             <Col s={12} m={8}>
                                {/* <Route exact path ='/' render={(props) => (
                                    <Entry {...props} user={this.state.user} />
                                )} /> */}
                                <Route exact path='/' render={(props) => (
                                    <Entry {...props} user={this.state.user} />
                                )} />
                                <Route path = '/history' render={(props) => ( 
                                    <History {...props} user={this.state.user} />
                                )} />
                                <Route path = '/twitterprofile' render={(props) => (
                                    <TwitterProfile {...props} user={this.state.user} />
                                    )} />
                            </Col>
                            </div>
                        </Router>
                    {/* </Col> */}
            <Col s={8}>
                <div>
                    {/* <Entry user={this.state.user}/> */}
                </div>
            </Col>
            </Row>
        )
    }
}

export default Profile;
