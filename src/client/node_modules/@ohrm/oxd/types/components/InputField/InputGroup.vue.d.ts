declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    labelIcon: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    message: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    classes: {
        type: ObjectConstructor;
        default: () => {
            label: {};
            message: {};
            wrapper: {};
        };
    };
}, unknown, unknown, {
    rootClasses(): object;
    labelClasses(): object;
    messageClasses(): object;
    wrapperClasses(): object;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    labelIcon: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    message: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    classes: {
        type: ObjectConstructor;
        default: () => {
            label: {};
            message: {};
            wrapper: {};
        };
    };
}>>, {
    classes: Record<string, any>;
    label: string;
    message: string;
    labelIcon: string;
}>;
export default _default;
