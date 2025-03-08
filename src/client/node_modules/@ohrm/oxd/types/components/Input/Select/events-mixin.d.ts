import type { Option } from '../types';
export declare const eventsMixin: import("vue").DefineComponent<Readonly<{
    disabled?: any;
    modelValue?: any;
}>, unknown, {
    pointer: number;
    dropdownOpen: boolean;
}, {}, {
    onOpenDropdown(): void;
    onCloseDropdown(): void;
    onBlur(): void;
    onSelect(option: Option): void;
    onRemoveSelected(option: Option): void;
    onClear(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dropdown:opened" | "dropdown:closed" | "dropdown:blur" | "dropdown:clear")[], "update:modelValue" | "dropdown:opened" | "dropdown:closed" | "dropdown:blur" | "dropdown:clear", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    disabled?: any;
    modelValue?: any;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onDropdown:opened"?: ((...args: any[]) => any) | undefined;
    "onDropdown:closed"?: ((...args: any[]) => any) | undefined;
    "onDropdown:blur"?: ((...args: any[]) => any) | undefined;
    "onDropdown:clear"?: ((...args: any[]) => any) | undefined;
}, {
    readonly disabled?: any;
    readonly modelValue?: any;
}>;
export default eventsMixin;
