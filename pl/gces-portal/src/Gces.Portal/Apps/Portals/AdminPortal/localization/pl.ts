export const portalPL: LanguageKeyValueMap = {

	initializationError: 'Błąd przy rozpoczęciu', // Initialization Error
	unableLoadRequiredData: 'Nie można załadować wymaganych danych', // Unable to load required data
	connectionError: 'Błąd połączenia', // Connection Error
	unableSaveChanges: 'Nie można zapisać zmian', // Unable to save changes
	saveSettingsFailed: 'Zapisywanie ustawień nie powiodło się', // Save settings failed
	PortalUriRequiedForSmtpSettings: 'Przed zapisaniem ustawień e-mail upewnij się, że „Portal URI” w ustawieniach interfejsu użytkownika jest dostępny.', // Please confirm that the "Portal URI" in "UI Settings" is already provided before you save the email settings.
	WorkerJobMaxExecTimeIsInvalid: 'Maksymalny czas wykonania powinien wynosić pomiędzy 0(s) i 2147481(s).', // Maximal exec time should be between 0(s) and 2147481(s).
	WorkerTaskMaxCountIsInvalid: 'Task per worker should be between 0 and 100.',

	// Common
	Save: 'Zapisz', // Save
	Ok: 'OK', // OK
	Close: 'Zamknij', // Close
	Cancel: 'Anuluj', // Cancel
	Reset: 'Resetuj', // Reset
	Upload: 'Załaduj', // Upload
	Update: 'Zaktualizuj', // Update
	Delete: 'Usuń', // Delete
	SaveChanges: 'Zapisz zmiany', // Save Changes
	Dismiss: 'Odrzuć', // Dismiss
	DismissAll: 'Odrzuć wszystko', // Dismiss All
	ShowDetails: 'Pokaż szczegóły', // Show Details
	ShowAll: 'Pokaż wszystko', // Show All
	Name: 'Nazwa', // Name
	Color: 'Kolor', // Color
	Icon: 'Ikona', // Icon
	GettingReady: 'Przygotowywanie', // Getting Ready
	ShowPassword: 'Pokaż hasło', // Show password
	HidePassword: 'Ukryj hasło', // Hide password
	Yes: 'Tak', // Yes
	No: 'Nie', // No
	Logo: 'Wyn Logo', // Wyn Logo
	Avatar: 'Avatar', // Avatar

	// Collection Headers
	title: 'Nazwa', // Name
	creator: 'Twórca', // Creator
	created: 'Utworzone', // Created
	modifier: 'Zaktualizowane przez', // Updated By
	modified: 'Zaktualizowane', // Updated
	emptyPageTip: 'Nie ma pliku {{name}} w tym systemie', // There is no {{name}} file in the current system

	// Portal Configuration
	pcPortalSetting: 'Ustawienia portalu', // Portal Settings
	pcSupportPJBG: 'Obsługiwane formaty: PNG, JPG, BMP, GIF', // Support formats: PNG, JPG, BMP, GIF
	pcSupportICO: 'Obługiwany format: ICO', // Support formats: ICO
	pcTitle: 'Tytuł', // Title
	pcPortalUri: 'Link do portalu', // Portal Uri
	pcPortalUriPlaceHolder: 'Link do strony głównej portalu', // Portal home page url
	pcTheme: 'Motyw', // Theme
	pcTagsModel: 'Wzór tagów', // Tags Model
	pcTagsDisplay: 'Wyświetl puste kategorie', // Display Empty System Categories
	pcAllowCustomSchedule: 'Zezwól użytkownikowi tworzyć własne harmonogramy', // Allow User To Create Custom Schedule
	pcEnableWebPageDocument: 'Enable webpage documents',
	pcAllowEditPersonalInformation: 'Zezwól użytkownikowi nad edycję informacji personalnych', // Allow User To Edit Personal Information
	pcAllowEditPersonalTheme: 'Zezwól użytkownikowi na edycję osobistego motywu', // Allow User To Edit Personal Theme
	pcHideWelcomeScreen: 'Ukryj ekran powitalny w portalu dokumentów', // Hide Welcome Screen On Document Portal
	pcShowGlobalOrganization: 'Wyświetl główną organizację', // Show Global Organization
	pcAllowUrlHideActions: 'Zezwól na \'ukryjAkcje\' w URL', // Allow \'hideActions\' In Url
	pcHideActions: 'Ukryj Akcje', // Hide Actions
	pcHideActionsTip: 'Działa tylko, gdy opcja \'ukryjAkcje\' w URL jest wyłączona', // Only works when Allow \'hideActions\' In Url option is off
	pcHideActionsPlaceHolder: 'Ustaw Ukryte Akcje (oddzielane przecinkami)', // Please Set Hide Actions(Separated by commas)
	pcHideDocumentListColumns: 'Ukryj kolumny listy dokumentów', // Hide Document List Columns
	pcHideDocumentListColumnsPlaceHolder: 'Ustaw ukrycie kolumny (oddzielone przecinkami)', // Please Set Hide columns(separated by commas)
	pcEditPersonalInfo: 'Zarządzaj', // Manage Item
	pcEditPersonalInfoTooltip: 'Zarządzaj niestandardowym atrybutem', // Manage Custom Property
	pcLargeLogo: 'Duże logo', // Large Logo
	pcLargeLogoDescription: 'To logo będzie wyświetlane w lewym górnym rogu portalu administratora', // This logo will be displayed in the upper left corner of Admin Portal
	pcLargeLogoRecommended: 'Zalecany rozmiar: 115px * 40px', // Recommended size: 115px * 40px
	pcSmallLogo: 'Małe logo', // Small Logo
	'pcSmallLogoDescription!en': 'To logo będzie wyświetlane w lewym górnym rogu portalu dokumentów i portalu zasobów', // This logo will be displayed in the upper left corner of Document Portal and Resource Portal
	'pcSmallLogoRecommended!en': 'Zalecany rozmiar: 40px * 40px', // Recommended size: 40px * 40px
	'pcSmallLogoDescription!zh': 'To logo będzie wyświetlane w lewym górnym rogu portalu', // This logo will be displayed in the upper left corner of Portal
	'pcSmallLogoRecommended!zh': 'Zalecany rozmiar: 40px * 40px', // Recommended size: 40px * 40px
	pcTabIcon: 'Ikona karty', // Tab Icon
	pcTabIconDescription: 'To logo będzie wyświetlane na karcie przeglądarki', // This logo will be displayed on the tab of the browser
	pcTabIconRecommended: 'Zalecany rozmiar: 16px * 16px', // Recommended size: 16px * 16px
	pcIdentitySetting: 'Ustawienia strony logowania', // Login Page Settings
	pcIdentityAdvanceSetting: 'Zaawansowane ustawienia strony logowania', // Login Page Advance Settings
	pcIdentityAdvanceSettingCss: 'CSS', // css
	pcIdentityAdvanceSettingCssDesc: 'Jeśli ustawisz CSS, zostaną one użyte zamiast wbudowanych CSS na stronie logowania.', // If you set the css, we will use this css instead of the builtin css in login page.
	pcIdentityAdvanceSettingHtml: 'HTML', // Html
	pcIdentityAdvanceSettingHtmlDesc: 'HTML przetworzy się po zawartości strony logowania.', // The html will render after our login page content.
	pcIdentityAdvanceSettingPreview: 'Podgląd', // Preview
	pcLoginLogo: 'Logo logowania', // Login Logo
	pcLoginLogoDescription: 'To logo będzie wyświetlane na stronie logowania', // This logo will be displayed in the login page
	pcLoginLogoRecommended: 'Zalecany rozmiar: 200px * 50px', // Recommended size: 200px * 50px
	pcLoginImage: 'Obrazek logowania', // Login Image
	pcLoginImageDescription: 'Ten obrazek będzie wyświetlany po lewej na stronie logowania', // This image will be displayed in the left of login page
	pcLoginImageRecommended: 'Zalecany rozmiar: 960px * 830px', // Recommended size: 960px * 830px
	pcLoginTip: 'Podpowiedź logowania', // Login Tip
	pcLoginTipDescription: 'Podpowiedź będzie wyświetlana na stronie logowania', // This tip message will be displayed in the login page
	pcLoginPreview: 'Podgląd Logowania', // Login Preview
	pcWCAGCompatibility: 'Zgodność z WCAG', // WCAG Compatibility
	pcEnableNewCreationPanel: 'Enable New Creation Panel',
	pcAutoDismissNotifications: 'Automatyczne Odrzucanie Powiadomień', // Auto Dismiss Notifications
	pcDurationOfNotifications: 'Czas trwania powiadomień', // Duration of Notifications(s)

	// SMTP
	emailSettingsTitle: 'Wiadomości email', // Email Settings
	smtpDialogTitle: 'Test ustawień wiadomości email', // Email Settings Test
	smtpSendTestMail: 'Wyślij', // Send
	smtpSendTestMailTitle: 'Wyślij wiadomość testową', // Send Test Email
	smtpRecipientMailAddress: 'Adres odbiorcy wiadomości', // Recipient Email Address
	smtpServerAddressError: 'Niewłaściwy adres serwera', // Incorrect server address
	smtpServerPortError: 'Niewłaściwy port serwera', // Incorrect server port
	smtpUsernameOrPasswordError: 'Niewłaściwa nazwa użytkownika lub hasło', // Incorrect username or password
	smtpSendTestMailFail: 'Wysyłanie wiadomości testowej nie powiodło się', // Send test email failed
	smtpSendTestMailSuccess: 'Poprawnie wysłano wiadomość testową', // Send test email successfully
	smtpTestMailSubject: 'Wiadomość testowa Wyn Server', // Wyn Server test e-mail
	smtpTestMailBody: 'Ta wiadomość testowa została wysłana przez Wyn Server', // This test message was sent by the Wyn Server system
	emailDomainValidationTitle: 'Sprawdzanie poprawności domeny', // Email Domain Validation
	enableDomainValidation: 'Włącz weryfikację domeny', // Enable Domain Validation
	validEmailDomains: 'Prawidłowe domeny e-mail', // Valid Email Domains
	enable: 'Włącz', // Enable
	disable: 'Wyłącz', // Disable
	mailProtocol: 'Protokół pocztowy', // 'Mail Protocol
	googleClientID: 'Client ID', // Client ID
	googleClientSecret: 'Sekret Klienta', // Client Secret
	senderName: 'Nazwa nadawcy', // Sender Name
	senderEmail: 'Email nadawcy', // Sender E-Mail
	serverAddress: 'Adres serwera SMTP', // SMTP Server Address
	serverPort: 'Port serwera SMTP', // SMTP Server Port
	enableSsl: 'Włącz SSL',  // Enable SSL
	login: 'Logowania', // Login
	password: 'Hasło', // Password
	useParentSettings: 'Użyj ustawień organizacji nadrzędnej', // Use Parent Organization Settings

	// Tags
	tagsAddTag: 'Dodaj kategorię', // Add Category
	tagsEditTag: 'Edytuj kategorię', // Edit Category
	tagsCreateTag: 'Utwórz kategorię', // Create Category
	tagsUpdateTag: 'Zaktualizuj kategorię', // Update Category
	tagsEmptyName: 'Nazwa kategorii nie może być pusta.', // Category name cannot be empty.
	tagsInvalidName: 'Nazwa kategorii nie może zaczynać się od $.', // Category name cannot start with $.
	tagsNameExist: 'Nazwa kategorii "{{name}}" już istnieje.', // Category name "{{name}}" already exists.
	tagsDragTip: 'Przeciągnij element, aby go przenieść', // Drag item to move it.
	tagsTags: 'Kategorie', // Categories
	tagsDeleteTagConfirm: 'Czy chcesz usunąć kategorię "{{name}}" na zawsze?', // Do you want to delete this category "{{name}}" permanently?
	tagsAddTagFailed: 'Dodawanie kategorii nie powiodło się', // Add Category Failed
	tagsEditTagFailed: 'Edycja kategorii nie powiodła się', // Edit Category Failed
	tagsDeleteTag: 'Usuń kategorię', // Delete Category

	// Section Item
	dashHeaderDashboard: 'Dashboard', // Dashboard
	'portal!title': 'Interfejs użytkownika', // UI Settings
	'portal!description': 'Skonfiguruj portale administratora i dokumentów', // Configure Document and Admin portals
	'scheduler!title': 'Planer', // Scheduler
	'scheduler!description': 'Moduł planera dla prototypu GCES', // Scheduler module for GCES Prototype
	'sharedResources!title': 'Udostępnione zasoby', // Shared Resources
	'sharedResources!description': 'Moduł udostępnionych zasobów dla GCES', // Shared resources module for GCES
	'smtp!title': 'Wiadomości email', // Email Settings
	'smtp!description': 'Ustawienia serwera usługi mailowej', // Settings for the server mailing service
	'queue!title': 'Kolejka Usługi Raportowej', // Worker queue settings
	'queue!description': 'Ustawienia kolejki Usługi Raportowej', // Settings for the worker queue

	'semanticModeling!title': 'Ustawienia modelu danych', // Data Model Settings
	'semanticModeling!description': 'Ustawienia modelu danych', // Data Model Settings

	'documents!title': 'Dokumenty', // Documents
	'documents!description': 'Zarządzanie dokumentami', // Documents Management
	'images!title': 'Obrazy', // Images
	'images!description': 'Obrazy udostępniane na potrzeby tworzenia raportów', // Shared images for designing reports
	'datasources!title': 'Źródła danych', // Data Sources
	'datasources!description': 'Źródła danych udostępnione na potrzeby tworzenia raportów', // Shared data sources for designing reports
	'datasets!title': 'Zestawy danych', // Data Sets
	'datasets!description': 'Zestawy danych udostępnione na potrzeby tworzenia raportów', // Shared data sets for designing reports

	'smtp!serverAddress': 'Adres serwera SMTP', // SMTP Server Address
	'smtp!serverPort': 'Port serwera SMTP', // SMTP Server Port
	'smtp!enableSsl': 'Włącz SSL', // Enable SSL
	'smtp!login': 'Logowania', // Login
	'smtp!password': 'Hasło', // Password
	'smtp!senderName': 'Nazwa nadawcy', // Sender name
	'smtp!senderEmail': 'Email nadawcy', // Sender e-mail
	'smtp!emailDomainValidation': 'Sprawdzanie poprawności domeny', // Email Domain Validation
	'smtp!emailDomains': 'Domeny', // Email Domains
	'smtp!mailProtocol': 'Protokół pocztowy', // Mail Protocol
	'smtp!mailProtocol!SMTP': 'SMTP', // SMTP
	'smtp!mailProtocol!GoogleAPI': 'Google API', // Google API
	'smtp!googleClientID': 'Client ID', // Client ID
	'smtp!googleClientSecret': 'Sekret Klienta', // Client Secret
	'googleAPIAuthTitle': 'Autoryzacja', // Authorization
	'googleAPIAuth': 'Autoryzuj', // Authorize
	'GoogleApisAuthFailed': 'Autoryzacja nie powiodła się', // Authorization failed
	'GoogleApisAuthSuccess': 'Autoryzacja powiodła się', // Authorization success
	'googleApisError_1': '$t(pcPortalUri) nie jest podany w $t(portal!title)', // $t(pcPortalUri) is not provided in $t(portal!title)
	'googleApisError_2': 'Autoryzacja rozpoczęta', // Authorization has begun
	'googleApisError_3': 'Autoryzacja nie powiodła się: {{message}}', // Authorization failed: {{message}}
	'googleApisError_4': 'Limit czasu autoryzacji', // Authorization timeout
	'googleApisError_5': 'Brakuje kluczowych informacji w adresie URL przekierowania', // Missing key information in redirect URL
	'googleApisError_6': '$t(pcPortalUri) w adresie URL przekierowania nie pasuje', // $t(pcPortalUri) in redirect URL does not match
	'googleApisError_7': 'Token Odświeżania nie może być pusty', // The Refresh Token cannot be empty

	'scheduleSettings!ignoreEmptyContent': 'Nie dostarczaj pustego dokumentu', // Don\'t deliver the empty document
	'scheduleSettings!disableManualAndOneTimeTask': 'Wyłącz zadanie ręczne i jednorazowe', // Disable Manual and One-time task
	'scheduleSettings!disableFileShare': 'Wyłącz dostarczanie \"File Share\"', // Disable \"File Share\" delivery

	'queue!maxWorkerTasks': 'Maksymalna liczba zadań na Usługę Raportową', // Max tasks per worker
	'queue!defaultExecLimit': 'Domyślny limit czasu wykonania (s)', // Default exec time limit (s)
	'queue!maxExecLimit': 'Maksymalny czas wykonania (s)', // Maximal exec time (s)

	'semanticModeling!alwaysDiscourageDistinct': 'Prevent generating DISTINCT(for Report)',

	'portal!theme': 'Motyw', // Theme
	'portal!theme!Default': 'Domyślny', // Default
	'portal!theme!Light': 'Jasny', // Light
	'portal!theme!ActiveReports Server': 'Pomarańczowy', // Orange
	'portal!theme!Blue': 'Niebieski', // Blue
	'portal!theme!Red': 'Czerwony', // Red
	'portal!theme!Forest': 'Leśny', // Forest
	'portal!theme!Dark Forest': 'Leśny ciemny', // Dark Forest
	'portal!theme!Green': 'Zielony', // Green
	'portal!theme!Warm Light': 'Ciepły jasny', // Warm Light
	'portal!theme!Minimal Blue': 'Minimal Blue',
	'portal!defaultTagsMode': 'Wzór tagów', // Tags Model
	'portal!defaultTagsMode!List': 'Lista', // List
	'portal!defaultTagsMode!TreeView': 'Widok drzewa', // Tree View
	'customTheme!head': 'Własny motyw', // Custom Theme
	GetCustomThemeContentError: 'Pobieranie własnego motywu nie powiodło się', // Get custom theme content failed
	GetBuiltInThemeContentError: 'Ładowanie wbudowanego motywu nie powiodło się', // Load built-in theme failed

	'account-management!title': 'Konto', // Account
	'account-management-user!title': 'Użytkownicy', // Users
	'account-management-user!description': 'Zarządzanie użytkownikami', // User management
	'account-management-role!title': 'Role', // Roles
	'account-management-role!description': 'Zarządzanie rolami', // Role management
	'account-management-property!title': 'Niestandardowy atrybut', // Custom Property
	'account-management-property!description': 'Zdefiniuj wartości Kontekstu Użytkownika, aby dodać dynamiczne akcje dla zestawów danych, źródeł danych i innych dokumentów', // Define UserContext values to add dynamic behavior for datasets, datasources, and other documents
	'account-management-locked-users!title': 'Zablokowani użytkownicy', // Locked Users
	'account-management-locked-users!description': 'Zarządzanie zablokowanymi użytkownikami', // Locked user management
	'account-management-concurrence!title': 'Zgodność', // Concurrence
	'account-management-concurrence!description': '',
	'account-management-security-settings!title': 'Ustawienia zabezpieczeń', // Security Settings
	'account-management-security-settings!description': 'Zarządzaj ustawieniami zabezpieczeń', // Manage security settings
	'account-management-claim-mappings!title': 'Kontekst użytkownika', // User Context
	'account-management-claim-mappings!description': 'Zarządzanie mapowaniem poświadczeń', // Claim mappings management
	'sysconfig-license!title': 'Licencja', // License
	'sysconfig-license!description': 'Aktywacja licencji', // License activation
	'sysconfig-security-provider!title': 'Dostawcy zabezpieczeń', // Security Providers
	'sysconfig-security-provider!description': 'Zarządzanie dostawcami zabezpieczeń', // Security provider management
	'sysconfig-external-provider!title': 'Zewnętrzni dostawcy', // External Providers
	'sysconfig-external-provider!description': 'Zarządzanie zewnętrznymi dostawcami', // External provider management
	'sysconfig-client!title': 'Klient', // Client
	'sysconfig-client!description': 'Zarządzanie klientem', // Client management

	'security-settings!title': 'Security',
	'system-management!title': 'Zarządzanie systemem', // System Management
	'search!title': 'Szukaj', // Search
	EmptySearchResult: 'Brak wyników', // empty result

	'resources!title': 'Zasoby', // Resources

	'configuration!title': 'Konfiguracja', // Configuration

	'tagsEditor!title': 'Kategorie', // Categories
	'tagsEditor!description': 'Zarządzaj kategoriami dokumentu', // Manage document categories
	'auditLogConfiguration!title': 'Ustawienia audytu', // Auditing Settings
	'auditLogConfiguration!description': 'Konfiguruj informacje w rejestrze audytu', // configure audit log information
	'documentThemeEditor!title': 'Domyślny motyw dokumentu', // Default Document Theme
	'documentThemeEditor!description': 'Konfiguruj domyślny motyw dokumentu', // Configure document default theme

	'wyn-plugin!title': 'Monitorowanie', // Monitoring
	'wyn-plugin!description': 'Monitoruj stan Usług Raportowych', // Monitor workers' health
	'reporting-plugin!title': 'Raportowanie', // Reporting
	'reporting-plugin!description': '',
	'wyn-plugin-monitor!title': 'Usługi Raportowe', // Workers
	'wyn-plugin-monitor!description': '',
	'wyn-plugin-tasks!title': 'Zadania', // Tasks
	'wyn-plugin-tasks!description': '',
	'shortcut-scheduler-settings!title': 'Skrót do ustawień harmonogramów', // Scheduler Settings Shortcut
	'shortcut-scheduler-settings!description': '',
	'shortcut-reports!title': 'Skrót do raportów', // Reports Shortcut
	'shortcut-reports!description': '',
	'shortcut-images!title': 'Skrót do udostępnianych obrazów', // Shared Images Shortcut
	'shortcut-images!description': '',
	'shortcut-scheduler-settings!props!text': 'Ustawienia harmonogramów', // Scheduler Settings
	'shortcut-reports!props!text': 'Raporty', // Reports
	'shortcut-images!props!text': 'Udostępniane obrazy', // Shared Images
	'shortcut-mapData!props!text': 'Mapy', // Map Data
	'versionsInfo!title': 'Informacje o wersji', // Version Info
	'versionsInfo!description': 'Informacje o wersji', // Version Info
	'wynEnterprise': 'Wyn Enterprise',

	'Documents!title': 'Dokomenty', // Documents
	'Account Management!title': 'Konto', // Account
	'Configuration!title': 'Konfiguracja', // Configuration
	'dbd!title': 'Dashboardy', // Dashboards
	'dbd!description': 'Dashboardy', // Dashboards
	'dbd!name': 'Dashboard', // Dashboard
	'rdl!title': 'Raporty', // Reports
	'rdl!name': 'Raport', // Report
	'rdl!description': 'Raporty', // Reports
	'smdsc!title': 'Modele danych', // Data Models
	'smdsc!name': 'Modele danych', // Data Models
	'smdsc!description': 'Modele danych', // Data Models
	'rdlx-template!title': 'Szablony raportów', // Report Templates
	'rdlx-template!description': 'Szablony raportów', // Report Templates
	'rdlx-master!title': 'Raport główny', // Master Report
	'rdlx-master!description': 'Raport główny', // Master Report
	'dataset!title': 'Zestawy danych', // Datasets
	'dataset!name': 'Zestawy danych', // Datasets
	'dataset!description': 'Zestawy danych', // Datasets

	'dsc!title': 'Źródła danych', // Data Sources
	'dsc!name': 'Źródła danych', // Data Sources
	'dsc!description': 'Źródła danych', // Data Sources
	'image/jpeg,image/bmp,image/gif,image/png,image/svg!title': 'Obrazy', // Images
	'image/jpeg,image/bmp,image/gif,image/png,image/svg!name': 'Obraz', // Image
	'image/jpeg,image/bmp,image/gif,image/png,image/svg!description': 'Obrazy', // Images
	'font/ttf,font/otf,font/woff,font/woff2,font/svg,font/eot,font/webfont!title': 'czcionka', // Font
	'font/ttf,font/otf,font/woff,font/woff2,font/svg,font/eot,font/webfont!name': 'czcionka', // Font
	'font/ttf,font/otf,font/woff,font/woff2,font/svg,font/eot,font/webfont!description': 'czcionka', // Font
	'theme!title': 'Motywy', // Themes
	'theme!name': 'Motywy', // Themes
	'theme!description': 'Motywy', // Themes
	'geoJson!title': 'Mapy', // Map Data
	'geoJson!description': 'Mapy', // Map Data
	'floorPlan!title': 'Plan Budynku', // Floor Plan
	'floorPlan!name': 'Plan Budynku', // Floor Plan
	'floorPlan!description': 'Plan Budynku', // Floor Plan
	'wbp!title': 'Strona internetowa', // Web Page
	'wbp!name': 'Strona internetowa', // Web Page
	'wbp!description': 'Strona internetowa', // Web Page

	'visual!title': 'Wizualizacja', // Visualization
	'visual!description': 'Wizualizacja', // Visualization

	'reporting!title': 'Ustawienia funkcji', // Feature Settings
	'reporting!name': 'Raport', // Report
	'reporting!description': 'Konfiguruj WynReports', // Configure WynReports
	'reporting!parametersPanelPosition': 'Pozycja panelu parametrów', // Parameter panel position
	'reporting!parametersPanelPosition!Top': 'Góra', // Top
	'reporting!parametersPanelPosition!Right': 'Prawo', // Right
	'reporting!showParametersPanelByDefault': 'Domyślnie pokazuj panel parametrów', // Show parameters panel by default
	'previewPagesSettings_limitPreviewPages': 'Limit stron podglądu', // Limit preview pages
	'previewPagesSettings_previewPages': 'Strony podglądu', // Preview pages
	'previewPagesSettingsTooltip': 'Ustawienie liczby stron podglądu ogranicza liczbę stron, która zostanie wygenerowana w podglądzie raportu. Pełny raport może zostać wygenerowany poprzez „Uruchom pełny raport.', // Limit preview pages setting limits number of report pages to be rendered in viewer. You can render a full report by clicking \'Run Full Report\'. This won\'t affect scheduling and exporting.
	'reporting!disableFocusTimer': 'Wyłącz zegar zaznaczenia', // Focus always visible
	'reporting!hideBlankRDLReport': 'Ukryj szablon raportu regularnego', // Hide blank RDL report
	'hideBlankRDLReportTooltip': 'Ukryj wbudowany szablon raportu regularnego przy tworzeniu raportów.', // Hide the built-in Blank RDL Report template while creating reports.
	'reporting!hideBlankPageReport': 'Ukryj szablon raportu stronicowego', // Hide blank Page report
	'hideBlankPageReportTooltip': 'Ukryj wbudowany szablon raportu stronicowego przy tworzeniu raportów.', // Hide the built-in Blank Page Report template while creating reports.

	'scheduleSettings!title': 'Ustawienia planowania', // Schedule Settings
	'scheduleSettings!description': 'Zarządzanie ustawieniami planowania', // Schedule Settings management

	'report-settings!title': 'Ustawienia WynReports', // WynReports Settings
	'report-settings!description': 'Ustawienia WynReports', // WynReports Settings
	'schedule-settings!title': 'Planowanie', // Scheduling
	'schedule-settings!description': 'Planowanie', // Scheduling

	// Nav Toolbar
	globalOrgName: 'Ogólny', // Global
	switchOrganization: 'Zmień Organizację', // Switch Organization
	editProfileSetting: 'Edytuj Ustawienia Profilu', // Edit Profile Setting

	// Version Info
	'productVersion': 'Wyn Enterprise', // Wyn Enterprise
	'serverVersion': 'Serwer', // Server
	'portalVersion': 'Portal', // Portal
	'pluginTitle': 'Pluginy', // Plugins
	'Portal': 'Plugin portalu', // Portal Plugin
	'Scheduler': 'Plugin Planera', // Scheduler Plugin
	'Shared Resources': 'Plugin Wspólnych Zasobów', // Shared Resources Plugin
	'Server plugin': 'Plugin Serwera', // Server Plugin
	'Account Management Plugin': 'Plugin Zarządzania Kontem', // Account Management Plugin
	'Dataset Management Plugin': 'Plugin Zarządzania Zestawem Danych', // Dataset Management Plugin
	'GCES Dashboards': 'Plugin WynDashboards', // WynDashboards Plugin
	'GCES Reporting': 'Plugin WynReports', //  WynReports Plugin
	DeleteDocumentError: 'Błąd podczas usuwania dokumentu', // Error deleting document

	storageIntervalSettingsUnitHours: 'Godzinach', // Hours
	storageIntervalSettingsUnitDays: 'Dniach', // Days
	storageIntervalSettingsUnitWeeks: 'Tygodniach', // Weeks
	storageIntervalSettingsUnitMonths: 'Miesiącach', // Months
	storageIntervalSettingsUnitYears: 'Latach', // Years
	storageIntervalSettingsUnitForever: 'Beztermionowo', // Forever
	storageIntervalSettingsLabel: 'Maks. interwał przechowywania', // Max. storage interval

	'UpdateNotificationTips': 'Nowa wersja "Version {{newestVersion}}" jest dostępna do zaktualizowania.', // There is a new version "Version {{newestVersion}}" to update.
	'UpdateNotificationTipsViewMore': 'Kliknij tutaj by zobaczyć więcej informacji', // Click here to view more info...
	'UpdateNotificationSkip': 'Pomiń tą wersję', // Skip this version
	'UpdateNotificationSkipTips': 'Pomiń do następnej opublikowanej wersji', // Skip until another version published
	'UpdateNotificationSkipVersionError': 'Nie udało się pominąć wersji', // Failed to skip the version
	'UpdateNotificationSkipVersionSuccess': 'Pomyślnie pominięto wersję', // Skipped version successfully
	'UpdateNotificationSkipVersionSuccessDetail': 'Pomyślnie pominięto wersję "Version {{version}}"', // Success to skip the version "Version {{version}}"
	'vsReleaseTime': 'Data Wydania:', // Release Date:
	'vsSummary': 'Podsumowanie:', // Summary:
	'vsViewDetail': 'Pokaż Szczegóły', // View Detail

	// AdminUploadPanel
	dzDragDrop: 'Przeciągnij i upuść', // Drag & Drop
	dzFiles: 'Pliki', // Files
	dzClickToSelect: 'lub kliknij tutaj, aby wybrać', // or click here to select
	dzUpload: 'Prześlij', // Upload
	Commit: 'Zatwierdź', // Commit
	UploadModeTitle: 'Gdy dokument już istnieje, Twój tryb wysyłania', // When document already exists, your upload mode:
	UploadModeTitleVisual: 'Jeśli wizualizacja już istnieje (bez id), tryb wgrywania: (jeśli wizualizacja ma to samo id co istniejąca, tryb zostanie zignorowany)', // When visualization already exists(without id), your upload mode:(for visualization which has same id with existing, the mode will be ignored)
	Overwrite: 'Nadpisanie dokumentu', // Overwrite document
	KeepBoth: 'Zachowaj oba dokumenty', // Keep both documents
	Collapse: 'Zwiń', // Collapse
	Expand: 'Rozwiń', // Expand
	ReadyToCommit: 'Gotowe do zatwierdzenia', // 'Ready To Commit
	UploadError: 'Przesyłanie nie powiodło się', // Upload Failed
	uploadErr_200_001: 'Nieobsługiwany typ dokumentu', // Unsupported document type
	uploadErr_200_002: 'Nie znaleziono wtyczki SharedResource', // SharedResource plugin not found
	uploadErr_200_003: 'Przesyłanie nie powiodło się', // Uploading failed
	uploadErr_200_004: 'Niewspierana "OverwritePolicy"', // Unsupported "OverwritePolicy"
	uploadErr_200_005: 'Błąd', // Something wrong.
	uploadErr_200_006: 'Pusty plik', // Empty file
	uploadErr_200_007: 'Błąd zatwierdzenia', // Validation error
	uploadErr_200_008: 'Odmowa dostępu', // Permission denied
	uploadErr_200_009: 'Dokument zarezerwowany przez system nie może zostać nadpisany', // Document reserved by system cannot be overwritten.
	uploadErr_200_010: 'Wersja ({{newVersion}}) jest niższa lub równa obecnej', // The version({{newVersion}}) is lower than or equal to current({{existingVersion}}).
	UploadSuccess: 'Przesłano pomyślnie', // Upload successfully
	UploadErrors: 'Przesyłanie nie powiodło się', // Upload failed

	err_20015: 'Nazwa kategorii "{{tagName}}" nie można zaczynać się od \"$\".', // Category name "{{tagName}}" cannot start with \"$\".
	err_20016: 'Nie można odnaleźć kategorii o ID "{{tagId}}".', // Category with the id "{{tagId}}" not found.
	err_20017: 'Kategoria o nazwie "{{name}}" już istnieje.', // Category with the name "{{name}}" already exists.
	err_20018: 'Kategoria z linkiem "{{urlName}}" już istnieje.', // Category with the url "{{urlName}}" already exists.
	err_20019: 'Kategoria z liczbą porządkową "{{order}}" już istnieje.', // Category with the order "{{order}}" already exists ### Kontekst do sprawdzenia
	err_20029: 'Nie można użyć systemowej nazwy "{{ name }}".', // Can not use system reserved tag name "{{ name }}"
};
