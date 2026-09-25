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

    menuButton.addEventListener(
        "click",
        () => {

            sideMenu.classList.add(
                "open"
            );

        }
    );

}


if (closeMenu && sideMenu) {

    closeMenu.addEventListener(
        "click",
        () => {

            sideMenu.classList.remove(
                "open"
            );

        }
    );

}


if (
    collectionsButton &&
    collectionsMenu
) {

    collectionsButton.addEventListener(
        "click",
        () => {

            collectionsMenu.classList.toggle(
                "open"
            );

        }
    );

}


/* =========================
   CONTACT LINK
========================= */

if (contactMenuLink) {

    contactMenuLink.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            window.location.href =
                "contact.html";

        }
    );

}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            sideMenu
        ) {

            sideMenu.classList.remove(
                "open"
            );

        }

    }
);


/* =========================
   PROTECTED ARTWORK
========================= */

const protectedArtwork =
    ".protected-home-image, " +
    ".protected-collection-image, " +
    ".protected-lightbox-image";


/* =========================
   BLOCK RIGHT-CLICK
========================= */

document.addEventListener(
    "contextmenu",
    function (event) {

        if (
            event.target instanceof Element &&
            event.target.closest(
                protectedArtwork
            )
        ) {

            event.preventDefault();

        }

    }
);


/* =========================
   BLOCK DRAGGING
========================= */

document.addEventListener(
    "dragstart",
    function (event) {

        if (
            event.target instanceof Element &&
            event.target.closest(
                protectedArtwork
            )
        ) {

            event.preventDefault();

        }

    }
);