declare const _default: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        required: false;
        default: undefined;
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
}, unknown, {
    focused: boolean;
}, {
    classes(): object;
    dropdownIcon(): string;
    dropdownIconClasses(): object;
    tabIndex(): number;
}, {
    onFocus($e: Event): void;
    onBlur(): void;
    onToggle(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: false;
        default: undefined;
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
}>>, {
    value: string;
    disabled: boolean;
    hasError: boolean;
    readonly: boolean;
}>;
export default _default;
