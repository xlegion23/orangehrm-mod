/*!
 * Built by Revolist
 */
import { h } from '@stencil/core';
export class ColumnOrderHandler {
  constructor() {
    this.offset = 0;
  }
  renderAutoscroll(_, parent) {
    if (!parent) {
      return;
    }
    this.autoscrollEl = document.createElement('div');
    this.autoscrollEl.classList.add('drag-auto-scroll-y');
    parent.appendChild(this.autoscrollEl);
  }
  autoscroll(pos, dataContainerSize, direction = 'translateX') {
    if (!this.autoscrollEl) {
      return;
    }
    const helperOffset = 10;
    // calculate current y position inside of the grid active holder
    // 3 - size of element + border
    const maxScroll = Math.min(pos + helperOffset, dataContainerSize - 3);
    this.autoscrollEl.style.transform = `${direction}(${maxScroll}px)`;
    this.autoscrollEl.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    });
  }
  start(e, { dataEl, gridRect, scrollEl }, dir = 'left') {
    const scrollContainerRect = scrollEl.getBoundingClientRect();
    if (scrollContainerRect) {
      this.offset = scrollContainerRect[dir] - gridRect[dir];
    }
    this.renderAutoscroll(e, dataEl);
  }
  stop() {
    var _a;
    if (this.element) {
      this.element.hidden = true;
    }
    this.offset = 0;
    (_a = this.autoscrollEl) === null || _a === void 0 ? void 0 : _a.remove();
    this.autoscrollEl = undefined;
  }
  showHandler(pos, size, direction = 'translateX') {
    if (!this.element) {
      return;
    }
    // do not allow overcross top of the scrollable area, header excluded
    if (this.offset) {
      pos = Math.max(pos, this.offset);
    }
    // can not be bigger then grid end
    pos = Math.min(pos, size);
    this.element.style.transform = `${direction}(${pos}px)`;
    this.element.hidden = false;
  }
  render() {
    return h("div", { class: "drag-position-y", hidden: true, ref: (el) => (this.element = el) });
  }
}
