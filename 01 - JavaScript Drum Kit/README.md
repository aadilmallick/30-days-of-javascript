# What I learned

## Data-anything

A quick way to store data on HTML elements is to use the `data-` prefix attributes. The idea is that any attributes prefixed with `data-` are dummy placeholders for some other type of data that you want to persist through the DOM.

- Here we used the `data-key` attribute on our elements, so that we could refer to them in the DOM for our key codes.

### Dataset

The list of all `data-` attributes is stored on `this.dataset`, which is an object of all the `data-` attributes on the element specified by `this`.

- Also `element.dataset` returns the object of data attributes stored on a specified element.

## Audio

```js
const audio = new Audio("some_filepath_or_url");
audio.play();
```
