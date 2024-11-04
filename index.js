// Animations is activated
let loadingIsActivated = false;
let titleIsActivated = false;
let introductionIsActivated = false;
let galleryIsActivated = false;
let commissionsIsActivated = false;

let aboutmeIsActivated = false;
//constants 

// On starts
window.onresize = function() {
    // possible realign of elements with this.
}

window.onload = function() {
    animateElements();
    loadingScreenAnimation();

    let navbaraboutme = document.getElementById("navbaraboutme");
    let navbarhome = document.getElementById("navbarhome");
    let footerhome = document.getElementById("footerhome");
    let footeraboutme = document.getElementById("footeraboutme");

    //General buttons for nav bar and footer
    navbaraboutme.onclick = function(event) {
        linkDelay("aboutme.html", event);
    }
    navbarhome.onclick = function(event) {
        linkDelay("index.html", event);
    }
    footerhome.onclick = function(event) {
        linkDelay("index.html", event);
    }
    footeraboutme.onclick = function(event) {
        linkDelay("aboutme.html", event);
    }

    let currentHTML = window.location.href;
    if (currentHTML.includes("index.html")) {
        let introductionbutton = document.getElementById("introductionbutton-animated");
        if(introductionbutton != null) {
            introductionbutton.onclick = function(event) {
                linkDelay("aboutme.html", event);
            }
        }
    }
    if (currentHTML.includes("aboutme.html")) {

    } 

}

window.onscroll = function() {
    animateElements();
}

// Functions

//Link transitions

function linkDelay(link, event) {
    event.preventDefault();
    loadingScreenAnimation();
    setTimeout(() => {
        window.location = link;
    }, 1000);
}

//These functions handles the loading animation for all HTML files globally
function loadingScreenAnimation() {
    if (!loadingIsActivated) {
        let loadingscreen = document.getElementById("loading");
        loadingscreen.id = "loadingscreen-animated";
        loadingIsActivated = true;
    } else {
        let loadingscreen = document.getElementById("loadingscreen-animated");
        loadingscreen.id = "loadingscreen-animated-reverse";
    }
}

// These functions handles custom animation for each part, taking the load location in order to 
// initiate the animation.
function animateElements() {
    let currentHTML = window.location.href;
    if (currentHTML.includes("index.html")) {
        animateIndex();
    }
    if (currentHTML.includes("aboutme.html")) {
        animateAboutMe();
    } 
}

function animateIndex() {
    //|-----------------------containers -----------------------|
    let titleContainer = document.getElementById("titlecontainer-index");
    let introductionContainer = document.getElementById("introduction-container");
    let galleryContainer = document.getElementById("gallerycontainer");
    let commissionsContainer = document.getElementById("commissions-container");
    // ------------IDs-----------
    //title
    let titleh1 = document.getElementById("titleh1-index");
    let titlesubheadingscontainer = document.getElementById("titlesubheadings-container");
    let socials = document.getElementById("socials");
    //introductions 
    let introductionh2 = document.getElementById("introductionh2");
    let headerdividerintroduction = document.getElementById("headerdividerintroduction");
    let introductionparagraph = document.getElementById("introductionparagraph");
    let introductionparagraph2 = document.getElementById("introductionparagraph2");
    let dividerintroduction = document.getElementById("dividerintroduction");
    let introductionbutton = document.getElementById("introductionbutton");
    //gallery
    let galleryh2 = document.getElementById("galleryh2");
    let headerdividergallery = document.getElementById("headerdividergallery");
    let galleryparagraph = document.getElementById("galleryparagraph");
    let gallerybutton = document.getElementById("gallerybutton");
    //commissions
    let commissionsh2 = document.getElementById("commissionsh2");
    let headerdividercommissions = document.getElementById("headerdividercommissions");
    let commissionsparagraph = document.getElementById("commissionsparagraph");
    let dividercommissions = document.getElementById("dividercommissions");
    let commissionbutton = document.getElementById("commissionbutton");
    //|----------------------- Values -----------------------|
    let topBounds = 0;
    let bottomBounds = document.documentElement.clientHeight;
    let titleContainerPos = titleContainer.getBoundingClientRect().y + (titleContainer.getBoundingClientRect().height / 3);
    let introductionContainerPos = introductionContainer.getBoundingClientRect().y + (introductionContainer.getBoundingClientRect().height / 3);
    let galleryContainerPos = galleryContainer.getBoundingClientRect().y + (galleryContainer.getBoundingClientRect().height / 3);
    let commissionsContainerPos = commissionsContainer.getBoundingClientRect().y + (commissionsContainer.getBoundingClientRect().height / 3);

    // This section allows the animation to be swapped once in bound. Then will activate a revert to keep elements visible
    if ((titleContainerPos >= topBounds) && (titleContainerPos <= bottomBounds) && !titleIsActivated) {
        titleh1.id = "titleh1-animated-index";
        titlesubheadingscontainer.id = "titlesubheadings-container-animated";
        socials.id = "socials-animated";

        titleIsActivated = true;
    }
    if ((introductionContainerPos >= topBounds) && (introductionContainerPos <= bottomBounds) && !introductionIsActivated) {
        introductionh2.id = "introductionh2-animated";
        headerdividerintroduction.id = "headerdividerintroduction-animated";
        introductionparagraph.id = "introductionparagraph-animated";
        introductionparagraph2.id = "introductionparagraph-animated";
        dividerintroduction.id = "dividerintroduction-animated";
        introductionbutton.id = "introductionbutton-animated";

        introductionIsActivated = true;
    }
    if ((galleryContainerPos >= topBounds) && (galleryContainerPos <= bottomBounds) && !galleryIsActivated) {
        galleryh2.id = "galleryh2-animated";
        headerdividergallery.id = "headerdividergallery-animated";
        galleryparagraph.id = "galleryparagraph-animated";
        gallerybutton.id = "gallerybutton-animated";

        galleryIsActivated = true;
    }
    if ((commissionsContainerPos >= topBounds) && (commissionsContainerPos <= bottomBounds) && !commissionsIsActivated) {
        commissionsh2.id = "commissionsh2-animated";
        headerdividercommissions.id = "headerdividercommissions-animated";
        commissionsparagraph.id = "commissionsparagraph-animated";
        dividercommissions.id = "dividercommissions-animated";
        commissionbutton.id = "commissionbutton-animated";

        commissionsIsActivated = true;
    }  
}

function animateAboutMe() {
    //|-----------------------containers -----------------------|
    let titleContainer = document.getElementById("titlecontainer-centered");
    let aboutmeContainer = document.getElementById("aboutme-container");

    //------------IDs---------------
    //title
    let titleh1 = document.getElementById("titleh1");
    //aboutme
    let aboutmeh2 = document.getElementById("aboutmeh2");
    let headerdivideraboutme = document.getElementById("headerdivideraboutme");
    let aboutmeh3 = document.getElementById("aboutmeh3");
    let aboutmepronouns = document.getElementById("aboutmepronouns");
    let aboutmeparagraph = document.getElementById("aboutmeparagraph");
    let aboutmeparagraph2 = document.getElementById("aboutmeparagraph2");
    let divideraboutme = document.getElementById("divideraboutme");
    let divideraboutme2 = document.getElementById("divideraboutme2");
    //|----------------------- Values -----------------------|
    let topBounds = 0;
    let bottomBounds = document.documentElement.clientHeight;
    let titleContainerPos = titleContainer.getBoundingClientRect().y + (titleContainer.getBoundingClientRect().height / 3);
    let aboutmeContainerPos = aboutmeContainer.getBoundingClientRect().y + (aboutmeContainer.getBoundingClientRect().height / 3);
    if ((titleContainerPos >= topBounds) && (titleContainerPos <= bottomBounds) && !titleIsActivated) {
        titleh1.id = "titleh1-animated";
        titleIsActivated = true;
    }
    if ((aboutmeContainerPos >= topBounds) && (aboutmeContainerPos <= bottomBounds) && !aboutmeIsActivated) {
        aboutmeh2.id = "aboutmeh2-animated";
        headerdivideraboutme.id = "headerdivideraboutme-animated";
        aboutmeh3.id = "aboutmeh3-animated";
        aboutmepronouns.id = "aboutmepronouns-animated";
        aboutmeparagraph.id = "aboutmeparagraph-animated";
        aboutmeparagraph2.id = "aboutmeparagraph-animated";
        divideraboutme.id = "divideraboutme-animated";
        divideraboutme2.id = "divideraboutme-animated";
        aboutmeIsActivated = true;
    }

}