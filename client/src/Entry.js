import React, {Component} from 'react';
import axios from 'axios';
import Response from './Response';

class Entry extends Component{

	constructor(props) {
		super(props)
		this.state = {
			chartData:{},
			anger: '',
			fear: '',
			joy: '',
			analytical: '',
			//need to add all emotions
			analyzed: false,
			entry: '',
			tones: [{
				score: '',
				tone_id: '' ,
				tone_name: ''
			}],
			sentences: []
		}
	}

	onChange(e) {
		var text = e.target.value
		this.setState({
			entry: text,
		});
	}

	onClick() {

		axios.post('/watson', {
				text: this.state.entry
			})
			.then( (response) => {
				//Refernce to link objects

			})
			.catch(function(error) {
				console.log(error)
		});
		//console.log('........POST DATA ' + this.state.entry);
		//Have to use AJAX calls with react, calls a function to grab "instance" of last post on /watson route
		this.grabCache()
		//console.log('......GRABCACHE ' + this.grabCache);
	}
	// componentWillReceiveProps(){
	// this.grabCache();
	//this.getChartData();

	grabCache() {
		axios.get('/watson')
		.then((response) => {
			console.log('...555555 response ' + response[0]);
			
			var text = response.data.text
			console.log(".......///// TEXT " + response[0]);
			var tones;
			if(text) {
				tones = text.document_tone.tones
			} else {
				console.log('no tones detected');
			}
			var sentences;
			if(text.sentences_tone){
				sentences = text.sentences_tone
			}
	// 		this.setState({
	// 			chartData: {
	// 				labels:['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical','Confident', 'Tentative'],	 	
	// 				datasets:[{
	// 				label: 'testing charts',
	// 				data: [0.3,0.5,0.9,0.2,0.,0,0.9],
	// 				backgroundColor:[
	// 					'red'
	// 				]
	// 			}]
	// 	}
	// })

			this.setState({
				analyzed: true,
				tones: tones,
				sentences: sentences,
				
			})
		//console.log("..........s." + document_tone.tones[0].score);
		});
	}	



// getChartData(){
//chartData was moved from here
// }



    render() {
    	var tonesResults = this.state.tones.map( (item, index) => (<div className='results'> <h6>{item.tone_name}</h6> <p>{item.score}</p> </div>) )
			var test = this.state.anger
        return(
            <div className="textanalysis">
                <h5>WYM Text Analyzer</h5>
                <form id='watson-tone-entry'>
                	<textarea rows='5' cols='100' placeholder='Insert text here to detect tone' onChange={ (e) => this.onChange(e) } />
                	<input type='button' onClick={ (e) => this.onClick(e) } value='Analyze'/>
                </form>
                <div id='entry-text-container'>
                	<h5>Text</h5>
                	<p>{this.state.entry}</p>
                	<div id='response'>
                		<h5>Document Analysis</h5>
											{test}
											{tonesResults}
                	</div>
                </div>
                <div id='response-component'>
                	<Response chartData={this.state.chartData} />
                </div>
            </div>
        )
    }
}

export default Entry;
