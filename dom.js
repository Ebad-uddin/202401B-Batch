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

// getting the inputs of user from input fields

let f_name = document.getElementById('f_name');
let l_name = document.getElementById('l_name');
let email = document.getElementById('email');
let submit = document.getElementById('submit');

submit.addEventListener('click' , function(event){
    event.preventDefault()
    document.write(f_name.value, l_name.value, email.value)
})


