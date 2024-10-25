const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];



const $products = document.querySelector("#products");


if ($products) {
  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.name;
    option.textContent = capitalizeFirstLetter(product.name);
    $products.appendChild(option);
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}  

document.addEventListener('DOMContentLoaded', () => {
  const reviewCounter = document.getElementById('reviewCounter');
  let reviewsCompleted = localStorage.getItem('reviewsCompleted') || 0;
  reviewsCompleted = parseInt(reviewsCompleted) + 1;
  reviewCounter.textContent = `Reviews Completed: ${reviewsCompleted}`;

  // Simulating a form submission (for example purposes)
  reviewsCompleted;
  localStorage.setItem('reviewsCompleted', reviewsCompleted);
  reviewCounter.textContent = `Reviews Completed: ${reviewsCompleted}`;
  // document.body.appendChild(reviewCounter);
});



//Get current year
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