// JS file to manage the index announcement slider.
// Created by Prezzy Ch.

// CONSTANTS
const SCROLLTIME = 10000;

// Globals
let maxElements = 0;
let currIndex = 0;
let timer;
let elements;

window.addEventListener('load' , function() {
    elements = document.querySelectorAll(".sliderbutton");
    setMaxElements();
    autoScroll();
    initilizeSlider();
    initiateSlide(0);
});

/*===============================================*/
/*-------------------FUNCTIONS-------------------*/
/*===============================================*/

// Handles autoscroll, incrementing scrolling based on a set time.
function autoScroll() {
    timer = 
    setInterval(function() {
        let newIndex = currIndex;
        if (currIndex >= maxElements) {
            newIndex = 0;
        } else {
            newIndex++;
        }
        initiateSlide(newIndex);
    }, SCROLLTIME);

}

// Sets the max elements based on the current elements
function setMaxElements() {
    maxElements = elements.length - 1;
}

// Initializes each button of the slider. When a button is clicked, it will slide the slider to 
// the appropriate slide based on the index of the clicked button.
function initilizeSlider() {
    elements.forEach(i => {
        i.onclick = function() {
            let index = i.value;
            clearInterval(timer);
            initiateSlide(index);
            autoScroll(); //reactivates interval
        } 
    });
}

// Slides the slider, checks if the index to swipe is the current index. If it is the current 
// index, the slider will not slide.
// Parameters: 
//  index (num)- The slide target index.
function sliderProtocols(index) {
    // Checks if the index is the same.
    setActive(elements[index], elements[currIndex]);
    if (currIndex != index) {
        let sliderTextElement = document.getElementById("slideshowtext");
        let title = document.getElementById("sliderheader");
        let paragraph = document.getElementById("sliderparagraph");
        let slider = document.getElementById("slider");
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

// Initiates all events related to the slider. Changing the button opacity to reflect the index of
// the current slide.
// Parameters:
//  elementToSlide (element)- The element to slide to
//  elementToSlideIndex (num)- The element to slide to index. 
function initiateSlide(elementToSlideIndex) {
    sliderProtocols(elementToSlideIndex);
    currIndex = elementToSlideIndex;
}

// Sets the active button and removes the active class of the previous button.
// Parameters:
//  element (element)- The element to activate
//  prevElement (element)- The previous element to disable.
function setActive(element, prevElement) {
    prevElement.className = "sliderbutton";
    element.className = "sliderbutton sliderbuttonactive";
}