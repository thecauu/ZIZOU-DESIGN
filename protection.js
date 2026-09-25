/* =========================================================
   ZIZOU DESIGN — GLOBAL WEBSITE PROTECTION

   Controls:
   01. Viewport zoom restrictions
   02. Global touch behavior
   03. Long-press protection
   04. Image dragging protection
   05. Right-click protection
   06. Mobile pinch-zoom protection
   07. Safari gesture protection
   08. Desktop trackpad zoom protection
   09. Keyboard zoom protection
   10. Print / Save-as-PDF protection
========================================================= */


(function () {

    "use strict";


    /* =====================================================
       01. VIEWPORT ZOOM RESTRICTIONS
    ===================================================== */

    let viewport =
        document.querySelector(
            'meta[name="viewport"]'
        );


    if (!viewport) {

        viewport =
            document.createElement(
                "meta"
            );

        viewport.setAttribute(
            "name",
            "viewport"
        );

        document.head.appendChild(
            viewport
        );

    }


    viewport.setAttribute(
        "content",
        [
            "width=device-width",
            "initial-scale=1.0",
            "maximum-scale=1.0",
            "user-scalable=no"
        ].join(", ")
    );


    /* =====================================================
       02. GLOBAL PROTECTION CSS

       This is deliberately generated here so the protection
       rules stay inside protection.js instead of style.css.
    ===================================================== */

    const protectionStyle =
        document.createElement(
            "style"
        );


    protectionStyle.id =
        "zizou-protection-styles";


    protectionStyle.textContent = `

        /*
           Allow normal page panning while excluding
           browser pinch-zoom from the permitted
           touch-action list.
        */

        html,
        body,
        body * {
            touch-action:
                pan-x
                pan-y;
        }


        /*
           Protect normal IMG elements and the
           background-based artwork used throughout
           ZIZOU DESIGN.
        */

        img,
        .protected-home-image,
        .protected-collection-image,
        .protected-lightbox-image,
        .summertide-intro-image,
        .sea-intro-image,
        .summertide-background,
        .sea-of-sees-background,
        [data-image] {

            -webkit-touch-callout:
                none !important;

            -webkit-user-select:
                none !important;

            user-select:
                none !important;

            -webkit-user-drag:
                none !important;

        }


        /*
           Remove visual artwork when the page is
           printed or saved as a PDF.
        */

        @media print {

            img {
                visibility:
                    hidden !important;
            }

            .protected-home-image,
            .protected-collection-image,
            .protected-lightbox-image,
            .summertide-intro-image,
            .sea-intro-image,
            .summertide-background,
            .sea-of-sees-background,
            [data-image] {

                background-image:
                    none !important;

                background:
                    #111111 !important;

            }

        }

    `;


    document.head.appendChild(
        protectionStyle
    );


    /* =====================================================
       03. PROTECTED VISUAL SELECTOR
    ===================================================== */

    const protectedVisuals = [

        "img",

        ".protected-home-image",

        ".protected-collection-image",

        ".protected-lightbox-image",

        ".summertide-intro-image",

        ".sea-intro-image",

        ".summertide-background",

        ".sea-of-sees-background",

        "[data-image]"

    ].join(", ");


    function isProtectedVisual(
        target
    ) {

        return (
            target instanceof Element &&
            target.closest(
                protectedVisuals
            )
        );

    }


    /* =====================================================
       04. DISABLE NORMAL IMAGE DRAGGING
    ===================================================== */

    function disableImageDragging() {

        document
            .querySelectorAll("img")
            .forEach(
                function (image) {

                    image.draggable =
                        false;

                }
            );

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            disableImageDragging
        );

    } else {

        disableImageDragging();

    }


    /* =====================================================
       05. BLOCK RIGHT-CLICK ON VISUALS
    ===================================================== */

    document.addEventListener(
        "contextmenu",
        function (event) {

            if (
                isProtectedVisual(
                    event.target
                )
            ) {

                event.preventDefault();

            }

        },
        {
            capture: true
        }
    );


    /* =====================================================
       06. BLOCK DRAGGING OF VISUALS
    ===================================================== */

    document.addEventListener(
        "dragstart",
        function (event) {

            if (
                isProtectedVisual(
                    event.target
                )
            ) {

                event.preventDefault();

            }

        },
        {
            capture: true
        }
    );


    /* =====================================================
       07. BLOCK MOBILE / TABLET PINCH ZOOM
    ===================================================== */

    function blockMultiTouch(
        event
    ) {

        if (
            event.touches &&
            event.touches.length > 1
        ) {

            if (event.cancelable) {

                event.preventDefault();

            }

        }

    }


    document.addEventListener(
        "touchstart",
        blockMultiTouch,
        {
            passive: false,
            capture: true
        }
    );


    document.addEventListener(
        "touchmove",
        blockMultiTouch,
        {
            passive: false,
            capture: true
        }
    );


    /* =====================================================
       08. SAFARI GESTURE PROTECTION
    ===================================================== */

    function blockSafariGesture(
        event
    ) {

        if (event.cancelable) {

            event.preventDefault();

        }

    }


    document.addEventListener(
        "gesturestart",
        blockSafariGesture,
        {
            passive: false,
            capture: true
        }
    );


    document.addEventListener(
        "gesturechange",
        blockSafariGesture,
        {
            passive: false,
            capture: true
        }
    );


    document.addEventListener(
        "gestureend",
        blockSafariGesture,
        {
            passive: false,
            capture: true
        }
    );


    /* =====================================================
       09. BLOCK DESKTOP TRACKPAD PINCH ZOOM
    ===================================================== */

    document.addEventListener(
        "wheel",
        function (event) {

            if (
                event.ctrlKey &&
                event.cancelable
            ) {

                event.preventDefault();

            }

        },
        {
            passive: false,
            capture: true
        }
    );


    /* =====================================================
       10. BLOCK COMMON KEYBOARD ZOOM SHORTCUTS
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            const modifier =
                event.ctrlKey ||
                event.metaKey;


            if (!modifier) {
                return;
            }


            const zoomKeys = [
                "+",
                "=",
                "-",
                "0"
            ];


            if (
                zoomKeys.includes(
                    event.key
                )
            ) {

                event.preventDefault();

            }

        },
        {
            capture: true
        }
    );


})();