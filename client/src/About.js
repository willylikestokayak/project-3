import React, {Component} from 'react';
import {Card, Col} from 'react-materialize';

class About extends Component {
    render(){
        return(
            <div className="aboutBox">
              <h5>About the Developers</h5>
              <div className="devs">
                <Col m={3} s={6}>
		              <Card title='Stephanie Hester'>
		                 <h6>Project Manager & Front End Developer</h6>
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>
              </div>
              <div className="devs">
                <Col m={3} s={6}>
		              <Card title='Justen Cracraft'>
		                 <h6>Project Manager & Front End Developer</h6>
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>
              </div>
              <div className="devs">
                <Col m={3} s={6}>
		              <Card title='Chad Coker'>
		                 <h6>Project Manager & Front End Developer</h6>
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>
              </div>
              <div className="devs">
                <Col m={3} s={6}>
		              <Card title='Ari Minton'>
		                 <h6>Project Manager & Front End Developer</h6>
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>
              </div>
            </div>
        );
    }
}

export default About;
