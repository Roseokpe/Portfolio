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

// popup
const projects = [{
  id: '001',
  name: 'Multi - Post stories-1',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: 'images/Snapshoot-Portfolio.png',
  technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby'],
  link: 'link_to_live_version.com',
},
{
  id: '002',
  name: 'Multi - Post stories-2',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been theindustrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: 'images/Img-Placeholder.png',
  technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby'],
  link: 'link_to_live_version.com',
},
{
  id: '003',
  name: 'Multi - Post stories-3',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: 'images/Snapshoot-Portfolio.png',
  technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby'],
  link: 'link_to_live_version.com',
},
{
  id: '004',
  name: 'Multi - Post stories-4',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: 'images/Snapshoot-Portfolio.png',
  technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby'],
  link: 'link_to_live_version.com',
}];

function fillModal(e) {
  const h2 = document.querySelector('.modal-content h2');
  const p = document.querySelector('.modal-content p');
  const img = document.querySelector('.modal-image');
  const items = document.querySelectorAll('.modal-link li');
  h2.textContent = e.name;
  p.textContent = e.description;
  img.src = e.image;
  for (let i = 0; i < items.length; i += 1) {
    items[i].textContent = e.technologies[i];
  }
}

function getModalData(key, obj) {
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i].id === key) {
      return obj[i];
    }
  }
  return null;
}
const modal = document.getElementById('myModal');
const raiseModal = document.querySelectorAll('.raise-modal');
raiseModal.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const data = getModalData(trigger.attributes.id.value, projects);
    fillModal(data);
    modal.style.display = 'block';
  });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on (x), it close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

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
    if (trigger.attributes.id.value === 'email') {
      nemail = trigger.value;
    }

    if (trigger.attributes.id.value === 'txt-name') {
      nname = trigger.value;
    }

    if (trigger.attributes.id.value === 'txt-text') {
      ncomment = trigger.value;
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