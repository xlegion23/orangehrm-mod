declare const _default: import("vue").DefineComponent<{
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
    clear: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
}, unknown, {
    focused: boolean;
}, {
    classes(): object;
}, {
    onFocus($e: Event): void;
    onBlur(): void;
    onClear(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clear"[], "clear", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    clear: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    onClear?: ((...args: any[]) => any) | undefined;
}, {
    style: Record<string, any>;
    disabled: boolean;
    hasError: boolean;
    clear: boolean;
    readonly: boolean;
}>;
export default _default;
