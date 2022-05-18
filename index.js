const hamburger = document.querySelector('.hamburger');
// const mobileMenu = document.querySelector('');
// const aboutContent = document.querySelector('');
// const modal = document.querySelector('');
  hamburger.addEventListener('click', () =>{
  //hamburger.classList.toggle('active');
  document.querySelector('.mobile-menu').style.display = 'block';
});

function showMenu() {
  // document.querySelector('#menuList').style.display = 'inline-block';
  // document.querySelector('.mobile-sectionLinks').style.display = 'flex';
  // document.querySelector ('.logo').style.display = 'none';
  // document.querySelector('.section-container').style.display = 'none';
  // document.querySelector('.work-container').style.display = 'none';
  // document.querySelector('.contact-container').style.display = 'none';
  // document.querySelector('.footer').style.display = 'none';
}

function hideMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
  //document.querySelector('.logo').style.display = 'inline';
  //document.querySelector('.section-container').style.display = 'block';
  document.querySelector('.work-container').style.display = 'block';
  document.querySelector('.contact-container').style.display = 'block';
  document.querySelector('.footer').style.display = 'block';
  
}

document.getElementById('hamburger-id').addEventListener('click', showMenu);
document.getElementById('cancel-id').addEventListener('click', hideMenu);
