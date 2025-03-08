export declare type Legend = {
    enable: boolean;
    align?: 'start' | 'center' | 'end';
    fullSize?: boolean;
    position?: 'center' | 'left' | 'top' | 'right' | 'bottom' | 'chartArea';
};
export declare type Tooltip = {
    enable: boolean;
    position?: 'average' | 'nearest';
    titleColor?: string | null;
    backgroundColor?: string | null;
};
export declare type Animation = {
    enable: boolean;
    loop?: boolean;
    delay?: number;
    duration?: number;
    easing?: 'linear' | 'easeInSine' | 'easeOutSine' | 'easeInBounce' | 'easeOutBounce';
};
export declare type DataPoint = {
    label: string;
    value: number;
    color: string;
    legend?: {
        enable?: boolean;
        order?: number;
        label?: string | null;
    };
    Tooltip?: {
        enable?: boolean;
        order?: number;
        label?: string | null;
    };
};
export declare const COLOR_TART_ORANGE = "#FB5255";
export declare const COLOR_FANDANGO_PINK = "#E64980";
export declare const COLOR_MEDIUM_ORCHID = "#BE4BDB";
export declare const COLOR_MAJORELLE_BLUE = "#7A50F2";
export declare const COLOR_BLEU_DE_FRANCE = "#228BE6";
export declare const COLOR_PACIFIC_BLUE = "#0FAAC0";
export declare const COLOR_MOUNTAIN_MEADOW = "#12B886";
export declare const COLOR_YELLOW_GREEN = "#81C91D";
export declare const COLOR_CHROME_YELLOW = "#FFAA00";
export declare const COLOR_HEAT_WAVE = "#FE7D15";
export declare type ChartColor = typeof COLOR_TART_ORANGE | typeof COLOR_FANDANGO_PINK | typeof COLOR_MEDIUM_ORCHID | typeof COLOR_MAJORELLE_BLUE | typeof COLOR_BLEU_DE_FRANCE | typeof COLOR_PACIFIC_BLUE | typeof COLOR_MOUNTAIN_MEADOW | typeof COLOR_YELLOW_GREEN | typeof COLOR_CHROME_YELLOW | typeof COLOR_HEAT_WAVE;
export declare const CHART_COLORS: {
    COLOR_TART_ORANGE: string;
    COLOR_FANDANGO_PINK: string;
    COLOR_MEDIUM_ORCHID: string;
    COLOR_MAJORELLE_BLUE: string;
    COLOR_BLEU_DE_FRANCE: string;
    COLOR_PACIFIC_BLUE: string;
    COLOR_MOUNTAIN_MEADOW: string;
    COLOR_YELLOW_GREEN: string;
    COLOR_CHROME_YELLOW: string;
    COLOR_HEAT_WAVE: string;
};
