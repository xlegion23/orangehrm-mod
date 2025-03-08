import type { PropType } from 'vue';
import type MenuItem from './types';
declare const _default: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    menuItems: {
        type: PropType<MenuItem[]>;
        required: false;
        default: () => never[];
    };
}, {
    t: (key: string, fallback?: string) => string;
}, {
    searchTerm: string;
}, {
    classes(): object;
    filteredMenuItems(): MenuItem[];
}, {
    onClickCollapse(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "collapse"[], "collapse", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    menuItems: {
        type: PropType<MenuItem[]>;
        required: false;
        default: () => never[];
    };
}>> & {
    onCollapse?: ((...args: any[]) => any) | undefined;
}, {
    toggle: boolean;
    menuItems: MenuItem[];
    url: string;
}>;
export default _default;
