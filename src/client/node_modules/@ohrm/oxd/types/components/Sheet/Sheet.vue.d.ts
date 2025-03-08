import type { SheetType } from './types';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: SheetType) => boolean;
    };
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    gutters: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {
    classes(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: SheetType) => boolean;
    };
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    gutters: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    type: string;
    rounded: boolean;
    gutters: boolean;
}>;
export default _default;
