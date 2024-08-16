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





// const sub1 = parseInt(prompt('Enter marks of subject-1 out of 100'))
// const sub2 = parseInt(prompt('Enter marks of subject-2 out of 100'))
// const sub3 = parseInt(prompt('Enter marks of subject-3 out of 100'))

// // Calculate the percentage
// let obtained_marks = sub1 + sub2 + sub3
// console.log(typeof sub1);
// console.log(obtained_marks);
// let percentage = (obtained_marks / 300) * 100

// // Assigning grades according to percentage
// document.write("you percentage is: " + percentage + "<br>");

// if(percentage > 80){
//     document.write("Grade: A+");
// }else if(percentage > 70){
    
//     document.write("Grade: A");
// }
// else if(percentage > 60){
    
//     document.write("Grade: B");
// }
// else if(percentage > 50){
    
//     document.write("Grade: C");
// }else{
//     document.write('Beta paper tw dedo');
// }

// nested if
/*
if(condition){

    if(condition){
        statement;
    }else{
        statement
    }

}else{
    statement

}
 */


// voting system
// let age = 21;
// let CNIC = "No";

// let CNIC = prompt("Do you hold a CNIC: Yes or No? ");

// if(CNIC == "Yes"){
    
//     let age = prompt("Enter your age");
//     if(age > 18){
//         document.write("you are eligible for vote");
//     }else{
//         document.write("Bary hoky ao beta");
//     }

// }else{

//     document.write("you are not eligible for vote");

// }


// loops (for, while, do while)
// array


// counting
// when we know how much iteration will perform

// for(let i = 11; i > 0; i--){
//     console.log(i)
//     document.write(i + "<br>");
// }


// we don't know how much iteration will perform

// let i = 1;

// while(i <= 10){
//     document.write("Ebad uddin ahmed" + "<br>");
//     i++;
// }

// do{
//     document.write("<li> Ebad Uddin Ahmed </li>");
//     i++;

// }while(i <= 10)


// Array
              // 0       //1      //2     //3
let names = ["Farrukh" , "Ali" , "uzair", "usama"];
// names[4] = "aman";
// names[5] = "Ebad";
// console.log(names)
// console.log(names[1])
// console.log(names[3])
// console.log(names[4])
// console.log(names[5])

// 2nd method to declare array
let numbers = new Array(4);
numbers[0] = 3
numbers[1] = 4
numbers[2] = 6
numbers[3] = 6

// console.log(numbers)


// 3rd method to declare an array
let techs = [];
techs[0] = "laravel";
techs[1] = ".Net";
techs[2] = "SQL";
techs[3] = "c#";
// console.log(techs);

// for(let i = 0; i < 4; i++){
//     document.write(techs[i] + "<br>");
// }


let marks = [
    Abdullah = [34, 54, 88, 76],    // 0
    Ebad = [200, 100, 300, 500],    // 1
    Taha = [20, 30 , 40, 50],            //2
];



for(let x = 0; x < 3; x++){     // outer loop
    document.write('students Marks' + "<br>" )
    for(let y = 0;  y < 4; y++){    // inner loop
        document.write("<li>" + marks[x][y] + "</li>");
    }
}

// functions 
/*

function_keyword function_name(){

}

*/





function GetfullName(){
document.write("Ebad Uddin Ahmed");
}

// GetfullName();
// document.write('break point')
// GetfullName();
// GetfullName();


function addition(){
    let num1 = 3;
    let num2 = 5;
    let result = num1 + num2;
    document.write(result); 
}

addition()














