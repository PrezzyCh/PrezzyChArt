
let maxElements = 0;
let currIndex = 0;
let timer;
let elements;

window.addEventListener('load' , function() {
    elements = document.querySelectorAll(".sliderbutton");
    initializeElements();
    autoScroll();
    sliderInteraction();
});

function autoScroll() {
    timer = 
    setInterval(function() {
        let newIndex = currIndex;
        if (currIndex >= maxElements) {
            newIndex = 0;
        } else {
            newIndex++;
        }
        setActive(elements[newIndex], elements[currIndex]);
        slideSlider(newIndex);
        currIndex = newIndex
    }, 10000);

}

function initializeElements() {
    maxElements = elements.length - 1;
}

function sliderInteraction() {
    elements.forEach(i => {
        i.onclick = function() {
            let index = i.value;
            clearInterval(timer);
            setActive(i, elements[currIndex]);
            slideSlider(index);
            currIndex = index;
            autoScroll(); //reactivates interval
        } 
    });
}

function slideSlider(index) {
    let sliderTextElement = document.getElementById("slideshowtext");
    let title = document.getElementById("sliderheader");
    let paragraph = document.getElementById("sliderparagraph");
    let slider = document.getElementById("slider");

    if (currIndex != index) {
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

function setActive(element, prevElement) {
    prevElement.className = "sliderbutton";
    element.className = "sliderbutton sliderbuttonactive";
}