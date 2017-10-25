import React, {Component} from 'react';

class Response extends Component {

	constructor(props) {
		super(props)
		this.state = {
			tones: this.props.tones
		}


	}



    render(){
        return(
            <div>
                Here's the response to the entry
            </div>
        )
    }
}

export default Response