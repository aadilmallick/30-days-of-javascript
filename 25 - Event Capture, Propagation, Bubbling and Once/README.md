# Event bubbling

1. capture: ripples down to the lowest child element, captures all of those events.
2. bubble: Starting from the lowest child element, bubbles up and activates the event on each child element.

## stopping propagation

The `e.stopPropagation()` method stops the event bubbling phase.

## `addEventListener` options

```js
div.addEventListener("click", () => {}, {
  capture: true,
  once: true,
});
```

- `capture` : runs events in the capturing down phase, instead of the bubbling up phase.
- `once` : runs events once, and then removes the event listener.
