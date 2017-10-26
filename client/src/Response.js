import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels:['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical','Confident', 'Tentative'],
                
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
                            'red'
                            // '#ca054d',
                            // '#0b132b',
                            // '#76e7cd',
                            // '#101d42',
                            // '#9381ff',
                            // '#76e7cd',
                            // '#ca054d'
                        ]
                    }
                ]
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right,'
    }
    render(){
        return(
            <div className="chart">
            <Radar
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