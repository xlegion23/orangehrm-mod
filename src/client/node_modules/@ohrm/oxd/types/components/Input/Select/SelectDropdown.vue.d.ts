declare const _default: import("vue").DefineComponent<{
    empty: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: null;
    };
}, {
    t: (key: string, fallback?: string) => string;
}, unknown, {
    placeholderText(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    empty: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    empty: boolean;
    emptyText: string;
}>;
export default _default;
