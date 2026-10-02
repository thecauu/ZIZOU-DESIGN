const menuButton =
    document.getElementById(
        "menuButton"
    );

const closeMenu =
    document.getElementById(
        "closeMenu"
    );

const sideMenu =
    document.getElementById(
        "sideMenu"
    );

const collectionsButton =
    document.getElementById(
        "collectionsButton"
    );

const collectionsMenu =
    document.getElementById(
        "collectionsMenu"
    );

const contactMenuLink =
    document.getElementById(
        "contactMenuLink"
    );


/* =========================================
   ZIZOU DESIGN — SIDE MENU
========================================= */


/* -----------------------------------------
   ELEMENTS
----------------------------------------- */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const closeMenuButton =
    document.getElementById(
        "closeMenu"
    );


const sideMenu =
    document.getElementById(
        "sideMenu"
    );


const collectionsButton =
    document.getElementById(
        "collectionsButton"
    );


const collectionsMenu =
    document.getElementById(
        "collectionsMenu"
    );


const contactMenuLink =
    document.getElementById(
        "contactMenuLink"
    );


/* -----------------------------------------
   MENU STATE
----------------------------------------- */

function isMenuOpen() {

    return (
        sideMenu &&
        sideMenu.classList.contains(
            "open"
        )
    );

}


/* -----------------------------------------
   OPEN MENU
----------------------------------------- */

function openMenu() {

    if (
        !menuButton ||
        !sideMenu
    ) {
        return;
    }


    sideMenu.classList.add(
        "open"
    );


    menuButton.classList.add(
        "menu-button-active"
    );


    menuButton.setAttribute(
        "aria-label",
        "Close menu"
    );


    document.body.classList.add(
        "menu-open"
    );


    document.body.style.overflow =
        "hidden";

}


/* -----------------------------------------
   CLOSE MENU
----------------------------------------- */

function closeMenu() {

    if (
        !menuButton ||
        !sideMenu
    ) {
        return;
    }


    sideMenu.classList.remove(
        "open"
    );


    menuButton.classList.remove(
        "menu-button-active"
    );


    menuButton.setAttribute(
        "aria-label",
        "Open menu"
    );


    document.body.classList.remove(
        "menu-open"
    );


    document.body.style.overflow =
        "";


    /*
       Close collection dropdown
       whenever the main menu closes.
    */

    if (collectionsMenu) {

        collectionsMenu.classList.remove(
            "open"
        );

    }

}


/* -----------------------------------------
   TOGGLE MENU
----------------------------------------- */

function toggleMenu() {

    if (isMenuOpen()) {

        closeMenu();

    }

    else {

        openMenu();

    }

}


/* -----------------------------------------
   MENU BUTTON
   ☰ becomes X while menu is open.
----------------------------------------- */

if (
    menuButton &&
    sideMenu
) {

    menuButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            toggleMenu();

        }
    );

}


/* -----------------------------------------
   OLD CLOSE BUTTON
   Kept for compatibility if it still
   exists in the HTML.
----------------------------------------- */

if (closeMenuButton) {

    closeMenuButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            closeMenu();

        }
    );

}


/* -----------------------------------------
   COLLECTION DROPDOWN
----------------------------------------- */

if (
    collectionsButton &&
    collectionsMenu
) {

    collectionsButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            collectionsMenu.classList.toggle(
                "open"
            );

        }
    );

}


/* -----------------------------------------
   CONTACT LINK
----------------------------------------- */

if (contactMenuLink) {

    contactMenuLink.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            closeMenu();


            window.location.href =
                "contact.html";

        }
    );

}


/* -----------------------------------------
   ESCAPE KEY
----------------------------------------- */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            isMenuOpen()
        ) {

            closeMenu();

        }

    }
);        }

    }
);