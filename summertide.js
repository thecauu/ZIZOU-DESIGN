const galleries = {

    amber: [
        {
            src: "images/amber breeze second page.jpg",
            title: "Amber Breeze"
        }
    ],

    peridot: [
        {
            src: "images/peridot afloat second page.jpg",
            title: "Peridot Afloat"
        }
    ],

    patina: [
        {
            src: "images/patina del mar second page.jpg",
            title: "Pátina del Mar"
        }
    ],

    sage: [
        {
            src: "images/sage quietude second page.jpg",
            title: "Sage Quietude"
        }
    ],

    eter: [
        {
            src: "images/eter do luar second page.jpg",
            title: "Éter do Luar"
        }
    ],

    oneiric: [
        {
            src: "images/oneiric glow second page.jpg",
            title: "Oneiric Glow"
        }
    ]

};



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



function showSlide() {

    const slide =
        activeGallery[activeIndex];

    lightboxImage.src =
        slide.src;

    lightboxImage.alt =
        slide.title;

    lightboxTitle.textContent =
        slide.title;

    lightboxCounter.textContent =
        `${activeIndex + 1} / ${activeGallery.length}`;

}



function openGallery(galleryName) {

    activeGallery =
        galleries[galleryName];

    activeIndex = 0;

    showSlide();

    lightbox.classList.add("open");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}



function closeGallery() {

    lightbox.classList.remove("open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}



function nextSlide() {

    activeIndex =
        (activeIndex + 1)
        % activeGallery.length;

    showSlide();

}



function previousSlide() {

    activeIndex =
        (
            activeIndex
            - 1
            + activeGallery.length
        )
        % activeGallery.length;

    showSlide();

}



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