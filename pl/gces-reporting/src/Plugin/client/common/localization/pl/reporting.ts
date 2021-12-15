export default {
	// Export Dialog
	edTextFormat: 'Format eksportu', // Export Format
	edTextParams: 'Parametry raportu', // Report Parameters
	edTextExportParams: 'Parametry eksportu', // Export Parameters
	edTextReadyToExport: 'Gotowe do eksportu', // Ready to Export
	edTextExport: 'Eksport', // Export
	edTextExportError: 'Błąd eksportu', // Export Error
	edTextExportTo: 'Eksport do {{type}}', // Export to {{type}}
	edTextChooseExportFormat: 'Wybierz format eksportu', // Choose an export format
	edTextAdvancedSettings: 'Zaawansowane ustawienia', // Advanced Settings

	edStatusTextGettingInfo: 'pobieranie informacji o raporcie...', // getting report info... 
	edStatusTextInfoUnavailable: 'Informacje o raporcie są niedostępne', // report info is unavailable 

	edHeaderParameters: 'Ustaw parametry raportu', // Set report parameters
	edHeaderSettings: 'Ustaw parametry eksportu', // Set export settings
	edExportBtnText: 'Eksport', // Export
	edNextBtnText: 'Dalej', // Next
	edCancelBtnText: 'Anuluj', // Cancel
	edCancelBtnTitle: 'Anuluj eksport', // Cancel Export

	// Template Wizard
	tpTagName: 'Szablony', // Templates
	tpWizardTitle: 'Wybierz szablon', // Choose template
	tpWizardSearchPlaceholder: 'Wprowadź nazwę szablonu...', // Enter template name here...
	tpWizardHeaderCategories: 'Kategorie', // Categories
	tpWizardHeaderTemplates: 'Szablony', // Templates
	tpWizardHeaderDetails: 'Szczegóły', // Details
	tpWizardViewModeGallery: 'Galeria', // Gallery
	tpWizardViewModeList: 'Lista', // List
	tpCreateReport: 'Stwórz raport', // Create Report
	tpCancel: 'Anuluj', // Cancel
	tpSelectTemplateText: 'wybierz szablon, aby zobaczyć szczegóły', // select a template to see details 
	tpSelectCategoryText: 'wybierz kategorię, aby zobaczyć szablony', // select a category to see templates
	tpNoTemplatesMatchingText: 'no templates matching \'{{name}}\' found',

	tpDetailsName: 'Nazwa szablonu', // Template Name
	tpDetailsDescription: 'Opis', // Description
	tpDetailsNoDescription: '<No Description>',
	tpDetailsDescriptionBlankRdlReport: 'RDL reports are data driven reports which grow with the data size. These are ideal for operational reports, transactional tabulations, letters, receipts, and many other types of reports where you do not know the size of data that will be displayed and want to show all the data.',
	tpDetailsDescriptionBlankPageReport: 'Page reports are layout driven reports where data is truncated or resized to fit the designed report layout. These are ideal for pixel perfect reports such as billing statements, forms, letters (with fixed layout), certificates, portfolios, catalogs, and many more.', 
	tpDetailsCreated: 'Utworzony', // Created
	tpDetailsCreatedBy: 'Utworzony przez', // Created By
	tpDetailsModified: 'Zmodyfikowany', // Modified
	tpDetailsModifiedBy: 'Zmodyfikowany przez', // Modified By

	tpWizardBlankPage: 'Pusty raport', // Blank Page Report
	tpWizardBlankRDL: 'Pusty raport RDL', // Blank RDL Report

	tpWizardAllTemplates: 'All Templates',
	tpWizardStandardTemplates: 'Standard Templates',

	sysTagNoCategory: 'Brak kategorii', // No Category 
	sysTagResources: 'Zasoby', // Resources
	sysTagFavorites: 'Ulubione', // Favorites
	sysTagImages: 'Obrazy', // Images
	sysTagThemes: 'Motywy', // Themes  
	pluginTemplates: 'Szablony', // Templates

	// Saga
	sagaQueueErrorTaskFailed: 'Zadanie nie powiodło się', // Task Failed
	sagaQueueErrorExecFailed: 'Nie można wykonać zadania', // Unable to execute task

	sagaQueueErrorNoWorkers: 'Brak dostępnych usług raportowych', // No workers available 
	sagaQueueErrorUnknown: 'Nieznany błąd', // Unknown Error 
	sagaTaskStatusExporting: 'Eksport {{doc}} do {{type}}', // Exporting {{doc}} to {{type}}
	sagaTaskStarting: 'Rozpoczynanie...', // Starting...

	sagaErrorExportFailed: 'Eksport nie powiódł się', // Export Failed
	sagaErrorExportFailedDetails: 'Nie można wykonać eksportu', // Unable to perform an export
	sagaErrorExportFailedParams: 'Nie można pobrać parametrów raportu', // Unable to get report parameters
	sagaErrorExportFailedParamValues: 'Nie można pobrać wartości parametru', // Unable to get parameter values

	sagaFail: 'Plugin raportowy: nieznany błąd', // Reporting Plugin: Unknown Error

	sagaQueueErrorCaption: 'Błąd kolejki', // Queue Error
	sagaQueueError1Content: 'Zadanie zostało anulowane', // Task has been cancelled
	sagaQueueError2Content: 'Przetwarzanie zadania nie powiodło się', // Task processing failed
	sagaQueueError3Content: 'Nieznany błąd wewnętrzny', // Unknown internal error
	sagaQueueError4Content: 'Nie znaleziono odpowiednich usług raportowych do wykonania zadania', // No suitable workers found to process the task 
	sagaQueueError5Content: 'Wymagany pełny bądź skrócony link', // Expected a task with an absolute or relative URL

	updateTemplateListError: 'Błąd podczas aktualizacji listy szablonów', // Error updating templates list

	// Document Types
	'report!name': 'Raport', // Report
	'report!description': 'Raport', // Report
	'template!name': 'Szablon', // Template
	'template!description': 'Szablon', // Template
	'masterReport!name': 'Raport główny',
	'masterReport!description': 'Raport główny',

	// Verbs
	'createReport!name': 'Stwórz raport', // Create Report
	'createReport!description': 'Stwórz raport', // Create Report

	'editReport!name': 'Edytuj...', // Edit...
	'editReport!description': 'Edytuj ten raport', // Edit this report

	'openPublishedReport!name': 'Open Published Design...',
	'openPublishedReport!description': 'Open published design of this report as read-only',

	'exportReport!name': 'Eksport...', // Export...
	'exportReport!description': 'Eksportuj ten raport', // Export this report

	'reportPreview!name': 'Przetwórz do HTML', // Render To HTML
	'reportPreview!description': 'Przetwórz do HTML, aby zobaczyć podgląd', // Render report to HTML for preview

	'templatePreview!name': 'Przetwórz do HTML', // Render To HTML
	'templatePreview!description': 'Przetwórz do HTML, aby zobaczyć podgląd', // Render report to HTML for preview

	'createReportWithTemplate!name': 'Użyj dla nowego raportu...', // Use for new report...
	'createReportWithTemplate!description': 'Stwórz nowy raport z szablonu', // Create a new report with template
	
	'copyAsTemplate!name': 'Jako szablon...', // As Template...
	'copyAsTemplate!description': 'Kopiuj raport jako szablon', // Copy report as template 
	copyDocumentSuffix: '-Szablon', // -Template
	copyReportAsTemplateSuccessCaption: 'Template was created successfully',
	copyReportAsTemplateSuccessDetails: 'Template based on the report \'{{documentName}}\' was created successfully.',

	'editTemplate!name': 'Edytuj szablon...', // Edit Template...
	'editTemplate!description': 'Edytuj ten szablon', // Edit this template

	// Revision Verbs
	'previewReportRevision!name': 'Podgląd...', // Preview...
	'previewReportRevision!description': 'Podgląd poprawek tego raportu', // Preview this report revision

	'previewTemplateRevision!name': 'Podgląd szablonu...',
	'previewTemplateRevision!description': 'Wyświetl podgląd tej wersji szablonu',

	'editReportRevision!name': 'Edytuj...', // Edit...
	'editReportRevision!description': 'Edytuj poprawki tego raportu', // Edit this report revision

	'openPublishedReportRevision!name': 'Open Published Design...',
	'openPublishedReportRevision!description': 'Open published design of this report revision as read-only',

	'editTemplateRevision!name': 'Edytuj szablon...',
	'editTemplateRevision!description': 'Edytuj tę wersję szablonu',

	// Commands Dialog
	'commands!name': 'Polecenia',
	'commands!description': 'Polecenia',
	'commands!btnText': 'Edytuj',
	'commandsEditor': 'Polecenia',
	'commandsEditorCurrent': 'Obecne',
	'commandsEditorNoCategoriesText': 'brak przypisanych poleceń',
	'commandsEditorAvailableCategories': 'Dostępne',
	'commandsEditorNoAvailableCategories': 'brak dostępnych poleceń',
	'commands$navigation': 'Nawigacja',
	'commands$refresh': 'Odśwież',
	'commands$refreshcache': 'Refresh Cache',
	'commands$history': 'Historia',
	'commands$mousemode': 'Tryb myszy',
	'commands$zoom': 'Powiększenie',
	'commands$fullscreen': 'Pełny ekran',
	'commands$print': 'Drukuj',
	'commands$singlepagemode': 'Widok pojedynczej strony',
	'commands$continuousmode': 'Widok ciągły',
	'commands$galleymode': 'Tryb szpalty',
	'commands$search': 'Szukaj',
	'commands$pdf': 'PDF',
	'commands$excel': 'Excel',
	'commands$exceldata': 'Excel Data',
	'commands$docx': 'Word',
	'commands$image': 'Image',
	'commands$html': 'HTML',
	'commands$csv': 'CSV',
	'commands$json': 'JSON',
	'commands$txt': 'TXT',
	'commands$xml': 'XML',

	saveCommandsError: 'Błąd zapisywania poleceń',
	getCommandsError: 'Błąd pobierania poleceń',

	// Document Error Message
	documentNotDeleted: 'Dokument NIE został skasowany', // Document was NOT deleted 
	documentUsedByAnother: 'Dokument \"{{docName}}\" nie może zostać skasowany. Jest używany przez następujące dokumenty,\n{{refDocNames}}', // The document \"{{docName}}\" can not be deleted. It is used by the following documents,\n{{refDocNames}}
	renameDocumentError: 'Błąd zmiany nazwy', // Rename error
	duplicateDocumentError: 'Błąd duplikacji', // Duplicate Error
	err_AccessDenied: 'Dokument nie może zostać zduplikowany. Nie masz uprawnień, aby edytować niektóre dokumenty powiązane z tym dokumentem', // The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.
	previewDocumentError: 'Błąd podglądu', // Preview Error
	errorAccessDenied: 'Nie masz dostępu do niektórych dokumentów powiązanych z tym dokumentem', // You do not have permission to access some of the documents referenced in this document. 

	// Document Section
	referencedDataDocuments: 'Dokument danych referencyjnych', // Referenced Data Document 

	'caching!name': 'Caching',
	'referencedDataDocuments!name': 'Referenced Data Documents',
	cachingModePreview: 'Preview',
	cachingModeFull: 'Full',
	cachingIntervalHour: 'Hour',
	cachingIntervalDay: 'Day',
	cachingIntervalWeek: 'Week',
	cachingIntervalMonth: 'Month',
	cachingIsDisabledLabel: 'Report caching is disabled',
	cachingSetting: 'Caching',
	allowCachingSetting: 'Allow Caching',
	cachingAgeSetting: 'Maximum Caching Age',
	cachingIntervalSetting: 'Caching Interval',
	allowCachingSettingYes: 'Yes',
	allowCachingSettingNo: 'No',

	saveCachingSettingsError: 'Error occured on saving caching settings',
}
