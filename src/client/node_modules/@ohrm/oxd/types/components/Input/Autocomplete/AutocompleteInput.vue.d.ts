import type { Option, Position } from '../types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: () => null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clear: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    createOptions: {
        type: FunctionConstructor;
        required: true;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropdownPosition: {
        type: StringConstructor;
        default: string;
        validator: (value: Position) => boolean;
    };
}, {
    t: (key: string, fallback?: string) => string;
}, {
    options: never[];
    focused: boolean;
    loading: boolean;
    dropdownOpen: boolean;
    searchTerm: string | null;
}, {
    computedOptions(): Option[];
    dropdownClasses(): object;
    optionClasses(): object[];
    highlightedOptions(): string[];
    selectedItem(): string | null;
    inputValue(): string | null;
    showClear(): boolean;
    placeholderText(): string;
}, {
    onSearch($event: Event): void;
    onSelect(option: Option): void;
    search: (vm: any, searchTerm: string) => void;
    onBlur(): void;
}, import("vue").DefineComponent<Readonly<{
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
        type: (ObjectConstructor | ArrayConstructor)[];
        required: false;
        default: () => null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clear: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    createOptions: {
        type: FunctionConstructor;
        required: true;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropdownPosition: {
        type: StringConstructor;
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
    modelValue: unknown[] | Record<string, any>;
    multiple: boolean;
    placeholder: string;
    clear: boolean;
    readonly: boolean;
    dropdownPosition: string;
}>;
export default _default;
