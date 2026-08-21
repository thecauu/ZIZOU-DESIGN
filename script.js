const menuButton =
    document.getElementById("menuButton");

const closeMenu =
    document.getElementById("closeMenu");

const sideMenu =
    document.getElementById("sideMenu");

const collectionsButton =
    document.getElementById("collectionsButton");

const collectionsMenu =
    document.getElementById("collectionsMenu");



/* OPEN MENU */

menuButton.addEventListener("click", () => {

    sideMenu.classList.add("open");

});



/* CLOSE MENU */

closeMenu.addEventListener("click", () => {

    sideMenu.classList.remove("open");

});



/* COLLECTION DROPDOWN */

collectionsButton.addEventListener("click", () => {

    collectionsMenu.classList.toggle("open");

});



/* ESCAPE KEY CLOSES MENU */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        sideMenu.classList.remove("open");

    }

});