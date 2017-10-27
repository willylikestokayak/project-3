import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {
    constructor(props){
        super(props);
        this.state = {
        	chartData:props.chartData
        }
    }
    // componentWillReceiveProps(){
    //     //this is where you set state for chart data
    //     tones = this.setState.chartData;
    // }
    render(){
    	return(
            <div className="chart">
            <Line
                data={this.state.chartData}

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
        );
    }
}

export default Response;