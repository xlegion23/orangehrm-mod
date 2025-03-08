declare const _default: import("vue").DefineComponent<{
    item: {
        type: null;
        required: true;
    };
}, {
    tableProps: import("@/composables/useCardtable").TableProps;
    screenState: import("@/composables/useResponsive").ResponsiveState;
}, unknown, {
    showHeader(): boolean;
}, {}, import("vue").DefineComponent<{
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
        type: null;
        required: true;
    };
}>>, {}>;
export default _default;
