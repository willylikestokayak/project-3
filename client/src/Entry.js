import React, {Component} from 'react';
import axios from 'axios';
import Response from './Response';


class Entry extends Component {

	constructor(props) {
		super(props)
		this.state = {
			analyzed: false,
			anger: '',
			tentative: '',
			joy: '',
			fear: '',
			sadness: '',
			analytical: '',
			confident: '',
            title: '',
			entry: '',
			tones: [{
				score: '',
				tone_id: '',
				tone_name: ''
			}],
			sentences: [],
			name: [],
			data: []

		}
	}
	// this.setState{
	// 	document_tone.tones[0].tone_id: document_tones.tones[0].score
	// }

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
		var grab = this.grabCache()
		
		axios.post('/watson', {
				text: this.state.entry
			})
			.then( (response) => {
				grab;
			})
			.catch(function(error) {
				console.log(error)
		});
	}

	grabCache() {
		axios.get('/watson')
		.then( (response) => {
			//Reference to link objects
			console.log(response.data.text)
			// console.log(response.data.text.document_tone.tones[0].tone_id)
			// console.log(response.data.text.document_tone.tones[0].score)
			//var text is essentially the key that I passed in the axios.post call, this is purely for simplicity purposes. 
			var text = response.data.text
			// var response0 = response.data.text.document_tone.tones[0].score
			// var response1 = response.data.text.document_tone.tones[1].score
			// var response2 = response.data.text.document_tone.tones[2].score
			// var response3 = response.data.text.document_tone.tones[3].score
			// var response4 = response.data.text.document_tone.tones[4].score
			// var response5 = response.data.text.document_tone.tones[5].score
			// var response6 = response.data.text.document_tone.tones[6].score


			/* Some text may not get a document tone, so it is important to verify that there is a tone being sent, if there isn't and
			there is an empty array, this may cause problems... */

			var tones;
			if(text) {
			 	tones = text.document_tone.tones
			}
			var sentences;
			if (text) {
				sentences = text.sentences_tone
			}

			this.setState({
				analyzed: true,
				tones: tones,
				sentences: sentences,
			})
			// if(response.data.text.document_tone.tones[0].tone_id === "anger"){
			// 	this.setState({
			// 		anger: response0
			// 	})
			// }
			// if(response.data.text.document_tone.tones[1].tone_id === "tentative"){
			// 	this.setState({
			// 		tentative: response1
			// 	})
			// }
			// if(response.data.text.document_tone.tones[4].tone_id === "tentative"){
			// 	this.setState({
			// 		tentative: response1
			// 	})
			// }
			for (var i=0; i< (response.data.text.document_tone.tones).length; i++){
				if(response.data.text.document_tone.tones[i].tone_id === "anger"){
					this.setState({
						anger: response.data.text.document_tone.tones[i].score
					});
					console.log(this.state.anger)
				}
				if(response.data.text.document_tone.tones[i].tone_id === "tentative"){
					this.setState({
						tentative: response.data.text.document_tone.tones[i].score
					});
					console.log(this.state.tentative)
				}
				if(response.data.text.document_tone.tones[i].tone_id === "fear"){
					this.setState({
						fear: response.data.text.document_tone.tones[i].score
					});
					console.log(this.state.fear)
				}
				if(response.data.text.document_tone.tones[i].tone_id === "joy"){
					this.setState({
						joy: response.data.text.document_tone.tones[i].score
					});
					console.log(this.state.joy)
				}
				if(response.data.text.document_tone.tones[i].tone_id === "sadness"){
					this.setState({
						sadness: response.data.text.document_tone.tones[i].score
					});
					console.log(this.state.sadness)
				}
				if(response.data.text.document_tone.tones[i].tone_id === "analytical"){
					this.setState({
						analytical: response.data.text.document_tone.tones[i].score
					});
					console.log(this.state.analytical)
				}
				if(response.data.text.document_tone.tones[i].tone_id === "confident"){
					this.setState({
						confident: response.data.text.document_tone.tones[i].score
					});
					console.log(this.state.confident)
				}
			}




			var name = this.state.tones.map( (item, index) => (item.tone_name) )
        	var score = this.state.tones.map( (item, index) => (item.score) )

        	this.setState({
        		name: name,
        		data: score
        	})

		});
		
		//this.sentenceClassify()
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
                	<Response test='test' name={this.state.name} data={this.state.data} analyzed={this.state.analyzed} tentative={this.state.tentative} anger={this.state.anger} joy={this.state.joy} fear={this.state.fear} sadness={this.state.sadness} analytical={this.state.analytical} confident={this.state.confident}/>
                </div>
            </div>
        );
    }
}

export default Entry;
