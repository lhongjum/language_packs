export const incrementalUpdateCotPL = {
	OK: 'OK', // OK
	Cancel: 'Anuluj', // Cancel
	Close: 'Zamknij', // Close
	Yes: 'Tak', // Yes
	No: 'Nie', // No
	MessageBox: 'Wiadomość', // Message
	IncrementalUpdateDataSet: 'Incremental Update Dataset',
	IncrementalUpdating: 'Updating',
	IncrementalUpdateComplete: 'Incremental Update Complete',
	NoNeedIncrementalUpdate: 'No need to incremental update this dataset.',
	IncrementalUpdateDatasetFailed: 'Incremental Update dataset failed',
	IncrementalUpdateDatasetConfirmMsg: 'Do you want to incremental update the current dataset cache?',
	DocumentInOperation: 'Ten dokument jest aktualizowany przez inną operację. Spróbuj później', // This document is being updated by another operation. Please try later.

	// update error
	err_100001: 'Nieprawidłowy parametr: {name}.', // Invalid parameter: {name}.
	err_100002: 'Błąd wewnętrzny serwera: {message}.', // Internal server error: {message}.
	err_100009: 'Ten dokument jest obecnie aktualizowany przez inną operację. Spróbuj później', // This document is being updated by another operation. Please try later.
	err_100012: 'Nieprawidłowy kontekst użytkownika: {claimName}.', // Invalid user context: {claimName}.
	err_100014: 'Nie masz wystarczającyh uprawnień do dostępu do źródła danych "{{name}}"', // You have not enough permission to access datasource "{{name}}
	err_100015: 'Nie masz wystarczających uprawnień do dostępu do określonych źródeł danych lub jedno ze źródeł nie istnieje', // You have not enough permission to access referenced datasources, or one or more datasources do not exist.
	err_100017: '"{{key}}" wartość "{{value}}" na "{{ptype}}" jest nieprawidłową wartością {{dtype}}.', // The "{{key}}" value "{{value}}" on "{{ptype}}" is an invalid {{dtype}} value.
	err_100018: 'Nie znaleziono dokumentu.', // Document not found.
	err_100019: 'Nie masz uprawnień do dostępu do dokumentu.', // You don not have permission to access the document
	err_100021: 'Nie można połączyć się ze źródłem danych {{name}}.', // Can not connect to datasource {{name}}.
	err_100022: 'Nie masz uprawnień do aktualizacji zestawu danych.', // You don\'t have permission to update the data set.
	err_100023: 'Brak dostępnego pracownika COT.',  // No available COT worker
	err_100018_desc: 'Error trying to resolve datasource "{{ids}}"',
	err_400001: 'Refresh failed. Please check parameter "{{propertyName}}" with orgnization context. The organization of the current user does not have this context.',

	err_410511: 'Refresh failed: Failed to execute create/update/delete/copy sql (redirected to server) on remote analysis database.',
	err_410512: 'Refresh failed: Failed to calculate dataset due to runtime error.',
	err_410003: 'Refresh failed: Logical data type is not supported.',
	err_410005: 'Refresh failed: Invalid dataset calculation result.',
	err_410006: 'Refresh failed: Access denied to temp data file directory.',
	err_410014: 'Refresh failed: Failed to convert value to target data type.',
	err_410102: 'Refresh failed: Unknown runtime errors occurred.',
	err_410105: 'Refresh failed: Failed to execute command on analysis database.',
	err_410125: 'Refresh failed: Internal error. The code line should not be reached.',
	err_410137: 'Refresh failed: Invalid analysis database info.',
	err_410138: 'Refresh failed: Failed to create entry for cached data.',
	err_410139: 'Refresh failed: Failed to append data to cached data.',
	err_410140: 'Refresh failed: Failed to write binary data to analysis database.',
	err_410141: 'Refresh failed: Failed to delete inserted rows.',

	err_DataSourceAccessDenied: 'Nie masz uprawnień do dostępu do źródła danych. \nNazwa źródła danych: {{datasourceName}}.', // You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.
	err_DataSourceNotFound: 'Specified datasource document "{{datasourceId}}" is not found.',
	err_DataSourceIntegrityCheck: 'Błąd sprawdzania integralności źródła danych o ID {{documentId}}', // Data source with id {{documentId}} integrity check error.
	err_UserNotInOrgnization: 'Tego użytkownika nie ma w żadnej organizacji. Sprawdź parametr "{{propertyName}}" z kontekstem organizacji.', // Current user is not in any organization. Please check parameter "{{propertyName}}" with organization context.

	// dataset manager error message
	'err_3000': 'The calculation failed due to exceptions or the calculation was canceled by administrator.'
};
