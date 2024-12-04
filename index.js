// Master JS file for decorative elements
// Created by Prezzy Ch.

//Animation check variables for single use animations
let loadingIsActivated = false;
let titleIsActivated = false;

let introductionIsActivated = false;
let galleryIsActivated = false;
let commissionsIsActivated = false;

let aboutmeIsActivated = false;
let funfactIsActivated = false;
let funfactSubIsActivated = [false, false, false, false, false, false];
//constants 
const POSITIONADJUST = 4;


window.onload = function() {
    loadingScreenAnimation();

    let navbaraboutme = document.getElementById("navbaraboutme");
    let navbarhome = document.getElementById("navbarhome");
    let navbargallery = document.getElementById("navbargallery");
    let footerhome = document.getElementById("footerhome");
    let footeraboutme = document.getElementById("footeraboutme");
    let footergallery = document.getElementById("footergallery");

    //General buttons for nav bar and footer
    navbaraboutme.onclick = function(event) {
        linkDelay("aboutme.html", event);
    }
    navbarhome.onclick = function(event) {
        linkDelay("index.html", event);
    }
    navbargallery.onclick = function(event) {
        linkDelay("gallery.html", event);
    }
    footerhome.onclick = function(event) {
        linkDelay("index.html", event);
    }
    footeraboutme.onclick = function(event) {
        linkDelay("aboutme.html", event);
    }
    footergallery.onclick = function(event) {
        linkDelay("gallery.html", event);
    }


    let currentHTML = window.location.href;
    if (currentHTML.includes("index.html")) {
        let introductionbutton = document.getElementById("introductionbutton");
        let gallerybutton = document.getElementById("gallerybutton");
        if (introductionbutton != null) {
            introductionbutton.onclick = function(event) {
                linkDelay("aboutme.html", event);
            }
        }
        if (gallerybutton != null) {
            gallerybutton.onclick = function(event) {
                linkDelay("gallery.html", event);
            }
        }
    }
}

window.onscroll = function() {
    animateElements();
}

/*===============================================*/
/*-------------------FUNCTIONS-------------------*/
/*===============================================*/


// Takes in the link that is going to be set and activates the loading screen before the link is
// pressed
// Parameters:
//  link(String) - the website URL to redirect
//  event - the event to prevent
function linkDelay(link, event) {
    event.preventDefault();
    loadingScreenAnimation();
    setTimeout(() => {
        window.location = link;
    }, 1000);
}

// Handles the loading animation for all HTML files globally
function loadingScreenAnimation() {
    if (!loadingIsActivated) {
        let loadingscreen = document.getElementById("loading");
        loadingscreen.id = "loadingscreen-animated";
        loadingIsActivated = true;
        loadingscreen.onanimationstart = function() {
            animateElements();
        }
    } else {
        let loadingscreen = document.getElementById("loadingscreen-animated");
        loadingscreen.id = "loadingscreen-animated-reverse";
        loadingscreen.onanimationstart = function() {
            animateElements();
        }
    }
}

// Handles custom animation for each part, taking the load location in order to 
// initiate the animation.
function animateElements() {
    let currentHTML = window.location.href;
    if (currentHTML.includes("aboutme.html")) {
        animateAboutMe();
    } else if (currentHTML.includes("gallery.html")) {
        animateGallery();
    } else {
        animateIndex();
    }
}

// Checks if the screen for index is in bound with the elements before changing their IDs to 
// -animated to activate their animations.
function animateIndex() {
    //|-----------------------containers -----------------------|
    let titleContainer = document.getElementById("titlecontainer-index");
    let introductionContainer = document.getElementById("introduction-container");
    let galleryContainer = document.getElementById("gallerycontainer");
    let commissionsContainer = document.getElementById("commissions-container");
    // ------------IDs-----------
    let title = ["titleh1-index", "titlesubheadings-container", "socials"];
    let introduction = ["introductionh2", "headerdividerintroduction", "introductionparagraph", 
        "introductionparagraph2", "dividerintroduction", "introductionbutton"]
    let gallery = ["galleryh2", "headerdividergallery", "galleryparagraph", "gallerybutton"];
    let commissions = ["commissionsh2", "headerdividercommissions", "commissionsparagraph", 
        "dividercommissions", "commissionbutton"];
    //|----------------------- Values -----------------------|
    let topBounds = 0;
    let bottomBounds = document.documentElement.clientHeight;

    // This section allows the animation to be swapped once in bound. Then will activate a revert to keep elements visible
    if (boundingBoxCheck(topBounds, bottomBounds, titleContainer) && !titleIsActivated) {
        setAnimated(title);

        titleIsActivated = true;
    }
    if (boundingBoxCheck(topBounds, bottomBounds, introductionContainer) && !introductionIsActivated) {
        setAnimated(introduction);

        introductionIsActivated = true;
    }
    if (boundingBoxCheck(topBounds, bottomBounds, galleryContainer) && !galleryIsActivated) {
        setAnimated(gallery);

        galleryIsActivated = true;
    }
    if (boundingBoxCheck(topBounds, bottomBounds, commissionsContainer) && !commissionsIsActivated) {
        setAnimated(commissions);

        commissionsIsActivated = true;
    }  
}

// Checks if the screen for about me is in bound with the elements before changing their IDs to 
// -animated to activate their animations.
function animateAboutMe() {
    //|-----------------------containers -----------------------|
    let titleContainer = document.getElementById("titlecontainer-end");
    let aboutmeContainer = document.getElementById("aboutme-container");
    let funfactdivider = document.getElementById("funfactdivider");
    //------------IDs---------------
    let title = ["titleh1", "dividertitle"];
    let aboutme = ["aboutmeh2", "headerdivideraboutme", "aboutmeh3", "aboutmepronouns", 
        "aboutmeparagraph", "aboutmeparagraph2", "divideraboutme", "divideraboutme2"];
    let funfact = ["funfacth2", "headerdividerfunfact"];
    //|----------------------- Values -----------------------|
    let topBounds = 0;
    let bottomBounds = document.documentElement.clientHeight;
    if (boundingBoxCheck(topBounds, bottomBounds, titleContainer) && !titleIsActivated) {
        setAnimated(title);
        titleIsActivated = true;
    }
    if (boundingBoxCheck(topBounds, bottomBounds, aboutmeContainer) && !aboutmeIsActivated) {
        setAnimated(aboutme);
        aboutmeIsActivated = true;
    }
    if (boundingBoxCheck(topBounds, bottomBounds, funfactdivider) && !funfactIsActivated) {
        setAnimated(funfact);
        funfactIsActivated = true;
    }

    for (let i = 1; i <= 6; i++) {
        let container = document.getElementById("subcontainerfunfact-" + i);
        let header = document.getElementById("subsectionheader-" + i);
        let article = document.getElementById("subsectionarticle-" + i);
        let image = document.getElementById("subsectionimage-" + i);
        if (boundingBoxCheck(topBounds, bottomBounds, container) && !(funfactSubIsActivated[i - 1])) {
            header.id = "subsectionheader-" + i + "-animated";
            article.id = "subsectionarticle-" + i + "-animated";
            image.id = "subsectionimage-" + i + "-animated";
            funfactSubIsActivated[i - 1] = true;
        }
    }
}

// Checks if the screen for gallery is in bound with the elements before changing their IDs to 
// -animated to activate their animations.
function animateGallery() {
    //|-----------------------containers -----------------------|
    let titleContainer = document.getElementById("titlecontainer-end");
    let galleryHeader = document.getElementById("galleryheader");
    //------------IDs---------------
    let title = ["titleh1", "dividertitle"]; 
    let gallery = ["galleryh2", "headerdividergallery"];
    //|----------------------- Values -----------------------|
    let topBounds = 0;
    let bottomBounds = document.documentElement.clientHeight;
    if (boundingBoxCheck(topBounds, bottomBounds, titleContainer) && !titleIsActivated) {
        setAnimated(title);
        titleIsActivated = true;
    }
    if (boundingBoxCheck(topBounds, bottomBounds, galleryHeader) && !galleryIsActivated) {
        setAnimated(gallery);
        galleryIsActivated = true;
    }
}

// Sets each element in an array to -animated by getting their ids and setting them to animate.
// Parameters:
//  elements(String[]) - Array of elements to be animated
function setAnimated(elements) {
    for (let i = 0; i < elements.length; i++) {
        let elementid = document.getElementById(elements[i]);
        elementid.id = elements[i] + "-animated";
    }
}

// Takes in values of a top and bottom bound and checks if the container is in the bounding box 
// and return true if it is.
// Parameters:
//  topBounds(Number) - top of the viewport screen
//  bottomBounds(Number) - bottom of the viewport screen
//  container(element) - the element to compare
// Returns:
//  bool - true if the container is in the bounding box and false if else.
function boundingBoxCheck (topBounds, bottomBounds, container) {
    let elementPos = container.getBoundingClientRect().y + (container.getBoundingClientRect().height / POSITIONADJUST);
    return (elementPos >= topBounds) && (elementPos <= bottomBounds);
}


