import React, {Component} from 'react';
import {Card, Col} from 'react-materialize';

class About extends Component {
    render(){
        return(
          <div className="aboutBox">
              <h5>About the Developers</h5>
              <div className="devs">
                <Col m={3} s={6}>
		              <Card title='Stefanye Hester'>
		                 <h6>Project Manager & Front End Developer</h6>
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>
              </div>
              <div className="devs">
                <Col m={3} s={6}>
		              <Card title='Justen Cracraft'>
                     <img className="circle responsive-img" height="100" width="100" src="img/justen-pic.jpg" alt="Justen Pic"/>
		                 <h6>Back-End Developer & Git Master</h6>
                     <p>As full-stack developer from Seattle, WA, Justen enjoys tossing around in bed dreaming about writing code that makes no sense. He'd like to tell you what he does besides programming, but he doesn't remember doing anything else</p>
                     <a href="https://github.com/justecii">Justen's Github</a>
		              </Card>
                </Col>
              </div>
              <div className="devs">
                <Col m={3} s={6}>
		              <Card title='Chad Coker'>
                    <img className="circle responsive-img" height="200" width="200" src="img/chad-pic.jpg" alt="Chad Pic"/>   
                     <h6>Project Manager & Front End Developer</h6>
                     <p>A full stack dev in training who has found a home in Seattle, WA. Prior to code training, Chad enjoyed equal parts hiking, kayaking, surfing and reading with some Netflix binges sprinkled on top.</p>
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
