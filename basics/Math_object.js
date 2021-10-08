// The 'Math' Object:

var x = Math.PI;
document.write(x);

//List of all the properties and methods in Math object:
/*

Math.sin(x)  ---> returns sine of x.
Math.cos(x)  ---> returns cosine of x.
Math.tan(x)  ---> returns tangent of x.
Math.acos(x) ---> inverse cosine of x, same for others.

Math.max(x,y,z...n) ---> returns the maximum in the list.
Math.min(x,y,z...n) ---> returns the minimum in the list.
Math.abs(x)         ---> returns absolute value of x.
Math.pow(x,y)       ---> returns x to the power of y.
Math.sqrt(x)        ---> returns square root of x.
Math.exp(x)         ---> return e to the power of x.
Math.random()       ---> returns random number between 0 and 1.
Math.log(x)         ---> returns natural log of x.
Math.round(x)       ---> returns x rounded to the nearest integer.
Math.floor(x)       ---> returns x, rounded downwards towards the nearest integer.
Math.ceil(x)        ---> returns x, rounded upwards towards the nearest integer.

Math.E              ---> returns the value of e.
Math.PI             ---> returns the value of PI.
*/

// Example:
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
document.write("The square root of " + n + " is " + answer);
