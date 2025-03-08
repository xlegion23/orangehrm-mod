import type { PropType } from 'vue';
import type { DropdownOption } from '../types';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<DropdownOption[]>;
        required: false;
        default: () => never[];
    };
}, unknown, unknown, {}, {
    noOp(e: MouseEvent): void;
    onClick(e: MouseEvent, context: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<DropdownOption[]>;
        required: false;
        default: () => never[];
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    options: DropdownOption[];
}>;
export default _default;
