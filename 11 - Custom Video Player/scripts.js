const player = document.querySelector(".player");
const video = document.querySelector("video");
const play_pause = document.querySelector(".toggle");
const progressBar = document.querySelector(".progress__filled");
const skipButtons = document.querySelectorAll(".player__button");
const volumeBar = document.querySelector("input[name='volume']");
const playbackRateBar = document.querySelector("input[name='playbackRate']");
function togglePlay() {
  if (video.paused) {
    video.play();
    play_pause.textContent = "⏸️";
  } else {
    video.pause();
    play_pause.textContent = "▶️";
  }
}

play_pause.addEventListener("click", togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(this);
    let { skip: skip } = this.dataset;
    skip = Number(skip);
    video.currentTime += skip;
  });
});

volumeBar.addEventListener("change", function (e) {
  video.volume = e.target.value;
});

playbackRateBar.addEventListener("change", function (e) {
  video.playbackRate = e.target.value;
});

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime =
    (e.offsetX / document.querySelector(".progress").offsetWidth) *
    video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("timeupdate", handleProgress);
document.querySelector(".progress").addEventListener("click", scrub);
