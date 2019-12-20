import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import PersonasModel from '../model/PersonasModel'

class Persona extends Component{
	state={
		redirect:false,
	}
	handleDelete=()=>{
		PersonasModel.deletePersona(this.props.data.name)
		alert("Deleted "+this.props.data.name)
		this.props.fetchData()
	}
	handleMoreInfo=()=>{
		this.setState({redirect:true})
	}
	render(){
		let link=`/personas/${this.props.data.name}`
		if (this.state.redirect){return <Redirect to={link}/>}
		return(
			<div className="persona">
				<h3>{this.props.data.name}</h3>
				<h4>{this.props.data.arcana}</h4>
					<button onClick={this.handleMoreInfo}>
						More Info
					</button>
				<button onClick={this.handleDelete}>
					Delete
				</button>
			</div>
		)
	}
}
export default Persona