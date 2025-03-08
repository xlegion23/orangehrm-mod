import type { Option } from '../types';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: PropType<Option[]>;
        required: false;
        default: () => never[];
    };
}, unknown, unknown, {}, {
    onClick(option: Option): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "chipRemoved"[], "chipRemoved", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: PropType<Option[]>;
        required: false;
        default: () => never[];
    };
}>> & {
    onChipRemoved?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    selected: Option[];
    readonly: boolean;
}>;
export default _default;
