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
      "label": "Brak nagłówka",
      "category": "Różne"
    },
    "ColumnsDelimiter": {
      "label": "Ogranicznik kolumn",
      "category": "Różne"
    },
    "RowsDelimiter": {
      "label": "Ogranicznik wierszy",
      "category": "Różne"
    },
    "QuotationSymbol": {
      "label": "Symbol cytowania",
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
    "DateTimeFormat": {
      "label": "Format data czas",
      "category": "Różne"
    },
    "NumericFormat": {
      "label": "Format numeryczny",
      "category": "Różne"
    },
    "AddTimestamp": {
      "label": "Dodaj sygnaturę czasową do nazwy pliku",
      "category": "Nazwa pliku"
    }
  }
}
