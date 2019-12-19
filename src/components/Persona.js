import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Persona extends Component{
	onClicked=(event)=>{
		this.props.changeName(event.target.name)
	}
	render(){
		let link=`/personas/${this.props.data.name}`
		return(
			<div className="persona">
				<h3>{this.props.data.name}</h3>
				<h4>{this.props.data.arcana}</h4>
				<Link	to={link}>
					<button name={this.props.data.name} onClick={this.onClicked}>
						More Info
					</button>
				</Link>
			</div>
		)
	}
}
export default Persona