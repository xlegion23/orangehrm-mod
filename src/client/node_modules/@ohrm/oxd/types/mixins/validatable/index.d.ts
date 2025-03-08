export declare const validatableMixin: import("vue").DefineComponent<{
    rules: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, unknown, {
    errorBucket: string[];
}, {}, {
    validate(value?: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rules: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>>, {
    rules: unknown[];
}>;
export default validatableMixin;
