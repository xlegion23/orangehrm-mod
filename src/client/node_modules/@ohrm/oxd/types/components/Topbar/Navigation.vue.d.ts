import type { TopMenuItem } from './types';
import type { PropType, ComponentPublicInstance } from 'vue';
declare const _default: import("vue").DefineComponent<{
    menuItems: {
        type: PropType<TopMenuItem[]>;
        required: false;
        default: () => never[];
    };
}, {
    width: import("vue").Ref<number>;
    navbar: import("vue").Ref<HTMLElement | undefined>;
    setMenuItem: ($el: ComponentPublicInstance | null) => undefined;
    menuClasses: import("vue").ComputedRef<{
        'oxd-topbar-body-nav-tab': boolean;
        '--parent': boolean;
        '--visited': boolean;
    }[]>;
    menuItemsRefs: import("vue").Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>[]>;
    hiddenMenuItems: import("vue").Ref<{
        name: string;
        url: string;
        active: boolean;
        children: {
            name: string;
            url: string;
        }[];
    }[]>;
    visibleMenuItems: import("vue").Ref<{
        name: string;
        url: string;
        active: boolean;
        children: {
            name: string;
            url: string;
        }[];
    }[]>;
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
