import React, {Component} from 'react';
import SkillsModel from '../model/SkillsModel'


class SkillInfo extends Component{
	state={
		data:null,
	}
	getInfo=(name)=>{
		SkillsModel.getOne(name)
			.then(data=>{
				this.setState({data})
			})
	}
	componentDidMount(){
		let {name}=this.props.match.params
		this.getInfo(name)
	}
	render(){
		let skill
		if(this.state.data){
			skill=this.state.data
		}
		return(
			this.state.data?
				<div>
					<h1>{skill.name}</h1>
					<p>{skill.type}</p>
					<p>{skill.effect}</p>
					<p>{skill.cost}{skill.cost_type}</p>
				</div>
			:"Loading..."
		)
	}
}

export default SkillInfo