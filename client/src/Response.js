import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {


    constructor(props){
        super(props);
        this.state = {
        	name: [],
        	score: [],
        	sentences: '',
        	analyzed: '',
        }

        var name = this.props.tones.map( (item, index) => (item.tone_name) )
        var score = this.props.tones.map( (item, index) => (item.score) )

    	this.setState({
    		name: name,
    		score: score
    	})
    }


    render(){

    	const data = {
		  labels: {this.state.name},
		  datasets: [
		    {
		      label: 'General Document Tone',
		      backgroundColor: 'rgba(179,181,198,0.2)',
		      borderColor: 'rgba(179,181,198,1)',
		      pointBackgroundColor: 'rgba(179,181,198,1)',
		      pointBorderColor: '#fff',
		      pointHoverBackgroundColor: '#fff',
		      pointHoverBorderColor: 'rgba(179,181,198,1)',
		      data: {this.state.score}
		}]}

    	if(this.props.analyzed) {
        return(
        <div>
        {this.state.test}
            <div className="chart">
            <Radar
                data={} 
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