import type { ButtonType } from './types';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    withContainer: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    displayType: {
        type: StringConstructor;
        required: false;
        default: null;
        validator: (value: ButtonType) => boolean;
    };
    iconType: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: string) => boolean;
    };
}, unknown, unknown, {
    classes(): object;
}, {
    onClick(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    withContainer: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    displayType: {
        type: StringConstructor;
        required: false;
        default: null;
        validator: (value: ButtonType) => boolean;
    };
    iconType: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    displayType: string;
    disabled: boolean;
    withContainer: boolean;
    iconType: string;
}>;
export default _default;
