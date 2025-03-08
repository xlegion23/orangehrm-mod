import type { PropType } from 'vue';
import type { Option } from '../types';
declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    selected: {
        type: PropType<Option[]>;
        require: boolean;
        default: () => never[];
    };
}, unknown, unknown, {}, {
    onClick(option: Option): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "chipRemoved"[], "chipRemoved", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    selected: {
        type: PropType<Option[]>;
        require: boolean;
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
