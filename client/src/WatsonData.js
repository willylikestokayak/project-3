import React, { Component } from 'react';
import Entry from './Entry';
import Response from './Response';

class WatsonData extends Component {
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