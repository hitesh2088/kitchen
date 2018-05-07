import React, { Component } from 'react';
import	Eachrow from './eachrow.js';

class Kitchenlist extends Component {
	render(){
		console.log(this.props);
		return (
				<table border="1" width="100%" >
					<tr>
<th>Name</th>
<th>Quantity</th>
<th>Created-till-now</th>
<th>Predicted</th>
<th>Status</th>
</tr>
				{this.props.each.forEach(function(ele,this.props){
						return <Eachrow data={ele} />
						}, this.props)
					}
				</table>
			);
	}

}
export default Kitchenlist;