import { WatermarkColor } from "./common/WatermarkColor";
import { WatermarkFontFamily } from "./common/WatermarkFontFamily";

export default {
  "friendlyName": "Obraz",
  "tooltipName": "Obraz PNG",
  "settings": {
    "ImageType": {
      "label": "Typ obrazu",
      "category": "Różne",
      "enum": {
        "Png": "PNG",
        "Jpeg": "JPEG",
        "Gif": "GIF",
        "Bmp": "BMP",
        "Tiff": "TIFF"
      }
    },
    "Pagination": {
      "label": "Paginacja",
      "category": "Różne"
    },
    "DpiX": {
      "label": "Dpi X",
      "category": "Różne"
    },
    "DpiY": {
      "label": "Dpi Y",
      "category": "Różne"
    },
    "Quality": {
      "label": "Jakość",
      "category": "Różne"
    },
    "Dither": {
      "label": "Paleta barw",
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
    "AddTimestamp": {
      "label": "Dodaj sygnaturę czasową do nazwy pliku",
      "category": "Nazwa pliku"
    }
  }
}
