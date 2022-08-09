function myFunction(str)
{
  let SplitArray = str.split(' ');
  let newarray = [];
    
  for(var i = 0; i < SplitArray.length; i++){
      newarray.push(SplitArray[i].charAt(0).toUpperCase()+SplitArray[i].slice(1));
  }
  return newarray.join(' ');
}
console.log(myFunction("the quick brown fox"));