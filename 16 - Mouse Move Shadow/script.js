var hero = document.querySelector(".hero");
var h1 = document.querySelector("h1");
var walk = 30;
function shadow(e) {
    // * height and width of div
    var height = hero.offsetHeight, width = hero.offsetWidth;
    console.log("height and width of div", height, width);
    // * how far away the mousemove is fro the element it's mousing over
    var x = e.offsetX, y = e.offsetY;
    var target = e.target;
    // * if the target is heading instead of div
    if (this !== target) {
        x = x + target.offsetLeft;
        y = y + target.offsetTop;
    }
    var xWalk = (x / width) * walk - walk / 2;
    var yWalk = (y / width) * walk - walk / 2;
    h1.style.textShadow = "".concat(xWalk, "px ").concat(yWalk, "px 0 red");
}
hero === null || hero === void 0 ? void 0 : hero.addEventListener("mousemove", shadow);
