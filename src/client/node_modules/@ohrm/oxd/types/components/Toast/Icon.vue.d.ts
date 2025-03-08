import type { ToastType } from './types';
declare const _default: import("vue").DefineComponent<{}, {}, {}, {
    iconWrapClasses(): object;
    iconName(): string;
}, {}, import("vue").DefineComponent<{
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
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
