import React, {Component} from 'react'
import SkillsModel from '../model/SkillsModel'
import Skills from '../components/Skills'

class SkillsContainer extends Component{
	state={
		data:null,
	}
	fetchData=()=>{
		SkillsModel.all()
			.then(data=>this.setState({data}))
	}
	componentDidMount(){
			this.fetchData()
	}
	render(){
		return(
			this.state.data?
				<Skills data={this.state.data} fetchData={this.fetchData}/>
			:"Loading..."
		)
	}
}

export default SkillsContainer