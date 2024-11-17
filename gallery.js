let activeGalleryYear = 2025;
let maxYear = 2025;
let minYear = 2024;

window.addEventListener('load' , function() {
    loadActive(activeGalleryYear);
    directionCheck(activeGalleryYear);
    imgButtonInitialization();
    modalButtonInitialization();
    // buttons (add more for the specific buttons)
    let button2025 = document.getElementById("button2025");
    let button2024 = document.getElementById("button2024");
    let buttonleft = document.getElementById("buttonleft");
    let buttonright = document.getElementById("buttonright");

    let exibitheader = document.getElementById("exibitheader");

    button2025.onclick = function() {
        exibitheader.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        fadeGalleryOut();
        setTimeout(() => {
            loadActive(2025);
        }, 500);
    }

    button2024.onclick = function() {
        exibitheader.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        fadeGalleryOut();
        setTimeout(() => {
            loadActive(2024);
        }, 500);
    }

    buttonleft.onclick = function() {
        exibitheader.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        fadeGalleryOut();
        setTimeout(() => {
            changeDirection(1);
        }, 500);
    }
    buttonright.onclick = function() {
        exibitheader.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        fadeGalleryOut();
        setTimeout(() => {
            changeDirection(-1);
        }, 500);
    }


});

function loadActive(active) {
    directionCheck(active);
    let exibith2 = document.getElementById("exibith2");
    if (exibith2 === null) { //corrector
        exibith2 = document.getElementById("exibith2-animated");
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
    console.log()
    exibith2.innerHTML = active;
    button.className = "inactive";
    button.disabled = true;
    gallery.style.display = "flex";
    activeGalleryYear = active;
    fadeGalleryIn();
}

function changeDirection(direction) {
    loadActive(activeGalleryYear + direction);
}

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
    if (maxYear >= active) {
        buttonright.className = "inactive";
        buttonright.disabled = true;
    }
}

function fadeGalleryIn() {
    let exibitcontainerinner = document.getElementById("exibitcontainerinner");
    exibitcontainerinner.className = "unhidden";
}

function fadeGalleryOut() {
    let exibitcontainerinner = document.getElementById("exibitcontainerinner");
    exibitcontainerinner.className = "hidden";
}

function imgButtonInitialization() {
    let elements = document.getElementsByClassName("galleryimages");
    let modal = document.getElementById("gallerymodal");
    let modalimage = document.getElementById("modalimage");
    let modalheader = document.getElementById("modalheader");
    for (let i = 0; i < elements.length; i++) {
        let item = elements[i];
        item.onclick = function() {
            modal.className = "activemodal";
            modalimage.src = item.src;
            modalheader.innerHTML = item.alt
        }
    }
}

function modalButtonInitialization() {
    let element = document.getElementById("modalclosebutton");
    let modal = document.getElementById("gallerymodal");
    element.onclick = function() {
        modal.className = "inactivemodal";
    }
}

