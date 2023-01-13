const noneState = "none";
const initialState = "initial";
const mobileMenuClassName = "mobile-menu";
const main = "main";
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