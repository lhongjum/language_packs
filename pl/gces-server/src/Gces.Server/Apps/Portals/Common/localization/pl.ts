export const portalPL: LanguageKeyValueMap = {

	// Common
	fetchDataFailed: 'Pozyskanie danych nie powiodło się', //  Fetch data failed
	GettingReady: 'Przygotowanie', // Getting Ready
	Close: 'Zamknij', // Close
	Logo: 'Logo Wyn', // Wyn Logo
	Avatar: 'Awatar', // Avatar
	EmptyPage: 'Pusta strona', // Empty Page
	SearchCategory: 'Wybierz kategorię', // Select category
	cmEmptyResult: 'pusty wynik', // empty result
	fakeComponent: 'Fałszywy komponent', // Fake component
	fakeComponentDescription: 'Służy do zapobiegania automatycznemu wypełnianiu nazwy użytkownika i hasła przez przeglądarkę.', // Used to prevent the browser from automatically filling the username and password.

	// Nav App
	naDocumentPortal: 'Portal dokumentów', // Document Portal
	naResourcePortal: 'Portal zasobów', // Resource Portal
	naAdminPortal: 'Portal administratora', // Admin Portal
	naLogout: 'Wyloguj', // Logout
	naFavorites: 'Ulubione', // Favorites
	naCreateDoc: 'Utwórz', // Create
	naCategories: 'Kategorie', // Categories
	naDocumentTypes: 'Typy dokumentów', // Document Types
	naCategorySettingsTitle: 'Zarządzaj własnymi kategoriami', // Manage personal Categories
	naUpload: 'Załaduj', // Upload
	naOrganization: 'Zmień organizację', // Switch Organization
	naOk: 'OK',
	naCancel: 'Anuluj', // Cancel
	// Nav Toolbar
	switchPortal: 'Zmień portal', // Switch Portal
	globalOrgName: 'Ogólny', // Global
	switchOrganization: 'Zmień organizację', // Switch Organization
	editProfileSetting: 'Edytuj ustawienia profilu', // Edit Profile Setting

	// Document List
	dlName: 'Nazwa', // Name
	dlType: 'Typ', // Type
	dlUpdateBy: 'Zaktualizowany przez', // Updated By
	dlUpdated: 'Zaktualizowany', // Updated
	dlDelete: 'Usuń', // Delete
	dlNoDocumentTip: 'brak wyników', // no results
	dlNoAvailableDocumentTip: 'no documents', // no documents
	dlPreview: 'Podgląd', // Preview
	dlOpenInNewWindow: 'Obejrzyj {{type}} w nowym oknie', // View {{type}} in new window
	dlDownload: 'Pobieranie', // Download
	dlDatasetType: 'Typ zestawu danych', // Dataset Type
	dlDashboardDataset: 'Zbiór danych w pamięci podręcznej', // Cached Dataset
	dlStreamingDataset: 'Zbiór danych strumieniowych', // Streaming Dataset
	dlPushDataset: 'Prześlij zbiór danych', // Push Dataset
	dlReportDataset: 'Bezpośredni zbiór danych', // Direct Dataset
	dlDataProvider: 'Dostawca danych', // Data Provider
	dlDataSource: 'Źrodło danych', // Data Source
	dlReferences: 'Wskazany dokument danych', // Referenced Data Document
	dlSourceType: 'Rodzaj źródła', // Source Type
	dlVersion: 'Wszystkie', // Version
	dlDataModelType: 'Typ modelu danych', // Data Model Type
	dlReportDataModel: 'Dla raportu', // For Report
	dlDashboardDataModel: 'Dla dashboardu', // For Dashboard

	// source type
	local: 'Lokalnie', // Local
	web: 'Sieć', // Web

	// Document Row Actions
	docSetAsHome: 'Ustaw jako główny', // Set as Home
	docSetAsHomeDescription: 'Ten dokument będzie otwierany domyślnie', // This document will be opened by default
	docRename: 'Zmień nazwę', // Rename
	docRenameDescription: 'Zmień nazwę dokumentu', // Rename document
	docDownload: 'Pobierz', // Download
	docDownloadDescription: 'Pobierz dokument', // Download document
	docSetCategory: 'Kategorie...', // Categories...
	docSetCategoryDescription: 'Edytuj kategorie dokumentu', // Edit document categories
	hideColumn: 'Ukryj kolumnę', // Hide Column
	docSetDelete: 'Usuń', // Delete
	docSetDeleteDescription: 'Usuń ten dokument', // Delete this document
	docBatchDeleteDescription: 'Usuń wybrane dokumenty', // Delete selected documents
	docBatchDownloadDescription: 'Pobierz wybrane dokumenty', // Download selected documents
	docsBatchTagDescription: 'Edytuj kategorie dokumentu', // Edit document categories
	docsBatchPermissionDescription: 'Edytuj uprawnienia dokumentu', // Edit document permissions
	docEdit: 'Edytuj...', // Edit...
	docEditTitle: 'Edytuj ten dokument', // Edit this document
	docAddToFavorites: 'Dodaj do ulubionych', // Add to Favorites
	docRemoveFromFavorites: 'Usuń z ulubionych', // Remove from Favorites
	docFilterByDocumentType: 'Filtruj wg typu dokumentu', // Filter by document type
	docItemCopyURL: 'Kopiuj link', // Copy URL
	docItemCopyURLDescription: 'Kopiuj link dokumentu', // Copy Document URL
	docCreateDocument: 'Stwórz', // 'Create'

	// Delete Confirm Dialog
	dcdTitle: 'Usuń dokument', // Delete Document
	dcdMessage: 'Usunąć dokument "{{name}}" na zawsze?', // Delete document "{{name}}" forever?
	dcdDeleteSelectedDocumentMessage: 'Usunąć wybrane dokumenty na zawsze?', // Delete selected documents forever?
	dcdDeleteDocumentError: 'Błąd podczas usuwania dokumentu', // Error deleting document
	dcdOK: 'OK',
	dcdCancel: 'Anuluj', // Cancel
	dcdClose: 'Zamknij', // Close

	// Notifications
	ntfDismiss: 'Odrzuć', // Dismiss
	ntfDismissAll: 'Odrzuć wszystkie', // Dismiss All
	ntfShowDetails: 'Pokaż szczegóły', // Show Details
	ntfShowAll: 'Pokaż wszystko', // Show All
	ntfCancelTask: 'Anuluj to zadanie', // Cancel this task
	ntfPrevious: 'Poprzedni', // Previous
	ntfNext: 'Następny', // Next

	// Document Error Message
	documentNotDeleted: 'Dokument nie został usunięty', // Document was NOT deleted
	documentUsedByAnother: 'Nie można usunąć dokumentu \"{{docName}}\". Jest używany przez następujące dokumenty:\n{{refDocNames}}', // The document \"{{docName}}\" can not be deleted. It is used by the following documents:\n{{refDocNames}}
	renameDocumentError: 'Błąd podczas zmiany nazwy', // Rename error
	updateDocumentDescriptionError: 'Błąd akutalizacji opisu dokumentu', // Update document description error
	updateDocHideOnMobileError: 'Błąd aktualizacji widoczności na urządzeniu mobilnym', // Update document show on mobile error
	err_NoPermissionRename: 'Nie można zmienić nazwy dokumentu. Nie masz wystarczających uprawnień. Skontaktuj się z administratorem.', // The document cannot be renamed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.
	duplicateDocumentError: 'Błąd duplikacji', // 'Duplicate Error'
	err_AccessDenied: 'Dokument nie może zostać zduplikowany. Nie masz uprawnień do edycji niektórych dokumentów powiązanych z tym dokumentem', // The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.
	previewDocumentError: 'Błąd podglądu', // Preview Error
	errorAccessDenied: 'Nie masz uprawnień dostępu do niektórych dokumentów powiązanych z tym dokumentem.', // You do not have permission to access some of the documents referenced in this document.
	updateDocumentHideInDocumentPortalError: 'Pokaż dokument w portalu nie powiodło się.', // Show document on portal failed.
	insufficientReferenceDocNames: '\nNiewystarczające dokumenty uprawnień: ', // Insufficient permission documents:
	docOrRefDocNotFound: 'Dokument lub dokument powiązany z id {{id}} nie znaleziony', // The document or the referenced document with id {{id}} not found.
	downloadFailed: 'Pobieranie nie udane', // Download failed
	uploadDocumentThumbnailError: 'Błąd przesyłania miniatury dokumentu.', // Upload document thumbnail error.

	// Permissions
	DocsPermissionChangePermissionError: 'Niepowodzenie przy zmianie uprawnień', // Failed to change Permissions
	psPermissions: 'Uprawnienia', // Premissions
	psShare: 'Udostępnij', // Share
	psNoSharing: 'Nie udostępniaj', // no sharing
	'psExecute!name': 'Wykonaj', // Execute
	'psRead!name': 'Odczyt', // Read
	'psReadWrite!name': 'Odczyt / Zapis', // Read / Write
	'psFullControl!name': 'Pełna kontrola', // Full Control
	psCancel: 'Anuluj', // Cancel
	psSave: 'Zapisz', // Save
	psNoRolesTip: 'nie znaleziono pasujących ról', // no matched roles found
	psPermissionInfo: 'Informacje o Uprawnieniach', // Permission Information
	psApplyMinNeededPermission: 'Nadaj minimalne wymagane uprawnienia', // Apply Minimum Needed Permission
	psApplyMinNeededPermissionTip: 'Przyznasz uprawnienie \ "Wykonaj \" do dokumentów, do których istnieją odniesienia.', // You will grant the \"Execute\" permission to the referenced documents.
	psInsufficientPermission: 'Zaznaczona rola / organizacja nie ma wystarczających uprawnień do dokumentów, do których się odwołuje, aby wykonać działanie. Możesz zastosować minimalne wymagane uprawnienia, aby użytkownicy mogli normalnie wyświetlać podgląd tego dokumentu.', // The checked role/organization does not have sufficient permissions on the referenced documents to perform the action. You can apply minimum needed permission to make sure users can preview this document normally.
	psReferencedDocuments: 'Powiązane dokumenty:', // Referenced documents:
	expandAll: 'Rozwiń Wszystko', // Expand All
	collapseAll: 'Zwiń Wszystko', // Collapse All
	// permission role display name
	roleName_Everyone: 'Wszyscy', // Everyone
	roleName_administrator: 'Administrator', // Administrator
	roleName_orgadmin: 'Administrator Organizacji', // Organization Administrator
	// custom permissions
	'Print!name': 'Druk', // Print
	'Export!name': 'Eksport', // Export
	'Print!warningRole': 'Rola \'{{name}}\' nie ma uprawnienia \'Drukuj raport\'.', // The role \'{{name}}\' does not have \'Print Report\' permission.
	'Print!warningExecute': 'Nie można wydrukować raportu z uprawnieniami dostępu \'Wykonaj\'.', // Report cannot be printed with \'Execute\' access permission.
	'Export!warningRole': 'Rola \'{{name}}\' nie ma uprawnień \'Eksportuj raport\'.', // The role \'{{name}}\' does not have \'Export Report\' permission.
	'Export!warningExecute': 'Nie można wyeksportować raportu z uprawnieniem dostępu "Wykonaj".', // Report cannot be exported with "Execute" access permission.

	// Doc Info Tab
	docInfoProps: 'Właściwości', // Properties
	docInfoName: 'Nazwa', // Name
	docOriginalName: 'Oryginalna nazwa czcionki', // Font original name
	docInfoDescription: 'Opis', // Description
	docInfoThumbnail: 'Miniatura', // Thumbnail
	'docInfoThumbnail!title': 'Kliknij by zmienić miniaturę', // Click to replace thumbnail
	updateThumbnailSizeError: 'Maksymalny limit rozmiaru miniatur wynosi {{sizeLimit}}KB.', // The maximum thumbnail size limit is {{sizeLimit}}KB.
	docInfoUpdated: 'Zaktualizowane', // Updated
	docInfoUpdatedBy: 'Zaktualizowane przez', // Updated By
	docInfoCreated: 'Utworzone', // Cretaed
	docInfoCreatedBy: 'Utworzone przez', // Created By
	docInfoCategories: 'Kategorie', // Categories
	docInfoPermissions: 'Uprawnienia', // Permissions
	docInfoRead: 'Odczyt', // Read
	docInfoWrite: 'Zapis', // Write
	docInfoEdit: 'Edytuj', // Edit
	hideInDocumentPortalHideStateLabel: 'Ukryj W Portalu Dokumentów', // Hide In Document Portal
	hideInDocumentPortalTrueLabel: 'Prawda', // True
	hideInDocumentPortalFalseLabel: 'Fałsz', // False

	// Document Types
	'rdl!name': 'Raport', // Report
	'rdl!description': 'Raport', // Report
	'rdlx!name': 'Raport', // Report
	'rdlx!description': 'Raport', // Report
	'rdlx-template!name': 'Szablon raportu', // Report template
	'rdlx-template!description': 'Szablon raportu', // Report template
	'rdlx-master!name': 'Raport główny', // Master Report
	'rdlx-master!description': 'Raport główny', // Master Report
	'report!name': 'Raport', // Report
	'report!description': 'Raport', // Report
	'report-master!name': 'Raport główny', // Master Report
	'report-master!description': 'Raport główny', // Master Report
	'theme!name': 'Motyw', // Theme
	'theme!description': 'Motyw', // Theme
	'dbd!name': 'Dashboard', // Dashboard
	'dbd!description': 'Dashboard', // Dashboard
	'dsc!name': 'Źródło danych', // Data Source
	'dsc!description': 'Źródło danych', // Data Source
	'dataset!name': 'Zestaw danych', // Dataset
	'dataset!description': 'Zestaw danych', // Dataset
	'smdsc!name': 'Modele danych', // Data Models
	'smdsc!description': 'Modele danych', // Data Models
	'wbp!name': 'Strona internetowa',  // Web Page
	'wbp!description': 'Strona internetowa',  // Web Page

	'image!name': 'Obrazy', // Images
	'image/bmp!name': 'Obraz BMP', // BMP Image
	'image/bmp!description': 'Bitmapa', // A bitmap image
	'image/jpeg!name': 'Obraz JPEG', // JPEG Image
	'image/jpeg!description': 'JPEG', // A JPEG image
	'image/gif!name': 'GIF', // GIF Image
	'image/gif!description': 'GIF', // A GIF image
	'image/png!name': 'Obraz PNG', // PNG Image
	'image/png!description': 'PNG', // A PNG image
	'image/svg!name': 'Obraz SVG', // SVG Image
	'image/svg!description': 'SVG', // A SVG Image

	'font!name': 'Czcionka',  // Font
	'font/ttf!name': 'Czcionka TTF', // TTF Font
	'font/ttf!description': 'Czcionka TTF', // A ttf font
	'font/otf!name': 'Czcionka OTF', // OTF Font
	'font/otf!description': 'Czcionka OTF', // An OTF font
	'font/woff!name': 'Czcionka WOFF', // WOFF Font
	'font/woff!description': 'Czcionka WOF', // A WOFF font
	'font/woff2!name': 'Czcionka WOFF2', // WOFF2 Font
	'font/woff2!description': 'Czcionka WOFF2', // A WOFF2 font
	'font/svg!name': 'Czcionka SVG', // SVG Font
	'font/svg!description': 'Czcionka SVG', // A SVG font
	'font/eot!name': 'Czcionka EOT', // EOT Font
	'font/eot!description': 'Czcionka EOT', // A EOT font
	'font/webfont!name': 'Czcionka WEB', // WEB Font
	'font/webfont!description': 'Czcionka WEBFONT', // A WEB font

	'dataset-fieldsInfo!name': 'Pola', // Fields
	'dataset-fieldsInfo!description': 'Pola zestawu danych', // Fields of dataset

	// Preview
	pvPreviewIsUnavailable: 'Podgląd jest niedostępny', // Preview is unavailable :(
	pvReload: 'Przeładowanie', // Reload
	pvTitle: 'Podgląd dokumentu', // Document preview

	// License Notification
	messageGracePeriod: 'Licencja tego serwera wygasła {{alertDate}}. Możesz odnowić kontaktując się z GrapeCity Sales - US.Sales@grapecity.com. Serwer przestanie działać {{expireDate}}.', // Note: This server's license has expired on {{alertDate}}. Please renew immediately by contacting GrapeCity Sales at US.Sales@grapecity.com. The server will stop working on {{expireDate}}.
	messageTrial: 'Używasz wersji demonstracyjnej. Skontaktuj się z GrapeCity Sales - US.Sales@grapecity.com, aby aktywować pełną licencję', // Note: You are running an evaluation version. Please contact GrapeCity Sales at US.Sales@grapecity.com to activate a full license.
	messageTrialWillExpire: 'Używasz wersji demonstracyjnej. Wygaśnie ona w ciągu {{remainDays}} dni. Skontaktuj się z GrapeCity Sales - US.Sales@grapecity.com, aby aktywować pełną licencję i uniknąć utraty funkcjonalności.', // Note: You are running an evaluation version. Your evaluation is due to expire in {{remainDays}} days. Please contact GrapeCity Sales at US.Sales@grapecity.com to activate a full license and prevent loss of functionality.
	messageTrialExpired: 'Twoja wersja demonstracyjna wygasła {{expireDate}}. Skontaktuj się z GrapeCity Sales - US.Sales@grapecity.com, aby zakupić pełną licencję.', // Note: Your evaluation has expired on {{expireDate}}. Please contact GrapeCity Sales at US.Sales@grapecity.com to purchase a full license.
	messageKeyExpired: 'Licencja tego serwera wygasła {{expireDate}}. Możesz odnowić kontaktując się z GrapeCity Sales - US.Sales@grapecity.com.', // Note: This server's license has expired on {{expireDate}}. Please renew immediately by contacting GrapeCity Sales at US.Sales@grapecity.com.
	messageKeyVersionNotMatched: 'Uwaga: Licencja nie jest ważna dla tej wersji Wyn.', // Note: License is not valid for this version of Wyn.

	// Toolbar
	showCheckbox: 'Pokaż pole wyboru', // Show Check Box
	hideCheckbox: 'Ukryj pole wyboru', // Hide Check Box
	search: 'Szukaj', // Search
	'showDocumentsAs!list': 'Pokaż dokumenty jako listę', // Show documents as list
	'showDocumentsAs!tile': 'Pokaż dokumenty jako kafelek', // Show documents as tile
	BackBtnTip: 'Kliknij w ikonę, aby powrócić do listy plików.', // Click the icon to back to the file list.
	GotIt: 'Przyjąłem', // I got it

	// System Configurations
	'systemConfigsEditor!title': 'Konfiguracje systemu', // System Configurations
	'systemConfigsEditor!description': 'Zarządzaj konfiguracjami systemu', // Manage system configurations
	SaveModifications: 'Zapisz zmiany', // Save Modification
	SaveChangesAndRestartServices: 'Zachować te zmiany i zrestartować usługę?', // Save these modifications and restart the service?'
	'sysconfig-embedded-identity!name': 'Użyj wbudowanej tożsamości', // Use Embedded Identity
	'sysconfig-embedded-identity!description': 'Wybierz, aby użyć wbudowanej tożsamości usługi Wyn. Domyślnie ustawione na "tak"', // Select to use the identity service embedded in Wyn, the default value is true.
	'sysconfig-identity-url!name': 'Link do serwera tożsamości', // Identity Server URL
	'sysconfig-identity-url!description': 'Link serwera tożsamości jest taki sam jak link portalu, jeśli używasz usługi wbudowanej tożsamości', // The url of identity server, it's the same as portal's url if you use the embedded identity service.
	'sysconfig-allowed-urls!name': 'Linki autoryzowanych aplikacji sieciowych (jeden link na wiersz)', // Authorized Web Application URLs (one URL per line)
	'sysconfig-allowed-urls!description': 'Autoryzowane aplikacje sieciowe dla serwera tożsamości', // The authorized web application urls for identity server.
	'sysconfig-allowed-cors-origins!name': 'Dozowolone źródła CORS (jeden URL na linię)', // Allowed CORS Origins (one URL per line)
	'sysconfig-allowed-cors-origins!description': 'Dozwolone źródła dla polityki CORS.', // The allowed origins for CORS policy.
	'sysconfig-exposed-headers!name': 'Wystawione Nagłówki(jeden Header na linię)', // Exposed Headers (one Header per line)
	'sysconfig-exposed-headers!description': 'Nagłówki wystawione dla polityki CORS.', // The exposed headers for CORS policy.
	'sysconfig-use-appinsights!name': 'Zezwól na Statystyki Aplikacji', // Allow Application Insights
	'sysconfig-use-appinsights!description': 'Zezwól na Statystyki Aplikacji', // Allow Application Insights
	'sysconfig-appinsights-instrumentation-key!name': 'Klucz oprzyrządowania', // Instrumentation Key
	'sysconfig-appinsights-instrumentation-key!description': 'Klucz oprzyrządowania', // Instrumentation Key
	'sysconfig-enable-builtIn-https!name': 'Włącz wbudowany protokół HTTPS', // Enable Built-in HTTPS
	'sysconfig-enable-builtIn-https!description': 'Włącz wbudowany protokół HTTPS', // Enable Built-in HTTPS
	'sysconfig-enable-https-default-port!name': 'Włącz HTTPS domyślny port (443)', // Enable HTTPS Default Port(443)
	'sysconfig-enable-https-default-port!description': 'Włącz HTTPS domyślny port (443)', // Enable HTTPS Default Port(443)
	'sysconfig-certificate-file-path!name': 'Wbudowana ścieżka pliku certyfikatu HTTPS', // Built-in HTTPS Certificate File Path
	'sysconfig-certificate-file-path!description': 'Wbudowana ścieżka pliku certyfikatu HTTPS', // Built-in HTTPS Certificate File Path
	'sysconfig-certificate-file-password!name': 'Wbudowany certyfikat HTTPS hasło do pliku z certyfikatem', // Built-in HTTPS Certificate File Password
	'sysconfig-certificate-file-password!description': 'Wbudowany certyfikat HTTPS hasło do pliku z certyfikatem', // Built-in HTTPS Certificate File Password
	EmptyConfigName: 'Nazwa konfiguracji systemu nie może być pusta.', // The system configuration name can not be empty.
	GetConfigFailed: "Nie udało się pobrać wartości elementu konfiguracji systemu '{{name}}'.", // Failed to get the value of system configuration item '{{name}}'.
	SetConfigFailed: "Nie udało się ustawić wartości elementu konfiguracji systemu '{{name}}'.", // Failed to set the value of system configuration item
	SaveConfigFailed: 'Nie udało się zapisać konfiguracji systemu.', // Failed to save the system configurations.
	GetConfigsFailed: 'Nie udało się pobrać konfiguracji systemu.', // Failed to get the system configurations.
	SetConfigsFailed: 'Nie udało się ustawić konfiguracji systemu.', // Failed to set the system configurations.
	FailedRestartAllServices: 'Nie udało się zrestartować usługi.', // Failed to restart the services.
	https_certificate_error_5001: 'Błąd certyfikatu https.', // Upload https certificate error.
	https_certificate_error_5002: 'Certyfikat lub hasło jest nieprawidłowe.', // The certificate or password is incorrect.
	identityUrlHttpsDomainError: 'W identyfikatorze serwera URL należy użyć "http" i demoeny "{{domain}}" w certyfikacie https.\n przykład: https://www.example.com', // The Identity Server Url needs to use "https" and the domain "{{domain}}" in the https certificate.\nFor example: https://www.example.com
	allowedUrlHttpsDomainError: 'W adresach URL autoryzowanych aplikacji internetowych należy dodać nowy adres url z użyciem "https" i domeny "{{domain}}" w certyfikacie https.\n Na przykład: https://www.example.com', // The Authorized Web Application URLs need to add a new url using "https" and the domain "{{domain}}" in the https certificate.\nFor example: https://www.example.com

	// Comment
	'rename!comment': 'Zmieniono nazwę dokumentu z {{originName}} na {{newName}}', // Document name is changed from {{originName}} to {{newName}}
	'duplicate!comment': 'Dokument został zduplikowany z {{originName}}, wersji {{version}}', // Document is duplicated from {{originName}} of version {{version}}
	'revert!comment': 'Powrócono do wersji nr {{revision}} przez {{friendlyName}}', // Reverted to version No.{{revision}} by {{friendlyName}}
	'upload!comment': 'Załadowany przez {{friendlyName}}', // Uploaded by {{friendlyName}}
	'replace!comment': 'Zamieniony przez {{friendlyName}}', // Replaced by {{friendlyName}}
	'changeThumbnail!comment': 'Miniatura dokumentu została zmieniona na {{imageFileName}}', // Document thumbnail has been changed to {{imageFileName}}

	// Server Error Code
	'documentType!dataset': 'Zestawy danych', // Datasets
	'documentType!rdl': 'Raporty', // Reports
	'documentType!rdlx-template': 'Szablony', // Templates
	'documentType!dbd': 'Dashboardy', // Dashboards

	err_20001: '{{parameter}} jest wymaganym parametrem.', // {{parameter}} is a required parameter.
	err_20002: 'Dokument "{{newName}}" już istnieje.', // Document "{{newName}}" already exists.
	err_20003: 'Dokument nie może zostać zduplikowany. Nie masz uprawnień aby edytować niektórych dokumentów powiązanych z tym dokumentem.', // The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.
	err_20004: 'Nie znaleziono dokumentu.', // Document not found.
	err_20005: 'Liczba {{pluginKey}} dokumentów osiągnęła limit, nie możesz zduplikować dokumentu.', // The number of {{pluginKey}} documents has reached the limit,you can not duplicate new document.
	err_20006: 'Dokument "{{documentProperty}}" nie został znaleziony.', // Document "{{documentProperty}}" is not found.
	err_20007: 'Dokument "{{documentTitle}}" ma nierozpoznany typ "{{documentType}}.', // The document "{{documentTitle}}" has unknown/unregistered type "{{documentType}}.
	err_20008: 'Dokument \"{{documentTitle}}\" nie może zostać usunięty. Jest używany przez następujące dokumenty:\n{{documentRefNames}}', // The document \"{{documentTitle}}\" can not be deleted. It is used by the following documents:\n{{documentRefNames}}
	err_20009: 'Nie można zmienić nazwy dokumentu. Nie masz wystarczających uprawnień. Skontaktuj się z administratorem.', // The document cannot be renamed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.
	err_20010: 'Domyślny motyw dokumentu "{{documentTitle}}" nie może zostać usunięty.', // The default document theme "{{documentTitle}}" can not be deleted.
	err_20011: 'Odmowa dostępu do dokumentu "{{documentTitle}}" ', // Document with title "{{documentTitle}}" is denied.
	err_20012: 'Wbudowany dokument "{{documentTitle}}" nie może zostać usunięty.', // The built-in document "{{documentTitle}}" can not be deleted.
	err_20013: 'Nie udało się zaktualizować opisu dokumentu. Nie masz wystarczających uprawnień. Skontaktuj się z administratorem.', // Update document description failed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.
	err_20014: 'Niewłaściwa nazwa dokumentu. Nazwa dokumentu nie może być pusta oraz używać symboli < > \\ : ? * / | \". Nie używaj . (kropka) jako pierwszy symbol w nazwie dokumentu.', // Invalid document name. Document name can not be empty and please do not use restricted symbols < > \\ : ? * / | \" and do not use . (dot) as the first symbol in the document name.
	err_20020: 'FromTagId nie może być takie samo jak toTagId.', // FromTagId cannot same as toTagId.
	err_20021: 'ToTagId nie może być puste, gdy updateParent ustawiono na "nie"', // ToTagId cannot be null when updateParent is false.
	err_20025: 'Nie można skasować dokumentu "{{documentTitle}}": {{internalErrorMessage}}.', // Cannot delete the document "{{documentTitle}}": {{internalErrorMessage}}.
	err_20026: 'Dokument nie może zostać zduplikowany, nie masz uprawnień do edycji powiązanych dokumentów. Dokument jest powiązany z następującymi dokumentami :\n{{noPermissionDocRefNames}}', // The document can not be duplicated, you do not have permission to edit referenced documents. It is referenced the following documents:\n{{noPermissionDocRefNames}}
	err_20027: 'Dokument nie został znaleziony, odśwież listę dokumentów.', // Document not found, please refresh the document list.
	err_20028: 'Tag nie został znaleziony', //  Tag not found.
	err_20029: 'Nie można użyć systemowej nazwy znacznika "{{name}}".', // Can not use system reserved tag name "{{name}}".

	err_20101: 'Dodanie roli "{{roleName}}" nie udało się.', // Add role "{{roleName}}" failed.
	err_20102: 'Usunięcie roli "{{roleName}}" nie udało się.', // Delete role "{{roleName}}" failed.

	err_20201: 'Użytkownik nie jest poprawnie zarejestrowany w systemie.', // User is not properly registered in the system.
	err_20202: 'Dokument o ID "{{documentId}}" nie został znaleziony (lub nie masz uprawnień do odczytu).', // Document with id "{{documentId}}" not found (or you do not have read permissions).

	err_20301: 'Nie masz wystarczających uprawnień, aby wykonać tę operację.', // You do not have sufficient permissions to do this operation.

	// Uploade Error Code
	uploadErr_10001: 'Status pliku nie został załadowany.', // File State is not uploaded.
	uploadErr_10002: 'Nie znaleziono wtyczek do sprawdzenia poprawności zasobu.', // No plugins found to validate resource.
	uploadErr_10003: 'Wtyczka {{pluginName}} zwrócił wyjątek podczas sprawdzania poprawności pliku: {{exceptionMessage}}.', // Plugin {{pluginName}} have thrown an exception when validating file: {{exceptionMessage}}.
	uploadErr_10004: 'Zwrócono wyjątek podczas sprawdzania powiązań pliku : {{exceptionMessage}}.', // Thrown an exception when validating file reference : {{exceptionMessage}}.
	uploadErr_10005: 'Niewystarczające uprawnienia do załadowania $t({{documentType}}). Skontaktuj się z administratorem.', // Insufficient permissions to upload {{documentType}}. If you believe this is incorrect, please contact your administrator.
	uploadErr_10006: 'Błąd sprawdzania poprawności. {{exceptionMessage}}', // Validate failure. {{exceptionMessage}}
	uploadErr_10007: 'Niemożliwa ścieżka wykonania.', // Impossible execution path.
	uploadErr_10008: 'Maksymalna liczba dokumentów z licencją w została osiągnięta.', // The number of licensed documents in the system has reached limit.
	uploadErr_10009: 'Nie można rozwiązać powiązanego zasobu $t({{documentType}})  o nazwie "{{DocumentName}}".', // Cannot resolve referenced $t({{documentType}}) resource with name {{DocumentName}}.
	uploadErr_10010: 'Powiązany zasób {{resourceName}} o ID <{{DocumentId}}> nie został jeszcze załadowany.', // Referenced resource {{resourceName}} with id <{{DocumentId}}> is not yet uploaded.
	uploadErr_10011: 'Nie sprawdzono jeszcze poprawności powiązanego zasobu {{resourceName}} o ID <{{DocumentId}}>.', // Referenced resource {{resourceName}} with id <{{DocumentId}}> is not yet validated.
	uploadErr_10012: 'Powiązany zasób {{resourceName}} o ID <{{DocumentId}}> jest nieprawidłowy.', // Referenced resource {{resourceName}} with id <{{DocumentId}}> is Invalid.
	uploadErr_10013: 'Powiązany zasób {{resourceName}} ma nierozwiązane powiązania.', // Referenced resource {{resourceName}} has unresolved references.
	uploadErr_10014: 'Zależność cykliczna z plikiem {{anotherFileName}}.', // Cyclic dependency with file {{anotherFileName}}.
	uploadErr_10015: 'Powiązany z niewłaściwym plikiem: {{badFileName}}.', // In cycle with invalid file {{badFileName}}.
	uploadErr_10016: 'Plik o nazwie {{filename}} już istnieje w bieżącej sesji.', // File with name {{filename}} already exists in current session.
	uploadErr_10017: 'Nie można przełączyć się do trybu przesyłania fragmentów, plik jest już przesyłany przez strumień', // Unable to switch to chunked upload mode, file is already being uploaded by stream.',
	uploadErr_10018: 'Nie podano ścieżki do folderu dla plików tymczasowych.', // Path to folder for temporary files is not provided.
	uploadErr_10019: '{{attributeName}} is null.',
	uploadErr_10020: 'Pusta nazwa pliku.', // Empty file name.
	uploadErr_10021: 'Pusta zawartość pliku', // Empty file content
	uploadErr_10022: 'Pusty identyfikator pliku', // Empty File Id
	uploadErr_10023: 'Nie można znaleźć {{fileId}} w bieżącej sesji', // Cannot find {{fileId}} in the current session
	uploadErr_10024: 'Plik „{{fileId}}” nie jest sprawdzony lub nieważny.', // File "{{fileId}}" is not validated nor invalid.
	uploadErr_10025: 'Błąd sprawdzania licencji podczas przesyłania {{fileId}}', // Error from checking License when uploading {{fileId}}
	uploadErr_10026: 'Wersja({{newVersion}}) jest niższa lub równa bieżącej({{existingVersion}}).', // The version({{newVersion}}) is lower than or equal to current({{existingVersion}}).

	documentType_rdl: 'Raport', // Report
	documentType_report: 'Raport', // Report
	documentType_dbd: 'Dashboard', // Dashboard
	documentType_dsc: 'Źródło danych', // data source
	documentType_dataset: 'Zestaw danych', // dataset
	documentType_smdsc: 'Model danych', // Data Model
	documentType_theme: 'Motyw', // theme
	'documentType_image/jpeg': 'Obraz', // image,
	'documentType_image/bmp': 'Obraz', // image
	'documentType_image/gif': 'Obraz', // image
	'documentType_image/png': 'Obraz', // image
	'documentType_wbp': 'strona internetowa',  // web page

	// Upload Other
	uploadFailed: 'Nie można załadować pliku, pomimo podjęcia kilku prób', // We couldn\'t upload file after a few attempts. Sorry
	uploadTextUnknownFileType: 'Nieznany typ pliku', // Unknown File Type
	uploadTextUnsupportedFileType: 'Nieobsługiwany typ pliku lub brak uprawnień do załadowania takiego pliku', // Unsupported file type or no permissions to upload such file.
	uploadTextFileNameExceedHundredCharacters: 'Nazwa pliku nie może przekraczać 100 znaków', // File name cannot exceed 100 characters.

	// welcome screen
	blogs: 'Blogi', // Blogs
	documentation: 'Dokumentacja', // Documentation
	tutorialVideos: 'Filmy', // Videos
	notShowOnNextStartup: 'Nie pokazuj przy następnym uruchomieniu', // Do not show on next startup
	gettingStarted: 'Jak zacząć', // Getting Started
	workingWidthData: 'Praca z danymi', // Working with Data
	createReport: 'Utwórz raport', // Create Report
	createDashboard: 'Utwórz dashboard', // Create Dashboard
	sourceNotFound: 'Nie znaleziono źródła...', // Source not found...
	wizardTitle: 'Witaj w Wyn Enterprise', // Welcome to Wyn Enterprise
	wizardDescription: 'Te filmy pomogą Ci rozpocząć pracę', // The following videos will help you get started.
	updateShowWelcomeSuccess: 'Poprawnie zaktualizowano ustawienia', // Update Settings Success
	updateShowWelcomeFail: 'Błąd aktualizacji ustawień', // Update Settings Error

	// force delete document
	forceDeleteTitle: 'Wymuś usunięcie', // Force Delete
	forceDeleteContent: 'Dokument \"{{documentTitle}}\" jest używany przez następujący dokument:\n{{documentRefNames}}.\nJesteś pewny aby wymusić usunięcie?', // The document \"{{documentTitle}}\" is used by the following documents:\n{{documentRefNames}}.\nAre you sure to force delete?
	forceDeleteContentPrefix: 'Dokument \"{{documentTitle}}\" jest używany przez następujący dokument:\n{{documentRefNames}}.', // The document \"{{documentTitle}}\" is used by the following documents:\n{{documentRefNames}}.
	forceDeleteContentSuffix: 'Jesteś pewny aby wymusić usunięcie?', // Are you sure to force delete?
	forceDeleteTip: 'Wymuś usunięcie', // Force Delete

	// page title
	'create-dsc!title': 'Stwórz źródło danych', // Create Data Source
	'edit-dsc!title': 'Edytuj źródło danych', // Edit Data Source
	'preview-dsc!title': 'Podgląd źródło danych', // Data Source Preview
	'create-dataset!title': 'Utwórz zbiór danych', // Create Dataset
	'edit-dataset!title': 'Edytuj zbiór danych', // Edit Dataset
	'preview-dataset!title': 'Przeglądaj zbiór danych', // Dataset Preview
	'create-sdst!title': 'Utwórz zestaw danych strumieniowych', // Create StreamingDataset
	'edit-sdst!title': 'Edytuj zbiór danych strumieniowych', // Edit StreamingDataset
	'preview-sdst!title': 'Podgląd zbioru danych strumieniowych', // StreamingDataset Preview
	'create-pdst!title': 'Utwórz zestaw danych Push', // Create PushDataset
	'edit-pdst!title': 'Edytuj zbiór danych Push', // Edit PushDataset
	'preview-pdst!title': 'Podgląd zestawu danych Push', // PushDataset Preview
	'create-smdsc!title': 'Utwórz model danych', // Create Data Model
	'edit-smdsc!title': 'Edytuj model danych', // Edit Data Model
	'preview-smdsc!title': 'Podgląd modelu danych', // Data Model Preview
	'create-floorPlan!title': 'Stwórz plan budynku', // Create Floor Plan
	'edit-floorPlan!title': 'Edytuj plan budynku', // Edit this Floor Plan
	'preview-floorPlan!title': 'Przeglądaj plan budynku', // Floor Plan Preview
	'create-font!title': 'Prześlij czcionkę', // Upload Font
	'preview-theme!title': 'Podgląd motywu', // Theme Preview
	'preview-rdl!title': 'Podgląd raportu', // Report Preview
	'preview-rdlx-template!title': 'Podgląd szablonu raportu', // Report Template Preview
	'preview-image!title': 'Podgląd obrazu', // Image Preview
	'preview-image/jpeg!title': 'Podgląd obrazu', // Image Preview
	'preview-image/bmp!title': 'Podgląd obrazu', // Image Preview
	'preview-image/gif!title': 'Podgląd obrazu', // Image Preview
	'preview-image/png!title': 'Podgląd obrazu', // Image Preview
	'create-dbd!title': 'Utwórz pulpit nawigacyjny', // Create Dashboard
	'edit-dbd!title': 'Edytuj pulpit nawigacyjny', // Edit Dashboard
	'preview-dbd!title': 'Podgląd pulpitu nawigacyjnego', // Dashboard Preview
	'searchResult!title': 'Wyniki wyszukiwania', // Search Results
	'preview-ipf!title': 'Podgląd formularza wejściowego', // Input Form Preview
};
