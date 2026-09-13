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


/* =========================
   SHOPPING BAG
========================= */

const bagButton =
    document.getElementById("bagButton");

const shoppingBag =
    document.getElementById("shoppingBag");

const closeBag =
    document.getElementById("closeBag");

const bagItems =
    document.getElementById("bagItems");

const bagCount =
    document.getElementById("bagCount");

const bagEmpty =
    document.getElementById("bagEmpty");

const bagCheckoutArea =
    document.getElementById("bagCheckoutArea");


let cart =
    JSON.parse(localStorage.getItem("zizouCart")) || [];


/* PRODUCT INFORMATION */

const products = {

    "amber-breeze": {
        name: "Amber Breeze",
        image: "images/amber breeze home page.jpg"
    }

};


/* SAVE CART */

function saveCart() {

    localStorage.setItem(
        "zizouCart",
        JSON.stringify(cart)
    );

}


/* OPEN BAG */

bagButton.addEventListener("click", () => {

    shoppingBag.classList.add("open");

});


/* CLOSE BAG */

closeBag.addEventListener("click", () => {

    shoppingBag.classList.remove("open");

});


/* ADD TO BAG */

document.querySelectorAll(".add-to-bag").forEach((button) => {

    button.addEventListener("click", () => {

        const productId =
            button.dataset.product;

        const alreadyAdded =
            cart.includes(productId);

        if (!alreadyAdded) {

            cart.push(productId);

            saveCart();

            updateBag();

        }

        shoppingBag.classList.add("open");

    });

});


/* REMOVE FROM BAG */

function removeFromBag(productId) {

    cart =
        cart.filter((item) => item !== productId);

    saveCart();

    updateBag();

}


/* UPDATE BAG */

function updateBag() {

    bagItems.innerHTML = "";

    bagCount.textContent = cart.length;


    if (cart.length === 0) {

        bagEmpty.style.display = "block";

        bagCheckoutArea.style.display = "none";

        return;

    }


    bagEmpty.style.display = "none";

    bagCheckoutArea.style.display = "block";


    cart.forEach((productId) => {

        const product =
            products[productId];

        if (!product) {
            return;
        }


        const item =
            document.createElement("div");

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
                    DIGITAL ART PHOTOGRAPHY
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


        bagItems.appendChild(item);

    });


    document
        .querySelectorAll(".remove-item")
        .forEach((button) => {

            button.addEventListener("click", () => {

                removeFromBag(
                    button.dataset.remove
                );

            });

        });

}


/* INITIAL LOAD */

updateBag();