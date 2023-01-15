// import {signUpIsSelected, logInIsSelected} from "./log-in";

const noneState = "none";
const mobileMenuClassName = "mobile-menu";
const main = "main";
const horizontalScrollList = document.querySelectorAll('#horizontal-scroll-list-of-tournaments > li');
const allImg = document
    .querySelectorAll('#horizontal-scroll-list-of-tournaments > li > img');
const header = document.querySelectorAll('header')[0];
const headingOfTournaments = document.querySelectorAll('#tournaments > h2')[0];
const headingOfTournamentsMobile = document.querySelectorAll('#tournaments > .mobile-scroll-header ')[0];
const sections = document.querySelectorAll('section');
const heroSection = document.getElementById('hero-section');
let currentSlideIndex = 0;
let arrowButtonIsPressed = false;
const bottomScroll = document.getElementById('horizontal-scroll-list-of-tournaments');

function isMobile(){
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    return (width <= 767);
}

function resize(){
    const heightOfHeader = header.offsetHeight;
    for (let j = 0; j < sections.length; j++) {
        const section = sections[j];
        if(isMobile()) {
            section.style.height = "100vh";
            continue;
        }
        section.style.height = "calc(100vh - " + heightOfHeader + "px)";
    }
    if(isMobile()){
        heroSection.style.height = "calc(100vh - " + heightOfHeader + "px)";
        heroSection.style.top = heightOfHeader + "px)";

    }
}
resize();

window.addEventListener('resize', resize);

function offsetFromTopHeader(sign){
    const y = window.scrollY + sign * header.offsetHeight;
    window.scroll(0, y);
}

function initScroll(){
    const length = horizontalScrollList.length;
    for (let i = 0; i < length; i++) {
        const li = horizontalScrollList[i];
        const index = i;
        li.addEventListener('click', ()=>{
            pressBottomSlider(index);
            if(isMobile()){
                headingOfTournamentsMobile.scrollIntoView();
                return 0;
            }
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
setFuncForClass("more-button", ()=> {
    if(isMobile()){
        return 0;
    }
    offsetFromTopHeader(-1)
});


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
    if(isMobile()){
        console.log(li.clientWidth);
        const width = i === 0? 0 : horizontalScrollList[i - 1].clientWidth * (i - 1);
        bottomScroll.scrollTo(width,0);
    }
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
const prevButtonMobile = document.querySelector('#arrow-prev-mobile');
const nextButton = document.querySelector('#arrow-next');
const nextButtonMobile = document.querySelector('#arrow-next-mobile');

nextButton.addEventListener('click', pressNext);
nextButtonMobile.addEventListener('click', pressNext);

prevButton.addEventListener('click', pressPrevious);
prevButtonMobile.addEventListener('click', pressPrevious);


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
    if(!isMobile()){
        offsetFromTopHeader(-1);
    }
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
    if(!isMobile()){
        offsetFromTopHeader(-1);
    }
}
