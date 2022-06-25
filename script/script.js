const inputInner = document.querySelectorAll('.form__inp');
const errorText = document.querySelectorAll('.form__error-text');


const fname = document.querySelector('#form-fname');
const lname = document.querySelector('#form-lname');
const femail = document.querySelector('#form-email');
const fpass = document.querySelector('#form-password');

// add error sigh for every line

inputInner.forEach(error => {
  error.classList.remove('error__sign');
});

errorText.forEach(error => {
  error.innerHTML = '';
});




if (fname === null) {
  document.querySelector('.form__error-text').innerHTML = 'Enter Name'
  // inputInner.classList.add('error__sign');
}

// if (lname === null){
//     document.querySelector('.form__error-text').innerHTML = 'Enter Last Name'
// }
// if (femail === null){
//     document.querySelector('.form__error-text').innerHTML = 'Enter Email'
// }
// if (fpass === null){
//     document.querySelector('.form__error-text').innerHTML = 'Enter Password'
// }