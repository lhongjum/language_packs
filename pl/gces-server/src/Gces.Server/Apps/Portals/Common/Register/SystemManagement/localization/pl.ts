export const portalPL: LanguageKeyValueMap = {
	// System Management
	'Export!title': 'Eksport', // Export
	'Export!description': 'Eksport dokumentów', // Export Documents
	'Import!title': 'Dodać', // Import
	'Import!description': 'Import dokumentów', // Import Documents
	'AuditLogsView!title': 'Logi audytu', // View Audit Logs
	'AuditLogsView!description': 'Logi audytu', // View Audit Logs
	'documents': 'Dokumenty', // documents
	documentType: 'Typ', // Type
	selectFiles: 'Wybierz plik...', // Select File...
	onlyShowSelected: 'Pokaż tylko wybrane dokumenty', // Only Show Selected Documents
	emptyDocTip: 'Brak dokumentu', // No document
	emptySetTip: 'Brak ustawień systemu', // No system settings
	emptyTemplateTip: 'Brak szablonów harmonogramów', // No schedule templates
	emptyFileTip: 'Nie załadowano pliku', // No uploaded file
	emptyCustomThemeTip: 'Brak niestandardowego motywu', // No Custom Theme
	exportSuccess: 'Eksport powiódł się', // Export succeeded
	exportFailed: 'An error occurred while exporting $t({{type}}!title) ({{name}})[{{id}}]',
	uploadingInfo: 'Ładowanie pliku {{file}}', // Uploading file {{file}}
	uploadedInfo: 'Ładowanie pliku {{file}} zakończone powodzeniem', // file {{file}} uploaded successfully
	importingSettingInfo: 'Importowanie ustawień systemu...', // Importing System Settings...
	uploadErrorTitle: 'Ładowaniu pliku nie powiodło się', // Upload file failed
	importErrorTitle: 'Importowanie pliku nie powiodło się', // Import file failed
	action: 'Akcja', // Action
	ImportAdd: 'Dodano', // Added
	ImportReplace: 'Zastąpiono', // Replaced
	ImportUpdate: 'Zaktualizowano', // Updated
	ImportPluginNonExist: 'Zignorowano', // Ignored
	ImportIgnore: 'Zignorowano', // Ignored
	ImportUpgrade: 'Ulepszono', // Upgraded
	ImportCancel: 'Anulowano', // Cancel
	ImportStatus: 'Status',
	ImportSuccess: 'Sukces', // Succeed
	ImportFail: 'Niepowodzenie', // Failed
	ErrorInfo: 'Informacja o błędzie', // Error Info
	ImportedInfo: '{{count1}} dokumentów zostało pomyślnie zaimportowanych. {{count2}} dokumentów nie udało się zaimportować', // {{count1}} document(s) were/was successfully imported. {{count2}} document(s) were/was failed to be imported.
	EstName: 'Nazwa szablonu', // Template Name
	EstExportType: 'Typ', // Type
	EstDescriptionTitle: 'Opis szablonu', // Template Description
	'importError!100001': 'Plik, który chcesz załadować jest pusty', // The upload file is empty
	'importError!100002': 'Nie można odnaleźć pliku manifest w archiwum ładowania', // Manifest file cannot be found in the upload archive
	'importError!100003': 'Plik, który chcesz załadować jest uszkodzony', // The upload file has broken
	'importError!100004': 'Zawartość pliku manifest jest nieprawidłowa', // The content of manifest file is invalid
	'importError!100005': 'Plik manifest uszkodził się', // The manifest file has broken
	'importError!100006': 'Nie można odnaleźć załączanego pliku w archiwum ładowania', // Attachment file cannot be found in the upload archive
	'importError!100007': 'Niewłaściwy typ pliku. Załaduj poprawny plik zip', // Invalid file type, Please upload a valid zip file
	'importError!100008': 'Ten wbudowany dokument nie może zostać znaleziony', // This builtIn document cannot be found
	'importError!100009': 'Nieznany błąd ładowania: {{message}}', // Unknown upload error: {{message}}
	'importError!100010': 'Nie można odnaleźć SessionId', // SessionId cannot be found
	'importError!100020': 'Nie można odnaleźć kontekstu sesji', // Session context cannot be found
	'importError!100030': 'Trwa importowanie', // The import task is running
	'importError!100040': 'Nie udało się zaimportować dokumentu referencyjnego', // Reference document import failed
	'importError!100041': 'Nie udało się zaimportować dokumentu referencyjnego {{title}}. Ten dokument może być uszkodzony.', // Failed to import circular reference document {{title}}, this document may be corrupted.
	'importError!100050': 'Nie znaleziono licencji dla dokumentów', // The license for the corresponding document is not found
	'importError!100060': 'The version({{newVersion}}) is lower than or equal to current({{existingVersion}}).',
	'importError!100061': 'Nieprawidłowa wersja ({{version}}).', // Invalid version({{version}}).
	'importError!100090': 'Nieznany błąd importu: {{message}}', // Unknown import error: {{message}}

	'systemSetting!title': 'Nazwa elementu', // Item Name
	'systemSetting!description': 'Wartość', // Value
	'sys-conf-rs!title': 'Ustawienia WynReports', // WynReports Settings
	'sys-conf-ui!title': 'Interfejs użytkownika', // UI Settings
	'sys-conf-es!title': 'Wiadomości email', // Email Settings
	'sys-conf-wq!title': 'Kolejka Usługi Raportowej', // Worker queue settings
	'sys-conf-ss!title': 'Harmonogramy', // Schedule Settings
	'sys-secprovider!title': 'Dostawcy zabezpieczeń', // Security Providers
	'sys-cat!title': 'Kategorie', // Categories
	'sys-conf-ddt!title': 'Domyślny motyw dokumentu', // Default Document Theme
	'sys-role!title': 'Role', // Roles
	'sys-secset!title': 'Zabezpieczenia', // Security Settings
	'exportSystemSettings': 'Eksportuj ustawienia systemu', // Export System Settings

	'$$system-settings!title': 'Ustawienia systemu', // System Settings
	'$$documents!title': 'Dokumenty', // Documents
	'sys-ctheme!title': 'Własne motywy', // Custom Themes
	'sys-st!title': 'Szablony planowania', // Schedule Templates
	'sys-et!title': 'Szablony ustawień eksportu', // Export Templates

	'0-title!title': 'Tytuł', // Title
	'0-theme!title': 'Motyw', // Theme
	'0-displayEmptyTags!title': 'Wyświetl puste kategorie systemowe', // Display Empty System Categories
	'0-allowCustomSchedule!title': 'Zezwól użytkownikowi na tworzenie własnych planowań', // Allow User to Create Custom Schedule ### do ustalenia
	'0-loginPageSetting!title': 'Ustawienia strony logowania', // Login Page Settings
	'0-allowEditPersonalInformation!title': 'Zezwól użytkownikowi na edycję informacji osobistych', // Allow User To Edit Personal Information
	'0-systemIcon!title': 'Ikony systemu', // System Icons
	'0-WCAGCompatibility!title': 'Zgodność z WCAG', // WCAG Compatibility
	'0-autoDismissNotifications!title': 'Automatyczne Odrzucanie Powiadomień', // Auto Dismiss Notifications
	'0-durationOfNotifications!title': 'Czas trwania powiadomień', // Duration of Notifications(s)
	'systemIcon!description': 'Załączaj duże i małe logo oraz ikonę etykiety', // Include large logo and small logo and tab icon
	'loginPageSetting!description': 'Załączaj logo loginu i obrazy strony logowania, a także inne pliki i ustawienia', // Include login logo images and login page images and other files and settings

	'sys-conf-ui!name': 'Interfejs użytkownika', // ui setting
	'sys-conf-rs!name': 'Ustawienia WynReports', // WynReports Settings
	'sys-conf-es!name': 'Wiadomości email', // Email Settings
	'sys-conf-wq!name': 'Kolejka Usługi Raportowej', // Worker queue settings
	'sys-conf-ss!name': 'Planowanie', // Schedule Settings
	'sys-secprovider!name': 'Dostawca zabezpieczeń', // Security Provider
	'sys-cat!name': 'Kategoria', // Category
	'sys-conf-ddt!name': 'Domyślny motyw dokumentu', // Default Document Theme
	'sys-role!name': 'Rola', // Role
	'sys-secset!name': 'Zabezpieczenia', // Security Setting
	'sys-ctheme!name': 'Własny motyw', // Custom Theme
	'sys-st!name': 'Szablon planowania', // Schedule Template
	'sys-et!name': 'Szablon eksportu', // export template

	'importError!300001': 'Nie można znaleźć odpowiedniego pluginu', // Cannot find the corresponding plugin
	'importError!300002': 'Nie można znaleźć odpowiedniej gupy ustawień', // Cannot find the corresponding setting group
	'importError!200001': 'Podczas importowania ustawień systemu wystąpił nieznany błąd: {{message}}', // An unknown error occurred while importing system settings: {{message}}
	'importError!200002': '$t({{type}}!name) jest nieprawidłowe', // The $t({{type}}!name) is invalid
	'importError!200003': '$t({{type}}!name) już istnieje', // The $t({{type}}!name) already exists
	'sys-conf-ddt!1': 'Nie znaleziono powiązanych motywów', // No related themes found
	'sys-conf-ddt!2': 'Domyślny motyw dokumentu jest pusty', // The default document theme is empty
	'sys-role!1': 'Podczas dostępu do API roli wystąpił błąd: {{message}}', // Access to role API response an error: {{message}}
	'sys-secprovider!1': 'securityProviders.config nie może zostać znalezione w archiwum ładowania', // securityProviders.config cannot be found in the upload archive
	'sys-secprovider!2': 'Podczas dostępu do API dostawcy zabezpieczeń wystąpił błąd: {{message}}', // Access to security provider API response an error: {{message}}
	'sys-secprovider!3': 'Nie można odnaleźć następującego katalogu portalu: {{path}}', // Cannot find the specified portal directory: {{path}}
	'sys-conf-ui!1': 'Nie można odnaleźć obrazów loginu w archiwum ładowania', // login images cannot be found in the upload archive
	'importError!100011': 'Załącznik o tej samej nazwie już istnieje w archiwum zip', // An attachment with the same name exists in zip archive
	'sys-ctheme!1': 'Nie można odnaleźć pliku manifest z własnym motywem', // The custom theme manifest file cannot be found
	'sys-ctheme!2': 'Nie można odnaleźć zrzutu ekranu', // The snapshot image cannot be found
	'sys-ctheme!3': 'Nie można odnaleźć zmiennych własnego motywu', // The custom theme variables cannot be found
	'sys-ctheme!4': 'Plik CSS {{file}} jest pusty', // The css file {{file}} is empty
	'sys-ctheme!5': '$t(ctError!100012)',
	'sys-st!1': 'Nie można znaleźć szablonu eksportu używanego przez szablon harmonogramu', // The export template used by the schedule template cannot be found
	'sys-et!1': 'Dostęp do eksportowania odpowiedzi interfejsu API szablonu, błąd: {{message}}', // Access to export template API response an error: {{message}}
	'ctVersion': 'Wersja', // Version
	refreshToApplyTheme: '(Uwaga: odśwież stronę, aby zatwierdzić motyw)', // (notice: Refresh page to apply the theme)
	refreshToApplyIcon: '(Uwaga: odśwież stronę, aby zatwierdzić ikony)', // notice: Refresh page to apply the icons

	// #region auditLogScenarios
	naNotTurnOnAuditLogs: 'Audyt nie jest włączony. Włącz audyt, aby wyświetlić logi na tej stronie', // Auditing is not turned on. Please turn on auditing to see logs on this page
	naServerIsUnavailable: 'Serwer jest niedostępny.', // Server is unavailable.
	naFetchAuditLogsFailed: 'Nie udało się pozyskać logów audytu.', // Fetch audit logs failed.

	auditLogRefresh: 'Odśwież', // Refresh

	auditLogFilterActionType: 'Typ wydarzenia', // Event Type
	auditLogFilterDocumentType: 'Typ obiektu', // Object Type
	auditLogFilterTimeRange: 'Zakres czasu', // Time Range
	auditLogFilterTimeFrom: 'Od', // From
	auditLogFilterTimeTo: 'Do', // To

	auditLogTimeRangeLastDay: 'Ostatni dzień', // Last Day
	auditLogTimeRangeLastWeek: 'Ostatni tydzień', // Last Week
	auditLogTimeRangeCustomize: 'Dostosuj', // Customize

	auditLog_ViewMode_table: 'Raport', // Report
	auditLog_ViewMode_dashboard: 'Dashboard',

	auditLog_RequestDevice_Desktop: 'Komputer', // Desktop
	auditLog_RequestDevice_Mobile: 'Urządzenie mobilne', // Mobile

	auditLog_ActionType_All: 'Wszystko', // All
	auditLog_ActionType_Create: 'Utwórz', // Create
	auditLog_ActionType_Update: 'Zaktualizuj', // Update
	auditLog_ActionType_Delete: 'Usuń', // Delete
	auditLog_ActionType_Rename: 'Zmień nazwę', // Rename
	auditLog_ActionType_ChangeThumbnail: 'Zmień miniaturę', // Change Thumbnail
	auditLog_ActionType_Refresh: 'Odśwież', // Refresh
	auditLog_ActionType_Cleanup: 'Sprzątnij', // Cleanup
	auditLog_ActionType_Preview: 'Podgląd', // Preview
	auditLog_ActionType_Copy: 'Kopiuj', // Copy
	auditLog_ActionType_Download: 'Pobierz dokument', // Download Document
	auditLog_ActionType_Upload: 'Załaduj dokument', // Upload Document
	auditLog_ActionType_DocumentExport: 'Eksportuj dokument', // Export Document
	auditLog_ActionType_DocumentImport: 'Importuj dokument', // Import Document
	auditLog_ActionType_Export: 'Eksportuj raport', // Export Report
	auditLog_ActionType_CreateTask: 'Utwórz zadanie', // Create Task
	auditLog_ActionType_UpdateTask: 'Zaktualizuj zadanie', // Update Task
	auditLog_ActionType_DeleteTask: 'Usuń zadanie', // Delete Task
	auditLog_ActionType_RunTask: 'Uruchom zadanie', // Run Task
	auditLog_ActionType_ChangePermission: 'Zmień uprawnienie', // Change Permission
	auditLog_ActionType_SystemSettingsImport: 'Załaduj ustawienia systemu', // Import System Settings
	auditLog_ActionType_SystemSettingsExport: 'Eksportuj ustawienia systemu', // Export System Settings

	auditLog_DocumentType_All: 'Wszystko', // All
	auditLog_DocumentType_Datasource: 'Źródło danych', // Data source
	auditLog_DocumentType_SemanticModel: 'Model semantyczny', // Semantic Model
	auditLog_DocumentType_DataModel: 'Model danych', // Data Model
	auditLog_DocumentType_Dataset: 'Zestaw danych', // Dataset
	auditLog_DocumentType_Theme: 'Motyw', // Theme
	auditLog_DocumentType_Jpeg: 'JPEG',
	auditLog_DocumentType_Bmp: 'BMP',
	auditLog_DocumentType_Gif: 'GIF',
	auditLog_DocumentType_Png: 'PNG',
	auditLog_DocumentType_Svg: 'Svg',
	auditLog_DocumentType_TTF: 'TTF',
	auditLog_DocumentType_OTF: 'OTF',
	auditLog_DocumentType_WOFF: 'WOFF',
	auditLog_DocumentType_WOFF2: 'WOFF2',
	auditLog_DocumentType_EOT: 'EOT',
	auditLog_DocumentType_WEBFONT: 'WEBFONT',
	auditLog_DocumentType_MapData: 'Mapy', // Map Data
	auditLog_DocumentType_Dashboard: 'Dashboard',
	auditLog_DocumentType_Report: 'Raport', // Report
	auditLog_DocumentType_ReportTemplate: 'Szablon raportu', // Report Template
	auditLog_DocumentType_FloorPlan: 'Plan Budynku', // Floor Plan
	auditLog_DocumentType_MasterReport: 'Raport główny', // Master Report
	auditLog_DocumentType_WebPage: 'Strona internetowa', // Web Page
	auditLog_DocumentType_CustomVisualization: 'Wizualizacja', // Visualization
	'auditLog_DocumentType_sys-conf-ui': 'Interfejsu użytkownika', // UI Settings
	'auditLog_DocumentType_sys-conf-rs': 'Ustawienia WynReports', // WynReports Settings
	'auditLog_DocumentType_sys-conf-es': 'Wiadomości mailowe', // Email Settings
	'auditLog_DocumentType_sys-conf-wq': 'Kolejka Usługi Raportowej', // Worker queue settings
	'auditLog_DocumentType_sys-conf-ss': 'Harmonogramy', // Schedule Settings
	'auditLog_DocumentType_sys-secprovider': 'Dostawcy zabezpieczeń', // Security Providers
	'auditLog_DocumentType_sys-cat': 'Kategorie', // Categories
	'auditLog_DocumentType_sys-conf-ddt': 'Domyślny motyw dokumentu', // Default Document Theme
	'auditLog_DocumentType_sys-role': 'Role', // Roles
	'auditLog_DocumentType_sys-secset': 'Zabezpieczenia', // Security Settings
	'auditLog_DocumentType_sys-st': 'Szablony planowania', // Schedule Templates
	'auditLog_DocumentType_sys-ctheme': 'Niestandardowy motyw', // Custom Theme
	'auditLog_DocumentType_sys-et': 'Export Templates', // Export Templates
	'auditLog_DocumentType_wbp': 'Strona internetowa', // Web Page
	auditLog_DocumentType_ipf: 'Formularz wejściowy', // Input Form

	auditLog_DbField_UserName: 'Użytkownik', // User
	auditLog_DbField_Email: 'Email',
	auditLog_DbField_UTCTime: 'Data/godzina', // Date Time
	auditLog_DbField_UserContext: 'DanePreferencjiUżytkownika', // UserContext
	auditLog_DbField_Info_ActionType: 'Typ wydarzenia', // Event Type/
	auditLog_DbField_Info_DocumentName: 'Nazwa obiektu', // Object Name
	auditLog_DbField_Info_DocumentType: 'Typ obiektu', // Object Type
	auditLog_DbField_Info_DocumentVersion: 'Wersja dokumentu', // Document Version
	auditLog_DbField_Info_SemanticModelName: 'Przywoływana nazwa modelu semantycznego', // Referenced Semantic Model Name
	auditLog_DbField_Info_SemanticModelVersion: 'Przywoływana wersja modelu semantycznego', // Referenced Semantic Model Version
	auditLog_DbField_Info_Parameters: 'Parametery', // Parameters
	auditLog_DbField_Info_RequestDevice: 'Urządzenie zapytania', // Request Device
	auditLog_DbField_Info_RequestSource: 'Źrodło zapytania', // Request Source
	auditLog_DbField_Info_ServerIP: 'IP serwera', // Server IP
	auditLog_DbField_Info_ClientIP: 'IP klienta', // Client IP
	auditLog_DbField_Info_DatasetQuery: 'Zapytanie o zestaw danych', // Dataset Query
	auditLog_DbField_Info_Link: 'Link', // Link
	auditLog_DbField_Info_ResultURL: 'Result URL',
	auditLog_DbField_Info_Description: 'Opis', // Description

	auditLog_Table_Details_Title: 'Informacje szczegółowe', // Detail Information
	auditLog_Table_Details_Empty: '[Puste]', // [Empty]
	auditLog_Table_ToolTip_Details: 'Więcej', // More
	auditLog_Table_ToolTip_PreviousPage: 'Poprzednia strona', // Previous Page
	auditLog_Table_ToolTip_NextPage: 'Następna strona', // Next Page

	auditLogScenarioTitle1: 'Liczba aktywnych użytkowników', // Active User Count
	auditLogScenarioTitle2: 'TOP 10 najaktywniejszych użytkowników', // Most Frequently Users Top 10
	auditLogScenarioTitle3: 'Platforma', // Operating Platform
	auditLogScenarioTitle4: 'Rozkład typów dokumentu', // Document Type Proportion
	auditLogScenarioTitle5: 'TOP 10 najpopularniejszych dokumentów', // Most Frequently Documents Top 10
	auditLogScenarioTitle6: 'Typy działań na dokumencie', // Document Actions Type
	auditLogScenarioTitle7: 'Działania na dokumencie', // Documents Actions On Time
	auditLogScenarioNoData: 'Nie znaleziono danych', // No Data Found
	requestDevice_Desktop: 'Komputer', // Desktop
	requestDevice_Mobile: 'Urządzenie mobilne', // Mobile

	Date_Month_Jan: 'Sty', // Jan
	Date_Month_Feb: 'Lut', // Feb
	Date_Month_Mar: 'Mar',
	Date_Month_Apr: 'Kwi', // Apr
	Date_Month_May: 'Maj', // May
	Date_Month_Jun: 'Cze', // Jun
	Date_Month_Jul: 'Lip', // Jul
	Date_Month_Aug: 'Sie', // Aug
	Date_Month_Sep: 'Wrz', // Sep
	Date_Month_Oct: 'Paź', // Oct
	Date_Month_Nov: 'Lis', // Nov
	Date_Month_Dec: 'Gru', // Dec
	auditLogOther: 'Inny', // Other
	// #endregion

	// custom Theme
	'CustomTheme!title': 'Własny motyw', // Custom Theme
	'CustomTheme!description': 'Zarządzenie własnymi motywami', // Custom Theme Management
	selectTheme: 'Załaduj', // Upload Theme
	themeInfo: 'Załadowano {{file}}', // {{file}} has uploaded
	source: 'Źrodło', // Source
	displayName: 'Nazwa', // Name
	'displayName!tips': 'Nazwa motywu nie może zaczynać się od liczbby oraz nie może zawierać znaków: :/?#[]@!$&\'()*+,;=', // The custom theme name cannot start with a number, and must not contain the following special characters: :/?#[]@!$&\'()*+,;=
	submit: 'Zatwierdź', // Submit
	submitErrorTitle: 'Nie udało się zatwierdzić motywu', // Submit theme failed
	ctTitle: 'Nazwa', // Name
	ctCreatedTime: 'Czas utowrzenia', // Created Time
	ctAction: 'Działanie', // Action
	ctDelete: 'Usuń', // Delete
	ctThemeList: 'Motywy', // Themes
	ctDeleteTheme: 'Usuń motyw', // Delete Theme
	ctDeleteThemeConfirmMessage: "Czy chcesz usunąć motyw '{{title}}'?", // Do you want to delete theme '{{title}}'?
	'ctDelete!btn': 'Usuń', // Delete
	Cancel: 'Anuluj', // Cancel
	deleteErrorTitle: 'Nie udało się usunąć motywu', // Delete theme failed
	'ctError!100001': 'ID motywu jest puste', // Theme id is empty
	'ctError!100002': 'Nie można odnaleźć motywu {{themeId}}', // The theme {{themeId}} cannot be found
	'ctError!100003': 'Nieznany błąd serwera: {{message}}', // Unknown server error: {{message}}
	'ctError!100004': 'Zawartość do załadowania jest pusta', // Upload content is empty
	'ctError!100005': 'Nie można odnaleźć pliku manifest w archiwum', // The manifest file in archive cannot be found
	'ctError!100006': 'Nazwa motywu jest pusta', // The theme name is empty
	'ctError!100007': 'Nie można odnaleźć SessionId', // SessionId cannot be found
	'ctError!100008': 'Nie można odnaleźć kontekstu sesji', // Session context cannot be found
	'ctError!100009': 'Motyw {{displayName}} jest zduplikowany', // The theme name {{displayName}} is duplicated
	'ctError!100010': 'Archiwum motywu zostało zatwierdzone', // The theme archive has been submitted
	'ctError!100011': 'Motyw {{displayName}} został zastosowany w $t(portal!title) i nie może zostać usunięty.', // The theme {{displayName}} has been applied in $t(portal!title), cannot be deleted
	'ctError!100012': 'Język edycji motywu nie pasuje do systemu', // The theme language edition does not match the system
	submitSuccess: 'Motyw został załadowany', // Custom theme submitted successfully
	themeDetail: 'Szczegóły motywu', // Theme Details
	Close: 'Zamknij', // Close
	themeBasicInfo: 'Podstawowe informacje', // Basic Information
	themeVariables: 'Zmienne kolorów', // Color Variables
	accent1: 'Akcent1', // Accent1
	accent2: 'Akcent2', // Accent2
	content_bg: 'Tło treści', // Content BG
	panels_bg: 'Panele w tle', // Panels BG
	content_text: 'Treść tekstu', // Content Text
	text_contrast: 'Kontrast tekstu', // Text Contrast
	nav_bg: 'Tło nawigacji', // Nav BG
	nav_text: 'Tekst nawigacji', // Nav Text
	portal_header_bg: 'Tło nagłówka portalu', // Portal Header BG
	portal_header_text: 'Tekst nagłówka portalu', // Portal Header Text
	toolbar_bg: 'Tło paska narzędzi', // Toolbar BG
	toolbar_text: 'Tekst paska narzędzi', // Toolbar Text
	ctStyle: 'Styl', // Style
	darkTheme: 'Ciemny motyw', // Dark Theme
	lightTheme: 'Jasny motyw', // Light Theme
	outOfDate: 'Motyw jest nieaktualny', // The theme is out of date
	updateOutOfDate: 'Aktualizacja nieaktualna', // Update out of date
	updateIfExist: 'Zaktualizuj, jeśli istnieje', // Update if it exists
	nonUpdateIfExist: 'Dodaj tylko', // Add only
	ctUpdating: 'Aktualizuję motyw', // Updating theme
	ctUpdateSuccess: 'Aktualizacja powiodła się ', // Update succeed
	ctUpdateFail: 'Aktualizacja nieudana', // Update failed
	ctDownload: 'Pobierz plik konfiguracyjny', // Download config file

	// Tooltip
	createBuiltInDocumentTooltipText: 'Dziennik kontroli jest włączony. Kliknij opcję Utwórz, aby wygenerować wbudowane źródło danych i zestawy danych dziennika kontroli', // Audit log is enabled. Click the Create option to generate built in Audit log datasource and datasets
	createBuiltInDocumentTooltipButton: 'Utwórz ...', // Create ...

	// schedule task
	'scheduleTaskManager!title': 'Zarządzanie zadaniami', // Tasks Management
	'scheduleTaskManager!description': 'Zarządzanie zadaniami', // Tasks Management
	taskDocName: 'Nazwa dokumentu', // Document Name
	taskDetail: 'Nazwa zadania', // Task Name
	taskType: 'Typ zadania', // Task Type
	taskStatus: 'Status zadania', // Task Status
	executeType: 'Wykonaj typ', // Execute Type
	taskStartTime: 'Czas rozpoczęcia zadania', // Task Start Time
	taskExecutionManual: 'Ręcznie', // Manual
	taskExecutionOneTime: 'Jeden raz', // One-Time
	taskExecutionScheduled: 'Zaplanowany', // Scheduled
	taskTypeDataSourceExtract: 'Wyciąg ze źródła danych', // DataSource Extract
	taskTypeDatasetRefresh: 'Odświeżanie zbioru danych', // Dataset Refresh
	taskTypeDatasetCleanup: 'Czyszczenie zbioru danych', // Dataset Cleanup
	taskTypeRptExport: 'Eksport raportu', // Report Export
	taskTypeDashboardExport: 'Eksport pulpitu nawigacyjnego', // Dashboard Export
	taskTypeDataModelRefresh: 'Odświeżanie modelu w pamięci podręcznej', // Cached Model Refresh
	taskEnableStatus: 'Włącz', // Enable
	taskDisableStatus: 'Wyłącz', // Disable
	taskEnabledStatus: 'Włączony', // Enabled
	taskDisabledStatus: 'Wyłączony', // Disabled
	taskDelete: 'Usuń', // Delete
	taskToolbarFilter: 'Filtr', // Filter
	taskShowCheckBox: 'Pokaż pola wyboru', // Show Checkboxes
	taskHideCheckBox: 'Ukryj pola wyboru', // Hide Checkboxes
	taskExpired: 'Zadanie wygasłe', // Expired Task
	taskUpdateError: 'Aktualizacja statusu zadania nie powiodła się', // Update Task Status Failed
	taskRemoveError: 'Nie udało się usunąć zadania', // Delete Task Failed
	taskButtonIsNotAvailable: 'Brak wybranych zadań lub wybrane zadania zawierają wygasłe zadania.', // No selected tasks or the selected tasks contain expired task.
	taskDeletePromptDialogAllTitle: 'Usuń zadania', // Delete Tasks
	taskDeletePromptDialogAllContent: 'Czy chcesz usunąć wszystkie wybrane zadania?', // Do you want delete all of the selected tasks?
	taskDeletePromptDialogOneTitle: 'Usuń zadanie', // Delete Task
	taskDeletePromptDialogOneContent: 'Czy chcesz usunąć bieżące zadanie?', // Do you want delete the current task?
	tasksNotFound: 'Nie znaleziono zadania', // No task found

	err_30025: 'Nie udało się zaktualizować zadania w pamięci bazy danych i trwałości wykonania: podane zadanie jest nieaktualne.', // Failed to update task in DB storage and execution persistence: provided task is outdated.
	err_30026: 'Nie udało się usunąć zadania "{{taskId}}", szczegóły błędu: {{innerMessage}}.', // Failed to remove task "{{taskId}}", error detail:{{innerMessage}}.

	// Schedule Template Document Type
	datasource: 'Źródło danych', // Data Source
	dataset: 'Zestaw danych', // Dataset
	dashboard: 'Pulpit nawigacyjny', // Dashboard
	report: 'Raport', // Report
};
