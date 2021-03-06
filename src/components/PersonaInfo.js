import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom'
import PersonasModel from '../model/PersonasModel'
import styles from '../css/PersonaInfo.module.css'

class PersonaInfo extends Component{
	state={
		data:null,
		redirect:false,
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
	handleDelete=()=>{
		if (window.confirm(`Are you sure you want delete ${this.state.data.name}?`)){		
			PersonasModel.deletePersona(this.state.data.name)
			this.props.fetchData()
			this.setState({redirect:true})
		}
	}
	render(){
		let stats
		let elements
		let skills
		let editLink
		if (this.state.redirect){return <Redirect to='/personas'/>}
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
				<div className={styles.container}>
					<div className={styles.info}>
						<h1>{this.state.data.name}</h1>
						<h2>{this.state.data.arcana}</h2>
						<Link to={editLink}>
							<button onClick={this.editContentInfo}>
								Edit
							</button>
						</Link>
						<button onClick={this.handleDelete}>
							Delete
						</button>
					</div>
					<div className={styles.items}>
						<p className={styles.item}>Stats</p>
						{stats}
					</div>
					<div className={styles.items}>
						<p className={styles.item}>Elementals</p>
						{elements}
					</div>
					<div className={styles.items}>
						<p className={styles.item}>Skills</p>
						{skills}
					</div>
				</div>
				
			</>:"Loading..."
		)
	}
}

export default PersonaInfo