"use strict"

const buttonSignIn  = document.querySelector('.title-sing_in'),
      buttonSignUp  = document.querySelector('.title-sing_up');

const formSignIn    = document.querySelector('.sign_in'),
      formSignUp    = document.querySelector('.sign_up');

const allButtonSign = document.querySelectorAll('.wrapper-title');

buttonSignIn.addEventListener('click', signIn);
buttonSignUp.addEventListener('click', signUp);

function signIn(){
    addClassActive(buttonSignIn)
    setTransform(0, 100)
}
signIn()

function signUp(){
    addClassActive(buttonSignUp)
    setTransform(-100, -100)
}

function setTransform(signIn, signUp){
    formSignIn.style.transform = `translateX(${signIn}%)`;
    formSignUp.style.transform = `translateX(${signUp}%)`;
}

function addClassActive(elem){
    clearActiveButton();
    elem.classList.add('active');
}

function clearActiveButton(){
    allButtonSign.forEach(elem =>{
        elem.classList.remove('active');
    })
}

