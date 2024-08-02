// javascript variables

// variables(changeable) is like a container

// variable declaration
// variableKeyword variableName;

//ES-5(EcmaScript-5)  
// var

// ES-6(EcmaScript-6)
// let, const


// variable assignment
// variableKeyword variableName = value;

// javascript behaves like synchronous means line by line


// javascript datatypes
// string, number, boolean,undefined, null, array, object

let nullvalue = null

// checking data types
console.log(typeof("Ebad")); // string
console.log(typeof (34)); // number
console.log(typeof (true)); // boolean  
console.log(typeof (nullvalue)); // null
console.log(typeof ([3,4,5,6])); // Array
console.log(typeof ({'name' : "ebad" , 'Age' : 28})); // object



let Fullname; // variable declaration
const age = 28; // variable assignment (constant cannot be changed)
Fullname = "Ebad uddin";
// console.log(Fullname, age);

// operator in js
// Arithmetic operators
// +(add), -(subt), /(div), *(mul), %(remainder)

const num1 = 5;
const num2 = 4;
console.log("the addition of two numbers is", num1 + num2);
console.log("the modulus of two numbers is", num1 % num2);