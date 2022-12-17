const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const foundKey = findKey(key);
  console.log(e);
  if (foundKey) {
    switch (key.toUpperCase()) {
      case "A":
        playAudio("sounds/clap.wav", foundKey);
        break;
      case "S":
        playAudio("sounds/hihat.wav", foundKey);
        break;
      case "D":
        playAudio("sounds/kick.wav", foundKey);
        break;
      case "F":
        playAudio("sounds/openhat.wav", foundKey);
        break;
      case "G":
        playAudio("sounds/boom.wav", foundKey);
        break;
      case "H":
        playAudio("sounds/ride.wav", foundKey);
        break;
      case "J":
        playAudio("sounds/snare.wav", foundKey);
        break;
      case "K":
        playAudio("sounds/tom.wav", foundKey);
        break;
      case "L":
        playAudio("sounds/tink.wav", foundKey);
        break;

      default:
        break;
    }
  }
});

function playAudio(url, keyElement) {
  console.log(keyElement);
  keyElement.classList.add("playing");
  const audio = new Audio(url);
  audio.play();
  keyElement.classList.remove("playing");
}

function findKey(key) {
  const lkey = `${key}`;
  for (let letter of keys) {
    if (letter.querySelector("kbd").textContent === lkey.toUpperCase()) {
      return letter;
    }
  }
}
