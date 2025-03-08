declare const _default: import("vue").DefineComponent<{
    order: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
}, {
    t: (key: string, fallback?: string) => string;
}, {
    isActive: boolean;
}, {
    sortIcon(): string;
    classes(): object;
}, {
    openDropdown(): void;
    closeDropdown(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "order"[], "order", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    order: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
}>> & {
    onOrder?: ((...args: any[]) => any) | undefined;
}, {
    order: string;
}>;
export default _default;
