import { RevoGrid } from '../../interfaces';
import { GroupLabelTemplateFunc } from './grouping.row.types';
export declare type ExpandedOptions = {
  prevExpanded?: Record<string, boolean>;
  expandedAll?: boolean;
  groupLabelTemplate?: GroupLabelTemplateFunc;
};
/**
 * Gather data for grouping
 * @param array - flat data array
 * @param groupIds - ids of groups
 * @param expanded - potentially expanded items if present
 */
export declare function gatherGrouping(array: RevoGrid.DataType[], groupIds: RevoGrid.ColumnProp[], { prevExpanded, expandedAll }: ExpandedOptions): {
  sourceWithGroups: RevoGrid.DataType[];
  depth: number;
  trimmed: Record<number, boolean>;
  oldNewIndexMap: Record<number, number>;
  childrenByGroup: Record<string, number[]>;
};
export declare function getGroupingName(rgRow?: RevoGrid.DataType): any;
export declare function isGrouping(rgRow?: RevoGrid.DataType): boolean;
export declare function isGroupingColumn(column?: RevoGrid.ColumnRegular): boolean;
export declare function measureEqualDepth<T>(groupA: T[], groupB: T[]): number;
export declare function getParsedGroup(id: string): any[];
export declare function isSameGroup(currentGroup: any[], currentModel: RevoGrid.DataType, nextModel: RevoGrid.DataType): boolean;
