/* =========================================
   ZIZOU DESIGN — SHARED SITE NAVIGATION
========================================= */

(() => {

    function initSharedNavigation() {


        /* -----------------------------------------
           PAGE TYPE
        ----------------------------------------- */

        const hero =
            document.querySelector(
                ".hero"
            );


        const isHomepage =
            Boolean(hero);


        /* -----------------------------------------
           REMOVE OLD SIDE MENU
        ----------------------------------------- */

        const oldSideMenu =
            document.getElementById(
                "sideMenu"
            );


        if (oldSideMenu) {

            oldSideMenu.remove();

        }


        /* -----------------------------------------
           REMOVE OLD PAGE NAVIGATION
        ----------------------------------------- */

        const oldNavigation =
            document.querySelectorAll(

                "header.navbar," +

                "header.collection-page-nav," +

                "header.about-nav," +

                "header.legal-nav"

            );


        oldNavigation.forEach(
            navigation => {

                navigation.remove();

            }
        );


        /* =========================================
           SIDE MENU
        ========================================= */

        const sideMenu =
            document.createElement(
                "aside"
            );


        sideMenu.className =
            "side-menu";


        sideMenu.id =
            "sideMenu";


        sideMenu.innerHTML = `

            <button
                class="close-menu"
                id="closeMenu"
                type="button"
                aria-label="Close menu"
            >
                ×
            </button>


            <nav class="menu-nav">

                <a href="index.html">
                    Home
                </a>


                <div class="menu-dropdown">

                    <button
                        class="dropdown-button"
                        id="collectionsButton"
                        type="button"
                    >
                        Collections

                        <span>
                            ⌄
                        </span>
                    </button>


                    <div
                        class="dropdown-content"
                        id="collectionsMenu"
                    >

                        <a href="summertide.html">
                            Summertide Collection
                        </a>

                        <a href="sea-of-sees.html">
                            Sea of Sees
                        </a>

                    </div>

                </div>


                <a href="about.html">
                    About
                </a>


                <a
                    href="contact.html"
                    id="contactMenuLink"
                >
                    Contact
                </a>

            </nav>

        `;


        document.body.prepend(
            sideMenu
        );


        /* =========================================
           NAVBAR
        ========================================= */

        const navbar =
            document.createElement(
                "header"
            );


        navbar.className =
            isHomepage
                ? "navbar site-navbar"
                : "navbar site-navbar shared-page-navbar";


        navbar.innerHTML = `

            <div class="nav-left">

                <button
                    class="icon-button menu-button"
                    id="menuButton"
                    type="button"
                    aria-label="Open menu"
                    aria-expanded="false"
                >
                    ☰
                </button>


                <button
                    class="icon-button search-button"
                    id="searchButton"
                    type="button"
                    aria-label="Search"
                    aria-expanded="false"
                >
                    ⌕
                </button>

            </div>


            <a
                href="index.html"
                class="logo"
            >
                ZIZOU DESIGN
            </a>


            <div class="nav-right">

                <button
                    class="bag-button"
                    id="bagButton"
                    type="button"
                    aria-label="Shopping bag"
                    aria-expanded="false"
                >

                    <img
                        src="images/ZIZOU LOGO.PNG"
                        alt=""
                        class="bag-logo"
                    >

                    <span id="bagCount">
                        0
                    </span>

                </button>

            </div>

        `;


        /* -----------------------------------------
           HOMEPAGE
           Navbar stays over hero video.
        ----------------------------------------- */

        if (isHomepage) {

            const collectionButton =
                hero.querySelector(
                    ".collection-button"
                );


            if (collectionButton) {

                hero.insertBefore(
                    navbar,
                    collectionButton
                );

            }

            else {

                hero.appendChild(
                    navbar
                );

            }

        }


        /* -----------------------------------------
           INTERNAL PAGES
           Navbar becomes normal page header.
        ----------------------------------------- */

        else {

            sideMenu.insertAdjacentElement(
                "afterend",
                navbar
            );

        }


        document.documentElement.classList.add(
            "shared-nav-ready"
        );

    }


    /* -----------------------------------------
       INITIALIZE
    ----------------------------------------- */

    if (document.body) {

        initSharedNavigation();

    }

    else {

        document.addEventListener(
            "DOMContentLoaded",
            initSharedNavigation,
            {
                once: true
            }
        );

    }

})();