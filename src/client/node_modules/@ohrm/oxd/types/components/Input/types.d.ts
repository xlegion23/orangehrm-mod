export interface OutputFile extends Pick<File, 'name' | 'type' | 'size'> {
    base64: string;
}
export declare const LEFT = "left";
export declare const RIGHT = "right";
export declare const TOP = "top";
export declare const BOTTOM = "bottom";
export declare const LABEL_POSITIONS: string[];
export declare const DROPDOWN_POSITIONS: string[];
export declare const COLOR_DROPDOWN_POSITIONS: string[];
export declare type Position = typeof LEFT | typeof RIGHT | typeof TOP | typeof BOTTOM;
export interface Option {
    id: number;
    label: string;
    [key: string]: any;
}
export declare type DropdownOptions = Array<Option>;
