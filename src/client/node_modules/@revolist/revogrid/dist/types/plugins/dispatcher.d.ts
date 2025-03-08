declare type Target = HTMLElement | Element | null;
/**
 * Dispatch custom event to element
 */
export declare function dispatch(target: Target, eventName: string, detail?: any): CustomEvent;
/**
 * Dispatch event by other event target
 */
export declare function dispatchOnEvent(e: MouseEvent | CustomEvent, eventName: string, detail?: any): CustomEvent;
export {};
