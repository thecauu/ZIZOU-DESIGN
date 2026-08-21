const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");

const searchButton = document.getElementById("searchButton");
const closeSearch = document.getElementById("closeSearch");
const searchScreen = document.getElementById("searchScreen");


menuButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
});


closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});


searchButton.addEventListener("click", () => {
  searchScreen.classList.add("open");

  setTimeout(() => {
    searchScreen.querySelector("input").focus();
  }, 100);
});


closeSearch.addEventListener("click", () => {
  searchScreen.classList.remove("open");
});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    sideMenu.classList.remove("open");
    searchScreen.classList.remove("open");
  }

});