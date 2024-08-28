// getting element by id
// getElementById("idName")

// let head1 = document.getElementById("heading-1");
// let head2 = document.getElementById("heading-2");
// // console.log(head1);
// // console.log(head2);

// // change the text of head-1
// head1.innerText = "head-1"
// head2.innerText = "head-2"


// // getting the element by class name
// // getElementsByClassName()

// let box = document.getElementsByClassName("box");
// // console.log(box[0].innerHTML)
// box[0].innerHTML = "<h1>Welcome to our website</h1> <p>We are learning document object model (DOM)</p>";

let button = document.getElementById("btn")
let remove = document.getElementById("btn1")
// button.addEventListener('click' , function(){

//     box[0].style.background = "orange";
//     box[0].style.color = "white";
//     box[0].style.padding = "20px";
// });

// let heading1 = document.getElementsByTagName('h1');
// console.log(heading1[1])
// heading1[1].innerText = "Cusotmized heading";

// query selectors
let box = document.querySelectorAll('.box');
box.forEach(element => {
console.log(element)
button.addEventListener('click', function(){
    element.style.background = "red"
})
remove.addEventListener('click', function(){
    element.style.background = "none"
})
})

// getting the inputs values of user from input fields

let f_name = document.getElementById('f_name');
let l_name = document.getElementById('l_name');
let email = document.getElementById('email');
let submit = document.getElementById('submit');


// let f_name_print = document.getElementById('f_name_print');
// let l_name_print = document.getElementById('l_name_print');
// let email_print = document.getElementById('email_print');
  
// console.log(f_name_print,l_name_print, email_print)

submit.addEventListener('click' , function(event){

    // event.preventDefault()
    // document.write(f_name.value, l_name.value, email.value)
    // console.log(f_name.value, l_name.value, email.value)

// f_name_print.innerText = f_name.value;
// l_name_print.innerText = l_name.value;
// email_print.innerText = email.value;
    
// converting user data into object
let person_data = {
    f_name : f_name.value,
    l_name : l_name.value,
    email : email.value,
}
// console.log(person_data);

// converting object into JSON

let user_json =  JSON.stringify(person_data);
console.log(user_json)

// sending the data in local storage

let success =  localStorage.setItem('user' , user_json);

// retrieve data from local storage
let get_data_json = localStorage.getItem('user');


// converting JSON into object

let user_object = JSON.parse(get_data_json);
console.log(user_object.f_name);

document.getElementById('tbl_fname').innerText = user_object.f_name; 




});










