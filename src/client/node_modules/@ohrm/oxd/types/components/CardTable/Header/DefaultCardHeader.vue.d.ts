import type { CardHeader, Order } from '../types';
declare const _default: import("vue").DefineComponent<{}, {
    tableProps: import("@/composables/useCardtable").TableProps;
    screenState: import("@/composables/useResponsive").ResponsiveState;
    showHeader: import("vue").ComputedRef<boolean>;
    checkIcon: import("vue").Ref<string>;
    checkedItems: import("vue").Ref<number[]>;
    selectedAll: import("vue").Ref<boolean>;
}, {}, {}, {
    onChangeSelectAll(): void;
    onColumnOrderChanged(order: Order, column: CardHeader): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
