declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {}, {
    onClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
}>;
export default _default;
