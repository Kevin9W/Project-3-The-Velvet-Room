import React, {Component} from 'react'
import SkillForm from './SkillForm'

class Skill extends Component{
	state={
		display:"none",
		edit:"Edit"
	}
	handelInfo=()=>{
		switch (this.state.display){
		case 'none':
			this.setState({display:"block",edit:"Cancel"})
			break
		case "block":
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
			<div style={{
					background:"rgba(0, 0, 0, 0.50)",
					margin:"5px",
					padding:"5px",
					borderRadius:"10px",
				}}>
				<p style={{display:"inline-block"}}>{skill.name} || {skill.type} || {skill.effect} || {skill.cost}{skill.cost_type}</p>
				<div style={{
						display:`${divDisplay}`,
						margin:"0px"
						}}>
						<SkillForm data={this.props.data} fetchData={this.fetchData}/>
				</div>
				<button onClick={this.handelInfo}>
					{this.state.edit}
				</button>		
			</div>
		)
	}
}

export default Skill