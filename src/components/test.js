let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function sliceArray(array){
	let sliced=array.slice()
	let result=[]
	let cut=true
	while(cut){ 
		sliced.length>0?
		result.push(sliced.splice(0,7))
		:cut=false
	}
	return result
}

let result=sliceArray(array)
// console.log(result)