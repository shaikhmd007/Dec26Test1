// Geomatric Progression:

var n1=3; 
n1=parseInt(n1);
var n2=5; 
n2=parseInt(n2);
var num = 10;
num=parseInt(num);

var position;
    for (var i = 0; i < num; i++) {
        position= n1 * Math.pow(n2, i);
        console.log(position + " ");
    }