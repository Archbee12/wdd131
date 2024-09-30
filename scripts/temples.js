const navEl = document.querySelector(".navigation");
const hamMenu = document.querySelector(".hamburger");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hamMenu.addEventListener("click", () => {
  navEl.classList.toggle('show');
  hamMenu.classList.toggle('active');
});