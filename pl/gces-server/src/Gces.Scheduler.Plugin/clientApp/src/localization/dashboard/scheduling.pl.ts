export const schedulingPL: LanguageKeyValueMap = {
	// common
	nullDisplay: '[NULL]',
	emptyDisplay: '[Blank]',
	emptyTextPlaceholder: '<Puste>',
	boolTextFalse: 'Fałsz',
	boolTextTrue: 'Prawda',
	// Delivery Editor
	delEditorMailLabelSubjectToolTip: 'Możesz odnieść się do dowolnego parametru w temacie, korzystając ze znaku zapytania (?), po którym podasz nazwę parametru. Nazwa dashboardu może zostać dodana poprzez &DashboardName. Czas aktualizacji zestawów danych w dashboardzie można dodać za pomocą &DataRefreshTime.', // You can reference any parameter in the subject by entering a question mark (?) followed by the parameter\'s name.The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime.
	delEditorMailLabelBodyToolTip: 'Możesz odnieść się do dowolnego parametru w treści wiadomości, korzystając ze znaku zapytania (?), po którym podasz nazwę parametru. Nazwa dashboardu może zostać dodana poprzez &DashboardName. Czas aktualizacji zestawów danych w dashboardzie można dodać za pomocą &DataRefreshTime.', // You can reference any parameter in the message body by entering a question mark (?) followed by the parameter\'s name.The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime.
	delEditorMailAttachmentBody: 'Wyślij dashboard jako treść', // Send Dashboard as Body
	delEditorMailSubject: 'Scheduled Dashboard', // Scheduled Dashboard
	delEditorMailAttachmentLink: 'Online Link', // Online Link
	delEditorMailDownloadLink: 'Link do pobrania', // Download Link
	delEditorMailBody: 'Oto &DashboardName dashboard, czas aktualizacji przywołanych zestawów danych to &DataRefreshTime. Dashboard jest połączony poniżej &Link', // 'Here is the &DashboardName dashboard. The update time of referenced datasets is &DataRefreshTime. The dashboard is linked below. &Link',

	delEditorAppMsgLabelSubjectToolTip: 'Możesz odwołać się do dowolnego parametru w temacie, wprowadzając znak zapytania (?), A następnie nazwę parametru. Do nazwy dashboardu można się odwoływać za pomocą specjalnego symbolu zastępczego &DashboardName. Czas aktualizacji zestawów danych używanych na dashboardzie można odwołać się za pomocą specjalnego symbolu zastępczego &DataRefreshTime, a do czasu uruchomienia dashboardu można się odwołać za pomocą specjalnego symbolu zastępczego &ExecutionTime.', // You can reference any parameter in the subject by entering a question mark (?) followed by the parameter\'s name. The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of the datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime, and the time that dashboard was run can be referenced with the special placeholder &ExecutionTime.
	delEditorAppMsgLabelBodyToolTip: 'Możesz odwołać się do dowolnego parametru w treści wiadomości, wprowadzając znak zapytania (?), A następnie nazwę parametru. Do nazwy dashboardu można się odwoływać za pomocą specjalnego symbolu zastępczego &DashboardName. Czas aktualizacji zestawów danych używanych na dashboardzie można odwołać się za pomocą specjalnego symbolu zastępczego &DataRefreshTime, a do czasu uruchomienia dahsboardu można się odwołać za pomocą specjalnego symbolu zastępczego &ExecutionTime.', // You can reference any parameter in the message body by entering a question mark (?) followed by the parameter\'s name. The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of the datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime, and the time that dashboard was run can be referenced with the special placeholder &ExecutionTime.
	delEditorAppMsgBody: 'Zaplanuj zadanie dla dashboardu &DashboardName” zostało zakończone o godzinie &ExecutionTime, czas aktualizacji przywoływanych zestawów danych to &DataRefreshTime.', // Schedule task for the dashboard "&DashboardName" has been finished at &ExecutionTime, the update time of the referenced datasets is &DataRefreshTime, please review it.

	// Reporting Editor
	reportingEditorTextNoParameters: 'Dashboard nie posiada parametrów', // dashboard has no parameters
	dashboardEditorLabelAddParameterValue: 'Dodaj wartość parametru', // add parameter value

	// Job Editor Saga
	jeSagaTextParametersError: 'Nie można uzyskać parametrów dashboardu', // Unable to get dashboard parameters
	jeSagaTextTokenError: 'Nie można uzyskać tokenu dashboardu', // Unable to get dashboard token',

	// GraphQl Error Message
	taskErr_30021: 'Identyfikator URI portalu jest wymagany podczas tworzenia zadań dla dashboardu. Prosimy o kontakt z administratorem.', // Portal URI is required when creating tasks for dashboard. Please contact the Administrator

	// export pdf settings
	exportPdfSecurity: 'UstawieniaZabezpieczeń',
	exportPdfEncrypt: 'Szyfruj',
	exportPdfOwnerPassword: 'HasłoWłaściciela',
	exportPdfUserPassword: 'HasłoUżytkownika',

	// @grapecity/gces-reporting-components
	'no-hidden-parameter-value': 'Hidden dashboard parameters - {{parameters}} - don\'t have default values. To preview this dashboard successfully, please edit it in Dashboard Designer and either make the mentioned parameters non-hidden, or specify their default values, or do both changes.',
	'hidden-parameter-invalid-value': 'Hidden dashboard parameters - {{parameters}} - have invalid default values. To preview this dashboard successfully, please edit it in Dashboard Designer and correct settings of the mentioned parameters.'
};
