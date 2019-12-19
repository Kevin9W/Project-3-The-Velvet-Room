import React from 'react';
import Persona from './Persona'

let Personas=(props)=>{
	let personaList
	if (props.data){
		personaList = props.data.personas.map((data,index)=>{
			return <Persona data={data} getInfo={props.getInfo} changeName={props.changeName} key={index}/>
		})
	}
	else personaList="Loading..."
	return(
		<>
			<h1>Personas</h1>
			{personaList}
		</>
	)
}

export default Personas