import React, { Component } from 'react';
import { Bar, Line, Radar, Bubble } from 'react-chartjs-2';

class Response extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
            // tones: this.props.tones,
            // sentences: this.props.sentences
              
            }
        }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'left,'
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
                        backgroundColor: 'red'
                    }
                }}
            />
            </div>
        );
    }
}

export default Response;