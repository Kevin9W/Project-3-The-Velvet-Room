import React, {Component} from 'react'
import SkillForm from './SkillForm'
import styles from '../css/Skill.module.css'
import SkillsModel from '../model/SkillsModel'

class Skill extends Component{
	state={
		display:"none",
		edit:"Edit"
	}
	handleDelete=()=>{
		if (window.confirm(`Are you sure you want delete ${this.props.data.name}?`)){
			SkillsModel.delete(this.props.data.name)
			this.props.updateData()
		}
	}
	handleInfo=()=>{
		switch (this.state.display){
		case 'none':
			this.setState({display:"inline-block",edit:"Cancel"})
			break
		case "inline-block":
			this.setState({display:"none",edit:"Edit"})
			break
		default:
			console.log("invalid")
		}
	}
	render(){
		let skill=this.props.data
		let divDisplay=this.state.display
		return(
			<div className={styles.grid}>
				<div className={styles.skill}>
					<p style={{color:"#d40203"}}>{skill.name} - {skill.type}</p>
					<p>{skill.effect} - Cost {skill.cost}{skill.cost_type}</p>
					<div className={styles.form} style={{display:`${divDisplay}`}}>
						<SkillForm data={this.props.data} updateData={this.props.updateData} handleInfo={this.handleInfo} type="edit"/>
					</div>
				</div>
				<div className={styles.button}>
					<button onClick={this.handleInfo}>
						{this.state.edit}
					</button>
					<button onClick={this.handleDelete}>
						Delete
					</button>
				</div>	
			</div>
		)
	}
}

export default Skill