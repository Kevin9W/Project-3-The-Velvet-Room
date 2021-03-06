import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'
import PersonasModel from '../model/PersonasModel'
import SkillsModel from '../model/SkillsModel'
import styles from '../css/PersonaForm.module.css'
class PersonaForm extends Component{
	state={
		operate:"register",
		title:"New Persona",
		info:{
			name:"",
			arcana:"",
		},
		stats:{
			strength:"",
			magic:"",
			endurance:"",
			agility:"",
			luck:"",
		},
		elementals:{
			physical:"",
			gun:"",
			fire:"",
			ice:"",
			electric:"",
			wind:"",
			psychic:"",
			nuclear:"",
			curse:"",
			bless:"",
		},
		skills:[{name:""},{name:""},{name:""},{name:""},{name:""},{name:""},{name:""},{name:""}],
		skillsData:"",
		redirect:false,
	}

	fetchSkills=()=>{
		SkillsModel.all()
			.then((skillsData)=>{
				this.setState({skillsData})
			})
	}

	handleSubmit=(event)=>{
		event.preventDefault()
		let skills=this.state.skills.filter(skill=>skill.name!=="")
		let data={
			name:this.state.info.name!=="" ? this.state.info.name : "unnamed",
			arcana:this.state.info.arcana,
			stats:[this.state.stats],
			elementals:[this.state.elementals],
			skills:skills
		}
		if (this.state.operate==="register"){
			PersonasModel.add(data)
				.then(()=>this.setState({redirect:true}))
			alert(`You have registered ${data.name}!`)
		}
		else if(this.state.operate==="edit"){	
			let name=this.state.title
			PersonasModel.update(name,data)
				.then(()=>this.setState({redirect:true}))
			alert(`You have updated ${name}!`)
		}
	}
	handleChangeInfo=(event)=>{
		this.setState({info:{...this.state.info,[event.target.name]:event.target.value}})
	}
	handleChangeStats=(event)=>{
		this.setState({stats:{...this.state.stats,[event.target.name]:event.target.value}})
	}
	handleChangeElementals=(event)=>{
		this.setState({elementals:{...this.state.elementals,[event.target.name]:event.target.value}})
	}
	handleChangeSkills=(event)=>{
		let index=event.target.textContent.split(":")[0]
		let skill=event.target.value.split(":")[0]
		let skillArr=this.state.skills
		skillArr[index]={name:skill}
		this.setState({skills:skillArr})
	}

	capitalize=(string)=>{
			return string.charAt(0).toUpperCase()+string.slice(1)
		}
	componentDidMount(){
		this.fetchSkills()
		let{operate}=this.props.match.params
		if (operate){
			this.setState({operate})
		}

		if (this.props.data){
			this.setState({title:this.props.data.name})
			this.setState(
				{info:{...this.state.info,
					name:this.props.data.name,
					arcana:this.props.data.arcana,
				}})
			this.setState({stats:this.props.data.stats[0]})
			this.setState({elementals:this.props.data.elementals[0]})
			this.setState({skills:this.props.data.skills})
	
		}
	}
	render(){
		if (this.state.redirect){
			return <Redirect to='/personas'/>
		}
		let statsInput=Object.entries(this.state.stats).map(([key,value])=>({key,value})).map((stat,index)=>{
			return <>
				<label key={index+"a"} style={{display:"block"}}>{this.capitalize(stat.key)}</label>
				<input key={index+"b"} 
							 type="number" 
							 className="stat" 
							 name={stat.key} 
							 placeholder={this.capitalize(stat.key)} 
							 defaultValue={stat.value} 
							 onChange={this.handleChangeStats}>
				</input>
			</>
		})
		let elementalsInput=Object.entries(this.state.elementals).map(([key,value])=>({key,value})).map((element,index)=>{
			return <>
				<label key={index+"c"} className={styles.label}>{this.capitalize(element.key)}</label>
				<input key={index+"d"} 
							 type="text" 
							 className="elemental" 
							 name={element.key} 
							 placeholder={this.capitalize(element.key)} 
							 defaultValue={element.value} 
							 onChange={this.handleChangeElementals}>							 	
				</input>
			</>
		})
		let skillsOptions
		let skillsInput=[]
		if (this.state.skillsData&&this.state.skills){
			skillsOptions=this.state.skillsData.skills.map((skill,index)=>{
				return <option value={skill.name} key={index+"e"}>{skill.name}: {skill.type} </option>
			})
			for(let i=0;i<8;i++){
				let skillValue=""
				if (this.state.skills[i]){
					skillValue=this.state.skills[i].name
				}
				skillsInput.push(
					<select type="dropdown" key={i} className="skill" value={skillValue} onChange={this.handleChangeSkills}
						style={{display:"block"}}>
						{i}
						<option value="">:</option>
						{skillsOptions}
					</select>)
			}
		}
		
			return(
			<div className={styles.container}>
				<h1>{this.capitalize(this.state.operate)} {this.state.title}</h1>
				<form onSubmit={this.handleSubmit} >
					<div className={styles.flex}>
						<div className={styles.items}>
							<label className={styles.label}>Name</label>
							<input type="text" 
										 className="name" 
										 name="name" 
										 placeholder="Name" 
										 defaultValue={this.state.info.name} 
										 onChange={this.handleChangeInfo}>
							</input>
							<label className={styles.label}>Arcana</label>
							<input type="text" 
										 className="arcana" 
										 name="arcana" 
										 placeholder="Arcana" 
										 defaultValue={this.state.info.arcana} 
										 onChange={this.handleChangeInfo}>										 	
							</input>
						</div>
							<div className={styles.items}>
								{statsInput}
							</div>
							<div className={styles.items}>
								{elementalsInput}
							</div>
							<div className={styles.items}>
								<label>Skills</label>
								{skillsInput}
							</div>
						</div>
						<div className={styles.flex}>
							<button type="submit">Submit</button>							
						</div>
				</form>
			</div>
		)
	}
}

export default PersonaForm;
