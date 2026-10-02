/* =========================================
   ZIZOU DESIGN — SITE SEARCH
========================================= */


/* =========================================
   01. SEARCH INDEX
========================================= */

const zizouSearchIndex = [

    /* -----------------------------------------
       COLLECTIONS
    ----------------------------------------- */

    {
        title: "Summertide",
        type: "Collection",
        url: "summertide.html",
        keywords: [
            "summertide",
            "collection",
            "collection 01",
            "photography",
            "digital art"
        ]
    },

    {
        title: "Sea of Sees",
        type: "Collection",
        url: "sea-of-sees.html",
        keywords: [
            "sea of sees",
            "collection",
            "photography",
            "digital art"
        ]
    },


    /* -----------------------------------------
       SUMMERTIDE ARTWORK
    ----------------------------------------- */

    {
        title: "Amber Breeze",
        type: "Artwork",
        url: "summertide.html?artwork=amber",
        keywords: [
            "amber breeze",
            "amber",
            "orange",
            "summer",
            "floral",
            "breeze",
            "photography",
            "digital art",
            "summertide"
        ]
    },

    {
        title: "Peridot Afloat",
        type: "Artwork",
        url: "summertide.html?artwork=peridot",
        keywords: [
            "peridot afloat",
            "peridot",
            "green",
            "water",
            "ripples",
            "solitude",
            "photography",
            "digital art",
            "summertide"
        ]
    },

    {
        title: "Pátina del Mar",
        type: "Artwork",
        url: "summertide.html?artwork=patina",
        keywords: [
            "patina del mar",
            "pátina del mar",
            "patina",
            "sea",
            "ocean",
            "blue",
            "turquoise",
            "photography",
            "summertide"
        ]
    },

    {
        title: "Sage Quietude",
        type: "Artwork",
        url: "summertide.html?artwork=sage",
        keywords: [
            "sage quietude",
            "sage",
            "green",
            "rest",
            "restfulness",
            "quiet",
            "photography",
            "summertide"
        ]
    },

    {
        title: "Éter do Luar",
        type: "Artwork",
        url: "summertide.html?artwork=eter",
        keywords: [
            "eter do luar",
            "éter do luar",
            "eter",
            "moon",
            "luar",
            "night",
            "blue",
            "photography",
            "summertide"
        ]
    },

    {
        title: "Oneiric Glow",
        type: "Artwork",
        url: "summertide.html?artwork=oneiric",
        keywords: [
            "oneiric glow",
            "oneiric",
            "night",
            "lake",
            "reflection",
            "blue",
            "rediscovery",
            "photography",
            "summertide"
        ]
    },


    /* -----------------------------------------
       INFORMATION
    ----------------------------------------- */

    {
        title: "About ZIZOU DESIGN",
        type: "Information",
        url: "about.html",
        keywords: [
            "about",
            "artist",
            "zizou",
            "zizou design",
            "story",
            "founder"
        ]
    },

    {
        title: "Contact",
        type: "Support",
        url: "contact.html",
        keywords: [
            "contact",
            "support",
            "help",
            "customer service",
            "live chat"
        ]
    },

    {
        title: "Digital License",
        type: "Legal",
        url: "license.html",
        keywords: [
            "license",
            "digital license",
            "copyright",
            "usage",
            "personal use",
            "printing"
        ]
    },

    {
        title: "Refund Policy",
        type: "Legal",
        url: "refund.html",
        keywords: [
            "refund",
            "refund policy",
            "return",
            "purchase",
            "digital purchase"
        ]
    },

    {
        title: "Privacy Policy",
        type: "Legal",
        url: "privacy.html",
        keywords: [
            "privacy",
            "privacy policy",
            "data",
            "information"
        ]
    },

    {
        title: "Terms & Conditions",
        type: "Legal",
        url: "terms.html",
        keywords: [
            "terms",
            "conditions",
            "terms and conditions",
            "legal"
        ]
    },

    {
        title: "Digital File & Printing",
        type: "Guide",
        url: "summertide.html",
        keywords: [
            "printing",
            "print",
            "pdf",
            "2:3",
            "2 3 ratio",
            "aspect ratio",
            "paper",
            "photo paper",
            "fine art",
            "baryta",
            "digital download",
            "print size"
        ]
    }

];


/* =========================================
   02. SEARCH HELPERS
========================================= */

function normalizeSearchText(text) {

    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


function searchZizouSite(query) {

    const normalizedQuery =
        normalizeSearchText(query);


    if (!normalizedQuery) {
        return [];
    }


    const queryWords =
        normalizedQuery
            .split(/\s+/)
            .filter(Boolean);


    return zizouSearchIndex

        .map((item) => {

            const normalizedTitle =
                normalizeSearchText(
                    item.title
                );


            const normalizedKeywords =
                item.keywords
                    .map(normalizeSearchText)
                    .join(" ");


            const searchableText =
                `${normalizedTitle} ${normalizedKeywords}`;


            let score = 0;


            if (
                normalizedTitle ===
                normalizedQuery
            ) {
                score += 100;
            }


            if (
                normalizedTitle.startsWith(
                    normalizedQuery
                )
            ) {
                score += 50;
            }


            if (
                normalizedTitle.includes(
                    normalizedQuery
                )
            ) {
                score += 30;
            }


            if (
                normalizedKeywords.includes(
                    normalizedQuery
                )
            ) {
                score += 15;
            }


            const allWordsMatch =
                queryWords.every(
                    word =>
                        searchableText.includes(
                            word
                        )
                );


            if (allWordsMatch) {
                score += 20;
            }


            return {
                ...item,
                score
            };

        })

        .filter(
            item =>
                item.score > 0
        )

        .sort(
            (a, b) =>
                b.score - a.score
        );

}


/* =========================================
   03. SEARCH INTERFACE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* -----------------------------------------
           ELEMENTS
        ----------------------------------------- */

        const searchButtons =
            document.querySelectorAll(
                ".search-button"
            );


        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (
            searchButtons.length === 0
        ) {
            return;
        }


        /* -----------------------------------------
           CREATE SEARCH PANEL
        ----------------------------------------- */

        const searchOverlay =
            document.createElement(
                "div"
            );


        searchOverlay.className =
            "search-overlay";


        searchOverlay.setAttribute(
            "aria-hidden",
            "true"
        );


        searchOverlay.innerHTML = `

            <div class="search-panel">

                <div class="search-input-row">

                    <svg
                        class="search-input-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >

                        <circle
                            cx="11"
                            cy="11"
                            r="7"
                        ></circle>

                        <line
                            x1="16"
                            y1="16"
                            x2="21"
                            y2="21"
                        ></line>

                    </svg>


                    <input
                        type="search"
                        id="siteSearchInput"
                        class="site-search-input"
                        aria-label="Search ZIZOU DESIGN"
                        autocomplete="off"
                        spellcheck="false"
                    >

                </div>


                <div
                    id="siteSearchResults"
                    class="site-search-results"
                ></div>

            </div>

        `;


        document.body.appendChild(
            searchOverlay
        );


        const searchInput =
            searchOverlay.querySelector(
                "#siteSearchInput"
            );


        const searchResults =
            searchOverlay.querySelector(
                "#siteSearchResults"
            );


        /* -----------------------------------------
           STATE
        ----------------------------------------- */

        let activeSearchButton =
            null;


        let clearTimer =
            null;


        let focusTimer =
            null;


        let originalBodyOverflow =
            "";


        let originalNavbarZIndex =
            "";


        /* -----------------------------------------
           SAVE ORIGINAL SEARCH ICON
        ----------------------------------------- */

        searchButtons.forEach(
            button => {

                button.dataset.originalSearchLabel =
                    button.getAttribute(
                        "aria-label"
                    ) || "Search";

            }
        );


        /* =========================================
           04. OPEN SEARCH
        ========================================= */

        function openSearch(button) {


            if (
                searchOverlay.classList.contains(
                    "open"
                )
            ) {
                return;
            }


            if (clearTimer) {

                clearTimeout(
                    clearTimer
                );

                clearTimer =
                    null;

            }


            if (focusTimer) {

                clearTimeout(
                    focusTimer
                );

                focusTimer =
                    null;

            }


            activeSearchButton =
                button;


            /* -----------------------------------------
               KEEP REAL NAVBAR ABOVE SEARCH PANEL
            ----------------------------------------- */

            if (navbar) {

                originalNavbarZIndex =
                    navbar.style.zIndex;


                navbar.style.zIndex =
                    "13001";

            }


            /* -----------------------------------------
               SEARCH ICON → X
            ----------------------------------------- */




            button.setAttribute(
                "aria-label",
                "Close search"
            );


            button.setAttribute(
                "aria-expanded",
                "true"
            );


            button.classList.add(
                "search-button-active"
            );


            /*
               Ensures the X remains visible
               over the white search screen.
            */

            button.style.position =
                "relative";


            button.style.zIndex =
                "13002";


            button.style.color =
                "#111111";


            /* -----------------------------------------
               OPEN PANEL
            ----------------------------------------- */

            searchOverlay.classList.add(
                "open"
            );


            searchOverlay.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "search-open"
            );


            originalBodyOverflow =
                document.body.style.overflow;


            document.body.style.overflow =
                "hidden";


            /* -----------------------------------------
               FOCUS SEARCH FIELD
            ----------------------------------------- */

            focusTimer =
                setTimeout(
                    () => {

                        if (
                            searchOverlay.classList.contains(
                                "open"
                            )
                        ) {

                            searchInput.focus();

                        }

                    },
                    320
                );

        }


        /* =========================================
           05. CLOSE SEARCH
        ========================================= */

        function closeSearch() {


            if (
                !searchOverlay.classList.contains(
                    "open"
                )
            ) {
                return;
            }


            if (focusTimer) {

                clearTimeout(
                    focusTimer
                );

                focusTimer =
                    null;

            }


            searchInput.blur();


            /* -----------------------------------------
               CLOSE PANEL
            ----------------------------------------- */

            searchOverlay.classList.remove(
                "open"
            );


            searchOverlay.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.classList.remove(
                "search-open"
            );


            document.body.style.overflow =
                originalBodyOverflow;


            /* -----------------------------------------
               X → ORIGINAL SEARCH ICON
            ----------------------------------------- */

            if (activeSearchButton) {
                

                activeSearchButton.setAttribute(
                    "aria-label",
                    activeSearchButton.dataset
                        .originalSearchLabel
                );


                activeSearchButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                activeSearchButton.classList.remove(
                    "search-button-active"
                );


                activeSearchButton.style.position =
                    "";


                activeSearchButton.style.zIndex =
                    "";


                activeSearchButton.style.color =
                    "";

            }


            activeSearchButton =
                null;


            /* -----------------------------------------
               RESTORE NAVBAR STACKING
            ----------------------------------------- */

            if (navbar) {

                navbar.style.zIndex =
                    originalNavbarZIndex;

            }


            /* -----------------------------------------
               CLEAR AFTER CLOSING ANIMATION
            ----------------------------------------- */

            clearTimer =
                setTimeout(
                    () => {

                        if (
                            !searchOverlay.classList.contains(
                                "open"
                            )
                        ) {

                            searchInput.value =
                                "";

                            searchResults.innerHTML =
                                "";

                        }

                    },
                    450
                );

        }


        /* =========================================
           06. SEARCH BUTTON BEHAVIOR
        ========================================= */

        searchButtons.forEach(
            button => {

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );


                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        event.stopPropagation();


                        /*
                           SAME BUTTON CONTROLS
                           OPEN + CLOSE.

                           🔍 → × → 🔍
                        */

                        if (
                            searchOverlay.classList.contains(
                                "open"
                            )
                        ) {

                            closeSearch();

                        }

                        else {

                            openSearch(
                                button
                            );

                        }

                    }
                );

            }
        );


        /* =========================================
           07. ESCAPE KEY
        ========================================= */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                    &&
                    searchOverlay.classList.contains(
                        "open"
                    )
                ) {

                    closeSearch();

                }

            }
        );


        /* =========================================
           08. LIVE SEARCH
        ========================================= */

        searchInput.addEventListener(
            "input",
            () => {


                const query =
                    searchInput.value;


                searchResults.innerHTML =
                    "";


                if (
                    query.trim() === ""
                ) {
                    return;
                }


                const results =
                    searchZizouSite(
                        query
                    );


                if (
                    results.length === 0
                ) {

                    searchResults.innerHTML = `

                        <p class="search-no-results">
                            No results found.
                        </p>

                    `;

                    return;

                }


                results.forEach(
                    result => {


                        const link =
                            document.createElement(
                                "a"
                            );


                        link.className =
                            "search-result";


                        link.href =
                            result.url;


                        const resultType =
                            document.createElement(
                                "span"
                            );


                        resultType.className =
                            "search-result-type";


                        resultType.textContent =
                            result.type;


                        const resultTitle =
                            document.createElement(
                                "span"
                            );


                        resultTitle.className =
                            "search-result-title";


                        resultTitle.textContent =
                            result.title;


                        link.appendChild(
                            resultType
                        );


                        link.appendChild(
                            resultTitle
                        );


                        searchResults.appendChild(
                            link
                        );

                    }
                );

            }
        );


    }
);