import type { ToastContainerPositions } from './types';
declare const _default: import("vue").DefineComponent<{
    toasts: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    transition: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    toastClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    position: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: ToastContainerPositions) => boolean;
    };
}, unknown, unknown, {
    classes(): object;
}, {
    onUpdateShow(state: boolean, index: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:toasts"[], "update:toasts", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    toasts: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    transition: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    toastClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    position: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: ToastContainerPositions) => boolean;
    };
}>> & {
    "onUpdate:toasts"?: ((...args: any[]) => any) | undefined;
}, {
    transition: string;
    position: string;
    toasts: unknown[];
    toastClass: string;
}>;
export default _default;
