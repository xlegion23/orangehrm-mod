import type { ResponsiveState } from './useResponsive';
import { type InjectionKey } from 'vue';
export declare type TableProps = {
    [key: string]: any;
};
export declare const tablePropsKey: InjectionKey<TableProps>;
export declare const tableScreenStateKey: InjectionKey<ResponsiveState>;
export declare const useProvideTableProps: (props: TableProps, screenState: ResponsiveState) => void;
export declare const useInjectTableProps: () => {
    tableProps: TableProps;
    screenState: ResponsiveState;
};
