import type { AnimationSpec, LegendOptions, TooltipOptions } from 'chart.js';
import type { PropType } from 'vue';
import type { DataPoint } from './types';
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
    radius: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    cutout: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    animate: {
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
    customLegend: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    customTooltip: {
        type: BooleanConstructor;
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
    legend: {
        type: PropType<LegendOptions<"pie">>;
        required: false;
        default: () => null;
    };
    tooltip: {
        type: PropType<TooltipOptions<"pie">>;
        required: false;
        default: () => null;
    };
    animation: {
        type: PropType<AnimationSpec<"pie">>;
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
    radius: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    cutout: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    animate: {
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
    customLegend: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    customTooltip: {
        type: BooleanConstructor;
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
    legend: {
        type: PropType<LegendOptions<"pie">>;
        required: false;
        default: () => null;
    };
    tooltip: {
        type: PropType<TooltipOptions<"pie">>;
        required: false;
        default: () => null;
    };
    animation: {
        type: PropType<AnimationSpec<"pie">>;
        required: false;
        default: () => null;
    };
}>>, {
    classes: string | unknown[] | Record<string, any>;
    data: DataPoint[];
    legend: LegendOptions<"pie">;
    title: string;
    animate: boolean;
    width: string | number;
    height: string | number;
    wrapperClasses: string | unknown[] | Record<string, any>;
    radius: string | number;
    animation: AnimationSpec<"pie">;
    styles: Record<string, any>;
    wrapperStyles: Record<string, any>;
    responsive: boolean;
    aspectRatio: number | boolean;
    chartId: string;
    tooltip: TooltipOptions<"pie">;
    cutout: string | number;
    customLegend: boolean;
    customTooltip: boolean;
}>;
export default _default;
