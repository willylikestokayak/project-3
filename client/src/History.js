import React, {Component} from 'react';
import User from './User';
import Inventory from './Inventory';

class History extends Component {
    render(){
        return(
            <div>
                here's the saved history items of the user
                <Inventory />
            </div>
        );
    }
}

export default History;