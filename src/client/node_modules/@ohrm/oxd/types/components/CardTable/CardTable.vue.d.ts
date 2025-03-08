import type { PropType } from 'vue';
import type { CardHeaders, SortDefinition, RowItem } from './types';
declare const _default: import("vue").DefineComponent<{
    selector: {
        type: PropType<import("./types").StyleProps>;
        required: false;
        default: () => {};
    };
    headers: {
        type: PropType<CardHeaders>;
        required: false;
        default: () => never[];
    };
    items: {
        type: PropType<RowItem>;
        required: false;
        default: () => never[];
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
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: PropType<number[]>;
        required: false;
        default: () => never[];
    };
    decorator: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    order: {
        type: PropType<SortDefinition>;
        required: false;
        default: () => {};
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tableId: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
}, void, unknown, {
    tableDeco(): {
        headerDecorator: string;
        bodyDecorator: string;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickCheckbox" | "update:order" | "update:selected" | "update:selectAll")[], "click" | "clickCheckbox" | "update:order" | "update:selected" | "update:selectAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selector: {
        type: PropType<import("./types").StyleProps>;
        required: false;
        default: () => {};
    };
    headers: {
        type: PropType<CardHeaders>;
        required: false;
        default: () => never[];
    };
    items: {
        type: PropType<RowItem>;
        required: false;
        default: () => never[];
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
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selected: {
        type: PropType<number[]>;
        required: false;
        default: () => never[];
    };
    decorator: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    order: {
        type: PropType<SortDefinition>;
        required: false;
        default: () => {};
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tableId: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClickCheckbox?: ((...args: any[]) => any) | undefined;
    "onUpdate:order"?: ((...args: any[]) => any) | undefined;
    "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
    "onUpdate:selectAll"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    selected: number[];
    clickable: boolean;
    tableId: string;
    headers: CardHeaders;
    items: RowItem;
    selectable: boolean;
    selector: import("./types").StyleProps;
    order: SortDefinition;
    decorator: string;
    loading: boolean;
}>;
export default _default;
