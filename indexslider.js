
let currentSlider = 0;
let maxElements = 0;
let currIndex = 0;
let timer;

window.addEventListener('load' , function() {
    initializeElements();
    autoScroll();
    sliderInteraction();
});

function autoScroll() {
    timer = 
    setInterval(function() {
        if (currIndex > maxElements) {
            currIndex = 0;
        }
        slideSlider(currIndex);
        currIndex++;
    }, 10000);

}

function initializeElements() {
    let elements = document.querySelectorAll(".sliderbutton");
    maxElements = elements.length - 1;
}

function sliderInteraction() {
    let elements = document.querySelectorAll(".sliderbutton");
    elements.forEach(i => {
        i.onclick = function() {
            clearInterval(timer);
            let index = i.value;
            currIndex = index;
            slideSlider(index);
            autoScroll();
        } 
    });
}

function slideSlider(index) {
    let sliderTextElement = document.getElementById("slideshowtext");
    let title = document.getElementById("sliderheader");
    let paragraph = document.getElementById("sliderparagraph");
    let slider = document.getElementById("slider");

    if (currentSlider != index) {
        currentSlider = index;
        let percentScroll = -(index * 100);  
        slider.style.transform = "translateX(" + percentScroll + "%)";
        sliderTextElement.className = "slideshow-inactive";
        sliderTextElement.addEventListener("animationend", function() {
        title.innerHTML = document.getElementById("sliderelementtitle-" + index).innerHTML;
        paragraph.innerHTML = document.getElementById("sliderelementpara-" + index).innerHTML;
        sliderTextElement.className = "slideshow-active";
        });
    }
}