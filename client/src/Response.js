import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {

    constructor(props){
        super(props);
    }


    render(){
        var tentative = this.props.tentative;
    	if(this.props.analyzed) {

        var name = this.props.name;
        var anger = this.props.anger;
        var tentative = this.props.tentative;
        var joy = this.props.joy;
        var fear = this.props.fear;
        var sadness = this.props.sadness;
        var analytical = this.props.analytical;
        var confident = this.props.confident;

    	const data = {
		  labels:  ['Anger', 'Tentative', 'Joy', 'Fear', 'Sadness', 'Analytical', 'Confident'], //[anger, sadness, fear, tentative, joy, analytical, confident],

		  datasets: [
		    {
		      label: [anger, tentative, joy, fear, sadness, analytical, confident],   //[data],   //[name],    //, //{response.data.text.document_tone.tones[i].tone_id},
		      backgroundColor: 'white',
		      borderColor: 'red',
		      pointBackgroundColor: 'yellow',
		      pointBorderColor: '#fff',
		      pointHoverBackgroundColor: '#fff',
		      pointHoverBorderColor: 'green',
		      data: [anger, tentative, joy, fear, sadness, analytical, confident]
		}]}

        return(
        <div>
            <div className="chart">
            <Bar
                data={data} 
                options={{}}
            /> 
            {/* Tentative is equal to {this.props.tentative} */}

            {/* title:{
                        display: this.props.displayTitle,
                        text: 'Watson is checking your words',
                        fontSize: 25
                    },
                    legend:{
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    },
                    labels:{
                        fontSize: 25,
                        backgroundColor: '#76e7cd' */}

            </div>
        </div>
            )
    } else {
        return(
    			<p>Click Analyze to get results</p>
    		)
    	}
    }
}

export default Response;