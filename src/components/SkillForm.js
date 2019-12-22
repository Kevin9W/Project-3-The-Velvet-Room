import React,{Component} from 'react'
import styles from '../css/SkillForm.module.css'

class SkillForm extends Component{
	state={
		name:"",
		type:"",
		effect:"",
		cost:null,
		cost_type:null,
	}
	handleChange=(event)=>{
		let name=event.target.name
		let value=event.target.value
		this.setState({[name]:value})
	}
	handleSubmit=(event)=>{
		event.preventDefault()
		alert('wooo')
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<div className={styles.flex}>
					<div className={styles.items}>
						<label className={styles.label}>Name</label>
						<input type="text" name="name" onChange={this.handleChange}></input>
					</div>
					<div className={styles.items}>
						<label className={styles.label}>Type</label>
						<input type="text" name="type" onChange={this.handleChange}></input>
					</div>
					<div className={styles.items}>
						<label className={styles.label}>Cost</label>
						<input type="number" name="cost" onChange={this.handleChange}></input>
					</div>
					<div className={styles.items}>
						<label className={styles.label}>Cost Type</label>
						<select name="cost_type" onChange={this.handleChange}>
							<option></option>
							<option>SP</option>
							<option>%HP</option>
						</select>
					</div>
				</div>
				<div className={styles.items}>
					<label className={styles.label}>Effect</label>
					<input type="text" name="effect" style={{width:"200%"}} onChange={this.handleChange}></input>
					<button type='submit' className={styles.items}>Submit</button>
				</div>
			</form>
		)
	}
}

export default SkillForm