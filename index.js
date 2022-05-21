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

submitbtn.onclick = function () {
  if (emailCheckLowerCase() === true) {
    myform.submit();
    storeToLocalStorage();
    alert("submitted");
  }
};

// local storage
const txtname = document.getElementById('txt-name');
const comment = document.getElementById('txt-text');
function storeToLocalStorage(){
  const data = {
    email: email.value,
    name: txtname.value,
    comment: comment.value,
  };
  alert(JSON.stringify(data));
  localStorage.setItem("formdata",JSON.stringify(data));
}

function getLocalStorageData(){
  var data = JSON.parse(localStorage.getItem("formdata"));
  console.log(data);
  email.value = data.email;
  txtname.value = data.name;
  comment.value = data.comment;
}
// to refill the the text areas

if (localStorage.getItem("formdata") != null){
  getLocalStorageData();
}
