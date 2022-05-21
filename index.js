const hamburger = document.querySelector('.hamburger');
const menuitems = document.querySelector('.menu-list');
// const popup = document.querySelector('.popup');
//  const bttn = document.querySelector('.popup');

hamburger.addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'block';
});

// bttn.document.querySelector('click', () => {
//   document.classList('.popup');
// });

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

var modal = document.getElementById("myModal");

// to get the button that opens the modal

(function () {
  document.querySelectorAll(".raise-modal").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
          modal.style.display = "block";
      });
  });
  
})();

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on (x), it close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}