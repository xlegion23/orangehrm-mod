import type { Action, RowItem, ActionCellEvent } from '../types';
declare const _default: import("vue").DefineComponent<{
    item: {
        type: null;
        required: false;
        default: () => undefined;
    };
}, {
    tableProps: import("@/composables/useCardtable").TableProps;
    screenState: import("../../../composables/useResponsive").ResponsiveState;
}, unknown, {
    actions(): object;
    isDisabled(): boolean;
}, {
    onClickAction(action: Action<RowItem>, key: string, e: ActionCellEvent): void;
    getProps(action: Action<RowItem>, key: string): {
        [x: string]: unknown;
    };
    getComponent(action: Action<RowItem>, key: string): string;
}, import("vue").DefineComponent<{
    header: {
        type: import("vue").PropType<import("../types").CardHeader>;
        default: () => {
            name: string;
        };
    };
    rowItem: {
        type: import("vue").PropType<RowItem>;
        default: () => {};
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: import("vue").PropType<import("../types").CardHeader>;
        default: () => {
            name: string;
        };
    };
    rowItem: {
        type: import("vue").PropType<RowItem>;
        default: () => {};
    };
}>>, {
    header: import("../types").CardHeader;
    rowItem: RowItem;
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: null;
        required: false;
        default: () => undefined;
    };
}>>, {
    item: any;
}>;
export default _default;
