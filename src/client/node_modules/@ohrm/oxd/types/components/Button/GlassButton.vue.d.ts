import type { GlassIconType } from './types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        required: false;
        default: null;
        validator: (value: GlassIconType) => boolean;
    };
}, unknown, unknown, {
    btnClasses(): object;
    iconClasses(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        required: false;
        default: null;
        validator: (value: GlassIconType) => boolean;
    };
}>>, {
    label: string;
    icon: string;
    disabled: boolean;
}>;
export default _default;
