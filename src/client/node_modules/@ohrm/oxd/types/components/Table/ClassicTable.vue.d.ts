import type { PropType } from 'vue';
import type { Header, Selector, Item } from './types';
declare const _default: import("vue").DefineComponent<{
    selector: {
        type: PropType<Selector>;
        required: false;
        default: () => {
            width: string;
        };
    };
    headers: {
        type: PropType<Header[]>;
        required: false;
        default: () => never[];
    };
    items: {
        type: PropType<Item[]>;
        required: false;
        default: () => never[];
    };
    withStrip: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    clickable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selectable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
}, unknown, {
    checkedItems: number[];
    selectedAll: boolean;
}, {}, {
    onClick(item: any): (e: Event) => void;
    onClickCheckbox(item: any, e: Event): void;
    onChangeSelectAll(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickCheckbox" | "update:selected" | "update:selectAll")[], "click" | "clickCheckbox" | "update:selected" | "update:selectAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selector: {
        type: PropType<Selector>;
        required: false;
        default: () => {
            width: string;
        };
    };
    headers: {
        type: PropType<Header[]>;
        required: false;
        default: () => never[];
    };
    items: {
        type: PropType<Item[]>;
        required: false;
        default: () => never[];
    };
    withStrip: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    clickable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selectable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClickCheckbox?: ((...args: any[]) => any) | undefined;
    "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
    "onUpdate:selectAll"?: ((...args: any[]) => any) | undefined;
}, {
    selected: unknown[];
    clickable: boolean;
    headers: Header[];
    items: Item[];
    selectable: boolean;
    selector: Selector;
    withStrip: boolean;
}>;
export default _default;
