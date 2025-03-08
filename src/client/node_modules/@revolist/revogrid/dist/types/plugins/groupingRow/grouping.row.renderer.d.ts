import { RowProps } from '../../components/data/rowRenderer';
import { RevoGrid } from '../../interfaces';
import { GroupLabelTemplateFunc } from './grouping.row.types';
interface GroupRowPros extends RowProps {
  model: RevoGrid.DataType;
  hasExpand: boolean;
  groupingCustomRenderer?: GroupLabelTemplateFunc;
}
declare type Props = GroupRowPros & RevoGrid.PositionItem;
declare const GroupingRowRenderer: (props: Props) => any;
export default GroupingRowRenderer;
