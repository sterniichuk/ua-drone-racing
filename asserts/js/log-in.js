const signUpClassName = "sign-up-is-selected";
const logInClassName = "log-in-is-selected";
const noneState = "none";
const initialState = "initial";
const nonActiveColorText = '#949AB2';
const activeColorText = '#292D3C';
const headlineOfSignUp = document.querySelector('#headline-of-sign-up-switch');
const headlineOfLogIn = document.querySelector('#headline-of-log-in-switch');


function signUpIsSelected() {
    toggle(signUpClassName, initialState);
    toggle(logInClassName, noneState);
    toggleOpacityById("img-underline-log-in", 0);
    toggleOpacityById("img-underline-sign-up", 1);
    headlineSignUpOn();
    headlineLogInUpOff();
}

function logInIsSelected() {
    toggle(signUpClassName, noneState);
    toggle(logInClassName, initialState);
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

