declare const _default: import("vue").DefineComponent<{
    previous: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    next: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {
    classes(): object;
}, {}, import("vue").DefineComponent<{
    page: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
}>>, {
    page: number;
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    previous: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    next: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    selected: boolean;
    previous: boolean;
    next: boolean;
}>;
export default _default;
