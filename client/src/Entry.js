import React, {Component} from 'react';
import axios from 'axios';
import Response from './Response';

class Entry extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			entry: '',
			tones: [{
				tone_name: ''
			}],
			sentences: []
		}
	}

	onChange(e) {
		var text = e.target.value
		this.setState({
			entry: text,
		})
	}

	onClick() {
		
		axios.post('/watson', {
				text: this.state.entry
			})
			.then(function(response) {
				//Refernce to link objects
				
			})
			.catch(function(error) {
				console.log(error)
		});
		//Have to use AJAX calls with react, calls a function to grab "instance" of last post on /watson route
		this.grabCache()
	}

	grabCache() {
		axios.get('/watson')
		.then( (response) => {
			//Refernce to link objects
			console.log(response.data.text)
			var text = response.data.text
			var tones = text.document_tone.tones
			var sentences;
			if (text.sentences_tone) {
				sentences = text.sentences_tone
			}
			this.setState({
				tones: tones,
				sentences: sentences
			})
			//Add in conditonal for sentences later
			//Only entries with multiple sentences get this array, so if not checked could cause a problem
			
		});
	}



    render(){
    	var name = this.state.tones[0].tone_name || ''
        return(
            <div>
                <h5>Use the <span className='unique'>IBM Watson Cognitive Services AI</span> to detect tone in written text.</h5>
                <form id='watson-tone-entry'>
                	<textarea rows='5' cols='100' placeholder='Insert text here to detect tone' onChange={ (e) => this.onChange(e) } />
                	<input type='button' onClick={ (e) => this.onClick(e) } value='Analyze'/>
                </form>
                <div id='entry-response'>
                	<h5>Watson Analysis:</h5>
                	<p><span className='response'>Text</span></p>
                	<p>{this.state.entry}</p>
                	<div id='entry-response'>
                		<h4>Watson Tone: {name}</h4>
                	</div>
                </div>
            </div>
        )
    }
}

export default Entry