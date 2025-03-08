interface State {
    hour: string;
    minute: string;
    period: string;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    hour: import("vue").Ref<string>;
    minute: import("vue").Ref<string>;
    period: import("vue").Ref<string>;
    onChange: ($event: Event, type: string) => void;
    increment: (step: number, type: keyof State) => void;
    decrement: (step: number, type: keyof State) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    step: number;
}>;
export default _default;
