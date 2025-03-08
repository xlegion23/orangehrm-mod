declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    transparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        required: false;
        default: null;
    };
}, unknown, unknown, {
    classes(): {
        'oxd-chip': boolean;
        'oxd-chip--default': boolean;
        'oxd-chip--transparent': boolean;
    };
    style(): {
        backgroundColor: string;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    transparent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        required: false;
        default: null;
    };
}>>, {
    backgroundColor: string;
    transparent: boolean;
}>;
export default _default;
