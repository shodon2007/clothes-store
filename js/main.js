const firstScreen = document.querySelector('.first-screen');
const burgerBody = document.querySelector('.burger');
const body = document.querySelector('body');
let isBurger = false;





// burger
const burgerClick = () => {
    isBurger = isBurger != false ? burgerFalse() : burgerTrue();
    function burgerTrue() {
        body.style.overflow = "hidden";
        burgerBody.style.zIndex = 1;
        burgerBody.style.opacity = 1;
        return true;
    }

    function burgerFalse() {
        body.style.overflow = "auto";
        burgerBody.style.zIndex = "-1";
        burgerBody.style.opacity = 0;
        return false;
    }
}


// scroll
function scrollDown() {
    window.scrollBy({
        top: firstScreen.offsetHeight,
        left: 0,
        behavior: "smooth"
    });
}