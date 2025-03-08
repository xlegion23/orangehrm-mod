import type { PropType } from 'vue';
import type { DataPoint } from './types';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<DataPoint[]>;
        required: false;
        default: () => never[];
    };
}, unknown, {
    toggledIndices: number[];
}, {
    labels(): (string | null | undefined)[];
    keyStyles(): {
        backgroundColor: string;
    }[];
    labelStyles(): {
        textDecoration: string;
    }[];
}, {
    onClickKey(index: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<DataPoint[]>;
        required: false;
        default: () => never[];
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    data: DataPoint[];
}>;
export default _default;
