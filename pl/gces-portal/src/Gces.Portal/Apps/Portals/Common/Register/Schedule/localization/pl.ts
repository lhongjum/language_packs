export const schedulePL: LanguageKeyValueMap = {
	schNoSchedulePlugin: 'Brak wtyczki szablonu planowania', // no schedule template plugin ###

	'schedule!title': 'Szablony harmonogramów', // Schedule Templates
	'schedule!description': 'Zarządzanie szablonami planowania', // Schedule Templates management ### jw.

	schNotItemsTip: 'Brak szablonów planowania. Dodaj.', // no schedule templates, please add schedule template. ### jw.
	schAddSchedule: 'Dodaj szablon', // Add Template
	schScheduleName: 'Nazwa szablonu', // Template Name
	schScheduleNamePlaceholder: 'Wprowadź nazwę szablonu', // Please enter the template name
	schDocumentType: 'Typ dokumentu', // Document Type
	schScheduleDescription: 'Opis szablonu', // Template Description
	schScheduleDescriptionPlaceholder: 'Wprowadź opis szablonu', // Please enter the template description
	schCreateSchedule: 'Utwórz szablon', // Create Template
	schCancel: 'Anuluj', // Cancel

	schSave: 'Zapisz', // Save
	schClose: 'Zamknij', // Close
	schDelete: 'Usuń', // Delete
	'schTab!basic-information': 'Podstawowe informacje', // Basic Information
	'schTab!recurrence': 'Powtarzalność', // Recurrence
	'schTab!delivery': 'Dostarczanie', // Delivery
	'schTab!referenced-files': 'Powiązane dokumenty', // Referenced Documents

	schAssignPermissions: 'Przypisz uprawnienie', // Assign Permission

	schAlreadyExistTitle: 'Wiadomość', // Message
	schAlreadyExistContent: '\'{{name}}\' już istnieje.', // \'{{name}}\' already exists.
	schAlreadyExistYes: 'OK',

	// Delete confirm
	delConfirmTitle: 'Usuń szablon', // Delete Template
	delConfirmContent: 'Czy chcesz usunąć \'{{name}}\' na zawsze?', // Do you want to delete \'{{name}}\' permanently?
	delConfirmDelete: 'OK',
	delConfirmNo: 'Anuluj', // Cancel

	// Update confirm
	updateConfirmTitle: 'Update Template',
	updateConfirmContent: 'This template was referenced by scheduled tasks, do you want to update them?',
	updateConfirmRadioCascade: 'Cascade update scheduled tasks(recurrence, delivery and export settings)',
	updateConfirmRadioTemplateOnly: 'Update template only',

	// Update Error
	updateError_invalidEndTime: 'End date could not be earlier than current time.',
	updateError_taskInvalid: 'Task is invalid.',
	updateError_templateNotFound: 'Template not found.',
	updateError_noEmailAddress: 'Referenced task EmailTo could not be null, please set EmailTo in template or update template only.',

	// Delete Error
	delScheduleError: 'Nie udało się usunąć szablonu', // Failed to delete template
	delScheduleErrorContent: 'The template can not be deleted. It is used by the following tasks:\n{{tasks}}',
	delSchRelatedTasks: 'Zadania', // Tasks

	// Recurrence Editor
	recEditorHeaderRepeat: 'Powtórz', // Repeat
	recEditorLabelStart: 'Start', // Start
	recEditorLabelEnd: 'Koniec', // End
	recEditorPlaceholderNoEndDate: 'Brak daty końcowej', // No End Date
	recEditorDailyEditor: 'Dziennie', // Daily
	recEditorWeeklyEditor: 'Tygodniowo', // Weekly
	recEditorMonthlyEditor: 'Miesięcznie', // Monthly

	// Daily Editor
	dailyEditorTextAt: 'O {{time}}', // At {{time}}
	dailyEditorTextEvery: 'Co', // Every
	dailyEditorHoursTextUnits: 'godzin', // hour(s)
	dailyEditorMinutesTextUnits: 'minut', // minute(s)
	dailyEditorSecondsTextUnits: 'sekund', // second(s)

	// Weekly Editor
	weeklyEditorTextEvery: 'Każda/y', // Every
	weeklyEditorTextUnits: 'tygodnia', // week(s)

	// Monthly Editor
	monthlyEditorTextEvery: 'Powtórz co', // Every
	monthlyEditorTextUnits: 'miesięcy', // month(s)
	monthlyEditorTextOnDay: 'W dniu', // On day
	monthlyEditorTextOnDayUnits: '',
	monthlyEditorTextOnTheLast: 'W ostatni', // On the last
	monthlyEditorTextLastDay: 'Dzień', // Day
	monthlyEditorTextLastWeekday: 'Dzień roboczy', // Weekday

	// ----- Delivery ------ //
	schAllowUserToChoose: 'Pozwól użytkownikowi wybrać', // Allow user to choose
	allowUserChangeEmailTip: 'Allow user to change recipient(s)',
	forbidUserChangeEmailTip: 'Restrict user to change recipient(s)',

	reportingEditorHeaderExportFormat: 'Format eksportu', // Export Format
	reportingEditorFormatPdf: 'PDF',
	reportingEditorFormatExcel: 'Excel',
	reportingEditorFormatHTML: 'HTML',
	reportingEditorFormatCSV: 'CSV',
	reportingEditorFormatJSON: 'JSON',
	reportingEditorFormatImage: 'Obraz', // Image
	reportingEditorFormatWord: 'Word',
	reportingEditorFormatTXT: 'TXT',

	// PDF
	edVersion: 'Wszystkie', // Version
	'edPdf12': 'PDF-1.2',
	'edPdf13': 'PDF-1.3',
	'edPdf14': 'PDF-1.4',
	'edPdf15': 'PDF-1.5',
	'edPdf16': 'PDF-1.6',
	'edPdf17': 'PDF-1.7',
	'edPDF/A-1a': 'PDF/A-1a',
	'edPDF/A-1b': 'PDF/A-1b',
	'edPDF/A-2a': 'PDF/A-2a',
	'edPDF/A-2b': 'PDF/A-2b',
	'edPDF/A-2u': 'PDF/A-2u',
	'edPDF/A-3a': 'PDF/A-3a',
	'edPDF/A-3b': 'PDF/A-3b',
	'edPDF/A-3u': 'PDF/A-3u',
	'edPDF/UA-1': 'PDF/UA-1',
	edEmbedFonts: 'OsadźCzczionki', // EmbedFonts
	'edPartial': 'Częściowo', // Partial
	'edAll': 'Wszystkie', // All
	'edNone': 'Żadne', // None
	edNeverEmbedFonts: 'NigdyNieOsadzajCzcionek', // NeverEmbedFonts
	edPrintOnOpen: 'WydrukujPrzyOtwarciu', // PrintOnOpen
	'edAllowPrint': 'ZezwólNaDrukowanie', // AllowPrint
	'edAllowModifyContents': 'ZezwólNaModyfikacjęZawartości', // AllowModifyContents
	'edAllowCopy': 'ZezwólNaKopiowanie', // AllowCopy
	'edAllowModifyAnnotations': 'ZezwólNaPowiadomieniaOModyfikacjach', // AllowModifyAnnotations
	'edAllowFillIn': 'Zezwól na wypełnianie', // AllowFillIn
	'edAllowAccessibleReaders': 'ZezwólNaUłatwieniaDostępu', // AllowAccessibleReaders
	'edAllowAssembly': 'ZezwólNaMontaż', // AllowAssembly
	'edDefault': 'Domyślny', // Default
	edTitle: 'Tytuł', // Title
	edAuthor: 'Autor', // Author
	edSubject: 'Temat', // Subject
	edKeywords: 'SłowaKluczowe', // Keywords
	edApplication: 'Aplikacja', // Application
	edEncrypt: 'Szyfruj', // Encrypt
	edOwnerPassword: 'HasłoWłaściciela', // OwnerPassword
	edUserPassword: 'HasłoUżytkownika', // UserPassword
	edPdfPermissions: 'UprawnieniaPdf', // PdfPermissions
	edPermissions: 'Uprawnienia', // Permissions
	edUse128Bit: 'Użyj128Bit', // Use128Bit
	edHideToolbar: 'UkryjPasekNarzędzi', // HideToolbar
	edHideMenubar: 'UkryjPasekMenu', // HideMenubar
	edHideWindowUI: 'UkryjOknoInterfejsuUżytkownika', // HideWindowUI
	edFitWindow: 'DopasujOkno', // FitWindow
	edCenterWindow: 'WyśrodkujOkno', // CenterWindow
	edDisplayTitle: 'WyświetlTytuł', // DisplayTitle
	edDisplayMode: 'WyświetlTryb', // DisplayMode
	'edOutlines': 'Kontury', // Outlines
	'edThumbs': 'Pinezki', // Thumbs
	'edFullScreen': 'PełnyEkran', // FullScreen
	edDuplexMode: 'TrybDuplex', // DuplexMode
	'edSimplex': 'Simplex',
	'edDuplexFlipLongEdge': 'DuplexFlipLongEdge', //
	'edDuplexFlipShortEdge': 'DuplexFlipShortEdge', //
	edNumberOfCopies: 'LiczbaKopii', // NumberOfCopies
	edImageInterpolation: 'InterpolacjaObrazu', // ImageInterpolation
	edPaperSourceByPageSize: 'ŹródłoPapieruWgRozmiaruStrony', // PaperSourceByPageSize
	edPrintPageRange: 'ZasięgDrukuStrony', // PrintPageRange
	edIsPaginated: 'JestPaginowana', // IsPaginated
	// image
	edImageType: 'TypObrazu', // ImageType
	'edPNG': 'PNG',
	'edJPEG': 'JPEG',
	'edGIF': 'GIF',
	'edBMP': 'BMP',
	'edTIFF': 'TIFF',
	edPagination: 'Paginacja', // Pagination
	edDpiX: 'DpiX',
	edDpiY: 'DpiY',
	edQuality: 'Jakość', // Quality
	edDither: 'PaletaBarw', // Dither
	// HTML
	edEmbedImages: 'OsadźObrazy', // EmbedImages
	edMode: 'Tryb', // Mode
	'edPaginated': 'Paginowane', // Paginated
	'edGalley': 'Szpalta', // Galley
	edRenderingEngine: 'SilnikPrzetwarzania', // RenderingEngine
	'edHtml': 'Html',
	'edMixed': 'Mieszane', // Mixed
	edLinkTarget: 'CelLinku', // LinkTarget
	edFragment: 'Fragment',
	edStyleStream: 'StrumieńStylu', // StyleStream
	edOutputTOC: 'WyjścieTOC', // OutputTOC
	edEndPage: 'StronaKońcowa', // EndPage
	// excel
	edUseCompression: 'UżyjKompresji', // UseCompression
	edProtectedBy: 'ChronionePrzez', // ProtectedBy
	edWritePassword: 'WpiszHasło', // WritePassword
	edPassword: 'Hasło', // Password
	edReadOnlyRecommended: 'ZalecanyTylkoOdczyt', // ReadOnlyRecommended
	edOpenXmlStandard: 'StandardOpenXML', // OpenXmlStandard
	'edTransitional': 'Przejściowy', // Transitional
	'edStrict': 'Ścisły', // Strict
	edEnableToggles: 'WłączPrzełącza', // EnableToggles
	edUseDefaultPalette: 'UżywajDomyślnejPalety', // UseDefaultPalette
	edMultiSheet: 'MultiArkusz', // MultiSheet
	'edSheet Name': 'Nazwa arkusza', // Sheet Name
	// csv
	edExtension: 'Rozszerzenie', // Extension
	edcsv: '.csv',
	edtxt: '.txt',
	// docx
	edUseMhtOutput: 'UżyjWyjściaMht', // UseMhtOutput
	edBaseUrl: 'PodstawowyUrl', // BaseUrl
	edPageHeight: 'WysokośćStrony', // PageHeight
	edPageWidth: 'Szerokość Strony', // PageWidth
	edGenerator: 'Generator',
	edDocumentCompatibilityVersion: 'WersjaKompatybilnościDokumentu', // DocumentCompatibilityVersion
	'edWord2007': 'Word2007',
	'edWord2010': 'Word2010',
	'edWord2013': 'Word2013',
	edTOCAutoUpdate: 'TOCAutomatycznaAktualizacja', // TOCAutoUpdate
	edCompanyName: 'NazwaFirmy', // CompanyName
	// json
	edFormatted: 'Sformatowany', // Formatted
	edQuotePropertyNames: 'CytujNazwyWłaściwości', // QuotePropertyNames
	edNoHeader: 'BrakNagłówka', // NoHeader
	edColumnsDelimiter: 'OgranicznikKolumn', // ColumnsDelimiter
	edRowsDelimiter: 'OgranicznikRzędów', // RowsDelimiter
	edQuotationSymbol: 'Symbol Cytowania', // QuotationSymbol
	// common KAROL: tu nie ma komentarzy, bo to jest zmapowane automatycznie w Excelu, zgodnie z nomenklaturą MS
	edEncoding: 'Kodowanie', // Encoding
	'edIBM EBCDIC (US-Canada)': 'IBM EBCDIC (Stany Zjednoczone-Kanada)',
	'edOEM United States': 'OEM Stany Zjednoczone',
	'edIBM EBCDIC (International)': 'IBM EBCDIC (międzynarodowy)',
	'edArabic (ASMO 708)': 'Arabski (ASMO 708)',
	'edArabic (DOS)': 'Arabski (DOS)',
	'edGreek (DOS)': 'Grecki (DOS)',
	'edBaltic (DOS)': 'Bałtycki (DOS)',
	'edWestern European (DOS)': 'Zachodnioeuropejski (DOS)',
	'edCentral European (DOS)': 'Środkowoeuropejski (DOS)',
	'edOEM Cyrillic': 'OEM cyrylica',
	'edTurkish (DOS)': 'Turecki (DOS)',
	'edOEM Multilingual Latin I': 'OEM wielojęzyczny Latin I',
	'edPortuguese (DOS)': 'Portugalski (DOS)',
	'edIcelandic (DOS)': 'Islandzki (DOS)',
	'edHebrew (DOS)': 'Hebrajski (DOS)',
	'edFrench Canadian (DOS)': 'Francuski kanadyjski (DOS)',
	'edArabic (864)': 'Arabski (864)',
	'edNordic (DOS)': 'Nordycki (DOS)',
	'edCyrillic (DOS)': 'Cyrylica (DOS)',
	'edGreek, Modern (DOS)': 'Grecki współczesny (DOS)',
	'edIBM EBCDIC (Multilingual Latin-2)': 'IBM EBCDIC (wielojęzyczny Latin-2)',
	'edThai (Windows)': 'Tajski (Windows)',
	'edIBM EBCDIC (Greek Modern)': 'IBM EBCDIC (grecki współczesny)',
	'edJapanese (Shift-JIS)': 'Japoński (Shift-JIS)',
	'edChinese Simplified (GB2312)': 'Chiński uproszczony (GB2312)',
	'edKorean': 'Koreański',
	'edChinese Traditional (Big5)': 'Chiński tradycyjny (Big5)',
	'edIBM EBCDIC (Turkish Latin-5)': 'IBM EBCDIC (Turecki Latin-5)',
	'edIBM Latin-1': 'IBM Latin-1',
	'edIBM EBCDIC (US-Canada-Euro)': 'IBM EBCDIC (Stany Zjednoczone-Kanada-Euro)',
	'edIBM EBCDIC (Germany-Euro)': 'IBM EBCDIC (Niemcy-Euro)',
	'edIBM EBCDIC (Denmark-Norway-Euro)': 'IBM EBCDIC (Dania-Norwegia-Euro)',
	'edIBM EBCDIC (Finland-Sweden-Euro)': 'IBM EBCDIC (Finlandia-Szwecja-Euro)',
	'edIBM EBCDIC (Italy-Euro)': 'IBM EBCDIC (Włochy-Euro)',
	'edIBM EBCDIC (Spain-Euro)': 'IBM EBCDIC (Hiszpania-Euro)',
	'edIBM EBCDIC (UK-Euro)': 'IBM EBCDIC (Zjednoczone Królestwo-Euro)',
	'edIBM EBCDIC (France-Euro)': 'IBM EBCDIC (Francja-Euro)',
	'edIBM EBCDIC (International-Euro)': 'IBM EBCDIC (międzynarodowy-Euro)',
	'edIBM EBCDIC (Icelandic-Euro)': 'IBM EBCDIC (islandzki-Euro)',
	'edUnicode': 'Unicode',
	'edUnicode (Big endian)': 'Unicode (Big-Endian)',
	'edCentral European (Windows)': 'Środkowoeuropejski (Windows)',
	'edCyrillic (Windows)': 'Cyrylica (Windows)',
	'edWestern European (Windows)': 'Zachodnioeuropejski (Windows)',
	'edGreek (Windows)': 'Grecki (Windows)',
	'edTurkish (Windows)': 'Turecki (Windows)',
	'edHebrew (Windows)': 'Hebrajski (Windows)',
	'edArabic (Windows)': 'Arabski (Windows)',
	'edBaltic (Windows)': 'Bałtycki (Windows)',
	'edVietnamese (Windows)': 'Wietnamski (Windows)',
	'edKorean (Johab)': 'Koreański (Johab)',
	'edWestern European (Mac)': 'Zachodnioeuropejski (Mac)',
	'edJapanese (Mac)': 'Japoński (Mac)',
	'edChinese Traditional (Mac)': 'Chiński tradycyjny (Mac)',
	'edKorean (Mac)': 'Koreański (Mac)',
	'edArabic (Mac)': 'Arabski (Mac)',
	'edHebrew (Mac)': 'Hebrajski (Mac)',
	'edGreek (Mac)': 'Grecki (Mac)',
	'edCyrillic (Mac)': 'Cyrylica (Mac)',
	'edChinese Simplified (Mac)': 'Chiński uproszczony (Mac)',
	'edRomanian (Mac)': 'Rumuński(Mac)',
	'edUkrainian (Mac)': 'Ukraiński (Mac)',
	'edThai (Mac)': 'Tajski (Mac)',
	'edCentral European (Mac)': 'Środkowoeuropejski (Mac)',
	'edIcelandic (Mac)': 'Islandzki (Mac)',
	'edTurkish (Mac)': 'Turecki (Mac)',
	'edCroatian (Mac)': 'Chorwacki (Mac)',
	'edUnicode (UTF-32)': 'Unicode (UTF-32)',
	'edUnicode (UTF-32 Big endian)': 'Unicode (UTF-32 Big-Endian)',
	'edChinese Traditional (CNS)': 'Chiński tradycyjny (CNS)',
	'edTCA Taiwan': 'TCA Tajwan',
	'edChinese Traditional (Eten)': 'Chiński tradycyjny (Eten)',
	'edIBM5550 Taiwan': 'IBM5550 Tajwan',
	'edTeleText Taiwan': 'TeleText Tajwan',
	'edWang Taiwan': 'Wang Tajwan',
	'edWestern European (IA5)': 'Zachodnioeuropejski (IA5)',
	'edGerman (IA5)': 'Niemiecki (IA5)',
	'edSwedish (IA5)': 'Szwedzki (IA5)',
	'edNorwegian (IA5)': 'Norweski (IA5)',
	'edUS-ASCII': 'US-ASCII',
	'edx-cp20261': 'T.61',
	'edISO-6937': 'ISO-6937',
	'edIBM EBCDIC (Germany)': 'IBM EBCDIC (Niemcy)',
	'edIBM EBCDIC (Denmark-Norway)': 'IBM EBCDIC (Dania-Norwegia)',
	'edIBM EBCDIC (Finland-Sweden)': 'IBM EBCDIC (Finlandia-Szwecja)',
	'edIBM EBCDIC (Italy)': 'IBM EBCDIC (Włochy)',
	'edIBM EBCDIC (Spain)': 'IBM EBCDIC (Hiszpania)',
	'edIBM EBCDIC (UK)': 'IBM EBCDIC (Zjednoczone Królestwo)',
	'edIBM EBCDIC (Japanese katakana)': 'IBM EBCDIC (japoński Katakana)',
	'edIBM EBCDIC (France)': 'IBM EBCDIC (Francja)',
	'edIBM EBCDIC (Arabic)': 'IBM EBCDIC (arabski)',
	'edIBM EBCDIC (Greek)': 'IBM EBCDIC (grecki)',
	'edIBM EBCDIC (Hebrew)': 'IBM EBCDIC (hebrajski)',
	'edIBM EBCDIC (Korean Extended)': 'IBM EBCDIC (koreański rozszerzony)',
	'edIBM EBCDIC (Thai)': 'IBM EBCDIC (tajski)',
	'edCyrillic (KOI8-R)': 'Cyrylica (KOI8-R)',
	'edIBM EBCDIC (Icelandic)': 'IBM EBCDIC (islandzki)',
	'edIBM EBCDIC (Cyrillic Russian)': 'IBM EBCDIC (rosyjski cyrylica)',
	'edIBM EBCDIC (Turkish)': 'IBM EBCDIC (turecki)',
	'edJapanese (JIS 0208-1990 and 0212-1990)': 'Japoński (JIS 0208-1990 i 0212-1990)',
	'edChinese Simplified (GB2312-80)': 'Chiński uproszczony (GB2312-80)',
	'edKorean Wansung': 'Koreański Wansung',
	'edIBM EBCDIC (Cyrillic Serbian-Bulgarian)': 'IBM EBCDIC (serbski-bułgarski cyrylica)',
	'edCyrillic (KOI8-U)': 'Cyrylica (KOI8-U)',
	'edWestern European (ISO)': 'Zachodnioeuropejski (ISO)',
	'edCentral European (ISO)': 'Środkowoeuropejski (ISO)',
	'edLatin 3 (ISO)': 'Latin 3 (ISO)',
	'edBaltic (ISO)': 'Bałtycki (ISO)',
	'edCyrillic (ISO)': 'Cyrylica (ISO)',
	'edArabic (ISO)': 'Arabski (ISO)',
	'edGreek (ISO)': 'Greek (ISO)',
	'edHebrew (ISO-Visual)': 'Hebrajski (ISO-Visual)',
	'edTurkish (ISO)': 'Turecki (ISO)',
	'edEstonian (ISO)': 'Estoński (ISO)',
	'edLatin 9 (ISO)': 'Latin 9 (ISO)',
	'edEuropa': 'Europa',
	'edHebrew (ISO-Logical)': 'Hebrajski (ISO-Logical)',
	'edJapanese (JIS)': 'Japoński (JIS)',
	'edJapanese (JIS-Allow 1 byte Kana)': 'Japoński (JIS-dozwolone 1-bajtowe znaki Kana)',
	'edJapanese (JIS-Allow 1 byte Kana - SO/SI)': 'Japoński (JIS-dozwolone 1-bajtowe znaki Kana - SO/SI)',
	'edKorean (ISO)': 'Koreański (ISO)',
	'edChinese Simplified (ISO-2022)': 'Chiński uproszczony (ISO-2022)',
	'edJapanese (EUC)': 'Japoński (EUC)',
	'edChinese Simplified (EUC)': 'Chiński uproszczony (EUC)',
	'edKorean (EUC)': 'Koreański (EUC)',
	'edChinese Simplified (HZ)': 'Chiński uproszczony (HZ)',
	'edChinese Simplified (GB18030)': 'Chiński uproszczony (GB18030)',
	'edISCII Devanagari': 'ISCII dewanagari',
	'edISCII Bengali': 'ISCII bengalski',
	'edISCII Tamil': 'ISCII temilski',
	'edISCII Telugu': 'ISCII telugu',
	'edISCII Assamese': 'ISCII assamski',
	'edISCII Oriya': 'ISCII odia',
	'edISCII Kannada': 'ISCII kannada',
	'edISCII Malayalam': 'ISCII malajalam',
	'edISCII Gujarati': 'ISCII gudżarati',
	'edISCII Punjabi': 'ISCII pundżabski',
	'edUnicode (UTF-7)': 'Unicode (UTF-7)',
	'edUnicode (UTF-8)': 'Unicode (UTF-8)',

	edPaperSize: 'RozmiarPapieru', // PaperSize
	'edLetter': 'Papier Letter (8,5. o 11 w.).',
	'edLetterSmall': 'Mały papier Letter (8,5. o 11 w.).',
	'edTabloid': 'Papier Tabloid (11. 17 cali.).',
	'edLedger': 'Papier księgi (17 cali) o 11 w.).',
	'edLegal': 'Dokument prawny (8,5. 14 w.).',
	'edStatement': 'Papier instrukcji (5,5. o 8,5.).',
	'edExecutive': 'Papier wykonawczy (7,25 w. o 10,5.).',
	'edA3': 'Papier A3 (297 mm x 420 mm).',
	'edA4': 'Papier A4 (210 mm x 297 mm).',
	'edA4Small': 'Mały papier A4 (210 x 297 mm).',
	'edA5': 'Papier A5 (148 mm x 210 mm).',
	'edB4': 'Papier B4 (250 mm x 353 mm).',
	'edB5': 'Papier B5 (176 mm x 250 mm).',
	'edFolio': 'Papier na folię (8,5. x 13 w.).',
	'edQuarto': 'Papier Quarto (215 mm x 275 mm).',
	'edStandard10x14': 'Papier standardowy (10 w. 14 w.).',
	'edStandard11x17': 'Papier standardowy (11. 17 cali.).',
	'edNote': 'Zanotuj papier (8,5 w. o 11 w.).',
	'edNumber9Envelope': 'koperta #9 (3,875. o 8,875.).',
	'edNumber10Envelope': 'koperta #10 (4,125. o 9,5.).',
	'edNumber11Envelope': 'koperta #11 (4,5. o 10,375.).',
	'edNumber12Envelope': 'koperta #12 (4,75. o 11 w.).',
	'edNumber14Envelope': 'koperta #14 (5 w. o 11,5.).',
	'edCSheet': 'Papier w języku C (17 cali) x 22 w.).',
	'edDSheet': 'D papier (22 w. o 34.).',
	'edESheet': 'Papier E (34. o 44.).',
	'edDLEnvelope': 'Koperta DL (110 mm x 220 mm).',
	'edC5Envelope': 'Koperta C5 (162 mm x 229 mm).',
	'edC3Envelope': 'Koperta C3 (324 mm x 458 mm).',
	'edC4Envelope': 'Koperta C4 (229 mm x 324 mm).',
	'edC6Envelope': 'Koperta C6 (114 mm x 162 mm).',
	'edC65Envelope': 'Koperta C65 (114 mm x 229 mm).',
	'edB4Envelope': 'Koperta B4 (250 mm x 353 mm).',
	'edB5Envelope': 'Koperta B5 (176 mm x 250 mm).',
	'edB6Envelope': 'Koperta B6 (176 mm xz 125 mm).',
	'edItalyEnvelope': 'Koperta Włoska (110 mm x 230 mm).',
	'edMonarchEnvelope': 'Koperta Monarch (3,875. o 7,5.).',
	'edPersonalEnvelope': 'koperta 6 3/4 (3,625 w. o 6,5.).',
	'edUSStandardFanfold': 'German Standard — perforowany (14,875. o 11 w.).',
	'edGermanStandardFanfold': 'German Standard — perforowany (8,5 w. x 12 w.).',
	'edGermanLegalFanfold': 'German Legal — perforowany (8,5. x 13 w.).',
	'edIsoB4': 'ISO B4 (250 mm x 353 mm).',
	'edJapanesePostcard': 'Japońska pocztówka (100 mm x 148 mm).',
	'edStandard9x11': 'Papier standardowy (9. o 11 w.).',
	'edStandard10x11': 'Papier standardowy (10 w. o 11 w.).',
	'edStandard15x11': 'Papier standardowy (15. o 11 w.).',
	'edInviteEnvelope': 'Koperta zaproszenia (220 mm x 220 mm).',
	'edLetterExtra': 'Letter Extra (9,275. x 12 w.).',
	'edLegalExtra': 'Dodatkowy dokument (9,275. o 15 w.).',
	'edTabloidExtra': 'Dodatkowy papier Tabloid (11,69. do 18.).',
	'edA4Extra': 'Dodatkowy papier A4 (236 mm x 322 mm).',
	'edLetterTransverse': 'Letter (8,275. o 11 w.).',
	'edA4Transverse': 'Papier obrócony A4 (210 mm x 297 mm).',
	'edLetterExtraTransverse': 'Letter Extra (9,275. x 12 w.).',
	'edAPlus': 'Papier Super/w formacie A4 (227 mm x 356 mm).',
	'edBPlus': 'Papier doskonały/doskonały/a3 (305 mm x 487 mm).',
	'edLetterPlus': 'Litera Plus papier (8,5 w. o 12,69.).',
	'edA4Plus': 'A4 Plus papier (210 mm x 330 mm).',
	'edA5Transverse': 'Papier obrócony A5 (148 mm x 210 mm).',
	'edB5Transverse': 'Papier obrócony JIS B5 (182 mm x 257 mm).',
	'edA3Extra': 'Dodatkowy papier A3 (322 mm x 445 mm).',
	'edA5Extra': 'Dodatkowy papier A5 (174 mm x 235 mm).',
	'edB5Extra': 'Dodatkowy papier ISO B5 (201 mm x 276 mm).',
	'edA2': 'Papier a2 (420 mm x 594 mm).',
	'edA3Transverse': 'Papier obrócony a3 (297 mm x 420 mm).',
	'edA3ExtraTransverse': 'Dodatkowy papier obrócony a3 (322 mm x 445 mm).',
	'edJapaneseDoublePostcard': 'Japońska podwójna pocztówka (200 mm x 148 mm).',
	'edA6': 'Papier A6 (105 mm x 148 mm).',
	'edJapaneseEnvelopeKakuNumber2': 'Koperta Japońska Kaku #2.',
	'edJapaneseEnvelopeKakuNumber3': 'Koperta Japońska Kaku #3.',
	'edJapaneseEnvelopeChouNumber3': 'Koperta Japońska Chou #3.',
	'edJapaneseEnvelopeChouNumber4': 'Koperta Japońska Chou #4.',
	'edLetterRotated': 'Letter obrócony papier (11. o 8,5.).',
	'edA3Rotated': 'Obrócony papier A3 (420 mm x 297 mm).',
	'edA4Rotated': 'Obrócony papier A4 (297 mm x 210 mm).',
	'edA5Rotated': 'Obrócony papier A5 (210 mm o 148 mm).',
	'edB4JisRotated': 'Obrócony papier JIS B4 (364 mm x 257 mm).',
	'edB5JisRotated': 'Obrócony papier JIS B5 (257 mm x 182 mm).',
	'edJapanesePostcardRotated': 'Japońska obrócona pocztówka (148 mm x 100 mm).',
	'edJapaneseDoublePostcardRotated': 'Japońska obrócona podwójna pocztówka (148 mm x 200 mm).',
	'edA6Rotated': 'Obrócony papier A6 (148 mm o 105 mm).',
	'edJapaneseEnvelopeKakuNumber2Rotated': 'Japońska obrócona koperta Kaku #2.',
	'edJapaneseEnvelopeKakuNumber3Rotated': 'Japońska obrócona koperta Kaku #3.',
	'edJapaneseEnvelopeChouNumber3Rotated': 'Japońska obrócona koperta #3 Chou.',
	'edJapaneseEnvelopeChouNumber4Rotated': 'Japońska obrócona koperta #4 Chou.',
	'edB6Jis': 'Papier JIS B6 (128 mm x 182 mm).',
	'edB6JisRotated': 'Obrócony papier JIS B6 (182 mm x 128 mm).',
	'edStandard12x11': 'Papier standardowy (12 w. o 11 w.).',
	'edJapaneseEnvelopeYouNumber4': 'Japońska #4 koperty.',
	'edJapaneseEnvelopeYouNumber4Rotated': 'Japoński, #4 obrócona koperta.',
	'edPrc16K': 'papier wielo16owy (146 mm x 215 mm).',
	'edPrc32K': 'papier 32 KB (97 mm x 151 mm).',
	'edPrc32KBig': 'Big papier (97 mm x 151 mm).',
	'edPrcEnvelopeNumber1': 'koperta #1 (102 mm x 165 mm).',
	'edPrcEnvelopeNumber2': 'koperta #2 (102 mm x 176 mm).',
	'edPrcEnvelopeNumber3': 'koperta #3 (125 mm x 176 mm).',
	'edPrcEnvelopeNumber4': 'koperta #4 (110 mm x 208 mm).',
	'edPrcEnvelopeNumber5': 'koperta #5 (110 mm x 220 mm).',
	'edPrcEnvelopeNumber6': 'koperta #6 (120 mm x 230 mm).',
	'edPrcEnvelopeNumber7': 'koperta #7 (160 mm x 230 mm).',
	'edPrcEnvelopeNumber8': 'koperta #8 (120 mm x 309 mm).',
	'edPrcEnvelopeNumber9': 'koperta #9 (229 mm x 324 mm).',
	'edPrcEnvelopeNumber10': 'koperta #10 (324 mm x 458 mm).',
	'edPrc16KRotated': '16-obrócony papier (146 mm x 215 mm).',
	'edPrc32KRotated': 'A4 obrócony (97 mm o 151 mm).',
	'edPrc32KBigRotated': 'duży obrócony papier o rozmiarze 32 KB (97 mm x 151 mm).',
	'edPrcEnvelopeNumber1Rotated': '#1 obrócona koperta (165 mm x 102 mm).',
	'edPrcEnvelopeNumber2Rotated': '#2 obrócona koperta (176 mm x 102 mm).',
	'edPrcEnvelopeNumber3Rotated': '#3 obrócona koperta (176 mm x 125 mm).',
	'edPrcEnvelopeNumber4Rotated': '#4 obrócona koperta (208 mm x 110 mm).',
	'edPrcEnvelopeNumber5Rotated': 'Koperta #5 obrócona (220 mm x 110 mm).',
	'edPrcEnvelopeNumber6Rotated': '#6 obrócona koperta (230 mm x 120 mm).',
	'edPrcEnvelopeNumber7Rotated': '#7 obrócona koperta (230 mm x 160 mm).',
	'edPrcEnvelopeNumber8Rotated': '#8 obrócona koperta (309 mm x 120 mm).',
	'edPrcEnvelopeNumber9Rotated': '#9 obrócona koperta (324 mm x 229 mm).',
	'edPrcEnvelopeNumber10Rotated': '#10 obrócona koperta (458 mm x 324 mm).',

	edWatermarkAngle: 'KątZnakuWodnego', // WatermarkAngle
	edWatermarkColor: 'KolorZnakuWodnego', // WatermarkColor
	edWatermarkTitle: 'TytułZnakuWodnego', // WatermarkTitle
	edWatermarkFontFamily: 'RodzinaCzcionekZnakuWodnego', // WatermarkFontFamily
	edWatermarkFontSize: 'RozmiarCzcionkiZnakuWodnego', // WatermarkFontSize
	edWatermarkFontBold: 'PogrubienieCzczionkiZnakuWodnego', // WatermarkFontBold
	edWatermarkFontItalic: 'KursywaCzcionkiZnakuWodnego', // WatermarkFontItalic
	edWatermarkFontStrikeout: 'PrzekreślenieCzcionkiZnakuWodnego', // WatermarkFontStrikeout
	edWatermarkFontUnderline: 'PodkreślenieCzcionkiZnakuWodnego', // WatermarkFontUnderline
	edPrintLayoutMode: 'TrybDrukuLayoutu', // PrintLayoutMode
	'edOneLogicalPageOnSinglePhysicalPage': 'JednaStronaLogicznaNaPojedynczejStronieFizycznej', // OneLogicalPageOnSinglePhysicalPage
	'edTwoLogicalPagesOnSinglePhysicalPage': 'DwieStronyLogiczneNaPojedynczejStronieFizycznej', // TwoLogicalPagesOnSinglePhysicalPage
	'edFourLogicalPagesOnSinglePhysicalPage': 'CzteryStronyLogiczneNaPojedynczejStronieFizycznej', // FourLogicalPagesOnSinglePhysicalPage
	'edEightLogicalPagesOnSinglePhysicalPage': 'OsiemStronLogicznychNaPojedynczejStronieFizycznej', // EightLogicalPagesOnSinglePhysicalPage
	'edBookletMode': 'TrybBroszury', // BookletMode
	edSizeToFit: 'DopasujRozmiar', // SizeToFit
	edStartPage: 'StronaGłówna', // StartPage
	edOrientation: 'Orientacja', // Orientation
	'edPortrait': 'Portret', // Portrait
	'edLandscape': 'Krajobraz', // Landscape
	edSaveSettings: 'Zapisz ustawienie', // Save setting
	edFontWeight: 'GrubośćCzcionki',
	edFontHeight: 'RozmiarCzcionki',

	// deployment
	delEditorHeader: 'Dostarczanie', // Delivery
	delEditorMenuEmail: 'Email', // Email
	delEditorMenuLocal: 'Lokalny magazyn', // Local Storage
	delEditorMenuWFS: 'Udostępnianie plików', // File Share

	delEditorLocalStoreForever: 'Przechowuj bezterminowo', // Store forever
	delEditorLocalStoreUntil: 'Przechowuj do...', // Store until...
	delEditorLocalDeleteAfter: 'Usuń po...', // Expiry Duration...
	delEditorLocalTextOnDayUnits: 'Dniach', // Day(s)
	delEditorLocalAllowAnonymous: 'Dostęp anonimowy', // Allow anonymous

	delEditorWFSLabelFileName: 'Nazwa pliku', // File Name
	delEditorWFSLabelPath: 'Ścieżka', // Path
	delEditorWFSLabelOverwrite: 'Nadpisz istniejące', // Overwrite existing
	delEditorWFSLabelUser: 'Użytkownik', // User
	delEditorWFSLabelPassword: 'Hasło', // Password

	delEditorMailStoreForever: 'Przechowuj bezterminowo', // Store forever
	delEditorMailStoreUntil: 'Przechowuj do...', // Store until...
	delEditorMailDeleteAfter: 'Usuń po...', // Expiry Duration...
	delEditorMailAllowAnonymous: 'Dostęp anonimowy', // Allow anonymous

	deleteAfterUnitMinute: 'Minutach', // Minutes
	deleteAfterUnitHour: 'Godzinach', // Hours
	deleteAfterUnitDay: 'Dniach', // Days
	deleteAfterUnitWeek: 'Tygodniach', // Weeks
	deleteAfterUnitMonth: 'Miesiącach', // Months
	deleteAfterUnitYear: 'Latach', // Years

	delEditorMailLabelEmailTo: 'Wyślij mailem do', // Email to
	delEditorMailLabelInvalidDomainTip: 'Niepoprawna domena', // Invalid Email Domain
	delEditorMailLabelReplyTo: 'Odpowiedz do', // Reply To
	delEditorMailLabelSubject: 'Temat', // Subject
	delEditorMailLabelBody: 'Treść', // Body
	delEditorMailLabelAttachmentType: 'Typ załącznika', // Attachment Type
	delEditorMailAttachmentFile: 'Załącznik', // File Attachment
	delEditorMailAttachmentLink: 'Link do pobrania', // Download Link
	delEditorMailAttachmentBody: 'Wyślij raport jako treść', // Send Report as Body
	delEditorMailChangeTextMode: 'Zmień tryb tekstu', // Change Text Mode
	delEditorMailUseRichText: 'Użyj RTF', // Use Rich Text
	delEditorMailUsePlainText: 'Use zwykłego tekstu', // Use Plain Text
	// ---------------------- //

	// -- Referenced Files -- //
	schNoReferencedFiles: 'Brak powiązanych dokumentów', // no referenced documents
	schName: 'Nazwa', // Name
	schCreator: 'Twórca', // Creator
	// ---------------------- //
	// Ostatecznie z ręki przetłumaczyłem - pasjonuje się geografią, więc było to bardzo przyjemne zadanie : )
	// ------ Timezone ------ //
	taskExecutingTimezone: 'Strefa czasowa uruchomienia', // Executing Timezone
	'timezone_Etc/GMT+11': '(UTC-11:00) Uniwersalny czas koordynowany-11',
	'timezone_America/Adak': '(UTC-10:00) Wyspy Aleuckie',
	'timezone_Pacific/Honolulu': '(UTC-10:00) Hawaje',
	'timezone_Pacific/Marquesas': '(UTC-09:30) Markizy',
	'timezone_America/Anchorage': '(UTC-09:00) Alaska',
	'timezone_Etc/GMT+9': '(UTC-09:00) Uniwersalny czas koordynaowany-09',
	'timezone_America/Tijuana': '(UTC-08:00) Kalifornia Dolna',
	'timezone_Etc/GMT+8': '(UTC-08:00) Uniwersalny czas koordynaowany-08',
	'timezone_America/Los_Angeles': '(UTC-08:00) Czas Pacyficzny (USA & Kanada)',
	'timezone_America/Phoenix': '(UTC-07:00) Arizona',
	'timezone_America/Chihuahua': '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
	'timezone_America/Denver': '(UTC-07:00) Czas Górski (USA & Kanada)',
	'timezone_America/Guatemala': '(UTC-06:00) Ameryka Śordkowa',
	'timezone_America/Chicago': '(UTC-06:00) Czas Środkowy (USA & Kanada)',
	'timezone_Pacific/Easter': '(UTC-06:00) Wyspa Wielkanocna',
	'timezone_America/Mexico_City': '(UTC-06:00) Guadalajara, Meksyk (miasto), Monterrey',
	'timezone_America/Regina': '(UTC-06:00) Saskatchewan',
	'timezone_America/Bogota': '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
	'timezone_America/Cancun': '(UTC-05:00) Chetumal',
	'timezone_America/New_York': '(UTC-05:00) Czas Wschodni (USA & Kanada)',
	'timezone_America/Port-au-Prince': '(UTC-05:00) Haiti',
	'timezone_America/Havana': '(UTC-05:00) Hawana',
	'timezone_America/Indiana/Indianapolis': '(UTC-05:00) Indiana (Wschód)',
	'timezone_America/Grand_Turk': '(UTC-05:00) Turks & Caicos',
	'timezone_America/Asuncion': '(UTC-04:00) Asuncion',
	'timezone_America/Halifax': '(UTC-04:00) Czas Atlantycki (Kanada)',
	'timezone_America/Caracas': '(UTC-04:00) Caracas',
	'timezone_America/Cuiaba': '(UTC-04:00) Cuiaba',
	'timezone_America/La_Paz': '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
	'timezone_America/Santiago': '(UTC-04:00) Santiago',
	'timezone_America/St_Johns': '(UTC-03:30) Nowa Funlandia',
	'timezone_America/Araguaina': '(UTC-03:00) Araguaina',
	'timezone_America/Sao_Paulo': '(UTC-03:00) Brasilia',
	'timezone_America/Cayenne': '(UTC-03:00) Cayenne, Fortaleza',
	'timezone_America/Argentina/Buenos_Aires': '(UTC-03:00) Buenos Aires',
	'timezone_America/Godthab': '(UTC-03:00) Greenlandia',
	'timezone_America/Montevideo': '(UTC-03:00) Montevideo',
	'timezone_America/Punta_Arenas': '(UTC-03:00) Punta Arenas',
	'timezone_America/Miquelon': '(UTC-03:00) Saint Pierre & Miquelon',
	'timezone_America/Bahia': '(UTC-03:00) Salwador',
	'timezone_Etc/GMT+2': '(UTC-02:00) Uniwersalny czas koordynaowany-02',
	'timezone_Atlantic/Azores': '(UTC-01:00) Azory',
	'timezone_Atlantic/Cape_Verde': '(UTC-01:00) Wyspy Zielonego Przylądka',
	'timezone_Etc/UTC': '(UTC) Uniwersalny czas koordynaowany',
	'timezone_Europe/London': '(UTC+00:00) Dublin, Edynburg, Lizbona, Londyn',
	'timezone_Atlantic/Reykjavik': '(UTC+00:00) Monrovia, Reykjavik',
	'timezone_Africa/Sao_Tome': '(UTC+00:00) Wyspy Świętego Tomasza',
	'timezone_Africa/Casablanca': '(UTC+01:00) Casablanca',
	'timezone_Europe/Berlin': '(UTC+01:00) Amsterdam, Berlin, Berno, Rzym, Sztokfolm, Wiedeń',
	'timezone_Europe/Budapest': '(UTC+01:00) Belgrad, Bratislawa, Budapeszt, Ljubljana, Praga',
	'timezone_Europe/Paris': '(UTC+01:00) Bruksela, Kopenhaga, Madryt, Paryż',
	'timezone_Europe/Warsaw': '(UTC+01:00) Sarajewo, Skopje, Warszawa, Zagrzeb',
	'timezone_Africa/Lagos': '(UTC+01:00) Afryka Środkowozachodnia',
	'timezone_Asia/Amman': '(UTC+02:00) Amman',
	'timezone_Europe/Bucharest': '(UTC+02:00) Ateny, Bukareszt',
	'timezone_Asia/Beirut': '(UTC+02:00) Bejrut',
	'timezone_Africa/Cairo': '(UTC+02:00) Kair',
	'timezone_Europe/Chisinau': '(UTC+02:00) Kiszyniów',
	'timezone_Asia/Damascus': '(UTC+02:00) Damaszek',
	'timezone_Asia/Hebron': '(UTC+02:00) Gaza, Hebron',
	'timezone_Africa/Johannesburg': '(UTC+02:00) Harare, Pretoria',
	'timezone_Europe/Kiev': '(UTC+02:00) Helsinki, Kijów, Ryga, Sofia, Tallinn, Wilno',
	'timezone_Asia/Jerusalem': '(UTC+02:00) Jerozolima',
	'timezone_Europe/Kaliningrad': '(UTC+02:00) Kaliningrad',
	'timezone_Africa/Khartoum': '(UTC+02:00) Chartum',
	'timezone_Africa/Tripoli': '(UTC+02:00) Trypolis',
	'timezone_Africa/Windhoek': '(UTC+02:00) Windhuk',
	'timezone_Asia/Baghdad': '(UTC+03:00) Bagdad',
	'timezone_Europe/Istanbul': '(UTC+03:00) Stambuł',
	'timezone_Asia/Riyadh': '(UTC+03:00) Kuwejt, Rijad',
	'timezone_Europe/Minsk': '(UTC+03:00) Mińsk',
	'timezone_Europe/Moscow': '(UTC+03:00) Moskwa, St. Petersburg',
	'timezone_Africa/Nairobi': '(UTC+03:00) Nairobi',
	'timezone_Asia/Tehran': '(UTC+03:30) Teheran',
	'timezone_Asia/Dubai': '(UTC+04:00) Abu Zabi, Maskat',
	'timezone_Europe/Astrakhan': '(UTC+04:00) Astrachań, Uljanowsk',
	'timezone_Asia/Baku': '(UTC+04:00) Baku',
	'timezone_Europe/Samara': '(UTC+04:00) Iżewsk, Samara',
	'timezone_Indian/Mauritius': '(UTC+04:00) Port Louis',
	'timezone_Europe/Saratov': '(UTC+04:00) Saratow',
	'timezone_Asia/Tbilisi': '(UTC+04:00) Tbilisi',
	'timezone_Europe/Volgograd': '(UTC+04:00) Wołgograd',
	'timezone_Asia/Yerevan': '(UTC+04:00) Erywań',
	'timezone_Asia/Kabul': '(UTC+04:30) Kabul',
	'timezone_Asia/Tashkent': '(UTC+05:00) Aszchabad, Taszkient',
	'timezone_Asia/Yekaterinburg': '(UTC+05:00) Jekaterynburg',
	'timezone_Asia/Karachi': '(UTC+05:00) Islamabad, Karaczi',
	'timezone_Asia/Qyzylorda': '(UTC+05:00) Kyzylorda',
	'timezone_Asia/Kolkata': '(UTC+05:30) Cennaj, Kalkuta, Mumbai, Nowe Delhi',
	'timezone_Asia/Colombo': '(UTC+05:30) Sri Dźajawardanapura Kotte',
	'timezone_Asia/Kathmandu': '(UTC+05:45) Katmandu',
	'timezone_Asia/Almaty': '(UTC+06:00) Astana',
	'timezone_Asia/Dhaka': '(UTC+06:00) Dakka',
	'timezone_Asia/Omsk': '(UTC+06:00) Omsk',
	'timezone_Asia/Yangon': '(UTC+06:30) Rangun',
	'timezone_Asia/Bangkok': '(UTC+07:00) Bangkok, Hanoi, Dżakarta',
	'timezone_Asia/Barnaul': '(UTC+07:00) Barnaul, Gorno-Altaysk',
	'timezone_Asia/Hovd': '(UTC+07:00) Hovd',
	'timezone_Asia/Krasnoyarsk': '(UTC+07:00) Krasnojarsk',
	'timezone_Asia/Novosibirsk': '(UTC+07:00) Nowosybirsk',
	'timezone_Asia/Tomsk': '(UTC+07:00) Tomsk',
	'timezone_Asia/Shanghai': '(UTC+08:00) Pekin, Chongqing, Hong Kong, Urumqi',
	'timezone_Asia/Irkutsk': '(UTC+08:00) Irkuck',
	'timezone_Asia/Singapore': '(UTC+08:00) Kuala Lumpur, Singapur',
	'timezone_Australia/Perth': '(UTC+08:00) Perth',
	'timezone_Asia/Taipei': '(UTC+08:00) Tajpej',
	'timezone_Asia/Ulaanbaatar': '(UTC+08:00) Ułan Bator',
	'timezone_Australia/Eucla': '(UTC+08:45) Eucla',
	'timezone_Asia/Chita': '(UTC+09:00) Chita',
	'timezone_Asia/Tokyo': '(UTC+09:00) Osaka, Sapporo, Tokio',
	'timezone_Asia/Pyongyang': '(UTC+09:00) Pjongjang',
	'timezone_Asia/Seoul': '(UTC+09:00) Seul',
	'timezone_Asia/Yakutsk': '(UTC+09:00) Jakuck',
	'timezone_Australia/Adelaide': '(UTC+09:30) Adelaide',
	'timezone_Australia/Darwin': '(UTC+09:30) Darwin',
	'timezone_Australia/Brisbane': '(UTC+10:00) Brisbane',
	'timezone_Australia/Sydney': '(UTC+10:00) Canberra, Melbourne, Sydney',
	'timezone_Pacific/Port_Moresby': '(UTC+10:00) Guam, Port Moresby',
	'timezone_Australia/Hobart': '(UTC+10:00) Hobart',
	'timezone_Asia/Vladivostok': '(UTC+10:00) Władywostok',
	'timezone_Australia/Lord_Howe': '(UTC+10:30) Lord Howe',
	'timezone_Pacific/Bougainville': '(UTC+11:00) Wyspa Bougainville',
	'timezone_Asia/Srednekolymsk': '(UTC+11:00) Czokurdach',
	'timezone_Asia/Magadan': '(UTC+11:00) Magadan',
	'timezone_Pacific/Norfolk': '(UTC+11:00) Wyspa Norfolk',
	'timezone_Asia/Sakhalin': '(UTC+11:00) Sachalin',
	'timezone_Pacific/Guadalcanal': '(UTC+11:00) Wyspy Salomona, Nowa Kaledonia',
	'timezone_Asia/Kamchatka': '(UTC+12:00) Anadyr, Pietropawłowsk Kamczacki',
	'timezone_Pacific/Auckland': '(UTC+12:00) Auckland, Wellington',
	'timezone_Etc/GMT-12': '(UTC+12:00) Uniwersalny czas koordynowany+12',
	'timezone_Pacific/Fiji': '(UTC+12:00) Fidżi',
	'timezone_Pacific/Chatham': '(UTC+12:45) Wyspy Chatham',
	'timezone_Etc/GMT-13': '(UTC+13:00) Uniwersalny czas koordynowany+13',
	'timezone_Pacific/Tongatapu': "(UTC+13:00) Nuku'alofa",
	'timezone_Pacific/Apia': '(UTC+13:00) Samoa',
	'timezone_Pacific/Kiritimati': '(UTC+14:00) Kiritimati',
	// ---------------------- //

	// ------ Rich text tooltips ------ //
	'ql-header': 'Styl', // Style
	'ql-bold': 'Pogrubienie', // Bold
	'ql-italic': 'Kursywa', // Italic
	'ql-underline': 'Podkreślenie', // Underline
	'ql-strike': 'Przekreślenie', // Strikethrough
	'ql-blockquote': 'Cytat blokowy', // Blockquote
	'ql-list-ordered': 'Lista numerowana', // Numbered list
	'ql-list-bullet': 'Lista punktowana', // Bullet list
	'ql-indent--1': 'Zmniejsz wcięcie', // Decrease indent
	'ql-indent-+1': 'Zwiększ wcięcie', // Increase indent
	'ql-script-sub': 'Indeks dolny', // Subscript ### dolny
	'ql-script-super': 'Indeks górny', // Superscript
	'ql-color': 'Kolor tekstu', // Text color
	'ql-background': 'Kolor tła', // Background color
	'ql-size': 'Rozmiar tekstu', // Text size
	'ql-font': 'Czcionka tekstu', // Text font
	'ql-align': 'Wyrównanie tekstu', // Text align
	'ql-image': 'Obraz', // Image
	'ql-clean': 'Wyczyść formatowanie', // Clear formatting
	// ---------------------- //
};
