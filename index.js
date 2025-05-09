// Master JS file for decorative elements
// Created by Prezzy Ch.
// globals
let siteButtons = [
    {id: "navbaraboutme", link: "aboutme.html"}, {id: "navbarhome", link: "index.html"}, {id: "navbargallery", link: "gallery.html"}, {id: "navbarcommissions", link: "commissions.html"},
    {id: "footerhome", link: "index.html"}, {id: "footeraboutme", link: "aboutme.html"}, {id: "footergallery", link: "gallery.html"},
    {id: "footercommissions", link: "commissions.html"}, {id: "footertos", link: "tos.html"} ,{id: "introductionbutton", link: "aboutme.html"}, {id: "gallerybutton", link: "gallery.html"}, {id: "commissionbutton", link: "commissions.html"},
    {id: "sidebarhome", link: "index.html"}, {id: "sidebaraboutme", link: "aboutme.html"}, {id: "sidebargallery", link: "gallery.html"}, {id: "sidebarcommissions", link: "commissions.html"},
    {id: "tosbutton", link: "tos.html"}
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
