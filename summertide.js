/* ==========================================
   ZIZOU DESIGN — SUMMERTIDE GALLERIES
========================================== */

const galleries = {

    amber: [
        {
            src: "images/amber mock room.jpg",
            title: "Amber Breeze — Room Preview"
        },
        {
            src: "images/amber watermark.jpg",
            title: "Amber Breeze"
        }
    ],

    peridot: [
        {
            src: "images/peridot mock room.jpg",
            title: "Peridot Afloat — Room Preview"
        },
        {
            src: "images/peridot watermark.jpg",
            title: "Peridot Afloat"
        }
    ],

    patina: [
        {
            src: "images/patina mock room.jpg",
            title: "Pátina del Mar — Room Preview"
        },
        {
            src: "images/patina watermark.jpg",
            title: "Pátina del Mar"
        }
    ],

    sage: [
        {
            src: "images/sage mock room.jpg",
            title: "Sage Quietude — Room Preview"
        },
        {
            src: "images/sage watermark.jpg",
            title: "Sage Quietude"
        }
    ],

    eter: [
        {
            src: "images/eter mock room.jpg",
            title: "Éter do Luar — Room Preview"
        },
        {
            src: "images/eter watermark.JPG",
            title: "Éter do Luar"
        }
    ],

    oneiric: [
        {
            src: "images/oneiric mock room.PNG",
            title: "Oneiric Glow — Room Preview"
        },
        {
            src: "images/oneiric watermark.jpg",
            title: "Oneiric Glow"
        }
    ]

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


let activeGallery = [];
let activeIndex = 0;

let touchStartX = 0;
let touchEndX = 0;

let transitionRunning = false;



/* ==========================================
   UPDATE CURRENT SLIDE
========================================== */

function updateSlide() {

    const slide = activeGallery[activeIndex];

    lightboxImage.src = slide.src;
    lightboxImage.alt = slide.title;

    lightboxTitle.textContent =
        slide.title;

    lightboxCounter.textContent =
        `${activeIndex + 1} / ${activeGallery.length}`;
}

function preloadGalleryImages(gallery) {
    gallery.forEach((slide) => {
        const image = new Image();
        image.src = slide.src;
    });
}

/* ==========================================
   OPEN WITH CINEMATIC TRANSITION
========================================== */

function openGallery(galleryName, clickedImage) {

    if (transitionRunning) return;

    transitionRunning = true;

    activeGallery = galleries[galleryName];
    activeIndex = 0;

preloadGalleryImages(activeGallery);

    /*
       PRELOAD ROOM IMAGE BEFORE ANIMATION
       This avoids the ugly flash/jump.
    */

    const roomImage = new Image();

    roomImage.src =
        activeGallery[0].src;


    roomImage.onload = () => {

        runZoomOutTransition(
            clickedImage
        );

    };


    /*
       Fallback in case browser already cached it.
    */

    if (roomImage.complete) {

        runZoomOutTransition(
            clickedImage
        );

    }
}



/* ==========================================
   REALISTIC ZOOM-OUT EFFECT
========================================== */

function runZoomOutTransition(clickedImage) {

    /*
       Find exact position of clicked preview.
    */

    const startRect =
        clickedImage.getBoundingClientRect();


    /*
       Temporary floating copy of preview.
    */

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


    /*
       Open black gallery background,
       but keep real room image hidden initially.
    */

    activeIndex = 0;

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


    lightboxImage.style.opacity = "0";

    lightboxTitle.style.opacity = "0";

    lightboxCounter.style.opacity = "0";

    lightboxPrev.style.opacity = "0";

    lightboxNext.style.opacity = "0";

    lightboxClose.style.opacity = "0";


    /*
       Wait for lightbox layout.
    */

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            const destination =
                lightboxImage.getBoundingClientRect();


            /*
               MOVE PREVIEW TOWARD FINAL
               GALLERY POSITION.

               Slightly oversize it first to create
               a continuous camera movement.
            */

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
               After movement begins,
               slowly dissolve preview into room.
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
               Reveal controls/text near the end.
            */

            setTimeout(() => {

                lightboxTitle.style.opacity =
                    "1";

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
               Remove temporary preview.
            */

            setTimeout(() => {

                transitionImage.remove();

                lightbox.classList.remove(
                    "transition-opening"
                );

                lightboxImage.classList.remove(
                    "room-image-reveal"
                );

                transitionRunning = false;

            }, 2400);

        });

    });
}



/* ==========================================
   CHANGE SLIDE
========================================== */

function changeSlide(newIndex) {

    if (transitionRunning) return;

    transitionRunning = true;


    lightboxImage.classList.add(
        "gallery-fade-out"
    );


    setTimeout(() => {

        activeIndex = newIndex;

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

            transitionRunning = false;

        }, 550);

    }, 300);
}



/* ==========================================
   NEXT / PREVIOUS
========================================== */

function nextSlide() {

    const newIndex =
        (activeIndex + 1)
        % activeGallery.length;

    changeSlide(newIndex);
}


function previousSlide() {

    const newIndex =
        (
            activeIndex
            - 1
            + activeGallery.length
        )
        % activeGallery.length;

    changeSlide(newIndex);
}



/* ==========================================
   CLOSE
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


    transitionRunning = false;


    document
        .querySelectorAll(
            ".transition-artwork"
        )
        .forEach(
            element => element.remove()
        );
}



/* ==========================================
   CLICK ARTWORK
========================================== */

document
    .querySelectorAll(".collection-item")
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
   BUTTONS
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
   CLICK BACKGROUND TO CLOSE
========================================== */

lightbox.addEventListener(
    "click",
    event => {

        if (event.target === lightbox) {

            closeGallery();

        }

    }
);



/* ==========================================
   KEYBOARD
========================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox.classList.contains("open")
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
        touchStartX - touchEndX;


    if (
        Math.abs(distance) < 50
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

