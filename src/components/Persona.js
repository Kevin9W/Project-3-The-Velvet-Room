import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PersonasModel from '../model/PersonasModel'

class Persona extends Component{
	handleDelete=()=>{
		if (window.confirm(`Are you sure you want delete ${this.props.data.name}?`)){
			PersonasModel.deletePersona(this.props.data.name)
			this.props.fetchData()
		}
	}
	render(){
		let link=`/personas/${this.props.data.name}`
		return(
			<div 
				style={{
					background:"rgba(0, 0, 0, 0.50)",
					textAlign:"center",
					margin:"10px",
					borderRadius:"10px",
					padding:"10px",
				}}>
				<h3>{this.props.data.name}</h3>
				<h4>{this.props.data.arcana}</h4>
				<Link to={link}>
					<button>
						More Info
					</button>
				</Link>
				<button onClick={this.handleDelete}>
					Delete
				</button>
			</div>
		)
	}
}
export default Persona