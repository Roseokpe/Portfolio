const hamburger = document.querySelector('.hamburger');
const menuitems = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'block';
});

menuitems.addEventListener('click', () => {
  menuitems.classList.toggle('.mobile-menu');
});

function showMenu() {
  document.querySelector('.mobile-menu').style.display = 'block';
}

function hideMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.work-container').style.display = 'block';
  document.querySelector('.contact-container').style.display = 'block';
  document.querySelector('.footer').style.display = 'block';
}

document.getElementById('hamburger-id').addEventListener('click', showMenu);
document.getElementById('cancel-id').addEventListener('click', hideMenu);
document.querySelector('.menu-list').addEventListener('click', hideMenu);

// Email validatetion
const myform = document.getElementById('myform');
const email = document.getElementById('email');
const error = document.querySelector('.error-msg');
const submitbtn = document.getElementById('submitbtn');
// the function below check if the email address is all lowercase or not //
function emailCheckLowerCase() {
  let result = false;
  if (email.value !== email.value.toLowerCase()) {
    error.classList.remove('hide');
    submitbtn.disable = true;
  } else {
    error.classList.add('hide');
    result = true;
    submitbtn.disable = false;
  }
  return result;
}

// local storage
const txtname = document.getElementById('txt-name');
const comment = document.getElementById('txt-text');
const inputFields = document.querySelectorAll('.input-fields');
inputFields.forEach((trigger) => {
  trigger.addEventListener('keyup', () => {
  let nemail = email.value;
  let nname = txtname.value;
  let ncomment = comment.value;
  if (trigger.attributes.id.value == 'email'){
    nemail = trigger.value;
  }

  if (trigger.attributes.id.value == 'txt-name'){
    nname = trigger.value;
  }

  if (trigger.attributes.id.value == 'txt-text'){
    ncomment= trigger.value;
  }

  const data = {
    email: nemail,
    name: nname,
    comment: ncomment,
  };
  localStorage.setItem('formdata', JSON.stringify(data));
  });

});

function storeToLocalStorage() {
  const data = {
    email: email.value,
    name: txtname.value,
    comment: comment.value,
  };
  localStorage.setItem('formdata', JSON.stringify(data));
}

submitbtn.onclick = function () {
  if (emailCheckLowerCase() === true) {
    myform.submit();
    storeToLocalStorage();
  }
};

function getLocalStorageData() {
  const data = JSON.parse(localStorage.getItem('formdata'));
  console.log(data);
  email.value = data.email;
  txtname.value = data.name;
  comment.value = data.comment;
}
// to refill the the text areas

if (localStorage.getItem('formdata') != null) {
  getLocalStorageData();
}
