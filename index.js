// Master JS file for decorative elements
// Created by Prezzy Ch.
let loadingIsActivated = false;
//constants 
let siteButtons = [
    {id: "navbaraboutme", link: "aboutme.html"}, {id: "navbarhome", link: "index.html"}, {id: "navbargallery", link: "gallery.html"}, 
    {id: "footerhome", link: "index.html"}, {id: "footeraboutme", link: "aboutme.html"}, {id: "footergallery", link: "gallery.html"},
    {id: "introductionbutton", link: "aboutme.html"}, {id: "gallerybutton", link: "gallery.html"}
]
const OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((i) => {
        if (i.isIntersecting) {
            if (!i.target.id.includes("-animated")) {
                i.target.id = i.target.id + "-animated";
            }
        }
    });
});



window.onload = function() {
    loadingScreenAnimation();
    activateButtons();
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
    // ------------IDs-----------
    let title = ["titleh1-index", "titlesubheadings-container", "socials"];
    let introduction = ["introductionh2", "headerdividerintroduction", "introductionparagraph", 
        "introductionparagraph2", "dividerintroduction", "introductionbutton"]
    let gallery = ["galleryh2", "headerdividergallery", "galleryparagraph", "gallerybutton"];
    let commissions = ["commissionsh2", "headerdividercommissions", "commissionsparagraph", 
        "dividercommissions", "commissionbutton"];
    let all = title.concat(introduction, gallery, commissions);
    all.forEach((i) => {
        let elementid = document.getElementById(i);
        OBSERVER.observe(elementid);
    });
}

// Checks if the screen for about me is in bound with the elements before changing their IDs to 
// -animated to activate their animations.
function animateAboutMe() {
    //------------IDs---------------
    let title = ["titleh1", "dividertitle"];
    let aboutme = ["aboutmeh2", "headerdivideraboutme", "aboutmeh3", "aboutmepronouns", 
        "aboutmeparagraph", "aboutmeparagraph2", "divideraboutme", "divideraboutme2", "aboutmeimage"];
    let funfact = ["funfacth2", "headerdividerfunfact"];
    let all = getAllIDs([document.querySelectorAll(".subsectionheader-left"), document.querySelectorAll(".subsectionarticle-left"), document.querySelectorAll(".subsectionimage-left"),
                        document.querySelectorAll(".subsectionheader-right"), document.querySelectorAll(".subsectionarticle-right"), document.querySelectorAll(".subsectionimage-right")]);
    all = all.concat(title, aboutme, funfact);
    all.forEach((i) => {
        let elementid = document.getElementById(i);
        OBSERVER.observe(elementid);
    });
}

// Checks if the screen for gallery is in bound with the elements before changing their IDs to 
// -animated to activate their animations.
function animateGallery() {
    //------------IDs---------------
    let title = ["titleh1", "dividertitle"]; 
    let gallery = ["galleryh2", "headerdividergallery"];
    let all = title.concat(gallery);
    all.forEach((i) => {
        let elementid = document.getElementById(i);
        OBSERVER.observe(elementid);
    });
}

function activateButtons() {
    siteButtons.forEach((i) => {
        let element = document.getElementById(i.id);
        if (element != null) {
            element.onclick = function(event) {
                linkDelay(i.link, event);
            }
        }
    })
}

function getAllIDs (elements) {
    let result = [];
    elements.forEach((i) => {
        i.forEach((j) => {
            result.push(j.id);
        }); 
    }); 
    return result;
}

