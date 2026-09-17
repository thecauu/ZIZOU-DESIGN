/* ==========================================
   ZIZOU DESIGN — SUMMERTIDE ARTWORKS
========================================== */

const artworks = {

    amber: {
        name: "Amber Breeze",
        product: "amber-breeze",
        price: "19.99",
        year: "2024",
        number: "01",

        description:
            "The scent of a summer floral breeze captivating the soul.",

        gallery: [
            {
                src: "images/amber mock room.jpg",
                alt: "Amber Breeze — Room Preview"
            },
            {
                src: "images/amber watermark.jpg",
                alt: "Amber Breeze"
            },
            {
                src: "images/Amber Design.JPEG",
                alt: "Amber Breeze — Design Card"
            }
        ]
    },


    peridot: {
        name: "Peridot Afloat",
        product: "peridot-afloat",
        price: "19.99",
        year: "2024",
        number: "02",

        description:
            "A peaceful state of solitude guided by crystalline ripples.",

        gallery: [
            {
                src: "images/peridot mock room.jpg",
                alt: "Peridot Afloat — Room Preview"
            },
            {
                src: "images/peridot watermark.jpg",
                alt: "Peridot Afloat"
            },
            {
                src: "images/Peridot Design.JPEG",
                alt: "Peridot Afloat — Design Card"
            }
        ]
    },


    patina: {
        name: "Pátina del Mar",
        product: "patina-del-mar",
        price: "19.99",
        year: "2024",
        number: "03",

        description:
            "The sea has a way of illustrating a story wherever it touches.",

        gallery: [
            {
                src: "images/patina mock room.jpg",
                alt: "Pátina del Mar — Room Preview"
            },
            {
                src: "images/patina watermark.jpg",
                alt: "Pátina del Mar"
            },
            {
                src: "images/Patina Design.JPEG",
                alt: "Pátina del Mar — Design Card"
            }
        ]
    },


    sage: {
        name: "Sage Quietude",
        product: "sage-quietude",
        price: "19.99",
        year: "2024",
        number: "04",

        description:
            "Restfulness begins with the first breath of release.",

        gallery: [
            {
                src: "images/sage mock room.jpg",
                alt: "Sage Quietude — Room Preview"
            },
            {
                src: "images/sage watermark.jpg",
                alt: "Sage Quietude"
            },
            {
                src: "images/Sage Design.JPEG",
                alt: "Sage Quietude — Design Card"
            }
        ]
    },


    eter: {
        name: "Éter do Luar",
        product: "eter-do-luar",
        price: "19.99",
        year: "2024",
        number: "05",

        description:
            "The aura enfolding the world with a gentle touch.",

        gallery: [
            {
                src: "images/eter mock room.jpg",
                alt: "Éter do Luar — Room Preview"
            },
            {
                src: "images/eter watermark.JPG",
                alt: "Éter do Luar"
            },
            {
                src: "images/Eter Design.JPEG",
                alt: "Éter do Luar — Design Card"
            }
        ]
    },


    oneiric: {
        name: "Oneiric Glow",
        product: "oneiric-glow",
        price: "19.99",
        year: "2024",
        number: "06",

        description:
            "A moment of stillness can kindle a soul toward rediscovery.",

        gallery: [
            {
                src: "images/oneiric mock room.PNG",
                alt: "Oneiric Glow — Room Preview"
            },
            {
                src: "images/oneiric watermark.jpg",
                alt: "Oneiric Glow"
            },
            {
                src: "images/Oneiric Design.JPEG",
                alt: "Oneiric Glow — Design Card"
            }
        ]
    }

};



/* ==========================================
   ELEMENTS
========================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCounter =
    document.getElementById("lightboxCounter");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");


/* PRODUCT INFORMATION */

const artworkPrice =
    document.getElementById("artworkPrice");

const artworkDescription =
    document.getElementById("artworkDescription");

const artworkYear =
    document.getElementById("artworkYear");

const artworkNumber =
    document.getElementById("artworkNumber");

const artworkAddToBag =
    document.getElementById("artworkAddToBag");



/* ==========================================
   ACTIVE ARTWORK / GALLERY
========================================== */

let activeArtwork = null;
let activeGallery = [];
let activeIndex = 0;

let touchStartX = 0;
let touchEndX = 0;

let transitionRunning = false;



/* ==========================================
   ADD TO BAG
========================================== */

artworkAddToBag.addEventListener(
    "click",
    () => {

        if (!activeArtwork) {
            return;
        }

        addToGlobalBag(
            activeArtwork.product
        );

    }
);



/* ==========================================
   UPDATE ARTWORK INFORMATION
========================================== */

function updateArtworkInfo() {

    if (!activeArtwork) return;


    lightboxTitle.textContent =
        activeArtwork.name;


    artworkPrice.textContent =
        `$${activeArtwork.price} USD`;


    artworkYear.textContent =
        activeArtwork.year;


    artworkNumber.textContent =
        activeArtwork.number;


    if (activeArtwork.description) {

        artworkDescription.textContent =
            activeArtwork.description;

        artworkDescription.style.display =
            "";

    }

    else {

        artworkDescription.textContent =
            "";

        artworkDescription.style.display =
            "none";

    }


    artworkAddToBag.dataset.product =
        activeArtwork.product;

    artworkAddToBag.dataset.name =
        activeArtwork.name;

    artworkAddToBag.dataset.price =
        activeArtwork.price;

}



/* ==========================================
   UPDATE CURRENT SLIDE
========================================== */

function updateSlide() {

    const slide =
        activeGallery[activeIndex];


    lightboxImage.src =
        slide.src;


    lightboxImage.alt =
        slide.alt;


    lightboxCounter.textContent =
        `${activeIndex + 1}/${activeGallery.length}`;

}



/* ==========================================
   PRELOAD GALLERY
========================================== */

function preloadGalleryImages(gallery) {

    gallery.forEach((slide) => {

        const image =
            new Image();

        image.src =
            slide.src;

    });

}



/* ==========================================
   OPEN ARTWORK
========================================== */

function openGallery(
    artworkName,
    clickedImage
) {

    if (transitionRunning) return;


    const selectedArtwork =
        artworks[artworkName];


    if (!selectedArtwork) return;


    transitionRunning =
        true;


    activeArtwork =
        selectedArtwork;


    activeGallery =
        selectedArtwork.gallery;


    activeIndex =
        0;


    preloadGalleryImages(
        activeGallery
    );


    updateArtworkInfo();


    closeAllAccordions();


    const roomImage =
        new Image();


    roomImage.src =
        activeGallery[0].src;


    roomImage.onload = () => {

        runZoomOutTransition(
            clickedImage
        );

    };


    if (roomImage.complete) {

        runZoomOutTransition(
            clickedImage
        );

    }

}



/* ==========================================
   REALISTIC ZOOM-OUT EFFECT
========================================== */

function runZoomOutTransition(
    clickedImage
) {

    const startRect =
        clickedImage.getBoundingClientRect();


    const transitionImage =
        clickedImage.cloneNode(true);


    transitionImage.classList.add(
        "transition-artwork"
    );


    transitionImage.style.top =
        `${startRect.top}px`;

    transitionImage.style.left =
        `${startRect.left}px`;

    transitionImage.style.width =
        `${startRect.width}px`;

    transitionImage.style.height =
        `${startRect.height}px`;


    document.body.appendChild(
        transitionImage
    );


    activeIndex =
        0;


    updateSlide();


    lightbox.classList.add(
        "open",
        "transition-opening"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    lightboxImage.style.opacity =
        "0";

    lightboxCounter.style.opacity =
        "0";

    lightboxPrev.style.opacity =
        "0";

    lightboxNext.style.opacity =
        "0";

    lightboxClose.style.opacity =
        "0";


    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            const destination =
                lightboxImage.getBoundingClientRect();


            transitionImage.style.top =
                `${destination.top}px`;

            transitionImage.style.left =
                `${destination.left}px`;

            transitionImage.style.width =
                `${destination.width}px`;

            transitionImage.style.height =
                `${destination.height}px`;

            transitionImage.style.transform =
                "scale(1.06)";


            setTimeout(() => {

                transitionImage.classList.add(
                    "transition-artwork-fade"
                );


                lightboxImage.classList.add(
                    "room-image-reveal"
                );


                lightboxImage.style.opacity =
                    "1";

            }, 900);


            setTimeout(() => {

                lightboxCounter.style.opacity =
                    "1";

                lightboxPrev.style.opacity =
                    "1";

                lightboxNext.style.opacity =
                    "1";

                lightboxClose.style.opacity =
                    "1";

            }, 1750);


            setTimeout(() => {

                transitionImage.remove();


                lightbox.classList.remove(
                    "transition-opening"
                );


                lightboxImage.classList.remove(
                    "room-image-reveal"
                );


                transitionRunning =
                    false;

            }, 2400);

        });

    });

}



/* ==========================================
   CHANGE SLIDE
========================================== */

function changeSlide(
    newIndex
) {

    if (transitionRunning) return;


    transitionRunning =
        true;


    lightboxImage.classList.add(
        "gallery-fade-out"
    );


    setTimeout(() => {

        activeIndex =
            newIndex;


        updateSlide();


        lightboxImage.classList.remove(
            "gallery-fade-out"
        );


        lightboxImage.classList.add(
            "gallery-fade-in"
        );


        setTimeout(() => {

            lightboxImage.classList.remove(
                "gallery-fade-in"
            );


            transitionRunning =
                false;

        }, 550);

    }, 300);

}



/* ==========================================
   NEXT / PREVIOUS
========================================== */

function nextSlide() {

    const newIndex =
        (
            activeIndex + 1
        )
        % activeGallery.length;


    changeSlide(
        newIndex
    );

}


function previousSlide() {

    const newIndex =
        (
            activeIndex
            - 1
            + activeGallery.length
        )
        % activeGallery.length;


    changeSlide(
        newIndex
    );

}



/* ==========================================
   CLOSE ARTWORK VIEW
========================================== */

function closeGallery() {

    lightbox.classList.remove(
        "open",
        "transition-opening"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    transitionRunning =
        false;


    document
        .querySelectorAll(
            ".transition-artwork"
        )
        .forEach(
            element =>
                element.remove()
        );


    lightbox.scrollTop =
        0;


    closeAllAccordions();

}



/* ==========================================
   CLICK ARTWORK
========================================== */

document
    .querySelectorAll(
        ".collection-item"
    )
    .forEach((item) => {

        item.addEventListener(
            "click",
            () => {

                const clickedImage =
                    item.querySelector("img");


                openGallery(
                    item.dataset.gallery,
                    clickedImage
                );

            }
        );

    });



/* ==========================================
   GALLERY BUTTONS
========================================== */

lightboxClose.addEventListener(
    "click",
    closeGallery
);


lightboxNext.addEventListener(
    "click",
    nextSlide
);


lightboxPrev.addEventListener(
    "click",
    previousSlide
);



/* ==========================================
   ACCORDION / DROP MENUS
========================================== */

const accordionButtons =
    document.querySelectorAll(
        ".accordion-button"
    );


accordionButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const accordion =
                    button.parentElement;


                const content =
                    button.nextElementSibling;


                const symbol =
                    button.querySelector(
                        ".accordion-symbol"
                    );


                const isOpen =
                    accordion.classList.contains(
                        "open"
                    );


                closeAllAccordions();


                if (!isOpen) {

                    accordion.classList.add(
                        "open"
                    );


                    content.style.maxHeight =
                        content.scrollHeight
                        + "px";


                    symbol.textContent =
                        "−";

                }

            }
        );

    }
);



function closeAllAccordions() {

    document
        .querySelectorAll(
            ".artwork-accordion"
        )
        .forEach((accordion) => {

            accordion.classList.remove(
                "open"
            );


            const content =
                accordion.querySelector(
                    ".accordion-content"
                );


            const symbol =
                accordion.querySelector(
                    ".accordion-symbol"
                );


            if (content) {

                content.style.maxHeight =
                    null;

            }


            if (symbol) {

                symbol.textContent =
                    "+";

            }

        });

}



/* ==========================================
   KEYBOARD
========================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox.classList.contains(
                "open"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeGallery();

        }


        if (event.key === "ArrowRight") {

            nextSlide();

        }


        if (event.key === "ArrowLeft") {

            previousSlide();

        }

    }
);



/* ==========================================
   MOBILE SWIPE
========================================== */

lightboxImage.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


lightboxImage.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;


        handleSwipe();

    },
    {
        passive: true
    }
);



function handleSwipe() {

    const distance =
        touchStartX
        - touchEndX;


    if (
        Math.abs(distance)
        < 50
    ) {
        return;
    }


    if (distance > 0) {

        nextSlide();

    }

    else {

        previousSlide();

    }

}