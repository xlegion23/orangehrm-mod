declare const _default: import("vue").DefineComponent<{
    length: {
        type: NumberConstructor;
        required: true;
        validator: (val: number) => boolean;
    };
    max: {
        type: NumberConstructor;
        required: false;
        default: number;
        validator: (val: number) => boolean;
    };
    current: {
        type: NumberConstructor;
        required: false;
        default: number;
        validator: (val: number) => boolean;
    };
}, unknown, {
    pagePointer: number;
}, {
    currentPage: {
        get(): number;
        set(newValue: number): void;
    };
    showPrevious(): boolean;
    showNext(): boolean;
    pageItems(): Array<number>;
}, {
    onClickPrevious(e: Event): void;
    onClickPage(page: number, e: Event): void;
    onClickNext(e: Event): void;
    range(from: number, to: number): Array<number>;
}, import("vue").DefineComponent<{
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
}>, import("vue").ComponentOptionsMixin, ("previous" | "next" | "update:current" | "clickPage")[], "previous" | "next" | "update:current" | "clickPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    length: {
        type: NumberConstructor;
        required: true;
        validator: (val: number) => boolean;
    };
    max: {
        type: NumberConstructor;
        required: false;
        default: number;
        validator: (val: number) => boolean;
    };
    current: {
        type: NumberConstructor;
        required: false;
        default: number;
        validator: (val: number) => boolean;
    };
}>> & {
    onPrevious?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    onClickPage?: ((...args: any[]) => any) | undefined;
}, {
    max: number;
    current: number;
}>;
export default _default;
