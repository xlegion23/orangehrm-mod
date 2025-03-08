declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: true;
    };
    message: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    show: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    persistent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {
    classes(): object;
    contentClasses(): object;
}, {
    onClickToast(): void;
    onClickClose(e: Event): void;
}, import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: import("./types").ToastType) => boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: import("./types").ToastType) => boolean;
    };
}>>, {
    type: string;
}>, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: true;
    };
    message: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    show: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    persistent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}, {
    message: string;
    show: boolean;
    persistent: boolean;
}>;
export default _default;
