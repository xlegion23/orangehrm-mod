declare const _default: import("vue").DefineComponent<{
    item: {
        type: StringConstructor;
        required: true;
    };
}, {
    t: (key: string, fallback?: string) => string;
    showHeader: import("vue").ComputedRef<boolean>;
    screenState: import("@/composables/useResponsive").ResponsiveState;
    isCollapsed: import("vue").Ref<boolean>;
    canCollapse: import("vue").ComputedRef<boolean>;
    truncatedText: import("vue").ComputedRef<string>;
    toggleCollapse: () => boolean;
}, unknown, {}, {}, import("vue").DefineComponent<{
    header: {
        type: import("vue").PropType<import("../types.js").CardHeader>;
        default: () => {
            name: string;
        };
    };
    rowItem: {
        type: import("vue").PropType<import("../types.js").RowItem>;
        default: () => {};
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: import("vue").PropType<import("../types.js").CardHeader>;
        default: () => {
            name: string;
        };
    };
    rowItem: {
        type: import("vue").PropType<import("../types.js").RowItem>;
        default: () => {};
    };
}>>, {
    header: import("../types.js").CardHeader;
    rowItem: import("../types.js").RowItem;
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
export default _default;
