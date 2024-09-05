let header=document.querySelector(".header");
window.onscroll=function (){
    if(window.scrollY !=0){
        header.style.background="#e3e6f3";
    }
    else{
        header.style.background=null;
    }
}
const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click',() =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click',() =>{
    container.classList.remove("sign-up-mode");
});








document.addEventListener('DOMContentLoaded', () => {
    // Retrieve form elements
    const signUpForm = document.querySelector('.sign-up-form');
    const signInForm = document.querySelector('.sign-in-form');
    const signUpBtn = document.querySelector('#sign-up-btn');
    const signInBtn = document.querySelector('#sign-in-btn');
    const container = document.querySelector('.container');

    // Handle sign up form submission
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password1 = signUpForm.querySelectorAll('input[type="password"]')[0].value;
        const password2 = signUpForm.querySelectorAll('input[type="password"]')[1].value;

        if (password1 !== password2) {
            alert("Passwords do not match!");
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.username === username)) {
            alert("Username already exists!");
            return;
        }

        users.push({ username, email, password: password1 });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Sign up successful!");
    });

    // Handle sign in form submission
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const username = signInForm.querySelector('input[type="text"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;
    
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);
    
        if (user) {
            alert("Sign in successful!");
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'shop.html';
        } else {
            alert("Invalid username or password.");
        }
    });
    

    // Handle sign up and sign in mode switching
    signUpBtn.addEventListener('click', () => {
        container.classList.add('sign-up-mode');
    });

    signInBtn.addEventListener('click', () => {
        container.classList.remove('sign-up-mode');
    });
});
let disp=document.querySelector('.mynav');
let btn=document.querySelector('#respons');
btn.addEventListener('click',function(){
    if(btn.classList.contains('closit')){
        disp.style.animation="hide 3s forwards linear";
        btn.classList.remove('closit');
    }else{
        disp.style.display="flex";
        disp.style.animation="disp 3s forwards linear";
        btn.classList.add("closit")
    }
})