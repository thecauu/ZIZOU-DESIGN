/* ==========================================
   ZIZOU DESIGN — SUMMERTIDE ARTWORKS
========================================== */


/* ==========================================
   01. ARTWORK DATA
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
                    "polygon(34.8% 17.4%, 69.6% 17.4%, 69.6% 50.5%, 34.8% 50.5%)"
            },

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
                    "polygon(48.6% 17.5%, 78.4% 17.5%, 78.4% 45.6%, 48.6% 45.6%)"
            },

            {
                src: "images/peridot mock room 2.JPG",
                alt: "Peridot mock room 2",

                protectShape:
                    "polygon(51.5% 14.0%, 79.8% 14.0%, 79.8% 41.0%, 51.5% 41.0%)"
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
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"
            },

            {
                src: "images/patina mock room.jpg",
                alt: "Pátina mock room 1",

                protectShape:
                    "polygon(42.03% 19.86%, 73.77% 19.98%, 73.77% 50.00%, 41.89% 49.89%)"
            },

            {
                src: "images/patina mock room 2.JPG",
                alt: "Pátina mock room 2",

                protectShape:
                    "polygon(58.39% 24.04%, 81.24% 24.15%, 80.96% 45.26%, 58.25% 45.26%)"
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
                alt: "Sage portrait",

                protectShape:
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"
            },

            {
                src: "images/sage mock room 1.JPG",
                alt: "Sage mock room 1",

                protectShape:
                    "polygon(28.5% 16.6%, 65.0% 16.6%, 65.0% 51.1%, 28.5% 51.1%)"
            },

            {
                src: "images/sage mock room 2.JPG",
                alt: "Sage mock room 2",

                protectShape:
                    "polygon(29.6% 15.2%, 69.4% 15.2%, 69.4% 52.6%, 29.6% 52.6%)"
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
                alt: "Éter portrait",

                protectShape:
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"
            },

            {
                src: "images/eter mock room.jpg",
                alt: "Éter mock room 1",

                protectShape:
                    "polygon(34.7% 20.1%, 62.2% 20.1%, 62.2% 46.2%, 34.7% 46.2%)"
            },

            {
                src: "images/eter mock room 2.jpg",
                alt: "Éter mock room 2",

                protectShape:
                    "polygon(42.5% 36.4%, 67.8% 36.4%, 67.8% 60.1%, 42.5% 60.1%)"
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
                alt: "Oneiric portrait",

                protectShape:
                    "polygon(19.0% 19.2%, 81.0% 19.2%, 81.0% 76.4%, 19.0% 76.4%)"
            },

            {
                src: "images/oneiric mock room 1.JPG",
                alt: "Oneiric mock room 1",

                protectShape:
                    "polygon(24.65% 23.32%, 62.79% 23.32%, 62.79% 59.35%, 24.65% 59.35%)"
            },

            {
                src: "images/oneiric mock room 2.JPG",
                alt: "Oneiric mock room 2",

                protectShape:
                    "polygon(22.2% 29.5%, 43.6% 29.5%, 43.6% 49.7%, 22.2% 49.7%)"
            }
        ]
    }

};


/* ==========================================
   02. ELEMENTS
========================================== */

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


/* ------------------------------------------
   PRODUCT INFORMATION
------------------------------------------ */

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


const sizeGuideSelectedSize =
    document.getElementById(
        "sizeGuideSelectedSize"
    );


const sizeGuideOptions =
    document.querySelectorAll(
        ".size-guide-option"
    );

/* ==========================================
   03. LOAD PROTECTED COLLECTION IMAGES
========================================== */

document
    .querySelectorAll(
        ".protected-collection-image"
    )
    .forEach(
        image => {

            const source =
                image.dataset.image;


            if (!source) {
                return;
            }


            image.style.backgroundImage =
                `url("${source}")`;

        }
    );


/* ==========================================
   04. ACTIVE ARTWORK / GALLERY
========================================== */

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


/* ==========================================
   05. ADD TO BAG
========================================== */

if (artworkAddToBag) {

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

}


/* ==========================================
   06. UPDATE ARTWORK INFORMATION
========================================== */

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


/* ==========================================
   PRODUCT DETAILS — UPDATE DATA
========================================== */

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

/* ==========================================
   SIZE GUIDE — UPDATE ARTWORK
========================================== */

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
        sizeGuideWallArt
    ) {

        const sizeGuideImage =
            `images/${activeArtworkKey} size.jpg`;


        sizeGuideWallArt.style.backgroundImage =
            `url("${sizeGuideImage}")`;


        sizeGuideWallArt.setAttribute(
            "aria-label",
            `${activeArtwork.name} size preview`
        );

    }

}


/* ==========================================
   SIZE GUIDE — SELECT SIZE
========================================== */

function setSizeGuideSize(
    button
) {

    if (
        !button ||
        !sizeGuideWallArt
    ) {
        return;
    }


    const width =
        button.dataset.width;


    const label =
        button.dataset.label;


    if (
        !width
    ) {
        return;
    }


    sizeGuideWallArt.style.width =
        `${width}%`;


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


/* ==========================================
   SIZE GUIDE — OPEN
========================================== */

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
            '.size-guide-option[data-size="30x45"]'
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


/* ==========================================
   SIZE GUIDE — CLOSE
========================================== */

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


/* ==========================================
   SIZE GUIDE — EVENTS
========================================== */

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

/* ==========================================
   07. PROTECTION OVERLAY
========================================== */

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


/* ==========================================
   08. UPDATE CURRENT SLIDE
========================================== */

/* ==========================================
   GALLERY SWIPE INDICATOR
========================================== */

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

function updateSlide() {

    const slide =
        activeGallery[
            activeIndex
        ];


    if (!slide) {
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


/* ==========================================
   09. PRELOAD GALLERY
========================================== */

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

/* ==========================================
   09A. COLLECTION ARTWORK NAVIGATOR
========================================== */

const artworkOrder = [
    "amber",
    "peridot",
    "patina",
    "sage",
    "eter",
    "oneiric"
];


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


/* ==========================================
   09B. UPDATE COLLECTION NAVIGATOR
========================================== */

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


/* ==========================================
   09C. SWITCH ARTWORK FROM NAVIGATOR
========================================== */

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


/* ==========================================
   10. ACCORDION — CLOSE ALL
========================================== */

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


                if (content) {

                    content.style.maxHeight =
                        null;

                }


                if (symbol) {

                    symbol.textContent =
                        "+";

                }

            }
        );

}


/* ==========================================
   11. OPEN ARTWORK
========================================== */

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


/* ==========================================
   12. IMAGE SIZE CACHE
========================================== */

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


/* ==========================================
   13. POSITION PROTECTION OVERLAY
========================================== */

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
                ] !== slide
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


/* ==========================================
   14. REALISTIC ZOOM-OUT EFFECT
========================================== */

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


/* ==========================================
   15. CHANGE SLIDE
========================================== */

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


/* ==========================================
   16. NEXT SLIDE
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


/* ==========================================
   17. PREVIOUS SLIDE
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


/* ==========================================
   18. CLOSE ARTWORK VIEW
========================================== */

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


/* ==========================================
   19. CLICK ARTWORK
========================================== */

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


/* ==========================================
   20. GALLERY BUTTONS
========================================== */

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


/* ==========================================
   21. ACCORDION / DROP MENUS
========================================== */

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


/* ==========================================
   PRODUCT DETAILS — OPEN
========================================== */

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


    productDetailsPanel.scrollTop =
        0;


    productDetailsPanel.classList.add(
        "open"
    );


    productDetailsPanel.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* ==========================================
   PRODUCT DETAILS — CLOSE
========================================== */

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

}


/* ==========================================
   PRODUCT DETAILS — CHANGE TAB
========================================== */

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


/* ==========================================
   PRODUCT DETAILS — EVENTS
========================================== */

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

/* ==========================================
   22. KEYBOARD
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


if (
    event.key ===
    "Escape"
) {

    if (
        sizeGuidePanel &&
        sizeGuidePanel.classList.contains(
            "open"
        )
    ) {

        closeSizeGuide();

        return;

    }


    if (
        productDetailsPanel &&
        productDetailsPanel.classList.contains(
            "open"
        )
    ) {

        closeProductDetails();

        return;

    }


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
   23. MOBILE SWIPE — START
========================================== */

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


/* ==========================================
   24. MOBILE SWIPE — END
========================================== */

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


/* ==========================================
   25. MOBILE SWIPE — DIRECTION
========================================== */

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


/* ==========================================
   26. RESIZE
========================================== */

window.addEventListener(
    "resize",
    () => {

        if (
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

/* ==========================================
   27. BUILD COLLECTION NAVIGATOR
========================================== */

buildCollectionNavigator();
