import type { PropType } from 'vue';
import type { Types, Components } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: null;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    labelIcon: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Types) => boolean;
    };
    errors: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Types) => boolean;
    };
    rules: {
        type: PropType<any>;
        required: false;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    message: import("vue").ComputedRef<string | null>;
    hasError: import("vue").ComputedRef<boolean>;
}, unknown, {
    classes(): object;
    component(): Components;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: null;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    labelIcon: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Types) => boolean;
    };
    errors: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Types) => boolean;
    };
    rules: {
        type: PropType<any>;
        required: false;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    required: boolean;
    label: string;
    disabled: boolean;
    errors: string;
    rules: any;
    labelIcon: string;
}>;
export default _default;
