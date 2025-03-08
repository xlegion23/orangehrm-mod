import type { VNode } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    showTabs: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    keepAlive: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    cacheAge: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "clickTab")[], "update:modelValue" | "clickTab", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    showTabs: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    keepAlive: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    cacheAge: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClickTab?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    animation: boolean;
    showTabs: boolean;
    keepAlive: boolean;
    cacheAge: number;
}>;
export default _default;
