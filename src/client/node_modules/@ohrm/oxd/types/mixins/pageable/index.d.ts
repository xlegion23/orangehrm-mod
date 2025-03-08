export declare const pageableMixin: import("vue").DefineComponent<{
    page: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
}>>, {
    page: number;
}>;
export default pageableMixin;
