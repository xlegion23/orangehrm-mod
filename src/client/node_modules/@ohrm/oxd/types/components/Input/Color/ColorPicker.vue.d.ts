declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
}, {
    hue: import("vue").Ref<number>;
    sat: import("vue").Ref<number>;
    val: import("vue").Ref<number>;
    pickEnabled: import("vue").Ref<boolean>;
    t: (key: string, fallback?: string) => string;
    captureOn: ($e: MouseEvent | TouchEvent) => void;
    pickColor: ($e: MouseEvent | TouchEvent) => void;
    onHexInput: (value: string | null) => void;
    onHueChange: ($e: Event) => void;
    colorPalette: import("vue").Ref<HTMLCanvasElement | undefined>;
    indicatorStyles: import("vue").ComputedRef<{
        top?: undefined;
        left?: undefined;
    } | {
        top: string;
        left: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
}>;
export default _default;
