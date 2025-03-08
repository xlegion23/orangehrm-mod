import type { Option, Position } from '../types';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => null;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    options: {
        type: PropType<Option[]>;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    showEmptySelector: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    dropdownPosition: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Position) => boolean;
    };
}, {
    t: (key: string, fallback?: string) => string;
}, {
    focused: boolean;
    loading: boolean;
    searchTerm: null;
    dropdownOpen: boolean;
}, {
    computedOptions(): Option[];
    dropdownClasses(): object;
    optionClasses(): object[];
    selectedItem(): string;
    inputValue(): string;
    placeholderText(): string;
}, {}, import("vue").DefineComponent<Readonly<{
    disabled?: any;
    modelValue?: any;
}>, unknown, {
    pointer: number;
    dropdownOpen: boolean;
}, {}, {
    onOpenDropdown(): void;
    onCloseDropdown(): void;
    onBlur(): void;
    onSelect(option: Option): void;
    onRemoveSelected(option: Option): void;
    onClear(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dropdown:opened" | "dropdown:closed" | "dropdown:blur" | "dropdown:clear")[], "update:modelValue" | "dropdown:opened" | "dropdown:closed" | "dropdown:blur" | "dropdown:clear", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    disabled?: any;
    modelValue?: any;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onDropdown:opened"?: ((...args: any[]) => any) | undefined;
    "onDropdown:closed"?: ((...args: any[]) => any) | undefined;
    "onDropdown:blur"?: ((...args: any[]) => any) | undefined;
    "onDropdown:clear"?: ((...args: any[]) => any) | undefined;
}, {
    readonly disabled?: any;
    readonly modelValue?: any;
}> | import("vue").DefineComponent<{}, {}, {
    pointer: number;
    dropdownOpen: boolean;
}, {
    computedOptions(): Option[];
}, {
    onSelectDown(): void;
    onSelectUp(): void;
    onSelectEnter(): void;
    scrollToView(elm: HTMLElement): void;
    onKeypress($e: KeyboardEvent): void;
    openDropdown(): void;
    onSelect(option: Option): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dropdown:opened" | "dropdown:closed" | "dropdown:blur" | "dropdown:clear")[], "update:modelValue" | "dropdown:opened" | "dropdown:closed" | "dropdown:blur" | "dropdown:clear", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => null;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    options: {
        type: PropType<Option[]>;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    showEmptySelector: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    dropdownPosition: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (value: Position) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onDropdown:opened"?: ((...args: any[]) => any) | undefined;
    "onDropdown:closed"?: ((...args: any[]) => any) | undefined;
    "onDropdown:blur"?: ((...args: any[]) => any) | undefined;
    "onDropdown:clear"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: Record<string, any>;
    placeholder: string;
    dropdownPosition: string;
    emptyText: string;
    showEmptySelector: boolean;
}>;
export default _default;
