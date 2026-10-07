/* =========================================
   ZIZOU DESIGN — GLOBAL SHOPPING BAG
========================================= */


/* =========================================
   01. CHECKOUT CONFIGURATION
========================================= */

const ZIZOU_MULTI_CHECKOUT_ENDPOINT =
    "https://downloads.zizoudesign.workers.dev/create-checkout";


/* =========================================
   02. PRODUCTS
========================================= */

const zizouProducts = {

    "amber-breeze": {
        name: "Amber Breeze",
        type: "DIGITAL ART PHOTOGRAPHY",
        price: 19.99,
        image: "images/amber portrait.JPG",
        checkout:
            "https://zizoudesign.lemonsqueezy.com/checkout/buy/8c922568-b22d-4f21-b7cb-9faaf3298379?embed=1&logo=0"
    },


    "peridot-afloat": {
        name: "Peridot Afloat",
        type: "DIGITAL ART PHOTOGRAPHY",
        price: 19.99,
        image: "images/peridot portrait.JPG",
        checkout:
            "https://zizoudesign.lemonsqueezy.com/checkout/buy/abc2b98d-45ce-45bd-887c-efc1b88dee7a?embed=1&logo=0"
    },


    "patina-del-mar": {
        name: "Pátina del Mar",
        type: "DIGITAL ART PHOTOGRAPHY",
        price: 19.99,
        image: "images/patina portrait.JPG",
        checkout:
            "https://zizoudesign.lemonsqueezy.com/checkout/buy/f4ae5232-7bb9-483b-80e3-409481dbc854?embed=1&logo=0"
    },


    "sage-quietude": {
        name: "Sage Quietude",
        type: "DIGITAL ART PHOTOGRAPHY",
        price: 19.99,
        image: "images/sage portrait.JPG",
        checkout:
            "https://zizoudesign.lemonsqueezy.com/checkout/buy/e1ce0a2d-41b9-45bd-9c00-035946e0150f?embed=1&logo=0"
    },


    "eter-do-luar": {
        name: "Éter do Luar",
        type: "DIGITAL ART PHOTOGRAPHY",
        price: 19.99,
        image: "images/eter portrait.JPG",
        checkout:
            "https://zizoudesign.lemonsqueezy.com/checkout/buy/61b4e990-1c81-4e82-bb2c-9d21b277a886?embed=1&logo=0"
    },


    "oneiric-glow": {
        name: "Oneiric Glow",
        type: "DIGITAL ART PHOTOGRAPHY",
        price: 19.99,
        image: "images/oneiric portrait.JPG",
        checkout:
            "https://zizoudesign.lemonsqueezy.com/checkout/buy/dbf89c46-0580-43ec-a549-47d135fcce9a?embed=1&logo=0"
    }

};


/* =========================================
   03. LOAD SAVED CART
========================================= */

let zizouCart = [];


try {

    zizouCart =
        JSON.parse(
            localStorage.getItem(
                "zizouCart"
            )
        ) || [];

}

catch (error) {

    zizouCart = [];

}


/* =========================================
   04. PRICE FORMAT
========================================= */

function formatUSD(
    amount
) {

    return (
        `$${amount.toFixed(2)} USD`
    );

}


/* =========================================
   05. PANEL HANDOFF HELPERS
========================================= */


/* -----------------------------------------
   CLOSE MENU BEFORE CART
----------------------------------------- */

function closeMenuForCart() {

    const sideMenu =
        document.getElementById(
            "sideMenu"
        );


    const menuButton =
        document.getElementById(
            "menuButton"
        );


    if (
        !sideMenu ||
        !menuButton ||
        !sideMenu.classList.contains(
            "open"
        )
    ) {
        return;
    }


    /*
       Use script.js's existing
       menu closing behavior.
    */

    menuButton.click();

}


/* -----------------------------------------
   CLOSE SEARCH BEFORE CART
----------------------------------------- */

function closeSearchForCart() {

    const searchOverlay =
        document.querySelector(
            ".search-overlay"
        );


    if (
        !searchOverlay ||
        !searchOverlay.classList.contains(
            "open"
        )
    ) {
        return;
    }


    const activeSearchButton =
        document.querySelector(
            ".search-button-active"
        );


    const searchButton =
        activeSearchButton ||
        document.querySelector(
            ".search-button"
        );


    if (searchButton) {

        /*
           Use search.js's existing
           search closing behavior.
        */

        searchButton.click();

    }

}


/* -----------------------------------------
   CLOSE OTHER PANELS
----------------------------------------- */

function closeOtherPanelsForCart() {

    closeMenuForCart();

    closeSearchForCart();

}


/* =========================================
   06. BAG PANEL STATE
========================================= */

function openGlobalBag() {

    const shoppingBag =
        document.getElementById(
            "shoppingBag"
        );


    const bagButton =
        document.getElementById(
            "bagButton"
        );


    if (!shoppingBag) {
        return;
    }


    closeOtherPanelsForCart();


    shoppingBag.classList.add(
        "open"
    );


    if (bagButton) {

        bagButton.setAttribute(
            "aria-expanded",
            "true"
        );

    }

}


function closeGlobalBag() {

    const shoppingBag =
        document.getElementById(
            "shoppingBag"
        );


    const bagButton =
        document.getElementById(
            "bagButton"
        );


    if (!shoppingBag) {
        return;
    }


    shoppingBag.classList.remove(
        "open"
    );


    if (bagButton) {

        bagButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


function toggleGlobalBag() {

    const shoppingBag =
        document.getElementById(
            "shoppingBag"
        );


    if (!shoppingBag) {
        return;
    }


    if (
        shoppingBag.classList.contains(
            "open"
        )
    ) {

        closeGlobalBag();

    }

    else {

        openGlobalBag();

    }

}


/* =========================================
   07. CREATE GLOBAL BAG
========================================= */

function createGlobalBag() {

    const oldBag =
        document.getElementById(
            "shoppingBag"
        );


    if (oldBag) {

        oldBag.remove();

    }


    let bagButton =
        document.getElementById(
            "bagButton"
        );


    if (!bagButton) {

        bagButton =
            document.querySelector(
                ".bag-button"
            );


        if (bagButton) {

            bagButton.id =
                "bagButton";

        }

    }


    if (!bagButton) {

        bagButton =
            document.createElement(
                "button"
            );


        bagButton.id =
            "bagButton";


        bagButton.className =
            "bag-button global-bag-button";


        bagButton.type =
            "button";


        bagButton.setAttribute(
            "aria-label",
            "Shopping bag"
        );


        document.body.appendChild(
            bagButton
        );

    }


    bagButton.setAttribute(
        "aria-expanded",
        "false"
    );


    /* -----------------------------------------
       ZIZOU BAG LOGO
    ----------------------------------------- */

    bagButton.innerHTML = `

        <img
            src="images/ZIZOU LOGO.PNG"
            alt=""
            class="bag-logo"
        >

        <span id="bagCount">
            0
        </span>

    `;


    /* -----------------------------------------
       BAG PANEL
    ----------------------------------------- */

    const shoppingBag =
        document.createElement(
            "aside"
        );


    shoppingBag.className =
        "shopping-bag";


    shoppingBag.id =
        "shoppingBag";


    shoppingBag.innerHTML = `

        <div class="shopping-bag-header">

            <h2>
                YOUR BAG
            </h2>

            <button
                id="closeBag"
                type="button"
                aria-label="Close shopping bag"
            >
                ×
            </button>

        </div>


        <div
            class="bag-items"
            id="bagItems"
        ></div>


        <div
            class="bag-empty"
            id="bagEmpty"
        >
            YOUR BAG IS EMPTY
        </div>


        <div
            class="bag-checkout-area"
            id="bagCheckoutArea"
        >

            <div class="bag-subtotal">

                <span>
                    SUBTOTAL
                </span>

                <span id="bagSubtotal">
                    $0.00 USD
                </span>

            </div>


            <button
                type="button"
                class="checkout-button"
                id="checkoutButton"
            >
                CHECKOUT
            </button>

        </div>

    `;


    document.body.appendChild(
        shoppingBag
    );


    /* =========================================
       08. BAG BUTTON
    ========================================= */

    bagButton.addEventListener(
        "click",
        event => {

            event.preventDefault();

            toggleGlobalBag();

        }
    );


    /* =========================================
       09. CLOSE BUTTON
    ========================================= */

    const closeBagButton =
        document.getElementById(
            "closeBag"
        );


    if (closeBagButton) {

        closeBagButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                closeGlobalBag();

            }
        );

    }


    /* =========================================
       10. BAG → MENU HANDOFF
    ========================================= */

    const menuButton =
        document.getElementById(
            "menuButton"
        );


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            () => {

                if (
                    shoppingBag.classList.contains(
                        "open"
                    )
                ) {

                    closeGlobalBag();

                }

            },
            true
        );

    }


    /* =========================================
       11. BAG → SEARCH HANDOFF
    ========================================= */

    const searchButtons =
        document.querySelectorAll(
            ".search-button"
        );


    searchButtons.forEach(
        searchButton => {

            searchButton.addEventListener(
                "click",
                () => {

                    if (
                        shoppingBag.classList.contains(
                            "open"
                        )
                    ) {

                        closeGlobalBag();

                    }

                },
                true
            );

        }
    );


    /* =========================================
       12. CHECKOUT BUTTON
    ========================================= */

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            startGlobalCheckout
        );

    }


    updateGlobalBag();

}


/* =========================================
   13. SAVE CART
========================================= */

function saveGlobalCart() {

    localStorage.setItem(
        "zizouCart",
        JSON.stringify(
            zizouCart
        )
    );

}


/* =========================================
   14. ADD PRODUCT
========================================= */

function addToGlobalBag(
    productId
) {

    const product =
        zizouProducts[
            productId
        ];


    if (!product) {
        return;
    }


    if (
        !zizouCart.includes(
            productId
        )
    ) {

        zizouCart.push(
            productId
        );


        saveGlobalCart();

    }


    updateGlobalBag();

    openGlobalBag();

}


/* =========================================
   15. REMOVE PRODUCT
========================================= */

function removeFromGlobalBag(
    productId
) {

    zizouCart =
        zizouCart.filter(
            item =>
                item !== productId
        );


    saveGlobalCart();

    updateGlobalBag();

}


/* =========================================
   16. CALCULATE SUBTOTAL
========================================= */

function calculateGlobalSubtotal() {

    return zizouCart.reduce(
        (
            subtotal,
            productId
        ) => {

            const product =
                zizouProducts[
                    productId
                ];


            if (!product) {

                return subtotal;

            }


            return (
                subtotal +
                product.price
            );

        },
        0
    );

}


/* =========================================
   17. UPDATE BAG
========================================= */

function updateGlobalBag() {

    const bagItems =
        document.getElementById(
            "bagItems"
        );


    const bagCount =
        document.getElementById(
            "bagCount"
        );


    const bagEmpty =
        document.getElementById(
            "bagEmpty"
        );


    const checkoutArea =
        document.getElementById(
            "bagCheckoutArea"
        );


    const bagSubtotal =
        document.getElementById(
            "bagSubtotal"
        );


    if (!bagItems) {
        return;
    }


    bagItems.innerHTML =
        "";


    /* -----------------------------------------
       BAG COUNT
    ----------------------------------------- */

    if (bagCount) {

        bagCount.textContent =
            zizouCart.length;

    }


    /* -----------------------------------------
       EMPTY BAG
    ----------------------------------------- */

    if (
        zizouCart.length === 0
    ) {

        if (bagEmpty) {

            bagEmpty.style.display =
                "block";

        }


        if (checkoutArea) {

            checkoutArea.style.display =
                "none";

        }


        if (bagSubtotal) {

            bagSubtotal.textContent =
                formatUSD(
                    0
                );

        }


        return;

    }


    /* -----------------------------------------
       ACTIVE BAG
    ----------------------------------------- */

    if (bagEmpty) {

        bagEmpty.style.display =
            "none";

    }


    if (checkoutArea) {

        checkoutArea.style.display =
            "block";

    }


    /* -----------------------------------------
       SUBTOTAL
    ----------------------------------------- */

    if (bagSubtotal) {

        const subtotal =
            calculateGlobalSubtotal();


        bagSubtotal.textContent =
            formatUSD(
                subtotal
            );

    }


    /* -----------------------------------------
       DISPLAY PRODUCTS
    ----------------------------------------- */

    zizouCart.forEach(
        productId => {

            const product =
                zizouProducts[
                    productId
                ];


            if (!product) {
                return;
            }


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "bag-item";


            item.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="bag-item-info">

                    <p class="bag-item-name">
                        ${product.name}
                    </p>

                    <button
                        class="remove-item"
                        type="button"
                        data-remove="${productId}"
                    >
                        REMOVE
                    </button>

                </div>

            `;


            bagItems.appendChild(
                item
            );

        }
    );

}


/* =========================================
   18. START CHECKOUT
========================================= */

async function startGlobalCheckout() {

    if (
        zizouCart.length === 0
    ) {
        return;
    }


    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    if (!checkoutButton) {
        return;
    }


    /* -----------------------------------------
       ONE ARTWORK
    ----------------------------------------- */

    if (
        zizouCart.length === 1
    ) {

        const product =
            zizouProducts[
                zizouCart[0]
            ];


        if (!product) {
            return;
        }


        openLemonCheckout(
            product.checkout
        );


        return;

    }


    /* -----------------------------------------
       TWO TO SIX ARTWORKS
    ----------------------------------------- */

    checkoutButton.disabled =
        true;


    checkoutButton.textContent =
        "LOADING...";


    try {

        const response =
            await fetch(
                ZIZOU_MULTI_CHECKOUT_ENDPOINT,
                {
                    method:
                        "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            items:
                                zizouCart
                        })
                }
            );


        const result =
            await response.json();


        if (
            !response.ok ||
            !result.checkoutUrl
        ) {

            throw new Error(
                result.error ||
                "Checkout could not be created."
            );

        }


        openLemonCheckout(
            result.checkoutUrl
        );

    }

    catch (error) {

        console.error(
            "ZIZOU checkout error:",
            error
        );


        alert(
            "Checkout could not be opened. Please try again."
        );

    }

    finally {

        checkoutButton.disabled =
            false;


        checkoutButton.textContent =
            "CHECKOUT";

    }

}


/* =========================================
   19. OPEN LEMON CHECKOUT
========================================= */

function openLemonCheckout(
    checkoutUrl
) {

    if (
        window.LemonSqueezy &&
        window.LemonSqueezy.Url &&
        typeof window.LemonSqueezy
            .Url
            .Open === "function"
    ) {

        window.LemonSqueezy.Url.Open(
            checkoutUrl
        );


        return;

    }


    /*
       Fallback if Lemon.js
       has not loaded.
    */

    window.location.href =
        checkoutUrl;

}


/* =========================================
   20. ADD / REMOVE BUTTON CLICKS
========================================= */

document.addEventListener(
    "click",
    event => {


        /* -----------------------------------------
           ADD TO BAG
        ----------------------------------------- */

        const addButton =
            event.target.closest(
                ".add-to-bag, .artwork-add-to-bag"
            );


        if (addButton) {

            const productId =
                addButton.dataset.product;


            if (productId) {

                addToGlobalBag(
                    productId
                );

            }


            return;

        }


        /* -----------------------------------------
           REMOVE FROM BAG
        ----------------------------------------- */

        const removeButton =
            event.target.closest(
                ".remove-item"
            );


        if (removeButton) {

            const productId =
                removeButton.dataset.remove;


            if (productId) {

                removeFromGlobalBag(
                    productId
                );

            }

        }

    }
);


/* =========================================
   21. START
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createGlobalBag();

    }
);