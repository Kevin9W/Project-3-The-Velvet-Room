import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import SkillsModel from '../model/SkillsModel'
import Skills from '../components/Skills'

class SkillsContainer extends Component{
	state={
		data:null,
		editData:null,
	}
	fetchData=()=>{
		SkillsModel.all()
			.then(data=>this.setState({data}))
	}
	componentDidMount(){
			this.fetchData()
	}
	editSkill=(editData)=>{
		this.setState({editData})
	}
	render(){
		return(
			this.state.data?
			<>
				<Switch>
					<Route exact path="/skills" 
						render={props=><Skills data={this.state.data} fetchData={this.fetchData}/>}
					/>
					{/* <Route exact path="/skills/:name"  */}
					{/* 	render={props=><SkillInfo{...props} editSkill={this.editSkill}/>} */}
					{/* /> */}
				</Switch>
			</>
			:"Loading..."
		)
	}
}

export default SkillsContainer