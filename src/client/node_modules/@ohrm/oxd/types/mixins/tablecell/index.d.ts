import type { PropType } from 'vue';
import type { CardHeader, RowItem } from '../../components/CardTable/types';
export declare const cellMixin: import("vue").DefineComponent<{
    header: {
        type: PropType<CardHeader>;
        default: () => {
            name: string;
        };
    };
    rowItem: {
        type: PropType<RowItem>;
        default: () => {};
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: PropType<CardHeader>;
        default: () => {
            name: string;
        };
    };
    rowItem: {
        type: PropType<RowItem>;
        default: () => {};
    };
}>>, {
    header: CardHeader;
    rowItem: RowItem;
}>;
export default cellMixin;
