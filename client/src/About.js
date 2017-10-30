import React, {Component} from 'react';
import {Card, Col} from 'react-materialize';

class About extends Component {
    render(){
        return(
          <div className="aboutBox">
              <h5>About the Developers</h5>

                <Col m={3} s={6} className="devs">
		              <Card title='Stephanie Hester'>
		                 <h6>Project Manager & Front End Developer</h6>
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>


                <Col m={3} s={6} className="devs">
		              <Card title='Justen Cracraft'>
                     <img className="circle responsive-img" height="100" width="100" src="img/justen-pic.jpg" alt="Justen Pic"/>
		                 <h6>Back-End Developer & Git Master</h6>
                     <p>"As full-stack developer from Seattle, WA, Justen enjoys tossing around in bed dreaming about writing code that makes no sense. He'd like to tell you what he does besides programming, but he doesn't remember doing anything else"</p>
                     <a href="https://github.com/justecii">"Justen's Github"</a>
		              </Card>
                </Col>


                <Col m={3} s={6} className="devs">
		              <Card title='Chad Coker'>
		                 <h6>Project Manager & Front End Developer</h6>
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>


                <Col m={3} s={6} className="devs">
		              <Card title='Ari Minton'>
		                 <h6>Project Manager & Front End Developer</h6>
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>
            

            </div>
        );
    }
}

export default About;
