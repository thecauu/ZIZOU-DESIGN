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


/* =========================
   SIDE MENU
========================= */

menuButton.addEventListener("click", () => {
    sideMenu.classList.add("open");
});


closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});


collectionsButton.addEventListener("click", () => {
    collectionsMenu.classList.toggle("open");
});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        sideMenu.classList.remove("open");
    }

});