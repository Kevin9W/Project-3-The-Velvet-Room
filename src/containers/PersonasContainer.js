import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Persona from '../components/Persona'
import PersonasModel from '../model/PersonasModel'

class PersonasContainer extends Component{
	state={
		data:null,
	}
	
	componentDidMount(){
		this.fetchData()
	}

	fetchData=()=>{
		PersonasModel.all()
			.then(data=>{
				this.setState({data})
		})
	}

	render(){
		let personaList
		if (this.state.data){
			personaList = this.state.data.personas.map((data,index)=>{
				return <Persona data={data} fetchData={this.fetchData} key={index}/>
			})
		}
		else personaList="Loading..."
		return(
			<>
				<h1>Compendium</h1>
				<Link to="/personas/create">
					<button>
					Register a new persona
					</button>
				</Link>
				{personaList}
			</>
		)
	}
}

export default PersonasContainer