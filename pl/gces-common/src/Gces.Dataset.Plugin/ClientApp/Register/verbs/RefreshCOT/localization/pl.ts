export const refreshCotPL = {
	OK: 'OK', // OK
	Cancel: 'Anuluj', // Cancel
	Close: 'Zamknij', // Close
	Yes: 'Tak', // Yes
	No: 'Nie', // No
	MessageBox: 'Wiadomość', // Message
	RefreshDataSet: 'Odśwież zestaw danych', // Refresh Dataset
	Refreshing: 'Odświeżanie', // Refreshing
	RefreshComplete: 'Odświeżanie zakończone', // Refresh Complete
	NoNeedRefresh: 'Nie ma potrzeby odświeżać tego datasetu', // No need to refresh this dataset.
	RefreshDatasetFailed: 'Nie udało się odświeżyć zbioru danych', // Refresh dataset failed
	RefreshDatasetConfirmMsg: 'Czy chcesz odświeżyć bieżącą pamięć podręczną zestawu danych?', // Do you want to refresh the current dataset cache?
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
	err_100018_desc: 'Błąd podczas próby rozwiązania źródła danych "{{ids}}"', // Error trying to resolve datasource "{{ids}}"
	err_400001: 'Odświeżanie nie powiodło się. Sprawdź parametr "{{propertyName}}" w kontekście organizacji. Organizacja bieżącego użytkownika nie ma tego kontekstu.', // Refresh failed. Please check parameter "{{propertyName}}" with orgnization context. The organization of the current user does not have this context.

	err_410511: 'Odświeżanie nie powiodło się: nie udało się wykonać tworzenia / aktualizacji / usuwania / kopiowania sql (przekierowanego na serwer) w zdalnej bazie danych analitycznych.', // Refresh failed: Failed to execute create/update/delete/copy sql (redirected to server) on remote analysis database.
	err_410512: 'Odświeżanie nie powiodło się: nie udało się obliczyć zbioru danych z powodu błędu w czasie wykonywania.', // Refresh failed: Failed to calculate dataset due to runtime error.
	err_410003: 'Odświeżanie nie powiodło się: logiczny typ danych nie jest obsługiwany.', // Refresh failed: Logical data type is not supported.
	err_410005: 'Odświeżenie nie powiodło się: nieprawidłowy wynik obliczenia zbioru danych.', // Refresh failed: Invalid dataset calculation result.
	err_410006: 'Odświeżanie nie powiodło się: Odmowa dostępu do katalogu plików danych tymczasowych.', // Refresh failed: Access denied to temp data file directory.
	err_410014: 'Odświeżanie nie powiodło się: nie udało się przekonwertować wartości na docelowy typ danych. \ nIndeks wierszy: {{rowIndex}}, indeks kolumn: {{columnIndex}}.', // Refresh failed: Failed to convert value to target data type. \nRow index: {{rowIndex}}, column index: {{columnIndex}}.
	err_410102: 'Odświeżanie nie powiodło się: wystąpiły nieznane błędy w czasie wykonywania.', // Refresh failed: Unknown runtime errors occurred.
	err_410105: 'Odświeżanie nie powiodło się: nie udało się wykonać polecenia w bazie danych analizy.', // Refresh failed: Failed to execute command on analysis database.
	err_410125: 'Odświeżanie nie powiodło się: błąd wewnętrzny. Linia kodu nie powinna zostać osiągnięta.', // Refresh failed: Internal error. The code line should not be reached.
	err_410137: 'Odświeżanie nie powiodło się: nieprawidłowe informacje o bazie danych analizy.', // Refresh failed: Invalid analysis database info.
	err_410138: 'Odświeżanie nie powiodło się: nie udało się utworzyć wpisu dla danych w pamięci podręcznej.', // Refresh failed: Failed to create entry for cached data.
	err_410139: 'Odświeżanie nie powiodło się: nie udało się dołączyć danych do danych w pamięci podręcznej.', // Refresh failed: Failed to append data to cached data.
	err_410140: 'Odświeżanie nie powiodło się: nie udało się zapisać danych binarnych w bazie danych analizy.', // Refresh failed: Failed to write binary data to analysis database.
	err_410141: 'Odświeżanie nie powiodło się: nie udało się usunąć wstawionych wierszy.', // Refresh failed: Failed to delete inserted rows.

	err_DataSourceAccessDenied: 'Nie masz uprawnień do dostępu do źródła danych. \nNazwa źródła danych: {{datasourceName}}.', // You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.
	err_DataSourceNotFound: 'Nie znaleziono określonego dokumentu źródła danych "{{datasourceId}}".', // Specified datasource document "{{datasourceId}}" is not found.
	err_DataSourceIntegrityCheck: 'Błąd sprawdzania integralności źródła danych o ID {{documentId}}', // Data source with id {{documentId}} integrity check error.
	err_UserNotInOrgnization: 'Tego użytkownika nie ma w żadnej organizacji. Sprawdź parametr "{{propertyName}}" z kontekstem organizacji.', // Current user is not in any organization. Please check parameter "{{propertyName}}" with organization context.

	// dataset manager error message
	'err_3000': 'Obliczenie nie powiodło się z powodu wyjątków lub obliczenia zostały anulowane przez administratora.', // The calculation failed due to exceptions or the calculation was canceled by administrator.
};
