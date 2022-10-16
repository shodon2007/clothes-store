const firstScreen = document.querySelector('.first-screen');

function scrollDown() {
    window.scrollBy({
        top: firstScreen.offsetHeight,
        left: 0,
        behavior: "smooth"
    });
}