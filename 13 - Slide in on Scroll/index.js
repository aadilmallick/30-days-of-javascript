var debounce = function (func, wait, immediate) {
    if (wait === void 0) { wait = 20; }
    if (immediate === void 0) { immediate = true; }
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
};
// debouncing is running a funciton event at a small number times.
var slideImages = document.querySelectorAll(".slide-in");
function checkSlide(e) {
    slideImages.forEach(function (slideImage) {
        var slideInAt = window.scrollY + window.innerHeight - slideImage.height / 2;
        var imageBottom = slideImage.offsetTop + slideImage.height; // pixel value of bottom of image
        var isHalfShown = slideInAt > slideImage.offsetTop;
        var isNotScrolledPast = window.scrollY < imageBottom;
        // window.scrollY = how many pixels we scroll down, starts at 0
        // slideInAt = the pixel coordinates for the bottom of the page.
        if (slideImage === slideImages[0]) {
            console.group("scroll values");
            console.log(slideInAt);
            console.log(imageBottom);
            console.log(isHalfShown);
            console.log(isNotScrolledPast);
            console.groupEnd();
        }
        if (isHalfShown && isNotScrolledPast) {
            slideImage.classList.add("active");
        }
        else {
            slideImage.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", debounce(checkSlide));
