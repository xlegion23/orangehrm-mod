declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        required: true;
    };
    years: {
        type: ArrayConstructor;
        required: true;
    };
    months: {
        type: ArrayConstructor;
        required: true;
    };
}, unknown, unknown, {
    currentMonth(): number;
    currentYear(): number;
}, {
    calculateMonth(value: number): {
        month: any;
        year: any;
    };
    gotoPreviousMonth(): void;
    gotoNextMonth(): void;
    onSelectYear(year: number): void;
    onSelectMonth(month: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: true;
    };
    years: {
        type: ArrayConstructor;
        required: true;
    };
    months: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
