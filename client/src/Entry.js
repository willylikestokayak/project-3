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
		}
	}

	onChange(e) {
		var text = e.target.value
		this.setState({
			entry: text,
		})
    }

    onSubmit(e) {
        var savedTitle = e.target.value
        this.setState({
            title: savedTitle
        })
    }
    clickSave(e) {
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
				//THIS IS ALSO THE RESPONSE FROM THE API
				var text = response.data
				console.log(text)
				var tones;
				if(text) {
					tones = text.document_tone.tones
					var sentences;
				if (text.sentences_tone) {
					sentences = text.sentences_tone.map( (item, index) => ({
						className: item.tones.tone_id,
						text: item.text
					}) )
					console.log(sentences)
				}

				this.setState({
					analyzed: true,
					tones: tones,
					sentences: sentences
				})

				for (var i=0; i< (response.data.text.document_tone.tones).length; i++){
                    if(response.data.text.document_tone.tones[i].tone_id === 'anger'){
                        this.setState({
                            anger: response.data.text.document_tone.tones[i].score
                        });
                    }
                    if(response.data.text.document_tone.tones[i].tone_id === 'tentative'){
                        this.setState({
                            tentative: response.data.text.document_tone.tones[i].score
                        });
                    }
                    if(response.data.text.document_tone.tones[i].tone_id === 'fear'){
                        this.setState({
                            fear: response.data.text.document_tone.tones[i].score
                        });
                    }
                    if(response.data.text.document_tone.tones[i].tone_id === 'joy'){
                        this.setState({
                            joy: response.data.text.document_tone.tones[i].score
                        });
                    }
                    if(response.data.text.document_tone.tones[i].tone_id === 'sadness'){
                        this.setState({
                            sadness: response.data.text.document_tone.tones[i].score
                        });
                    }
                    if(response.data.text.document_tone.tones[i].tone_id === 'analytical'){
                        this.setState({
                            analytical: response.data.text.document_tone.tones[i].score
                        });
                    }
                    if(response.data.text.document_tone.tones[i].tone_id === 'confident'){
                        this.setState({
                            confident: response.data.text.document_tone.tones[i].score
                        });
                    }
                }
			})
			.catch(function(error) {
				console.log(error)
		});
	}

	grabCache() {
		axios.get('/watson')
		.then( (response) => {
			var text = response.data.text
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
			});

			for (var i=0; i< (response.data.text.document_tone.tones).length; i++){
				if(response.data.text.document_tone.tones[i].tone_id === "anger"){
					this.setState({
						anger: response.data.text.document_tone.tones[i].score
					});
				}
				if(response.data.text.document_tone.tones[i].tone_id === "tentative"){
					this.setState({
						tentative: response.data.text.document_tone.tones[i].score
					});
				}
				if(response.data.text.document_tone.tones[i].tone_id === "fear"){
					this.setState({
						fear: response.data.text.document_tone.tones[i].score
					});
				}
				if(response.data.text.document_tone.tones[i].tone_id === "joy"){
					this.setState({
						joy: response.data.text.document_tone.tones[i].score
					});
				}
				if(response.data.text.document_tone.tones[i].tone_id === "sadness"){
					this.setState({
						sadness: response.data.text.document_tone.tones[i].score
					});
				}
				if(response.data.text.document_tone.tones[i].tone_id === "analytical"){
					this.setState({
						analytical: response.data.text.document_tone.tones[i].score
					});
				}
				if(response.data.text.document_tone.tones[i].tone_id === "confident"){
					this.setState({
						confident: response.data.text.document_tone.tones[i].score
					});
				}
			}

			var name = this.state.tones.map( (item, index) => (item.tone_name) )
        	var score = this.state.tones.map( (item, index) => (item.score) )

        	this.setState({
        		name: name,
        		data: score
        	})

		});
=======
				// THIS RESPONSE IS ALSO THE RESPONSE FROM THE API
				var text = response.data
				console.log(text)
				var tones;
				if(text) {
					tones = text.document_tone.tones
					var sentences;
				if (text.sentences_tone) {
					sentences = text.sentences_tone.map( (item, index) => ({
						className: item.tones.tone_id,
						text: item.text
					}) )
					console.log(sentences)
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
					}

				})
				.catch(function(error) {
					console.log(error)
			});
>>>>>>> ef620e0b739b7855a3e7e268819a0b85150a5414
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
                	<input type="text" placeholder="Title to Save" onChange={(e) => this.onSubmit(e)} />
                	<textarea rows='20' cols='100' placeholder='Insert text here to detect tone' onChange={ (e) => this.onChange(e) } />
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
                	<Response name={this.state.name} data={this.state.data} analyzed={this.state.analyzed} tentative={this.state.tentative} anger={this.state.anger} joy={this.state.joy} fear={this.state.fear} sadness={this.state.sadness} analytical={this.state.analytical} confident={this.state.confident} />
                </div>
            </div>
        );
    }
}

export default Entry;
