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


/* -----------------------------------------
   OPEN / CLOSE MAIN MENU
----------------------------------------- */

if (
    menuButton &&
    sideMenu
) {

    menuButton.addEventListener(
        "click",
        () => {

            const menuIsOpen =
                sideMenu.classList.contains(
                    "open"
                );


            if (menuIsOpen) {

                sideMenu.classList.remove(
                    "open"
                );

                menuButton.classList.remove(
                    "menu-button-active"
                );

                document.body.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );


                if (collectionsMenu) {

                    collectionsMenu.classList.remove(
                        "open"
                    );

                }

            }

            else {

                sideMenu.classList.add(
                    "open"
                );

                menuButton.classList.add(
                    "menu-button-active"
                );

                document.body.classList.add(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Close menu"
                );

            }

        }
    );

}


/* -----------------------------------------
   OLD CLOSE BUTTON
   Kept so existing HTML still works.
----------------------------------------- */

if (
    closeMenu &&
    sideMenu
) {

    closeMenu.addEventListener(
        "click",
        () => {

            sideMenu.classList.remove(
                "open"
            );


            if (menuButton) {

                menuButton.classList.remove(
                    "menu-button-active"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }


            document.body.classList.remove(
                "menu-open"
            );


            if (collectionsMenu) {

                collectionsMenu.classList.remove(
                    "open"
                );

            }

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
        () => {

            collectionsMenu
                .classList
                .toggle(
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
            sideMenu &&
            sideMenu.classList.contains(
                "open"
            )
        ) {

            sideMenu.classList.remove(
                "open"
            );


            if (menuButton) {

                menuButton.classList.remove(
                    "menu-button-active"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }


            document.body.classList.remove(
                "menu-open"
            );


            if (collectionsMenu) {

                collectionsMenu.classList.remove(
                    "open"
                );

            }

        }

    }
);