// // javascript variables

// // variables(changeable) is like a container

// // variable declaration
// // variableKeyword variableName;

// //ES-5(EcmaScript-5)  
// // var

// // ES-6(EcmaScript-6)
// // let, const


// // variable assignment
// // variableKeyword variableName = value;

// // javascript behaves like synchronous means line by line


// // javascript datatypes
// // string, number, boolean,undefined, null, array, object

// let nullvalue = null

// // checking data types
// console.log(typeof("Ebad")); // string
// console.log(typeof (34)); // number
// console.log(typeof (true)); // boolean  
// console.log(typeof (nullvalue)); // null
// console.log(typeof ([3,4,5,6])); // Array
// console.log(typeof ({'name' : "ebad" , 'Age' : 28})); // object



// let Fullname; // variable declaration
// const age = 28; // variable assignment (constant cannot be changed)
// Fullname = "Ebad uddin";
// // console.log(Fullname, age);

// // operator in js
// // Arithmetic operators
// // +(add), -(subt), /(div), *(mul), %(remainder)

// const num1 = 5;
// const num2 = 4;
// console.log("the addition of two numbers is", num1 + num2);
// console.log("the modulus of two numbers is", num1 % num2);

// // variable declaration

// // variableKeyword variableName;
// let name;
// name  = "Ebad";
// let agee = 28;

// console.log(typeof name);

// // keyword: var, let, const


// let fullName = "Ebad uddin ahmed";
// let classs =  "Masters";

// console.log('fullName & type', fullName, typeof fullName ,'Age & type', age , typeof age,'Class & type', classs, typeof classs);
// // console.log(,typeof classs);

// const sub1 = 5;
// const sub2 = 4;

// const Add = sub1 + sub2;
// const subt = sub1 - sub2;
// const Mul = sub1 * sub2;
// const Div = sub1 / sub2;
// const Modulus = sub1 % sub2;

// console.log('Addition:',Add);
// console.log('Subtration:',subt);
// console.log('mulitiplication:',Mul);
// console.log('Division:',Div);
// console.log('Modulus:',Modulus);

// conditional statements (if, if else, nested if, if elseif)

/* if(condition)
{
statement;
}
*/
// if(true){
    //     console.log('the statement is true');
    // }
    

    // alert, confirm, isNaN, prompt, parseInt

// const time = prompt('Enter your age');
// const time = 9

// if(time === '9'){

//     alert('Class time');

// }else if(time == 11){

//     alert('off time');
    
// }else{
    
//     alert('Pitai hogi');
// }

// comparison operators

// ==, ===, <, >, >=, <=, !=, !==



// const num1 = parseInt(prompt('enter number-1'))
// const num2 = parseInt(prompt('enter number-2'))

// if(num1 >= num2){
//     console.log(typeof num1, typeof num2)
//     alert("num1 is greater than or equal to num2");
    
// }else if(num1 < num2){
    
//     console.log(typeof num1, typeof num2)
//     console.log('statement-2')
//     alert("num1 is less than to num2");
    
// }


// else if(num1 == num2){
    
//     console.log(typeof num1, typeof num2)
//     console.log('statement-2')
//     alert("Both are equal");
    
// }





const sub1 = parseInt(prompt('Enter marks of subject-1 out of 100'))
const sub2 = parseInt(prompt('Enter marks of subject-2 out of 100'))
const sub3 = parseInt(prompt('Enter marks of subject-3 out of 100'))

// Calculate the percentage
let obtained_marks = sub1 + sub2 + sub3
console.log(typeof sub1);
console.log(obtained_marks);
let percentage = (obtained_marks / 300) * 100

// Assigning grades according to percentage
document.write("you percentage is: " + percentage + "<br>");

if(percentage > 80){
    document.write("Grade: A+");
}else if(percentage > 70){
    
    document.write("Grade: A");
}
else if(percentage > 60){
    
    document.write("Grade: B");
}
else if(percentage > 50){
    
    document.write("Grade: C");
}else{
    document.write('Beta paper tw dedo');
}























