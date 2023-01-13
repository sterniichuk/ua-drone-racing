const noneState = "none";
const initialState = "initial";
const mobileMenuClassName = "mobile-menu";
const main = "main";
const horizontalScrollList = document.querySelectorAll('#horizontal-scroll-list-of-tournaments > li');
const allImg = document
    .querySelectorAll('#horizontal-scroll-list-of-tournaments > li > img');

function init(){
    var length = horizontalScrollList.length;
    for (var i = 0; i < length; i++) {
        const li = horizontalScrollList[i];
        li.addEventListener('click', ()=>{
            for (var j = 0; j < allImg.length; j++) {
                const img = allImg[j];
                img.style.display = "none";
            }
            const img = li.querySelectorAll('img');
           img[0].style.display = "block";
        });
    }

}
init();

function showMobileMenu() {
    switchStateSpec(main, "block");
    switchStateSpec("header", "flex");
    switchState(mobileMenuClassName);
}



function switchStateSpec(className, state) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        var currentState = elements[i].style.display;
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

let currentSlideIndex = 0;


nextButton.addEventListener('click', () => {
    const slideWidth = slides[0].clientWidth;
    if (currentSlideIndex >= slides.length-1) {
        slidesContainer.scrollLeft = 0;
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
        slidesContainer.scrollLeft += slideWidth;
    }
});

prevButton.addEventListener('click', () => {
    const slideWidth = slides[0].clientWidth;
    if (currentSlideIndex <= 0) {
        slidesContainer.scrollLeft += slides[0].clientWidth * slides.length;
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
        slidesContainer.scrollLeft -= slideWidth;
    }
});
