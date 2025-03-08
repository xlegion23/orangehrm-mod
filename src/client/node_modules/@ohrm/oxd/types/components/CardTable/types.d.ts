import type { Properties } from 'csstype';
import type { ConcreteComponent, Directive, VNodeProps } from 'vue';
export interface CardHeader extends StyleProps {
    name: string;
    title: string;
    slot?: string;
    cellType?: string;
    cellConfig?: ActionsCellConfig<RowItem>;
    sortField?: string;
    cellRenderer?: cellRenderCallback;
}
export declare type cellRenderCallback = (index: number, item: RowItem, header: CardHeader, rowItems: RowItem) => {
    component?: ConcreteComponent;
    props?: VNodeProps;
    directives?: Directive[];
};
export declare type CardHeaders = Array<CardHeader>;
export declare type CardSelector = StyleProps;
export interface StyleProps {
    style?: StyleAttribute;
    class?: ClassAttribute;
}
export declare type ClassAttribute = ObjectClass | ArrayClass;
export interface ObjectClass {
    [key: string]: boolean;
}
export declare type ArrayClass = Array<ObjectClass | string>;
export declare type StyleAttribute = Properties;
export declare type Order = 'ASC' | 'DESC' | 'DEFAULT';
export interface SortDefinition {
    [column: string]: Order;
}
export interface ActionsCellConfig<T> {
    [key: string]: Action<T>;
}
export declare type ActionsCellConfigOnClickFunction<T> = (rowItem: T, e: Event) => void;
export interface Action<T> {
    onClick?: ActionsCellConfigOnClickFunction<T>;
    component?: string;
    props?: VNodeProps;
}
export interface RowItem {
    [key: string]: any;
    isSelectable?: boolean;
    isDisabled?: boolean;
}
export interface ActionCellEvent extends MouseEvent {
    context?: string;
}
export declare type DropdownOption = {
    label: string;
    context: string;
};
