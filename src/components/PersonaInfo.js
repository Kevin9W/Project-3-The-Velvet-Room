import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PersonasModel from '../model/PersonasModel'

class PersonaInfo extends Component{
	state={
		data:null,
	}
	getInfo=(name)=>{
		PersonasModel.getOne(name)
			.then(data=>{
				this.setState({data})
			})
	}
	componentDidMount(){
		let {name}=this.props.match.params
		this.getInfo(name)
	}
	editContentInfo=()=>{
		this.props.editContent(this.state.data)
	}
	render(){
		let stats
		let elements
		let skills
		let editLink
		function capitalize(string){
			return string.charAt(0).toUpperCase()+string.slice(1)
		}
		if (this.state.data){
			editLink="/personas/"+this.state.data.name+"/edit"
			stats=Object.entries(this.state.data.stats[0]).map(([key,value])=>({key,value})).map((stat,index)=>{
				return <p key={index}className="stats">{capitalize(stat.key)}: {stat.value}</p>
			})
			elements=Object.entries(this.state.data.elementals[0]).map(([key,value])=>({key,value})).map((element,index)=>{
				return <p key={index} className="elements">{capitalize(element.key)}: {element.value}</p>
			})
			skills=this.state.data.skills.map((skill,index)=>{
				return <p key={index} className="skills">{capitalize(skill.name)}: {capitalize(skill.type)}</p>
			})
		}
		return(
			this.state.data?
			<>
				<h1>{this.state.data.name}</h1>
				<h2>{this.state.data.arcana}</h2>
				<div className="stats">
					{stats}
				</div>
				<div className="elementals">
					{elements}
				</div>
				<div>
					{skills}
				</div>
				<Link to={editLink}>
					<button onClick={this.editContentInfo}>
						Edit
					</button>
				</Link>
			</>:"Loading..."
		)
	}
}

export default PersonaInfo