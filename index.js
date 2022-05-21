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
const modal = document.getElementById('myModal');
(function () {
  document.querySelectorAll('.raise-modal').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    };
  };
})();

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on (x), it close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

//Email validatetion

const myform = document.getElementById('myform');
const email = document.getElementById('email');
const error = document.querySelector('.error-message');
/* the below function will check if the email entered is fully lowerCase */
function emailCheckLowerCase(e) {
  if (email.value !== email.value.toLowerCase()) {
    error.classList.remove('hide');
    e.preventDefault();
  } else {
    error.classList.add('hide');
  }
}
form.addEventListener('change', emailCheckLowerCase);
form.addEventListener('submit', emailCheckLowerCase);