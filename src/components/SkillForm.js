import React,{Component} from 'react'
import styles from '../css/SkillForm.module.css'
import SkillsModel from '../model/SkillsModel'

class SkillForm extends Component{
	state={
		name:"",
		type:"",
		effect:"",
		cost:"",
		cost_type:"",
	}
	handleChange=(event)=>{
		this.setState({[event.target.name]:event.target.value})
	}
	handleSubmit=(event)=>{
		event.preventDefault()
		if (this.props.type==="edit"){
			if (window.confirm(`Are you sure you want to edit ${this.state.name}?`)){
				SkillsModel.update(this.props.data.name,this.state)
			}
		}
		else if (this.props.type==="add"){
			let initial={
				name:"",
				type:"",
				effect:"",
				cost:"",
				cost_type:"",
			}
			SkillsModel.add(this.state)
			alert(`You have added ${this.state.name}!`)
			this.setState(initial)	
		}
		this.props.updateData()
		this.props.handleInfo()
	}
	componentDidMount(){
		if (this.props.type==="edit"){
			let skill=this.props.data
			this.setState({
				name:skill.name,
				type:skill.type,
				effect:skill.effect,
				cost:(skill.cost===null?"":skill.cost),
				cost_type:(skill.cost_type===null?"":skill.cost_type),
			})
		}
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<div className={styles.flex}>
					<div className={styles.items}>
						<label className={styles.label}>Name</label>
						<input type="text" name="name" value={this.state.name} onChange={this.handleChange} required></input>
					</div>
					<div className={styles.items}>
						<label className={styles.label}>Type</label>
						<input type="text" name="type" value={this.state.type} onChange={this.handleChange}></input>
					</div>
					<div className={styles.items}>
						<label className={styles.label}>Cost</label>
						<input type="number" name="cost" value={this.state.cost} onChange={this.handleChange}></input>
					</div>
					<div className={styles.items}>
						<label className={styles.label}>Cost Type</label>
						<select type="dropdown" name="cost_type" value={this.state.cost_type} onChange={this.handleChange}>
							<option value=""></option>
							<option value="SP">SP</option>
							<option value="% HP">% HP</option>
						</select>
					</div>
				</div>
				<div className={styles.items}>
					<label className={styles.label}>Effect</label>
					<input type="text" name="effect" style={{width:"200%",transform:"translateX(-25%)"}} value={this.state.effect} onChange={this.handleChange}></input>
					<button type='submit' className={styles.submit}>Submit</button>
				</div>
			</form>
		)
	}
}

export default SkillForm