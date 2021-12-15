import { PaperSize } from './common/PaperSize';

export default {
  "friendlyName": "Word",
  "tooltipName": "Word Document(.docx)",
  "settings": {
    "Title": {
      "label": "Title",
      "category": "Misc"
    },
    "Author": {
      "label": "Author",
      "category": "Misc"
    },
    "DpiX": {
      "label": "DpiX",
      "category": "Misc"
    },
    "DpiY": {
      "label": "DpiY",
      "category": "Misc"
    },
    "DocumentCompatibilityVersion": {
      "label": "DocumentCompatibilityVersion",
      "category": "Misc",
      "enum": {
        "Word2007": "Word2007",
        "Word2010": "Word2010",
        "Word2013": "Word2013"
      }
    },
    "TOCAutoUpdate": {
      "label": "TOCAutoUpdate",
      "category": "Misc"
    },
    "CompanyName": {
      "label": "CompanyName",
      "category": "Misc"
    },
    "WritePassword": {
      "label": "WritePassword",
      "category": "SecuritySettings"
    },
    "Password": {
      "label": "Password",
      "category": "SecuritySettings"
    },
    "ReadOnlyRecommended": {
      "label": "ReadOnlyRecommended",
      "category": "SecuritySettings"
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
