const endPoint = 'http://localhost:9000/api/personas'

class PersonasModel{
	static all=()=>{
		return fetch(endPoint)
			.then(response=>response.json())
			.catch(error=>console.log("Failed to fetch data",error))
	}
	static getOne=(name)=>{
		return fetch(endPoint+"/"+name)
			.then(response=>response.json())
			.catch(error=>console.log("Failed to fetch data",error))
	}
	static add=(data)=>{
		return fetch(endPoint,{
			headers:{
        'Content-Type':'application/json'
      },
      method:"POST",
      body: JSON.stringify(data)
		})
		.catch(error=>console.log("Failed to post data"))
	}
	static getSkills=(data)=>{
		return fetch('http://localhost:9000/api/skills')
			.then(response=>response.json())
			.catch(error=>console.log("Failed to fetch data",error))
	}
}


export default PersonasModel