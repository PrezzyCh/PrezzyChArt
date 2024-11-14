let activeGalleryYear = 2025;
let maxYear = 2025;
let minYear = 2024;

window.addEventListener('load' , function() {
    loadActive(activeGalleryYear);
    directionCheck(activeGalleryYear);

    // buttons (add more for the specific buttons)
    let button2025 = document.getElementById("button2025");
    let button2024 = document.getElementById("button2024");
    let buttonleft = document.getElementById("buttonleft");
    let buttonright = document.getElementById("buttonright");

    button2025.onclick = function() {
        loadActive(2025);
    }

    button2024.onclick = function() {
        loadActive(2024);
    }

    buttonleft.onclick = function() {
        changeDirection(1);
    }
    buttonright.onclick = function() {
        changeDirection(-1);
    }


});

function loadActive(active) {
    directionCheck(active);
    let exibith2 = document.getElementById("exibith2");
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

    exibith2.innerHTML = active;
    button.className = "inactive";
    button.disabled = true;
    gallery.style.display = "flex";
    activeGalleryYear = active;
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
    } else {
        buttonright.className = "inactive";
        buttonright.disabled = true;
    }
}