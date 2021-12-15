import { PaperSize } from './common/PaperSize';

export default {
  "friendlyName": "Word",
  "tooltipName": "Dokument Word(.docx)",
  "settings": {
    "Title": {
      "label": "Tytuł",
      "category": "Różne"
    },
    "Author": {
      "label": "Autor",
      "category": "Różne"
    },
    "DpiX": {
      "label": "DpiX",
      "category": "Różne"
    },
    "DpiY": {
      "label": "DpiY",
      "category": "Różne"
    },
    "DocumentCompatibilityVersion": {
      "label": "Wersja kompatybilności dokumentu",
      "category": "Różne",
      "enum": {
        "Word2007": "Word2007",
        "Word2010": "Word2010",
        "Word2013": "Word2013"
      }
    },
    "TOCAutoUpdate": {
      "label": "TOC automatyczna aktualizacja",
      "category": "Różne"
    },
    "CompanyName": {
      "label": "Nazwa firmy",
      "category": "Różne"
    },
    "WritePassword": {
      "label": "Wpisz hasło",
      "category": "Ustawienia zabezpieczeń"
    },
    "Password": {
      "label": "Hasło",
      "category": "Ustawienia zabezpieczeń"
    },
    "ReadOnlyRecommended": {
      "label": "Zalecany tylko odczyt",
      "category": "Ustawienia zabezpieczeń"
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
