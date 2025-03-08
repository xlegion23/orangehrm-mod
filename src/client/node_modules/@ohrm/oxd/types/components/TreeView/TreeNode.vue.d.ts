import type { PropType } from 'vue';
import type { TNode } from './types';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<TNode>;
        required: false;
        default: () => {
            label: null;
            children: never[];
        };
    };
    open: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    showRoot: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animation: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    isLast: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    isOpen: import("vue").Ref<boolean>;
    isCollapsed: import("vue").Ref<boolean>;
    height: import("vue").Ref<number>;
}, unknown, {
    hasChildren(): number;
    nodeClasses(): object;
    currentNode(): TNode;
    cuid(): string;
    nodes(): TNode;
    lineStyles(): {
        height: string;
    };
}, {
    onClickNode(): void;
    onAnimationComplete(): void;
    calculateNodeHeight(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<TNode>;
        required: false;
        default: () => {
            label: null;
            children: never[];
        };
    };
    open: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    showRoot: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animation: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    isLast: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    data: TNode;
    animation: string;
    open: boolean;
    showRoot: boolean;
    isLast: boolean;
}>;
export default _default;
