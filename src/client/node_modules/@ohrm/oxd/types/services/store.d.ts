export declare type Config<T extends string | number | symbol, K> = Record<T, K>;
export declare type Formats = 'displayFormat' | 'outputFormat';
export interface ConfigStore {
    date?: Config<Formats, string>;
    time?: Config<Formats, string>;
    colors?: Config<string, string>;
    language: Config<string, string>;
}
export declare type ConfigKey = keyof ConfigStore;
export declare type ConfigValue = {
    [key in keyof ConfigStore]: ConfigStore[key];
};
export declare type ConfigSetter = (config: ConfigStore) => ConfigValue;
/**
 * define any globally required config parameter
 */
export declare const store: import("vue").Ref<{
    date?: {
        displayFormat: string;
        outputFormat: string;
    } | undefined;
    time?: {
        displayFormat: string;
        outputFormat: string;
    } | undefined;
    colors?: Config<string, string> | undefined;
    language: Config<string, string>;
}>;
export declare const getConfig: (key: ConfigKey) => Config<string, string> | {
    displayFormat: string;
    outputFormat: string;
} | undefined;
export declare const setConfig: (value: ConfigValue | ConfigSetter) => void;
export declare const mergeConfig: (value: ConfigValue | ConfigSetter) => void;
