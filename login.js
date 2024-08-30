// simple Login form


let input_email = document.getElementById('email');
let input_password = document.getElementById('password');
let login = document.getElementById('submit');
console.log(email, password)

// getting the data from localstorage
let users_data = localStorage.getItem('user');

// converting the json into object

let users_object = JSON.parse(users_data);

console.log(users_object.email)




login.addEventListener('click', function(){

    if(input_email.value == users_object.email && input_password.value == users_object.password){
        alert('login successful');
        window.location = 'welcome.html';
    }else{
        alert('Invalid credentials');
    }
})



