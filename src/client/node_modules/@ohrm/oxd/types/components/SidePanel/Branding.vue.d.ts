declare const _default: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    logoSrc: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    bannerSrc: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {
    classes(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    logoSrc: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    bannerSrc: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    toggle: boolean;
    url: string;
    logoSrc: string;
    bannerSrc: string;
}>;
export default _default;
