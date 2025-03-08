import type { ComponentPublicInstance } from 'vue';
declare const _default: import("vue").DefineComponent<{
    height: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    headers: {
        type: null;
        required: false;
        default: () => never[];
    };
    items: {
        type: null;
        required: false;
        default: () => never[];
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    columnCount: {
        type: NumberConstructor;
        required: false;
        default: null;
    };
    columnSize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    key: import("vue").ComputedRef<string>;
    classes: import("vue").ComputedRef<{
        'oxd-report-table': boolean;
        '--frame': boolean;
    }>;
    colSize: import("vue").ComputedRef<number>;
    vgridRef: import("vue").Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null>;
    tableRef: import("vue").Ref<HTMLElement | null>;
    scrollLeft: () => void;
    scrollRight: () => void;
    hasScrolling: import("vue").ComputedRef<boolean>;
    isFullScreen: import("vue").Ref<boolean>;
    rowDefinitions: import("vue").ComputedRef<any[]>;
    fullScreenIcon: import("vue").ComputedRef<"fullscreen-exit" | "arrows-fullscreen">;
    toggleFullScreen: () => void;
    onFullScreenChange: ($event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    headers: {
        type: null;
        required: false;
        default: () => never[];
    };
    items: {
        type: null;
        required: false;
        default: () => never[];
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    columnCount: {
        type: NumberConstructor;
        required: false;
        default: null;
    };
    columnSize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    height: number;
    headers: any;
    items: any;
    loading: boolean;
    columnCount: number;
    columnSize: number;
}>;
export default _default;
