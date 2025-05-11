// JS file to manage modal popupps when an element has the galleryimages class.
// Created by Prezzy Ch.

// globals
let modalElements;
let modal;
let modalimage;
let modalheader;


window.addEventListener('load' , function() {
    modalElements = this.document.getElementsByClassName("galleryimages");
    modal = this.document.getElementById("gallerymodal");
    modalimage = this.document.getElementById("modalimage");
    modalheader = this.document.getElementById("modalheader");
    imgButtonInitialization();
    modalButtonInitialization();
});

/*===============================================*/
/*-------------------FUNCTIONS-------------------*/
/*===============================================*/

// Initializes all of the image buttons and when the image is clicked, the modal and the image will be loaded
// along with the alt text.
function imgButtonInitialization() {
    for (let i = 0; i < modalElements.length; i++) { // For each element, run through their on click.
        let item = modalElements[i];
        item.onclick = function() {
            modal.className = "activemodal";
            if (modalheader != null) { // Certain elements may not have header
                modalheader.innerHTML = item.alt;
            }
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