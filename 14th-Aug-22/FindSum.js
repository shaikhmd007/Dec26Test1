// Write a JavaScript program to find the sum of squares of a numeric vector.


function sum(arr) {
    var sum = 0, 
        i = arr.length;
    while (i--) 
     sum += Math.pow(arr[i], 2);
    return sum;
  }
  console.log(sum([0,1,2,3,4,5,6,7])); //it may  0+1*1=1+2*2=4+,.....3,4,5,6,7
  