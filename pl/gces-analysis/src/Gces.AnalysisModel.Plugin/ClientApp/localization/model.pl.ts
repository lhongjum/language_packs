export const modelPL: LanguageKeyValueMap = {
	analysisModel: 'Data Model Designer',
	CloseAnalysisDesignerConfirm: 'Czy chcesz opuścić projektanta modelu danych i odrzucić zmiany?', // Do you want to leave data model designer and discard the changes?
	yes: 'Tak', // Yes
	no: 'Nie', // No
	save: 'Zapisz', // Save
	cancel: 'Anuluj', // Cancel
	add: 'Dodaj', // Add
	setSecurityFilterValue: 'Ustaw wartości filtra bezpieczeństwa', // Set Security Filter Value(s)
	undo: 'Cofnij', // Undo
	redo: 'Popraw', // Redo
	validate: 'Waliduj', // Validate
	entities: 'Encje', // Entities
	addEntity: 'Dodaj encję', // Add Entity
	addRelation: 'Dodaj związek', // Add Relationship
	resetLayout: 'Resetuj układ', // Reset Layout
	markPathStart: 'Zaznacz początek ścieżki', // Mark Path Start
	markPathEnd: 'Zaznacz koniec ścieżki', // Mark Path End
	clearMark: 'Wyczyść znak', // Clear Mark
	viewSettings: 'Ustawienia widoku', // View Settings
	updateAnalysisModel: 'Zaktualizuj model danych', // Update Data Model
	saveAnalysisModel: 'Zapisz model danych', // Save Data Model
	Description: 'Opis', // Description
	comment: 'Komentarz', // Comment
	deleteRelation: 'Usuń związek', // Delete Relationship
	delete: 'Usuń', // Delete
	unpin: 'Odepnij', // Unpin
	pin: 'Przypnij', // Pin
	relationFromTo: 'z \'{{sourceEntity}}\'[{{sourceColumns}}] do \'{{targetEntity}}\'[{{targetColumns}}]', // from \'{{sourceEntity}}\'[{{sourceColumns}}] to \'{{targetEntity}}\'[{{targetColumns}}]
	addAttribute: 'Dodaj atrybut', // Add Attribute
	deleteAttribute: 'Usuń atrybut', // Delete Attribute`
	deleteEntity: 'Usuń jednostkę', // Delete Entity
	search: 'Szukaj', // Search
	searchNoResult: 'brak wyników', // no items
	editorEmpty: '<Pusty>', // <Empty>
	FetchDataFailed: 'Pozyskiwanie danych nie powiodło się', // Fetch data failed
	ConnectSuccess: 'Poprawnie połączono', // Connect successfully.
	validateSuccess: 'Sprawdzanie poprawności modelu zakończone.', // Model validated successfully.
	Properties: 'Nieruchomości', // Properties
	beHidden: 'Już ukryte', // Already hidden
	saveTips: 'Kliknij „Zapisz”, aby zakończyć tworzenie modelu', // Please click "Save" to complete the creation of the model
	untitled: 'Brak tytułu', // Untitled
	getDataTips: 'Please click "Get Data" to add tables first',
	Forbidden: 'Access denied',

	// cardinality
	'cardinality!0': '1 To 1',
	'cardinality!1': '1 To N',
	'cardinality!2': '0..1 To N',
	'cardinality!3': 'N To 1',
	'cardinality!4': 'N To 0..1',
	'cardinality!hint!0': 'Jeden rekord {{source}} odpowiada jednemu rekordowi {{target}}.', // One {{source}} record corresponds to one {{target}} record.
	'cardinality!hint!1': 'Jeden rekord {{source}} odpowiada wielu rekordom {{target}}.', // One {{source}} record corresponds to many {{target}} records.
	'cardinality!hint!2': 'Zero lub jeden rekord {{source}} odpowiada wielu rekordom {{target}}.', // Zero or one {{source}} record corresponds to many {{target}} records.
	'cardinality!hint!3': 'Wiele rekordów {{source}} odpowiada jednemu rekordowi {{target}}.', // Many {{source}} records correspond to one {{target}} record.
	'cardinality!hint!4': 'Wiele rekordów {{source}} odpowiada zero lub jednemu rekordowi {{target}}.', // Many {{source}} records correspond to zero or one {{target}} record.

	// home
	diagram: 'Diagram', // Diagram
	relationshipManagement: 'Zarządzanie relacjami', // Relationship Management
	settings: 'Ustawienia', // Settings

	// relationship management
	available: 'Aktywny', // Active
	name: 'Nazwa', // Name
	fromEntity: 'Od: Encje (Atrybuty)', // From: Entities (Attributes)
	toEntity: 'Do: Encje (Atrybuty)', // To: Entities (Attributes)
	cardinality: 'Kardynalność', // Cardinality
	bidirectionCrossFiltering: 'Dwukierunkowy filtr krzyżowy', // Bidirectional Cross Filter

	// Data Type
	'DataType!0': 'Number',
	'DataType!1': 'Text',
	'DataType!2': 'Boolean',
	'DataType!3': 'Binary',
	'DataType!4': 'GUID',
	'DataType!5': 'Date',
	'DataType!6': 'DateTime',

	// Data Viz AI hint types
	Currency: 'Waluta',
	ImageURL: 'Obrazu URL',
	ImageBinary: 'Obraz Binarny',
	GeoRegion: 'Geografia (Region)',
	GeoLatitude: 'Geografia (Szerokość)',
	GeoLongitude: 'Geografia (Długość geograficzna)',

	// Editor
	show: 'Pokaż', // Show
	empty: 'Pusty', // Empty
	apply: 'Zastosuj', // Apply
	textItem: '[{{count}} item]',
	textItem_plural: '[{{count}} items]',
	greaterThanMaxLength: 'Must be less than or equal to the maximum length {{ maxLength }}',
	notMatchPattern: 'Must match the regex {{ pattern }}',
	'multipleValues!label': '<...>',
	'multipleValues!title': 'multiple values',
	sourceEntity: 'Source Entity',
	targetEntity: 'Target Entity',
	sourceColumns: 'Source Attributes',
	targetColumns: 'Target Attributes',

	// Security Filter Editor
	filterExpression: 'Filtruj Wyrażenie', // Filter Expression
	'securityFilterOperator!0': 'Równy', // Equals
	'securityFilterOperator!1': 'W', // In
	'securityFilterOperator!2': 'Różny od', // Not Equals
	'securityFilterOperator!3': 'Nie W', // Not In
	userContext: 'Kontekst użytkownika', // User Context
	organizationContext: 'Dane preferencji organizacji', // Organization Context

	// user & organization context
	user_context_userid: 'ID użytkownika', // user id
	user_context_name: 'nazwa użytkownika', // user name
	user_context_email: 'email', // email
	user_context_phone_number: 'numer telefonu komórkowego', // mobile phone
	user_context_given_name: 'Imię', // given name
	user_context_family_name: 'nazwisko rodowe', // family name
	user_context_full_name: 'Imię i nazwisko', // full name
	user_context_role: 'rola', // role
	user_context_tenant$Name: 'Nazwa organizacji', // organization-Name
	user_context_tenant$FromEmail: 'Adres email organizacji', // organization-FromEmail
	organization_context_Name: 'Nazwa', // Name
	organization_context_FromEmail: 'ZEmaila', // FromEmail

	// Model Setting
	dataSourceSetting: 'Ustawienia źródła danych', // Data Source Settings
	connectionString: 'Ciąg połączenia', // Connection String

	// notifications
	'pathNotFound!title': 'Ścieżka nie znaleziona', // Path not found
	'pathNotFound!Description': 'Nie ma ścieżki łączącej między jednostką {{label1}} a jednostką {{label2}}.', // There is no connective path between entity {{label1}} and entity {{label2}}.
	relationCheckFailed: 'Sprawdzanie relacji nie powiodło się', // Relations checking failed
	multipleDirectRelations: 'Istnieje wiele ścieżek łączących między podmiotem {{name1}} a podmiotem {{name2}}.', // There are multiple connective paths between entity {{name1}} and entity {{name2}}.
	multiplePathRelations: 'Istnieje wiele ścieżek między podmiotem {{name1}} a podmiotem {{name2}}. Ścieżka1 to {{path1}}. Ścieżka2 to {{path2}}.', // There are multiple paths between entity {{name1}} and entity {{name2}}. Path1 is {{path1}}. Path2 is {{path2}}.

	// Sidebar
	propertyTips: 'Wybierz jeden lub więcej obiektów modelu, aby ustawić ich właściwości.', // Select one or more model objects to set their properties.
	'attribute!title': 'ATRYBUT', // ATTRIBUTE
	'entity!title': 'ENCJA', // ENTITY
	'relation!title': 'RELACJA', // RELATION
	'viewSettings!title': 'USTAWIENIA WIDOKU', // VIEW SETTINGS
	CAT_NAMING: 'NAZWA', // NAMING
	CAT_INFORMATION: 'INFORMACJA', // INFORMATION
	CAT_COMMON: 'WSPÓLNY', // COMMON
	CAT_RELATION: 'RELACJA', // RELATION
	CAT_APPEARANCE: 'Wygląd', // Appearance
	PROP_Name: 'Nazwa', // Name
	PROP_ID: 'ID',
	PROP_IsNullable: 'Jest nullable', // Is Nullable
	PROP_IsUnique: 'Jest unikalny', // Is Unique
	PROP_IsContainTimeZone: 'Contains Time Zone',
	PROP_Binding: 'Wiązanie', // Binding
	PROP_IsHidden: 'Jest ukryty', // Is Hidden
	PROP_SecurityFilter: 'Filtr bezpieczeństwa', // Security Filter
	PROP_Cardinality: 'Kardynalność', // Cardinality
	PROP_CrossFilter: 'Dwukierunkowy filtr krzyżowy', // Bidirectional Cross Filter
	PROP_Inactive: 'Ustaw relację jako nieaktywną', // Make Relation Inactive
	PROP_Condition: 'Warunek', // Condition
	PROP_ShowNodeLabel: 'Zawsze pokazuj etykietę węzła', // Always Show Node Label
	PROP_ShowLinkCardinality: 'Pokaż liczność linków', // Show Link Cardinality
	attr_BindingType_binding: 'Wiązanie', // Binding
	attr_BindingType_query: 'Zapytanie', // Query
	field: 'Pole', // Field
	table: 'Tabela', // Table
	view: 'Widok', // View
	sqlExpression: 'Wyrażenie SQL', // SQL Expression
	sqlQuery: 'Zapytanie SQL', // SQL Query
	logicalDataType: 'Logiczny typ danych', // Logical Data Type
	dataVizAIHint: 'Data Category', // Data Category
	CLRDataType: 'Typ danych systemowych', // System Data Type
	conditionSelectSourceEntity: 'proszę wybrać encję źródłową', // please select source entity
	conditionSelectTargetEntity: 'proszę wybrać encję docelową', // please select target entity

	// confirm
	confirmDeleteAttribute: "Czy potwierdzić usunięcie atrybutu '{{attribute}}' z encji '{{entity}}'?", // Confirm to remove the attribute '{{attribute}}' on entity '{{entity}}'?
	confirmDeleteRelation: "Potwierdź usunięcie relacji między '{{source}}' i '{{target}}'?", // Confirm to remove the relation between '{{source}}' and '{{target}}'?
	confirmDeleteEntity: "Potwierdzić usunięcie podmiotu '{{name}}'?", // Confirm to remove the entity '{{name}}'?
	withSecurityFilters: "Filtry bezpieczeństwa odwołujące się do '{{name}}' również zostaną usunięte.", // Security filters that refer to '{{name}}' will be deleted as well.
	withRelations: "Relacje, które odnoszą się do '{{name}}' również zostaną usunięte.", // Relations that refer to '{{name}}' will be deleted as well.
	withSecurityFiltersAndRelations: "Filtry bezpieczeństwa i relacje, które odwołują się do '{{name}}' również zostaną usunięte.", // Security filters and Relations that refer to '{{name}}' will be deleted as well.

	// property grid
	emptyListPlaceholder: 'Wybierz przedmiot, aby zobaczyć właściwości', // Select an item to see properties
	gridSearchPlaceholder: 'wpisz tutaj nazwę nieruchomości...', // enter property name here...
	closeSearchBtnTitle: 'Zamknij', // Close
	noCommonProperties: 'Nie ma wspólnych właściwości', // There are no common properties
	textUnknownProperty: 'Nieznana właściwość:', // Unknown Property:

	// preview
	preview: 'Podgląd ({{name}})', // Preview ({{name}})
	'preview!title': 'Podgląd', // Preview
	previewNoRows: 'Podgląd bez wierszy', // Preview No Rows
	previewNoResult: 'Podgląd brak wyników', // Preview No Results
	'preview!attribute': 'Atrybut', // Attribute
	'preview!operator': 'Operator',
	'preview!value': 'Wartość', // Value
	'preview!parameterName': 'Parameter Name',
	'preview!valueType': 'Value Type',
	'preview!securityFilter': 'Security Filter',
	'preview!entityParameter': 'Entity Parameter',

	// local table
	addLocalEntity: 'Add Local Entity',
	editLocalEntity: 'Edit Local Entity',
	editEntityData: 'Edit Entity Data',
	headerName: 'Header Name',
	addRow: 'Add Row',
	addColumn: 'Add Column',
	textType: 'Tekst', // Text
	numberType: 'Number', // Number
	datetimeType: 'DateTime', // DateTime
	renameColumnName: 'Zmień nazwę', // Rename
	deleteColumn: 'Delete Column',
	importExcelFile: 'Import Excel File',
	selectFile: 'Wybierz plik', // Select File...
	AutoColumnName: 'Używaj pierwszego wiersza jako nagłówka', // Use First Row as Header
	AllowHiddenSheets: 'Załaduj ukryte arkusze', // Load Hidden Sheets
	AllowDBNull: 'Skonwertuj puste komórki na DBNull', // Convert empty cell to DBNull
	FilePassword: 'Hasło Pliku', // FilePassword
	FileUploaded: '{{file}} został wgrany', // {{file}} has been uploaded
	FileUploadWithEmptyName: 'Plik został przekazany', // File has been uploaded
	importCSVFile: 'Import CSV File',
	ColumnDelimiter: 'Ogranicznik kolumn', // Column Delimiter
	workSheet: 'Arkusz Roboczy', // WorkSheet
	selectSheet: 'Select Sheet',
	calculateValuePrompt: 'Is-nullable and is-unique value is calculated by data of local entity.',
	shiftLeft: 'Shift Left',
	shiftRight: 'Shift Right',
	nullShowMessage: 'If you input string "NULL", it will be converted to null value automatically',

	fileSizeOverflow: 'File size overflow.',
	rowOverflow: 'Rows overflow. Maximum number of rows is {{maxRowCount}}.',
	columnOverflow: 'Columns overflow. Maximum number of columns is {{maxColumnCount}}.',
	rowColumnOverflow: 'Rows and Columns overflow. Maximum number of rows is {{maxRowCount}} and maximum number of columns is {{maxColumnCount}}.',
	overflowAlert: 'The sheet can not be selected, because its data is out of range. Maximum number of rows is {{maxRowCount}} and maximum number of columns is {{maxColumnCount}}.',

	// Notifications
	ntfDismiss: 'Odrzuć', // Dismiss
	ntfDismissAll: 'Odrzuć wszystkie', // Dismiss All
	ntfShowDetails: 'Pokaż szczegóły', // Show Details
	ntfShowAll: 'Pokaż wszystko', // Show All
	ntfError: 'ERROR',
	ntfWarning: 'WARNING',
	ntfInfo: 'INFO',
	notifications: 'Notifications',

	Unspecified: 'Unspecified',
	Contains: 'Zawiera', // Contains
	NotContains: 'NieZawiera', // NotContains

	dataSourceValidateFailed: 'Data source verification failed.',
	'dataSourceValidateFailed!missing': 'The target does not exist.',
	'dataSourceValidateFailed!change': 'The target type has been changed.',
	validateDataSources: 'Validate data sources',
	getFileDataFailed: 'Failed to get file data.',
	emptyFile: 'File is empty.',
};