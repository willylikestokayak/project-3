import React, {Component} from 'react';
import Demo from './Demo';
import About from './About';

class Home extends Component {
    render(){
        return(
            <div>
                <Demo />
                <About />
            </div>
        );
    }
}

export default Home;
