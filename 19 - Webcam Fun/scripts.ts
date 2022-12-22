const video = document.querySelector(".player") as HTMLVideoElement;
const canvas = document.querySelector(".photo") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const strip = document.querySelector(".strip") as HTMLDivElement;
const snap = document.querySelector(".snap") as HTMLAudioElement;

async function getVideo() {
  try {
    const localMediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = localMediaStream;
    video.play();
  } catch (e) {
    console.error(e);
  }
}

function paintToCanvas() {
  const width = video.clientWidth;
  const height = video.clientHeight;
  console.log(width, height);
  //   canvas.width = width * 2;
  //   canvas.height = height * 2;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight + 200;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.2;
    ctx.putImageData(pixels, 0, 0);
  }, 50);
}

function redEffect(pixels: ImageData): ImageData {
  // for (let pixel of pixels) {
  // }
  for (let i = 0; i < pixels.data.length; i += 4) {
    let red = pixels.data[i],
      green = pixels.data[i + 1],
      blue = pixels.data[i + 2],
      alpha = pixels.data[i + 3];

    pixels.data[i] = 250;
  }

  return pixels;
}

function rgbSplit(pixels: ImageData): ImageData {
  for (let i = 0; i < pixels.data.length; i += 4) {
    let red = pixels.data[i],
      green = pixels.data[i + 1],
      blue = pixels.data[i + 2],
      alpha = pixels.data[i + 3];

    pixels.data[i - 150] = red;
    pixels.data[i + 500] = green;
    pixels.data[i - 550] = pixels.data[i + 2];
  }

  return pixels;
}

function takePhoto() {
  snap.currentTime = 0; // immediately seek to beginning
  snap.play();

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "fruity"); // name will be fruity.jpg
  link.innerHTML = `<img src="${data}"/>`;
  strip.prepend(link);
}

async function runMainCode() {
  await getVideo();
  paintToCanvas();
}

runMainCode();
