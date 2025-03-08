import type { Tags, TextTypes } from './types';
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Tags) => boolean;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: null;
        validator: (value?: TextTypes) => boolean;
    };
}, unknown, unknown, {
    classes(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Tags) => boolean;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: null;
        validator: (value?: TextTypes) => boolean;
    };
}>>, {
    tag: string;
    type: string;
}>;
export default _default;
