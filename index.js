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
  if (email.value !== email.value.toLowerCase()) {
    error.classList.remove('hide');
    return false;
  } else {
    error.classList.add('hide');
    return true;
  }
}

submitbtn.onclick = function (event) {
  if (emailCheckLowerCase() == true) {
    myform.submit();
  }
};
// myform.addEventListener('change', emailCheckLowerCase);
