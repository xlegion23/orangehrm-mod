declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("activate" | "deactivate")[], "activate" | "deactivate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onActivate?: ((...args: any[]) => any) | undefined;
    onDeactivate?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
}>;
export default _default;
