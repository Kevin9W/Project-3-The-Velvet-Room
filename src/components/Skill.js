import React, {Component} from 'react'

class Skill extends Component{
	state={
		display:"none",
		info:"More"
	}
	handelInfo=()=>{
		switch (this.state.display){
		case 'none':
			this.setState({display:"block",info:"Less"})
			break
		case "block":
			this.setState({display:"none",info:"More"})
			break
		default:
			this.setState({display:"none",info:"More"})
		}
	}
	render(){
		let skill=this.props.data
		let divDisplay=this.state.display
		return(
			<div style={{
					background:"rgba(0, 0, 0, 0.50)",
					margin:"5px",
					borderRadius:"10px",
				}}>
				<p style={{display:"inline-block"}}>{skill.name}: {skill.type}</p>
				<button onClick={this.handelInfo}>
					{this.state.info} Info
				</button>	
				<div style={{
						display:`${divDisplay}`
						}}>
						<p>{skill.effect}</p>
						<p>{skill.cost}{skill.cost_type}</p>
					</div>
			</div>
		)
	}
}

export default Skill