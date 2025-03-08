export declare const DEVICE_XS = "xs";
export declare const DEVICE_SM = "sm";
export declare const DEVICE_MD = "md";
export declare const DEVICE_LG = "lg";
export declare const DEVICE_XL = "xl";
interface Breakpoint {
    [screenType: string]: {
        min: number;
        max: number;
    };
}
export interface ResponsiveState {
    windowWidth: number;
    windowHeight: number;
    screenType: string;
}
export declare const DEVICE_TYPES: {
    DEVICE_XS: string;
    DEVICE_SM: string;
    DEVICE_MD: string;
    DEVICE_LG: string;
    DEVICE_XL: string;
};
export declare const breakpoints: Breakpoint;
export default function useResponsive(): ResponsiveState;
export {};
