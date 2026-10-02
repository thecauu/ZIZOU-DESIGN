/* =========================================
   ZIZOU DESIGN — SITE SEARCH
========================================= */


/* -----------------------------------------
   SEARCH INDEX
----------------------------------------- */

const zizouSearchIndex = [

    /* COLLECTIONS */

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


    /* SUMMERTIDE ARTWORK */

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


    /* INFORMATION */

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


/* -----------------------------------------
   NORMALIZE SEARCH TEXT
----------------------------------------- */

function normalizeSearchText(text) {

    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


/* -----------------------------------------
   SEARCH
----------------------------------------- */

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

            const title =
                normalizeSearchText(
                    item.title
                );


            const keywords =
                item.keywords
                    .map(normalizeSearchText)
                    .join(" ");


            const searchableText =
                `${title} ${keywords}`;


            let score = 0;


            if (
                title === normalizedQuery
            ) {
                score += 100;
            }


            if (
                title.startsWith(
                    normalizedQuery
                )
            ) {
                score += 50;
            }


            if (
                title.includes(
                    normalizedQuery
                )
            ) {
                score += 30;
            }


            if (
                keywords.includes(
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
   SEARCH INTERFACE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const searchButtons =
            document.querySelectorAll(
                ".search-button"
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


        /*
           No duplicate ZIZOU header.
           No separate close button.

           The existing search icon in the navbar
           becomes the X.
        */

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


        let activeSearchButton =
            null;


        let clearSearchTimer =
            null;


        /* -----------------------------------------
           SAVE ORIGINAL SEARCH ICON
        ----------------------------------------- */

        searchButtons.forEach(
            button => {

                button.dataset.originalSearchHtml =
                    button.innerHTML;


                button.dataset.originalSearchLabel =
                    button.getAttribute(
                        "aria-label"
                    ) || "Search";

            }
        );


        /* -----------------------------------------
           OPEN SEARCH
        ----------------------------------------- */

        function openSearch(button) {


            if (clearSearchTimer) {

                clearTimeout(
                    clearSearchTimer
                );

                clearSearchTimer =
                    null;

            }


            activeSearchButton =
                button;


            /*
               Search icon becomes X.
            */

            button.innerHTML =
                "×";


            button.setAttribute(
                "aria-label",
                "Close search"
            );


            button.classList.add(
                "search-button-active"
            );


            /*
               Open from the RIGHT.
               CSS controls the actual movement.
            */

            searchOverlay.classList.add(
                "open"
            );


            document.body.classList.add(
                "search-open"
            );


            document.body.style.overflow =
                "hidden";


            /*
               Wait slightly so the keyboard does
               not interrupt the opening animation.
            */

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


        /* -----------------------------------------
           CLOSE SEARCH
        ----------------------------------------- */

        function closeSearch() {


            searchOverlay.classList.remove(
                "open"
            );


            document.body.classList.remove(
                "search-open"
            );


            document.body.style.overflow =
                "";


            searchInput.blur();


            /*
               Restore original search icon.
            */

            if (activeSearchButton) {

                activeSearchButton.innerHTML =
                    activeSearchButton.dataset
                        .originalSearchHtml;


                activeSearchButton.setAttribute(
                    "aria-label",
                    activeSearchButton.dataset
                        .originalSearchLabel
                );


                activeSearchButton.classList.remove(
                    "search-button-active"
                );

            }


            activeSearchButton =
                null;


            /*
               Wait until closing animation finishes
               before clearing the contents.
            */

            clearSearchTimer =
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


        /* -----------------------------------------
           SEARCH BUTTON
        ----------------------------------------- */

        searchButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();


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


        /* -----------------------------------------
           ESCAPE KEY
        ----------------------------------------- */

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


        /* -----------------------------------------
           LIVE SEARCH
        ----------------------------------------- */

        searchInput.addEventListener(
            "input",
            () => {


                const query =
                    searchInput.value;


                const results =
                    searchZizouSite(
                        query
                    );


                searchResults.innerHTML =
                    "";


                if (
                    query.trim() === ""
                ) {

                    return;

                }


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


                        link.innerHTML = `

                            <span class="search-result-type">
                                ${result.type}
                            </span>

                            <span class="search-result-title">
                                ${result.title}
                            </span>

                        `;


                        searchResults.appendChild(
                            link
                        );

                    }
                );

            }
        );


    }
);