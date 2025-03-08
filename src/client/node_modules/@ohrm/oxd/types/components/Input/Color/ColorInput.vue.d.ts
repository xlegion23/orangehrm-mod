import type { Position } from '../types';
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
    dropdownPosition: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Position) => boolean;
    };
}, {
    open: import("vue").Ref<boolean>;
    focused: import("vue").Ref<boolean>;
    tabIndex: import("vue").ComputedRef<-1 | 0>;
    classes: import("vue").ComputedRef<{
        'oxd-color-input': boolean;
        'oxd-color-input--active': boolean;
        'oxd-color-input--focus': boolean;
        'oxd-color-input--error': boolean;
        'oxd-color-input--disabled': boolean;
        'oxd-color-input--readonly': boolean;
    }>;
    previewStyles: import("vue").ComputedRef<{
        backgroundColor: string;
        opacity: number;
        cursor: string;
    }>;
    dropdownClasses: import("vue").ComputedRef<{
        '--positon-right': boolean;
        '--positon-left': boolean;
    }>;
    onBlur: () => void;
    onFocus: ($e: Event) => void;
    onClose: () => void;
    onClick: ($e: Event) => void;
    onEnter: ($e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    dropdownPosition: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Position) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
    hasError: boolean;
    readonly: boolean;
    dropdownPosition: string;
}>;
export default _default;
