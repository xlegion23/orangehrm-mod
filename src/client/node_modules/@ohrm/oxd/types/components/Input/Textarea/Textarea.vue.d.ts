import type { TextareaResize } from './types';
export interface State {
    focused: boolean;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: null;
    };
    hasError: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    resize: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: TextareaResize) => boolean;
    };
}, unknown, State, {
    classes(): object;
}, {
    onFocus(e: Event): void;
    onBlur(e: Event): void;
    onInput(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur" | "focus" | "input")[], "input" | "update:modelValue" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: null;
    };
    hasError: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    resize: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: TextareaResize) => boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    hasError: boolean;
    resize: string;
}>;
export default _default;
