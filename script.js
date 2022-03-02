"use strict"

const buttonSignIn  = document.querySelector('.title-sing_in'),
      buttonSignUp  = document.querySelector('.title-sing_up');

const formSignIn    = document.querySelector('.sign_in'),
      formSignUp    = document.querySelector('.sign_up');

const allButtonSign = document.querySelectorAll('.wrapper-title');

buttonSignIn.addEventListener('click', setSignInTransition);
buttonSignUp.addEventListener('click', setSignUpTransition);

function setSignInTransition(){
    addClassActive(buttonSignIn)
    setTransform(0, 100)
}
setSignInTransition()

function setSignUpTransition(){
    addClassActive(buttonSignUp)
    setTransform(-100, -100)
}

function setTransform(signInTransitionValue, signUpTransitionValue){
    formSignIn.style.transform = `translateX(${signInTransitionValue}%)`;
    formSignUp.style.transform = `translateX(${signUpTransitionValue}%)`;
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

