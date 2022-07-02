const inputInner = document.querySelectorAll('.form__inp');
const errorText = document.querySelectorAll('.form__error-text');

// form first name
const fname = document.querySelector('#form-fname');
// const fname2 = document.forms['main-form']['First_Name'];
// form last name
const lname = document.querySelector('#form-lname');
// form email
const femail = document.querySelector('#form-email');
// form password
const fpass = document.querySelector('#form-password');

// add error sigh for every line

inputInner.forEach(error => {
  error.classList.remove('error__sign');
});

errorText.forEach(error => {
  error.innerHTML = '';
});
// form name
fname.addEventListener("input", function (event) {
  if (fname.value === '') {
    fname.setCustomValidity("First name cannot be empty");
    fname.reportValidity("");
  } else {
    fname.setCustomValidity("");
  }
});
// form last name
lname.addEventListener("input", function (event) {
  if (lname.validity.typeMismatch) {
    lname.setCustomValidity("Last name cannot be empty");
    lname.reportValidity();
  } else {
    lname.setCustomValidity("");
  }
});
// form email
femail.addEventListener("input", function (event) {
  if (femail.validity.typeMismatch) {
    femail.setCustomValidity("Looks like it not an email");
    femail.reportValidity();
  } else {
    femail.setCustomValidity("");
  }
});
// form password
fpass.addEventListener("input", function (event) {
  if (fpass.validity.typeMismatch) {
    fpass.setCustomValidity("Password cannot be empty");
    fpass.reportValidity();
  } else {
    fpass.setCustomValidity("");
  }
});


// if (fname === null) {
//   document.querySelector('.form__error-text').innerHTML = 'Enter Name'
//   // inputInner.classList.add('error__sign');
// }

// if (lname === null){
//     document.querySelector('.form__error-text').innerHTML = 'Enter Last Name'
// }
// if (femail === null){
//     document.querySelector('.form__error-text').innerHTML = 'Enter Email'
// }
// if (fpass === null){
//     document.querySelector('.form__error-text').innerHTML = 'Enter Password'
// }