import type { RowItem, CardHeader } from '../types';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    index: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    headers: {
        type: PropType<CardHeader[]>;
        required: false;
        default: () => never[];
    };
    items: {
        type: PropType<RowItem>;
        required: false;
        default: () => {};
    };
}, {
    tableProps: import("@/composables/useCardtable").TableProps;
    screenState: import("@/composables/useResponsive").ResponsiveState;
}, unknown, {
    isMobile(): boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    index: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    headers: {
        type: PropType<CardHeader[]>;
        required: false;
        default: () => never[];
    };
    items: {
        type: PropType<RowItem>;
        required: false;
        default: () => {};
    };
}>>, {
    index: number;
    headers: CardHeader[];
    items: RowItem;
}>;
export default _default;
