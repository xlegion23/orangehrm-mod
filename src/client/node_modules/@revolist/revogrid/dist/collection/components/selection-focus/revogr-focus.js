/*!
 * Built by Revolist
 */
import { Component, Prop, h, Host, Element, Event } from '@stencil/core';
import { getSourceItem } from '../../store/dataSource/data.store';
import { FOCUS_CLASS } from '../../utils/consts';
import { getElStyle } from '../overlay/selection.utils';
export class RevogrFocus {
  changed(e, focus) {
    e === null || e === void 0 ? void 0 : e.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    });
    const model = getSourceItem(this.dataStore, focus.y);
    const column = getSourceItem(this.colData, focus.x);
    this.afterFocus.emit({
      model,
      column
    });
  }
  componentDidRender() {
    const currentFocus = this.selectionStore.get('focus');
    currentFocus && this.el && this.changed(this.el, currentFocus);
  }
  render() {
    const data = this.selectionStore.get('focus');
    if (data) {
      const style = getElStyle(Object.assign(Object.assign({}, data), { x1: data.x, y1: data.y }), this.dimensionRow.state, this.dimensionCol.state);
      return h(Host, { class: FOCUS_CLASS, style: style });
    }
  }
  static get is() { return "revogr-focus"; }
  static get originalStyleUrls() { return {
    "$": ["revogr-focus-style.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["revogr-focus-style.css"]
  }; }
  static get properties() { return {
    "dataStore": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "RowSource",
        "resolved": "ObservableMap<DataSourceState<DataType, DimensionRows>>",
        "references": {
          "RowSource": {
            "location": "import",
            "path": "../data/columnService"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Dynamic stores"
      }
    },
    "colData": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ColumnSource",
        "resolved": "ObservableMap<DataSourceState<ColumnRegular, DimensionCols>>",
        "references": {
          "ColumnSource": {
            "location": "import",
            "path": "../data/columnService"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "selectionStore": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Observable<Selection.SelectionStoreState>",
        "resolved": "ObservableMap<SelectionStoreState>",
        "references": {
          "Observable": {
            "location": "import",
            "path": "../../interfaces"
          },
          "Selection": {
            "location": "import",
            "path": "../../interfaces"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "dimensionRow": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Observable<RevoGrid.DimensionSettingsState>",
        "resolved": "ObservableMap<DimensionSettingsState>",
        "references": {
          "Observable": {
            "location": "import",
            "path": "../../interfaces"
          },
          "RevoGrid": {
            "location": "import",
            "path": "../../interfaces"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "dimensionCol": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Observable<RevoGrid.DimensionSettingsState>",
        "resolved": "ObservableMap<DimensionSettingsState>",
        "references": {
          "Observable": {
            "location": "import",
            "path": "../../interfaces"
          },
          "RevoGrid": {
            "location": "import",
            "path": "../../interfaces"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get events() { return [{
      "method": "afterFocus",
      "name": "afterfocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "{\n    model: any;\n    column: RevoGrid.ColumnRegular;\n  }",
        "resolved": "{ model: any; column: ColumnRegular; }",
        "references": {
          "RevoGrid": {
            "location": "import",
            "path": "../../interfaces"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
}
