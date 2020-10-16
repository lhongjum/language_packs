import { Encoding } from "./common/Encoding";

export default {
  "friendlyName": "CSV",
  "tooltipName": "Dokument CSV",
  "settings": {
    "Encoding": {
      "label": "Kodowanie",
      "category": "Różne",
      "enum": Encoding
    },
    "NoHeader": {
      "label": "BrakNagłówka",
      "category": "Różne"
    },
    "ColumnsDelimiter": {
      "label": "OgranicznikKolumn",
      "category": "Różne"
    },
    "RowsDelimiter": {
      "label": "OgranicznikWierszy",
      "category": "Różne"
    },
    "QuotationSymbol": {
      "label": "SymbolCytowania",
      "category": "Różne"
    },
    "Extension": {
      "label": "Rozszerzenie",
      "category": "Różne",
      "enum": {
        "csv": ".csv",
        "txt": ".txt"
      }
    },
    "AddTimestamp": {
      "label": "Add Timestamp to filename",
      "category": "Filename"
    }
  }
}
