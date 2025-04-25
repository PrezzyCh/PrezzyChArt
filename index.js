// Master JS file for decorative elements
// Created by Prezzy Ch.
let loadingIsActivated = false;
//constants 
let siteButtons = [
    {id: "navbaraboutme", link: "aboutme.html"}, {id: "navbarhome", link: "index.html"}, {id: "navbargallery", link: "gallery.html"}, {id: "navbarcommissions", link: "commissions.html"},
    {id: "footerhome", link: "index.html"}, {id: "footeraboutme", link: "aboutme.html"}, {id: "footergallery", link: "gallery.html"},
    {id: "footercommissions", link: "commissions.html"}, {id: "footertos", link: "tos.html"} ,{id: "introductionbutton", link: "aboutme.html"}, {id: "gallerybutton", link: "gallery.html"}, {id: "commissionbutton", link: "commissions.html"},
    {id: "sidebarhome", link: "index.html"}, {id: "sidebaraboutme", link: "aboutme.html"}, {id: "sidebargallery", link: "gallery.html"}, {id: "sidebarcommissions", link: "commissions.html"},
    {id: "tosbutton", link: "tos.html"}
]

let sliderText = [
    {title: "Commissions Now Open!!", body:"Commissions are now open from febuary 2020 to febuary 2025 with limited slot availability. Head down to my commissions page if you are interested!"},
    {title: "t", body:"Testing"}
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
    sliderButtonCancellation();
    activateButtons();
    animateSideBar();
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

function sliderButtonCancellation() {
    let elements = document.querySelectorAll(".sliderbutton");
    let sliderTextElement = document.getElementById("slideshowtext");
    let title = document.getElementById("sliderheader");
    let paragraph = document.getElementById("sliderparagraph");
    let slider = document.getElementById("slider");
    elements.forEach(i => {
        i.onclick = function() {
            let percentScroll = -(i.value * 100);  
            slider.style.transform = "translateX(" + percentScroll + "%)";
            sliderTextElement.className = "slideshow-inactive";
            sliderTextElement.addEventListener("animationend", function() {
                title.innerHTML = sliderText[i.value].title;
                paragraph.innerHTML = sliderText[i.value].body;
                sliderTextElement.className = "slideshow-active";
            });
        } 
    });
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
    } else if (currentHTML.includes("tos.html")) {
        animateTos();
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
                   "commissioninfocontentparagraph", "tosbutton", "queuebutton", "formbutton", "dividercommissioninfo", "willdrawh3", "willnotdrawh3", "dividerdetails"];
    let prices = ["prices-container", "pricesh2", "headerdividerprices"];
    let classes = [document.querySelectorAll(".list"), document.querySelectorAll(".gallerylistelement")];
    let all = getAllIDs([document.querySelectorAll(".subcontainer"), document.querySelectorAll(".subsectionh3"), document.querySelectorAll(".subsectionh4"),
                        document.querySelectorAll(".subsection-linedivider")]);
    all = all.concat(title, details, prices);
    forEachId(all);
    forEachClass(classes);
}

function animateTos() {
    let title = ["titleh1", "dividertitle"];
    let containers = ["ordering-container", "payment-container", "communication-container", "delivery-container", "completion-container", "copyright-container"];
    let h2 = ["orderingh2", "paymenth2", "communicationh2", "deliveryh2", "completionh2", "copyrighth2"];
    let dividers = ["headerdividerordering", "headerdividerpayment", "dividerpayment", "headerdividercommunication", "dividercommunication", "headerdividerdelivery",
                    "dividerdelivery", "headerdividercompletion", "dividercompletion", "headerdividercopyright", "dividercopyright"];
    let paragraphs = ["orderingparagraph", "paymentparagraph1", "paymentparagraph2", "communicationparagraph1", "communicationparagraph2", "deliveryparagraph1", 
                      "deliveryparagraph2", "completionparagraph1", "completionparagraph2", "copyrightparagraph1", "copyrightparagraph2"];
    let classes = [document.querySelectorAll(".list")];
    let all = title.concat(containers, h2, dividers, paragraphs);
    forEachId(all);
    forEachClass(classes);
}

function animateSideBar() {
    let sidepanelbutton = document.getElementById("sidepanelbutton");
    let sidepanelclosebutton = document.getElementById("sidepanelclosebutton");
    let sidebarcontainer = document.getElementById("sidebarcontainer");
    let sidebar = document.getElementById("sidebar");
    sidepanelbutton.onclick = function() {
        sidebarcontainer.className = "activebar";
        sidebar.style.display = "flex";
        sidebar.className = "activesidebar";
    }

    sidepanelclosebutton.onclick = function() {
        sidebarcontainer.className = "inactivebar";
        setTimeout(function() {sidebar.style.display = "none"}, 500);
        sidebar.className = "inactivesidebar";
    }
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
        i.forEach(element => {
            OBSERVERCLASS.observe(element);
        });
    });
}
