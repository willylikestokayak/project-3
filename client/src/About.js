import React, {Component} from 'react';
import {Card, CardTitle, Col} from 'react-materialize';

class About extends Component {
    render(){
        return(
          <div className="aboutBox">
              <h4>About the Developers</h4>

                <Col m={3} s={6} className="devs">
		              <Card>
                    <CardTitle className="devNames">Stephanie Hester</CardTitle>
                     <img className="circle responsive-img" height="100" width="100" src="img/stephanie.jpg" alt="Stephanie Pic"/>
		                 <h5>Project Manager & Front End Developer</h5>
                     <br />
                     <p>German transplant in Seattle & aspiring front end developer. When not coding away at her latest project, Stephanie can be found out in the wild hiking or scuba diving.</p>
                    <a href="https://github.com/steffidawn">Stephanie's Gitub</a>
                  </Card>
                </Col>
                <Col m={3} s={6} className="devs">
		              <Card>
                    <CardTitle className="devNames">Justen Cracraft</CardTitle>
                     <img className="circle responsive-img" height="100" width="100" src="img/justen-pic.jpg" alt="Justen Pic"/>
		                 <h5>Back-End Developer & Git Master</h5>
                     <br />
                     <p>As full-stack developer from Seattle, WA, Justen enjoys tossing around in bed dreaming about writing code that makes no sense. He'd like to tell you what he does besides programming, but he doesn't remember doing anything else</p>
                     <a href="https://github.com/justecii">Justen's Github</a>
		              </Card>
                </Col>
                <Col m={3} s={6} className="devs">
		              <Card>
                    <CardTitle className="devNames">Chad Coker</CardTitle>
		                 <h5>Project Manager & Front End Developer</h5>
                     <br />
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>
                <Col m={3} s={6}  className="devs">
		              <Card>
                    <CardTitle className="devNames">Ari Minton</CardTitle>
		                 <h5>Project Manager & Front End Developer</h5>
                     <br />
                     <p>Here is some text about me yay.</p>
		              </Card>
                </Col>
            </div>
        );
    }
}

export default About;
