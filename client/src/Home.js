import React, {Component} from 'react';
import Demo from './Demo';
import About from './About';

class Home extends Component {
    render(){
        return(
            <div>
                here's the Home Page
                <Demo />
                <About />
            </div>
        );
    }
}

export default Home;