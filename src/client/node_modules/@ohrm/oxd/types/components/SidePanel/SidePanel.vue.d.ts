import type MenuItem from './types';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    brandLogoSrc: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    brandBannerSrc: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    homeUrl: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    menuItems: {
        type: PropType<MenuItem[]>;
        required: false;
        default: () => never[];
    };
}, unknown, unknown, {
    classes(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "collapse"[], "collapse", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    brandLogoSrc: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    brandBannerSrc: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    homeUrl: {
        type: StringConstructor;
        required: false;
        default: string;
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
    brandLogoSrc: string;
    brandBannerSrc: string;
    homeUrl: string;
}>;
export default _default;
