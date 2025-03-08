import type { AlertType } from './types';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: AlertType) => boolean;
    };
    message: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    show: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {
    classes(): object;
    contentClasses(): object;
    iconName(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: AlertType) => boolean;
    };
    message: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    show: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    type: string;
    icon: string;
    show: boolean;
}>;
export default _default;
