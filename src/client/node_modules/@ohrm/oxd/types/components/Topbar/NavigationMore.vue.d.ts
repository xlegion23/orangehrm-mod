import type { PropType } from 'vue';
import type { SubMenuItem, TopMenuItem } from './types';
declare const _default: import("vue").DefineComponent<{
    menuItems: {
        type: PropType<TopMenuItem[]>;
        required: false;
        default: () => never[];
    };
}, {
    t: (key: string, fallback?: string) => string;
    onClose: () => void;
    onClickMenu: ($event: MouseEvent, item: TopMenuItem | SubMenuItem, index: number) => void;
    expandedIndex: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menuItems: {
        type: PropType<TopMenuItem[]>;
        required: false;
        default: () => never[];
    };
}>>, {
    menuItems: TopMenuItem[];
}>;
export default _default;
