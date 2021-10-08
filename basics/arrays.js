// Arrays:
var courses = new Array('EEE141', 'EEE241','EEE111'); // Creating arrays also known as lists
document.write(courses[0]); // We extract values using indices starting from 0

// Another way of declaring arrays
var courses1 = new Array(); // Empty array, we can declare a number inside which is fix the size
courses1[0] = "HTML";
courses1[1] = "CSS";
courses1[2] = "JS";

document.write(courses1[2]);

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses2 = c1.concat(c2); // Concatinating two arrays

document.write(courses2[2]);

/*
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.
It is better to use an object when you want the index to be a string (text).
Use an array when you want the index to be a number.
*/
