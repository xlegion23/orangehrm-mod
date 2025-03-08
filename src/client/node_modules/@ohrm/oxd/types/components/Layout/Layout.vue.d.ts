import type { PropType } from 'vue';
import type MenuItem from '../SidePanel/types';
import type { TopMenuItem, User, Breadcrumb } from '../Topbar/types';
declare const _default: import("vue").DefineComponent<{
    user: {
        type: PropType<User>;
        required: true;
    };
    sidepanelMenuItems: {
        type: PropType<MenuItem[]>;
        required: true;
    };
    topbarMenuItems: {
        type: PropType<TopMenuItem[]>;
        required: true;
    };
    breadcrumb: {
        type: PropType<Breadcrumb>;
        required: true;
    };
    brandLogoSrc: {
        type: StringConstructor;
        required: true;
    };
    brandBannerSrc: {
        type: StringConstructor;
        required: true;
    };
    homeUrl: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, unknown, {
    collapse: boolean;
}, {
    containerClasses(): object;
}, {
    onCollapse(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    user: {
        type: PropType<User>;
        required: true;
    };
    sidepanelMenuItems: {
        type: PropType<MenuItem[]>;
        required: true;
    };
    topbarMenuItems: {
        type: PropType<TopMenuItem[]>;
        required: true;
    };
    breadcrumb: {
        type: PropType<Breadcrumb>;
        required: true;
    };
    brandLogoSrc: {
        type: StringConstructor;
        required: true;
    };
    brandBannerSrc: {
        type: StringConstructor;
        required: true;
    };
    homeUrl: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    homeUrl: string;
}>;
export default _default;
