import { PaperSize } from './common/PaperSize';

export default {
  "friendlyName": "Excel",
  "tooltipName": "Arkusz Excel",
  "settings": {
    "UseCompression": {
      "label": "Użyj kompresji",
      "category": "Różne"
    },
    "FileFormat": {
      "label": "Format pliku",
      "category": "Różne",
      "enum": {
        "Xlsx": "Xlsx",
        "Xls": "Xls"
      }
    },
    "OutputFormat": {
      "label": "Standard OpenXML",
      "category": "Różne",
      "enum": {
        "OpenXmlTransitional": "Przejściowy",
        "OpenXmlStrict": "Ścisły"
      }
    },
    "EnableToggles": {
      "label": "Włącz przełącznik",
      "category": "Różne"
    },
    "Pagination": {
      "label": "Paginacja",
      "category": "Różne"
    },
    "UseDefaultPalette": {
      "label": "Użyj domyślnej palety",
      "category": "Różne"
    },
    "MultiSheet": {
      "label": "Multi arkusz",
      "category": "Różne"
    },
    "SheetName": {
      "label": "Nazwa arkusza",
      "category": "Różne"
    },
    "ProtectedBy": {
      "label": "Chroniony przez",
      "category": "Bezpieczeństwo"
    },
    "WritePassword": {
      "label": "Wpisz hasło",
      "category": "Bezpieczeństwo"
    },
    "Password": {
      "label": "Hasło",
      "category": "Bezpieczeństwo"
    },
    "ReadOnlyRecommended": {
      "label": "Zalecany tylko odczyt",
      "category": "Bezpieczeństwo"
    },
    "Orientation": {
      "label": "Orientacja strony",
      "category": "Ustawienia strony",
      "enum": {
        "Default": "Domyślnie",
        "Portrait": "Portret",
        "Landscape": "Krajobraz"
      }
    },
    "PaperSize": {
      "label": "Rozmiar papieru",
      "category": "Ustawienia strony",
      "enum": PaperSize
    },
    "AddTimestamp": {
      "label": "Dodaj sygnaturę czasową do nazwy pliku",
      "category": "Nazwa pliku"
    }
  }
}
