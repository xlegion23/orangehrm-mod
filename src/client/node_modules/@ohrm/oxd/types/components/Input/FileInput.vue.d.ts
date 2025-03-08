export interface State {
    focused: boolean;
    inputValue: string;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => null;
    };
    style: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    hasError: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    buttonLabel: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    buttonIcon: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    t: (key: string, fallback?: string) => string;
}, State, {
    classes(): object;
    fileInputClasses(): object;
    placeholderText(): string;
}, {
    onClick(e: Event): void;
    onFocus(e: Event): void;
    onBlur(e: Event): void;
    onInput(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue" | "blur" | "focus" | "input")[], "input" | "click" | "update:modelValue" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => null;
    };
    style: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    hasError: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    buttonLabel: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    buttonIcon: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    style: Record<string, any>;
    disabled: boolean;
    modelValue: Record<string, any>;
    hasError: boolean;
    placeholder: string;
    readonly: boolean;
    buttonLabel: string;
    buttonIcon: string;
}>;
export default _default;
