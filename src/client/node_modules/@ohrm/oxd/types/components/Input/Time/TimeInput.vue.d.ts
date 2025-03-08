declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    hasError: {
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
    placeholder: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, unknown, {
    open: boolean;
}, {
    timeIconClasses(): object;
    timeDisplay(): string | null;
}, {
    onFocusOut(): void;
    onTimeInput($event: Event): void;
    toggleDropdown(): void;
    openDropdown(): void;
    closeDropdown(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur" | "timeselect:opened" | "timeselect:closed")[], "update:modelValue" | "blur" | "timeselect:opened" | "timeselect:closed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    hasError: {
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
    placeholder: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onTimeselect:opened"?: ((...args: any[]) => any) | undefined;
    "onTimeselect:closed"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
    hasError: boolean;
    placeholder: string;
    step: number;
    readonly: boolean;
}>;
export default _default;
