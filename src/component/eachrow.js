import React, { Component } from 'react';

class Eachrow  extends Component {
	constructor(props){
      super(props);
	}
	handleClick(){
	    this.props.click(this.props.data.name);
	}
	render(){
		return (<tr>
			<td>{this.props.data.name}</td>
			<td>{this.props.data.quntity}</td>
			<td>{this.props.data.Produced}</td>
			<td>{this.props.data.Predicted}</td>
			<td><button onClick={this.handleClick.bind(this)} >Done</button></td>
			</tr>) ;
	}

}

export default Eachrow;