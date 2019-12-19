import React, {Component} from 'react';

class PersonaInfo extends Component{
	render(){
		let stats
		let elements
		if (this.props.data){
			stats=Object.entries(this.props.data.stats[0]).map(([key,value])=>({key,value}))
			stats=stats.map((stat,index)=>{
				return <p key={index}>{stat.key}: {stat.value}</p>
			})
			elements=Object.entries(this.props.data.elementals[0]).map(([key,value])=>({key,value}))
			elements=elements.map((element,index)=>{
				return <p key={index}>{element.key}: {element.value}</p>
			})
		}

		return(
			this.props.data?
			<>
				<h1>{this.props.data.name}</h1>
				<h2>{this.props.data.arcana}</h2>
				<div className="stats">
					{stats}
				</div>
				<div className="elementals">
					{elements}
				</div>
			</>:"Loading..."
		)
	}
}

export default PersonaInfo