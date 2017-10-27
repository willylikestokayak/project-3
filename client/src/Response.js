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
    	var data = this.props.data

    	const data = {
		  labels: name,
		  datasets: [
		    {
		      label: 'General Document Tone',
		      backgroundColor: 'rgba(179,181,198,0.2)',
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