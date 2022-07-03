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

errorText.forEach(error => {
  error.innerHTML = '';
});


const validateForm = () => {
  validateName();
  validateLastName();
  validateEmail();
  validatePass();
  return false
}

const validateName = () => {
  if (fname.value === '') {
    inputInner[0].classList.add('error__sign');
    errorText[0].innerHTML = 'First name cannot be empty';
    fname.setCustomValidity = "";
    return false;
  }
  // else {
  inputInner[0].classList.remove('error__sign');
  errorText[0].innerHTML = '';
  return true;
  // }
}


const validateLastName = () => {
  if (lname.value === '') {
    inputInner[1].classList.add('error__sign');
    errorText[1].innerHTML = 'Last name cannot be empty';
    return false;
  } else {
    inputInner[1].classList.remove('error__sign');
    errorText[1].innerHTML = '';
    return true;
  }
}


const validateEmail = () => {

  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (femail.value === '') {
    inputInner[2].classList.add('error__sign', 'red_clr');
    errorText[2].innerHTML = 'Email cannot be empty';
    return false;
  } else if (!emailRegExp.test(femail.value)) {
    inputInner[2].classList.add('error__sign', 'red_clr');
    errorText[2].innerHTML = 'Looks like it not an email';
    return false;
  } else {
    inputInner[2].classList.remove('error__sign', 'red_clr');
    errorText[2].innerHTML = '';
    return true;
  }
}


const validatePass = () => {
  if (fpass.value === '') {
    inputInner[3].classList.add('error__sign');
    errorText[3].innerHTML = 'Password cannot be empty';
    return false;
  } else {
    inputInner[3].classList.remove('error__sign');
    errorText[3].innerHTML = '';
    return true;
  }
}