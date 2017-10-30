import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';


class About extends Component {
    render(){
        return(
          <div className="aboutBox">
            <Row>
              <h5>About the Developers</h5>
            </Row>
            <Row>
                <Col s={6} m={3} className="devs">
                  Stephanie
                </Col>
                <Col s={6} m={3} className="devs">
                  <img className="circle responsive-img" height="100" width="100" src="img/justen-pic.jpg" alt="Justen Pic"/>
                  <h3 className="marginTwenty">Justen</h3>
                  <p>As full-stack developer from Seattle, WA, Justen enjoys tossing around in bed dreaming about writing code that makes no sense. He'd like to tell you what he does besides programming, but he doesn't remember doing anything else</p>
                  <a href="https://github.com/justecii">Justen's Github</a>
                </Col>
                <Col s={6} m={3} className="devs">
                  Chad
                </Col>
                <Col s={6} m={3} className="devs">
                  Ari
                </Col>
            </Row>
          </div>
        );
    }
}

export default About;
