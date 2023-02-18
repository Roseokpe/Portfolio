//
// Menu mobile toggle active
//

const body = document.querySelector('body');
const header = document.querySelector('header');
const hamburger = document.querySelector('.menu_mob');

// Classes for close menu
const classNames = ['fa-x', 'menu_link', 'fa-solid', 'fa-envelope'];

hamburger.addEventListener('click', () => {
  header.classList.add('active');
  body.classList.add('noscroll');
});

header.addEventListener('click', (event) => {
  const clickedElementClassName = event.target.classList[0];
  const shouldToggle = classNames.some((className) => className === clickedElementClassName);

  if (shouldToggle && header.classList.contains('active')) {
    header.classList.remove('active');
    body.classList.remove('noscroll');
  }
});

window.addEventListener('resize', () => {
  if (header.classList.contains('active')) {
    header.classList.remove('active');
    body.classList.remove('noscroll');
  }
});

//
// Array of projects objects
//

const projects = [{
  name: 'Cargogo Rentals',
  description: 'CarGoGo is an online rental platform that offers a user-friendly and efficient way for customers to rent cars. Once a customer has found a car that they like, CarGoGo makes it easy for them to favorite it. Customers can save or delete their favorite cars for future rentals.',
  featuredImage: 'images/cargogo.png',
  altTextImage: 'cargogo main page',
  technologies: ['React', 'RoR', 'Tailwind','PostgreSQL'],
  linkLiveVersion: 'frabjous-profiterole-723fe2.netlify.app/',
  linkSource: 'https://github.com/Roseokpe/CarGoGo-Backend',
}, {
  name: 'Space Traveller booking app',
  description: 'Real-time data from the SpaceX API is used by this application. Users can join particular space missions and reserve rockets using it.',
  featuredImage: 'images/space-traveller-app.png',
  altTextImage: 'Origami main page',
  technologies: ['RestApi', 'Reactjs', 'Redux','Boostrap'],
  linkLiveVersion: 'https://space-travellers-97.netlify.app/',
  linkSource: 'https://github.com/Roseokpe/space-travellers',
}, {
  name: 'Budgetrite App',
  description: 'This app makes budgeting seamless.It allows user to signup, create categories, document transactions, keep user balance and more',
  featuredImage: 'images/budgetRite.PNG',
  altTextImage: 'Budgetrite app main page',
  technologies: ['RoR', 'Ruby', 'PostgreSQL ', 'Rspec'],
  linkLiveVersion: 'not availabile',
  linkSource: 'https://github.com/Roseokpe/budgetrite',
}, {
  name: 'Covid-19 pandemic in South America',
  description: 'This is a web application that will display the live total number of COVID-19 cases around the world.The users can quickly search for any specific country of their choosing.',
  featuredImage: 'images/stats-app.png',
  altTextImage: 'Covid-19 home page',
  technologies: ['React', 'Redux', 'JavaScript'],
  linkLiveVersion: 'https://willowy-biscuit-94b35f.netlify.app',
  linkSource: 'https://github.com/Roseokpe/covid-stats',
}];

//
// Project sections created when page loads
//

const portfolio = document.getElementById('portfolio');

for (let i = projects.length - 1; i >= 0; i -= 1) {
  const section = document.createElement('section');
  section.className = 'proj';

  const img = document.createElement('img');
  img.src = projects[i].featuredImage;
  img.alt = projects[i].altTextImage;
  section.appendChild(img);

  const h3 = document.createElement('h3');
  h3.className = 'colorfff fw500';
  h3.innerText = projects[i].name;
  section.appendChild(h3);

  const p = document.createElement('p');
  p.className = 'ff_inter fw400';
  p.innerText = projects[i].description;
  section.appendChild(p);

  const ul = document.createElement('ul');

  for (let k = 0; k < projects[i].technologies.length; k += 1) {
    const li = document.createElement('li');
    li.className = 'colorfff ff_inter fw500';
    li.innerText = projects[i].technologies[k];
    ul.appendChild(li);
  }

  section.appendChild(ul);

  const button = document.createElement('button');
  button.type = 'button';
  /* create a class with the object id number after underline */
  button.className = `_${i} colorfff`;
  button.innerText = 'See project';
  section.appendChild(button);
  portfolio.insertAdjacentElement('afterend', section);
}

//
// Project popup window
//

const seeProjectButtons = document.querySelectorAll('.proj button');

seeProjectButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const i = parseInt(e.target.classList[0].substring(1), 10);
    const popupWrapper = document.createElement('div');
    popupWrapper.className = 'popup_wrapper';
    popupWrapper.id = 'popup_container';

    // Close popup window click on "X" or outside the popup

    popupWrapper.addEventListener('click', (e) => {
      if (e.target.id === 'popup_container' || e.target.classList[0] === 'popup_close') {
        popupWrapper.remove();
      }
    });

    const article = document.createElement('article');
    const div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.className = 'colorfff fw500';
    h1.innerText = projects[i].name;
    div.appendChild(h1);

    const i0 = document.createElement('i');
    i0.className = 'popup_close colorfff fa-solid fa-x';
    div.appendChild(i0);
    article.appendChild(div);

    const img1 = document.createElement('img');
    img1.src = projects[i].featuredImage;
    img1.alt = projects[i].altTextImage;
    article.appendChild(img1);

    const p2 = document.createElement('p');
    p2.className = 'colorfff fw400';
    p2.innerText = projects[i].description;
    article.appendChild(p2);

    const ul1 = document.createElement('ul');

    for (let k = 0; k < projects[i].technologies.length; k += 1) {
      const li = document.createElement('li');
      li.className = 'colorfff ff_inter fw500';
      li.innerText = projects[i].technologies[k];
      ul1.appendChild(li);
    }

    article.appendChild(ul1);

    const div1 = document.createElement('div');

    const button1 = document.createElement('button');
    button1.className = 'colorfff fw500';

    const a1 = document.createElement('a');
    a1.href = projects[i].linkLiveVersion;

    const span = document.createElement('span');
    span.innerText = 'See Live';
    a1.appendChild(span);

    const img = document.createElement('img');
    img.src = 'images/icons-live.svg';
    a1.appendChild(img);
    button1.appendChild(a1);
    div1.appendChild(button1);

    const button2 = document.createElement('button');
    button2.className = 'colorfff fw500';

    const a2 = document.createElement('a');
    a2.href = projects[i].linkSource;

    const span1 = document.createElement('span');
    span1.innerText = 'See Source';
    a2.appendChild(span1);

    const i1 = document.createElement('i');
    i1.className = 'fa-brands fa-github';
    a2.appendChild(i1);
    button2.appendChild(a2);
    div1.appendChild(button2);
    article.appendChild(div1);
    popupWrapper.appendChild(article);
    portfolio.insertAdjacentElement('afterend', popupWrapper);
  });
});
