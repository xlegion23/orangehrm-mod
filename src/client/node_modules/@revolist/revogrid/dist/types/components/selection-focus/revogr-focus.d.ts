import { EventEmitter } from '../../stencil-public-runtime';
import { Observable, RevoGrid, Selection } from '../../interfaces';
import { ColumnSource, RowSource } from '../data/columnService';
export declare class RevogrFocus {
  el: HTMLElement;
  /** Dynamic stores */
  dataStore: RowSource;
  colData: ColumnSource;
  selectionStore: Observable<Selection.SelectionStoreState>;
  dimensionRow: Observable<RevoGrid.DimensionSettingsState>;
  dimensionCol: Observable<RevoGrid.DimensionSettingsState>;
  afterFocus: EventEmitter<{
    model: any;
    column: RevoGrid.ColumnRegular;
  }>;
  private changed;
  componentDidRender(): void;
  render(): any;
}
