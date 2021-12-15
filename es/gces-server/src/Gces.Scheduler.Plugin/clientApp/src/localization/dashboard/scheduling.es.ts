export const schedulingES: LanguageKeyValueMap = {
	// common
	nullDisplay: '[NULL]',
	emptyDisplay: '[Blank]',
	emptyTextPlaceholder: '<Empty>',
	boolTextFalse: 'False',
	boolTextTrue: 'True',

	// Delivery Editor
	delEditorMailLabelSubjectToolTip: 'You can reference any parameter in the subject by entering a question mark (?) followed by the parameter\'s name.The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime.',
	delEditorMailLabelBodyToolTip: 'You can reference any parameter in the message body by entering a question mark (?) followed by the parameter\'s name.The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime.',
	delEditorMailAttachmentBody: 'Send Dashboard as Body',
	delEditorMailSubject: 'Scheduled Dashboard',
	delEditorMailAttachmentLink: 'Online Link',
	delEditorMailDownloadLink: 'Download Link',
	delEditorMailBody: 'Here is the &DashboardName dashboard. The update time of referenced datasets is &DataRefreshTime. The dashboard is linked below. &Link',

	delEditorAppMsgLabelSubjectToolTip: 'You can reference any parameter in the subject by entering a question mark (?) followed by the parameter\'s name. The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of the datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime, and the time that dashboard was run can be referenced with the special placeholder &ExecutionTime.',
	delEditorAppMsgSubject: 'Scheduled Dashboard',
	delEditorAppMsgLabelBodyToolTip: 'You can reference any parameter in the message body by entering a question mark (?) followed by the parameter\'s name. The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of the datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime, and the time that dashboard was run can be referenced with the special placeholder &ExecutionTime.',
	delEditorAppMsgBody: 'Schedule task for the dashboard "&DashboardName" has been finished at &ExecutionTime, the update time of the referenced datasets is &DataRefreshTime, please review it.',

	// Reporting Editor
	reportingEditorTextNoParameters: 'dashboard has no parameters',
	dashboardEditorLabelAddParameterValue: 'Add Parameter Value',

	// Job Editor Saga
	jeSagaTextParametersError: 'Unable to get dashboard parameters',
	jeSagaTextTokenError: 'Unable to get dashboard token',

	// GraphQl Error Message
	taskErr_30021: 'Portal URI is required when creating tasks for dashboard. Please contact the Administrator',

	// export pdf settings
	exportPdfSecurity: 'SecuritySettings',
	exportPdfEncrypt: 'Encrypt',
	exportPdfOwnerPassword: 'OwnerPassword',
	exportPdfUserPassword: 'UserPassword',

	// @grapecity/gces-reporting-components
	'no-hidden-parameter-value': 'Hidden dashboard parameters - {{parameters}} - don\'t have default values. To preview this dashboard successfully, please edit it in Dashboard Designer and either make the mentioned parameters non-hidden, or specify their default values, or do both changes.',
	'hidden-parameter-invalid-value': 'Hidden dashboard parameters - {{parameters}} - have invalid default values. To preview this dashboard successfully, please edit it in Dashboard Designer and correct settings of the mentioned parameters.'
};
