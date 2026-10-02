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

    return text
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


            let score = 0;


            if (title === normalizedQuery) {
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