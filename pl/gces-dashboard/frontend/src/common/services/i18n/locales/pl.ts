export const localePL: any = {
  common: {
    nullDisplay: '[NULL]',
    emptyDisplay: '[Pusty]', // [Blank]
    currencyFormat: '$#,##0.00',
    max: 'Max',
    min: 'Min',
    maxValue: 'Maksymalna wartość', // Max Value
    minValue: 'Minimalna wartość', // Min Value
    infinity: 'Nieskończoność', // Infinity
    negativeInfinity: '-Nieskończoność', // -Infinity
    NaN: 'To nie jest liczba', // Not a Number
    on: 'Włącz', // On
    off: 'Wyłącz', // Off
    yes: 'Tak', // Yes
    no: 'Nie', // No
    true: 'Prawda', // True
    false: 'Fałsz', //False
    asc: 'Rosnąco', // Ascending
    desc: 'Malejąco', // Descending
    noSort: 'Nie sortuj', // No Sort
    dateFormat: 'MM/DD/YYYY',
    default: 'Domyślny', // Default
    reload: 'Przeładuj', // Reload
    builtIn: 'Wbudowany', // Built-in
    edit: 'Edytuj', // Edit
    others: 'Inne', // Others
  },
  documentType: {
    Unknown: 'nieznany', // Unknown
    Dashboard: 'Dashboard', // Dashboard
    Dataset: 'Zestaw danych', // Dataset
    DataSource: 'Źródło danych', // DataSource
    Image: 'Obraz', // Image
    Theme: 'Motyw', // Theme
    MapHierarchy: 'Hierarchia', // MapHierarchy
    GeoJson: 'GeoJson',
    Report: 'Raport', // Report 
    FloorPlan: 'FloorPlan',
  },
  actions: {
    copy: 'Kopiuj', // Copy
    cut: 'Wytnij', // Cut
    paste: 'Wklej', // Paste
    rename: 'Zmień nazwę…', // Rename\u2026
    duplicate: 'Duplikuj', // Duplicate
    delete: 'Skasuj', // Delete
    remove: 'Usuń', // Remove
    hide: 'Ukryj', // Hide
    unhide: 'Pokaż', // Unhide
    undo: 'Cofnij', // Undo
    redo: 'Przerób', // Redo
    save: 'Zapisz', // Save
    edit: 'Edytuj', // Edit
    reset: 'Reset', // Reset
    export: 'Eksport', // Export
  },
  aggregationMethods: {
    sum: 'Sum',
    cnt: 'Count',
    avg: 'Average',
    max: 'Max',
    min: 'Min',
    dst: 'Distinct Count',
    none: 'None',
    list: 'List',
    fst: 'First',
  },
  aggregationAreas: {
    trellisTable: 'Wykres całkowity', // Total Chart
    trellisRow: 'Rząd krat', // Trellis Row
    trellisColumn: 'Kolumna krat', // Trellis Column
    trellisCell: 'Komórka krat', // Trellis Cell
    advanced: 'Zaawansowane', // Advanced
    dataRole: 'Rola danych', // Data Role
  },
  conditions: {
    equal: 'Równy do', // Equal To
    notEqual: 'Nie równy do',
    greater: 'Większy od', // Greater Than
    equalOrGreater: 'Większy lub Równy do', // Greater Than or Equal To
    less: 'Mniejszy od', // Less Than
    equalOrLess: 'Mniejszy lub Równy do', // Less Than or Equal To
    between: 'Pomiędzy', // Between
    notBetween: 'Nie pomiędzy', // Not Between
    and: '~',
    or: 'Lub', // Or
  },
  chartTypes: {
    column: 'Wykres kolumnowy', // Column Chart
    rangeColumn: 'Wykres kolumnowy zakresu', // Range Column Chart
    rangeBar: 'Wykres słupkowy zakresu', // Range Bar Chart
    rangeArea: 'Wykres warstwowy zakresu', // Range Area Chart
    stackedColumn: 'Skumulowany wykres kolumnowy', // Stacked Column Chart
    percentStackedColumn: 'Procentowy skumulowany wykres kolumnowy', // Percent Stacked Column Chart
    bar: 'Wykres słupkowy', // Bar Chart
    stackedBar: 'Skumulowany wykres słupkowy', // Stacked Bar Chart
    percentStackedBar: 'Procentowy skumulowany wykres słupkowy', // Percent Stacked Bar Chart
    line: 'Wykres liniowy', // Line Chart
    area: 'Wykres warstwowy', // Area Chart
    stackedArea: 'Skumulowany wykres warstwowy', // Stacked Area Chart
    percentStackedArea: 'Skumulowany procentowy wykres warstwowy', // Percent Stacked Area Chart
    pie: 'Wykres kołowy', // Pie Chart
    donut: 'Wykres pierścieniowy', // Donut Chart
    rose: 'Wykres różany', // Rose Chart
    sunburst: 'Wykres Sunburst', // Sunburst Chart
    barInPolar: 'Wykres słupkowy we współrzędnych biegunowych', // Bar Chart In Polar Coordinates
    stackedBarInPolar: 'Skumulowany wykres słupkowy we współrzędnych biegunowych', // Stacked Bar Chart In Polar Coordinates
    radialStackedBar: 'Wykres słupkowy skumulowany promieniowy', // Radial Stacked Bar Chart
    radar: 'Wykres radarowy', // Radar Chart
    filledRadar: 'Wypełniony wykres radarowy', // Filled Radar Chart
    scatter: 'Rozproszony', // Scatter
    bubble: 'Wykres bąbelkowy', // Bubble Chart
    combined: 'Schemat łączony', // Combined Chart
    map: 'Mapa', // Map
    treeMap: 'Mapa drzewa', // Treemap
    funnel: 'Lejek', // Funnel
    gauge: 'Miernik', // Gauge
    indicator: 'Wskaźnik', // Indicator
    kpi: 'Wykres KPI', // KPI Chart
    floorPlan: 'Plan budynku', // Floor Plan
    pivotTable: 'Tabela przestawna', // Pivot Table
    spreadSource: 'Wykres rozproszony', // Calc Chart
    multiSource: 'Wykres wieloźródłowy', // Multi-Source Chart
  },
  components: {
    pivotTable: 'Tabela przestawna', // Pivot Table
    rawDataTable: 'Tabela danych', // Data Table
    kpiMatrix: 'Macierz KPI', // KPI Matrix
    webContent: 'Wbudowana zawartość internetowa', // Embedded Web Content
    container: 'Kontener', // Container
    tabContainer: 'Pojemnik kontenerowy', // Tab Container
    image: 'Obraz', // Image
    richText: 'Tekst sformatowany', // Rich Text
    labelSlicer: 'Fragmentator etykiet', // Label Slicer
    treeSlicer: 'Wielowymiarowa fragmentator', // Multi-dimensional Slicer
    comboSlicer: 'Wielowymiarowy fragmentator listy rozwijanej', // Multi-dimensional Dropdown Slicer
    dateRangeSlicer: 'Fragmentator zakresu dat', // Date Range Slicer
    relativeDateSlicer: 'Fragmentator dat względnych', // Relative Dates Slicer
    dataRangeSlicer: 'Fragmentator zakresu danych', // Data Range Slicer
    devTools: 'Narzędzia deweloperskie', // Dev Tools
  },
  sortTypes: {
    auto: 'Auto',
    value: 'Wartość', // Value
    manual: 'Ręczne', // Manual
    column: 'Pole', // Field
  },
  lineTypes: {
    solid: 'Pełny', // Solid
    dashed: 'Przerywany', // Dashed
  },
  linkTypes: {
    inner: 'Link wewnętrzny', // Internal Link
    outer: 'Link zewnętrzny', // External Link
    none: 'Brak Linku', // No Link
  },
  fontTypes: {
    default: 'Domyślny', // Default
    serif: 'Szeryf', // Serif
    sansSerif: 'Sans-Szeryf', // Sans-Serif
  },
  appBar: {
    defaultTitle: 'Niezatytułowany', // Untitled
    unsaved: 'Niezapisany', // Unsaved
    crossFilter: 'Filtr krzyżowy', // Cross Filter
    crossFilter_pattern: 'Filtr krzyżowy: {{state}}', // Cross Filter: {{state}}
    togglePageTab: 'Pokaż / ukryj zakładkę strony', // Show/Hide Page Tab
    displayMode: {
      auto: 'Auto',
      custom: 'Niestandardowy', // Custom
      fitToScreen: 'Dopasuj do ekranu', // Fit to Screen
      fitToContainer: 'Dopasuj do kontenera', // Fit to Container
      fitToWidth: 'Dopasuj do szerokości', // Fit to Width
      fitToHeight: 'Dopasuj do wysokości', // Fit to Height
      fitToPage: 'Dopasuj do strony', // Fit to Page
    },
    slideShow: 'Pokaz slajdów', // Slide Show
    refresh: 'Odświerz', // Refresh
    preview: 'Podgląd', // Preview
    documentSetting: 'Ustawienia dokumentu', // Document Settings
    autoLayout: 'Układ automatyczny', // Auto Layout
    customLayout: 'Układ niestandardowy', // Custom Layout
    stretch_pattern: 'Rozciągnij treść: {{state}}', // Stretch Content: {{state}}
    dataBinding: 'Wiązanie danych', // Data Binding
    inspector: 'Inspektor', // Inspector
    scenarioList: 'Lista scenariuszy', // Scenario List
    scenarioList_empty: 'Wszystkie elementy są na stronie.', // All elements are on the page.
    support: 'Pomoc & Wsparcie', // Help & Support
    back: 'Powrót', // Back
    exit: 'Wyjście', // Exit
    interactionSetting: 'Ustawienia interakcji', // Interaction Setting
    showGridLine: 'Pokaż linię siatki', // Show Grid Line
    hideGridLine: 'Ukryj linię siatki', // Hide Grid Line
    mobileDesigner: 'Projektant mobilny', // Mobile Designer
    webDesigner: 'Projektant stron internetowych', // Web Designer
    pageBack: 'Powrót', // Back
    enableOverlap: 'Włącz nakładanie się', // Enable Overlap
    disableOverlap: 'Wyłącz nakładanie się', // Disable Overlap
    expand: 'Rozwiń inspektor', // Expand Inspector
    collapse: 'Zwiń inspektor', // Collapse Inspector
    crossFilterMode: {
      off: 'Wyłącz', // Off
      singleSource: 'Pojedyncze źródło', // Single Source
      multiSource: 'Wiele źródeł', // Multi-Source
    },
  },
  menuBar: {
    title: 'Dashboard', // Dashboard
    categories: {
      charts: {
        title: 'Wizualizacja danych', // Data Visualization
        groups: {
          charts: 'Wykresy', // Charts
          tables: 'Tabele', // Tables
          maps: 'Mapy', // Maps
          advanced: 'Zaawansowane', // Advanced
        },
      },
      components: {
        title: 'Komponenty', // Components
        groups: {
          containers: 'Kontenery', // Containers
          components: 'Komponenty', // Components
        },
      },
      slicers: {
        title: 'Fragmentatory', // Slicers
        builtInTitle: 'Wbudowane fragmentatory', // Built-in Slicers
        customTitle: 'Niestandardowe fragmentatory', // Custom Slicers
      },
      visuals: {
        title: 'Niestandardowa wizualizacja', // Custom Visualization
        placeholder: 'Brak niestandardowej wizualizacji', // No custom visualization available
        searchPlaceholder: 'Szukaj...', // Search...
        smallIcons: 'Małe ikony', // Small Icons
        largeIcons: 'Duże ikony', // Large Icons
        list: 'Lista', // List
      },
    },
  },
  dataBindingPanel: {
    chooseDataset: 'Wybierz zbiór danych', // Choose Dataset
    loadingDatasetList: 'Ładowanie listy zbiorów danych z serwera...', // Loading dataset list from server...
    loadDatasetListFailed: 'Nie udało się załadować listy zbiorów danych z serwera!', // Failed to load dataset list from server!
    searchField: 'Szukaj...', // Search...
    measures: 'Miary', // Measures
    dimensions: 'Wymiary', // Dimensions
    bindingHint: 'Wybierz zbiór danych z powyższej listy do powiązania danych.', // Please select a dataset from the above list for data binding.
    values: 'Wartości', // Values
    lower: 'Niższa wartość', // Lower Value
    upper: 'Wyższa wartość', // Upper Value
    leftValue: 'Lewa oś wartości', // Left Value Axis
    rightValue: 'Prawa oś wartości', // Right Value Axis
    axis: 'Oś (kategoria)', // Axis (Category)
    axis_x: 'Oś X', // X Axis
    axis_y: 'Oś Y', // Y Axis
    legend: 'Legenda (seria)', // Legend (Series)
    category: 'Kategoria', // Category
    details: 'Detale', // Details
    rows: 'Wiersze', // Rows
    columns: 'Kolumny', // Columns
    location: 'Region', // Region
    latitude: 'Szerokość', // Latitude
    longtitude: 'Długość', // Longitude
    layers: 'Warstwy', // Layers
    mapTiles: 'Regiony', // Regions
    scatter: 'Punkty', // Points
    color: 'Kolor', // Color
    size: 'Rozmiar', // Size
    shape: 'Kształt', // Shape
    trellisRows: 'Wiersze kratowe', // Trellis Rows
    trellisColumns: 'Kolumny kratowe', // Trellis Columns
    tooltip: 'Etykietka', // Tooltip
    mainValue: 'Aktualna wartość', // Actual Value
    comparisonValue: 'Docelowa wartość', // Target Value
    forecastValue: 'Prognozowana wartość', // Forecast Value
    imageSource: 'Źródło obrazu', // Image Source
    pivotSettingHint: 'Przeciągnij tutaj pola danych.', // Drag data fields here.
    pivotSettingHintRunTime: 'Kliknij + aby dodać pola tutaj.', // Click + to add fields here.
    aggregationMethod: 'Metoda agregacji', // Aggregation Method
    editName: 'Zmień nazwę…', // Rename\u2026
    editFormat: 'Edytuj Format…', // Edit Format\u2026
    deleteFormat: 'Usuń Format', // Delete Format
    createHierarchy: 'Utwórz pole hierarchii…', // Create Hierarchy Field\u2026
    editHierarchy: 'Edytuj pole hierarchii…', // Edit Hierarchy Field\u2026
    deleteHierarchy: 'Usuń pole hierarchii', // Delete Hierarchy Field
    editNameHierarchyItem: 'Zmień nazwę…', // Rename\u2026
    deleteHierarchyItem: 'Usuń', // Remove
    exactDate: 'Dokładna data', // Exact Date
    ymd: 'Rok/Miesiąc/Dzień', // Year/Month/Day
    yq: 'Rok/Kwartał', // Year/Quarter
    ym: 'Rok/Miesiąc', // Year/Month
    yw: 'Rok/Tydzień', // Year/Week
    runningCalculation: 'Trwa obliczanie…', // Running Calculation\u2026
    movingCalculation: 'Przenoszę obliczenia…', // Moving Calculation\u2026
    origin: 'Oryginalna wartość', // Original Value
    addMoMCalculation: 'Obliczanie z miesiąca na miesiąc', // MoM Calculation
    addYoYCalculation: 'Obliczanie z roku na rok', // YoY Calculation
    accountingCalculation: 'Obliczanie percentyla…', // Percentile Calculation\u2026
    rankingCalculation: 'Obliczanie rankingu…', // Ranking Calculation\u2026
    addAccountingCalculation: 'Obliczanie percentyla', // Percentile Calculation
    addRankingCalculation: 'Obliczanie rankingu', // Ranking Calculation
    totalRanking: 'Całkowity ranking', // Total Ranking
    groupRanking: 'Ranking grupowy', // Group Ranking
    totalAccounting: 'Całkowity percentyl', // Total Percentile
    groupAccounting: 'Percentyl grupy', // Group Percentile
    dateCalcualtionHint: 'Aby to włączyć, potrzebna jest kolumna z datą.', // Need a date column to enable this.
    advanced: 'Zaawansowane…', // Advanced\u2026
    filter: 'Filtr…', // Filter\u2026
    value: 'Wartość', // Value
    ratio: 'Stosunek', // Ratio
    difference: 'Różnica', // Difference
    percentDifference: 'Różnica procentowa', // Percent Difference
    slicerColumn: 'Kolumny', // Columns
    search: 'Szukaj...', // Search...
    loadFinished: 'Zakończono', // Finished
    loadWaitting: 'Czekanie', // Waiting
    loadFailed: 'Niepowodzenie', // Failed
    seriesAxisLabel: 'Oś', // Axis
    seriesAxis: {
      both: 'Obie osie', // Both Axis
      left: 'Lewa oś', // Left Axis
      right: 'Prawa oś', // Right Axis
    },
    quickFunction: 'Szybkie funkcje', // Quick Functions
    pastValue: 'Wartość przeszła', // Past Value
    pastYear: 'Poprzedni rok', // Past Year
    pastQuarter: 'Poprzedni kwartał', // Past Quarter
    pastMonth: 'Poprzedni miesiąc', // Past Month
    pastWeek: 'Poprzedni tydzień', // Past Week
    changeOverTime: 'Zmienia się w czasie', // Change Over Time
    growthRate: 'Tempo wzrostu', // Growth Rate
    fromPreviousPeriod: 'Z poprzedniego okresu', // From Previous Period
    fromSamePeriodPreviousYear: 'Ten sam okres, rok po roku', // Same Period, YoY
    fromSamePeriodPreviousQuarter: 'Ten sam okres, kwartał po kwartale', // Same Period, QoQ
    fromSamePeriodPreviousMonth: 'Ten sam okres, miesiąc po miesiącu', // Same Period, MoM
    fromSamePeriodPreviousWeek: 'Ten sam okres, tydzień po tygodniu', // Same Period, WoW
    fromSamePeriodPreviousYearPercent: 'Ten sam okres, rok po roku %', // Same Period, YoY%
    fromSamePeriodPreviousQuarterPercent: 'Ten sam okres, kwartał po kwartale %', // Same Period, QoQ%
    fromSamePeriodPreviousMonthPercent: 'Ten sam okres, miesiąc po miesiącu %', // Same Period, MoM%
    fromSamePeriodPreviousWeekPercent: 'Ten sam okres, tydzień po tygodniu %', // Same Period, WoW%
    changeOverTimePercent: '% Zmienia się w czasie', // % Change Over Time
    dateBasedFunctions: 'Funkcje oparte na datach...', // Date Based Functions...
    growth: 'Wzrost', // Growth
    singleValue: 'Liczba', // Number
    Image: 'Obraz', // Image
    bulletGraph: 'Wykres punktowy', // Bullet Graph
    paretoGraph: 'Wykres Pareto', // Pareto Graph
    hBarGraph: 'Wykres HBar', // HBar Graph
    diagram: 'Diagram', // Diagram
    trend: 'Tendencja', // Trend
    bar: 'Belka', // Bar
    area: 'Obszar', // Area
    winLoss: 'Wygrana-Przegrana', // Win-Loss
    number: 'Liczba', // Number
    editText: 'Edytuj', // Edit
    alignmentSetting: 'Wyrównanie tekstu', // Text Alignment
    sparklineSetting: 'Opcje…', // Settings\u2026
    moveUp: 'W górę', // Move Up
    moveDown: 'W dół', // Move Down
    collapse: 'Zwiń', // Collapse
    expand: 'Rozwiń', // Expand
    floorPlanArea: 'Obszar', // Area
    floorPlanColor: 'Kolor', // Color
    renderSetting: 'Ustawienia renderowania', // Render Setting
  },
  inspector: {
    searchBoxPlaceholder: 'Wpisz tutaj nazwę nieruchomości...', // Enter property name here...
    warning: 'Konfiguracja właściwości jest nieprawidłowa, sprawdź capabilities.options', // The property configuration is incorrect, please check the capabilities.options
    categories: {
      general: 'Ogólne', // General
      layout: 'Układ', // Layout
      appearance: 'Wygląd', // Appearance
      documentAppearance: 'Wygląd dokumentu', // Document Appearance
      globalSettings: 'Ustawienia ogólne', // Global Settings
      title: 'Tytuł', // Title
      dataLabel: 'Etykiety danych', // Data Labels
      legend: 'Legenda', // Legend
      axis_category: 'Oś (kategoria)', // Axis(Category)
      axis_value: 'Oś wartości', // Value Axis
      axis_value1: 'Oś wartości 1', // Value Axis 1
      axis_value2: 'Oś wartości 2', // Value Axis 2
      axis_x: 'Oś-X', // X-Axis
      axis_y: 'Oś-Y', // Y-Axis
      chartStyle: 'Styl wykresu', // Chart Style
      content: 'Zawartość', // Content
      grandTotal: 'Sumy całkowite', // Grand Totals
      subTotal: 'Sumy pośrednie', // Sub Totals
      rowHeader: 'Nagłówki wierszy', // Row Headers
      columnHeader: 'Nagłówki kolumn', // Column Headers
      header: 'Nagłówek', // Header
      tabStrip: 'Pasek kart', // Tab Strip
      activeTab: 'Aktywna karta', // Active Tab
      link: 'Link', // Link
      mapStyle: 'Styl mapy', // Map Style
      interaction: 'Interakcja', // Interaction
      labelStyle: 'Styl etykiety', // Label Style
      dataLabelStyle: 'Styl etykiety danych', // Data Label Style
      deltaLabelStyle: 'Porównanie stylu etykiety', // Comparison Label Style
      percentageLabelStyle: 'Styl etykiety wartości procentowej', // Percentage Label Style
      subTitleLabelStyle: 'Styl podtytułu', // Sub Title Style
      valueSetting: 'Ustawienie wartości', // Value Setting
      rangeSetting: 'Ustawienie zakresu', // Range Setting
      webContent: 'Zawartość sieci', // Web Content
      switchMap: 'Przełącz mapę', // Switch Map
      switchFloorPlan: 'Zmień plan budynku', // Switch Floor Plan
      carousel: 'Karuzela', // Carousel
      datePickerDefaultSetting: 'Ustawienie domyślne selektora dat', // Date Picker Default Setting
      tableSetting: 'Ustawienie tabeli', // Table Setting
      tableStyleTemplate: 'Styl szablonu', // Style Template
      tables: {
        corner: 'Obszar narożny', // Corner Area
        columnHeader: 'Nagłówki kolumn', // Column Headers
        rowHeader: 'Nagłówki wierszy', // Row Headers
        subTotals: 'Obszar sum podrzędnych', // Sub Totals Area
        grandTotals: 'Obszar sum całkowitych', // Grand Totals Area
        firstDataStripe: 'Pierwszy pasek danych', // First Data Stripe
        secondDataStripe: 'Drugi pasek danych', // Second Data Stripe
      },
      activeTabSetting: 'Ustawienie aktywnej karty', // Active Tab Setting
      inactiveTabSetting: 'Ustawienie nieaktywnej karty', // Inactive Tab Setting
      values: 'Wartości', // Values
      menuSetting: 'Ustawienia menu', // Menu Setting
      data: 'Dane', // Data
      devConfig: 'Ustawienia narzędzi deweloperskich', // Dev Tools Setting
      trellis: 'Krata', // Trellis
      tooltip: 'Etykietka', // Tooltip
    },
    properties: {
      common: {
        dashboardFilters: 'Filtry ogólne', // Global Filters
        parameters: 'Parametry', // Parameters
        crossFilter: 'Filtr krzyżowy', // Cross Filter
        crossFilterMode: 'Tryb filtra krzyżowego', // Cross Filter Mode
        jumpToDocuments: 'Skocz do', // Jump To
        foregroundColor: 'Kolor pierwszego planu', // Foreground Color
        backgroundColor: 'Kolor tła', // Background Color
        backgroundImage: {
          src: 'Obraz w tle', // Background Image
          repeat: 'Powtórz', // Repeat
          size: 'Rozmiar', // Size
          hAlign: 'Wyrównaj w poziomie', // H-Align
          vAlign: 'Wyrównaj w pionie', // V-Align
        },
        imageRepeat: {
          none: 'Nie powtarzaj', // No Repeat
          repeat: 'Powtarzaj', // Repeat
          x: 'Powtarzaj X', // RepeatX
          y: 'Powtarzaj Y', // RepeatY
          space: 'Przestrzeń', // Space
          round: 'Okrągły', // Round
        },
        imageSize: {
          original: 'Oryginał', // Original
          contain: 'Zawiera', // Contain
          cover: 'Pokrywa', // Cover
          stretch: 'Rozciągnięty', // Stretched
        },
        autoPlay: 'Automatyczne odtwarzanie', // Auto Play
        autoPlayInterval: 'Interwał automatycznego odtwarzania (sekundy)', // Auto Play Interval (seconds)
        pageSwitchAnimation: 'Animacja zmiany strony', // Page Switch Animation
        autoRefresh: 'Automatyczne odświeżanie', // Auto Refresh
        autoRefreshInterval: 'Częstotliwość odświeżania', // Refresh Interval
        autoRefreshType: {
          none: 'Żaden', // None
          polling: 'Ankieta', // Polling
          realTime: 'Czas rzeczywisty', // Real Time
        },
        promptUsingMobileView: 'Monituj za pomocą widoku mobilnego', // Prompt Using Mobile View
        showTitle: 'Pokaż Tytuł', // Show Title
        autoTitle: 'Tytuł automatyczny', // Auto Title
        title: 'Tytuł', // Title
        alignment: 'Wyrównanie', // Alignment
        titleTextStyle: 'Ustawienie czcionki tytułu', // Title Font Setting
        legendTextStyle: 'Ustawienie czcionki legendy', // Legend Font Setting
        hAlign: {
          left: 'Lewo', // Left
          center: 'Środek', // Center
          right: 'Prawo', // Right
        },
        vAlign: {
          top: 'Góra', // Top
          middle: 'Środek', // Middle
          bottom: 'Dół', // Bottom
        },
        position: 'Pozycja', // Position
        surroundingPosition: {
          top: 'Góra', // Top
          right: 'Prawo', // Right
          bottom: 'Dół', // Bottom
          left: 'Lewa', // Left
        },
        showSizeLegend: 'Pokaż rozmiar legendy', // Show Size Legend
        border: {
          label: 'Obramowanie', // Border
          color: 'Kolor obramowania', // Border Color
          type: {
            label: 'Typ obramowania', // Border Type
            none: 'Brak', // None
            default: 'Domyślnie', // Default
            roundCorner: 'Zaokroąglony róg', // Round Corner
            thickCorner: 'Gruby róg', // Thick Corner
            doubleBorder: 'Podwójne obramowanie', // Double Border
            stylishBorder_1: 'Stylowe obramowanie 1', // Stylish Border 1
            stylishBorder_2: 'Stylowe obramowanie 2', // Stylish Border 2
          },
          size: {
            label: 'Rozmiar obramowania', // Border Size
            thin: 'Cienki', // Thin
            medium: 'Średni', // Medium
            thick: 'Gruby', // Thick
          },
        },
        font: {
          title: 'Czcionka', // Font
        },
        contentTextStyle: 'Ustawienie czcionki zawartości', // Content Font Setting
        headerTextStyle: 'Ustawienie czcionki nagłówka', // Header Font Setting
        tabStripTextStyle: 'Ustawienie czcionki', // Font Setting
        padding: 'Podszycie', // Padding
        margin: 'Margines', // Margin
        style: 'Styl', // Style
        linkType: 'Typ linku', // Link Type
        url: 'Url', // Url
        targetPage: 'Strona docelowa', // Target Page
        format: 'Format', // Format
        orientation: {
          title: 'Orientacja', // Orientation
          horizontal: 'Poziomo', // Horizontal
          vertical: 'Pionowo', // Vertical
          diagonal: 'Przekątna', // Diagonal
          auto: 'Automatyczny', // Auto
        },
        auto: 'Automatyczny', // Auto
        shadow: {
          label: 'Cień', // Shadow
          color: 'Kolor cienia', // Shadow Color
          type: {
            label: 'Typ cienia', // Shadow Type
            none: 'Brak', // None
            both: 'Oba', // Both
            inner: 'Wewnętrzny', // Inner
            outer: 'Zewnętrzny', // Outer
          },
          size: {
            label: 'Rozmiar cienia', // Shadow Size
            thin: 'Cienki', // Thin
            medium: 'Średni', // Medium
            thick: 'Gruby', // Thick
          },
        },
        scenarioStyle: {
          batchSetting: 'Styl ustawień wsadowych', // Batch Setting Style
          label: 'Szablon stylu', // Style Template
        },
        connectingLineColor: 'Kolor linii łączącej', // Connecting Line Color
        scrollbarMode: 'Tryb paska przewijania', // Scrollbar Mode
        tableAlignment: 'Wyrównanie tekstu', // Text Alignment
        fontStyle: {
          title: 'Styl czcionki', // Font Style
          Normal: 'Normalna', // Normal
          Italic: 'Italic', // Kursywa
        },
        fontWeight: {
          title: 'Grubość czcionki', // Font Weight
          Normal: 'Normalna', // Normal
          Bold: 'Pogrubienie', // Bold
          Heavy: 'Ciężki', // Heavy
          Light: 'Lekki', // Light
        },
        fontColor: 'Kolor czcionki', // Font Color
        fontLabelOfTitle: 'Ustawienie czcionki tytułu', // Title Font Setting
        fontLabelOfContent: 'Ustawienie czcionki zawartości', // Content Font Setting
        fontSize: 'Rozmiar czcionki', // Font Size
        fontFamily: 'Rodzina czcionek', // Font Family
        pinAnnotation: 'Przypnij adnotację', // Pin Annotation
        visibleMenuItems: 'Widoczne elementy menu', // Visible Menu Items
        scenarioName: 'Nazwa scenariusza', // Scenario Name
      },
      dashboard: {
        theme: 'Motyw', // Theme
        autoFontSize: 'Samodostosowujący się rozmiar czcionki', // Self-adaptive Font Size
        scenarioBackgroundColor: 'Kolor tła scenariusza', // Scenario Background Color
        border: 'Obramowanie', // Border
        shadow: 'Cień', // Shadow
        pageTabStripVisible: 'Widoczność paginacji', // Pagination Visibility
        pageTabStripStyle: {
          title: 'Styl paginacji', // Pagination Style
          tabs: 'Zakładki', // Tabs
          navigator: 'Nawigator', // Navigator
        },
        animationType: {
          fadeIn: 'Pojawianie się', // Fade in
          slide: 'Wślizg', // Slide
        },
        pageTabStripPosition: 'Pozycja paginacji', // Pagination Position
        showPageBorder: 'Pokaż obramowanie strony', // Show Page Border
        documentRatio: 'Współczynnik dokumentu', // Document Ratio
        stretch: 'Rozciągnij, aby dopasować współczynnik', // Stretch To Fit Ratio
        pageFitMode: 'Rozmiar strony', // Page Size
        fixedSize: 'Stały rozmiar', // Fixed Size
        pageWidth: 'Szerokość strony', // Page Width
        pageHeight: 'Wysokość strony', // Page Height
        palette: 'Paleta', // Palette
        cornerRadius: 'Promień narożnika', // Corner Radius
        snapToGrid: 'Przyciągaj do siatki', // Snap To Grid
        snap2Guides: 'Przyciągaj do prowadnic', // Snap To Guides
        graphOpacity: 'Krycie wykresu', // Graph Opacity
        snap: 'Przyciągaj', // Snap
        autoGradient: 'Automatyczny gradient', // Auto Gradient
      },
      charts: {
        dataLabel: {
          showDataLabel: 'Pokaż etykietę danych', // Show Data Label
          displayUnit: 'Wyświetlacz', // Display Unit
          value: 'Wartość', // Value
          size: 'Rozmiar', // Size
          color: 'Kolor', // Color
          shape: 'Kształt', // Shape
          location: 'Lokalizacja', // Location
          series: 'Nazwa serii', // Series Name
          category: 'Nazwa kategorii', // Category Name
          displayMode: {
            title: 'Tryb wyświetlania', // Display Mode
            auto: 'Automatyczny', // Auto
            all: 'Wszystko', // All
            smart: 'Smart', // Smart
          },
          position: {
            around: 'Na około', // Around
            onSlice: 'Na plastrach', // On Slice
            auto: 'Automatyczny', // Auto
          },
          percentageDisplay: 'Wartość jako procent', // Value As Percentage
          details: 'Szczegóły', // Details
          dataLabelTextStyle: 'Ustawienie czcionki etykiety danych', // Data Label Font Setting
          area: 'Obszar', // Area
          yPlacement: {
            title: 'Względne położenie względem kategorii', // Relative Position To Category
            near: 'Blisko', // Near
            center: 'Środek', // Center
            far: 'Daleko', // Far
          },
          xPlacement: {
            title: 'Położenie względem osi wartości', // Relative Position To Value Axis
            near: 'Blisko', // Near
            center: 'Środek', // Center
            far: 'Daleko', // Far
          },
          angle: {
            title: 'Kierunek', // Direction
            horizontal: 'Poziomy', // Horizontal
            perpendicularToY: 'Prostopadle do osi wartości', // Perpendicular To Value Axis
            parallelToY: 'Równolegle do osi wartości', // Parallel To Value Axis
          },
          connectingLineMode: {
            title: 'Podłączanie trybu linii', // Connecting Line Mode
            none: 'Brak', // None
            always: 'Zawsze', // Always
            auto: 'Automatycznie', // Auto
          },
          connectingLineWidth: {
            title: 'Szerokość linii', // Line Width
            thin: 'Cienka', // Thin
            medium: 'Średnia', // Medium
            thick: 'Gruba', // Thick
          },
          xOffset: 'Odsunięcie wzdłuż kategorii', // Offset Along Category
          yOffset: 'Odsunięcie wzdłuż osi wartości', // Offset Along Value Axis
          showShape: 'Pokaż kształt', // Show Shape
          shapeImage: 'Kształt obrazu', // Shape Image
          shapeXCenter: 'Kształt środka X', // Shape X-Center
          shapeYCenter: 'Kształt środka Y', // Shape Y-Center
          shapeXScale: 'Kształt skali X', /// Shape X-Scale
          shapeYScale: 'Kształt skali Y', /// Shape Y-Scale
        },
        showLegend: 'Pokaż legendę', // Show Legend
        legendWrap: 'Zwiń legendę', // Wrap Legend
        legendAutoSize: 'Automatyczny rozmiar', // Auto Size
        legendHAlign: 'Wyrównanie w poziomie', // H-Align
        legendVAlign: 'Wyrównanie w pionie', // V-Align
        legendWidth: 'Szerokość', // Width
        legendHeight: 'Wysokość', // Height
        axis: {
          showAxis: 'Pokaż osie', // Show Axis
          showAxisLine: 'Pokaż linię osi', // Show Axis Line
          showGridLine: 'Pokaż linie siatki', // Show Grid Lines
          gridLineColor: 'Kolor linii siatki', // Grid Line Color
          showTickLabel: 'Pokaż etykiety znaczników', // Show Tick Labels
          showTickMark: 'Pokaż znaczniki', // Show Tick Marks
          lableDirection: 'Kierunek etykiety', // Label Direction
          categoryOrigin: 'Przecięcie', // Intersection
          maxValue: 'Maksymalna wartość', // Max Value
          minValue: 'Minimalna wartość', // Min Value
          interval: 'Interwał', // Interval
          dataFormat: 'Format danych…', // Data Format\u2026
          displayUnit: 'Wyświetlacz', // Display Unit
          showUnitsLabel: 'Pokaż etykietę jednostek', // Show units\' label
          unitsLabelPosition: 'Pozycja etykiety jednostki', // Unit Label Position
          labelPosition: {
            onTitle: 'Na tytuł', // On Title
            onScale: 'Na skalę', // On Scale
          },
          formats: {
            general: 'Ogólny', // General
            number: 'Liczba', // Number
            currency: 'Waluta', // Currency
            percentage: 'Procent', // Percentage
            custom: 'Niestandardowy', // Custom
          },
          scaleType: 'Skala', // Scale
          scaleTypes: {
            Linear: 'Liniowy', // Linear
            Ordinal: 'Porządkowy', // Ordinal
            Percentage: 'Procentowy', // Percentage
            Logarithmic: 'Logarytmiczny', // Logarithmic
          },
          axisTextStyle: 'Ustawienie czcionki osi', // Axis Font Setting
        },
        displayUnit: {
          auto: 'Automatyczny', // Auto
          none: 'Brak', // None
          e2: 'Setki', // Hundreds
          e3: 'Tysiące', // Thousands
          e4: '10K', // 10K
          e5: '100K', // 100K
          e6: 'Miliony', // Millions
          e7: '10M', // 10M
          e8: '100M', // 100M
          e9: 'Miliardy', // Billions
          e12: 'Biliony', // Trillions
        },
        autoGapWidth: 'Automatyczna szerokość szczeliny', // Auto Gap Width
        categoryGapWidth: 'Luka w kategorii %', // Category Gap %
        seriesGapWidth: 'Luka w serii %', // Series Gap %
        showTooltip: 'Pokaż podpowiedź', // Show Tooltip
        tooltipMode: {
          title: 'Tryb podpowiedzi', // Tooltip Mode
          none: 'Brak', // None
          dataPointTooltip: 'Punkt danych', // Data Point
          categoryTooltip: 'Kategoria', // Category
        },
        showCategoryTrackingArea: 'Pokaż obszar śledzenia kategorii', // Show Category Tracking Area
        categoryTrackingAreaColor: 'Kolor obszaru śledzenia', // Tracking Area Color
        showCategoryTrackingLine: 'Pokaż linię śledzenia kategorii', // Show Category Tracking Line
        categoryTrackingLineColor: 'Kolor linii śledzenia', // Tracking Line Color
        categoryTrackingLineType: 'Typ linii śledzenia', // Tracking Line Type
        categoryTrackingLineWidth: 'Szerokość linii śledzenia', // Tracking Line Width
        showPointTrackingCrossX: 'Pokaż oś wartości punktów', // Show Point Cross Value Axis
        pointTrackingCrossXWidth: 'Szerokość linii osi wartości poprzecznej', // Cross Value Axis Line Width
        pointTrackingCrossXType: 'Typ linii osi wartości poprzecznej', // Cross Value Axis Line Type
        pointTrackingCrossXColor: 'Kolor linii osi wartości przecięcia', // Cross Value Axis Line Color
        showPointTrackingCrossY: 'Pokaż punkt przecięcia osi kategorii', // Show Point Cross Category Axis
        pointTrackingCrossYWidth: 'Szerokość linii osi poprzecznej kategorii', // Cross Category Axis Line Width
        pointTrackingCrossYType: 'Typ linii osi poprzecznej kategorii', // Cross Category Axis Line Type
        pointTrackingCrossYColor: 'Kolor linii osi poprzecznej kategorii', // Cross Category Axis Line Color
        showDots: 'Pokaż kropki', // Show Dots
        innerRadias: 'Promień wewnętrzny', // Inner Radius
        startAngle: 'Kąt początkowy', // Start Angle
        sweep: 'Czyszczenie', // Sweep
        axisMode: {
          title: 'Tryb osi', // AxisMode
          cartesian: 'Kartezjański', // Cartesian
          radial: 'Radialny', // Radial
          polygonal: 'Wielokątny', // Polygonal
        },
        lineStyle: {
          title: 'Styl linii', // Line Style
          default: 'Domyślny', // Default
          spline: 'Klin', // Spline
          step: 'Krok', // Step
        },
        showNull: {
          title: 'Pokaż wartości null jako', // Show Nulls as
          connect: 'Połączony', // Connected
          gap: 'Luki', // Gaps
          zero: 'Zera', // Zeros
        },
        showNullItems: 'Pokaż null', // Show Null
        showEmptyStringItems: 'Pokaż puste', // Show Blank
        gradientColor: 'Kolor podstawowy', // Base Color
        graphColorPreference: 'Preferowany kolor wykresu', // Preferred Graph Color
        gradientColorGroupNumber: 'Liczba zakresów', // Range Count
        topWidth: 'Górna szerokość', // Top Width
        bottomWidth: 'Dolna szerokość', // Bottom Width
        neckHeight: 'Wysokość szyi', // Neck Height
        regionalBorderColor: 'Regionalne obramowanie', // Regional Border
        palette: 'Paleta', // Palette
        themeColor: 'Motyw', // Theme
        standardColor: 'Standardowy', // Standard
        customColor: 'Niestandardowy', // Custom
        customPalette: {
          create: 'Utwórz nową paletę', // Create New Palette
          customPaletteMode: {
            customColor: 'Niestandardowy kolor', // Custom Color
            fromGradientColor: 'Seria gradientowa', // Gradient Series
            gradientColor: 'Kolor gradientu', // Gradient Color
          },
          paletteColor: 'Paleta kolorów', // Palette Colors
          mode: 'Tryb', // Mode
          gradientColor: 'Kolor gradientu', // Gradient Color
          color: 'Kolor', // Color
          paletteColorNumber: 'Numer koloru palety', // Palette Color Number
          paletteColorPreview: 'Podgląd kolorów palety', // Palette Color Preview
          style: 'Styl', // Style
        },
        calibrationType: {
          title: 'Typ kalibracji', // Calibration Type
          complete: 'Kompletny', // Complete
          boundary: 'Graniczny', // Boundary
          hide: 'Ukryj', // Hide
        },
        pointerColor: 'Kolor wskaźnika', // Pointer Color
        valueCustomUnit: 'Jednostka niestandardowa', // Custom Unit
        valueCustomUnitTextStyle: 'Niestandardowe ustawienie czcionki jednostki', // Custom Unit Font Setting
        valueSource: 'Rzeczywiste źródło wartości', // Actual Value Source
        comparisonSource: 'Docelowe źródło wartości', // Target Value Source
        valueCustomInput: 'Wartości', // Value
        comparisonCustomInput: 'Wartości', // Value
        valueSourceType: {
          fromDataset: 'Zestaw danych', // Dataset
          fromCustomInput: 'Wejście niestandardowe', // Custom Input
        },
        percentageOfComparison: 'Procent porównania', // Percentage of Comparison
        rangeDotType: 'Typ wartości', // Value Type
        rangeDotTypeEnums: {
          precentage: 'Procent', // Percentage
          constant: 'Stały', // Constant
        },
        gaugeAxisType: 'Typ osi', // Axis Type
        gaugeAxisTypeEnums: {
          precentage: 'Procent', // Percentage
          constant: 'Stały', // Constant
        },
        rangeDotsAndColorslabel: 'Zakres kolorów', // Range Color
        rangePattern: {
          high: 'Wysoki', // High
          mid: 'Średni', // Mid
          low: 'Niski', // Low
        },
        gaugeValueCustomInput: '',
        emptyValue: '',
        showDeltaSymbol: 'Pokaż symbol', // Show Symbol
        showDeltaPercentage: 'Pokaż procent', // Show Percentage
        showPercentage: 'Pokaż procent', // Show Percentage
        showSubTitle: 'Pokaż podtytuł', // Show Sub Title
        customSubTitle: 'Podtytuł', // Sub Title
        subTitleFontSetting: 'Ustawienia czcionki podtytułu', // Sub Title Font Setting
        showDeltaLabel: 'Pokaż etykietę', // Show Label
        showPercentageLabel: 'Pokaż etykietę procentu', // Show Percentage Label
        percentageLabelTextStyle: 'Ustawienie czcionki procentowej etykiety', // Percentage Label Font Setting
        deltaLabelTextStyle: 'Ustawienie czcionki etykiety', // Label Font Setting
        isMutativeReachedColor: 'Kolor zakresu interwałów', // Interval Range Color
        unreachedColor: 'Kolor tła wybierania', // Dial Background Color
        reachedColor: 'Wybierz kolor pierwszego planu', // Dial Foreground  Color
        conditionalFormatType: 'Styl formatu warunkowego', // Conditional Format Style
        conditionalFormatTypeEnums: {
          noBackground: 'Kolor tekstu etykiety Delta', // Delta Label Text Color
          deltaLabelBackground: 'Etykieta delta Kolor tła', // Delta label Background color
          fullBackground: 'Pełne tło', // Full Background
        },
        colorPerfrence: 'Preferencje koloru', // Color Preference
        colorPerfrenceEnums: {
          palette: 'Paleta', // Palette
          gradient: 'Gradient', // Gradient
        },
        gradientPerfrence: 'Preferencje gradientu', // Gradient Preference
        gradientPerfrenceEnums: {
          gradual: 'Stopniowy', // Gradual
          grouped: 'Zgrupowany', // Grouped
        },
        fontStyle: 'Styl czcionki', // Font Style
        fontWeight: 'Grubość czcionki', // Font Weight
        fontStyleEnums: {
          Normal: 'Normalna', // Normal
          Italic: 'Kursywa', // Italic
        },
        fontWeightEnums: {
          Normal: 'Normalna', // Normal
          Bold: 'Pogrubiona', // Bold
          Lighter: 'Odchudzona', // Lighter
        },
        cornerRadius: 'Promień narożnika', // Corner Radius
        graphOpacity: 'Krycie wykresu', // Graph Opacity
        map: 'Mapa', // Map
        automaticCarousel: 'Automatyczna karuzela', // Automatic Carousel
        carouselInterval: 'Interwał (sekundy)', // Interval (seconds)
        singleSelection: 'Pojedynczy wybór', // Single Selection
        autoGradient: 'Automatyczny gradient', // Auto Gradient
        calculationMode: 'Tryb obliczania', // Calculation Mode
        calculationModeEnums: {
          delta: 'Delta', // Delta
          ratio: 'Współczynnik', // Ratio
        },
        floorPlan: 'Plan budynku', // FloorPlan
        areaBorderColor: 'Granica obszaru', // Area Border
        reverseColor: 'Odwróć kolor', // Reverse Color
        showTopN: 'Top N grupowanie', // Top N Grouping
        topN: 'Pokaż', // Show
        trellis: {
          padding: 'Podszycie kratki', // Trellis Padding
          borderColor: 'Kolor obramowania kratki', // Trellis Border Color
          textStyle: 'Ustawienie czcionki kratki', // Trellis Font Setting
        },
        maintainColorAssignments: 'Zachowaj przypisania kolorów', // Maintain Color Assignments
        colorAssignments: 'Przypisanie kolorów', // Color Assignments
        colorAssignmentsManage: 'Zarządzaj...', // Manage...
      },
      tables: {
        pageCapacity: 'Pojemność strony', // Page Capacity
        grandTotalSettings: 'Ustawienia sumy całkowitej', // GrandTotal Settings
        grandTotalMode: {
          title: 'Tryb wyświetlania', // Display Mode
          both: 'Wiersze i kolumny', // Rows And Columns
          rows: 'Tylko w wierszach', // Only On Rows
          columns: 'Tylko na kolumnach', // Only On Columns
          none: 'Nic', // None
        },
        grandTotalFrozenSetting: {
          title: 'Zablokuj sumę całkowitą', // Lock Grand Total
          row: 'Tylko zablokuj rząd', // Lock Row Only
          column: 'Zablokuj tylko kolumnę', // Lock Column Only
          both: 'Zablokuj rząd i kolumnę', // Lock Row And Column
          none: 'Nic', // None
        },
        subTotalMode: {
          title: 'Tryb wyświetlania', // Display Mode
          visible: 'Widoczny', // Visible
          hidden: 'Ukryty', // Hidden
        },
        gridLineColor: 'Kolor linii siatki', // Grid Line Color
        rowHeight: 'Wysokość wiersza', // Row Height
        freezeRowHeader: 'Zablokuj nagłówki wierszy', // Freeze Row Headers
        highlightCustomData: 'Wyróżnij dane niestandardowe', // Highlight Custom Data
        autoScroll: 'Automatyczne przewijanie', // Auto Scroll
        autoPageTurning: 'Przewracanie stron', // Page Turning
        autoScrollSpeed: {
          slow: 'Wolny', // Slow
          normal: 'Normalny', // Normal
          fast: 'Szybki', // Fast
          name: 'Szybkość', // Speed
        },
        autoScrollSwitch: {
          on: 'Włącz', // On
          off: 'Wyłącz', // Off
        },
        scrollbarMode: {
          Auto: 'Automatyczny', // Auto
          Hidden: 'Ukryty', // Hidden
          Visible: 'Widoczny', // Visible
          Hover: 'Najedź, aby wyświetlić', // Hover To Display
        },
        alignmentSettings: {
          default: 'Automatyczny', // Auto
          left: 'Lewo', // Left
          center: 'Środek', // Center
          right: 'Prawo', // Right
        },
        renderSettings: {
          text: 'Tekst', // Text
          image_url: 'URL obrazu', // Image URL
          image_binary: 'Zawartość obrazu', // Image Content
        },
        displayUnit: 'Wyświetlacz', // DisplayUnit
        showDataOnTooltip: 'Pokaż dane w podpowiedzi', // Show Data On Tooltip
        tableTemplates: 'Szablony stylów tabelarycznych', // Tabular Style Templates
        whole: 'Cała tabela', // Whole Table
        cornerHeader: 'Nagłówek narożnika', // Corner Header
        colHeader: 'Nagłówek kolumny', // Column Header
        rowHeader: 'Nagłówek wiersza', // Row Header
        data: 'Dane', // Data
        firstDataStripe: 'Pierwszy pasek danych', // First Data Stripe
        secondDataStripe: 'Drugi pasek danych', // Second Data Stripe
        subTotals: 'Sumy pośrednie', // Sub Totals
        grandTotals: 'Sumy całkowite', // Grand Totals
        addNewStyle: 'Dodaj nowy styl...', // Add New Style...
        light: 'Jasny', // Light
        medium: 'Średni', // Medium
        dark: 'Ciemny', // Dark
        custom: 'Niestandardowy', // Custom
        name: 'Nazwa', // Name
        tableElements: 'Elementy tabeli', // Table Elements
        baseStyle: 'Styl bazowy', // Base Style
        invalidTemplateName: 'Zduplikowana lub nieprawidłowa nazwa szablonu', // Duplicated Or Invalid Style Template Name
        textStyle: 'Styl tekstu', // Text Style
        fillColor: 'Kolor wypełnienia', // Fill Color
        borderColor: 'Kolor obramowania', // Border Color
        wholeTableBorderColor: 'Kolor obramowania komórki', // Cell Border Color
        preview: 'Podgląd', // Preview
        hideBorder: 'Ukryj obramowanie', // Hide Border
        backColor: 'Kolor tła', // Background Color
        wholeTableBackColor: 'Kolor tła komórki', // Cell Background Color
        useAlternateRowStyle: 'Użyj alternatywnego stylu wiersza', // Use Alternate Row Style
        treatLastRowHeaderAsData: 'Nagłówek ostatniego wiersza jako dane', // Last Row Header As Data
        baseCustomStyleTemplate: 'Styl niestandardowy', // Custom Style
        colHeaderVisible: 'Pokaż nagłówek kolumny', // Show Column Header
        enableWordWrap: 'Zawijanie tekstu', // Word Wrap
        scrollPattern: 'Płynne przewijanie', // Smooth Scroll
        enableUiFilter: 'Pokaż szybki filtr', // Show Quick Filter
        autoFitMode: {
          label: 'Automatyczne dopasowanie szerokości kolumny', // AutoFit Column Width
          useColHeader: 'Dopasuj do nagłówka', // Fit To Header
          useContent: 'Dopasuj do zawartości', // Fit To Content
        },
        showRowNumber: 'Pokaż numer wiersza', // Show Row Number
        rowNumberInsertPosition: {
          title: 'Liczba wierszy dla', // Number Rows For
          first: 'Grupa górnych wierszy', // Top Row Group
          last: 'Wiersze szczegółów', // Detail Rows
          all: 'Wszystkie', // All
        },
        rowNumberCountRule: {
          title: 'Zakres numeru wiersza', // Row Number Scope
          global: 'Ogólny', // Global
          region: 'Grupa wierszy', // Row Group
          page: 'Strona', // Page
        },
        rowNumberAdjoin: {
          title: 'Pozycja numeru wiersza', // Row Number Position
          before: 'Przed', // Before
          after: 'Po', // After
        },
      },
      slicers: {
        selectionMode: {
          title: 'Tryb wyboru', // Selection Mode
          single: 'Pojedynczy', // Single
          multiple: 'Wielokrotny', // Multiple
        },
        wrapItems: 'Zawijaj przedmioty', // Wrap Items
        widthAdaptive: 'Adaptacyjna szerokość', // Width Adaptive
        orientation: 'Orientacja', // Orientation
        titlePosition: {
          title: 'Pozycja', // Position
          outside: 'Na zewnątrz', // Outside
          inline: 'W linii', // Inline
        },
        lablesLayout: {
          label: 'Etykiety', // Labels
          list: 'Lista', // List
          buttonGroup: 'Grupa przycisków', // Button Group
        },
        dataRangeLayout: {
          input: 'Pole wprowadzania', // Input Box
          slider: 'Suwak', // Slider
          both: 'Pole wprowadzania + suwak', // Input Box + Slider
        },
        defaultDateRangeMode: 'Tryb daty', // Date Mode
        defaultIsExpanded: 'Tryb rozszerzony', // Expanded Mode
      },
      containers: {
        tabStripMode: 'Tryb wyświetlania zakładek', // Tab Display Mode
        showSplitLine: 'Pokaż linię podziału', // Show Split Line
        tabName: 'Nazwa karty', // Tab Name
        mobileAutoLayoutPolicy: 'Zasady dotyczące automatycznego układu urządzeń mobilnych', // Mobile Auto Layout Policy
        flow: 'Przepływ', // Flow
        scale: 'Skala', // Scale
        filterScope: 'Zakres filtra', // Filter Scope
        filterScope_container: 'Kontener', // Container
        filterScope_global: 'Ogólny', // Global
        tabStripAlignment: {
          label: 'Wyrównanie zakładek', // Tab Alignment
          left: 'Lewo', // Left
          right: 'Prawo', // Right
          center: 'Środek', // Center
        },
        tabStripGap: 'Luka pomiędzy zakładkami', // Gap Between Tab
        activeTabBorderColor: 'Kolor obramowania', // Border Color
        inActiveTabBorderColor: 'Kolor obramowania', // Border Color
        activeTabIndicatorColor: 'Kolor wskaźnika', // Indicator Color
        tabTextColor: 'Kolor tekstu', // Text Color
        tabTextAlignment: {
          label: 'Wyrównanie tekstu zakładki', // Tab Text Alignment
          left: 'Lewo', // Left
          center: 'Środek', // Center
          right: 'Prawo', // Right
        },
        tabStripVisible: 'Pokaż pasek zakładek', // Show Tab Strip
        inActiveTabBackColor: 'Tło', // Background
        activeTabBackColor: 'Tło', // Background
        tabWidth: {
          label: 'Tryb szerokości zakładki', // Tab Width Mode
          input: 'Szerokość zakładki', // Tab Width
          fixed: 'Niezmienny', // Fixed
          auto: 'Automatyczny', // Auto
          distribute: 'Rozdzielony', // Distribute
        },
        tabStripeBorderColor: 'Kolor obramowania', // Border Color
      },
      image: {
        source: 'Źródło', // Source
      },
      richText: {
        contentVerticalMiddle: 'Wyrównaj w pionie do środka', // Vertical Align Middle
      },
      webContent: {
        customSetting: 'Ustawienia niestandardowe', // Custom Setting
        enableToken: 'Przekaż token użytkownika', // Pass User Token
      },
      devConfig: {
        port: 'Port', // Port
      },
    },
  },
  dialogs: {
    common: {
      apply: 'Zastosuj', // Apply
      reset: 'Reset', // Reset
      yes: 'Tak', // Yes
      no: 'Nie', // No
      ok: 'OK', // OK
      cancel: 'Anuluj', // Cancel
      close: 'Zamknij', // Close
    },
    syncChanges: {
      title: 'Synchronizuj zmiany', // Sync Changes
      content: 'Podczas podglądu wykonywane są operacje analityczne (filtrowanie, sortowanie itp.). Czy chcesz zsynchronizować zmiany?', // There are analytical operations performed during preview (filter, sort, etc.). Would you like to sync the changes?
    },
    unsavedChanges: {
      title: 'Wykryto niezapisane zmiany', // Unsaved Change Detected
      content: 'Wykryto niezapisane zmiany. Czy chcesz odzyskać zmiany?', // There are unsaved changes detected. Would you like to recover the changes?
      restore: 'Przywróc', // Restore
      discard: 'Odrzuć', // Discard
    },
    leavePrompt: {
      title: 'Wykryto niezapisaną zmianę', // Unsaved Change Detected
      content: 'Wykryto niezapisane zmiany. Czy chcesz kontynuować?', // Unsaved changes detected. Would you like to proceed?
    },
    saveDashboard: {
      title: 'Zapisz dashboard', // Save Dashboard
      name: 'Nazwa dashboardu', // Dashboard Name
      categories: 'Kategorie', // Categories
      description: 'Komentarz', // Comment
      loadingServerTagList: 'Ładowanie tagów...', // Loading tags...
      loadServerTagListFailed: 'Nie udało się załadować tagów!', // Failed to load tags!
      placeHolder_name: 'Wpisz tutaj nazwę dashboardu', // Enter dashboard name here
      placeHolder_description: 'Wpisz opis tutaj', // Enter comment here
      placeHolder_comment: 'Wpisz komentarz tutaj', // Enter comment here
    },
    exportDashboard: {
      title: 'Eksport', // Export
      fileType: 'Format eksportu', // Export Format
      fileTypeItems: {
        pngImage: 'Obraz PNG', // PNG Image
        pptDocument: 'PPT', // PPT
      },
      actionBarDropdownList: {
        pngImage: 'Eksportuj obraz PNG', // Export PNG image
        data: 'Eksportuj dane', // Export Data
      },
      pages: 'Strony', // Pages
      pagesOptions: {
        currentPage: 'Obecna strona', // Current Page
        allPages: 'Wszystkie strony', // All Pages
        allVisiblePages: 'Widoczne strony', // Visible Pages
        customPages: 'Niestandardowe strony', // Custom Pages
      },
      exportTo: 'Eksportuj do', // Export To
      exportToItems: {
        singleImage: 'Pojedynczy obraz', // Single Image
        separatedPages: 'Oddzielne strony', // Separated Pages
      },
      invisible: 'Niewidoczny', // Invisible
      combinedChartSheetName: {
        left: 'Lewa oś', // Left Axis
        right: 'Prawa oś', // Right Axis
      },
    },
    cancelExport: {
      title: 'Eksportowanie, proszę chwilę poczekać...', // Exporting, please wait a moment...
      page: 'Wyeksportowane strony', // Pages Exported
      exportProgress: 'Postęp eksportu', // Export Progress
    },
    changeChartType: {
      title: 'Zmień typ wykresu', // Change Chart Type
    },
    noSpaceForTitle: {
      title: 'Nie wystarczająca ilość miejsca', // Not Enough Space
      content: 'Nie można wyświetlić tytułu kontenera. Dostosuj rozmiar kontenera, aby uzyskać więcej miejsca.', // The container title cannot be displayed. Adjust the container size to make more space.
    },
    noSpaceForTabStrip: {
      title: 'Nie wystarczająca ilość miejsca', // Not Enough Space
      content: 'Nie można wyświetlić tytułu kontenera. Dostosuj rozmiar kontenera, aby uzyskać więcej miejsca.', // The container tabStrip cannot be displayed. Adjust the container size to make more space.
    },
    filter: {
      title: 'Filtr', // Filter
      add: 'Dodaj filtr', // Add a Filter
      hint: 'Nie dodano żadnego filtra dla tego scenariusza. Kliknij przycisk powyżej, aby dodać filtr.', // There is no filter added for this scenario. Please click the button above to add a filter.
      targetField: 'Pole docelowe', // Target Field
      exclude: 'Wyklucz dopasowane', // Exclude Matched
      selectAll: '(Wszystkie)', // (All)
      selectNone: '(Żadne)', // (None)
      startDate: 'Data rozpoczęcia', // Start Date
      endDate: 'Data końcowa', // End Date
      dateUnit: 'Jednostka daty', // Date Unit
      bindToParameter: 'Przypisz', // Bind To
      matchType: 'Typ dopasowania', // Match Type
      caseSensitive: 'Rozróżnianie wielkości liter', // Case Sensitive
      matchValue: 'Dopasuj wartość', // Match Value
      typeKeyWord: 'Wpisz słowo kluczowe...', // Type Keyword...
      excludePattern: 'Wyklucz: {{content}}', // Exclude: {{content}}
      totalPattern: '(Łącznie: {{count}})', // (Total: {{count}})
      rules: {
        general: 'Główne', // General
        dateRange: 'Zakres dat', // Date Range
        valueRange: 'Zakres wartości', // Value Range
        wildcard: 'Dopasuj zasady', // Match Rules
        relativeDate: 'Data względna', // Relative Date
      },
      types: {
        contain: 'Zawiera', // Contains
        startWith: 'Zacznij od', // Start With
        endWith: 'Zakończ na', // End With
        exact: 'Dopasuj dokładnie', // Exactly Match
        matchWord: 'Dopasuj dokładnie', // Exactly Match
        range: 'Zakres', // Range
        greaterThan: 'Większy od', // Greater Than
        lessThan: 'Mniejszy od', // Less Than
      },
    },
    pivotSetting: {
      title: 'Wiązanie danych', // Data Binding
      moreChartType: 'pokaż więcej typów wykresów...', // show more chart types...
    },
    conditionalFormat_chart: {
      title: 'Format warunkowy', // Conditional Format
      add: 'Dodaj format warunkowy', // Add Conditional Format
      hint: 'Do tego wykresu nie dodano warunkowego ustawienia formatu. Kliknij przycisk powyżej, aby dodać nowy.', // There is no conditional format setting added for this chart. Please click the button above to add a new one.
      targetValue: 'Wartość docelowa', // Target Value
      condition: 'Warunek', // Condition
      style: 'Styl', // Style
    },
    customColorSetting: {
      add: 'Stwórz nową paletę', // Create New Palette
      hint: 'Nie ma niestandardowej palety.\n Kliknij poniższy przycisk, aby utworzyć nową paletę.', // There is no custom palette.\n Please click the below button to create new palette.
    },
    conditionalFormat_pivotTable: {
      title: 'Format warunkowy', // Conditional Format
      add: 'Dodaj format warunkowy', // Add Conditional Format
      hint: 'Nie dodano warunkowego ustawienia formatu dla tego składnika. Kliknij przycisk powyżej, aby dodać nowy.', // There is no conditional format setting added for this component. Please click the button above to add a new one.
      bindData: 'Brak danych związanych z komponentem.', // No data bound to the component.
      targetValue: 'Wartość docelowa', // Target Value
      appliedOnEntireRow: 'Zastosuj w całym rzędzie', // Apply on Entire Row
      applied2Row: 'Prawda', // True
      applied2Col: 'Fałsz', // False
      pickUpCFStyle: 'Wybierz styl', // Pick up a style
      rowNumber: 'Numer wiersza', // Row Number
    },
    conditionalFiltering: {
      title: 'Warunkowe ustawienia wizualizacji', // Conditional Visualization Settings
      add: 'Dodaj', // Add
      hint: 'W tym scenariuszu nie dodano warunkowego ustawienia wizualizacji. Kliknij przycisk powyżej, aby dodać nowy.', // There is no conditional visualization setting added for this scenario. Please click the button above to add a new one.
      tab_rank: 'Ranking', // Rank
      tab_filter: 'Filtr warunkowy', // Conditional Filter
      rankBy: 'Ranking według', // Rank By
      rankFor: 'Ranking dla', // Rank For
      rankLevel: 'Poziom rankingu', // Rank Level
      rankOrder: 'Kolejność rankingu', // Rank Order
      rankOrder_asc: 'Dół', // Bottom
      rankOrder_desc: 'Góra', // Top
      type: 'Typ', // Type
      type_rank: 'Ranking', // Rank
      type_percentage: 'Procent', // Percentage
      keep: 'Trzymaj', // Keep
      rankOrder_top: 'Góra', // Top
      rankOrder_middle: 'Środek', // Middle
      rankOrder_bottom: 'Dół', // Bottom
      competitionRule: 'Równy do', // Equal As
      filterBy: 'Filtruj po', // Filter By
      filterCondition: 'Warunek', // Condition
      filterFor: 'Filter według', // Filter For
      partitioning: 'Partycjonowanie', // Partitioning
      addressing: 'Adresowanie', // Addressing
      duplicate: {
        unique: 'Unikalny', // Unique
        competition: 'Konkurencja', // Competition
        modifiedCompetition: 'Zmodyfikowana konkurencja', // ModifiedCompetition
        dense: 'Gęsty', // Dense
      },
    },
    sort: {
      title: 'Sortowanie', // Sort
      add: 'Dodaj sortowanie', // Add Sort
      hint: 'W tym scenariuszu nie dodano sortowania. Kliknij przycisk powyżej, aby dodać sortowanie.', // There is no sort added for this scenario. Please click the button above to add a sort.
      sortTarget: 'Pole docelowe', // Target Field
      sortBy: 'Sortuj po', // Sort By
      auto: 'Automatycznie', // Auto
      manual: 'Ręcznie', // Manual
      alphabetical: 'Alfabetycznie', // Alphabetical
      numerical: 'Liczbowo', // Numerical
      chronological: 'Chronologicznie', // Chronological
      sortOrder: 'Kolejność sortowania', // Sort Order
      sortOrder_asc: 'Rosnąco', // Asc.
      sortOrder_desc: 'Malejąco', // Desc.
      manualSort_moveUp: 'W górę', // Move Up
      manualSort_moveDown: 'W dół', // Move Down
      manualSort_moveToTop: 'Na samą górę', // Move To Top
      manualSort_moveToBottom: 'Do samego dołu', // Move To Bottom
    },
    referenceLine: {
      title: 'Linia referencyjna', // Reference Line
      add: 'Dodaj linie referencyjną', // Add Reference Line
      hint: 'W tym scenariuszu nie dodano żadnej linii referencyjnej. Kliknij przycisk powyżej, aby dodać.', // There is no reference line added for this scenario. Please click the button above to add.
      subTitlePattern: 'Wartość = {{content}}', // Value = {{content}}
      name: 'Nazwa', // Name
      type: 'Typ', // Type
      value: 'Wartość', // Value
      axis: 'Oś', // Axis
      lineStyle: 'Styl linii', // Line Style
      lineColor: 'Kolor linii', // Line Color
      lineWidth: 'Szerokość linii', // Line Width
      aggregationTypes: {
        constant: 'Ciągła linia', // Constant Line
        max: 'Maksymalna linia', // Max Line
        min: 'Minimalna linia', // Min Line
        median: 'Linia środkowa', // Median Line
        average: 'Średnia linia', // Average Line
        count: 'Linia obliczeniowa', // Count Line
      },
      detailLevel: 'Zakres', // Scope
      detailLevelTypes: {
        group: 'Grupa', // Group
        total: 'Całość', // Total
        trellis: 'Kratka', // Trellis Cell
      },
      auto: 'Automatycznie', // Auto
    },
    trendLine: {
      title: 'Linia trendu', // Trend Line
      type: 'Typ', // Type
      polynomialDegree: 'Stopień', // Degree
      lineStyle: 'Styl linii', // Line Style
      lineColor: 'Kolor linii', // Line Color
      lineWidth: 'Szerokość linii', // Line Width
      detailLevel: 'Zakres', // Scope
      detailLevelTypes: {
        group: 'Grupa', // Group
        total: 'Całość', // Total
        trellis: 'Kratka', // Trellis Cell
      },
      trendLineTypes: {
        None: 'Brak', // None
        Linear: 'Liniowy', // Linear
        Polynomial: 'Wielomian', // Polynomial
        Power: 'Moc', // Power
        Logarithmic: 'Logarytmiczny', // Logarithmic
        Exponential: 'Wykładniczy', // Exponential
        Fourier: 'Fouriera', // Fourier
      },
      auto: 'Automatycznie', // Auto
    },
    jumpToDocuments: {
      title: 'Skocz do', // Jump To
      add: 'Dodaj ustawienie', // Add Setting
      hint: 'Nie ma przeskoku do ustawień dla tego scenariusza. Kliknij przycisk powyżej, aby dodać.', // There is no jump to setting for this scenario. Please click the button above to add.
      name: 'Nazwa', // Name
      openModeLabel: 'Tryb otwarty', // Open Mode
      openMode: {
        newWindow: 'Nowe okno', // New Window
        dialog: 'Dialogowe', // Dialog
        embedded: 'Wbudowane', // Embedded
        redirect: 'Przekieruj', // Redirect
        none: 'Żaden', // None
      },
      redirectAreaLabel: 'Obszar przekierowania', // Redirect Area
      redirectArea: {
        hostPage: 'Strona hosta', // Host Page
        dashboard: 'Dashboard', // Dashboard
      },
      typeLabel: 'Typ', // Type
      type: {
        report: 'Raport', // Report
        dashboard: 'Dashboard', // Dashboard
        outerURL: 'Zewnętrzny URL', // External URL
        innerURL: 'Wewnętrzny URL', // Internal URL
      },
      docLabel: 'Dokument', // Document
      docList: {
        loading: 'Ładowanie listy dokumentów z serwera...', // Loading doc list from server...
        loadFailed: 'Nie udało się załadować listy dokumentów z serwera!', // Failed to load doc list from server!
      },
      loadDocParameters: {
        loading: 'Ładowanie parametrów tego dokumentu z serwera...', // Loading parameters of this document from server...
        loadFailed: 'Nie udało się załadować parametrów tego dokumentu z serwera!', // Failed to load parameters of this document from server!
      },
      parametersLabel: 'Parametry', // Parameters
      parameterHeader: {
        name: 'Nazwa', // Name
        prompt: 'Podpowiedź', // Prompt
        dataType: 'Typ', // Type
        valueType: 'Typ wartości', // Value Type
        value: 'Wartość', // Value
      },
      parameterValueType: {
        notSet: 'Nie ustawiony', // Not Set
        constant: 'Stały', // Constant
        selection: 'Wybrana wartość', // Selected Value
        filteredValue: 'Odfiltrowana wartość', // Filtered Value
        slicer: 'Fragmentator', // Slicer
        parameter: 'Parametr', // Parameter
      },
      parameterDataType: {
        boolean: 'Boolean',
        integer: 'Integer',
        float: 'Float',
        string: 'String',
        dateTime: 'DataCzas', // DateTime
        date: 'Data', // Date
        multiDimension: 'Wielowymiarowy', // Multi Dimension
      },
      parameterValue: {
        selection: {
          placeholder: 'Wybierz pola…', // Choose Fields\u2026
          title: 'Wybrane wartości ustawień', // Selected Value Setting
          chooseFields: 'Wybierz pola', // Choose Fields
        },
        filteredValue: {
          placeholder: 'Wybierz pole…', // Choose Field\u2026
          title: 'Odfiltrowana wartość pola', // Filtered Value Setting
          chooseField: 'Wybierz pole', // Choose Field
          chooseValueProperty: 'Wybierz wartość', // Choose Value
        },
        slicer: {
          placeholder: 'Wybierz fragmentator…', // Choose Slicer\u2026
          title: 'Ustawienie wartości fragmentatora', // Slicer Value Setting
          chooseSlicer: 'Wybierz fragmentator', // Choose Slicer
          slicerDropDownPlaceholder: 'Nie wybrano fragmentatora', // No Slicer selected
          chooseColumns: 'Wybierz kolumny', // Choose Columns
          chooseValueProperty: 'Wybierz wartość', // Choose Value
        },
        parameter: {
          placeholder: 'Wybierz parametr', // Choose Parameter
        },
      },
      jumpToListValuePropertyType: {
        all: 'Wszystkie', // All
        minValue: 'Minimalna wartość', // Min Value
        maxValue: 'Maksymalna wartość', // Max Value
      },
      jumpToRangeValuePropertyType: {
        range: 'Zakres', // Range
        minValue: 'Minimalna wartość', // Min Value
        maxValue: 'Maksymalna wartość', // Max Value
      },
      url: 'Url', // Url
      targetPage: 'Strona docelowa', // Target Page
      backFrom: 'Powrót z', // Back from
      jumpToOptions: 'Opcje', // Options
      showToolbar: 'Pokaż pasek narzędzi', // Show Toolbar
      pageSizeMode: 'Tryb rozmiaru strony', // Page Size Mode
      reportPageDisplay: 'Tryb wyświetlania strony', // Page Display Mode
      dashboardPageNumber: 'Początkowy numer strony', // Initial Page Number
      reportDisplay: {
        single: 'Widok pojedynczej strony', // Single Page View
        pageless: 'Tryb szpalty', // Galley Mode
        continuous: 'Ciągły', // Continuous
      },
      dialogWidth: 'Szerokość', // Width
      dialogHeight: 'Wysokość', // Height
      enableDialogFixedSize: 'Wielkość dialogu', // Dialog Size
      dialogSizeAuto: 'Automatycznie', // Auto
      dialogSizeFixed: 'Stały', // Fixed
    },
    parameters: {
      title: 'Ustawienie parametru', // Parameter Setting
      name: 'Nazwa', // Name
      prompt: 'Podpowiedź', // Prompt
      dataType: 'Typ danych', // Data Type
      hidden: 'Ukryty', // Hidden
      multiValue: 'Wielowartościowy', // MultiValue
      multiline: 'Wielowierszowy', // Multiline
      validValues: {
        label: 'Dostępne wartości', // Available Values
        addLabel: 'Dodaj wartość parametru', // Add Parameter Value
        placeHolderValue: 'Wartość', // Value
        placeHolderLabel: 'Etykieta', // Label
      },
      defaultValue: {
        label: 'Domyślna wartość', // Default Value
        addLabel: 'Dodaj wartość', // Add Value
        placeholder: '<Pusty>', // <Empty>
      },
      valueSource: 'Źródło wartości', // Value Source
      valueSourceEnum: {
        datasetReference: 'Z zapytania', // From query
        custom: 'Nie z zapytania', // Non-queried
      },
      datasetReferenceField: 'Pole wartości', // Value Field
    },
    hierarchy: {
      title_create: 'Stwórz pole hierarchiczne', // Create Hierarchy Field
      title_edit: 'Edytuj pole hierarchiczne', // Edit Hierarchy Field
      name: 'Nazwa hierarchii', // Hierarchy Name
      hint: 'Wskazówka: przeciągnij lub kliknij dwukrotnie pola, aby dodać je do hierarchii.', // Hint: Drag or double-click fields to add to the hierarchy.
      namePattern: 'Hierarchia_{{name}}', // Hierarchy_{{name}}
      conflictPattern: 'Istnieje już pole o nazwie \'{{name}}\'', // There\'s already a field named \'{{name}}\'
    },
    calculation: {
      calculationType: 'Typ obliczenia', // Calculation Type
      along: 'Wzdłuż', // Along
      empty: '<Pusty>', // <Empty>
      valuesBefore: 'Wartości przed', // Values Before
      valuesAfter: 'Wartości po', // Values After
      includeCurrent: 'Uwzględnij aktualną wartość', // Include Current Value
      advancedSetting: 'Zaawansowane ustawienia', // Advanced Setting
    },
    dateCalcualtion: {
      dateTarget: 'Data docelowa', // Date Target
      dateType: 'Jednostka okresu', // Period Unit
      dateOffset: 'Przesunięcie okresu', // Period Offset
      dateRange: 'Zakres dat', // Date Range
      overRange: 'Poza zakresem', // Over Range
      moreSettings: 'Więcej ustawień', // More Settings
    },
    group: {
      accounting: 'Percentyl', // Percentile
      ranking: 'Ranking', // Ranking
    },
    imageManager: {
      title: 'Menedżer obrazów', // Image Manager
      add: 'Dodaj obraz', // Add Image
      loadingImage: 'Ładowanie udostępnionego obrazu z serwera...', // Loading shared image from server...
      loadImageFailed: 'Nie udało się załadować udostępnionego obrazu z serwera!', // Failed to load shared image from server!
      noSharedImage: 'Nie znaleziono udostępnionego obrazu.', // No shared image found.
      source: {
        embedded: 'Wbudowany', // Embedded
        shared: 'Udostępniony', // Shared
        external: 'Zewnętrzny URL', // External URL
      },
      external: {
        placeholder: 'Wprowadź adres URL obrazu lub identyfikator danych URI', // Enter Image URL or Data URI
        label: 'URL obrazu', // Image URL
        invalidURL: 'Niepoprawny URL obrazu', // Invalid Image URL
      },
      largeImageWarning: 'Pulpitu nawigacyjnego nie można zapisać z dużymi osadzonymi obrazami. Rozważ użycie współdzielonych obrazów lub mniejszych osadzonych obrazów (<1 MB).', // Dashboard may not be saved with large embedded images. Please consider using shared images, or smaller embedded images(<1MB) instead.
      searchPlaceholder: 'Szukaj...', // Search...
    },
    changeMap: {
      title: 'Zmień mapę', // Switch Map
      hint: 'Dodaj odpowiednie filtry dla konkretnego poziomu mapy.', // Please add corresponding filters for your specific map level.
    },
    hidePage: {
      title: 'Nie można ukryć strony', // Cannot Hide Page
      content: 'Dashboard musi zawierać co najmniej jedną widoczną stronę!', // A dashboard must contain at least one visible page!
    },
    rename: {
      title: 'Zmień nazwę', // Rename
      titlePattern: 'Zmień nazwę - {{name}}', // Rename - {{name}}
      hint: 'Nowa nazwa', // New Name
      conflict: 'Nazwa przedmiotu \'{{name}}\' już istnieje.', // Item named \'{{name}}\' already exists.
      originalName: 'Oryginalna nazwa', // Original Name
      canNotAllSpaces: 'Nie może być ciągiem złożonym ze spacji', // Can\'t be a string all of spaces
    },
    webContent: {
      title: 'Zawartość sieci', // Web Content
      types: {
        serverContent: 'Zawartość serwera', // Server Content
        src: 'Url', // Url
        srcDoc: 'Html', // Html
      },
      emptyServerContent: 'Pusty', // Empty
      webContentStoreLink: 'Uzyskaj więcej wtyczek', // Get More Plugins
    },
    versionInfo: {
      title: 'O dashboardach Wyn', // About Wyn Dashboards
      name: 'Dashboardy Wyn', // Wyn Dashboards
      version: 'Wersja:', // Version:
      copyright: 'Prawa autorskie © 2020 GrapeCity', // Copyright \u00A9 2020 GrapeCity
    },
    bullet: {
      title: 'Ustawienie wykresu punktowego', // Bullet Graph Setting
      barSize: 'Wysokość', // Height
      maxi: 'Maksimum', // Maximum
      good: 'Dobrze', // Good
      bad: 'Źle', // Bad
      forecast: 'Prognoza', // Forecast
      tickunit: 'Zaznacz jednostkę', // Tick Unit
      maxiColor: 'Maksymalny kolor', // Maximum Color
      goodColor: 'Dobry kolor', // Good Color
      badColor: 'Zły kolor', // Bad Color
      measureColor: 'Aktualny kolor', // Actual Color
      targetColor: 'Docelowy kolor', // Target Color
      forecastColor: 'Prognozowy kolor', // Forecast Color
    },
    pareto: {
      title: 'Ustawienia wykresu Pareto', // Pareto Graph Setting
      barSize: 'Wysokość', // Height
      target: 'Cel', // Target
      targetColor: 'Kolor docelowy', // Target Color
    },
    hBar: {
      title: 'Ustawienia wykresu HBar', // HBar Graph Setting
      barSize: 'Wysokość', // Height
    },
    runningCalculation: {
      title: 'Trwa obliczanie', // Running Calculation
    },
    movingCalculation: {
      title: 'Przenoszenie obliczeń', // Moving Calculation
    },
    dataFormat: {
      title: 'Format danych', // Data Format
    },
    interactionSetting: {
      title: 'Ustawienie interakcji', // Interaction Setting
      auto: 'Automatycznie', // Auto
      sourceFields: 'Pola źródłowe', // Source Fields
      targetFields: 'Pola docelowe', // Target Fields
      target: 'Cel', // Target
      add: 'Dodaj element mapowania', // Add a Mapping Item
      mergedFields: 'Pola scalone', // Merged Fields
    },
    annotation: {
      title: 'Adnotacja', // Annotation
      placeholder: 'Adnotacja jest teraz pusta.', // The annotation is now empty.
    },
    shareScenario: {
      title: 'Udostępnij scenariusz', // Share Scenario
      visibleMenuOptions: 'Widoczne elementy menu', // Visible Menu Items
      embedWith: 'Osadź za pomocą', // Embed With
      size: 'Rozmiar', // Size
      iframe: 'IFrame', // IFrame
      div: 'Div', // Div
      copyUrl: 'Kopiuj URL', // Copy URL
      copyOptions: 'Opcje kopiowania', // Copy Options
      openFullDashboardMode: 'Powróć do dashboardu', // Back to Dashboard
      unsavedTip: '* Niezapisany dashboard *', // * Dashboard Unsaved *
    },
    filterState: {
      saveTitle: 'Zapisz widok filtra', // Save Filter View
      manageTitle: 'Zarządzaj widokami filtrów', // Manage Filter Views
      name: 'Nazwa', // Name
      placeholderName: 'Wpisz tutaj nazwę widoku filtra', // Enter filter view name here
      emptyWarning: 'Należy podać nazwę widoku filtra', // A filter view name must be provided
      existWarning: 'Nazwa widoku filtra {{name}} już istnieje', // A filter view name {{name}} already exists
      defaultFilterView: 'Widok filtra: <Domyślny>', // Filter View: <Default>
      filterView: 'Widok filtra: {{ name }}', // Filter View: {{ name }}
      reset: 'Przywróć widok domyślny', // Reset to default view
      save: 'Zapisz bieżący widok...', // Save current view...
      manage: 'Zarządzaj widokami...', // Manage views...
      noFilterView: 'Żaden widok filtra nie został zapisany', // No filter view saved
    },
    changeFloorPlan: {
      title: 'Zmień plan budynku', // Switch Floor Plan
    },
    mergeDatasets: {
      title: 'Zarządzaj modelem', // Manage Model
      addLink: 'Dodaj link', // Add Link
      removeLink: 'Usuń link', // Remove Link
      datasets: 'Zestawy danych', // Datasets
      links: 'Linki', // Links
      loading: 'Ładowanie...', // Loading...
    },
    dataColorRelationshipManager: {
      title: 'Przypisz kolory', // Assign Colors
      dataItems: 'Pozycje danych', // Data Items
      applyPalette: 'Zastosuj paletę', // Apply Palette
      noDataPlaceHolder: 'Żadne elementy danych nie mogą przypisać koloru', // No Data Items Can Assign Color
    },
    analysisPath: {
      title: 'Historia ścieżki analizy', // Analysis Path History
      drill: 'Przejdź od {{from}} do {{to}}', // Drill from {{from}} to {{to}}
      changeDataBinding: 'Zmiana powiązania danych.', // Data binding change.
      changeChartType: 'Zmień typ wykresu', // Change Chart Type
      emptyAnalysis: 'Żadna ścieżka analizy danych nie została dodana', // No analysis path is added.
      root: 'Stan początkowy', // Initial State
    },
    // add action dialog here
  },
  actionBar: {
    filter: 'Filtr', // Filter
    sort: 'Sortowanie', // Sort
    swapRowsAndCols: 'Zamień wiersze i kolumny', // Swap Rows And Columns
    rank: 'Wizualizacja warunkowa', // Conditional Visualization
    changeChartType: 'Typ wykresu', // Chart Type
    changePivotSetting: 'Wiązanie danych', // Data Binding
    conditionalFormat: 'Format warunkowy', // Conditional Format
    referenceLine: 'Linia referencyjna', // Reference Line
    showData: 'Pokaż dane', // Show Data
    hideData: 'Ukryj dane', // Hide Data
    clearCustomData: 'Wyczyść dane niestandardowe', // Clear Custom Data
    expand: 'Rozszerz', // Expand
    shrink: 'Zmniejsz', // Shrink
    focus: 'Skupienie', // Focus
    exitFocus: 'Powrót do designera', // Back To Designer
    selectMap: 'Wybierz Mapę', // Select Map
    edit: 'Edytuj', // Edit
    remove: 'Usuń', // Remove
    moreActions: 'Więcej akcji', // More Actions
    enableCrossFilter: 'Włącz filtr krzyżowy', // Enable Cross Filter
    disableCrossFilter: 'Wyłącz filtr krzyżowy', // Disable Cross Filter
    trendLine: 'Linia trendu', // Trend Line
    export: 'Eksport', // Export
    addAnnotation: 'Dodaj adnotację', // Add Annotations
    editAnnotation: 'Edytuj adnotację', // Edit Annotations
    annotation: 'Adnotacje', // Annotations
    selectFloorPlan: 'Wybierz plan budynku', // Select Floor Plan
    clearRuntimeFilters: 'Wyczyść filtry wykonawcze', // Clear Runtime Filters
    refreshDefinition: 'Odświerz', // Refresh
    shareScenario: 'Udostępnij scenariusz', // Share Scenario
    openFullDashboard: 'Otwórz pełny dashboard', // Open Full Dashboard
    clearSelection: 'Wyczyść zaznaczenie', // Clear Selection
    analysisPath: 'Ścieżka analizy', // Analysis Path
    mergeDatasets: 'Skonfiguruj', // Merge Datasets
    // add action name here
  },
  charts: {
    tooltip: {
      keep: 'Trzymaj', // Keep
      exclude: 'Wyklucz', // Exclude
      drill: 'Przejdź niżej', // Drill Down
      drillDown: 'Przejdź niżej', // Drill Down
      drillDetail: 'Przejdź do szczegółów', // Drill Detail
      drillRoot: 'Katalog domowy', // Home
      drillClear: 'Wyczyść elementy wiercenia', // Clear Drill Items
      jump: 'Skocz', // Jump
      noDimensionToDrill: 'Brak wymiaru do wiercenia', // No dimension to drill to
      expandHierarchy: 'Rozwiń grupy', // Expand Groups
      collapseHierarchy: 'Zwiń grupy', // Collapse Groups
    },
    displayUnit: {
      none: 'Żadne', // None
      e2: 'Setki', // Hundreds
      e3: 'K',
      e4: '10K',
      e5: '100K',
      e6: 'Mln',
      e7: '10Mln',
      e8: '100Mln',
      e9: 'Mld', // B
      e12: 'Bil', // T
      pattern: '({{unit}})',
    },
  },
  tables: {
    grandTotal: 'Łączna suma', // Grand Total
    subTotal: 'Łącznie', // Total
  },
  richText: {
    hint: 'Komponent tekstu sformatowanego jest teraz pusty. Kliknij przycisk edycji w prawym górnym rogu, aby dodać treść.', // The rich text component is now empty. Please click the edit button on the top right corner to add content.
    expression: {
      title: 'Agregacja', // Aggregation
      loading: '{ładowanie...}', // {loading...}
      noData: '-',
      preparing: '{przygotowywanie...}', // {preparing...}
      dataset: 'Zbiór danych', // Dataset
      chooseField: 'Wybierz pole', // Choose Field
      field: 'Pole', // Field
      noFilterHint: 'Nie dodano żadnego filtra dla tego scenariusza. Kliknij przycisk powyżej, aby dodać filtr.', // There is no filter added for this scenario. Please click the button above to add a filter.
      displayUnit: 'Wyświetlacz', // Display Unit
      format: 'Format', // Format
    },
    expressionVariable: {
      title: 'Zmienna kontekstowa', // Context Variable
      prompt: 'Wskazówka: wprowadź pojedynczą zmienną kontekstową taką jak zestawy danych ["Nazwa zestawu danych"].', // Hint: Input single context variable, such as datasets["datasetName"].lastUpdated
    },
    fontSize: {
      smaller: 'Mniejszy', // Smaller
      small: 'Mały', // Small
      normal: 'Normalny', // Normal
      large: 'Duży', // Large
      larger: 'Większy', // Larger
    },
    link: {
      title: 'Ustawienia linku', // Link Settings
      url: 'Url', // Url
      targetPage: 'Strona docelowa', // Target Page
      none: 'Brak', // None
    },
  },
  spreadChart: {
    saveDataRange: 'Zapisz jako źródło danych', // Save as Data Source
    enterEditing: 'Skonfiguruj niestandardowy zestaw danych', // Configure Custom Dataset
    exitEditing: 'Wyjdź z konfiguracji', // Exit Configuration
    bindingHint: 'Kliknij przycisk "Konfiguruj", aby wygenerować zestaw danych.', // Please click the "Configure" button to generate a dataset.
    bindingHintInEditing: 'Wybierz żądane komórki, aby wygenerować zestaw danych.', // Please select wanted cells to generate a dataset.
    addPivotTable: 'Dodaj tabelę przestawną', // Add Pivot Table
    removePivotTable: 'Usuń tabelę przestawną', // Remove Pivot Table
    setDataSourceRange: 'Ustaw zakres wyboru jako źródło danych', // Set Selection Range As Data Source
    showDataSourceRange: 'Pokaż zakres źródła danych', // Show Data Source Range
    hideDataSourceRange: 'Ukryj zakres źródła danych', // Hide Data Source Range
    save: 'Zapisz', // Save
    values: 'Wartości', // Values
    columnsPattern: 'Kolumna{{index}}', // Column{{index}}
    rowsPattern: 'Wiersz{{index}}', // Row{{index}}
    removeData: 'Usuń puste komórki', // Remove Empty Cells
    none: 'Żaden', // None
    emptyRowColumn: 'Puste wiersze/kolumny', // Empty Rows/Columns
    emptyDimension: 'Puste wymiary', // Empty Dimensions
    emptyCell: 'Puste komórki', // Empty Cells
    columnAsField: 'Kolumna jako pole', // Column As Field
    layout: 'Wygląd', // Layout
    tables: 'Agregacja', // Aggregation
    source: 'Obliczenia', // Calculation
    tablesAndSource: 'Agregacja i obliczenia', // Aggregation & Calculation
    tablesAndViewer: 'Obliczenia i wizualizacja', // Calculation & Visualization
    all: 'Wszystko', // All
    getPivotDataDescription: 'Ta funkcja zwróci dane przestawne.', // This function will return pivot data.
  },
  mergedChart: {
    datasetJoinType: 'Typ łączenia zestawu danych', // Dataset Join Type
    innerJoin: 'Inner Join', // Inner Join
    fullJoin: 'Full Join', // Full Join
  },
  webContent: {
    empty: 'Pusty', // Blank
    emptyInRunTime: 'Pusty', // Blank
  },
  slicers: {
    filterPlaceholder: 'Szukaj', // Search
    selectAll: '(Wszystko)', // (All)
    search: 'Szukaj', // Search
    clearSelection: 'Wyczyść wybór', // Clear Selection
    sort: 'Sortowanie fragmentowe', // Slicer Sort
    notSelected: 'Nie ustawione', // Not Set
    startDate: 'Data początkowa', // Start Date
    endDate: 'Data końcowa', // End Date
    value: 'Wartość', // Value
    showMore: 'Pokaż więcej…', // Show more\u2026
    selectParameter: 'Wybierz parametr', // Select parameter
    dateRangeSlicer: {
      dateFormat: 'MM/DD/RRRR', // MM/DD/YYYY
      yearFormat: 'RRRR', // YYYY
      yearQuarterFormats: [
        '[Q]1 RRRR', // YYYY
        '[Q]2 RRRR', // YYYY
        '[Q]3 RRRR', // YYYY
        '[Q]4 RRRR', // YYYY
      ],
      quarterFormats: [
        'Q1',
        'Q2',
        'Q3',
        'Q4',
      ],
      monthFormat: 'MMM', // 
      yearMonthFormat: 'MMM RRRR', // MMM YYYY
      timeFormat: 'GG:mm:ss', // HH:mm:ss
      date: 'Data', // Date
      year: 'Rok', // Year
      yearQuarter: 'Rok-Kwartał', // Year-Quarter
      yearMonth: 'Rok-Miesiąc', // Year-Month
      dateTime: 'Data i godzina', // Date Time
      dateRange: 'Zakres daty', // Date Range
      selectedRange: 'Wybrany zakres: ', // Selected Range: 
      ok: 'OK', // OK
      useDynamicRange: 'Użyj zakresu dynamicznego', // Use Dynamic Range
      useStaticRange: 'Użyj zakresu statycznego', // Use Static Range
      dynamicRange: {
        today: 'Dzisiaj', // Today
        yesterday: 'Wczoraj', // Yesterday
        thisWeek: 'Ten tydzień', // This Week
        last7Days: 'Ostatnie 7 dni', // Last 7 Days
        thisMonth: 'Ten miesiąc', // This Month
        last30Days: 'Ostatnie 30 dni', // Last 30 Days
        thisYear: 'Ten rok', // This Year
        last365Days: 'Ostatnie 365 dni', // Last 365 Days
      },
    },
    relativeDateSlicer: {
      PreviousYear: 'Poprzedni rok', // Previous Year
      ThisYear: 'Ten rok', // This Year
      ThisQuarter: 'Ten kwartał', // This Quarter
      PreviousMonth: 'Poprzedni miesiąc', // Previous Month
      ThisMonth: 'Obecny miesiąc', // This Month
      Q1: 'Q1',
      Q2: 'Q2',
      Q3: 'Q3',
      Q4: 'Q4',
      none: 'Żaden', // None
      custom: 'Niestandardowy', // Custom
      addRelativeDate: 'Dodaj datę względną', // Add Relative Date
      itemName: 'Nazwa', // Name
    },
  },
  editors: {
    colorDropDown: {
      theme: 'Kolory motywu', // Theme Colors
      themeColors: {
        base: '{{colorKey}}', // {{colorKey}}
        darker25: '{{colorKey}} - 25% ciemniej', // {{colorKey}} - 25% darker
        darker50: '{{colorKey}}- 50% ciemniej', // {{colorKey}}- 50% darker
        lighter25: '{{colorKey}}- 25% jaśniej', // {{colorKey}}- 25% lighter
        lighter50: '{{colorKey}} - 50% jaśniej', // {{colorKey}} - 50% lighter
        lighter75: '{{colorKey}} - 75% jaśniej', // {{colorKey}} - 75% lighter
      },
    },
    relativeDateEditor: {
      anchor: 'Kotwica', // Anchor
      previousYear: 'Poprzedni', // Previous
      previousDay: 'Poprzedni', // Previous
      previousQuarterMonthWeek: 'Poprzedni', // Previous
      thisYearDay: 'Obecny', // This
      thisQuarterMonthWeek: 'Obecny', // This
      nextYearDay: 'Następny', // Next
      nextQuarterMonthWeek: 'Następny', // Next
      lastN: 'Ostatni', // Last
      nextN: 'Następny', // Next
      year: 'Rok', // Year
      quarter: 'Kwartał', // Quarter
      month: 'Miesiąc', // Month
      week: 'Tydzień', // Week
      day: 'Dzień', // Day
      toNow: 'Do daty', // To Date
      toAnchor: 'Do daty', // To Date
      anchorRelativeTo: 'Zakotwiczenie względem', // Anchor Relative To
      space: ' ',
    },
    multipleValues: {
      label: '<...>',
      title: 'wiele wartości', // multiple values
    },
    colorFriendlyDisplay: {
      Tint20Percent: '20% jaśniej', // 20% lighter
      Tint40Percent: '40% jaśniej', // 40% lighter
      Tint60Percent: '60% jaśniej', // 60% lighter
      Shade75Percent: '75% ciemniej', // 75% darker
      Shade50Percent: '50% ciemniej', // 50% darker
    },
    colorOpacity: 'nieprzezroczystość', // opacity
    colorCustom: {
      customColors: 'Niestandardowy', // Custom
      webColors: 'Sieć', // Web
      noFill: 'Bez wypełnienia', // No Fill
      noValue: 'Bez wartości', // No Value
      inherit: 'Dziedziczenie', // Inherit
      auto: 'Automatycznie', // Auto
    },
    parameterWrapper: {
      useCustomValue: 'Użyj niestandardowej wartości', // Use custom value
      addParameter: 'Użyj nowego parametru...', // Use a new parameter...
    },
    timespan: {
      labels: {
        day: 'DZI', // DAY
        hour: 'GDZ', // HR
        minute: 'MIN', // MIN
        second: 'SEK', // SEC
      },
    },
    withAggregatedValue: {
      useConstantValue: 'Użyj stałej wartości', // Use constant value
      addAggregatedValue: 'Użyj nowej wartości zagregowanej...', // Use a new aggregated value...
      aggregatedSetting: 'Ustawienie agregacji', // Aggregation Setting
    },
  },
  patterns: {
    measures: {
      pattern: '{{aggregation}} z {{measure}}', // {{aggregation}} of {{measure}}
      pattern_duplicated: '{{aggregation}} z {{measure}} ({{idx}})', // {{aggregation}} of {{measure}} ({{idx}})
      nonePattern: '{{measure}}', // {{measure}}
      nonePattern_duplicated: '{{measure}} ({{idx}})', // {{measure}} ({{idx}})
    },
    calculations: {
      running: 'Uruchomiona', // Running
      moving: 'Przenoszenie', // Moving
      pattern: '{{method}} {{calculation}} na {{aggregation}}', // {{method}} {{calculation}} on {{aggregation}}
      pattern_duplicated: '{{method}} {{calculation}} na {{aggregation}} ({{idx}})', // {{method}} {{calculation}} on {{aggregation}} ({{idx}})
      accounting: 'Percentyl', // Percentile
      ranking: 'Ranking', // Ranking
      value: 'Wartość', // Value
      ratio: 'Współczynnik', // Ratio
      difference: 'Różnica', // Difference
      percentDifference: 'Różnica procentowa', // Percent Difference
    },
    chartTitle: {
      default: 'Wykres', // Chart
      separator: ', ',
      connector: ' i ', // and
      pattern: '{{measure}} według {{dimension}}', // {{measure}} by {{dimension}}
    },
    datetime: {
      fiscalYearPattern: 'Rok fiskalny {{year}}', // FY {{year}}
      quarter1: 'Q1',
      quarter2: 'Q2',
      quarter3: 'Q3',
      quarter4: 'Q4',
      parts: {
        year: 'Rok', // Year
        quarter: 'Kwartał', // Quarter
        month: 'Miesiąc', // Month
        week: 'Tydzień', // Week
        day: 'Dzień', // Day
        hour: 'Godzina', // Hour
        minute: 'Minuta', // Minute
        second: 'Sekunda', // Second
        millisecond: 'Milisekunda', // Millisecond
      },
    },
    pageName: {
      namePattern: 'Strona {{number}}', // Page {{number}}
      namePattern_copy: '{{name}} - Kopia {{number}}', // {{name}} - Copy {{number}}
      nameRegex: '^Strona (\\d+)$', // ^Page (\\d+)$
      nameRegex_copy: '^{{name}} - Kopia (\\d+)$', // ^{{name}} - Copy (\\d+)$
    },
    parameterName: {
      namePattern: 'Parametr{{number}}', // Parameter{{number}}
      nameRegex: '^Parametr(\\d+)$', // ^Parameter(\\d+)$
    },
    container: {
      defaultTitle: 'Kontener', // Container
      tabTitleButton: 'Etykieta {{number}}', // Tab {{number}}
      tabTitleRegex: '^Etykieta (\\d+)$', // ^Tab (\\d+)$
    },
    tooltip: {
      selectedValue: '{{count}} wybrana wartość', // {{count}} value selected
      selectedValue_plural: '{{count}} wybrane wartości', // {{count}} values selected
    },
    conditions: {
      between: ' Pomiędzy {{min}} i {{max}}', // Between {{min}} and {{max}}
      notBetween: ' Nie pomiędzy {{min}} i {{max}}', // Not between {{min}} and {{max}}
    },
  },
  notifications: {
    dashboardSaving: 'Zapisywanie dashboardu', // Saving Dashboard
    dashboardSaved: 'Dashboard zapisany.', // Dashboard Saved.
    dismiss: 'Odwołaj', // Dismiss
    dismissAll: 'Odwołaj wszystkie', // Dismiss All
    showAll: 'Pokaż wszystkie', // Show All
    showDetails: 'Pokaż szczegóły', // Show Details
    infoCategory: 'Informacje', // Info
    warningCategory: 'Uwaga', // Warning
    errorCategory: 'Błąd', // Error
    expandTitle: 'Rozwiń', // Expand
    collapseTitle: 'Zwiń', // Collapse
    promptUsingMobileView: {
      title: 'Widok mobilny jest używany', // Mobile View Is In-use
      content: "Uwaga: na pulpicie nawigacyjnym jest wyświetlany 'Widok mobilny'. Przejdź do 'widoku pulpitu', aby zobaczyć pełny pulpit nawigacyjny.", // Note: You are seeing the 'Mobile View' of the dashboard. Switch to the 'Desktop View' to see the full dashboard.
    },
  },
  error: {
    noImage: 'Brak obrazu', // No Image
    noImageInRunTime: 'Brak obrazu', // No Image
    noData: 'Nie znaleziono danych', // No data found
    getDatasetFailed: 'Nie udało się pobrać danych!', // Failed to retrieve data!
    getDatasetNoAccess: 'Brak wymaganych uprawnień do pobierania danych!', // No required permission to retrieve the data!
    loadGeoDataFailed: 'Nie udało się załadować danych geograficznych!', // Failed to load geo data!
    loadFloorPlanDataFailed: 'Nie udało się wczytać danych planu piętra!', // Failed to load floor plan data!
    exportFailed: 'Nie udało się wyeksportować.', // Failed to export.
    getTokenFailed: 'Nie udało się uzyskać tokena.', // Failed to get token.
    notSupportChangeChartType: 'Komponent wizualizacji nie obsługuje zmiany typu wykresu!', // The visualization component does not support changing the chart type!
    loadVisualFailed: 'Nie udało się załadować wizualizacji', // Failed to load visualization
    docWithoutAccess: {
      title: 'Niektóre używane dokumenty bez dostępu lub nie znalezione.', // Some used documents without access or not found.
      content: {
        enVersion: '{{dashboardCount}} dashboard, {{reportCount}} raport, {{datasetCount}} zestaw danych, {{imageCount}} obraz, {{geoJsonCount}} geoJson, {{mapHierarchyCount}} mapa hierarchii, {{visualCount}} wizualizacja, {{floorPlanCount}} plan budynku i {{docThemeCount}} motyw bez dostępu.', // {{dashboardCount}} dashboard, {{reportCount}} report, {{datasetCount}} dataset, {{imageCount}} image, {{geoJsonCount}} geoJson, {{mapHierarchyCount}} mapHierarchy, {{visualCount}} visualization, {{floorPlanCount}} floorPlan and {{docThemeCount}} theme without access.
        cnVersion: '{{dashboardCount}} dashboard, {{reportCount}} raport, {{datasetCount}} zestaw danych, {{imageCount}} obraz, {{geoJsonCount}} geoJson, {{mapHierarchyCount}} mapa hierarchii, {{visualCount}} wizualizacja, {{floorPlanCount}} plan budynku i {{docThemeCount}} motyw bez dostępu.', // {{dashboardCount}} dashboard, {{reportCount}} report, {{datasetCount}} dataset, {{imageCount}} image, {{geoJsonCount}} geoJson, {{mapHierarchyCount}} mapHierarchy, {{visualCount}} visualization, {{floorPlanCount}} floorPlan and {{docThemeCount}} theme without access.
      },
    },
    statusCode: {
      401: {
        title: 'Brak autoryzacji', // Unauthorized
        content: 'Twoje dane logowania są nieprawidłowe lub wygasły. Spróbuj ponownie załadować stronę lub zalogować się ponownie.', // Your login info is either incorrect or expired. Try reload the page or login again.
      },
      403: {
        title: 'Zakaz', // Forbidden
        content: 'Nie masz wymaganych uprawnień, aby uzyskać dostęp do zasobu.', // You do not have the required permission to access the resource.
      },
      404: {
        title: 'Nie znaleziono', // Not Found
        content: '{{content}} nie został znaleziony.', // {{content}} was not found.
      },
      500: {
        title: 'Wewnętrzny błąd serwera', // Internal Server Error
        content: '',
      },
    },
    errorCode: {
      200000: {
        title: 'Nieznany błąd', // Unknown Error
        content: '{{context}}', // {{context}}
      },
      // 200001: model invalid. User does not need to see this.
      200002: {
        title: 'Nie znaleziono dokumentu', // Document Not Found
        contentHasName: 'Nie można znaleźć dokumentu {{type}} \'{{name}}\'.', // Cannot find the {{type}} document \'{{name}}\'.
        contentNoName: '"Nie można znaleźć dokumentu {{type}}, do którego się odwołuje.', // Cannot find referenced {{type}} document.
      },
      200101: {
        title: '{{title}} - Dashboard istnieje', // {{title}} - Dashboard Exists
        content: 'Już istnieje dashboard z taką nazwą', // There is already a dashboard with the same name.
      },
      200102: {
        title: 'Przekroczono liczbę dokumentów', // Document Count Exceeded
        content: 'Liczba pulpitów nawigacyjnych osiągnęła limit licencji.', // The count of dashboards reached your license limit.
      },
      200201: {
        title: 'Odmowa dostępu do dokumentu', // Document Access Denied
        content: 'Nie masz wymaganych uprawnień, aby uzyskać dostęp do dokumentu {{type}} \'{{name}}\'.', // You do not have the required permission to access the {{type}} document \'{{name}}\'.
      },
      200204: {
        title: 'Przekroczono zagregowane punkty danych', // Aggregated Data Points Exceeded
        content: 'Liczba zagregowanych punktów danych przekracza ustawiony limit.', // The count of aggregated data points exceeds the limit setting.
      },
      200211: {
        title: 'Pobieranie danych zbioru danych nie powiodło się', // Get Dataset Data Failed
        content: 'Bieżący użytkownik musi należeć do dedykowanej organizacji, aby uzyskać dostęp do pamięci podręcznej zestawu danych zestawu danych z wieloma dzierżawcami', // Current user must belong to a dedicated organization to access dataset cache of a multi-tenant dataset
      },
      200212: {
        title: 'Pamięć podręczna zestawu danych jest niedostępna', // Dataset Cache Unavailable
        content: 'Odśwież pamięć podręczną zbioru danych \'{{datasetName}}\'.', // Please refresh dataset cache \'{{datasetName}}\.'
      },
      200213: {
        title: 'Pamięć podręczna zestawu danych jest niedostępna', // Dataset Cache Unavailable
        content: 'Odśwież pamięć podręczną zbioru danych \'{{datasetName}}\'.', // Please refresh dataset cache \'{{datasetName}}\'.
      },
      200214: {
        title: 'Przekroczono zagregowaną liczbę punktów danych', // Exceeded Max Aggregated Data Points
        content: 'Liczba zagregowanych punktów danych przekracza limit {{maxAggDataPoints}}.', // The count of aggregated data points exceeds the limit {{maxAggDataPoints}}.
      },
      200215: {
        title: 'Niewystarczająca wartość kontekstu', // Insufficient Context Value
        content: 'Określona właściwość \'{{property}}\' nie została znaleziona w kontekście bieżącego użytkownika.', // Specified property, \'{{property}}\', not found on current user-context.
      },
      200216: {
        title: 'Niewystarczająca wartość kontekstu', // Insufficient Context Value
        content: 'Określona właściwość \'{{property}}\' nie została znaleziona w bieżącym kontekście organizacji.', // Specified property, \'{{property}}\', not found on current organization-context.
      },
      200217: {
        title: 'Niewystarczająca wartość kontekstu', // Insufficient Context Value
        content: 'Dosłowna wartość parametru kontekstu \'{{parametr}}\' nie może zostać przekonwertowana na typ \'{{dataType}}\'.', // The literal value of context parameter, \'{{parameter}}\', can not be converted to \'{{dataType}}\' type.
      },
      200218: {
        title: 'Niewystarczająca wartość kontekstu', // Insufficient Context Value
        content: 'Wartość parametru kontekstu \'{{parametr}}\' jest nullem lub pusta.', // Value of context parameter, \'{{parameter}}\', is null or empty.
      },
    },
    devTools: {
      loadDefinitionError: 'Nie udało się załadować wizualizacji', // Failed to load visualization
    },
    multiSourceChart: {
      measureInGroup: {
        title: 'Operacja zabroniona', // Operation Forbidden
        content: 'Nie dodawaj pola miary do roli grupującej!', // Do not add measure field to grouping role!
      },
    },
  },
  invalidInfos: {
    inputEmpty: 'Dane wejściowe nie mogą być puste', // Input cannot be empty
    invalidFloat: 'Wymagana jest prawidłowa liczba', // A valid number is required
    invalidInteger: 'Wymagana jest prawidłowa liczba całkowita', // A valid integer is required
    lessThanMin: 'Musi być większa lub równa wartości minimalnej {{ min }}', // Must be greater than or equal to the minimum value {{ min }}
    lessThanOrEqualToMin: 'Musi być większa niż wartość minimalna {{ min }}', // Must be greater than the minimum value {{ min }}
    greaterThanMax: 'Musi być mniejsza lub równa maksymalnej wartości {{ max }}', // Must be less than or equal to the maximum value {{ max }}
    greaterThanOrEqualToMax: 'Musi być mniejsza niż wartość maksymalna {{ max }}', // Must be less than the maximum value {{ max }}
    greaterThanMaxLength: 'Musi być mniejsza lub równa maksymalnej długości {{ maxLength }}', // Must be less than or equal to the maximum length {{ maxLength }}
    notMatchPattern: 'Musi pasować do wyrażenia regularnego {{ pattern }}', // Must match the regex {{ pattern }}
    date: {
      invalidDate: 'Wymagana jest ważna data', // A valid date is required
      lessThanMinDate: 'Musi być po lub taka sama jak data minimalna {{ minDate }}', // Must be after or same as the minimum date {{ minDate }}
      greaterThanMaxDate: 'Musi być przed lub taka sama jak data maksymalna {{ maxDate }}', // Must be before or same as the maximum date {{ maxDate }}
    },
    parameter: {
      nameEmpty: 'Nazwa nie może być pusta', // Name cannot be empty
      nameExist: 'Nazwa już istnieje', // Name already exists
      nameInvalid: 'Niepoprawna nazwa', // Illegal Name
      promptEmpty: 'Monit nie może być pusty', // Prompt cannot be empty
    },
    save: {
      empty: 'Nazwa nie może być pusta', // Document name cannot be empty
      invalid: 'Niepoprawna nazwa', // Illegal Name
    },
    dynamicUrl: {
      urlEmpty: 'Url nie może być pusty', // Url cannot be empty
      illegalHttpFormat: 'Niepoprawny Url', // Illegal Url
      isEmpty: 'Nie może być pusty', // Cannot be empty
      unSupportedVariableName: 'Nieobsługiwana nazwa zmiennej', // Unsupported variable name
      illegalVariableExpression: 'Niedozwolone zmienne wyrażenie', // Illegal variable expression
    },
  },
  contextMenu: {
    selection: 'Wybór', // Selection
    overlapping: 'Nakładanie', // Overlapping
    sendToFront: 'Wyślij na wierzch', // Send to Front
    bringForward: 'Przenieś do przodu', // Bring Forward
    forward: 'Przenieś do przodu', // Bring Forward
    backward: 'Wyślij do tyłu', // Send Backward
    sendToBack: 'Przenieś do tyłu', // Send to Back
    sendBackward: 'Przenieś na tył', // Send Backward
    alignment: 'Wyrównanie', // Alignment
    horizontalAlign: 'Wyrównanie w poziomie', // Horizontal Align
    verticalAlign: 'Wyrównanie w pionie', // Vertical Align
    alignLeft: 'Wyrównaj do lewej', // Align Left
    alignCenter: 'Wyrównaj do środka', // Align Center
    alignRight: 'Wyrównaj do prawej', // Align Right
    alignTop: 'Wyrównaj do góry', // Align Top
    alignMiddle: 'Wyrównaj do środka', // Align Middle
    alignBottom: 'Wyrównaj do dołu', // Align Bottom
    assimilation: 'Asymilacja', // Assimilation
    sameWidth: 'Ta sama szerokość', // Same Width
    sameHeight: 'Ta sama wysokość', // Same Height
    sameSize: 'Ten sam rozmiar', // Same Size
  },
  geoMap: {
    loadingGeoJSON: 'Ładowanie GEOJson z serwera!', // Loading GEOJson From Server!
    online: 'Online', // Online
    offline: 'Wbudowany', // Built-in
    directGeo: 'Niestandardowy', // Custom
  },
  drillDownPanel: {
    header: 'Drążenie', // Drill Down
    typeLabel: 'Tryb', // Mode
    drillDownType: {
      all: 'Domyślny', // Default
      list: 'Wstępnie ustawione cele', // Pre-set Targets
      path: 'Wstępnie ustawiona ścieżka', // Pre-set Path
    },
    itemsTitle: {
      list: 'Drążenie celów', // Drill Down Targets
      path: 'Drąż w dół ścieżki', // Drill Down Path
    },
  },
};
