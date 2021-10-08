// Simple Object:

var person1 = {name:'Gi-hun', age:34};       // Creating simple objects
var person2 = {name:'Sang-Woo', age:39};

document.write(person1.name); // Output = Gi-hun
person1.age++;                             // Change a property of the object
document.write(person1.age); // Output = 35

// Functions:

function functionName(parameters1,parameters2){   // Basic way of creating functions
    this.name = parameters1;                      // 'this' keyword refers to functionName
    this.age  = parameters2;
}

// Example of function:
function person(name,age){
    this.name = name;
    this.age = age;
}
var afridi = new person('Afridi', 23);
var david  = new person('David', 35);
document.write(afridi.age); //Output = 23
document.write(david.name); // Output = David

// creating methods for function inside and outside

function bornYear(){
    return 2021 - this.age;
}

function newPerson(name,age){
    this.name = name;
    this.age = age;
    this.bornYear = bornYear;
}
var p1 = new newPerson('Momtaj', 40);
document.write(p1.bornYear()); // Output = 1981
/*
*** Method inside the function ***
function newPerson(name,age){
    this.name = name;
    this.age = age;
    this.changeName = function(name){
        this.name = name;
    }
}
}
*/

