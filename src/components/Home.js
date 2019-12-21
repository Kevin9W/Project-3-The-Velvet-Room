import React, {Component} from 'react';

class Home extends Component{
	render(){
		return(
			<div 
				className="home"
				style={{
					"textAlign":"center",
						background:"rgba(0, 0, 0, 0.50)",
				}}
				>
				<h1>Welcome to the Velvet Room</h1>
				<p>Explore the compendium and view all the personas you have registered.</p>
				<p>Curious about the skills your personas can have? Browse the ones you have encountered!</p>
			</div>
		)
	}
}

export default Home