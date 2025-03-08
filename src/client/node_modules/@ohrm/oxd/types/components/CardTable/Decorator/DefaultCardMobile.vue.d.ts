import type { CardHeaders } from '../types';
declare const _default: import("vue").DefineComponent<{}, {
    tableProps: import("@/composables/useCardtable").TableProps;
    screenState: import("../../../composables/useResponsive").ResponsiveState;
}, {}, {
    classes(): object;
    defaultSlot(): CardHeaders;
    titleSlot(): CardHeaders;
    actionSlot(): CardHeaders;
    footerSlot(): CardHeaders;
    leftSlot(): CardHeaders;
    rightSlot(): CardHeaders;
}, {
    onClick(item: any): (e: Event) => void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
