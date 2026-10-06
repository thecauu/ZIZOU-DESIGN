/* =========================================================
   ZIZOU DESIGN — SUMMERTIDE
   SUMMERTIDE.JS

   01. ARTWORK DATA
   02. ELEMENTS
   03. LOAD COLLECTION IMAGES
   04. STATE
   05. ADD TO BAG
   06. ARTWORK INFORMATION
   07. PRODUCT DETAILS
   08. SIZE GUIDE
   09. PROPORTIONS GUIDE
   10. PROTECTION OVERLAY
   11. GALLERY SLIDE
   12. GALLERY PRELOAD
   13. COLLECTION NAVIGATOR
   14. ACCORDIONS
   15. OPEN ARTWORK
   16. IMAGE SIZE CACHE
   17. POSITION PROTECTION OVERLAY
   18. OPENING TRANSITION
   19. GALLERY NAVIGATION
   20. CLOSE ARTWORK
   21. ARTWORK EVENTS
   22. PRODUCT DETAILS EVENTS
   23. KEYBOARD
   24. MOBILE GALLERY SWIPE
   25. RESIZE
   26. INITIALIZE
========================================================= */



/* =========================================================
   01. ARTWORK DATA
========================================================= */

const artworks = {

    amber: {

        name:
            "Amber Breeze",

        product:
            "amber-breeze",

        price:
            "19.99",

        year:
            "2024",

        number:
            "01",

        description:
            "The scent of a summer floral breeze captivating the soul.",


        gallery: [

            {

                src:
                    "images/amber portrait.JPG",

                alt:
                    "Amber portrait",

                protectShape:
                    "polygon(19.2% 19.2%, 81.0% 19.2%, 81.0% 76.6%, 19.2% 76.6%)"

            },

            {

                src:
                    "images/amber mock room.jpg",

                alt:
                    "Amber mock room 1",

                protectShape:
                    "polygon(34.8% 17.4%, 69.6% 17.4%, 69.6% 50.5%, 34.8% 50.5%)"

            },

            {

                src:
                    "images/amber mock room 2.JPG",

                alt:
                    "Amber mock room 2",

                protectShape:
                    "polygon(38.7% 17.9%, 69.2% 17.9%, 69.2% 46.2%, 38.7% 46.2%)"

            }

        ]

    },



    peridot: {

        name:
            "Peridot Afloat",

        product:
            "peridot-afloat",

        price:
            "19.99",

        year:
            "2024",

        number:
            "02",

        description:
            "A peaceful state of solitude guided by crystalline ripples.",


        gallery: [

            {

                src:
                    "images/peridot portrait.JPG",

                alt:
                    "Peridot portrait",

                protectShape:
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"

            },

            {

                src:
                    "images/peridot mock room 1.JPG",

                alt:
                    "Peridot mock room 1",

                protectShape:
                    "polygon(48.6% 17.5%, 78.4% 17.5%, 78.4% 45.6%, 48.6% 45.6%)"

            },

            {

                src:
                    "images/peridot mock room 2.JPG",

                alt:
                    "Peridot mock room 2",

                protectShape:
                    "polygon(51.5% 14.0%, 79.8% 14.0%, 79.8% 41.0%, 51.5% 41.0%)"

            }

        ]

    },



    patina: {

        name:
            "Pátina del Mar",

        product:
            "patina-del-mar",

        price:
            "19.99",

        year:
            "2024",

        number:
            "03",

        description:
            "The sea has a way of illustrating a story wherever it touches.",


        gallery: [

            {

                src:
                    "images/patina portrait.JPG",

                alt:
                    "Pátina portrait",

                protectShape:
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"

            },

            {

                src:
                    "images/patina mock room.jpg",

                alt:
                    "Pátina mock room 1",

                protectShape:
                    "polygon(42.03% 19.86%, 73.77% 19.98%, 73.77% 50.00%, 41.89% 49.89%)"

            },

            {

                src:
                    "images/patina mock room 2.JPG",

                alt:
                    "Pátina mock room 2",

                protectShape:
                    "polygon(58.39% 24.04%, 81.24% 24.15%, 80.96% 45.26%, 58.25% 45.26%)"

            }

        ]

    },



    sage: {

        name:
            "Sage Quietude",

        product:
            "sage-quietude",

        price:
            "19.99",

        year:
            "2024",

        number:
            "04",

        description:
            "Restfulness begins with the first breath of release.",


        gallery: [

            {

                src:
                    "images/sage portrait.JPG",

                alt:
                    "Sage portrait",

                protectShape:
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"

            },

            {

                src:
                    "images/sage mock room 1.JPG",

                alt:
                    "Sage mock room 1",

                protectShape:
                    "polygon(28.5% 16.6%, 65.0% 16.6%, 65.0% 51.1%, 28.5% 51.1%)"

            },

            {

                src:
                    "images/sage mock room 2.JPG",

                alt:
                    "Sage mock room 2",

                protectShape:
                    "polygon(29.6% 15.2%, 69.4% 15.2%, 69.4% 52.6%, 29.6% 52.6%)"

            }

        ]

    },



    eter: {

        name:
            "Éter do Luar",

        product:
            "eter-do-luar",

        price:
            "19.99",

        year:
            "2024",

        number:
            "05",

        description:
            "The aura enfolding the world with a gentle touch.",


        gallery: [

            {

                src:
                    "images/eter portrait.JPG",

                alt:
                    "Éter portrait",

                protectShape:
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"

            },

            {

                src:
                    "images/eter mock room.jpg",

                alt:
                    "Éter mock room 1",

                protectShape:
                    "polygon(34.7% 20.1%, 62.2% 20.1%, 62.2% 46.2%, 34.7% 46.2%)"

            },

            {

                src:
                    "images/eter mock room 2.jpg",

                alt:
                    "Éter mock room 2",

                protectShape:
                    "polygon(42.5% 36.4%, 67.8% 36.4%, 67.8% 60.1%, 42.5% 60.1%)"

            }

        ]

    },



    oneiric: {

        name:
            "Oneiric Glow",

        product:
            "oneiric-glow",

        price:
            "19.99",

        year:
            "2024",

        number:
            "06",

        description:
            "A moment of stillness can kindle a soul toward rediscovery.",


        gallery: [

            {

                src:
                    "images/oneiric portrait.JPG",

                alt:
                    "Oneiric portrait",

                protectShape:
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"

            },

            {

                src:
                    "images/oneiric mock room 1.JPG",

                alt:
                    "Oneiric mock room 1",

                protectShape:
                    "polygon(24.65% 23.32%, 62.79% 23.32%, 62.79% 59.35%, 24.65% 59.35%)"

            },

            {

                src:
                    "images/oneiric mock room 2.JPG",

                alt:
                    "Oneiric mock room 2",

                protectShape:
                    "polygon(22.2% 29.5%, 43.6% 29.5%, 43.6% 49.7%, 22.2% 49.7%)"

            }

        ]

    }

};



/* =========================================================
   02. ELEMENTS
========================================================= */


/* =========================================================
   GALLERY
========================================================= */

const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const lightboxTitle =
    document.getElementById(
        "lightboxTitle"
    );


const lightboxCounter =
    document.getElementById(
        "lightboxCounter"
    );


const lightboxSwipeIndicator =
    document.getElementById(
        "lightboxSwipeIndicator"
    );


const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );


const lightboxPrev =
    document.getElementById(
        "lightboxPrev"
    );


const lightboxNext =
    document.getElementById(
        "lightboxNext"
    );



/* =========================================================
   PRODUCT INFORMATION
========================================================= */

const artworkProductInfo =
    document.querySelector(
        ".artwork-product-info"
    );


const artworkPrice =
    document.getElementById(
        "artworkPrice"
    );


const artworkDescription =
    document.getElementById(
        "artworkDescription"
    );


const artworkYear =
    document.getElementById(
        "artworkYear"
    );


const artworkNumber =
    document.getElementById(
        "artworkNumber"
    );


const artworkAddToBag =
    document.getElementById(
        "artworkAddToBag"
    );


const artworkAddToBagPrice =
    document.getElementById(
        "artworkAddToBagPrice"
    );


const collectionArtworkTrack =
    document.getElementById(
        "collectionArtworkTrack"
    );



/* =========================================================
   PRODUCT DETAILS
========================================================= */

const artworkDetailsLink =
    document.getElementById(
        "artworkDetailsLink"
    );


const productDetailsPanel =
    document.getElementById(
        "productDetailsPanel"
    );


const productDetailsClose =
    document.getElementById(
        "productDetailsClose"
    );


const productDetailsTabs =
    document.querySelectorAll(
        ".product-details-tab"
    );


const productDetailsSections =
    document.querySelectorAll(
        ".product-details-section"
    );


const detailsArtworkName =
    document.getElementById(
        "detailsArtworkName"
    );


const detailsArtworkNumber =
    document.getElementById(
        "detailsArtworkNumber"
    );


const detailsArtworkYear =
    document.getElementById(
        "detailsArtworkYear"
    );



/* =========================================================
   SIZE GUIDE
========================================================= */

const artworkSizeGuideLink =
    document.getElementById(
        "artworkSizeGuideLink"
    );


const sizeGuidePanel =
    document.getElementById(
        "sizeGuidePanel"
    );


const sizeGuideClose =
    document.getElementById(
        "sizeGuideClose"
    );


const sizeGuideArtworkName =
    document.getElementById(
        "sizeGuideArtworkName"
    );


const sizeGuideWallArt =
    document.getElementById(
        "sizeGuideWallArt"
    );
    
    
const sizeGuideWallImage =
    document.getElementById(
        "sizeGuideWallImage"
    );


const sizeGuideSelectedSize =
    document.getElementById(
        "sizeGuideSelectedSize"
    );


const sizeGuideOptions =
    document.querySelectorAll(
        ".size-guide-option"
    );



/* =========================================================
   PROPORTIONS GUIDE
========================================================= */

const artworkProportionsGuideLink =
    document.getElementById(
        "artworkProportionsGuideLink"
    );


const proportionsGuidePanel =
    document.getElementById(
        "proportionsGuidePanel"
    );


const proportionsGuideClose =
    document.getElementById(
        "proportionsGuideClose"
    );


const proportionsGuideViewer =
    document.querySelector(
        ".proportions-guide-viewer"
    );


const proportionsGuideFrame =
    document.getElementById(
        "proportionsGuideFrame"
    );


const proportionsGuideImage =
    document.getElementById(
        "proportionsGuideImage"
    );


const proportionsGuideFormat =
    document.getElementById(
        "proportionsGuideFormat"
    );


const proportionsGuideImpact =
    document.getElementById(
        "proportionsGuideImpact"
    );


const proportionsGuideIndicator =
    document.getElementById(
        "proportionsGuideIndicator"
    );



/* =========================================================
   03. LOAD COLLECTION IMAGES
========================================================= */

document
    .querySelectorAll(
        ".protected-collection-image"
    )
    .forEach(
        image => {

            const source =
                image.dataset.image;


            if (
                !source
            ) {
                return;
            }


            image.style.backgroundImage =
                `url("${source}")`;

        }
    );



/* =========================================================
   04. STATE
========================================================= */


/* =========================================================
   ACTIVE ARTWORK / GALLERY
========================================================= */

let activeArtwork =
    null;


let activeArtworkKey =
    null;


let activeGallery =
    [];


let activeIndex =
    0;


let touchStartX =
    0;


let touchEndX =
    0;


let transitionRunning =
    false;



/* =========================================================
   PROPORTIONS GUIDE STATE
========================================================= */

let activeProportionIndex =
    0;


let proportionsSwipeStartX =
    0;


let proportionsSwipeEndX =
    0;



/* =========================================================
   PROPORTIONS GUIDE FORMATS

   Native Summertide proportion:
   A-series = 1 : √2
========================================================= */

const proportionsGuideFormats = [

    {

        key:
            "a-series",

        label:
            "A-series · 1:√2",

        ratio:
            "1 / 1.41421356237",

        fit:
            "contain",

        impact:
            "Original composition"

    },


    {

        key:
            "5x7",

        label:
            "5:7",

        ratio:
            "5 / 7",

        fit:
            "cover",

        impact:
            "Minimal crop at the top and bottom"

    },


    {

        key:
            "2x3",

        label:
            "2:3",

        ratio:
            "2 / 3",

        fit:
            "cover",

        impact:
            "Slight crop on the left and right"

    },


    {

        key:
            "3x4",

        label:
            "3:4",

        ratio:
            "3 / 4",

        fit:
            "cover",

        impact:
            "Slight crop at the top and bottom"

    },


    {

        key:
            "4x5",

        label:
            "4:5",

        ratio:
            "4 / 5",

        fit:
            "cover",

        impact:
            "Moderate crop at the top and bottom"

    },


    {

        key:
            "11x14",

        label:
            "11:14",

        ratio:
            "11 / 14",

        fit:
            "cover",

        impact:
            "Moderate crop at the top and bottom"

    },


    {

        key:
            "1x1",

        label:
            "1:1",

        ratio:
            "1 / 1",

        fit:
            "cover",

        impact:
            "Significant crop at the top and bottom"

    }

];



/* =========================================================
   05. ADD TO BAG
========================================================= */

if (
    artworkAddToBag
) {

    artworkAddToBag.addEventListener(
        "click",
        () => {

            if (
                !activeArtwork
            ) {
                return;
            }


            addToGlobalBag(
                activeArtwork.product
            );

        }
    );

}



/* =========================================================
   06. ARTWORK INFORMATION
========================================================= */

function updateArtworkInfo() {

    if (
        !activeArtwork
    ) {
        return;
    }


    if (
        lightboxTitle
    ) {

        lightboxTitle.textContent =
            activeArtwork.name;

    }


    if (
        artworkPrice
    ) {

        artworkPrice.textContent =
            `$${activeArtwork.price} USD`;

    }


    if (
        artworkAddToBagPrice
    ) {

        artworkAddToBagPrice.textContent =
            `$${activeArtwork.price} USD`;

    }


    if (
        artworkYear
    ) {

        artworkYear.textContent =
            activeArtwork.year;

    }


    if (
        artworkNumber
    ) {

        artworkNumber.textContent =
            activeArtwork.number;

    }


    if (
        artworkDescription
    ) {

        artworkDescription.textContent =
            activeArtwork.description ||
            "";

    }


    if (
        artworkAddToBag
    ) {

        artworkAddToBag.dataset.product =
            activeArtwork.product;


        artworkAddToBag.dataset.name =
            activeArtwork.name;


        artworkAddToBag.dataset.price =
            activeArtwork.price;

    }


    updateCollectionNavigatorState();

    updateProductDetails();

}



/* =========================================================
   07. PRODUCT DETAILS
========================================================= */


/* =========================================================
   UPDATE PRODUCT DETAILS
========================================================= */

function updateProductDetails() {

    if (
        !activeArtwork
    ) {
        return;
    }


    if (
        detailsArtworkName
    ) {

        detailsArtworkName.textContent =
            activeArtwork.name;

    }


    if (
        detailsArtworkNumber
    ) {

        detailsArtworkNumber.textContent =
            activeArtwork.number;

    }


    if (
        detailsArtworkYear
    ) {

        detailsArtworkYear.textContent =
            activeArtwork.year;

    }

}

/* =========================================================
   PRODUCT DETAILS — MATCH EXISTING PRODUCT COLUMN
========================================================= */

function syncProductDetailsToProductColumn() {

    if (
        !productDetailsPanel ||
        !artworkProductInfo
    ) {
        return;
    }


    /*
        Mobile keeps the normal full-screen
        Product Details layout.
    */

    if (
        !window.matchMedia(
            "(min-width: 768px)"
        ).matches
    ) {

        productDetailsPanel.style.removeProperty(
            "--details-panel-top"
        );

        productDetailsPanel.style.removeProperty(
            "--details-panel-left"
        );

        productDetailsPanel.style.removeProperty(
            "--details-panel-width"
        );

        productDetailsPanel.style.removeProperty(
            "--details-panel-height"
        );

        return;

    }


    /*
        Measure the CURRENT white product-info column.

        Product Details will occupy these exact
        same boundaries.
    */

    const rect =
        artworkProductInfo
            .getBoundingClientRect();


    productDetailsPanel.style.setProperty(
        "--details-panel-top",
        `${rect.top}px`
    );


    productDetailsPanel.style.setProperty(
        "--details-panel-left",
        `${rect.left}px`
    );


    productDetailsPanel.style.setProperty(
        "--details-panel-width",
        `${rect.width}px`
    );


    productDetailsPanel.style.setProperty(
        "--details-panel-height",
        `${rect.height}px`
    );

}

/* =========================================================
   OPEN PRODUCT DETAILS
========================================================= */

function openProductDetails() {

    if (
        !productDetailsPanel ||
        !activeArtwork
    ) {
        return;
    }


    updateProductDetails();


    activateProductDetailsTab(
        "artwork"
    );


    /*
        Match the exact width and position
        of the existing product-info column.
    */

    syncProductDetailsToProductColumn();


    productDetailsPanel.scrollTop =
        0;


    /*
        Fade the EXISTING artwork side.

        No duplicate artwork image is created.
    */

    if (
        lightbox
    ) {

        lightbox.classList.add(
            "product-details-open"
        );

    }


    productDetailsPanel.classList.add(
        "open"
    );


    productDetailsPanel.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =========================================================
   CLOSE PRODUCT DETAILS
========================================================= */

function closeProductDetails() {

    if (
        !productDetailsPanel
    ) {
        return;
    }


    productDetailsPanel.classList.remove(
        "open"
    );


    productDetailsPanel.setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        lightbox
    ) {

        lightbox.classList.remove(
            "product-details-open"
        );

    }

}



/* =========================================================
   CHANGE PRODUCT DETAILS TAB
========================================================= */

function activateProductDetailsTab(
    tabName
) {

    productDetailsTabs.forEach(
        tab => {

            const isActive =
                tab.dataset.detailsTab
                ===
                tabName;


            tab.classList.toggle(
                "active",
                isActive
            );


            tab.setAttribute(
                "aria-selected",
                isActive
                    ?
                    "true"
                    :
                    "false"
            );

        }
    );


    productDetailsSections.forEach(
        section => {

            const isActive =
                section.dataset.detailsPanel
                ===
                tabName;


            section.classList.toggle(
                "active",
                isActive
            );


            section.hidden =
                !isActive;

        }
    );


    if (
        productDetailsPanel
    ) {

        productDetailsPanel.scrollTo(
            {

                top:
                    0,

                behavior:
                    "smooth"

            }
        );

    }

}



/* =========================================================
   08. SIZE GUIDE
========================================================= */


/* =========================================================
   UPDATE SIZE GUIDE ARTWORK
========================================================= */

function updateSizeGuideArtwork() {

    if (
        !activeArtwork ||
        !activeArtworkKey
    ) {
        return;
    }


    if (
        sizeGuideArtworkName
    ) {

        sizeGuideArtworkName.textContent =
            activeArtwork.name;

    }


    if (
        sizeGuideWallImage
    ) {

        const sizeGuideImage =
            `images/${activeArtworkKey} size.PNG`;


        sizeGuideWallImage.src =
            sizeGuideImage;


        sizeGuideWallImage.alt =
            `${activeArtwork.name} size preview`;

    }

}



/* =========================================================
   SELECT SIZE
========================================================= */

function setSizeGuideSize(
    button
) {

    if (
        !button ||
        !sizeGuideWallArt
    ) {
        return;
    }


    const paperWidth =
        parseFloat(
            button.dataset.widthCm
        );


    const label =
        button.dataset.label;


    if (
        Number.isNaN(
            paperWidth
        )
    ) {
        return;
    }


    /*
        A1 is the largest size in this guide.

        A1 width = 59.4 cm
        A1 visual width = 25% of the room.

        Every smaller A size is scaled
        directly from its real physical width.
    */

    const largestPaperWidth =
        59.4;


    const largestVisualWidth =
        25;


    const visualWidth =
        (
            paperWidth
            /
            largestPaperWidth
        )
        *
        largestVisualWidth;


    sizeGuideWallArt.style.width =
        `${visualWidth}%`;


    if (
        sizeGuideSelectedSize
    ) {

        sizeGuideSelectedSize.textContent =
            label;

    }


    sizeGuideOptions.forEach(
        option => {

            option.classList.toggle(
                "active",
                option === button
            );

        }
    );

}


/* =========================================================
   OPEN SIZE GUIDE
========================================================= */

function openSizeGuide() {

    if (
        !sizeGuidePanel ||
        !activeArtwork
    ) {
        return;
    }


    updateSizeGuideArtwork();


const defaultSize =
    document.querySelector(
        '.size-guide-option[data-size="a2"]'
    );


    if (
        defaultSize
    ) {

        setSizeGuideSize(
            defaultSize
        );

    }


    sizeGuidePanel.scrollTop =
        0;


    sizeGuidePanel.classList.add(
        "open"
    );


    sizeGuidePanel.setAttribute(
        "aria-hidden",
        "false"
    );

}



/* =========================================================
   CLOSE SIZE GUIDE
========================================================= */

function closeSizeGuide() {

    if (
        !sizeGuidePanel
    ) {
        return;
    }


    sizeGuidePanel.classList.remove(
        "open"
    );


    sizeGuidePanel.setAttribute(
        "aria-hidden",
        "true"
    );

}



/* =========================================================
   SIZE GUIDE EVENTS
========================================================= */

if (
    artworkSizeGuideLink
) {

    artworkSizeGuideLink.addEventListener(
        "click",
        openSizeGuide
    );

}


if (
    sizeGuideClose
) {

    sizeGuideClose.addEventListener(
        "click",
        closeSizeGuide
    );

}


sizeGuideOptions.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                setSizeGuideSize(
                    button
                );

            }
        );

    }
);



/* =========================================================
   09. PROPORTIONS GUIDE
========================================================= */


/* =========================================================
   GET ARTWORK SOURCE

   If a dedicated proportions preview is added later,
   define:

   proportionsSrc: "images/example.jpg"

   inside the artwork data.

   Until then, the first gallery image is used.
========================================================= */

function getProportionsGuideSource() {

    if (
        !activeArtwork ||
        !activeArtworkKey
    ) {
        return "";
    }

    return `images/${activeArtworkKey} size.PNG`;

}



/* =========================================================
   BUILD PROPORTIONS INDICATOR
========================================================= */

function buildProportionsGuideIndicator() {

    if (
        !proportionsGuideIndicator
    ) {
        return;
    }


    proportionsGuideIndicator.innerHTML =
        "";


    proportionsGuideFormats.forEach(
        (_, index) => {

            const segment =
                document.createElement(
                    "span"
                );


            if (
                index ===
                activeProportionIndex
            ) {

                segment.classList.add(
                    "active"
                );

            }


            proportionsGuideIndicator
                .appendChild(
                    segment
                );

        }
    );

}



/* =========================================================
   UPDATE PROPORTIONS INDICATOR
========================================================= */

function updateProportionsGuideIndicator() {

    if (
        !proportionsGuideIndicator
    ) {
        return;
    }


    const segments =
        proportionsGuideIndicator
            .querySelectorAll(
                "span"
            );


    segments.forEach(
        (segment, index) => {

            segment.classList.toggle(
                "active",
                index ===
                activeProportionIndex
            );

        }
    );

}



/* =========================================================
   UPDATE PROPORTIONS ARTWORK
========================================================= */

function updateProportionsGuideArtwork() {

    if (
        !activeArtwork ||
        !proportionsGuideImage
    ) {
        return;
    }


    const source =
        getProportionsGuideSource();


    if (
        !source
    ) {
        return;
    }


    proportionsGuideImage
        .style
        .backgroundImage =
        `url("${source}")`;


    proportionsGuideImage.setAttribute(
        "aria-label",
        `${activeArtwork.name} proportions preview`
    );

}



/* =========================================================
   RENDER ACTIVE PROPORTION
========================================================= */

function renderProportionsGuide() {

    const format =
        proportionsGuideFormats[
            activeProportionIndex
        ];


    if (
        !format ||
        !proportionsGuideFrame ||
        !proportionsGuideImage
    ) {
        return;
    }


    /*
        Change the visible frame shape.
    */

    proportionsGuideFrame
        .style
        .aspectRatio =
        format.ratio;


    /*
        Native A-series:
        preserve the entire composition.

        Alternative ratios:
        fill the selected shape so the
        buyer can see the resulting crop.
    */

    proportionsGuideImage
        .style
        .backgroundSize =
        format.fit;


    proportionsGuideImage
        .style
        .backgroundPosition =
        "center center";


    if (
        proportionsGuideFormat
    ) {

        proportionsGuideFormat.textContent =
            format.label;

    }


    if (
        proportionsGuideImpact
    ) {

        proportionsGuideImpact.textContent =
            format.impact;

    }


    updateProportionsGuideIndicator();

}



/* =========================================================
   NEXT PROPORTION
========================================================= */

function showNextProportion() {

    activeProportionIndex =
        (
            activeProportionIndex
            +
            1
        )
        %
        proportionsGuideFormats.length;


    renderProportionsGuide();

}



/* =========================================================
   PREVIOUS PROPORTION
========================================================= */

function showPreviousProportion() {

    activeProportionIndex =
        (
            activeProportionIndex
            -
            1
            +
            proportionsGuideFormats.length
        )
        %
        proportionsGuideFormats.length;


    renderProportionsGuide();

}



/* =========================================================
   OPEN PROPORTIONS GUIDE
========================================================= */

function openProportionsGuide() {

    if (
        !proportionsGuidePanel ||
        !activeArtwork
    ) {
        return;
    }


    activeProportionIndex =
        0;


    updateProportionsGuideArtwork();


    buildProportionsGuideIndicator();


    renderProportionsGuide();


    proportionsGuidePanel.scrollTop =
        0;


    proportionsGuidePanel.classList.add(
        "open"
    );


    proportionsGuidePanel.setAttribute(
        "aria-hidden",
        "false"
    );

}



/* =========================================================
   CLOSE PROPORTIONS GUIDE
========================================================= */

function closeProportionsGuide() {

    if (
        !proportionsGuidePanel
    ) {
        return;
    }


    proportionsGuidePanel.classList.remove(
        "open"
    );


    proportionsGuidePanel.setAttribute(
        "aria-hidden",
        "true"
    );

}



/* =========================================================
   PROPORTIONS GUIDE BUTTON EVENTS
========================================================= */

if (
    artworkProportionsGuideLink
) {

    artworkProportionsGuideLink.addEventListener(
        "click",
        openProportionsGuide
    );

}


if (
    proportionsGuideClose
) {

    proportionsGuideClose.addEventListener(
        "click",
        closeProportionsGuide
    );

}



/* =========================================================
   PROPORTIONS GUIDE — TOUCH SWIPE
========================================================= */

if (
    proportionsGuideViewer
) {

    proportionsGuideViewer.addEventListener(
        "touchstart",
        event => {

            proportionsSwipeStartX =
                event
                    .changedTouches[0]
                    .clientX;

        },
        {
            passive: true
        }
    );


    proportionsGuideViewer.addEventListener(
        "touchend",
        event => {

            proportionsSwipeEndX =
                event
                    .changedTouches[0]
                    .clientX;


            const distance =
                proportionsSwipeStartX
                -
                proportionsSwipeEndX;


            if (
                Math.abs(
                    distance
                )
                <
                45
            ) {
                return;
            }


            if (
                distance > 0
            ) {

                showNextProportion();

            }

            else {

                showPreviousProportion();

            }

        },
        {
            passive: true
        }
    );

}



/* =========================================================
   PROPORTIONS GUIDE — DESKTOP SWIPE
========================================================= */

if (
    proportionsGuideViewer
) {

    let proportionsPointerActive =
        false;


    proportionsGuideViewer.addEventListener(
        "pointerdown",
        event => {

            /*
                Touch devices already use the
                touch listeners above.
            */

            if (
                event.pointerType ===
                "touch"
            ) {
                return;
            }


            proportionsPointerActive =
                true;


            proportionsSwipeStartX =
                event.clientX;

        }
    );


    proportionsGuideViewer.addEventListener(
        "pointerup",
        event => {

            if (
                !proportionsPointerActive
            ) {
                return;
            }


            proportionsPointerActive =
                false;


            proportionsSwipeEndX =
                event.clientX;


            const distance =
                proportionsSwipeStartX
                -
                proportionsSwipeEndX;


            if (
                Math.abs(
                    distance
                )
                <
                45
            ) {
                return;
            }


            if (
                distance > 0
            ) {

                showNextProportion();

            }

            else {

                showPreviousProportion();

            }

        }
    );


    proportionsGuideViewer.addEventListener(
        "pointerleave",
        () => {

            proportionsPointerActive =
                false;

        }
    );

}



/* =========================================================
   10. PROTECTION OVERLAY
========================================================= */

const imageSizeCache =
    new Map();


let protectionOverlay =
    null;



function getProtectionOverlay() {

    if (
        protectionOverlay
    ) {

        return protectionOverlay;

    }


    protectionOverlay =
        document.createElement(
            "div"
        );


    protectionOverlay.className =
        "lightbox-protection-overlay";


    lightboxImage.appendChild(
        protectionOverlay
    );


    return protectionOverlay;

}



/* =========================================================
   11. GALLERY SLIDE
========================================================= */


/* =========================================================
   GALLERY SWIPE INDICATOR
========================================================= */

function updateSwipeIndicator() {

    if (
        !lightboxSwipeIndicator ||
        !activeGallery ||
        !activeGallery.length
    ) {
        return;
    }


    lightboxSwipeIndicator.innerHTML =
        "";


    activeGallery.forEach(
        (_, index) => {

            const segment =
                document.createElement(
                    "span"
                );


            segment.className =
                "lightbox-swipe-segment";


            if (
                index ===
                activeIndex
            ) {

                segment.classList.add(
                    "active"
                );

            }


            lightboxSwipeIndicator
                .appendChild(
                    segment
                );

        }
    );

}



/* =========================================================
   UPDATE CURRENT SLIDE
========================================================= */

function updateSlide() {

    const slide =
        activeGallery[
            activeIndex
        ];


    if (
        !slide
    ) {
        return;
    }


    lightboxImage.style.backgroundImage =
        `url("${slide.src}")`;


    lightboxImage.style.setProperty(
        "--protect-shape",
        slide.protectShape ||
        "polygon(0 0, 0 0, 0 0, 0 0)"
    );


    lightboxImage.setAttribute(
        "aria-label",
        slide.alt
    );


    lightboxCounter.textContent =
        `${activeIndex + 1}/${activeGallery.length}`;


    updateSwipeIndicator();

}



/* =========================================================
   12. GALLERY PRELOAD
========================================================= */

function preloadGalleryImages(
    gallery
) {

    gallery.forEach(
        slide => {

            const image =
                new Image();


            image.src =
                slide.src;

        }
    );

}



/* =========================================================
   13. COLLECTION NAVIGATOR
========================================================= */

const artworkOrder = [

    "amber",
    "peridot",
    "patina",
    "sage",
    "eter",
    "oneiric"

];



/* =========================================================
   BUILD COLLECTION NAVIGATOR
========================================================= */

function buildCollectionNavigator() {

    if (
        !collectionArtworkTrack
    ) {
        return;
    }


    collectionArtworkTrack.innerHTML =
        "";


    artworkOrder.forEach(
        artworkKey => {

            const artwork =
                artworks[
                    artworkKey
                ];


            if (
                !artwork
            ) {
                return;
            }


            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "collection-artwork-card";


            card.dataset.artwork =
                artworkKey;


            card.setAttribute(
                "aria-label",
                `View ${artwork.name}`
            );


            const image =
                document.createElement(
                    "span"
                );


            image.className =
                "collection-artwork-image";


            image.style.backgroundImage =
                `url("${artwork.gallery[0].src}")`;


            const name =
                document.createElement(
                    "span"
                );


            name.className =
                "collection-artwork-name";


            name.textContent =
                artwork.name;


            const price =
                document.createElement(
                    "span"
                );


            price.className =
                "collection-artwork-price";


            price.textContent =
                `$${artwork.price} USD`;


            card.appendChild(
                image
            );


            card.appendChild(
                name
            );


            card.appendChild(
                price
            );


            card.addEventListener(
                "click",
                () => {

                    switchArtworkFromNavigator(
                        artworkKey
                    );

                }
            );


            collectionArtworkTrack
                .appendChild(
                    card
                );

        }
    );


    updateCollectionNavigatorState(
        false
    );

}



/* =========================================================
   UPDATE COLLECTION NAVIGATOR
========================================================= */

function updateCollectionNavigatorState(
    smooth = true
) {

    if (
        !collectionArtworkTrack
    ) {
        return;
    }


    const cards =
        collectionArtworkTrack
            .querySelectorAll(
                ".collection-artwork-card"
            );


    let activeCard =
        null;


    cards.forEach(
        card => {

            const isActive =
                card.dataset.artwork
                ===
                activeArtworkKey;


            card.classList.toggle(
                "active",
                isActive
            );


            if (
                isActive
            ) {

                activeCard =
                    card;

            }

        }
    );


    if (
        !activeCard
    ) {
        return;
    }


    const targetLeft =
        activeCard.offsetLeft
        -
        (
            collectionArtworkTrack.clientWidth
            -
            activeCard.clientWidth
        )
        /
        2;


    collectionArtworkTrack.scrollTo(
        {

            left:
                Math.max(
                    0,
                    targetLeft
                ),

            behavior:
                smooth
                    ?
                    "smooth"
                    :
                    "auto"

        }
    );

}



/* =========================================================
   SWITCH ARTWORK FROM NAVIGATOR
========================================================= */

function switchArtworkFromNavigator(
    artworkKey
) {

    if (
        transitionRunning
    ) {
        return;
    }


    if (
        artworkKey
        ===
        activeArtworkKey
    ) {
        return;
    }


    const selectedArtwork =
        artworks[
            artworkKey
        ];


    if (
        !selectedArtwork
    ) {
        return;
    }


    transitionRunning =
        true;


    lightboxImage.classList.add(
        "gallery-fade-out"
    );


    setTimeout(
        () => {

            activeArtworkKey =
                artworkKey;


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


            updateSlide();


            closeAllAccordions();


            lightboxImage.classList.remove(
                "gallery-fade-out"
            );


            lightboxImage.classList.add(
                "gallery-fade-in"
            );


            if (
                lightbox
            ) {

                lightbox.scrollTo(
                    {

                        top:
                            0,

                        behavior:
                            "smooth"

                    }
                );

            }


            setTimeout(
                () => {

                    lightboxImage.classList.remove(
                        "gallery-fade-in"
                    );


                    transitionRunning =
                        false;

                },
                550
            );

        },
        300
    );

}



/* =========================================================
   14. ACCORDIONS
========================================================= */

function closeAllAccordions() {

    document
        .querySelectorAll(
            ".artwork-accordion"
        )
        .forEach(
            accordion => {

                const content =
                    accordion.querySelector(
                        ".accordion-content"
                    );


                const symbol =
                    accordion.querySelector(
                        ".accordion-symbol"
                    );


                accordion.classList.remove(
                    "open"
                );


                if (
                    content
                ) {

                    content.style.maxHeight =
                        null;

                }


                if (
                    symbol
                ) {

                    symbol.textContent =
                        "+";

                }

            }
        );

}



/* =========================================================
   15. OPEN ARTWORK
========================================================= */

function openGallery(
    artworkName,
    clickedImage
) {

    if (
        transitionRunning
    ) {
        return;
    }


    const selectedArtwork =
        artworks[
            artworkName
        ];


    if (
        !selectedArtwork
    ) {
        return;
    }


    transitionRunning =
        true;


    activeArtworkKey =
        artworkName;


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


    const overlay =
        getProtectionOverlay();


    overlay.style.display =
        "none";


    closeAllAccordions();


    /*
        Preload the first gallery image
        before beginning the opening
        transition.
    */

    const firstGalleryImage =
        new Image();


    firstGalleryImage.src =
        activeGallery[0].src;


    let transitionStarted =
        false;


    function startTransition() {

        if (
            transitionStarted
        ) {
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


    if (
        firstGalleryImage.complete
    ) {

        startTransition();

    }


    firstGalleryImage.onerror =
        startTransition;

}



/* =========================================================
   16. IMAGE SIZE CACHE
========================================================= */

function getImageSize(
    source,
    callback
) {

    if (
        imageSizeCache.has(
            source
        )
    ) {

        callback(
            imageSizeCache.get(
                source
            )
        );


        return;

    }


    const image =
        new Image();


    image.onload =
        () => {

            const size = {

                width:
                    image.naturalWidth,

                height:
                    image.naturalHeight

            };


            imageSizeCache.set(
                source,
                size
            );


            callback(
                size
            );

        };


    image.src =
        source;

}



/* =========================================================
   17. POSITION PROTECTION OVERLAY
========================================================= */

function positionProtectionOverlay(
    slide
) {

    const overlay =
        getProtectionOverlay();


    if (
        !slide ||
        !slide.protectBox
    ) {

        overlay.style.display =
            "none";


        return;

    }


    getImageSize(
        slide.src,
        size => {

            if (
                activeGallery[
                    activeIndex
                ]
                !==
                slide
            ) {
                return;
            }


            const containerWidth =
                lightboxImage.clientWidth;


            const containerHeight =
                lightboxImage.clientHeight;


            const imageWidth =
                size.width;


            const imageHeight =
                size.height;


            const scale =
                Math.min(
                    containerWidth
                    /
                    imageWidth,

                    containerHeight
                    /
                    imageHeight
                );


            const renderedWidth =
                imageWidth
                *
                scale;


            const renderedHeight =
                imageHeight
                *
                scale;


            const offsetX =
                (
                    containerWidth
                    -
                    renderedWidth
                )
                /
                2;


            const offsetY =
                (
                    containerHeight
                    -
                    renderedHeight
                )
                /
                2;


            const left =
                offsetX
                +
                (
                    slide.protectBox.x
                    /
                    100
                )
                *
                renderedWidth;


            const top =
                offsetY
                +
                (
                    slide.protectBox.y
                    /
                    100
                )
                *
                renderedHeight;


            const width =
                (
                    slide.protectBox.width
                    /
                    100
                )
                *
                renderedWidth;


            const height =
                (
                    slide.protectBox.height
                    /
                    100
                )
                *
                renderedHeight;


            overlay.style.display =
                "block";


            overlay.style.left =
                `${left}px`;


            overlay.style.top =
                `${top}px`;


            overlay.style.width =
                `${width}px`;


            overlay.style.height =
                `${height}px`;

        }
    );

}



/* =========================================================
   18. OPENING TRANSITION
========================================================= */

function runZoomOutTransition(
    clickedImage
) {

    if (
        !clickedImage
    ) {

        transitionRunning =
            false;


        return;

    }


    const startRect =
        clickedImage
            .getBoundingClientRect();


    const transitionImage =
        clickedImage.cloneNode(
            true
        );


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


    document.body.classList.add(
        "artwork-viewer-open"
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


    requestAnimationFrame(
        () => {

            requestAnimationFrame(
                () => {

                    const destination =
                        lightboxImage
                            .getBoundingClientRect();


                    transitionImage.classList.add(
                        "transition-artwork-brightening"
                    );


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
                        DO NOT CHANGE:
                        tuned opening-transition timing.
                    */

                    setTimeout(
                        () => {

                            transitionImage.classList.add(
                                "transition-artwork-fade"
                            );


                            lightboxImage.classList.add(
                                "room-image-reveal"
                            );


                            lightboxImage.style.opacity =
                                "1";

                        },
                        900
                    );


                    setTimeout(
                        () => {

                            lightboxCounter.style.opacity =
                                "1";


                            lightboxPrev.style.opacity =
                                "1";


                            lightboxNext.style.opacity =
                                "1";


                            lightboxClose.style.opacity =
                                "1";

                        },
                        1750
                    );


                    setTimeout(
                        () => {

                            transitionImage.remove();


                            lightbox.classList.remove(
                                "transition-opening"
                            );


                            lightboxImage.classList.remove(
                                "room-image-reveal"
                            );


                            transitionRunning =
                                false;

                        },
                        3200
                    );

                }
            );

        }
    );

}



/* =========================================================
   19. GALLERY NAVIGATION
========================================================= */


/* =========================================================
   CHANGE SLIDE
========================================================= */

function changeSlide(
    newIndex
) {

    if (
        transitionRunning
    ) {
        return;
    }


    transitionRunning =
        true;


    lightboxImage.classList.add(
        "gallery-fade-out"
    );


    setTimeout(
        () => {

            activeIndex =
                newIndex;


            updateSlide();


            lightboxImage.classList.remove(
                "gallery-fade-out"
            );


            lightboxImage.classList.add(
                "gallery-fade-in"
            );


            setTimeout(
                () => {

                    lightboxImage.classList.remove(
                        "gallery-fade-in"
                    );


                    transitionRunning =
                        false;

                },
                550
            );

        },
        300
    );

}



/* =========================================================
   NEXT SLIDE
========================================================= */

function nextSlide() {

    if (
        !activeGallery ||
        activeGallery.length ===
        0
    ) {
        return;
    }


    const newIndex =
        (
            activeIndex
            +
            1
        )
        %
        activeGallery.length;


    changeSlide(
        newIndex
    );

}



/* =========================================================
   PREVIOUS SLIDE
========================================================= */

function previousSlide() {

    if (
        !activeGallery ||
        activeGallery.length ===
        0
    ) {
        return;
    }


    const newIndex =
        (
            activeIndex
            -
            1
            +
            activeGallery.length
        )
        %
        activeGallery.length;


    changeSlide(
        newIndex
    );

}



/* =========================================================
   20. CLOSE ARTWORK
========================================================= */

function closeGallery() {

    lightbox.classList.remove(
        "open",
        "transition-opening"
    );


    document.body.classList.remove(
        "artwork-viewer-open"
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
            element => {

                element.remove();

            }
        );


    lightbox.scrollTop =
        0;


    closeAllAccordions();

}



/* =========================================================
   21. ARTWORK EVENTS
========================================================= */


/* =========================================================
   CLICK COLLECTION ARTWORK
========================================================= */

document
    .querySelectorAll(
        ".collection-item"
    )
    .forEach(
        item => {

            item.addEventListener(
                "click",
                () => {

                    const clickedImage =
                        item.querySelector(
                            ".protected-collection-image"
                        );


                    if (
                        !clickedImage
                    ) {
                        return;
                    }


                    openGallery(
                        item.dataset.gallery,
                        clickedImage
                    );

                }
            );

        }
    );



/* =========================================================
   GALLERY BUTTONS
========================================================= */

if (
    lightboxClose
) {

    lightboxClose.addEventListener(
        "click",
        closeGallery
    );

}


if (
    lightboxNext
) {

    lightboxNext.addEventListener(
        "click",
        nextSlide
    );

}


if (
    lightboxPrev
) {

    lightboxPrev.addEventListener(
        "click",
        previousSlide
    );

}



/* =========================================================
   ACCORDION EVENTS
   Kept for existing JavaScript compatibility.
========================================================= */

const accordionButtons =
    document.querySelectorAll(
        ".accordion-button"
    );


accordionButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const accordion =
                    button.closest(
                        ".artwork-accordion"
                    );


                if (
                    !accordion
                ) {
                    return;
                }


                const content =
                    accordion.querySelector(
                        ".accordion-content"
                    );


                const symbol =
                    button.querySelector(
                        ".accordion-symbol"
                    );


                if (
                    !content
                ) {
                    return;
                }


                const isOpen =
                    accordion.classList.contains(
                        "open"
                    );


                closeAllAccordions();


                if (
                    isOpen
                ) {
                    return;
                }


                accordion.classList.add(
                    "open"
                );


                content.style.maxHeight =
                    content.scrollHeight
                    +
                    "px";


                if (
                    symbol
                ) {

                    symbol.textContent =
                        "−";

                }

            }
        );

    }
);



/* =========================================================
   22. PRODUCT DETAILS EVENTS
========================================================= */

if (
    artworkDetailsLink
) {

    artworkDetailsLink.addEventListener(
        "click",
        openProductDetails
    );

}


if (
    productDetailsClose
) {

    productDetailsClose.addEventListener(
        "click",
        closeProductDetails
    );

}


productDetailsTabs.forEach(
    tab => {

        tab.addEventListener(
            "click",
            () => {

                activateProductDetailsTab(
                    tab.dataset.detailsTab
                );

            }
        );

    }
);



/* =========================================================
   23. KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox ||
            !lightbox.classList.contains(
                "open"
            )
        ) {
            return;
        }



        /* =================================================
           ESCAPE
        ================================================= */

        if (
            event.key ===
            "Escape"
        ) {


            /*
                1. Proportions Guide
            */

            if (
                proportionsGuidePanel &&
                proportionsGuidePanel
                    .classList
                    .contains(
                        "open"
                    )
            ) {

                closeProportionsGuide();

                return;

            }


            /*
                2. Size Guide
            */

            if (
                sizeGuidePanel &&
                sizeGuidePanel
                    .classList
                    .contains(
                        "open"
                    )
            ) {

                closeSizeGuide();

                return;

            }


            /*
                3. Product Details
            */

            if (
                productDetailsPanel &&
                productDetailsPanel
                    .classList
                    .contains(
                        "open"
                    )
            ) {

                closeProductDetails();

                return;

            }


            /*
                4. Artwork
            */

            closeGallery();

            return;

        }



        /* =================================================
           PROPORTIONS GUIDE KEYBOARD NAVIGATION
        ================================================= */

        if (
            proportionsGuidePanel &&
            proportionsGuidePanel
                .classList
                .contains(
                    "open"
                )
        ) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                showNextProportion();

            }


            else if (
                event.key ===
                "ArrowLeft"
            ) {

                showPreviousProportion();

            }


            return;

        }



        /* =================================================
           DO NOT CHANGE GALLERY BEHIND OTHER PANELS
        ================================================= */

        if (
            (
                sizeGuidePanel &&
                sizeGuidePanel
                    .classList
                    .contains(
                        "open"
                    )
            )
            ||
            (
                productDetailsPanel &&
                productDetailsPanel
                    .classList
                    .contains(
                        "open"
                    )
            )
        ) {

            return;

        }



        /* =================================================
           NORMAL GALLERY KEYBOARD NAVIGATION
        ================================================= */

        if (
            event.key ===
            "ArrowRight"
        ) {

            nextSlide();

        }


        else if (
            event.key ===
            "ArrowLeft"
        ) {

            previousSlide();

        }

    }
);



/* =========================================================
   24. MOBILE GALLERY SWIPE
========================================================= */


/* =========================================================
   SWIPE START
========================================================= */

if (
    lightboxImage
) {

    lightboxImage.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event
                    .changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );

}



/* =========================================================
   SWIPE END
========================================================= */

if (
    lightboxImage
) {

    lightboxImage.addEventListener(
        "touchend",
        event => {

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

}



/* =========================================================
   SWIPE DIRECTION
========================================================= */

function handleSwipe() {

    const distance =
        touchStartX
        -
        touchEndX;


    if (
        Math.abs(
            distance
        )
        <
        50
    ) {
        return;
    }


    if (
        distance > 0
    ) {

        nextSlide();

    }

    else {

        previousSlide();

    }

}



/* =========================================================
   25. RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            !lightbox ||
            !lightbox.classList.contains(
                "open"
            )
        ) {
            return;
        }


        const slide =
            activeGallery[
                activeIndex
            ];


        if (
            !slide
        ) {
            return;
        }


        positionProtectionOverlay(
            slide
        );

    }
);


window.addEventListener(
    "resize",
    () => {

        if (
            productDetailsPanel &&
            productDetailsPanel
                .classList
                .contains(
                    "open"
                )
        ) {

            syncProductDetailsToProductColumn();

        }

    }
);


/* =========================================================
   26. INITIALIZE
========================================================= */

buildCollectionNavigator();