let activeGalleryYear = 2025;
let maxYear = 2025;
let minYear = 2024;

window.addEventListener('load' , function() {
    loadActive(activeGalleryYear);

    // buttons (add more for the specific buttons)
    let button2025 = document.getElementById("button2025");
    let button2024 = document.getElementById("button2024");

    button2025.onclick = function() {
        loadActive(2025);
    }

    button2024.onclick = function() {
        loadActive(2024);
    }


});

function loadActive(active) {
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
}