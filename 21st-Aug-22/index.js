// Task : Write a JavaScript program to pass a 'JavaScript function' as parameter.
// Solution 1:

// Higher Order Function Or Function returns a function;

function MainFunction() {
  console.log("This Is Main function");
  function RetFunction() {
    console.log("Returned Function by Main Function");
  }

  return RetFunction;
}
const ans = MainFunction();
ans();

// Task 2:  What’s the difference between window.onload vs document.onload?

// Answer :

/*  document.onload
It gets fired prior to loading of images and other external content. document.onload event is fired before the window.onload.

window.onload
It gets fired when the complete page loads, which includes images, scripts, css, etc.




Task 3 : What’s the fastest way to query DOM?

Answer :  

First of all we should understand that a single selection operation is ultimately fast and there`s probably no sense in measuring single operation time. To notice any significant performance difference we will use the following function skeleton:
we can try this ==>

- Using document.querySelector method
-  Accessing elements by id (with getElementById method)
 - Accessing elements by class names (e.g. document.getElementsByClassName(‘my_class’)[4])

 */
