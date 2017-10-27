import React, {Component} from 'react';
import axios from 'axios';
import Response from './Response';


class Entry extends Component {

	constructor(props) {
		super(props)
		this.state = {
            analyzed: false,
            title: '',
			entry: '',
			tones: [{
				score: '',
				tone_id: '' ,
				tone_name: ''
			}],
			sentences: [],
			name: [],
			data: []
		}
	}

	onChange(e) {
		var text = e.target.value
		this.setState({
			entry: text,
		})
    }
    //two functions for saving data to textdb
    onSubmit(e) {
        console.log("SUBMIT BUTTON CLICKED")
        var savedTitle = e.target.value
        this.setState({
            title: savedTitle
        })
    }
    clickSave(e) {
        console.log("CLICK SAVE");
        console.log(this.props)
        console.log(this.state)
        axios.post('/watson/save', {
            user: this.props.user,
            title: this.state.title,
            content: this.state.entry
        })
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
		//Have to use AJAX calls with react, calls a function to grab "instance" of last post on /watson route
		this.grabCache()
	}

	grabCache() {
		axios.get('/watson')
		.then( (response) => {
			//Refernce to link objects
			console.log(response.data.text)
			//var text is essentially the key that I passed in the axios.post call, this is purely for simplicity purposes. 
			var text = response.data.text

			/* Some text may not get a document tone, so it is important to verify that there is a tone being sent, if there isn't and
			there is an empty array, this may cause problems... */

			var tones;
			if(text) {
			 	tones = text.document_tone.tones
			} else {
				console.log('There were no tones detected.')
			}
			
			var sentences;
			if (text.sentences_tone) {
				sentences = text.sentences_tone
			}

			this.setState({
				analyzed: true,
				tones: tones,
				sentences: sentences
			})

			var name = this.state.tones.map( (item, index) => (item.tone_name) )
        	var score = this.state.tones.map( (item, index) => (item.score) )

        	this.setState({
        		name: name,
        		data: score
        	})

		});
		
		this.sentenceClassify()
	}


	sentenceClassify() {
		
		//var structureArray = this.state.sentences.map( (item, index) => ({label: item.tone_id, text: item.text}))
		//var classify = this.state.sentences.map( (item, index) => )
	}

    render(){
    	var tonesResults = this.state.tones.map( (item, index) => (<div className='results'> <h6>{item.tone_name}</h6> <p>{item.score}</p> </div>) )
    	

        return(
            <div className="text-analysis">
                <h5>WYM Text Analyzer</h5>
                <form id='watson-tone-entry'>
                	<textarea rows='5' cols='100' placeholder='Insert text here to detect tone' onChange={ (e) => this.onChange(e) } />
                    <input type="text" placeholder="Title to Save" onChange={(e) => this.onSubmit(e)} />
                	<input className="blue" type='button' onClick={ (e) => this.onClick(e) } value='Analyze'/>
                    <input className="blue" type='button' onClick={ (e) => this.clickSave(e) } value='Save Entry'/>

                </form>
                <div id='entry-text-container'>
                	<h5>Text</h5>
                	<p>{this.state.entry}</p>
                	<div id='response'>
                		<h5>Document Analysis</h5>
                			{tonesResults}
                	</div>
                </div>
                <div id='response-component'>
                	<Response test='test' name={this.state.name} data={this.state.data} analyzed={this.state.analyzed} />
                </div>
            </div>
        )
    }
}

export default Entry
