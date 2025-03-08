import type { CardHeader } from '../types';
declare const _default: import("vue").DefineComponent<{}, {
    tableProps: import("@/composables/useCardtable").TableProps;
    screenState: import("../../../composables/useResponsive").ResponsiveState;
}, {}, {
    classes(): object;
    defaultSlot(): Array<CardHeader>;
    items(): Array<object>;
}, {
    onClick(item: any): (e: Event) => void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
