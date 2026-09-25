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

const contactMenuLink =
    document.getElementById("contactMenuLink");


/* =========================
   SIDE MENU
========================= */

if (menuButton && sideMenu) {

    menuButton.addEventListener("click", () => {
        sideMenu.classList.add("open");
    });

}


if (closeMenu && sideMenu) {

    closeMenu.addEventListener("click", () => {
        sideMenu.classList.remove("open");
    });

}


if (collectionsButton && collectionsMenu) {

    collectionsButton.addEventListener("click", () => {
        collectionsMenu.classList.toggle("open");
    });

}


/* =========================
   CONTACT LINK
========================= */

if (contactMenuLink) {

    contactMenuLink.addEventListener("click", (event) => {

        event.preventDefault();

        window.location.href = "contact.html";

    });

}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        sideMenu
    ) {

        sideMenu.classList.remove("open");

    }
    
    
    
    /* =========================
   BLOCK RIGHT-CLICK AND DRAGGING
========================= */

const protectedArtwork =
    ".protected-home-image, " +
    ".protected-collection-image, " +
    ".protected-lightbox-image";

document.addEventListener(
    "contextmenu",
    function (event) {

        if (
            event.target.closest(
                protectedArtwork
            )
        ) {
            event.preventDefault();
        }

    }
);

document.addEventListener(
    "dragstart",
    function (event) {

        if (
            event.target.closest(
                protectedArtwork
            )
        ) {
            event.preventDefault();
        }

    }
);


/* =========================================================
   ZIZOU DESIGN — BLOCK ARTWORK PINCH ZOOM
========================================================= */

const protectedArtSelector =
    ".protected-home-image, " +
    ".protected-collection-image, " +
    ".protected-lightbox-image";


document.addEventListener(
    "gesturestart",
    function (event) {

        if (
            event.target.closest(
                protectedArtSelector
            )
        ) {
            event.preventDefault();
        }

    },
    {
        passive: false
    }
);


document.addEventListener(
    "gesturechange",
    function (event) {

        if (
            event.target.closest(
                protectedArtSelector
            )
        ) {
            event.preventDefault();
        }

    },
    {
        passive: false
    }
);

});