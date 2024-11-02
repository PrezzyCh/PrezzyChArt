// Animations is activated
let commissionsIsActivated = false;
let titleIsActivated = false;
let introductionIsActivated = false;
let galleryIsActivated = false;
//constants 

window.onresize = function() {
    // possible realign of elements with this.
}

window.onload = function() {
    loadingScreenAnimation();
    animateElements();
}

window.onscroll = function() {
    animateElements();
}

function loadingScreenAnimation() {
    let loadingscreen = document.getElementById("loading");
    loadingscreen.id = "loadingscreen-animated";

    for (let i = 1; i <= 6; i++) {
        setTimeout(() => {
            loadingScreen(i);
        }, 300 * i);
    }
}

function loadingScreen(index) {
    document.getElementById("decor" + index).style.animationPlayState = "running";
}

function animateElements() {
    //|-----------------------containers -----------------------|
    let titleContainer = document.getElementById("title-container");
    let introductionContainer = document.getElementById("introduction-container");
    let galleryContainer = document.getElementById("gallerycontainer");
    let commissionsContainer = document.getElementById("commissions-container");
    // ------------IDs-----------
    //title
    let titleh1 = document.getElementById("titleh1");
    let titlesubheadingscontainer = document.getElementById("titlesubheadings-container");
    let socials = document.getElementById("socials");
    //introductions 
    let introductionh2 = document.getElementById("introductionh2");
    let headerdividerintroduction = document.getElementById("headerdividerintroduction");
    let introductionparagraph = document.getElementById("introductionparagraph");
    let dividerintroduction = document.getElementById("dividerintroduction");
    let introductionbutton = document.getElementById("introductionbutton");
    //gallery
    let galleryh2 = document.getElementById("galleryh2");
    let headerdividergallery = document.getElementById("headerdividergallery");
    let galleryparagraph = document.getElementById("galleryparagraph");
    let gallerybutton = document.getElementById("gallerybutton");
    //commissions
    let commissionsh2 = document.getElementById("commissionsh2");
    let headerdividercommissions = document.getElementById("headerdividercommissions");
    let commissionsparagraph = document.getElementById("commissionsparagraph");
    let dividercommissions = document.getElementById("dividercommissions");
    let commissionbutton = document.getElementById("commissionbutton");
    //|----------------------- Values -----------------------|
    let topBounds = 0;
    let bottomBounds = document.documentElement.clientHeight;
    let titleContainerPos = titleContainer.getBoundingClientRect().y + (titleContainer.getBoundingClientRect().height/3);
    let introductionContainerPos = introductionContainer.getBoundingClientRect().y + (introductionContainer.getBoundingClientRect().height/3);
    let galleryContainerPos = galleryContainer.getBoundingClientRect().y + (galleryContainer.getBoundingClientRect().height/3);
    let commissionsContainerPos = commissionsContainer.getBoundingClientRect().y + (commissionsContainer.getBoundingClientRect().height / 3);

    // This section allows the animation to be swapped once in bound. Then will activate a revert to keep elements visible
    
    if ((titleContainerPos >= topBounds) && (titleContainerPos <= bottomBounds) && !titleIsActivated) {
        titleh1.id = "titleh1-animated";
        titlesubheadingscontainer.id = "titlesubheadings-container-animated";
        socials.id = "socials-animated";

        titleIsActivated = true;
    }
    if ((introductionContainerPos >= topBounds) && (introductionContainerPos <= bottomBounds) && !introductionIsActivated) {
        introductionh2.id = "introductionh2-animated";
        headerdividerintroduction.id = "headerdividerintroduction-animated";
        introductionparagraph.id = "introductionparagraph-animated";
        dividerintroduction.id = "dividerintroduction-animated";
        introductionbutton.id = "introductionbutton-animated";

        introductionIsActivated = true;
    }
    if ((galleryContainerPos >= topBounds) && (galleryContainerPos <= bottomBounds) && !galleryIsActivated) {
        galleryh2.id = "galleryh2-animated";
        headerdividergallery.id = "headerdividergallery-animated";
        galleryparagraph.id = "galleryparagraph-animated";
        gallerybutton.id = "gallerybutton-animated";

        galleryIsActivated = true;
    }
    if ((commissionsContainerPos >= topBounds) && (commissionsContainerPos <= bottomBounds) && !commissionsIsActivated) {
        commissionsh2.id = "commissionsh2-animated";
        headerdividercommissions.id = "headerdividercommissions-animated";
        commissionsparagraph.id = "commissionsparagraph-animated";
        dividercommissions.id = "dividercommissions-animated";
        commissionbutton.id = "commissionbutton-animated";

        commissionsIsActivated = true;
    }   
}