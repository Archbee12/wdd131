const currentYear = document.querySelector("#currentYear");

// use the date object
const today = new Date();

currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "medium",
    timeStyle: "medium",
  }
).format(today)}</span>`;


const navEl = document.querySelector(".navigation");
const hamMenu = document.querySelector(".hamburger");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hamMenu.addEventListener("click", () => {
  navEl.classList.toggle('show');
  hamMenu.classList.toggle('active');
});


// Array of Temple Objects

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bilings, Montana, USA",
    location: "Billings, Montana, USA",
    dedicated: "1999, November 20",
    area: 33800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/08-Billings-Montana-Temple-1781063.jpg"
  },
  {
    templeName: "Accra, Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January 11",
    area: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Edmunton, Alberta, Canada",
    location: "Edmonton, Alberta, Canada",
    dedicated: "1999, December 11",
    area: 10700,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/edmonton-alberta/400x250/edmonton-alberta-temple-lds-854741-wallpaper.jpg"
  }
];

function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';

  const name = document.createElement('h2');
  name.textContent = temple.templeName;
  card.appendChild(name);

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  card.appendChild(location);

  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  card.appendChild(dedicated);

  const size = document.createElement('p');
  size.textContent = `Area: ${temple.area} sq ft`;
  card.appendChild(size);

  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = 'lazy';
  card.appendChild(image);

  return card;
}

function displayTempleCards(temples, title) {
  const container = document.getElementById('templesContainer');
  container.innerHTML = ''; // Clear previous content

  const pageTitle = document.getElementById('title');
  pageTitle.textContent = title;

  temples.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

displayTempleCards(temples, title);


function filterTemples(criteria) {
  let filteredTemples;
  let title;
  switch (criteria) {
    case 'old':
      filteredTemples = temples.filter(temple => temple.dedicated.split(", ")[0] < 1900);
      title = 'Old Temples';
      break;
    case 'new':
      filteredTemples = temples.filter(temple => temple.dedicated.split(", ")[0] > 2000);
      title = 'New Temples';
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      title = 'Large Temples';
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      title = 'Small Temples';
      break;
    default:
      filteredTemples = temples;
      title = 'All Temples';
  }
  displayTempleCards(filteredTemples, title);
}

// // Event listeners for navigation buttons

document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));
document.getElementById('home').addEventListener('click', () => filterTemples('all'));

// Initial display
filterTemples('all');