/**
 * Regular debounce function returns undefined and cannot be
 * used in promise chain. this debounce function will return
 * a promise and resolve it after set interval
 *
 * source:
 * https://stackoverflow.com/questions/35228052/debounce-function-implemented-with-promises
 *
 */
export default function promiseDebounce(exec: (...args: any[]) => Promise<any>, interval: number): () => ReturnType<typeof exec>;
