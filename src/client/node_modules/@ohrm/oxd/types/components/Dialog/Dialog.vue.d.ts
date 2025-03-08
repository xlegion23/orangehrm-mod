declare const _default: import("vue").DefineComponent<{
    shadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    withClose: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    persistent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dialogContainer: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    withTransition: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    gutters: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, unknown, unknown, {
    classes(): object;
    computedTransition(): string;
}, {
    onClose(): void;
    onClickOverlay(): void;
    onClickSheet(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shadow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    withClose: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    persistent: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dialogContainer: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    withTransition: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    gutters: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}, {
    gutters: boolean;
    shadow: boolean;
    withClose: boolean;
    persistent: boolean;
    dialogContainer: string;
    withTransition: boolean;
}>;
export default _default;
