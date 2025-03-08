declare const _default: import("vue").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    onSubmit: (e: Event) => void;
    fieldset: import("vue").Ref<import("../../composables/types.js").Fieldset>;
    errorbag: import("vue").Ref<import("../../composables/types.js").ErrorBag>;
    validate: () => Promise<void>;
    isProcessing: import("vue").ComputedRef<boolean>;
    isFromInvalid: import("vue").ComputedRef<boolean>;
    isFormBusy: import("vue").ComputedRef<boolean>;
    onReset: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submitValid" | "submitInvalid")[], "submitValid" | "submitInvalid", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onSubmitValid?: ((...args: any[]) => any) | undefined;
    onSubmitInvalid?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
}>;
export default _default;
