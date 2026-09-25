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
            src: "images/amber portrait.JPG",
            alt: "Amber portrait",

            protectShape:
                "polygon(19.2% 19.2%, 81.0% 19.2%, 81.0% 76.6%, 19.2% 76.6%)"
        },

        {
            src: "images/amber mock room.jpg",
            alt: "Amber mock room 1",

            protectShape:
                "polygon(34.8% 17.4%, 69.6% 17.4%, 69.6% 50.5%, 34.8% 50.5%)"        },

        {
            src: "images/amber mock room 2.JPG",
            alt: "Amber mock room 2",

            protectShape:
                "polygon(38.7% 17.9%, 69.2% 17.9%, 69.2% 46.2%, 38.7% 46.2%)"
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
            src: "images/peridot portrait.JPG",
            alt: "Peridot portrait",

            protectShape:
                "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"
        },

        {
            src: "images/peridot mock room 1.JPG",
            alt: "Peridot mock room 1",

            protectShape:
                "polygon(50.0% 17.8%, 77.0% 17.8%, 77.0% 45.7%, 50% 45.7%)"
        },

        {
            src: "images/peridot mock room 2.JPG",
            alt: "Peridot mock room 2",

            protectShape:
                "polygon(50.6% 14.3%, 80.6% 14.3%, 80.6% 40.9%, 50.6% 40.9%)"
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
            src: "images/patina portrait.JPG",
            alt: "Pátina portrait",

            protectShape:
                "polygon(18.9% 19.2%, 81.1% 19.2%, 81.1% 76.4%, 18.9% 76.4%)"
        },

        {
            src: "images/patina mock room.jpg",
            alt: "Pátina mock room 1",

            protectShape:

                "polygon(60.8% 26.5%, 78.3% 26.5%, 78.3% 43.1%, 60.8% 43.1%)"
        },

        {
            src: "images/patina mock room 2.JPG",
            alt: "Pátina mock room 2",

            protectShape:
                "polygon(56.7% 19.0%, 74.2% 19.0%, 74.2% 38.7%, 56.7% 38.7%)"
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
                src: "images/sage portrait.JPG",
                alt: "Sage portrait"
            },

            {
                src: "images/sage mock room 1.JPG",
                alt: "Sage mock room 1"
            },

            {
                src: "images/sage mock room 2.JPG",
                alt: "Sage mock room 2"
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
                src: "images/eter portrait.JPG",
                alt: "Éter portrait"
            },

            {
                src: "images/eter mock room.jpg",
                alt: "Éter mock room 1"
            },

            {
                src: "images/eter mock room 2.jpg",
                alt: "Éter mock room 2"
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
                src: "images/oneiric portrait.JPG",
                alt: "Oneiric portrait"
            },

            {
                src: "images/oneiric mock room 1.JPG",
                alt: "Oneiric mock room 1"
            },

            {
                src: "images/oneiric mock room 2.JPG",
                alt: "Oneiric mock room 2"
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
   LOAD PROTECTED COLLECTION IMAGES
========================================== */

/*
   Collection artwork is displayed using
   background images instead of normal IMG
   elements.

   Each protected span receives its image
   from data-image in the HTML.
*/

document
    .querySelectorAll(
        ".protected-collection-image"
    )
    .forEach((image) => {

        const source =
            image.dataset.image;


        if (!source) {
            return;
        }


        image.style.backgroundImage =
            `url("${source}")`;

    });



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

    if (!activeArtwork) {
        return;
    }


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


    if (!slide) {
        return;
    }


    /*
       Load the current gallery image.
    */

    lightboxImage.style.backgroundImage =
        `url("${slide.src}")`;


    /*
       Apply the custom protection area.

       Amber Breeze currently has individual
       polygons for all three gallery slides.

       Artworks without protectShape continue
       using protection across the full image
       until their coordinates are added.
    */

    lightboxImage.style.setProperty(
        "--protect-shape",
        slide.protectShape || "inset(0)"
    );


    lightboxImage.setAttribute(
        "aria-label",
        slide.alt
    );


    lightboxCounter.textContent =
        `${activeIndex + 1}/${activeGallery.length}`;

}



/* ==========================================
   PRELOAD GALLERY
========================================== */

function preloadGalleryImages(
    gallery
) {

    gallery.forEach((slide) => {

        /*
           These Image objects exist only in
           JavaScript memory.

           They preload the gallery without
           placing normal IMG elements on the
           webpage.
        */

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

    if (transitionRunning) {
        return;
    }


    const selectedArtwork =
        artworks[artworkName];


    if (!selectedArtwork) {
        return;
    }


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


    /*
       Preload the first gallery image before
       beginning the opening transition.
    */

    const firstGalleryImage =
        new Image();


    firstGalleryImage.src =
        activeGallery[0].src;


    let transitionStarted =
        false;


    function startTransition() {

        if (transitionStarted) {
            return;
        }


        transitionStarted =
            true;


        runZoomOutTransition(
            clickedImage
        );

    }


    firstGalleryImage.onload =
        startTransition;


    /*
       If the browser already cached the image,
       begin immediately.
    */

    if (firstGalleryImage.complete) {

        startTransition();

    }


    /*
       Prevent a broken image from permanently
       locking the gallery transition.
    */

    firstGalleryImage.onerror =
        startTransition;

}



/* ==========================================
   REALISTIC ZOOM-OUT EFFECT
========================================== */

function runZoomOutTransition(
    clickedImage
) {

    if (!clickedImage) {

        transitionRunning =
            false;

        return;

    }


    const startRect =
        clickedImage.getBoundingClientRect();


    /*
       Clone the protected collection artwork
       for the opening animation.
    */

    const transitionImage =
        clickedImage.cloneNode(true);


    transitionImage.classList.add(
        "transition-artwork"
    );


    transitionImage.style.position =
        "fixed";


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


            /*
               Begin revealing the full gallery
               image underneath the transition.
            */

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


            /*
               Reveal gallery controls.
            */

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


            /*
               Clean up transition element.
            */

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

    if (transitionRunning) {
        return;
    }


    transitionRunning =
        true;


    lightboxImage.classList.add(
        "gallery-fade-out"
    );


    setTimeout(() => {

        activeIndex =
            newIndex;


        /*
           updateSlide handles:
           - Gallery image
           - Protection polygon
           - Accessibility label
           - Counter
        */

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
   NEXT SLIDE
========================================== */

function nextSlide() {

    if (
        !activeGallery ||
        activeGallery.length === 0
    ) {
        return;
    }


    const newIndex =
        (
            activeIndex + 1
        )
        % activeGallery.length;


    changeSlide(
        newIndex
    );

}



/* ==========================================
   PREVIOUS SLIDE
========================================== */

function previousSlide() {

    if (
        !activeGallery ||
        activeGallery.length === 0
    ) {
        return;
    }


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
        .forEach((element) => {

            element.remove();

        });


    /*
       Reset gallery scroll.
    */

    lightbox.scrollTop =
        0;


    /*
       Remove previous artwork's protection
       shape before another artwork opens.
    */

    lightboxImage.style.removeProperty(
        "--protect-shape"
    );


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

                /*
                   Collection artwork uses the
                   protected background SPAN.
                */

                const clickedImage =
                    item.querySelector(
                        ".protected-collection-image"
                    );


                if (!clickedImage) {
                    return;
                }


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



/* ==========================================
   CLOSE ALL ACCORDIONS
========================================== */

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
    (event) => {

        if (
            !lightbox.classList.contains(
                "open"
            )
        ) {
            return;
        }


        if (
            event.key ===
            "Escape"
        ) {

            closeGallery();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextSlide();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousSlide();

        }

    }
);



/* ==========================================
   MOBILE SWIPE — START
========================================== */

lightboxImage.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event
                .changedTouches[0]
                .screenX;

    },
    {
        passive: true
    }
);



/* ==========================================
   MOBILE SWIPE — END
========================================== */

lightboxImage.addEventListener(
    "touchend",
    (event) => {

        touchEndX =
            event
                .changedTouches[0]
                .screenX;


        handleSwipe();

    },
    {
        passive: true
    }
);



/* ==========================================
   MOBILE SWIPE — DIRECTION
========================================== */

function handleSwipe() {

    const distance =
        touchStartX
        - touchEndX;


    /*
       Ignore tiny accidental movements.
    */

    if (
        Math.abs(distance)
        < 50
    ) {
        return;
    }


    /*
       Swipe left = next image.
    */

    if (
        distance > 0
    ) {

        nextSlide();

    }


    /*
       Swipe right = previous image.
    */

    else {

        previousSlide();

    }

}