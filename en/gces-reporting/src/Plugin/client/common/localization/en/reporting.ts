export default {

	// Export Dialog
	edTextFormat: 'Export Format',
	edTextParams: 'Report Parameters',
	edTextExportParams: 'Export Parameters',
	edTextReadyToExport: 'Ready to Export',
	edTextExport: 'Export',
	edTextExportError: 'Export Error',
	edTextExportTo: 'Export to {{type}}',
	edTextChooseExportFormat: 'Choose an export format',
	edTextAdvancedSettings: 'Advanced Settings',

	edStatusTextGettingInfo: 'getting report info...',
	edStatusTextInfoUnavailable: 'report info is unavailable',

	edHeaderParameters: 'Set report parameters',
	edHeaderSettings: 'Set export settings',
	edExportBtnText: 'Export',
	edNextBtnText: 'Next',
	edCancelBtnText: 'Cancel',
	edCancelBtnTitle: 'Cancel Export',

	// Template Wizard
	tpTagName: 'Templates',
	tpWizardTitle: 'Choose template',
	tpWizardSearchPlaceholder: 'Enter template name here...',
	tpWizardHeaderCategories: 'Categories',
	tpWizardHeaderTemplates: 'Templates',
	tpWizardHeaderDetails: 'Details',
	tpWizardViewModeGallery: 'Gallery',
	tpWizardViewModeList: 'List',
	tpCreateReport: 'Create Report',
	tpCancel: 'Cancel',
	tpSelectTemplateText: 'select a template to see details',
	tpSelectCategoryText: 'select a category to see templates',
	tpNoTemplatesMatchingText: 'no templates matching \'{{name}}\' found',

	tpDetailsName: 'Template Name',
	tpDetailsDescription: 'Description',
	tpDetailsNoDescription: '<No Description>',
	tpDetailsDescriptionBlankRdlReport: 'RDL reports are data driven reports which grow with the data size. These are ideal for operational reports, transactional tabulations, letters, receipts, and many other types of reports where you do not know the size of data that will be displayed and want to show all the data.',
	tpDetailsDescriptionBlankPageReport: 'Page reports are layout driven reports where data is truncated or resized to fit the designed report layout. These are ideal for pixel perfect reports such as billing statements, forms, letters (with fixed layout), certificates, portfolios, catalogs, and many more.',
	tpDetailsCreated: 'Created',
	tpDetailsCreatedBy: 'Created By',
	tpDetailsModified: 'Modified',
	tpDetailsModifiedBy: 'Modified By',

	tpWizardBlankPage: 'Blank Page Report',
	tpWizardBlankRDL: 'Blank RDL Report',
	
	tpWizardAllTemplates: 'All Templates',
	tpWizardStandardTemplates: 'Standard Templates',

	sysTagNoCategory: 'No Category',
	sysTagResources: 'Resources',
	sysTagFavorites: 'Favorites',
	sysTagImages: 'Images',
	sysTagThemes: 'Themes',
	pluginTemplates: 'Templates',

	// Saga
	sagaQueueErrorTaskFailed: 'Task Failed',
	sagaQueueErrorExecFailed: 'Unable to execute task',
	sagaQueueErrorNoWorkers: 'No workers available',
	sagaQueueErrorUnknown: 'Unknown Error',

	sagaTaskStatusExporting: 'Exporting {{doc}} to {{type}}',
	sagaTaskStarting: 'Starting...',

	sagaErrorExportFailed: 'Export Failed',
	sagaErrorExportFailedDetails: 'Unable to perform an export',
	sagaErrorExportFailedParams: 'Unable to get report parameters',
	sagaErrorExportFailedParamValues: 'Unable to get parameter values',

	sagaFail: 'Reporting Plugin: Unknown Error',

	sagaQueueErrorCaption: 'Queue Error',
	sagaQueueError1Content: 'Task has been cancelled',
	sagaQueueError2Content: 'Task processing failed',
	sagaQueueError3Content: 'Unknown internal error',
	sagaQueueError4Content: 'No suitable workers found to process the task',
	sagaQueueError5Content: 'Expected a task with an absolute or relative URL',

	updateTemplateListError: 'Error updating templates list',

	// Document Types
	'report!name': 'Report',
	'report!description': 'Report',
	'template!name': 'Template',
	'template!description': 'Template',
	'masterReport!name': 'Master Report',
	'masterReport!description': 'Master Report',

	// Verbs
	'createReport!name': 'Create Report',
	'createReport!description': 'Create Report',

	'editReport!name': 'Edit...',
	'editReport!description': 'Edit this report',

	'openPublishedReport!name': 'Open Published Design...',
	'openPublishedReport!description': 'Open published design of this report as read-only',

	'exportReport!name': 'Export...',
	'exportReport!description': 'Export this report',

	'reportPreview!name': 'Render To HTML',
	'reportPreview!description': 'Render report to HTML for preview',

	'templatePreview!name': 'Render To HTML',
	'templatePreview!description': 'Render report template to HTML for preview',

	'createReportWithTemplate!name': 'Use for new report...',
	'createReportWithTemplate!description': 'Create a new report with template',
	
	'copyAsTemplate!name': 'As Template...',
	'copyAsTemplate!description': 'Copy report as template',
	copyDocumentSuffix: '-Template',
	copyReportAsTemplateSuccessCaption: 'Template was created successfully',
	copyReportAsTemplateSuccessDetails: 'Template based on the report \'{{documentName}}\' was created successfully.',

	'editTemplate!name': 'Edit Template...',
	'editTemplate!description': 'Edit this template',

	// Revision Verbs
	'previewReportRevision!name': 'Preview...',
	'previewReportRevision!description': 'Preview this report revision',

	'previewTemplateRevision!name': 'Preview Template...',
	'previewTemplateRevision!description': 'Preview this template revision',

	'editReportRevision!name': 'Edit...',
	'editReportRevision!description': 'Edit this report revision',

	'openPublishedReportRevision!name': 'Open Published Design...',
	'openPublishedReportRevision!description': 'Open published design of this report revision as read-only',

	'editTemplateRevision!name': 'Edit Template...',
	'editTemplateRevision!description': 'Edit this template revision',

	// Commands Dialog
	'commands!name': 'Commands',
	'commands!description': 'Commands',
	'commands!btnText': 'Edit',
	'commandsEditor': 'Commands',
	'commandsEditorCurrent': 'Current',
	'commandsEditorNoCategoriesText': 'no commands assigned',
	'commandsEditorAvailableCategories': 'Available',
	'commandsEditorNoAvailableCategories': 'no available commands',
	'commands$navigation': 'Navigation',
	'commands$refresh': 'Refresh',
	'commands$refreshcache': 'Refresh Cache',
	'commands$history': 'History',
	'commands$mousemode': 'Mouse Mode',
	'commands$zoom': 'Zoom',
	'commands$fullscreen': 'Fullscreen',
	'commands$print': 'Print',
	'commands$singlepagemode': 'Single Page View',
	'commands$continuousmode': 'Continuous View',
	'commands$galleymode': 'Galley Mode',
	'commands$search': 'Search',
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

	saveCommandsError: 'Error saving commands',
	getCommandsError: 'Error getting commands',

	// Document Error Message
	documentNotDeleted: 'Document was NOT deleted',
	documentUsedByAnother: 'The document \"{{docName}}\" can not be deleted. It is used by the following documents,\n{{refDocNames}}',
	renameDocumentError: 'Rename error',
	duplicateDocumentError: 'Duplicate Error',
	err_AccessDenied: 'The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.',
	previewDocumentError: 'Preview Error',
	errorAccessDenied: 'You do not have permission to access some of the documents referenced in this document.',

	// Document Section
	referencedDataDocuments: 'Referenced Data Document',

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
