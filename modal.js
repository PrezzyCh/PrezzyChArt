


window.addEventListener('load' , function() {
    imgButtonInitialization();
    modalButtonInitialization();
});

/*===============================================*/
/*-------------------FUNCTIONS-------------------*/
/*===============================================*/

// Initializes all of the image buttons and when the image is clicked, the modal and the image will be loaded
// along with the alt text.
function imgButtonInitialization() {
    let elements = document.getElementsByClassName("galleryimages");
    let modal = document.getElementById("gallerymodal");
    let modalimage = document.getElementById("modalimage");
    let modalheader = document.getElementById("modalheader");

    for (let i = 0; i < elements.length; i++) { // For each element, run through their on click.
        let item = elements[i];
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