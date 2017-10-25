import React, { Component } from 'react';
import Entry from './Entry';
import Response from './Response';

class WatsonData extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

  render(){
    return(
      <div>
        Entry and Response render here:
        <Entry />
        <Response />
      </div>
    );
  }
}



export default WatsonData;