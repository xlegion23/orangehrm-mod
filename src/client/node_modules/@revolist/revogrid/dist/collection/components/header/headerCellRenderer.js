/*!
 * Built by Revolist
 */
import { h } from '@stencil/core';
import { dispatch } from '../../plugins/dispatcher';
import { ResizableElement } from '../../services/resizable.directive';
import ColumnService from '../data/columnService';
const ON_COLUMN_CLICK = 'column-click';
export const HeaderCellRenderer = ({ data, props }, children) => {
  let colTemplate = (data === null || data === void 0 ? void 0 : data.name) || '';
  let cellProps = props;
  if (data === null || data === void 0 ? void 0 : data.columnTemplate) {
    colTemplate = data.columnTemplate(h, data);
  }
  if (data === null || data === void 0 ? void 0 : data.columnProperties) {
    const extra = data.columnProperties(data);
    if (extra && typeof extra === 'object') {
      cellProps = ColumnService.doMerge(props, extra);
    }
  }
  return (h(ResizableElement, Object.assign({}, cellProps, { onMouseDown: (e) => {
      dispatch(e.currentTarget, ON_COLUMN_CLICK, {
        data,
        event: e,
      });
    } }),
    h("div", { class: "header-content" }, colTemplate),
    children));
};
