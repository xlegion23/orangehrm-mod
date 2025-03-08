import type { PropType } from 'vue';
import type { SubMenuItem, TopMenuItem } from './types';
declare const _default: import("vue").DefineComponent<{
    menuItem: {
        type: PropType<TopMenuItem>;
        required: true;
    };
}, {
    onClickMenu: ($event: MouseEvent, item: TopMenuItem | SubMenuItem) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menuItem: {
        type: PropType<TopMenuItem>;
        required: true;
    };
}>>, {}>;
export default _default;
