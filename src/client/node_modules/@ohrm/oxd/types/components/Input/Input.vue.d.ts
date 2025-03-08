export interface State {
    focused: boolean;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    hasError: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, State, {
    classes(): object;
}, {
    onFocus(): void;
    onBlur(): void;
    onInput(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input")[], "input" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    hasError: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    hasError: boolean;
}>;
export default _default;
