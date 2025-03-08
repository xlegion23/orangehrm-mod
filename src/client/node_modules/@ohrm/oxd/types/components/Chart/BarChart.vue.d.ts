import type { PropType } from 'vue';
import type { DataPoint } from './types';
import type { AnimationSpec } from 'chart.js';
declare const _default: import("vue").DefineComponent<{
    styles: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    classes: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: null;
    };
    wrapperStyles: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    wrapperClasses: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: null;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    animate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    grid: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    xAxsis: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    yAxsis: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    responsive: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    aspectRatio: {
        type: (BooleanConstructor | NumberConstructor)[];
        required: false;
        default: boolean;
    };
    data: {
        type: PropType<DataPoint[]>;
        required: false;
        default: () => never[];
    };
    chartId: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    animation: {
        type: PropType<AnimationSpec<"bar">>;
        required: false;
        default: () => null;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    styles: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    classes: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: null;
    };
    wrapperStyles: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    wrapperClasses: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: null;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    animate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    grid: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    xAxsis: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    yAxsis: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    responsive: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    aspectRatio: {
        type: (BooleanConstructor | NumberConstructor)[];
        required: false;
        default: boolean;
    };
    data: {
        type: PropType<DataPoint[]>;
        required: false;
        default: () => never[];
    };
    chartId: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    animation: {
        type: PropType<AnimationSpec<"bar">>;
        required: false;
        default: () => null;
    };
}>>, {
    classes: string | unknown[] | Record<string, any>;
    data: DataPoint[];
    title: string;
    animate: boolean;
    width: string | number;
    height: string | number;
    wrapperClasses: string | unknown[] | Record<string, any>;
    animation: AnimationSpec<"bar">;
    styles: Record<string, any>;
    wrapperStyles: Record<string, any>;
    grid: boolean;
    xAxsis: boolean;
    yAxsis: boolean;
    responsive: boolean;
    aspectRatio: number | boolean;
    chartId: string;
}>;
export default _default;
