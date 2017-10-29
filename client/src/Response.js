import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {


    constructor(props){
        super(props);
        console.log(this.props.data)
        this.state ={
            anger: anger,
			tentative: tentative,
			joy: joy,
			fear: fear,
			sadness: sadness,
			analytical: analytical,
			confident: confident
        }
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

        
        // const labels = ['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical', 'Confident', 'Tentative'];
        // function getIndex(labels, data){
            //{this.state.tentative}, {this.state.anger}, {this.state.joy}, {this.state.fear}, {this.state.sadness}, {this.state.analytical}, {this.state.confident}
        // }
///set labels to object state.
    	const data = {
		  labels: [{tentative}, {anger}, {joy}, {fear}, {sadness}, {analytical}, {confident}],
		  datasets: [
		    {
		      label: 'General Document Tone',
		      backgroundColor: null,
		      borderColor: 'rgba(179,181,198,1)',
		      pointBackgroundColor: 'rgba(179,181,198,1)',
		      pointBorderColor: '#fff',
		      pointHoverBackgroundColor: '#fff',
		      pointHoverBorderColor: 'rgba(179,181,198,1)',
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