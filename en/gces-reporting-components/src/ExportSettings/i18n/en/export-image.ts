import { WatermarkColor } from "./common/WatermarkColor";
import { WatermarkFontFamily } from "./common/WatermarkFontFamily";

export default {
  "friendlyName": "Image",
  "tooltipName": "Image",
  "settings": {
    "ImageType": {
      "label": "ImageType",
      "category": "Misc",
      "enum": {
        "Png": "PNG",
        "Jpeg": "JPEG",
        "Gif": "GIF",
        "Bmp": "BMP",
        "Tiff": "TIFF"
      }
    },
    "Pagination": {
      "label": "Pagination",
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
    "Quality": {
      "label": "Quality",
      "category": "Misc"
    },
    "Dither": {
      "label": "Dither",
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
    "AddTimestamp": {
      "label": "Add Timestamp",
      "category": "Filename"
    }
  }
}
