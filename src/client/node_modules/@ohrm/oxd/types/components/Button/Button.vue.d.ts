import type { ButtonSize, ButtonType } from './types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    displayType: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: ButtonType) => boolean;
    };
    size: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: ButtonSize) => boolean;
    };
    style: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    iconName: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    iconRightName: {
        type: StringConstructor;
        required: false;
        default: null;
    };
}, unknown, unknown, {
    classes(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    displayType: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: ButtonType) => boolean;
    };
    size: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: ButtonSize) => boolean;
    };
    style: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    iconName: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    iconRightName: {
        type: StringConstructor;
        required: false;
        default: null;
    };
}>>, {
    style: Record<string, any>;
    iconName: string;
    displayType: string;
    size: string;
    iconRightName: string;
}>;
export default _default;
