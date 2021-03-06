import React from 'react';
import PersonaInfo from './PersonaInfo'
function PersonaInfoLanding(props){
	let {name}=props.match.params
	let result=<h2 style={{
										background:"rgba(0, 0, 0, 0.50)",
										borderRadius:"10px",
										textAlign:"center",
										padding:"10px",
										color:"#d40203",
									}}>Could not find {name} in the compendium</h2>
	if (props.names){
		let isName=props.names.filter(validName=>validName===name)	
		if (isName[0]){
			result= <PersonaInfo{...props} editContent={props.editContent} fetchData={props.fetchData}/>
		}
	}
	return result
}

export default PersonaInfoLanding