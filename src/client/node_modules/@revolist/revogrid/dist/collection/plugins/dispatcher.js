/*!
 * Built by Revolist
 */
/**
 * Dispatch custom event to element
 */
export function dispatch(target, eventName, detail) {
  const event = new CustomEvent(eventName, {
    detail,
    cancelable: true,
    bubbles: true,
  });
  target === null || target === void 0 ? void 0 : target.dispatchEvent(event);
  return event;
}
/**
 * Dispatch event by other event target
 */
export function dispatchOnEvent(e, eventName, detail) {
  e.preventDefault();
  return dispatch(e.target, eventName, detail);
}
