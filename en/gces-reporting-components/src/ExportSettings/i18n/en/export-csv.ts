import { Encoding } from "./common/Encoding";

export default {
  "friendlyName": "CSV",
  "tooltipName": "CSV Document",
  "settings": {
    "Encoding": {
      "label": "Encoding",
      "category": "Misc",
      "enum": Encoding
    },
    "NoHeader": {
      "label": "NoHeader",
      "category": "Misc"
    },
    "ColumnsDelimiter": {
      "label": "ColumnsDelimiter",
      "category": "Misc"
    },
    "RowsDelimiter": {
      "label": "RowsDelimiter",
      "category": "Misc"
    },
    "QuotationSymbol": {
      "label": "QuotationSymbol",
      "category": "Misc"
    },
    "Extension": {
      "label": "Extension",
      "category": "Misc",
      "enum": {
        "csv": ".csv",
        "txt": ".txt"
      }
    },
    "AddTimestamp": {
      "label": "Add Timestamp",
      "category": "Filename"
    }
  }
}
