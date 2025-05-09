// Controller for the gallery.html gallery
// Created by Prezzy Ch.

// CONSTANTS
const FADEOUTDELAY = 500;
// Globals
let currIndex = 0;
let maxIndex;
let elements;
//Objects
let galleryh2;
let buttonleft;
let buttonright;

window.addEventListener('load' , function() {
    initializeOnStartup();
    setMax();
    initializeGallery();
    loadActive(elements[0], elements[0]);
});

/*===============================================*/
/*-------------------FUNCTIONS-------------------*/
/*===============================================*/

// Main function to load the active gallery when shown an input with the parameter as the active year
// Parameter:
//  active(Number) - active year to change elements to
function loadActive(activeGallery, prevGallery) {
    let activeYear = activeGallery.innerHTML;
    let prevYear = prevGallery.innerHTML;
    setActive(activeGallery, prevGallery);
    document.getElementById("list" + prevYear).style.display = "none";
    document.getElementById("list" + activeYear).style.display = "flex";
    galleryh2.innerHTML = activeYear;
    fadeGalleryIn();
    directionCheck(activeGallery.value);
}

// Checks if the direction is within bounds and deactivates the buttons if they will be out of bounds.
// Parameter:
//  activeIndex (num)- The index that is currently active
function directionCheck(activeIndex) {

    buttonleft.className = "active";
    buttonright.className = "active";
    buttonleft.disabled = false;
    buttonright.disabled = false;
    if (activeIndex <= 0) {
        buttonleft.className = "inactive";
        buttonleft.disabled = true;
    }
    if (activeIndex >= maxIndex) {
        buttonright.className = "inactive";
        buttonright.disabled = true;
    }
}

// Sets the class name of the gallery container to unhidden which activates the animation upon load 
function fadeGalleryIn() {
    let gallerycontainerinner = document.getElementById("gallerycontainerinner");
    gallerycontainerinner.className = "unhidden";
}

// Sets the class name of the gallery container to hidden which activates the animation upon load 
function fadeGalleryOut() {
    let gallerycontainerinner = document.getElementById("gallerycontainerinner");
    gallerycontainerinner.className = "hidden";
}

// Sets the max index based on the size of elements.
function setMax() {
    maxIndex = elements.length - 1;
}

// Initializes all gallery buttons that are used to switch gallery.
function initializeGallery() {

    buttonleft.onclick = function() {
        initiateModalChange(elements[currIndex - 1], currIndex - 1);
    }

    buttonright.onclick = function() {
        initiateModalChange(elements[currIndex + 1], currIndex + 1);
    }

    elements.forEach(i => {
        i.onclick = function() {
            initiateModalChange(i, i.value);
        }
    });
}

// Initiates a gallery change based on the target gallery, fading the gallery out and swapping the
// gallery along with scrolling the window to the top.
// Parameters:
//  target (element)- The target gallery to switch to.
//  targetIndex (num)- The target index to switch to.
function initiateModalChange(target, targetIndex) {
    fadeGalleryOut();
    galleryheader.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    setTimeout(() => {
        loadActive(target, elements[currIndex]);
        currIndex = Number(targetIndex);
    }, FADEOUTDELAY);
}

// Sets the active button in elements and removes the active class of the previous button.
// Parameters:
//  currentElement (element)- The element to activate
//  prevElement (element)- The previous element to disable.
function setActive(currentElement, prevElement) {
    prevElement.className = "gallerybutton active";
    currentElement.className = "gallerybutton inactive";
}

// Initializes objects on startup.
function initializeOnStartup() {
    elements = this.document.querySelectorAll(".gallerybutton");
    galleryh2 = document.getElementById("galleryh2");
    buttonleft = document.getElementById("buttonleft");
    buttonright = document.getElementById("buttonright");
}


