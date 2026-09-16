/* =========================================
   ZIZOU DESIGN — GLOBAL SHOPPING BAG
========================================= */


/* -----------------------------------------
   PRODUCTS
----------------------------------------- */

const zizouProducts = {

    "amber-breeze": {
        name: "Amber Breeze",
        type: "DIGITAL ART PHOTOGRAPHY",
        image: "images/amber breeze home page.jpg",
        checkout:
            "https://zizoudesign.lemonsqueezy.com/checkout/buy/8c922568-b22d-4f21-b7cb-9faaf3298379?embed=1&logo=0"
    }

};


/* -----------------------------------------
   LOAD SAVED CART
----------------------------------------- */

let zizouCart = [];

try {

    zizouCart =
        JSON.parse(
            localStorage.getItem("zizouCart")
        ) || [];

} catch (error) {

    zizouCart = [];

}


/* -----------------------------------------
   CREATE GLOBAL BAG
----------------------------------------- */

function createGlobalBag() {

    const oldBag =
        document.getElementById("shoppingBag");

    if (oldBag) {
        oldBag.remove();
    }


    let bagButton =
        document.getElementById("bagButton");


    if (!bagButton) {

        bagButton =
            document.querySelector(".bag-button");

        if (bagButton) {
            bagButton.id = "bagButton";
        }

    }


    if (!bagButton) {

        bagButton =
            document.createElement("button");

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


    bagButton.innerHTML = `
        ♧
        <span id="bagCount">0</span>
    `;


    const shoppingBag =
        document.createElement("aside");


    shoppingBag.className =
        "shopping-bag";

    shoppingBag.id =
        "shoppingBag";


    shoppingBag.innerHTML = `

        <div class="shopping-bag-header">

            <h2>YOUR BAG</h2>

            <button
                id="closeBag"
                type="button"
                aria-label="Close shopping bag"
            >
                ×
            </button>

        </div>


        <div id="bagItems"></div>


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

            <a
                href="#"
                class="lemonsqueezy-button checkout-button"
                id="checkoutButton"
            >
                CHECKOUT
            </a>

        </div>

    `;


    document.body.appendChild(
        shoppingBag
    );


    /* OPEN BAG */

    bagButton.addEventListener(
        "click",
        () => {

            shoppingBag.classList.add(
                "open"
            );

        }
    );


    /* CLOSE BAG */

    document
        .getElementById("closeBag")
        .addEventListener(
            "click",
            () => {

                shoppingBag.classList.remove(
                    "open"
                );

            }
        );


    updateGlobalBag();

}


/* -----------------------------------------
   SAVE CART
----------------------------------------- */

function saveGlobalCart() {

    localStorage.setItem(
        "zizouCart",
        JSON.stringify(zizouCart)
    );

}


/* -----------------------------------------
   ADD PRODUCT
----------------------------------------- */

function addToGlobalBag(productId) {

    const product =
        zizouProducts[productId];


    if (!product) {
        return;
    }


    if (!zizouCart.includes(productId)) {

        zizouCart.push(productId);

        saveGlobalCart();

    }


    updateGlobalBag();


    const shoppingBag =
        document.getElementById(
            "shoppingBag"
        );


    if (shoppingBag) {

        shoppingBag.classList.add(
            "open"
        );

    }

}


/* -----------------------------------------
   REMOVE PRODUCT
----------------------------------------- */

function removeFromGlobalBag(productId) {

    zizouCart =
        zizouCart.filter(
            item => item !== productId
        );


    saveGlobalCart();

    updateGlobalBag();

}


/* -----------------------------------------
   UPDATE BAG
----------------------------------------- */

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

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    if (!bagItems) {
        return;
    }


    bagItems.innerHTML =
        "";


    if (bagCount) {

        bagCount.textContent =
            zizouCart.length;

    }


    /* EMPTY BAG */

    if (zizouCart.length === 0) {

        if (bagEmpty) {
            bagEmpty.style.display =
                "block";
        }

        if (checkoutArea) {
            checkoutArea.style.display =
                "none";
        }

        return;

    }


    if (bagEmpty) {
        bagEmpty.style.display =
            "none";
    }


    if (checkoutArea) {
        checkoutArea.style.display =
            "block";
    }


    /* DISPLAY PRODUCTS */

    zizouCart.forEach(
        productId => {

            const product =
                zizouProducts[productId];


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

                    <p class="bag-item-type">
                        ${product.type}
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


    /* CHECKOUT */

    if (
        zizouCart.length === 1 &&
        zizouProducts[zizouCart[0]] &&
        checkoutButton
    ) {

        checkoutButton.href =
            zizouProducts[
                zizouCart[0]
            ].checkout;

    }

}


/* -----------------------------------------
   ADD / REMOVE BUTTON CLICKS
----------------------------------------- */

document.addEventListener(
    "click",
    (event) => {


        /* ADD TO BAG */

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


        /* REMOVE FROM BAG */

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


/* -----------------------------------------
   START
----------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createGlobalBag();

    }
);