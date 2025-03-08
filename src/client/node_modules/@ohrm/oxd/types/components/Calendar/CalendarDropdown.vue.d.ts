declare const _default: import("vue").DefineComponent<{
    options: {
        type: ArrayConstructor;
        required: true;
    };
    selected: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, unknown, {
    isActive: boolean;
}, {}, {
    openSubmenu(): void;
    closeSubMenu(): void;
    onSelectOption(option: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: ArrayConstructor;
        required: true;
    };
    selected: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    selected: number;
}>;
export default _default;
