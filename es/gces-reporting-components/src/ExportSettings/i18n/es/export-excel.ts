import { PaperSize } from './common/PaperSize';

export default {
  "friendlyName": "Excel",
  "tooltipName": "Excel Book",
  "settings": {
    "UseCompression": {
      "label": "UseCompression",
      "category": "Misc"
    },
    "OutputFormat": {
      "label": "OpenXmlStandard",
      "category": "Misc",
      "enum": {
        "OpenXmlTransitional": "Transitional",
        "OpenXmlStrict": "Strict"
      }
    },
    "EnableToggles": {
      "label": "EnableToggles",
      "category": "Misc"
    },
    "Pagination": {
      "label": "Pagination",
      "category": "Misc"
    },
    "UseDefaultPalette": {
      "label": "UseDefaultPalette",
      "category": "Misc"
    },
    "MultiSheet": {
      "label": "MultiSheet",
      "category": "Misc"
    },
    "SheetName": {
      "label": "SheetName",
      "category": "Misc"
    },
    "ProtectedBy": {
      "label": "ProtectedBy",
      "category": "Security"
    },
    "WritePassword": {
      "label": "WritePassword",
      "category": "Security"
    },
    "ReadOnlyRecommended": {
      "label": "ReadOnlyRecommended",
      "category": "Security"
    },
    "Orientation": {
      "label": "PageOrientation",
      "category": "PageSettings",
      "enum": {
        "Default": "Default",
        "Portrait": "Portrait",
        "Landscape": "Landscape"
      }
    },
    "PaperSize": {
      "label": "PaperSize",
      "category": "PageSettings",
      "enum": PaperSize
    },
    "AddTimestamp": {
      "label": "Add Timestamp",
      "category": "Filename"
    }
  }
}
