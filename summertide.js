const galleries = {

    amber: [
        {
            src: "images/amber breeze second page.jpg",
            title: "Amber Breeze",
            type: "preview"
        },
        {
            src: "images/amber mock room.jpg",
            title: "Amber Breeze — Room Preview",
            type: "room"
        },
        {
            src: "images/amber watermark.jpg",
            title: "Amber Breeze — Artwork Detail",
            type: "watermark"
        }
    ],

    peridot: [
        {
            src: "images/peridot afloat second page.jpg",
            title: "Peridot Afloat",
            type: "preview"
        },
        {
            src: "images/peridot mock room.jpg",
            title: "Peridot Afloat — Room Preview",
            type: "room"
        },
        {
            src: "images/peridot watermark.jpg",
            title: "Peridot Afloat — Artwork Detail",
            type: "watermark"
        }
    ],

    patina: [
        {
            src: "images/patina del mar second page.jpg",
            title: "Pátina del Mar",
            type: "preview"
        },
        {
            src: "images/patina mock room.jpg",
            title: "Pátina del Mar — Room Preview",
            type: "room"
        },
        {
            src: "images/patina watermark.jpg",
            title: "Pátina del Mar — Artwork Detail",
            type: "watermark"
        }
    ],

    sage: [
        {
            src: "images/sage quietude second page.jpg",
            title: "Sage Quietude",
            type: "preview"
        },
        {
            src: "images/sage mock room.jpg",
            title: "Sage Quietude — Room Preview",
            type: "room"
        },
        {
            src: "images/sage watermark.jpg",
            title: "Sage Quietude — Artwork Detail",
            type: "watermark"
        }
    ],

    eter: [
        {
            src: "images/eter do luar second page.jpg",
            title: "Éter do Luar",
            type: "preview"
        },
        {
            src: "images/eter mock room.jpg",
            title: "Éter do Luar — Room Preview",
            type: "room"
        },
        {
            src: "images/eter watermark.JPG",
            title: "Éter do Luar — Artwork Detail",
            type: "watermark"
        }
    ],

    oneiric: [
        {
            src: "images/oneiric glow second page.jpg",
            title: "Oneiric Glow",
            type: "preview"
        },
        {
            src: "images/oneiric mock room.PNG",
            title: "Oneiric Glow — Room Preview",
            type: "room"
        },
        {
            src: "images/oneiric watermark.jpg",
            title: "Oneiric Glow — Artwork Detail",
            type: "watermark"
        }
    ]

};


const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCounter = document.getElementById("lightboxCounter");

const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");


let activeGallery = [];
let activeIndex = 0;

let touchStartX = 0;
let touchEndX = 0;

let transitionRunning = false;


/* =========================
   UPDATE SLIDE
========================= */

function updateSlideContent() {

    const slide = activeGallery[activeIndex];

    lightboxImage.src = slide.src;
    lightboxImage.alt = slide.title;

    lightboxTitle.textContent = slide.title;

    lightboxCounter.textContent =
        `${activeIndex + 1} / ${activeGallery.length}`;
}


/* =========================
   OPEN GALLERY
========================= */

function openGallery(galleryName) {

    activeGallery = galleries[galleryName];
    activeIndex = 0;

    updateSlideContent();

    lightbox.classList.add("open");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";


    /*
       Give the preview a moment to appear.

       Then automatically perform the
       cinematic transition into the room.
    */

    setTimeout(() => {

        if (
            activeGallery.length > 1 &&
            lightbox.classList.contains("open")
        ) {

            cinematicRoomTransition();

        }

    }, 700);
}


/* =========================
   CINEMATIC ROOM TRANSITION
========================= */

function cinematicRoomTransition() {

    if (transitionRunning) {
        return;
    }

    if (activeIndex !== 0) {
        return;
    }

    if (activeGallery.length < 2) {
        return;
    }

    transitionRunning = true;


    /*
       Stage 1:
       slowly enlarge the artwork,
       simulating the viewer moving closer.
    */

    lightboxImage.classList.add(
        "cinematic-zoom"
    );


    setTimeout(() => {

        /*
           Stage 2:
           fade the artwork away.
        */

        lightboxImage.classList.add(
            "cinematic-fade"
        );


        setTimeout(() => {

            /*
               Change the image while
               it is faded out.
            */

            activeIndex = 1;

            const roomSlide =
                activeGallery[activeIndex];

            lightboxImage.src =
                roomSlide.src;

            lightboxImage.alt =
                roomSlide.title;

            lightboxTitle.textContent =
                roomSlide.title;

            lightboxCounter.textContent =
                `${activeIndex + 1} / ${activeGallery.length}`;


            /*
               Reset scale while hidden.
            */

            lightboxImage.classList.remove(
                "cinematic-zoom"
            );


            /*
               Let browser register new image.
            */

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    /*
                       Fade the room outward.

                       Because the scale is now
                       smaller, it creates the
                       illusion of pulling away
                       from the artwork.
                    */

                    lightboxImage.classList.remove(
                        "cinematic-fade"
                    );

                    lightboxImage.classList.add(
                        "cinematic-room-reveal"
                    );


                    setTimeout(() => {

                        lightboxImage.classList.remove(
                            "cinematic-room-reveal"
                        );

                        transitionRunning = false;

                    }, 1100);

                });

            });

        }, 600);

    }, 850);
}


/* =========================
   NORMAL SLIDE TRANSITION
========================= */

function changeSlide(newIndex) {

    if (transitionRunning) {
        return;
    }

    transitionRunning = true;

    lightboxImage.classList.add(
        "slide-fade-out"
    );


    setTimeout(() => {

        activeIndex = newIndex;

        updateSlideContent();

        lightboxImage.classList.remove(
            "slide-fade-out"
        );

        lightboxImage.classList.add(
            "slide-fade-in"
        );


        setTimeout(() => {

            lightboxImage.classList.remove(
                "slide-fade-in"
            );

            transitionRunning = false;

        }, 500);

    }, 300);
}


/* =========================
   NEXT / PREVIOUS
========================= */

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


/* =========================
   CLOSE GALLERY
========================= */

function closeGallery() {

    lightbox.classList.remove("open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

    transitionRunning = false;

    lightboxImage.classList.remove(
        "cinematic-zoom",
        "cinematic-fade",
        "cinematic-room-reveal",
        "slide-fade-out",
        "slide-fade-in"
    );
}


/* =========================
   OPEN ARTWORK
========================= */

document
    .querySelectorAll(".collection-item")
    .forEach((item) => {

        item.addEventListener(
            "click",
            () => {

                openGallery(
                    item.dataset.gallery
                );

            }
        );

    });


/* =========================
   CONTROLS
========================= */

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


lightbox.addEventListener(
    "click",
    (event) => {

        if (event.target === lightbox) {

            closeGallery();

        }

    }
);


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    (event) => {

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


/* =========================
   MOBILE SWIPE
========================= */

lightboxImage.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


lightboxImage.addEventListener(
    "touchend",
    (event) => {

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


    if (Math.abs(distance) < 50) {
        return;
    }


    if (distance > 0) {

        nextSlide();

    } else {

        previousSlide();

    }

}