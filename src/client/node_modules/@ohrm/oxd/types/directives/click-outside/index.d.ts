import type { Directive, DirectiveBinding } from 'vue';
export declare type ClickOutsideHandler = (e: Event) => void;
export interface ClickOutsideBindingArgs {
    handler: ClickOutsideHandler;
}
export interface ClickOutsideDirectiveBinding extends DirectiveBinding {
    value: ClickOutsideHandler | ClickOutsideBindingArgs;
}
export interface ClickOutsideHTMLElement extends HTMLElement {
    _clickOutside?: ClickOutsideHandler;
}
declare const clickOutsideDirective: Directive;
export default clickOutsideDirective;
