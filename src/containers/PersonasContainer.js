import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Persona from '../components/Persona'
import styles from './PersonasContainer.module.css'

class PersonasContainer extends Component{
	componentDidMount(){
			this.props.fetchData()
	}

	render(){
		let personaList
		if (this.props.data){
			personaList = this.props.data.personas.map((data,index)=>{
				return <Persona data={data} fetchData={this.props.fetchData} key={index}/>
			})
		}
		else personaList="Loading..."
		return(
			<>
				<div className={styles.header}>
					<h1 className={styles.h1}>Compendium</h1>
					<Link to="/personas/register">
						<button className={styles.button}>
						Register a new persona
						</button>
					</Link>
				</div>
				<div className={styles.personaContainer}>
					{personaList}
				</div>
			</>
		)
	}
}

export default PersonasContainer