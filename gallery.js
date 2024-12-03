// Controller for the gallery.html gallery
// Created by Prezzy Ch.

let activeGalleryYear = 2024;
let maxYear = 2024;
let minYear = 2024;
let buttons = [2024];

window.addEventListener('load' , function() {
    loadActive(activeGalleryYear);
    directionCheck(activeGalleryYear);
    imgButtonInitialization();
    modalButtonInitialization();

    let buttonleft = document.getElementById("buttonleft");
    let buttonright = document.getElementById("buttonright");
    let galleryheader = document.getElementById("galleryheader");

    for (let i = 0; i < buttons.length; i++) {
        let button = document.getElementById("button" + buttons[i]);
        button.onclick = function() {
            galleryheader.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            fadeGalleryOut();
            setTimeout(() => {
                loadActive(Number(button.value));
            }, 500);
        }
    }

    buttonleft.onclick = function() {
        galleryheader.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        fadeGalleryOut();
        setTimeout(() => {
            changeDirection(1);
        }, 500);
    }

    buttonright.onclick = function() {
        galleryheader.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        fadeGalleryOut();
        setTimeout(() => {
            changeDirection(-1);
        }, 500);
    }

});

/*===============================================*/
/*-------------------FUNCTIONS-------------------*/
/*===============================================*/

// Main function to load the active gallery when shown an input with the parameter as the active year
// Parameter:
//  active(Number) - active year to change elements to
function loadActive(active) {
    directionCheck(active);
    let galleryh2 = document.getElementById("galleryh2");
    if (galleryh2 === null) { //corrector
        galleryh2 = document.getElementById("galleryh2-animated");
    }

    let button;
    let gallery;

    for (let i = minYear; i <= maxYear; i++) {
        button = document.getElementById("button" + i);
        gallery = document.getElementById("list" + i);

        button.className = "active";
        button.disabled = false;
        gallery.style.display = "none";
    }

    button = document.getElementById("button" + active);
    gallery = document.getElementById("list" + active); 
    galleryh2.innerHTML = active;
    button.className = "inactive";
    button.disabled = true;
    gallery.style.display = "flex";
    activeGalleryYear = active;
    fadeGalleryIn();
}

// Links the arrow buttons with the the parameter direction as a +1 or -1 to change 
// the active year.
// Parameter:
//  direction(Number) - direction in -1 or +1
function changeDirection(direction) {
    loadActive(activeGalleryYear + direction);
}

// Checks if the direction is within bounds and deactivates the buttons if they will be out of bounds.
// Parameter:
//  active(Number) - active year of the currently element
function directionCheck(active) {
    let buttonleft = document.getElementById("buttonleft");
    let buttonright = document.getElementById("buttonright");

    buttonleft.className = "active";
    buttonleft.disabled = false;
    buttonright.className = "active";
    buttonright.disabled = false;

    if (maxYear <= active) {
        buttonleft.className = "inactive";
        buttonleft.disabled = true;
    } 
    if (minYear >= active) {
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

// Initializes all of the image buttons and when the image is clicked, the modal and the image will be loaded
// along with the alt text.
function imgButtonInitialization() {
    let elements = document.getElementsByClassName("galleryimages");
    let modal = document.getElementById("gallerymodal");
    let modalimage = document.getElementById("modalimage");
    let modalheader = document.getElementById("modalheader");

    for (let i = 0; i < elements.length; i++) {
        let item = elements[i];
        item.onclick = function() {
            modal.className = "activemodal";
            modalheader.innerHTML = item.alt;
            modalimage.src = item.src;
            let active = false;
            modal.addEventListener("animationend", function() {
                if (!active) {
                    modalimage.src = item.src.replaceAll("compressed", "uncompressed");
                    active = true;
                }
            });
        }
    }
}

// Initializes the modal buttons so when the close button is clicked, it will set the modal to inactive and activate
// it's animation.
function modalButtonInitialization() {
    let element = document.getElementById("modalclosebutton");
    let modal = document.getElementById("gallerymodal");
    element.onclick = function() {
        modal.className = "inactivemodal";
    }
}


