export const portalDataPL: LanguageKeyValueMap = {
	'smdsc!name': 'Model danych', // Data Model
	'smdsc!description': 'Model danych', // Data Model

	// Sidebar Share
	'psSemExecute!name': 'Wykonaj', // Execute
	'psSemExecuteAndCreateDataset!name': 'Otwórz', // Read
	'psSemReadWrite!name': 'Otwórz / Zapisz', // Read / Write

	'createSemanticModel!name': 'Utwórz model danych', // Create Data Model
	'createSemanticModel!description': 'Utwórz model danych', // Create Data Model
	'editSemanticModel!name': 'Edytuj...', // Edit...
	'editSemanticModel!description': 'Edytuj model danych', // Edit Data Model

	'revert!name': 'Przywróć', // Revert
	'revert!description': 'Przywróć do tej wersji', // Revert to this version
	revertError: 'Przywracanie modelu nie powiodło się', // Model revert failed
	revertSuccess: 'Model został przywrócony prawidłowo', // Model reverted successfully
	revertErrorMsg: 'Nie można przywrócić modelu do obecnej wersji.', // Can not revert model to current version.
	revertSuccessMsg: 'Model został poprawnie przywrócony do wersji {{revision}}.', // Model reverted to version No.{{revision}} successfully.

	// document sections register
	dlDataModelType: 'Typ modelu danych', // Data Model Type
	dlReportDataModel: 'Sematic Model', // Sematic Model
	dlDashboardDataModel: 'Cached Model', // Cached Model
	dlDirectQueryModel: 'Direct Query Model', // Direct Query Model

	SemanticModelError_EntityNotFound: 'Entity not found (or You do not have sufficient permissions on this document to perform the action).',
	UpdateFailed: 'Failed to update dependent version.',
	UpdateSuccess: 'Update dependent version succeeded.',

	DocumentBeReferencedMessage: 'This document is referenced by other document.',
	RevisionCheckTitle: 'Update the version of the relevant reports',
	ReferencedDocuments: 'Relevant Reports:',
	RefRevisionUpdateInfo: 'Related reports will reference the latest version of this document.',
	AutoUpgradeDialog: 'Auto Upgrade Dialog',
	Yes: 'Yes',
	No: 'No',
};
