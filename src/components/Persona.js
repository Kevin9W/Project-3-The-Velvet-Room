import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PersonasModel from '../model/PersonasModel'

class Persona extends Component{
	handleDelete=()=>{
		PersonasModel.delete(this.props.data.name,()=>{
			this.props.fetchData()
		})

	}
	render(){
		let link=`/personas/${this.props.data.name}`
		return(
			<div className="persona">
				<h3>{this.props.data.name}</h3>
				<h4>{this.props.data.arcana}</h4>
				<Link	to={link}>
					<button>
						More Info
					</button>
				</Link>
				<button onClick={this.handleDelete}>Delete</button>
			</div>
		)
	}
}
export default Persona