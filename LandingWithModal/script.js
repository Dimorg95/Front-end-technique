//Formulaire
const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');
//Btn des formulaire
const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
//Croix pour fermer les formulaire
const signupX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');

const formContainer = document.querySelector('.form-container');

signupBtn.addEventListener('click', () => {
  signupModal.classList.add('display');
  formContainer.classList.add('disable');
});

loginBtn.addEventListener('click', () => {
  loginModal.classList.add('display');
  formContainer.classList.add('disable');
});

signupX.addEventListener('click', () => {
  signupModal.classList.remove('display');
  formContainer.classList.remove('disable');
});

loginX.addEventListener('click', () => {
  loginModal.classList.remove('display');
  formContainer.classList.remove('disable');
});
