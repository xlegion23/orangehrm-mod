import type { Position } from './types';
export interface State {
    focused: boolean;
    checkedProxy: any;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: null;
        required: false;
        default: undefined;
    };
    style: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    hasError: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    optionLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Position) => boolean;
    };
}, unknown, State, {
    classes(): object;
    checked: {
        get(): any;
        set(value: unknown): void;
    };
}, {
    onFocus(e: Event): void;
    onBlur(e: Event): void;
    onChange(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur" | "focus" | "change")[], "update:modelValue" | "blur" | "focus" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: null;
        required: false;
        default: undefined;
    };
    style: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    hasError: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    optionLabel: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Position) => boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    style: Record<string, any>;
    disabled: boolean;
    modelValue: any;
    hasError: boolean;
    optionLabel: string;
    labelPosition: string;
}>;
export default _default;
