import React, {Component} from 'react';
import Demo from './Demo';
import About from './About';
import Navbar from "./Navbar";

class Home extends Component {
    render(){
        return(
            <div>
                Home Page
                <Demo />
                <About />
            </div>
        );
    }
}

export default Home;
