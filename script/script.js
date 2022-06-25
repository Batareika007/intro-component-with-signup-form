const inputInner = document.querySelectorAll('.form__inp');
const fname = document.querySelector('#form-fname');
const lname = document.querySelector('#form-lname');
const femail = document.querySelector('#form-email');
const fpass = document.querySelector('#form-password');


inputInner.forEach(error => {
  error.classList.remove('error__sign');
  
});



if (fname === null){
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
