const debounce = (
  func: Function,
  wait: number = 20,
  immediate: boolean = true
) => {
  var timeout: any;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// debouncing is running a funciton event at a small number times.

const slideImages: NodeListOf<HTMLImageElement> =
  document.querySelectorAll(".slide-in");

function checkSlide(e: Event) {
  slideImages.forEach((slideImage) => {
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.height / 2;
    const imageBottom = slideImage.offsetTop + slideImage.height; // pixel value of bottom of image
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

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
    } else {
      slideImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
