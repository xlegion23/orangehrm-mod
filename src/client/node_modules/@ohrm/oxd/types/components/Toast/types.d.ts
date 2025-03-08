export declare const TYPE_DEFAULT = "default";
export declare const TYPE_SUCCESS = "success";
export declare const TYPE_WARN = "warn";
export declare const TYPE_ERROR = "error";
export declare const TYPE_INFO = "info";
export declare const TOAST_TYPES: {
    TYPE_DEFAULT: string;
    TYPE_SUCCESS: string;
    TYPE_WARN: string;
    TYPE_ERROR: string;
    TYPE_INFO: string;
};
export declare const TYPES: string[];
export declare const POSITION_TOP = "top";
export declare const POSITION_BOTTOM = "bottom";
export declare const POSITIONS: string[];
export declare const ICON_MAP: {
    default: string;
    success: string;
    warn: string;
    error: string;
    info: string;
};
export declare type ToastType = typeof TYPE_DEFAULT | typeof TYPE_SUCCESS | typeof TYPE_WARN | typeof TYPE_ERROR | typeof TYPE_INFO;
export declare type ToastContainerPositions = typeof POSITION_TOP | typeof POSITION_BOTTOM;
export interface Toast {
    type: ToastType;
    title: string;
    message?: string;
    show: boolean;
    persistent?: boolean;
}
