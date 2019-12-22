const endpoint = 'http://localhost:9000/api/skills'

class SkillsModel{
	static all=()=>{
		return fetch(endpoint)
			.then(response=>response.json())
			.catch(error=>console.log("Failed to fetch data",error))
	}
	static getOne=(name)=>{
		return fetch(endpoint+"/"+name)
			.then(response=>response.json())
			.catch(error=>console.log("Failed to fetch data",error))
	}
}
export default SkillsModel