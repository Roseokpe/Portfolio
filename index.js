const hamburger = document.querySelector('.hamburger');
 const menuitems = document.querySelector('.menu-list');
// const aboutContent = document.querySelector('');
// const modal = document.querySelector('');
  hamburger.addEventListener('click', () =>{
  //hamburger.classList.toggle('active');
  document.querySelector('.mobile-menu').style.display = 'block';
});

menuitems.addEventListener('click',() =>{
menuitems.classList.toggle('hamburger');
l});

function showMenu() {
  
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
