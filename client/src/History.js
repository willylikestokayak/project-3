import React, {Component} from 'react';
import User from './User'

class History extends Component {
    render(){
        return(
            <div>
                here's the saved history items of the user
                <User />
                <Inventory />
            </div>
        )
    }
}

export default History