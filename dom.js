// getting element by id
// getElementById("idName")

let head1 = document.getElementById("heading-1");
let head2 = document.getElementById("heading-2");
// console.log(head1);
// console.log(head2);

// change the text of head-1
head1.innerText = "head-1"
head2.innerText = "head-2"


// getting the element by class name
// getElementsByClassName()

let box = document.getElementsByClassName("box");
// console.log(box[0].innerHTML)
box[0].innerHTML = "<h1>Welcome to our website</h1> <p>We are learning document object model (DOM)</p>";

let button = document.getElementById("btn")
button.addEventListener('click' , function(){

    box[0].style.background = "orange";
    box[0].style.color = "white";
    box[0].style.padding = "20px";
})