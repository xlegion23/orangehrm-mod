import { Edition, RevoGrid } from '../../../interfaces';
/**
 * Callback triggered on cell editor save
 * Closes editor when called
 * @param preventFocus - if true editor will not be closed and next cell will not be focused
 */
export declare type SaveCallback = (value: Edition.SaveData, preventFocus: boolean) => void;
export declare class TextEditor implements Edition.EditorBase {
  column: RevoGrid.ColumnRegular;
  private saveCallback?;
  private editInput;
  element: Element | null;
  editCell: Edition.EditCell | null;
  constructor(column: RevoGrid.ColumnRegular, saveCallback?: SaveCallback);
  componentDidRender(): Promise<void>;
  private onKeyDown;
  render(): any;
}
