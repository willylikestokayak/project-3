import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {


    constructor(props){
        super(props);
        this.state = {
        	name: [],
        	score: [],
        }
        console.log(this.props.data)
    }


    render(){
   
    	if(this.props.analyzed) {

    	var name = this.props.name
        var score = this.props.data
        console.log("this is name data..............." + name);
        var labels = []

    	const data = {
		  labels: ['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical', 'Confident', 'Tentative'],
		  datasets: [
		    {
		      label: 'Tone Analysis',
		      backgroundColor: 'red',
		      borderColor: 'yellow',
		      pointBackgroundColor: 'orange',
		      pointBorderColor: 'green',
		      pointHoverBackgroundColor: 'white',
		      pointHoverBorderColor: 'grey',
		      data: score
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
                        backgroundColor: 'yellow'
                    }
                }}
            />
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