import type { ToastType } from './types';
export declare const toastMixin: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: ToastType) => boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: ToastType) => boolean;
    };
}>>, {
    type: string;
}>;
export default toastMixin;
