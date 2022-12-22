const hero: HTMLDivElement = document.querySelector(".hero")!;
const h1 = document.querySelector("h1")!;
const walk = 30;

function shadow(this: any, e: MouseEvent) {
  // * height and width of div
  const { offsetHeight: height, offsetWidth: width } = hero;
  console.log("height and width of div", height, width);

  // * how far away the mousemove is fro the element it's mousing over
  let { offsetX: x, offsetY: y } = e;
  const target = e.target as HTMLDivElement | HTMLHeadingElement;
  // * if the target is heading instead of div
  if (this !== target) {
    x = x + target.offsetLeft;
    y = y + target.offsetTop;
  }
  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / width) * walk - walk / 2;

  h1.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

hero?.addEventListener("mousemove", shadow);
