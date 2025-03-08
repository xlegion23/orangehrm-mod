declare const _default: import("vue").DefineComponent<{
    item: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: true;
    };
}, {
    screenState: import("../../../composables/useResponsive.js").ResponsiveState;
    tableProps: import("@/composables/useCardtable").TableProps;
    checkState: import("vue").WritableComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isSelectable: import("vue").ComputedRef<boolean>;
}, unknown, {}, {
    onClickCheckbox(item: any, e: Event): void;
}, import("vue").DefineComponent<{
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
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        required: true;
    };
}>>, {}>;
export default _default;
