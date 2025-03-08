/*!
 * Built by Revolist
 */
/**
 * Plugin for column manual move
 */
import debounce from 'lodash/debounce';
import each from 'lodash/each';
import { getItemByPosition } from '../../store/dimension/dimension.helpers';
import BasePlugin from '../basePlugin';
import { ColumnOrderHandler } from './columnOrderHandler';
import { dispatch } from '../dispatcher';
import { isColGrouping } from '../groupingColumn/grouping.col.plugin';
const COLUMN_CLICK = 'column-click';
const MOVE = 'column-mouse-move';
const DRAG_END = 'column-drag-end';
const BEFORE_DRAG_END = 'before-column-drag-end';
// use this event subscription to drop D&D for particular columns
const DRAG_START = 'column-drag-start';
export default class ColumnPlugin extends BasePlugin {
  constructor(revogrid, providers) {
    super(revogrid);
    this.revogrid = revogrid;
    this.providers = providers;
    this.moveFunc = debounce((e) => this.doMove(e), 5);
    this.staticDragData = null;
    this.dragData = null;
    this.localSubscriptions = {};
    this.orderUi = new ColumnOrderHandler();
    revogrid.registerVNode([this.orderUi.render()]);
    /** Register events */
    this.localSubscriptions['mouseleave'] = {
      target: document,
      callback: (e) => this.onMouseOut(e),
    };
    this.localSubscriptions['mouseup'] = {
      target: document,
      callback: (e) => this.onMouseUp(e),
    };
    this.localSubscriptions['mousemove'] = {
      target: document,
      callback: (e) => this.move(e),
    };
    this.addEventListener(COLUMN_CLICK, ({ detail }) => this.dragStart(detail));
  }
  dragStart({ event, data }) {
    if (event.defaultPrevented) {
      return;
    }
    const { defaultPrevented } = dispatch(this.revogrid, DRAG_START, data);
    // check if allowed to drag particulat column
    if (defaultPrevented) {
      return;
    }
    this.clearOrder();
    const { mouseleave, mouseup, mousemove } = this.localSubscriptions;
    mouseleave.target.addEventListener('mouseleave', mouseleave.callback);
    mouseup.target.addEventListener('mouseup', mouseup.callback);
    const dataEl = event.target.closest('revogr-header');
    const scrollEl = event.target.closest('revogr-viewport-scroll');
    if (!dataEl || !scrollEl) {
      return;
    }
    if (isColGrouping(data)) {
      return;
    }
    const cols = this.getDimension(data.pin || 'rgCol');
    const gridRect = this.revogrid.getBoundingClientRect();
    const elRect = dataEl.getBoundingClientRect();
    const startItem = getItemByPosition(cols, getLeftRelative(event.x, gridRect.left, elRect.left - gridRect.left));
    this.staticDragData = {
      startPos: event.x,
      startItem,
      data,
      dataEl,
      scrollEl,
      gridEl: this.revogrid,
      cols,
    };
    this.dragData = this.getData(this.staticDragData);
    mousemove.target.addEventListener('mousemove', mousemove.callback);
    this.orderUi.start(event, Object.assign(Object.assign({}, this.dragData), this.staticDragData));
  }
  doMove(e) {
    if (!this.staticDragData) {
      return;
    }
    const dragData = (this.dragData = this.getData(this.staticDragData));
    if (!dragData) {
      return;
    }
    const start = this.staticDragData.startPos;
    if (Math.abs(start - e.x) > 10) {
      const x = getLeftRelative(e.x, this.dragData.gridRect.left, this.dragData.scrollOffset);
      const rgCol = getItemByPosition(this.staticDragData.cols, x);
      this.orderUi.autoscroll(x, dragData.elRect.width);
      this.orderUi.showHandler(rgCol.end + dragData.scrollOffset, dragData.gridRect.width);
    }
  }
  move(e) {
    dispatch(this.revogrid, MOVE, Object.assign({}, e));
    // then do move
    this.moveFunc(e);
  }
  onMouseOut(_) {
    this.clearOrder();
  }
  onMouseUp(e) {
    // apply new positions
    if (this.dragData) {
      let relativePos = getLeftRelative(e.x, this.dragData.gridRect.left, this.dragData.scrollOffset);
      if (relativePos < 0) {
        relativePos = 0;
      }
      const newPosition = getItemByPosition(this.staticDragData.cols, relativePos);
      const store = this.providers.column.stores[this.dragData.type].store;
      const items = [...store.get('items')];
      // prevent position change if needed
      const { defaultPrevented: stopDrag } = dispatch(this.revogrid, BEFORE_DRAG_END, Object.assign(Object.assign({}, this.staticDragData), { startPosition: this.staticDragData.startItem, newPosition, newItem: store.get('source')[items[this.staticDragData.startItem.itemIndex]] }));
      if (!stopDrag) {
        // todo: if move item out of group remove item from group
        const toMove = items.splice(this.staticDragData.startItem.itemIndex, 1);
        items.splice(newPosition.itemIndex, 0, ...toMove);
        store.set('items', items);
      }
      dispatch(this.revogrid, DRAG_END, this.dragData);
    }
    this.clearOrder();
  }
  clearLocalSubscriptions() {
    each(this.localSubscriptions, ({ target, callback }, key) => target.removeEventListener(key, callback));
  }
  clearOrder() {
    this.staticDragData = null;
    this.dragData = null;
    this.clearLocalSubscriptions();
    this.orderUi.stop();
  }
  /**
   * Clearing subscription
   */
  clearSubscriptions() {
    super.clearSubscriptions();
    this.clearLocalSubscriptions();
  }
  getData({ gridEl, dataEl, data, }) {
    const gridRect = gridEl.getBoundingClientRect();
    const elRect = dataEl.getBoundingClientRect();
    const scrollOffset = elRect.left - gridRect.left;
    return {
      elRect,
      gridRect,
      type: data.pin || 'rgCol',
      scrollOffset,
    };
  }
  getDimension(type) {
    return this.providers.dimension.stores[type].getCurrentState();
  }
}
export function getLeftRelative(absoluteX, gridPos, offset) {
  return absoluteX - gridPos - offset;
}
