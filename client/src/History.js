import React, {Component} from 'react';
import Inventory from './Inventory';
import axios from 'axios';

class History extends Component {
    constructor(props){
        super(props)
        this.state = {
            wyms: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
 
    componentDidMount(){
        console.log(this.props.user.id)
        console.log(this.state)
        axios.post('/watson/list', {
            user: this.props.user.id
        }).then(result => {
           this.setState({wyms: result.data})
            console.log(this.state.wyms)
        })
    }
    render(){
        return(
            <div>
                <ul>
                {this.state.wyms.map((item, index) => ( <li key={index}>{item.title}</li>))}
                </ul>
                {/* <Inventory /> */}
            </div>
        );
    }
}

export default History;