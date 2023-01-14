const noneState = "none";
const initialState = "initial";
const mobileMenuClassName = "mobile-menu";
const main = "main";
const horizontalScrollList = document.querySelectorAll('#horizontal-scroll-list-of-tournaments > li');
const allImg = document
    .querySelectorAll('#horizontal-scroll-list-of-tournaments > li > img');
const header = document.querySelectorAll('header')[0];
const headingOfTournaments = document.querySelectorAll('#tournaments > h2')[0];
const sections = document.querySelectorAll('section');
const heroSection = document.getElementById('hero-section');
let currentSlideIndex = 0;
let arrowButtonIsPressed = false;

function isMobile(){
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    return (width <= 767);
}

function setHeightOfSections(){
    const heightOfHeader = header.offsetHeight;
    for (let j = 0; j < sections.length; j++) {
        const section = sections[j];
        if(isMobile()) {
            section.style.height = null;
            continue;
        }
        section.style.height = "calc(100vh - " + heightOfHeader + "px)";
    }
    if(isMobile()){
        heroSection.style.height = "calc(100vh - " + heightOfHeader + "px)";
        heroSection.style.top = heightOfHeader + "px)";
    }
}
setHeightOfSections();

window.addEventListener('resize', setHeightOfSections);

function offsetFromTopHeader(sign){
    console.log("scroll " + window.scrollY);
    const y = window.scrollY + sign * header.offsetHeight;
    console.log(y);
    console.log("scroll after " + window.scrollY);
    window.scroll(0, y);
}
function initScroll(){
    const length = horizontalScrollList.length;
    for (let i = 0; i < length; i++) {
        const li = horizontalScrollList[i];
        const index = i;
        li.addEventListener('click', ()=>{
            pressBottomSlider(index);
            headingOfTournaments.scrollIntoView();
            offsetFromTopHeader(-1);
        });
    }
}
initScroll();
function setFuncForClass(className, func){
    const buttons = document.getElementsByClassName(className);
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', func);
    }
}
setFuncForClass("more-button", ()=> offsetFromTopHeader(-1));

function pressBottomSlider(i){
    arrowButtonIsPressed = false;
    const li = horizontalScrollList[i];
    for (let j = 0; j < allImg.length; j++) {
        const img = allImg[j];
        img.style.display = "none";
    }
    const img = li.querySelectorAll('img');
    img[0].style.display = "block";
    currentSlideIndex = i;
}
pressBottomSlider(0);
function showMobileMenu() {
    switchStateSpec(main, "block");
    switchStateSpec("header", "flex");
    switchState(mobileMenuClassName);
}

function switchStateSpec(className, state) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        const currentState = elements[i].style.display;
        if (currentState.toLowerCase() !== noneState) {
            elements[i].style.display = noneState;
        } else {
            elements[i].style.display = state;
        }
    }
}
function switchState(className) {
    switchStateSpec(className, initialState);
}

const slidesContainer = document.querySelector('#scroll-list');
const slides = slidesContainer.querySelectorAll('#scroll-list > li');
const prevButton = document.querySelector('#arrow-prev');
const nextButton = document.querySelector('#arrow-next');

nextButton.addEventListener('click', pressNext);

prevButton.addEventListener('click', pressPrevious);


function pressNext(){
    arrowButtonIsPressed = true;
    const slideWidth = slides[0].clientWidth;
    if (currentSlideIndex >= slides.length-1) {
        slidesContainer.scrollLeft = 0;
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
        slidesContainer.scrollLeft += slideWidth;
    }
    pressBottomSlider(currentSlideIndex);
    console.log(currentSlideIndex);
    offsetFromTopHeader(-1);
}
function pressPrevious(){
    arrowButtonIsPressed = true;
    const slideWidth = slides[0].clientWidth;
    if (currentSlideIndex <= 0) {
        slidesContainer.scrollLeft += slides[0].clientWidth * slides.length;
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
        slidesContainer.scrollLeft -= slideWidth;
    }
    pressBottomSlider(currentSlideIndex);
    console.log(currentSlideIndex);
    offsetFromTopHeader(-1);
}
