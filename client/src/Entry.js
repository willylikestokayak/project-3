import React, {Component} from 'react';
import axios from 'axios';

class Entry extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entry: ''
		}
	}

	onChange(e) {
		var text = e.target.value
		this.setState({
			entry: text
		})
	}

	onClick() {
		axios.post('/watson', {
			entry: this.state.entry
		})
		.then(function(response) {
			console.log(response)
		})
		.catch(function(error) {
			console.log(error)
		});
	}

    render(){
        return(
            <div>
                <h3>Use the <span className='unique'>IBM's Watson Cognitive Services</span> to detect tone in written text.</h3>
                <form id='watson-tone-entry'>
                	<textarea rows='5' cols='100' placeholder='Insert text here to detect tone' onChange={ (e) => this.onChange(e) } />
                	<input type='button' onClick={ (e) => this.onClick(e) } value='Analyze'/>
                </form>
            </div>
        )
    }
}

export default Entry