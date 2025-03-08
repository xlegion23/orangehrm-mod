export declare class ColumnOrderHandler {
  private element?;
  private autoscrollEl?;
  private offset;
  renderAutoscroll(_: MouseEvent, parent: HTMLElement | null): void;
  autoscroll(pos: number, dataContainerSize: number, direction?: string): void;
  start(e: MouseEvent, { dataEl, gridRect, scrollEl }: {
    dataEl: HTMLElement;
    gridRect: DOMRect;
    scrollEl: Element;
  }, dir?: 'top' | 'left'): void;
  stop(): void;
  showHandler(pos: number, size: number, direction?: string): void;
  render(): any;
}
