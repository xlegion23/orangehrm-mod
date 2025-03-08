import type { Option } from '../types';
export declare const navigationMixin: import("vue").DefineComponent<{}, {}, {
    pointer: number;
    dropdownOpen: boolean;
}, {
    computedOptions(): Option[];
}, {
    onSelectDown(): void;
    onSelectUp(): void;
    onSelectEnter(): void;
    scrollToView(elm: HTMLElement): void;
    onKeypress($e: KeyboardEvent): void;
    openDropdown(): void;
    onSelect(option: Option): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default navigationMixin;
