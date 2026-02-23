// Master JS file for decorative elements
// Created by Prezzy Ch.

// globals
let siteButtons = [
    {id: "navbaraboutme", link: "aboutme"}, {id: "navbarhome", link: "index"}, {id: "navbargallery", link: "gallery"}, {id: "navbarcommissions", link: "commissions"},
    {id: "footerhome", link: "index"}, {id: "footeraboutme", link: "aboutme"}, {id: "footergallery", link: "gallery"},
    {id: "footercommissions", link: "commissions"}, {id: "footertos", link: "tos"} ,{id: "introductionbutton", link: "aboutme"}, {id: "gallerybutton", link: "gallery"}, {id: "commissionbutton", link: "commissions"},
    {id: "sidebarhome", link: "index"}, {id: "sidebaraboutme", link: "aboutme"}, {id: "sidebargallery", link: "gallery"}, {id: "sidebarcommissions", link: "commissions"},
    {id: "tosbutton", link: "tos"}
]
let animatableElements;

const OBSERVEROBJECT = new IntersectionObserver((entries) => {
    entries.forEach((i) => {
        if (i.isIntersecting && i.target.className.includes("animatable")) {
            i.target.className = i.target.className.replaceAll("animatable", "animated");
        }
    });
});


window.onload = function() {
    animatableElements = document.querySelectorAll(".animatable");
    observeAll();
    loadingScreenAnimation();
    activateButtons();
    animateSideBar();
}
/*===============================================*/
/*-------------------FUNCTIONS-------------------*/
/*===============================================*/


// Takes in the link that is going to be set and activates the loading screen before the link is
// pressed
// Parameters:
//  link (String)- the website URL to redirect
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
    let loadingscreen = document.getElementById("loading");
    if (!loadingscreen.className.includes("aloadingin")) {
        loadingscreen.className = "loadingscreen aloadingin";
    } else {
        loadingscreen.className = "loadingscreen aloadingout";
    }
}

// Handles Sidebar animations
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

// Activates all buttons with their respective ID's and event delay.
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

// Observes all objects that has the 'animatable' class name.
function observeAll() {
    animatableElements.forEach((i) => {
        OBSERVEROBJECT.observe(i);
    })
}
