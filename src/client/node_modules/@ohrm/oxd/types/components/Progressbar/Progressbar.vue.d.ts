import type { ProgressbarType } from './types';
declare const _default: import("vue").DefineComponent<{
    showLabel: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    progress: {
        type: NumberConstructor;
        required: false;
        default: number;
        validator: (value: number) => boolean;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: ProgressbarType) => boolean;
    };
}, unknown, unknown, {
    styles(): {
        width: string;
    };
    classes(): {
        [x: string]: boolean;
        'oxd-progressbar-ticker': boolean;
        '--striped': boolean;
        '--animated': boolean;
    };
    progressText(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    showLabel: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    progress: {
        type: NumberConstructor;
        required: false;
        default: number;
        validator: (value: number) => boolean;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: ProgressbarType) => boolean;
    };
}>>, {
    type: string;
    progress: number;
    animation: boolean;
    showLabel: boolean;
    stripe: boolean;
}>;
export default _default;
