import type { PropType } from 'vue';
import type { TopMenuItem, User, Breadcrumb } from './types';
declare const _default: import("vue").DefineComponent<{
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    menuItems: {
        type: PropType<TopMenuItem[]>;
        required: false;
        default: () => never[];
    };
    user: {
        type: PropType<User>;
        required: false;
        default: () => {};
    };
    breadcrumb: {
        type: PropType<Breadcrumb>;
        required: false;
        default: () => {};
    };
}, unknown, unknown, {
    headerClasses(): object;
    bodyClasses(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "collapse"[], "collapse", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    menuItems: {
        type: PropType<TopMenuItem[]>;
        required: false;
        default: () => never[];
    };
    user: {
        type: PropType<User>;
        required: false;
        default: () => {};
    };
    breadcrumb: {
        type: PropType<Breadcrumb>;
        required: false;
        default: () => {};
    };
}>> & {
    onCollapse?: ((...args: any[]) => any) | undefined;
}, {
    toggle: boolean;
    menuItems: TopMenuItem[];
    user: User;
    breadcrumb: Breadcrumb;
}>;
export default _default;
