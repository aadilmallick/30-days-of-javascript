const msg = new SpeechSynthesisUtterance();
let voices = [] as SpeechSynthesisVoice[];
const voicesDropdown = document.querySelector(
  '[name="voice"]'
) as HTMLSelectElement;
const options = document.querySelectorAll('[type="range"], [name="text"]');
const textarea = document.querySelector("textarea")!;
const speakButton = document.querySelector("#speak") as HTMLButtonElement;
const stopButton = document.querySelector("#stop") as HTMLButtonElement;

speechSynthesis.addEventListener("voiceschanged", function (e) {
  voices = this.getVoices();
  console.table(voices); // * list of avaiable voices

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voicesDropdown.appendChild(option);
  });
});

speakButton.addEventListener("click", () => {
  msg.text = textarea.value;
  speechSynthesis.speak(msg);
});

voicesDropdown.addEventListener("change", (e) => {
  msg.voice = voices.find((voice) => voice.name === voicesDropdown.value)!;
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
});

stopButton.addEventListener("click", (e) => {
  speechSynthesis.cancel();
});
