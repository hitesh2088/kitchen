import React, { Component } from 'react';
import	Eachrow from './eachrow.js';

class Kitchenlist extends Component {
	render(){
		console.log(this.props);
		let that = this;
		return (
				<table border="1" width="100%" >
					<tr>
<th>Name</th>
<th>Quantity</th>
<th>Created-till-now</th>
<th>Predicted</th>
<th>Status</th>
</tr>
				{this.props.each.map(function(ele){
						return <Eachrow data={ele} click={that.props.click} />
						})
					}
				</table>
			);
	}

}
export default Kitchenlist;