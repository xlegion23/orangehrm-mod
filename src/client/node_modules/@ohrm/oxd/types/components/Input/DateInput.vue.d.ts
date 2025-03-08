import type { PropType } from 'vue';
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
    ioformat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    displayFormat: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    value: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    locale: {
        type: PropType<globalThis.Locale>;
        required: false;
        default: () => globalThis.Locale;
    };
}, {
    open: import("vue").Ref<boolean>;
    dateTyped: import("vue").Ref<string | null>;
    t: (key: string, fallback?: string) => string;
}, unknown, {
    dateSelected: {
        get(): Date | undefined;
        set(value: Date): void;
    };
    displayDate(): string | null;
    dateFormat(): string;
    dateIconClasses(): object;
}, {
    onBlur(e: Event): void;
    onDateTyped(value: string): void;
    onDateSelected(): void;
    toggleDropdown(): void;
    openDropdown(): void;
    closeDropdown(): void;
    onClickToday(): void;
    onClickClear(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur" | "dateselect:opened" | "dateselect:closed")[], "update:modelValue" | "blur" | "dateselect:opened" | "dateselect:closed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    ioformat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    displayFormat: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    value: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    locale: {
        type: PropType<globalThis.Locale>;
        required: false;
        default: () => globalThis.Locale;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onDateselect:opened"?: ((...args: any[]) => any) | undefined;
    "onDateselect:closed"?: ((...args: any[]) => any) | undefined;
}, {
    value: string;
    disabled: boolean;
    modelValue: string;
    hasError: boolean;
    locale: globalThis.Locale;
    displayFormat: string;
    placeholder: string;
    readonly: boolean;
    ioformat: string;
}>;
export default _default;
