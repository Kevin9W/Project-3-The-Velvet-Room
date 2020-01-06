import React, {Component} from 'react'
import Skill from './Skill'
import SkillForm from './SkillForm'
import SkillsModel from '../model/SkillsModel'

class Skills extends Component{
	state={
		dataUpdate:false,
		data:null,
		index:0,
		disable_back:true,
		disable_next:false,
		display:"none",
		create:"Add New Skill",
	}
	updateData=()=>{
		this.setState({dataUpdate:!this.state.dataUpdate})
	}
	fetchData=()=>{
		SkillsModel.all()
			.then(data=>this.setState({data}))
	}
	componentDidMount(){
			this.fetchData()
	}
	componentDidUpdate(prevProps,prevState){
		if (this.state.dataUpdate !== prevState.dataUpdate){
			this.fetchData()
		}
	}
	handleCreate=()=>{
		switch (this.state.display){
		case 'none':
			this.setState({display:"flex",create:"Cancel"})
			break
		case "flex":
			this.setState({display:"none",create:"Add New Skill"})
			break
		default:
			console.log("invalid")
		}
	}
	sliceArray=(array)=>{
		let sliced=array.slice()
		let result=[]
		let cut=true
		while(cut){ 
			sliced.length>0?
			result.push(sliced.splice(0,5))
			:cut=false
		}
			return result
	}
	moveIndex=(move,end)=>{
		let index=this.state.index
		switch (move){
		case 'next':
			index++
			break
		case "back":
			index--
			break
		case "start":
			index=0
			break
		case "end":
			index=end
			break
		default:
			console.log("invalid")
		}
		this.setState({index},()=>{this.disableButtons(end)})
	}
	disableButtons=(end)=>{
			if(this.state.index===0){
				this.setState({disable_back:true,disable_next:false})
			}
			else if(this.state.index===end){
				this.setState({disable_back:false,disable_next:true})
			}
			else this.setState({disable_back:false,disable_next:false})
	}
	render(){
		let skills
		let skillsEnd
		let divDisplay=this.state.display
		if (this.state.data){
			let skillsArr=this.state.data.skills.map((skill,index)=>{
				return <Skill key={index} data={skill} fetchData={this.fetchData} updateData={this.updateData}/>
			})
			skills=this.sliceArray(skillsArr)
			skillsEnd=skills.length-1
		}
		return(
			this.state.data?
				<>
					<div style={{
						textAlign:'center',
						background:'rgba(0, 0, 0, 0.50)'
					}}>
						<h1 style={{margin:"20px 0px 0px 0px"}}>Skills</h1>
						<button style={{margin:"0px"}} onClick={this.handleCreate}>{this.state.create}</button>
						<p style={{margin:"10px"}}>Page {this.state.index+1} of {skillsEnd+1}</p>
						<nav>
							<button disabled={this.state.disable_back} onClick={()=>this.moveIndex('start',skillsEnd)}> Start </button>						
							<button disabled={this.state.disable_back} onClick={()=>this.moveIndex('back',skillsEnd)}> Back </button>
							<button disabled={this.state.disable_next} onClick={()=>this.moveIndex('next',skillsEnd)}> Next </button>						
							<button disabled={this.state.disable_next} onClick={()=>this.moveIndex('end',skillsEnd)}> End </button>
						</nav>
						<div style={{
							display:`${divDisplay}`,
							justifyContent:"center",
							margin:"0px"
							}}>
							<SkillForm data={this.state.data} updateData={this.updateData} handleInfo={this.handleCreate} type="add"/>
						</div>
					</div>
					<div>
						{skills[this.state.index]}
					</div>
				</>
			:"Loading..."
		)
	}
}

export default Skills