import React, {Component} from 'react';
import Personas from '../components/Personas'
import PersonaInfo from '../components/PersonaInfo'
import PersonasModel from '../model/PersonasModel'
import {Route,Switch} from 'react-router-dom'

class PersonasContainer extends Component{
	state={
		personas:null,
		onePersona:null,
		name:"",
	}
	
	componentDidMount(){
		this.fetchData()
	}

	fetchData=()=>{
		PersonasModel.all()
			.then(personas=>{
				this.setState({personas})
		})
	}
	getInfo=()=>{
		PersonasModel.getOne(this.state.name)
			.then(onePersona=>{
				this.setState({onePersona})
			})
	}
	changeName=(name,callback)=>{
		this.setState({name},()=>{
			this.getInfo()
		})
	}

	render(){
		let oneLink="/personas/"+this.state.name
		return(
			<>
				{/* <form>				 */}
				{/* 	<input type="text" onChange={this.changeName}></input> */}
				{/* </form> */}
				{/* {this.state.personas? */}
				<Switch>
					<Route exact path='/personas' 
								 render={props=><Personas{...props} data={this.state.personas} getInfo={this.getInfo} changeName={this.changeName}/>}
								/>
					<Route path={oneLink}
								 render={props=><PersonaInfo{...props} data={this.state.onePersona}/>}
								/>
				</Switch>
				{/* :"Loading..."} */}
			</>
		)
	}
}

export default PersonasContainer