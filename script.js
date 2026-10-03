/* =========================================
   HERO VIDEO — AUTOPLAY FALLBACK
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const heroVideo =
            document.getElementById(
                "heroVideo"
            );

        const heroPlayButton =
            document.getElementById(
                "heroPlayButton"
            );


        if (
            !heroVideo ||
            !heroPlayButton
        ) {
            return;
        }


        heroVideo.muted = true;
        heroVideo.defaultMuted = true;


        const playAttempt =
            heroVideo.play();


        if (
            playAttempt &&
            typeof playAttempt.then === "function"
        ) {

            playAttempt
                .then(() => {

                    heroPlayButton.classList.remove(
                        "show"
                    );

                })
                .catch(() => {

                    heroPlayButton.classList.add(
                        "show"
                    );

                });

        }


        heroPlayButton.addEventListener(
            "click",
            () => {

                heroVideo
                    .play()
                    .then(() => {

                        heroPlayButton.classList.remove(
                            "show"
                        );

                    });

            }
        );

    }
);


/* =========================================
   ZIZOU DESIGN — SIDE MENU
========================================= */

(() => {

    function initSideMenu() {

        /* -----------------------------------------
           ELEMENTS
        ----------------------------------------- */

        const menuButton =
            document.getElementById(
                "menuButton"
            );

        const sideMenu =
            document.getElementById(
                "sideMenu"
            );

        const oldCloseButton =
            document.getElementById(
                "closeMenu"
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


        if (
            !menuButton ||
            !sideMenu
        ) {
            return;
        }


        /* -----------------------------------------
           OPEN MENU
        ----------------------------------------- */

        function openSideMenu() {

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

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

        }


        /* -----------------------------------------
           CLOSE MENU
        ----------------------------------------- */

        function closeSideMenu() {

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

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            if (collectionsMenu) {

                collectionsMenu.classList.remove(
                    "open"
                );

            }

        }


        /* -----------------------------------------
           MENU BUTTON
           ☰ → X → ☰
        ----------------------------------------- */

        menuButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                if (
                    sideMenu.classList.contains(
                        "open"
                    )
                ) {

                    closeSideMenu();

                }

                else {

                    openSideMenu();

                }

            }
        );


        /* -----------------------------------------
           OLD CLOSE BUTTON
           Only used if still present in HTML.
        ----------------------------------------- */

        if (oldCloseButton) {

            oldCloseButton.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                    closeSideMenu();

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
           CONTACT
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
                    sideMenu.classList.contains(
                        "open"
                    )
                ) {

                    closeSideMenu();

                }

            }
        );


        /* -----------------------------------------
           INITIAL STATE
        ----------------------------------------- */

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    /* -----------------------------------------
       INITIALIZE SAFELY
    ----------------------------------------- */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initSideMenu,
            {
                once: true
            }
        );

    }

    else {

        initSideMenu();

    }

})();