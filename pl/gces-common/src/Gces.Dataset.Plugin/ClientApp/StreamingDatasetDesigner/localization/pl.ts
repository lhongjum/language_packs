
export const datasetPL = {

	// common
	Save: 'Zapisz', // Save
	SaveAndCreateAnother: 'Zapisz i utwórz kolejny', // Save And Create Another
	OK: 'OK', // OK
	Cancel: 'Anuluj', // Cancel
	Close: 'Zamknij', // Close
	Edit: 'Edytuj', // Edit
	Dataset: 'Zestaw danych', // Dataset
	Delete: 'Usuń', // Delete
	Add: 'Dodaj', // Add
	Up: 'W górę', // Move Up
	Down: 'W dół', // Move Down
	Name: 'Nazwa', // Name
	Description: 'Komentarz', // Comment
	PleaseInputName: 'Wprowadź nazwę zestawu danych', // Please input dataset name.
	DatasetNameError: 'Nazwa zestawu danych jest nieprawidłowa. Nie używaj ograniczonych symboli < > \ : ? * / | " oraz nie używaj . (kropka) jako pierwszego symbolu w nazwie', // The dataset name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the dataset name.
	DatasetNameOnlySpacesError: 'Nazwa zestawu danych jest nieprawidłowa. Nie używaj samych spacji jako nazwy.', // The dataset name is invalid. Please do not use spaces only as dataset name.
	DatasourceNameError: 'Nazwa źródła danych jest nieprawidłowa. Nie używaj ograniczonych symboli < > \ : ? * / | " oraz nie używaj . (kropka) jako pierwszego symbolu w nazwie', // The datasource name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the datasource name.
	NewDataset: 'Nowy zestaw danych', // New Dataset
	TableName: 'Nazwa tabeli', // TableName
	DatasetDesigner: 'Kreator zestawu danych', // Dataset Designer
	Untitled: 'Brak tytułu', // Untitled
	Categories: 'Kategorie', // Categories
	ResidenceTime: 'Retention Time', // Retention Time (minute)
	PushDataToken: 'Wypchnij token danych', // Push Data Token
	Comment: 'Komentarz', // Comment
	Yes: 'Tak', // Yes
	No: 'Nie', // No
	Expand: 'Rozwiń', // Expand
	Collapse: 'Zwiń', // Collapse
	MessageBox: 'Wiadomość', // Message
	RefreshDataSet: 'Odśwież zestaw danych', // Refresh Dataset
	Refreshing: 'Odświeżanie', // Refreshing
	RefreshComplete: 'Odświeżanie zakończone', // Refresh Complete
	NoNeedRefresh: 'Nie musisz odświeżać zestawu danych', // No need to refresh this dataset.
	RefreshDatasetFailed: 'Odświeżanie zestawu danych nie udało się', // Refresh dataset failed
	DocumentInOperation: 'Ten dokument jest aktualizowany przez inną operację. Spróbuj później', // This document is being updated by another operation. Please try later.
	GetDataSourceSchemaFailed: 'Pobieranie schematu źródła danych nie powiodło się. Sprawdź, czy masz dostęp do serwera źródła danych', // Get data source schema failed, Please check if you can access the datasource server.
	ColumnCanNotFound: 'Kolumna({{column}}) nie została znaleziona.', // Column({{column}}) can not found.
	'ColumnCanNotFound!description': 'Kolumna({{column}}) w źródłe danych({{datasource}}) nie została znaleziona. Zmodyfikuj zestaw danych i zapisz ponownie.', // Column({{column}}) in Data Source ({{datasource}}) can not found, please modify the dataset and save again.
	TableCanNotFound: 'Tabela ({{table}}) nie została znaleziona.', // Table({{table}}) can not found.
	cgridMore: 'Więcej', // More
	tooManyFieldsWarning: '{{count}}(więcej niż 30) pól jest obecnie wybranych jako wyjście, co może wpłynąć na wydajność obliczeń.', // {{count}}(more than 30) fields are currently selected for output, which may affect calculation performance.
	datasourceUnknown: 'Usunięty', // Deleted
	Parameters: 'Parametry', // Parameters
	Validating: 'Weryfikuję ...', // Validating...
	StreamingDatasetInvalidError: 'strumieniowy zbiór danych jest nielegalny.',
	StreamingDatasetFieldNameRepeatError: 'Powtarzanie nazwy pola zestawu danych strumieniowych.', // Streaming data set field name repeat
	StreamingDatasetFieldNameInvalidError: 'The Field name is invalid. Field name can only contains letter, number and _, the first character can not be a number.', // The field name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the field name.
	StreamingDatasetFieldNameEmptyError: 'Nazwa lub typ pola zestawu danych przesyłania strumieniowego jest pusta.', // Streaming data set field name or type is empty.
	StreamingDatasetAddError: 'Błąd dodawania strumieniowego zbioru danych', // Add StreamingDataset error
	StreamingDatasetEditError: 'Błąd aktualizacji strumieniowego zbioru danych', // Update StreamingDataset error
	ResidenceTimeError: 'The retention time is illegal, it should be a positive integer, and this time is within one hour.',
	AddField: 'Dodaj pole', // Add Field
	StreamingDataset: 'Zbiór danych strumieniowych', // Streaming Dataset
	StreamingDatasetDesigner: 'Projektant strumieniowego zbioru danych', // Streaming Dataset Designer
	Preview: 'Podgląd', // Preview
	RefRevisionUpdateInfo: 'Related reports will reference the latest version of this document.',
	ReferencedDocuments: 'Relevant Reports:',
	tableStructureChangedInfo: 'The model of the streaming dataset has changed. If you save it, the data in the current streaming dataset will disappear.',
	updateSuccess: 'Update dependent version succeeded.',
	documentNotFound: 'The current document was not found.',
	updateFailed: 'Failed to update dependent version.',
	RandomGenerate: 'Random Generate',
	'fieldName!title': 'Field Name',
	'fieldType!title': 'Field Type',
	'description!title': 'Description',
	'dataType!String!title': 'Napis', // String
	'dataType!Number!title': 'Liczba', // Number
	'dataType!Boolean!title': 'Boolean', // Boolean
	'dataType!Date!title': 'Data', // Date
	'dataType!DateTime!title': 'DataCzas', // DateTime
	CloseDatasetDesignerConfirm: 'Czy chcesz opuścić kreator zestawu danych i odrzucić zmiany?',
	Confirmation: 'Potwierdzenie', // Confirmation
	seconds: 'seconds',
	minutes: 'minutes',

	err_100001: 'invalid request model.',
	err_100002: 'Internal server error.',
	err_100004: 'Document name exist.',
};

export const gridDataPL = {
	cgridMore: 'Więcej', // More
};
