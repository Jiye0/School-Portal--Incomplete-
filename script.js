const wrapper = document.querySelector('.wrapper');
const getStarted = document.querySelector('.btn-1');
const applyHere1 = document.querySelector('.card-button1')
const applyHere2 = document.querySelector('.card-button2')
const applyHere3 = document.querySelector('.card-button3')
const applyHere4 = document.querySelector('.card-button4')
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

getStarted.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

applyHere1.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

applyHere2.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

applyHere3.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

applyHere4.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});



