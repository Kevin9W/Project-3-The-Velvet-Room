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
				return <Persona data={data} changeName={this.props.changeName} key={index}/>
			})
		}
		else personaList="Loading..."
		return(
			<>
				<Link to="/personas/create">
					<button>
					Register a new persona
					</button>
				</Link>
				{/* <form>				 */}
				{/* 	<input type="text" onChange={this.changeName}></input> */}
				{/* </form> */}
				{personaList}
			</>
		)
	}
}

export default PersonasContainer