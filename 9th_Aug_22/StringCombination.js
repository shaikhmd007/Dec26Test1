let myFunction = (str) =>{
	let arr = [];
	for(let i = 0 ;i < str.length; i++)
	{
		for(let j = i + 1; j< str.length + 1; j++)
		{
			arr.push(str.slice(i , j));
		}
	}
return arr;
}
console.log(myFunction('Dog'));

