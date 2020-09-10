export const reportingEN: LanguageKeyValueMap = {

	// Designer
	drApplicationTitle: 'WynReports Designer',
	drYes: 'Yes',
	drNo: 'No',
	drUnsavedChangesTitle: 'The report has unsaved changes',
	drUnsavedChangesText: 'Would you like to leave designer and discard these changes?',

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

	tpDetailsName: 'Template Name',
	tpDetailsDescription: 'Description',
	tpDetailsCreated: 'Created',
	tpDetailsCreatedBy: 'Created By',
	tpDetailsModified: 'Modified',
	tpDetailsModifiedBy: 'Modified By',

	tpWizardBlankPage: 'Blank Page Report',
	tpWizardBlankRDL: 'Blank RDL Report',

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

	// Verbs
	'createReport!name': 'Create Report',
	'createReport!description': 'Create Report',

	'editReport!name': 'Edit...',
	'editReport!description': 'Edit this report',

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

	'editTemplate!name': 'Edit Template...',
	'editTemplate!description': 'Edit this template',

	// Revision Verbs
	'previewRevision!name': 'Preview...',
	'previewRevision!description': 'Preview this report revision',

	'editRevision!name': 'Edit...',
	'editRevision!description': 'Edit this report revision',

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
	'commands$history': 'History',
	'commands$mousemode': 'Mouse Mode',
	'commands$zoom': 'Zoom',
	'commands$fullscreen': 'Fullscreen',
	'commands$print': 'Print',
	'commands$singlepagemode': 'Single Page View',
	'commands$continuousmode': 'Continuous View',
	'commands$galleymode': 'Galley Mode',
	'commands$pdf': 'PDF',
	'commands$excel': 'Excel',
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

	// Reporting Plugin Exceptions
	reportingPluginUnknown: 'An unknown error occured during task execution',
	reportingPluginLrt: 'An LRT exception occured in reporting plugin',
	reportingPluginBadResponse: 'Worker responded with error',
	reportingPluginStreaming: 'An error occured during streaming from worker',
	reportingPluginResponseVerification: 'An error have been revealed after streaming result from worker',

	// Worker Exceptions
	reportingWorkerExportInvalidParameters: 'Invalid report parameters',
	reportingWorkerExportUnknownRenderingExt: 'Unknown rendering extension {0}',

	reportingWorkerTaskInitUnknown: 'An unknown error occured during worker task execution: {0}',
	reportingWorkerTaskInitFileNotFound: 'File {0} not found',
	reportingWorkerTaskInitUnableToLoadFile: 'Unable to load file {0}',

	reportingWorkerFailCheckInvalidParameters: 'Invalid report parameters',
	reportingWorkerFailCheckUnknown: 'An unknown error occured during worker task execution: {0}',
	reportingWorkerFailCheckNoDataset: 'Dataset not specified',

	reportingWorkerRenderingDatasetNotFound: 'Specified dataset not found or inaccessible due to insufficient permissions',
	reportingWorkerRenderingDatasourceNotFound: 'Specified datasource not found or inaccessible due to insufficient permissions',
	reportingWorkerRenderingUnknown: 'An unknown error occured during worker task execution: {0}',

	reportingWorkerReportUnknown: 'An unknown error occured when getting report info: {0}',
	reportingWorkerReportCyclicParameterReferences: 'Cyclic report parameter references detected',

	// Document Section
	referencedDataDocuments: 'Referenced Data Document',
}
