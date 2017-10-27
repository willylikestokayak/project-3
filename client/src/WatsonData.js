import React, { Component } from 'react';
import Entry from './Entry';

class WatsonData extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

  render(){
    return(
      <div>
        <p>This is the Watson Data component containing the Entry component</p>
        <Entry />
      </div>
    );
  }
}



export default WatsonData;