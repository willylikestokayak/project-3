import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {

    constructor(props){
        super(props);
        this.state = {
        	data: this.props.tones,
            chartData:{
                labels:['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical','Confident', 'Tentative'],
                // datasets: [
                //     {
                //     label: 'My First dataset',
                //     fill: false,
                //     lineTension: 0.1,
                //     backgroundColor: 'rgba(75,192,192,0.4)',
                //     borderColor: 'rgba(75,192,192,1)',
                //     borderCapStyle: 'butt',
                //     borderDash: [],
                //     borderDashOffset: 0.0,
                //     borderJoinStyle: 'miter',
                //     pointBorderColor: 'rgba(75,192,192,1)',
                //     pointBackgroundColor: '#fff',
                //     pointBorderWidth: 1,
                //     pointHoverRadius: 5,
                //     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                //     pointHoverBorderColor: 'rgba(220,220,220,1)',
                //     pointHoverBorderWidth: 2,
                //     pointRadius: 1,
                //     pointHitRadius: 10,
                //     data: [{x:10,y:20,r:5}]
                //     }
                // ]
                // }
                datasets:[
                    {
                        label:'Document Tone',
                        data:[
                            0.7138,
                            0.56237,
                            0.91,
                            0,
                            0.998,
                            0.692132,
                            0
                        ],
                        backgroundColor:[
                            '#ca054d',
                            '#0b132b',
                            '#76e7cd',
                            '#101d42',
                            '#9381ff',
                            '#76e7cd',
                            '#ca054d'
                        ]
                    }
                ]
            }
        }
    }
    
    render(){
        return(
            <div className="chart">
            <Radar
                data={this.state.chartData}
                width={100}
                height={100}
                options={{}}
            />
            <Bar
                data={this.state.chartData}
                width={100}
                height={100}
                options={{}}
            />
            <Bubble
                data={this.state.chartData}
                width={100}
                height={100}
                options={{}}
            />
            </div>
        );
    }
}

export default Response;