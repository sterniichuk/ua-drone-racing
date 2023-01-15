const signUpClassName = "sign-up-is-selected";
const logInClassName = "log-in-is-selected";
const noneStateOfElement = "none";
const initialStateOfElement = "initial";
const nonActiveColorText = '#949AB2';
const activeColorText = '#292D3C';
const headlineOfSignUp = document.querySelector('#headline-of-sign-up-switch');
const headlineOfLogIn = document.querySelector('#headline-of-log-in-switch');

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let variant = getParameterByName('variant');
if(variant === 'log-in'){
    logInIsSelected();
}else {
    signUpIsSelected();
}

function toggle(className, displayState) {
    var elements = document.getElementsByClassName(className)

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = displayState;
    }
}
function signUpIsSelected() {
    toggle(signUpClassName, initialStateOfElement);
    toggle(logInClassName, noneStateOfElement);
    toggleOpacityById("img-underline-log-in", 0);
    toggleOpacityById("img-underline-sign-up", 1);
    headlineSignUpOn();
    headlineLogInUpOff();
}

function logInIsSelected() {
    toggle(signUpClassName, noneStateOfElement);
    toggle(logInClassName, initialStateOfElement);
    toggleOpacityById("img-underline-log-in", 1);
    toggleOpacityById("img-underline-sign-up", 0);
    headlineSignUpOff();
    headlineLogInUpOn();
}

function toggleOpacityById(idName, value) {
    var element = document.getElementById(idName);
    element.style.opacity = value;
}


function headlineSignUpOn() {
    headlineOfSignUp.style.color = activeColorText;
}

function headlineSignUpOff() {
    headlineOfSignUp.style.color = nonActiveColorText;
}

function headlineLogInUpOn() {
    headlineOfLogIn.style.color = activeColorText;
}

function headlineLogInUpOff() {
    headlineOfLogIn.style.color = nonActiveColorText;
}

