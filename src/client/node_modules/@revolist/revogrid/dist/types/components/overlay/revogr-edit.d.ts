import { EventEmitter } from '../../stencil-public-runtime';
import { Edition, RevoGrid } from '../../interfaces';
export declare class Edit {
  element: HTMLElement;
  editCell: Edition.EditCell;
  private currentEditor;
  column: RevoGrid.ColumnRegular | null;
  /** Custom editors register */
  editor: Edition.EditorCtr | null;
  cellEdit: EventEmitter<Edition.SaveDataDetails>;
  /**
   * Close editor event
   * pass true if requires focus next
   */
  closeEdit: EventEmitter<boolean | undefined>;
  /**
   * Callback triggered on cell editor save
   * Closes editor when called
   * @param preventFocus - if true editor will not be closed and next cell will not be focused
   */
  onSave(val: Edition.SaveData, preventFocus?: boolean): void;
  componentWillRender(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  render(): any;
}
