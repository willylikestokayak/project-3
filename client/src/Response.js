import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {


    constructor(props){
        super(props);
        console.log(this.props.data)
        // this.state ={
        //     anger: anger,
		// 	tentative: tentative,
		// 	joy: joy,
		// 	fear: fear,
		// 	sadness: sadness,
		// 	analytical: analytical,
		// 	confident: confident
        // }
    }


    render(){
        var tentative = this.props.tentative;
    	if(this.props.analyzed) {

    	var name = this.props.name;
        var data = this.props.data;
        var anger = this.props.anger;
        var tentative = this.props.tentative;
        var joy = this.props.joy;
        var fear = this.props.fear;
        var sadness = this.props.sadness;
        var analytical = this.props.analytical;
        var confident = this.props.confident;
        //var documentLabel = this.props.document_tone.tone_id;

        
        // const labels = ['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical', 'Confident', 'Tentative'];
        // function getIndex(labels, data){
        //{this.state.tentative}, {this.state.anger}, {this.state.joy}, {this.state.fear}, {this.state.sadness}, {this.state.analytical}, {this.state.confident}
        //{tentative}, {anger}, {joy}, {fear}, {sadness}, {analytical}, {confident}
        // }
///set labels to object state.
    	const data = {
		  labels:  ['anger', 'sadness', 'fear', 'tentative', 'joy', 'analytical', 'confident'], //[anger, sadness, fear, tentative, joy, analytical, confident],
		  datasets: [
		    {
		      label: [data],   //[name],    //[anger, tentative, joy, fear, sadness, analytical, confident], //{response.data.text.document_tone.tones[i].tone_id},
		      backgroundColor: 'white',
		      borderColor: 'red',
		      pointBackgroundColor: 'yellow',
		      pointBorderColor: '#fff',
		      pointHoverBackgroundColor: '#fff',
		      pointHoverBorderColor: 'green',
		      data: data
		}]}

        return(
        <div>
            <div className="chart">
            <Line
                data={data} 
                options={{
                    title:{
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
                        backgroundColor: '#76e7cd'
                    }
                }}
            /> 
            {/* Tentative is equal to {this.props.tentative} */}
            </div>
        </div>
        );
    	} else {
    		return(
    			<p>Chart will render when text is submitted</p>
    		)
    	}
    }
}

export default Response;