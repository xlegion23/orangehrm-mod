export declare const TYPE_DEFAULT = "default";
export declare const TYPE_SUCCESS = "success";
export declare const TYPE_WARN = "warn";
export declare const TYPE_ERROR = "error";
export declare const TYPE_INFO = "info";
export declare const TYPES: string[];
export declare const ICON_MAP: {
    default: string;
    success: string;
    warn: string;
    error: string;
    info: string;
};
export declare type AlertType = typeof TYPE_DEFAULT | typeof TYPE_SUCCESS | typeof TYPE_WARN | typeof TYPE_ERROR | typeof TYPE_INFO;
