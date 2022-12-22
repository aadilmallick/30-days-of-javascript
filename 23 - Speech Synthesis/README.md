# How the project worked

1. Create a **speech synthesis utterance** object.

```js
const msg = new SpeechSynthesisUtterance();
```

2. Find all the available voices on the OS for speech synthesis through the `speechSynthesis` API.

```javascript
speechSynthesis.addEventListener("voiceschanged", (e) => {
  voices = speechSynthesis.getVoices();
  // loop through list of voices
});
```

3. Change the speaker and text of the utterance

```js
msg.text = "I will say this out loud";
msg.voice = voices[0].name;
```

4. Speak the utterance using the `speechSynthesis.speak()` method.

```js
speechSynthesis.speak(msg);
```

# `speechSynthesis` API

## getting voices

You listen for the `voiceschanged` event, and then use the `speechSynthesis.getVoices()` method to return a list of available voices.

```js
speechSynthesis.addEventListener("voiceschanged", (e) => {
  voices = speechSynthesis.getVoices();
  // loop through list of voices
});
```

- A `voice` object has some important properties, like `name` and `lang`.

## methods

- `speechSynthesis.speak(utterance)` : speaks the specified utterance, which should be a `SpeechSynthesisUtterance`.
- `speechSynthesis.cancel()` : stops all utterances from speaking.

# `speechSynthesisUtterance` API

```js
const utterance = new SpeechSynthesisUtterance();
```

- `utterance.text` : the text that should be spoken. Set as a **string**
- `utterance.voice` : the voice that should be spoken. Often set to `voice.name` from the list of voice objects, but is just a **string**.
