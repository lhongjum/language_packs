/* eslint-disable */

const pl = {
  //#region Spread Dialog
  title: '',
  defaultFont: '10pt Arial',
  ok: 'OK',
  yes: 'Tak', // Yes
  no: 'Nie', // No
  apply: 'Zastosuj', // Apply
  cancel: 'Anuluj', // Cancel
  close: 'Zamknij', // Close

  customFormat: 'Niestandardowe', // Custom
  generalFormat: 'Ogólne', // General

  conditionalFormat: {
    highlightCellsRules: 'Zasady podświetlania komórek', // Highlight Cells Rules
    topBottomRules: 'Zasady górne/dolne', // Top/Bottom Rules
    dataBars: 'Paski danych', // Data Bars
    colorScales: 'Skale kolorów', // Color Scales
    iconSets: 'Zestawy ikon', // Icon Sets
    newRule: 'Nowa zasada...', // New Rule...
    clearRules: 'Wyczyść reguły...', // Clear Rules...
    manageRules: 'Zarządzaj regułami...', // Manage Rules...

    greaterThan: 'Większy niż...', // Greater Than...
    lessThan: 'Mniej niż...', // Less Than...
    between: 'Pomiędzy...', // Between...
    equalTo: 'Równy...', // Equal To...
    textThatContains: 'Tekst zawierający...', // Text that Contains...
    aDateOccurring: 'Występująca data...', // A Date Occurring...
    duplicateValues: 'Zduplikowane wartości...', // Duplicate Values...
    moreRules: 'Więcej zasad...', // More Rules...

    top10Items: 'Top 10 pozycji...', // Top 10 Items...
    bottom10Items: '10 ostatnich pozycji...', // Bottom 10 Items...
    aboveAverage: 'Powyżej średniej...', // Above Average...
    belowAverage: 'Poniżej średniej...', // Below Average...

    gradientFill: 'Wypełnienie gradientowe', // Gradient Fill
    solidFill: 'Pełne wypełnienie', // Solid Fill
    directional: 'Kierunkowy', // Directional
    shapes: 'Kształty', // Shapes
    indicators: 'Wskaźniki', // Indicators
    ratings: 'Oceny', // Ratings

    clearRulesFromSelectedCells: 'Wyczyść reguły z wybranych komórek', // Clear Rules from Selected Cells
    clearRulesFromEntireSheet: 'Wyczyść zasady z całego arkusza', // Clear Rules from Entire Sheet
  },

  conditionalFormatting: {
    common: {
      with: 'z', // with
      selectedRangeWith: 'dla wybranego zakresu z', // for the selected range with
      and: 'i', // and
    },
    greaterThan: {
      title: 'Większy niż', // Greater Than
      description: 'Formatuj komórki, które są WIĘKSZE NIŻ:', // Format cells that are GREATER THAN:
    },
    lessThan: {
      title: 'Mniej niż', // Less Than
      description: 'Formatuj komórki, które są MNIEJSZE NIŻ:', // Format cells that are LESS THAN:
    },
    between: {
      title: 'Pomiędzy', // Between
      description: 'Sformatuj komórki znajdujące się POMIĘDZY:', // Format cells that are BETWEEN:
    },
    equalTo: {
      title: 'Równy', // Equal To
      description: 'Sformatuj komórki, które są RÓWNE:', // Format cells that are EQUAL TO:
    },
    textThatCotains: {
      title: 'Tekst, który zawiera', // Text That Contains
      description: 'Sformatuj komórki zawierające tekst:', // Format cells that contain the text:
    },
    dateOccurringFormat: {
      title: 'Powtarzające się daty', // Recurring Dates
      description: 'Formatuj komórki zawierające datę cykliczną:', // Format cells that contain a recurring date:
      date: {
        yesterday: 'Wczoraj', // Yesterday
        today: 'Dzisiaj', // Today
        tomorrow: 'Jutro', // Tomorrow
        last7days: 'W ciągu ostatnich 7 dni', // In the last 7 days
        lastweek: 'Zeszły tydzień', // Last week
        thisweek: 'Obecny tydzień', // This week
        nextweek: 'Następny tydzień', // Next week
        lastmonth: 'Zeszły miesiąc', // Last month
        thismonth: 'Obecny miesiąc', // This month
        nextmonth: 'Następny miesiąc', // Next month
      },
    },
    duplicateValuesFormat: {
      title: 'Zduplikowane wartości', // Duplicate Values
      description: 'Sformatuj komórki zawierające:', // Format cells that contain:
      type: {
        duplicate: 'Duplikat', // Duplicate
        unique: 'Unikat', // Unique
      },
      valueswith: 'wartości z', // values with
    },
    top10items: {
      title: 'Top 10 pozycji', // Top 10 Items
      description: 'Formatuj komórki, które znajdują się w TOP:',
    },
    bottom10items: {
      title: '10 ostatnich pozycji', // Bottom 10 Items
      description: 'Formatuj komórki, które znajdują się na dole:', // Format cells that rank in the BOTTOM:
    },
    aboveAverage: {
      title: 'Powyżej średniej', // Above Average
      description: 'Formatuj komórki, które są POWYŻEJ ŚREDNIEJ:', // Format cells that are ABOVE AVERAGE:
    },
    belowAverage: {
      title: 'Poniżej średniej', // Below Average
      description: 'Formatuj komórki, które są PONIŻEJ ŚREDNIEJ:', // Format cells that are BELOW AVERAGE:
    },
    newFormattingRule: {
      title: 'Nowa reguła formatowania', // New Formatting Rule
      title2: 'Edytuj regułę formatowania', // Edit Formatting Rule
      description1: 'Wybierz typ reguły:', // Select a Rule Type:
      description2: 'Edytuj opis reguły:', // Edit the Rule Description:
      ruleType: {
        formatOnValue: '►Formatuj wszystkie komórki na podstawie ich wartości', // ►Format all cells based on their values
        formatContain: '►Formatuj tylko komórki zawierające', // ►Format only cells that contain
        formatRankedValue: '►Formatuj tylko najwyższe lub najniższe wartości w rankingu', // ►Format only top or bottom ranked values
        formatAbove: '►Formatuj tylko wartości, które są powyżej lub poniżej średniej', // ►Format only values that are above or below average
        formatUnique: '►Formatuj tylko unikalne lub zduplikowane wartości', // ►Format only unique or duplicate values
        useFormula: '►Użyj formuły, aby określić, które komórki sformatować', // ►Use a formula to determine which cells to format
      },
      formatOnValue: {
        description: 'Formatuj wszystkie komórki na podstawie ich wartości:', // Format all cells based on their values:
        formatStyle: 'Styl formatu:', // Format style:
        formatStyleSelector: {
          color2: '2-kolorowa skala', // 2-Color Scale
          color3: '3-kolorowa skala', // 3-Color Scale
          dataBar: 'Pasek danych', // Data Bar
          iconSets: 'Zestawy ikon', // Icon Sets
        },
        color2: {
          min: 'Minimum',
          max: 'Maksimum', // Maximum
          type: 'Typ:', // Type:
          value: 'Wartość:', // Value:
          color: 'Color:', // Color:
          preview: 'Podgląd', // Preview
          minSelector: {
            lowest: 'Najniższa wartość', // Lowest Value
          },
          maxSelector: {
            highest: 'Najwyższa wartość', // Highest Value
          },
        },
        color3: {
          mid: 'Punkt środkowy', // MidPoint
        },
        dataBar: {
          showBarOnly: 'Pokaż tylko pasek', // Show Bar Only
          auto: 'Automatyczny', // Automatic
          description2: 'Wygląd paska:', // Bar Appearance:
          fill: 'Wypełnienie', // Fill
          color: 'Kolor', // Color
          border: 'Obramowanie', // Border
          fillSelector: {
            solidFill: 'Pełne wypełnienie', // Solid Fill
            gradientFill: 'Wypełnienie gradientowe', // Gradient Fill
          },
          borderSelector: {
            noBorder: 'Bez obramowania', // No Border
            solidBorder: 'Pełne obramowanie', // Solid Border
          },
          negativeBtn: 'Wartość ujemna i oś...', // Negative value and Axis...
          barDirection: 'Kierunek paska:', // Bar Direction:
          barDirectionSelector: {
            l2r: 'Z lewej do prawej', // Left-to-Right
            r2l: 'Z Prawej do lewej', // Right-to-left
          },
          preview: 'Podgląd', // Preview
          negativeDialog: {
            title: 'Wartość ujemna i ustawienia osi', // Negative Value and Axis Settings
            group1: {
              title: 'Kolor wypełnienia paska ujemnego', // Negative bar fill color
              fillColor: 'Kolor wypenienia:', // Fill Color:
              apply: 'Zastosuj ten sam kolor wypełnienia, co pasek dodatni', // Apply the same fill color as the positive bar
            },
            group2: {
              title: 'Kolor obramowania paska ujemnego', // Negative bar border color
              borderColor: 'Kolor obramowania:', // Border Color:
              apply: 'Zastosuj ten sam kolor wypełnienia, co pasek dodatni', // Apply the same border color as the positive bar
            },
            group3: {
              title: 'Ustawienia osi', // Axis settings
              description: 'Wybierz pozycję osi w komórce, aby zmienić wygląd słupków dla wartości ujemnych', // Select axis position in cell to change the appearance of bars for negative values
              radio: {
                auto: 'Automatyczne (wyświetlanie w zmiennych pozycjach na podstawie wartości ujemnych)', // Automatic (display at variable positions based on negative values)
                cell: 'Punkt środkowy komórki', // Cell midpoint
                none: 'Brak (pokaż słupki wartości ujemnych w tym samym kierunku co dodatnie)', // None (show negative value bars in same direction as positive)
              },
              axisColor: 'Kolor osi:', // Axis color:
            },
          },
        },
        iconSets: {
          iconStyle: 'Styl ikony:', // Icon style:
          showIconOnly: 'Pokaż tylko ikonę', // Show Icon Only
          reverseIconOrder: 'Odwróć kolejność ikon', // Reverse Icon Order
          display: 'Wyświetlaj każdą ikonę zgodnie z następującymi zasadami:', // Display each icon according to these rules:
          icon: 'Ikona', // Icon
          value: 'Wartość', // Value
          type: 'Typ', // Type
          description1: 'gdy wartość to', // when value is
          description2: 'kiedy <', // when < 
          operator: {
            largeOrEqu: '>=',
            large: '>',
          },
        },
        commonSelector: {
          num: 'Liczba', // Number
          percent: 'Procent', // Percent
          formula: 'Formuła', // Formula
          percentile: 'Percentyl', // Percentile
        },
      },
      formatContain: {
        description: 'Formatuj tylko komórki z:', // Format only cells with:
        type: {
          cellValue: 'Wartość komórki', // Cell Value
          specificText: 'Określony tekst', // Specific Text
          dateOccurring: 'Występujące daty', // Dates Occurring
          blanks: 'Puste', // Blanks
          noBlanks: 'Nie puste', // No Blanks
          errors: 'Błędy', // Errors
          noErrors: 'Bez błędów', // No Errors
        },
        operator_cellValue: {
          between: 'pomiędzy', // between
          notBetween: 'nie pomiędzy', // not between
          equalTo: 'równy', // equal to
          notEqualTo: 'nie równy', // not equal to
          greaterThan: 'większy od', // greater than
          lessThan: 'mniejszy od', // less than
          greaterThanOrEqu: 'większe bądź równe', // greater than or equal to
          lessThanOrEqu: 'mniejsze bądź równe', // less than or equal to
        },
        operator_specificText: {
          containing: 'zawierający', // containing
          notContaining: 'nie zawierający', // not Containing
          beginningWith: 'rozpoczynający się', // beginning with
          endingWith: 'kończący się', // ending with
        },
      },
      formatRankedValue: {
        description: 'Sformatuj komórki, które mają rangę w:', // Format cells that rank in the:
        type: {
          top: 'Top', // Top
          bottom: 'Ostatni', // Bottom
        },
      },
      formatAbove: {
        description: 'Formatuj komórki, które są:', // Format cells that are:
        type: {
          above: 'powyżej', // above
          below: 'poniżej', // below
          equalOrAbove: 'równy lub wyższy', // equal or above
          equalOrBelow: 'równe lub mniejsze', // equal or below
          std1Above: '1 odchylenie standardowe powyżej', // 1 STD DEV above
          std1Below: '1 odchylenie standardowe poniżej', // 1 STD DEV below
          std2Above: '2 odchylenia standardowe powyżej', // 2 STD DEV above
          std2Below: '2 odchylenia standardowe poniżej', // 2 STD DEV below
          std3Above: '3 odchylenia standardowe powyżej', // 3 STD DEV above
          std3Below: '3 odchylenia standardowe poniżej', // 3 STD DEV below
        },
        description2: 'średnia dla wybranego zakresu', // the average for the selected range
      },
      formatUnique: {
        description: 'Sformatuj wszystko:', // Format all:
        type: {
          duplicate: 'duplikat', // duplicate
          unique: 'unikat', // unique
        },
        description2: 'wartości w wybranym zakresie', // values in the selected range
      },
      useFormula: {
        description: 'Formatuj wartości, gdy ta formuła jest prawdziwa:', // Format values where this formula is true:
      },
      preview: {
        description: 'Podgląd:', // Preview:
        buttonText: 'Format...',
        noFormat: 'Brak ustawienia formatu', // No Format Set
        hasFormat: 'AaBbCcYyZz',
      },
    },
    withStyle: {
      lightRedFill_DarkRedText: 'Jasnoczerwone wypełnienie z ciemnoczerwonym tekstem', // Light Red Fill with Dark Red Text
      yellowFill_DrakYellowText: 'Żółte wypełnienie z ciemnożółtym tekstem', // Yellow Fill with Dark Yellow Text
      greenFill_DarkGreenText: 'Zielone wypełnienie z ciemnozielonym tekstem', // Green Fill with Dark Green Text
      lightRedFill: 'Jasnoczerwone wypełnienie', // Light Red Fill
      redText: 'Czerwony tekst', // Red Text
      redBorder: 'Czerwone obramowanie', // Red Border
      customFormat: 'Format niestandardowy...', // Custom Format...
    },
    exceptions: {
      e1: 'Wprowadzona wartość nie jest prawidłową liczbą, datą, godziną ani ciągiem.', // The value you entered is not a valid number, date, time, or string.
      e2: 'Wpisz wartość.', // Enter a value.
      e3: 'Wpisz liczbę całkowitą z zakresu od 1 do 1000.', // Enter a whole number between 1 and 1000.
      e4: 'Wprowadzona wartość nie może być pusta.', // The value you entered cannot be empty.
      e5: 'Tego typu odwołania nie można użyć w formule formatowania warunkowego.\nZmień odwołanie na pojedynczą komórkę lub użyj odwołania z funkcją arkusza, taką jak =SUM(A1:E5).', // This type of reference cannot be used in a Conditional Formatting formula.\nChange the reference to a single cell, or use the reference with a worksheet function, such as =SUM(A1:E5).
      e6: 'Zakres źródłowy reguły formuły może być tylko jednym zakresem!', // The source range of a formula rule can only be a single range!
    },
  },

  formattingRulesManagerDialog: {
    title: 'Menedżer reguł formatowania warunkowego', // Conditional Formatting Rules Manager
    rulesScopeLabel: 'Zasady formatowania dla tego arkusza roboczego:', // Formatting rules for this worksheet:
    rulesScopeForSelection: 'Obecny wybór', // Current Selection
    rulesScopeForWorksheet: 'Ten arkusz roboczy', // This Worksheet
    newRule: 'Nowa reguła...', // New Rule...
    editRule: 'Edytuj regułę', // Edit Rule...
    deleteRule: 'Usuń regułę...', // Delete Rule...
    gridTitleRule: 'Reguła (stosowana w pokazanej kolejności)', // Rule (applied in order shown)
    gridTitleFormat: 'Format',
    gridTitleAppliesTo: 'Dotyczy', // Applies to
    gridTitleStopIfTrue: 'Przestań, jeśli prawda', // Stop If True
    ruleDescriptions: {
      valueBetween: 'Wartość komórki pomiędzy {0} i {1}', // Cell value between {0} and {1}
      valueNotBetween: 'Wartość komórki nie pomiędzy {0} i {1}', // Cell value not between {0} and {1}
      valueEquals: 'Wartość komórki = {0}', // Cell value = {0}
      valueNotEquals: 'Wartość komórki <> {0}', // Cell value <> {0}
      valueGreateThan: 'Wartość komórki > {0}', // Cell value > {0}
      valueGreateThanOrEquals: 'Wartość komórki >= {0}', // Cell value >= {0}
      valueLessThan: 'Wartość komórki < {0}', // Cell value < {0}
      valueLessThanOrEquals: 'Wartość komórki <= {0}', // Cell value <= {0}
      valueContains: 'Wartość komórki zawiera "{0}"', // Cell value contains "{0}"
      valueNotContains: 'Wartość komórki nie zawiera "{0}"', // Cell value does not contain "{0}"
      valueBeginsWith: 'Wartość komórki zaczyna się od "{0}"', // Cell value begins with "{0}"
      valueEndsWith: 'Wartość komórki kończy się na "{0}"', // Cell value ends with "{0}"
      last7Days: 'Ostatnie 7 dni', // Last 7 days
      lastMonth: 'Poprzedni miesiąc', // Last Month
      lastWeek: 'Poprzedni tydzień', // Last Week
      nextMonth: 'Następny miesiąc', // Next Month
      nextWeek: 'Następny tydzień', // Next Week
      thisMonth: 'Ten miesiąc', // This Month
      thisWeek: 'Ten tydzień', // This Week
      today: 'Dzisiaj', // Today
      tomorrow: 'Jutro', // Tomorrow
      yesterday: 'Wczoraj', // Yesterday
      duplicateValues: 'Zduplikowane wartości', // Duplicate Values
      uniqueValues: 'Unikalne wartości', // Unique Values
      top: 'Top {0}',
      bottom: 'Ostatnie {0}', // Bottom {0}
      above: 'Powyżej średniej', // Above Average
      above1StdDev: '1 odchylenie standardowe powyżej średniej', // 1 STD DEV above Average
      above2StdDev: '2 odchylenia standardowe powyżej średniej', // 2 STD DEV above Average
      above3StdDev: '3 odchylenia standardowe powyżej średniej', // 3 STD DEV above Average
      below: 'Poniżej średniej', // Below Average
      below1StdDev: '1 odchylenie standardowe poniżej średniej', // 1 STD DEV below Average
      below2StdDev: '2 odchylenia standardowe poniżej średniej', // 2 STD DEV below Average
      below3StdDev: '3 odchylenia standardowe poniżej średniej', // 3 STD DEV below Average
      equalOrAbove: 'Równe lub powyżej średniej', // Equal to or above Average
      equalOrBelow: 'Równe lub poniżej średniej', // Equal to or below Average
      dataBar: 'Pasek danych', // Data Bar
      twoScale: 'Stopniowana skala kolorów', // Graded Color Scale
      threeScale: 'Stopniowana skala kolorów', // Graded Color Scale
      iconSet: 'Zestaw ikon', // Icon Set
      formula: 'Formuła: {0}', // Formula: {0}
    },
    previewText: 'AaBbCcYyZz',
  },

  formatDialog: {
    title: 'Formatuj komórki', // Format Cells
    fieldTitle: 'Formatuj pole', // Format Field
    chartTitle: 'Formatuj wykres', // Format Chart
    number: 'Liczba', // Number
    alignment: 'Wyrównanie', // Alignment
    font: 'Czcionka', // Font
    border: 'Obramowanie', // Border
    fill: 'Wypełnienie', // Fill
    protection: 'Zabezpieczenie', // Protection
    category: 'Kategoria:', // Category:
    backColor: 'Kolor tła', // Background Color
    textAlignment: 'Wyrównanie tekstu', // Text Alignment
    horizontalAlignment: 'Poziomy:', // Horizontal:
    verticalAlignment: 'Pionowy:', // Vertical:
    indent: 'Akapit:', // Indent:
    textControl: 'Kontrola tekstu', // Text control
    wrapText: 'Zawijaj tekst', // Wrap Text
    shrink: 'Zmniejsz, aby dopasować', // Shrink to Fit
    merge: 'Połącz komórki', // Merge Cells
    top: 'Góra', // Top
    bottom: 'Dół', // Bottom
    left: 'Lewa', // Left
    right: 'Prawa', // Right
    center: 'Środek', // Center
    general: 'Ogólny', // General
    sampleText: 'Tekst', // Text
    cantMergeMessage: 'Nie można scalić nakładających się zakresów.', // Cannot merge overlapping ranges.
    lock: 'Zablokowany', // Locked
    lockComments: 'Blokowanie komórek nie ma wpływu, dopóki nie zabezpieczysz arkusza roboczego (karta Recenzja, grupy Zmiany, przycisk Chroń arkusz).', // Locking cells has no effect until you protect the worksheet(Review tab, Changes groups, Protect Sheet button).
    backGroundColor: 'Kolor tła:', // Background Color:
    moreColorsText: 'Więcej kolorów', // More Colors
    noFillText: 'Brak koloru', // No Color
    sample: 'Próbka', // Sample
    padding: 'Podszycie', // Padding
  },

  borderDialog: {
    border: 'Obramowanie', // Border
    presets: 'Ustawienia wstępne', // Presets
    none: 'Brak', // None
    outline: 'Zarys', // Outline
    inside: 'Wewnątrz', // Inside
    line: 'Linia', // Line
    text: 'Tekst', // Text
    comments: 'Wybrany styl obramowania można zastosować, klikając ustawienia wstępne, diagram podglądu lub powyższe przyciski.', // The selected border style can be applied by clicking the presets, preview diagram, or the above buttons.
  },

  colorPicker: {
    themeColorsTitle: 'Kolory tematyczne', // Theme Colors
    standardColorsTitle: 'Standardowe kolory', // Standard Colors
    noFillText: 'Brak koloru', // No Color
    moreColorsText: 'Więcej kolorów...', // More Colors...
    colorDialogTitle: 'Kolor', // Color
    red: 'Czerwony: ', // Red:
    green: 'Zielony: ', // Green:
    blue: 'Niebieski: ', // Blue:
    newLabel: 'Nowy', // New
    currentLabel: 'Obecny', // Current
  },
  fontPicker: {
    familyLabelText: 'Czcionka:', // Font:
    styleLabelText: 'Styl czcionki:', // Font style:
    sizeLabelText: 'Rozmiar:', // Size:
    weightLabelText: 'Grubość:', // Weight:
    colorLabelText: 'Kolor:', // Color:
    normalFontLabelText: 'Zwykła czcionka', // Normal font
    previewLabelText: 'Podgląd', // Preview
    previewText: 'AaBbCcYyZz',
    effects: 'Effects',
    underline: 'Podkreślenie', // Underline
    strikethrough: 'Przekreślenie', // Strikethrough

    fontFamilies: {
      Arial: 'Arial',
      'Arial Black': 'Arial Black',
      Calibri: 'Calibri',
      Cambria: 'Cambria',
      Candara: 'Candara',
      Century: 'Century',
      'Courier New': 'Courier New',
      'Comic Sans MS': 'Comic Sans MS',
      Garamond: 'Garamond',
      Georgia: 'Georgia',
      'Malgun Gothic': 'Malgun Gothic',
      Mangal: 'Mangal',
      Tahoma: 'Tahoma',
      Times: 'Times',
      'Times New Roman': 'Times New Roman',
      'Trebuchet MS': 'Trebuchet MS',
      Verdana: 'Verdana',
      Wingdings: 'Wingdings',
      Meiryo: 'Meiryo',
      'MS Gothic': 'MS Gothic',
      'MS Mincho': 'MS Mincho',
      'MS PGothic': 'MS PGothic',
      'MS PMincho': 'MS PMincho',
    },
    fontStyles: {
      normal: 'Normalna', // Normal
      italic: 'Kursywa', // Italic
      oblique: 'Ukośna', // Oblique
    },
    fontWeights: {
      normal: 'Normalna', // Normal
      bold: 'Pogrubienie', // Bold
      bolder: 'Grubsza', // Bolder
      lighter: 'Lżejsza', // Lighter
    },
  },
  borderPicker: {
    lineStyleTitle: 'Styl:', // Style:
    borderColorTitle: 'Kolor:', // Color:
  },
  categories: {
    general: 'Ogólne', // General
    numbers: 'Liczba', // Number
    currency: 'Waluta', // Currency
    accounting: 'Księgowość', // Accounting
    date: 'Data', // Date
    time: 'Czas', // Time
    percentage: 'Procent', // Percentage
    fraction: 'Ułamek', // Fraction
    scientific: 'Naukowy', // Scientific
    text: 'Tekst', // Text
    special: 'Specjalny', // Special
    custom: 'Niestandardowy', // Custom
  },

  formatNumberComments: {
    generalComments: 'Komórki formatu ogólnego nie mają określonego formatu liczb.', // General format cells have no specific number format.
    numberComments: 'Liczba służy do ogólnego wyświetlania liczb. Waluta i Księgowość oferują wyspecjalizowane formatowanie wartości pieniężnych.', // Number is used for general display of numbers. Currency and Accounting offer specialized formatting for monetary values.
    currencyComments: 'Formaty walut są używane do ogólnych wartości pieniężnych. Użyj formatów rachunkowości, aby wyrównać miejsca dziesiętne w kolumnie.', // Currency formats are used for general monetary values. Use Accounting formats to align decimal points in a column.
    accountingComments: 'Formaty księgowe wyrównują symbole waluty i kropki dziesiętne w kolumnie.', // Accounting formats line up the currency symbols and decimal points in a column.
    dateComments: 'Formaty daty wyświetlają numery seryjne daty i godziny jako wartości dat.', // Date formats display date and time serial numbers as date values.
    timeComments: 'Formaty czasu wyświetlają numery seryjne daty i godziny jako wartości czasu.', // Time formats display date and time serial numbers as time values.
    percentageComments: 'Formaty procentowe mnożą wartość komórki przez 100 i wyświetlają wynik z symbolem procentu.', // Percentage formats multiply the cell value by 100 and display the result with a percent symbol.
    textComments: 'Komórki sformatowane jako tekst są traktowane jak tekst, nawet jeśli w komórce znajduje się liczba. Komórka jest wyświetlana dokładnie tak, jak została wprowadzona.', // Text formatted cells are treated as text even when a number is in the cell. The cell is displayed exactly as entered.
    specialComments: 'Specjalne formaty są przydatne do śledzenia wartości list i baz danych.', // Special formats are useful for tracking list and database values.
    customComments: 'Wpisz kod formatu liczb, używając jednego z istniejących kodów jako punktu początkowego.', // Type the number format code using one of the existing codes as a starting point.
  },

  formatNumberPickerSetting: {
    type: 'Typ:', // Type:
    decimalPlaces: 'Miejsca dziesiętne:', // Decimal places:
    symbol: 'Symbol:', // Symbol:
    negativeNumber: 'Liczby ujemne:', // Negative numbers:
    separator: 'Użyj separatora tysięcznego (,)', // Use 1000 Separator(,)
    deleted: 'Usuń', // Delete
    locale: 'lokalizacja (lokalizacja):', // locale (location):
    calendar: 'Typ kalendarza:', // Calendar type:
  },

  localeType: {
    en_us: 'English(U.S.)',
    zh_cn: 'China',

  },

  calendarType: {
    western: 'Western',
    // JER: "Japanese Emperor Reign"
  },

  fractionFormats: [
    '# ?/?',
    '# ??/??',
    '# ???/???',
    '# ?/2',
    '# ?/4',
    '# ?/8',
    '# ??/16',
    '# ?/10',
    '# ??/100',
  ],

  numberFormats: [
    '0',
    '0;[Red]0',
    '0_);(0)',
    '0_);[Red](0)',
    '#,##0',
    '#,##0;[Red]#,##0',
    '#,##0_);(#,##0)',
    '#,##0_);[Red](#,##0)',
  ],

  dateFormats: [
    'm/d/yyyy',
    '[$-F800]dddd, mmmm dd, yyyy',
    'm/d;@',
    'm/d/yy;@',
    'mm/dd/yy;@',
    '[$-409]d-mmm;@',
    '[$-409]d-mmm-yy;@',
    '[$-409]dd-mmm-yy;@',
    '[$-409]mmm-yy;@',
    '[$-409]mmmm-yy;@',
    '[$-409]mmmm d, yyyy;@',
    '[$-409]m/d/yy h:mm AM/PM;@',
    'm/d/yy h:mm;@',
    '[$-409]mmmmm;@',
    '[$-409]mmmmm-yy;@',
    'm/d/yyyy;@',
    '[$-409]d-mmm-yyyy;@',
  ],

  chinaWesternDateFormat: [
    'yyyy-mm-dd;@',
    '[DBNum1][$-804]yyyy年m月d日;@',
    '[DBNum1][$-804]yyyy年m月;@',
    '[DBNum1][$-804]m月d日;@',
    'yyyy年m月d日;@',
    'yyyy年m月;@',
    'm月d日;@',
    '[$-804]aaaa;@',
    '[$-804]aaa;@',
    'yyyy/m/d;@',
    '[$-409]yyyy/m/d h:mm AM/PM;@',
    'yyyy/m/d h:mm;@',
    'm/d/yy;@',
    'm/d;@',
    'mm/dd/yy;@',
    '[$-409]d-mmm;@',
    '[$-409]d-mmm-yy;@',
    '[$-409]dd-mmm-yy;@',
    '[$-409]mmm-yy;@',
    '[$-409]mmmm-yy;@',
    '[$-409]mmmmm;@',
    '[$-409]mmmmm-yy;@',
  ],

  japanEmperorReignDateFormat: [
    '[$-411]ge.m.d;@',
    "[$-411]ggge'年'm'月'd'日';@",
  ],

  timeFormats: [
    '[$-F400]h:mm:ss AM/PM',
    'h:mm;@',
    '[$-409]h:mm AM/PM;@',
    'h:mm:ss;@',
    '[$-409]h:mm:ss AM/PM;@',
    'mm:ss.0;@',
    '[h]:mm:ss;@',
    '[$-409]m/d/yy h:mm AM/PM;@',
    'm/d/yy h:mm;@',
  ],

  chinaTimeFormats: [
    'h:mm;@',
    '[$-409]h:mm AM/PM;@',
    'h:mm:ss;@',
    '[$-409]h:mm:ss AM/PM;@',
    '上午/下午h时mm分;@',
    '上午/下午h时mm分ss秒;@',
    '[DBNum1][$-804]h时mm分;@',
    '[DBNum1][$-804]上午/下午h时mm分;@',
  ],

  textFormats: [
    '@',
  ],

  specialFormats: [
    '00000',
    '00000-0000',
    '[<=9999999]###-####;(###) ###-####',
    '000-00-0000',
  ],

  specialChinaFormats: [
    '000000',
    '[DBNum1][$-804]General',
    '[DBNum2][$-804]General',
  ],

  currencyFormats: [
    '#,##0',
    '#,##0;[Red]#,##0',
    '#,##0;-#,##0',
    '#,##0;[Red]-#,##0',
  ],

  percentageFormats: [
    '0%',
  ],

  scientificFormats: [
    '0E+00',
  ],

  accountingFormats: [
    '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  ],

  customFormats: [
    'General',
    '0',
    '0.00',
    '#,##0',
    '#,##0.00',
    '#,##0;(#,##0)',
    '#,##0;[Red](#,##0)',
    '#,##0.00;(#,##0.00)',
    '#,##0.00;[Red](#,##0.00)',
    '$#,##0;($#,##0)',
    '$#,##0;[Red]($#,##0)',
    '$#,##0.00;($#,##0.00)',
    '$#,##0.00;[Red]($#,##0.00)',
    '0%',
    '0.00%',
    '0.00E+00',
    '##0.0E+0',
    '# ?/?',
    '# ??/??',
    'm/d/yyyy',
    'd-mmm-yy',
    'd-mmm',
    'mmm-yy',
    'h:mm AM/PM',
    'h:mm:ss AM/PM',
    'hh:mm',
    'hh:mm:ss',
    'm/d/yyyy hh:mm',
    'mm:ss',
    'mm:ss.0',
    '@',
    '[h]:mm:ss',
    '$ #,##0;$ (#,##0);$ "-";@',
    ' #,##0; (#,##0); "-";@',
    '$ #,##0.00;$ (#,##0.00);$ "-"??;@',
    ' #,##0.00; (#,##0.00); "-"??;@',
    'hh:mm:ss',
    '00000',
    '# ???/???',
    '000-00-0000',
    '[$-4]dddd, mmmm dd, yyyy',
    'm/d;@',
    '[<=9999999]###-####;(###) ###-####',
    '# ?/8',
  ],

  accountingSymbol: [
    ['None', null, null],
    ['¥', '', 'ja-JP'],
    ['$', '', 'en-US'],
  ],

  specialType: [
    'Kod pocztowy', // Zip Code
    'Kod pocztowy + 4', // Zip Code + 4
    'Numer telefonu', // Phone Number
    'Numer ubezpieczenia społecznego', // Social Security Number
  ],

  specialChinaType: [
    '邮政编码',
    '中文小写数字',
    '中文大写数字',
  ],

  fractionType: [
    'Do jednej cyfry (1/4)', // Up to one digit (1/4)
    'Do dwóch cyfr (21/25)', // Up to two digits (21/25)
    'Do trzech cyfr (312/943)', // Up to three digits (312/943)
    'Jako połówki (1/2)', // As halves (1/2)
    'Jako ćwiartki (2/4)', // As quarters (2/4)
    'Jako ósemki (4/8)', // As eighths (4/8)
    'Jako szesnastki (8/16)', // As sixteenths (8/16)
    'Jako dziesiąte (3/10)', // As tenths (3/10)
    'Jako setne (30/100)', // As hundredths (30/100)
  ],

  negativeNumbers: {
    '-1234.10': '-1234.10',
    'red:1234.10': '1234.10',
    '(1234.10)': '(1234.10)',
    'red:(1234.10)': '(1234.10)',
  },

  currencyNegativeNumbers: {
    number1: '-1,234.10',
    'red:number2': '1,234.10',
    number3: '-1,234.10',
    'red:number4': '-1,234.10',
  },

  insertFunctionDialog: {
    title: 'Wstaw funkcję', // Insert Function
    functionCategory: 'Kategoria funkcji:', // Function Category:
    functionList: 'Lista funkcji:', // Function List:
    formula: 'Formuła:', // Formula:
    functionCategorys: 'Wszystko,Baza danych,Data i godzina,Inżynieria,Finanse,Informacje,Logika,Wyszukiwanie i odniesienie,Matematyka i trygonometria,Statystyka,Tekst', // All,Database,Date and Time,Engineering,Financial,Information,Logical,Lookup and Reference,Math and Trigonometry,Statistical,Text
  },
  //#endregion
};

export default pl;
