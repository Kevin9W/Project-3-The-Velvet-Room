const endPoint = 'http://localhost:9000/api/skills'

class SkillsModel{
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
		.catch(error=>console.log("Failed to post data",error))
	}
	static update=(name,data)=>{
		return fetch(endPoint+"/"+name,{
			headers:{
        'Content-Type':'application/json'
      },
      method:"PUT",
      body: JSON.stringify(data)
		})
		.catch(error=>console.log("Failed to update data",error))
	}
	static delete=(name)=>{
		fetch(endPoint+"/"+name,{
      method:"DELETE",
		})
		.catch(error=>console.log("Failed to delete data"))
	}
}

export default SkillsModel