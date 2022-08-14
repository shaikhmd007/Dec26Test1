/* Task 1: 
Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
 */
let myColors= ["Red", "Green", "White", "Black"];
function ArrayToString(){
    console.log(myColors.join(" , "));
    console.log(myColors.join(" - "));
    console.log(myColors.join(" + "));
    console.log(myColors.join("   "));
    
}
ArrayToString();