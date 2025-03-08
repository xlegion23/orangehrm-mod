declare const _default: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    collapsed: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    icon: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, unknown, unknown, {
    menuClasses(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    collapsed: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    icon: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    name: string;
    icon: string;
    active: boolean;
    url: string;
    collapsed: boolean;
}>;
export default _default;
