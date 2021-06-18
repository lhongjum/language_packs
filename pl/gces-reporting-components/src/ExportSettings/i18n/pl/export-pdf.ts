import { WatermarkColor } from "./common/WatermarkColor";
import { WatermarkFontFamily } from "./common/WatermarkFontFamily";

export default {
  "friendlyName": "PDF",
  "tooltipName": "Dokument PDF",
  "settings": {
    "Version": {
      "label": "Wersja",
      "category": "Różne",
      "enum": {
        "Pdf12": "PDF-1.2",
        "Pdf13": "PDF-1.3",
        "Pdf14": "PDF-1.4",
        "Pdf15": "PDF-1.5",
        "Pdf16": "PDF-1.6",
        "Pdf17": "PDF-1.7",
        "PdfA1a": "PDF/A-1a",
        "PdfA1b": "PDF/A-1b",
        "PdfA2a": "PDF/A-2a",
        "PdfA2b": "PDF/A-2b",
        "PdfA2u": "PDF/A-2u",
        "PdfA3a": "PDF/A-3a",
        "PdfA3b": "PDF/A-3b",
        "PdfA3u": "PDF/A-3u",
        "PdfUA1": "PDF/UA-1"
      }
    },
    "EmbedFonts": {
      "label": "Osadź czcionki",
      "category": "Różne",
      "enum": {
        "Partial": "Częściowo",
        "All": "Wszystko",
        "None": "Żadne"
      }
    },
    "NeverEmbedFonts": {
      "label": "Nie osadzaj czcionek",
      "category": "Różne"
    },
    "PrintOnOpen": {
      "label": "Drukuj przy otwarciu",
      "category": "Różne"
    },
    "Title": {
      "label": "Tytuł",
      "category": "Różne"
    },
    "Author": {
      "label": "Autor",
      "category": "Różne"
    },
    "Subject": {
      "label": "Temat",
      "category": "Różne"
    },
    "Keywords": {
      "label": "Słowa kluczowe",
      "category": "Różne"
    },
    "Application": {
      "label": "Aplikacja",
      "category": "Różne"
    },
    "Use128Bit": {
      "label": "Use128Bit",
      "category": "Różne"
    },
    "HideToolbar": {
      "label": "Ukryj pasek narzędzi",
      "category": "Różne"
    },
    "HideMenubar": {
      "label": "Ukryj menu",
      "category": "Różne"
    },
    "HideWindowUI": {
      "label": "Ukryj interfejs",
      "category": "Różne"
    },
    "FitWindow": {
      "label": "Dopasuj okno",
      "category": "Różne"
    },
    "CenterWindow": {
      "label": "Wyśrodkuj okno",
      "category": "Różne"
    },
    "DisplayTitle": {
      "label": "Wyświetl tytuł",
      "category": "Różne"
    },
    "DisplayMode": {
      "label": "Tryb wyświetlania",
      "category": "Różne",
      "enum": {
        "None": "Brak",
        "Outlines": "Podgląd",
        "Thumbs": "Miniaturka",
        "FullScreen": "Pełny ekran"
      }
    },
    "DuplexMode": {
      "label": "Tryb dwustronny",
      "category": "Różne",
      "enum": {
        "Simplex": "Jednostronny",
        "DuplexFlipLongEdge": "Dwustronny wzdłuż długiej krawędzi",
        "DuplexFlipShortEdge": "Dwustronny wzdłuż krótkiej krawędzi"
      }
    },
    "NumberOfCopies": {
      "label": "Liczba kopii",
      "category": "Różne"
    },
    "ImageInterpolation": {
      "label": "Interpolacja obrazu",
      "category": "Różne",
      "enum": {
        "Default": "Domyślne",
        "None": "Żadne"
      }
    },
    "PaperSourceByPageSize": {
      "label": "Źródło papieru według rozmiaru strony",
      "category": "Różne"
    },
    "PrintPageRange": {
      "label": "Drukuj zakres stron",
      "category": "Różne"
    },
    "IsPaginated": {
      "label": "Czy jest paginowany",
      "category": "Różne"
    },
    "PrintLayoutMode": {
      "label": "Układ wydruku",
      "category": "Różne",
      "enum": {
        "OneLogicalPageOnSinglePhysicalPage": "Jedna strona na arkusz",
        "TwoLogicalPagesOnSinglePhysicalPage": "Dwie strony na arkusz",
        "FourLogicalPagesOnSinglePhysicalPage": "Cztery strony na arkusz",
        "EightLogicalPagesOnSinglePhysicalPage": "Osiem stron logicznych na pojedynczej stronie fizycznej",
        "BookletMode": "Tryb broszury"
      }
    },
    "SizeToFit": {
      "label": "Rozmiar do dopasowania",
      "category": "Różne"
    },
    "StartPage": {
      "label": "Strona startowa",
      "category": "Różne"
    },
    "EndPage": {
      "label": "Strona końcowa",
      "category": "Różne"
    },
    "WatermarkAngle": {
      "label": "Kąt znaku wodnego",
      "category": "Różne"
    },
    "WatermarkColor": {
      "label": "Kolor znaku wodnego",
      "category": "Różne",
      "enum": WatermarkColor
    },
    "WatermarkTitle": {
      "label": "Tytuł znaku wodnego",
      "category": "Różne"
    },
    "WatermarkFontFamily": {
      "label": "Czcionka znaku wodnego",
      "category": "Różne",
      "enum": WatermarkFontFamily
    },
    "WatermarkFontSize": {
      "label": "Rozmiar czcionki znaku wodnego",
      "category": "Różne"
    },
    "WatermarkFontBold": {
      "label": "Pogrubienie czcionki znaku wodnego",
      "category": "Różne"
    },
    "WatermarkFontItalic": {
      "label": "Kursywa czcionki znaku wodnego",
      "category": "Różne"
    },
    "WatermarkFontStrikeout": {
      "label": "Przekreślenie czionki znaku wodnego",
      "category": "Różne"
    },
    "WatermarkFontUnderline": {
      "label": "Podkreślenie czionki znaku wodnego",
      "category": "Różne"
    },
    "Encrypt": {
      "label": "Szyfruj",
      "category": "Ustawienia zabezpieczeń"
    },
    "OwnerPassword": {
      "label": "Hasło właściciela",
      "category": "Ustawienia zabezpieczeń"
    },
    "UserPassword": {
      "label": "Hasło użytkownika",
      "category": "Ustawienia zabezpieczeń"
    },
    "Permissions": {
      "label": "Uprawnienia",
      "category": "Ustawienia zabezpieczeń",
      "enum": {
        "None": "Brak",
        "AllowPrint": "Drukowanie",
        "AllowModifyContents": "Modyfikacja",
        "AllowCopy": "Kopiowanie",
        "AllowModifyAnnotations": "Modyfikacja adnotacji",
        "AllowFillIn": "Wypełnianie",
        "AllowAccessibleReaders": "Dostęp czytników ekranu",
        "AllowAssembly": "Wstawianie stron",
        "Default": "Domyślne"
      }
    },
    "AddTimestamp": {
      "label": "Dodaj sygnaturę czasową do nazwy pliku",
      "category": "Nazwa pliku"
    }
  }
}
