import { WatermarkColor } from "./common/WatermarkColor";
import { WatermarkFontFamily } from "./common/WatermarkFontFamily";

export default {
  "friendlyName": "PDF",
  "tooltipName": "PDF Document",
  "settings": {
    "Version": {
      "label": "Version",
      "category": "Misc",
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
      "label": "EmbedFonts",
      "category": "Misc",
      "enum": {
        "Partial": "Partial",
        "All": "All",
        "None": "None"
      }
    },
    "NeverEmbedFonts": {
      "label": "NeverEmbedFonts",
      "category": "Misc"
    },
    "PrintOnOpen": {
      "label": "PrintOnOpen",
      "category": "Misc"
    },
    "Title": {
      "label": "Title",
      "category": "Misc"
    },
    "Author": {
      "label": "Author",
      "category": "Misc"
    },
    "Subject": {
      "label": "Subject",
      "category": "Misc"
    },
    "Keywords": {
      "label": "Keywords",
      "category": "Misc"
    },
    "Application": {
      "label": "Application",
      "category": "Misc"
    },
    "Permissions": {
      "label": "Permissions",
      "category": "Misc",
      "enum": {
        "None": "None",
        "AllowPrint": "AllowPrint",
        "AllowModifyContents": "AllowModifyContents",
        "AllowCopy": "AllowCopy",
        "AllowModifyAnnotations": "AllowModifyAnnotations",
        "AllowFillIn": "AllowFillIn",
        "AllowAccessibleReaders": "AllowAccessibleReaders",
        "AllowAssembly": "AllowAssembly",
        "Default": "Default"
      }
    },
    "Use128Bit": {
      "label": "Use128Bit",
      "category": "Misc"
    },
    "HideToolbar": {
      "label": "HideToolbar",
      "category": "Misc"
    },
    "HideMenubar": {
      "label": "HideMenubar",
      "category": "Misc"
    },
    "HideWindowUI": {
      "label": "HideWindowUI",
      "category": "Misc"
    },
    "FitWindow": {
      "label": "FitWindow",
      "category": "Misc"
    },
    "CenterWindow": {
      "label": "CenterWindow",
      "category": "Misc"
    },
    "DisplayTitle": {
      "label": "DisplayTitle",
      "category": "Misc"
    },
    "DisplayMode": {
      "label": "DisplayMode",
      "category": "Misc",
      "enum": {
        "None": "None",
        "Outlines": "Outlines",
        "Thumbs": "Thumbs",
        "FullScreen": "FullScreen"
      }
    },
    "DuplexMode": {
      "label": "DuplexMode",
      "category": "Misc",
      "enum": {
        "Simplex": "Simplex",
        "DuplexFlipLongEdge": "DuplexFlipLongEdge",
        "DuplexFlipShortEdge": "DuplexFlipShortEdge"
      }
    },
    "NumberOfCopies": {
      "label": "NumberOfCopies",
      "category": "Misc"
    },
    "ImageInterpolation": {
      "label": "ImageInterpolation",
      "category": "Misc",
      "enum": {
        "Default": "Default",
        "None": "None"
      }
    },
    "PaperSourceByPageSize": {
      "label": "PaperSourceByPageSize",
      "category": "Misc"
    },
    "PrintPageRange": {
      "label": "PrintPageRange",
      "category": "Misc"
    },
    "IsPaginated": {
      "label": "IsPaginated",
      "category": "Misc"
    },
    "PrintLayoutMode": {
      "label": "PrintLayoutMode",
      "category": "Misc",
      "enum": {
        "OneLogicalPageOnSinglePhysicalPage": "OneLogicalPageOnSinglePhysicalPage",
        "TwoLogicalPagesOnSinglePhysicalPage": "TwoLogicalPagesOnSinglePhysicalPage",
        "FourLogicalPagesOnSinglePhysicalPage": "FourLogicalPagesOnSinglePhysicalPage",
        "EightLogicalPagesOnSinglePhysicalPage": "EightLogicalPagesOnSinglePhysicalPage",
        "BookletMode": "BookletMode"
      }
    },
    "SizeToFit": {
      "label": "SizeToFit",
      "category": "Misc"
    },
    "StartPage": {
      "label": "StartPage",
      "category": "Misc"
    },
    "EndPage": {
      "label": "EndPage",
      "category": "Misc"
    },
    "WatermarkAngle": {
      "label": "WatermarkAngle",
      "category": "Misc"
    },
    "WatermarkColor": {
      "label": "WatermarkColor",
      "category": "Misc",
      "enum": WatermarkColor
    },
    "WatermarkTitle": {
      "label": "WatermarkTitle",
      "category": "Misc"
    },
    "WatermarkFontFamily": {
      "label": "WatermarkFontFamily",
      "category": "Misc",
      "enum": WatermarkFontFamily
    },
    "WatermarkFontSize": {
      "label": "WatermarkFontSize",
      "category": "Misc"
    },
    "WatermarkFontBold": {
      "label": "WatermarkFontBold",
      "category": "Misc"
    },
    "WatermarkFontItalic": {
      "label": "WatermarkFontItalic",
      "category": "Misc"
    },
    "WatermarkFontStrikeout": {
      "label": "WatermarkFontStrikeout",
      "category": "Misc"
    },
    "WatermarkFontUnderline": {
      "label": "WatermarkFontUnderline",
      "category": "Misc"
    },
    "Encrypt": {
      "label": "Encrypt",
      "category": "SecuritySettings"
    },
    "OwnerPassword": {
      "label": "OwnerPassword",
      "category": "SecuritySettings"
    },
    "UserPassword": {
      "label": "UserPassword",
      "category": "SecuritySettings"
    },
    "AddTimestamp": {
      "label": "Add Timestamp",
      "category": "Filename"
    }
  }
}
