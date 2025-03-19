// Master JS file for decorative elements
// Created by Prezzy Ch.
let loadingIsActivated = false;
//constants 
let siteButtons = [
    {id: "navbaraboutme", link: "aboutme.html"}, {id: "navbarhome", link: "index.html"}, {id: "navbargallery", link: "gallery.html"}, {id: "navbarcommissions", link: "commissions.html"},
    {id: "footerhome", link: "index.html"}, {id: "footeraboutme", link: "aboutme.html"}, {id: "footergallery", link: "gallery.html"},
    {id: "footercommissions", link: "commissions.html"} ,{id: "introductionbutton", link: "aboutme.html"}, {id: "gallerybutton", link: "gallery.html"}, {id: "commissionbutton", link: "commissions.html"}
]
const OBSERVERID = new IntersectionObserver((entries) => {
    entries.forEach((i) => {
        if (i.isIntersecting) {
            if (!i.target.id.includes("-animated")) {
                i.target.id = i.target.id + "-animated";
            }
        }
    });
});

const OBSERVERCLASS = new IntersectionObserver((entries) => {
    entries.forEach((i) => {
        if (i.isIntersecting) {
            if (!i.target.className.includes("-animated")) {
                i.target.className = i.target.className + "-animated";
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
        animateElements();
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
    } else if (currentHTML.includes("commissions.html")) {
        animateCommissions();
    } else {
        animateIndex();
    }
}

// Checks if the screen for index is in bound with the elements before changing their IDs to 
// -animated to activate their animations.
function animateIndex() {
    // ------------IDs-----------
    let title = ["titleh1-index", "titlesubheadings-container", "socials", "titleframe", "titleimage-index"];
    let introduction = ["introduction-container", "introductionh2", "headerdividerintroduction", "introductionparagraph", 
        "introductionparagraph2", "dividerintroduction", "introductionbutton"]
    let gallery = ["gallery-container", "galleryh2", "headerdividergallery", "galleryparagraph", "gallerybutton"];
    let commissions = ["commissions-container", "commissionsh2", "headerdividercommissions", "commissionsparagraph", 
        "dividercommissions", "commissionbutton"];
    let all = title.concat(introduction, gallery, commissions);
    forEachId(all);
}

// Checks if the screen for about me is in bound with the elements before changing their IDs to 
// -animated to activate their animations.
function animateAboutMe() {
    //------------IDs---------------
    let title = ["titleh1", "dividertitle", "titleimage"];
    let aboutme = ["aboutme-container", "aboutmeh2", "headerdivideraboutme", "aboutmeh3", "aboutmepronouns", 
        "aboutmeparagraph", "aboutmeparagraph2", "divideraboutme", "divideraboutme2", "aboutmeimage"];
    let funfact = ["funfacts-container", "funfacth2", "headerdividerfunfact"];
    let all = getAllIDs([document.querySelectorAll(".subsectionheader-left"), document.querySelectorAll(".subsectionarticle-left"), document.querySelectorAll(".subsectionimage-left"),
                        document.querySelectorAll(".subsectionheader-right"), document.querySelectorAll(".subsectionarticle-right"), document.querySelectorAll(".subsectionimage-right"),
                        document.querySelectorAll(".subcontainer-left"), document.querySelectorAll(".subcontainer-right")]);
    all = all.concat(title, aboutme, funfact);
    forEachId(all);
}

// Checks if the screen for gallery is in bound with the elements before changing their IDs to 
// -animated to activate their animations.
function animateGallery() {
    //------------IDs---------------
    let title = ["titleh1", "dividertitle", "titleimage"]; 
    let gallery = ["gallery-container","galleryh2", "headerdividergallery"];
    let all = title.concat(gallery);
    forEachId(all);
}

function animateCommissions() {
    let title = ["titleh1", "dividertitle", "titleimage"];
    let details = ["commissioninfo-container", "commissioninfoh2", "headerdividercommissioninfo", 
                   "commissioninfocontentparagraph", "tosbutton", "queuebutton", "formbutton", "dividercommissioninfo", "commissioninfodetails"];
    let prices = ["prices-container", "pricesh2", "headerdividerprices"];
    let classes = document.querySelectorAll(".list");
    let all = getAllIDs([document.querySelectorAll(".subcontainer"), document.querySelectorAll(".subsectionh3"), document.querySelectorAll(".subsectionh4"), document.querySelectorAll(".gallerylist"),
                        document.querySelectorAll(".subsection-linedivider")]);
    all = all.concat(title, details, prices);
    forEachId(all);
    forEachClass(classes);
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

function getAllIDs(elements) {
    let result = [];
    elements.forEach((i) => {
        i.forEach((j) => {
            result.push(j.id);
        }); 
    }); 
    return result;
}

function forEachId(all) {
    all.forEach((i) => {
        let elementid = document.getElementById(i);
        OBSERVERID.observe(elementid);
    });
}

function forEachClass(all) {
    all.forEach((i) => {
        OBSERVERCLASS.observe(i);
    });
}
