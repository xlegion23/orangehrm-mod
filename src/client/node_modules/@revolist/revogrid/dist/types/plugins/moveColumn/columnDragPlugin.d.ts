import { RevoGrid } from '../../interfaces';
import ColumnDataProvider from '../../services/column.data.provider';
import { DataProvider } from '../../services/data.provider';
import DimensionProvider from '../../services/dimension.provider';
import SelectionStoreConnector from '../../services/selection.store.connector';
import ViewportProvider from '../../services/viewport.provider';
import BasePlugin from '../basePlugin';
export declare type DragStartEventDetails = {
  event: MouseEvent;
  data: RevoGrid.ColumnDataSchema;
};
export declare type Providers = {
  data: DataProvider;
  dimension: DimensionProvider;
  selection: SelectionStoreConnector;
  column: ColumnDataProvider;
  viewport: ViewportProvider;
};
declare type LocalSubscriptions = Record<string, LocalSubscription>;
declare type LocalSubscription = {
  target: Element | Document;
  callback(...params: any[]): void;
};
export declare type EventData = {
  elRect: DOMRect;
  gridRect: DOMRect;
  scrollOffset: number;
  type: RevoGrid.DimensionCols;
};
export default class ColumnPlugin extends BasePlugin {
  protected revogrid: HTMLRevoGridElement;
  private providers;
  private moveFunc;
  private staticDragData;
  private dragData;
  private readonly orderUi;
  protected readonly localSubscriptions: LocalSubscriptions;
  constructor(revogrid: HTMLRevoGridElement, providers: Providers);
  dragStart({ event, data }: DragStartEventDetails): void;
  doMove(e: MouseEvent): void;
  move(e: MouseEvent): void;
  onMouseOut(_: MouseEvent): void;
  onMouseUp(e: MouseEvent): void;
  private clearLocalSubscriptions;
  clearOrder(): void;
  /**
   * Clearing subscription
   */
  protected clearSubscriptions(): void;
  private getData;
  private getDimension;
}
export declare function getLeftRelative(absoluteX: number, gridPos: number, offset: number): number;
export {};
