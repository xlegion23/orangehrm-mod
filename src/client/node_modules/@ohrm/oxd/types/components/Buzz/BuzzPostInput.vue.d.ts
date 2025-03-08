import type { PropType } from 'vue';
import type { Rule } from '@/composables/types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rules: {
        type: PropType<Rule[]>;
        required: false;
        default: () => never[];
    };
}, {
    onBlur: () => void;
    classes: import("vue").ComputedRef<{
        'oxd-buzz-post': boolean;
        'oxd-buzz-post--focus': boolean;
        'oxd-buzz-post--error': boolean;
        'oxd-buzz-post--active': boolean;
        'oxd-buzz-post--disabled': boolean;
        'oxd-buzz-post--composing': string;
    }>;
    message: import("vue").ComputedRef<string | null>;
    onFocus: () => void;
    onInput: ($e: Event) => void;
    hasError: import("vue").ComputedRef<boolean>;
    textArea: import("vue").Ref<HTMLTextAreaElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rules: {
        type: PropType<Rule[]>;
        required: false;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
    rules: Rule[];
}>;
export default _default;
