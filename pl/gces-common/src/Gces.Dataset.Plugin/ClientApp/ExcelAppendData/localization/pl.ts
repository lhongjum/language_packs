
export const datasetPL = {

	// common
	Save: 'Zapisz', // Save
	SaveAndCreateAnother: 'Save And Create Another',
	OK: 'OK', // OK
	Cancel: 'Anuluj', // Cancel
	Close: 'Zamknij', // Close
	Edit: 'Edytuj', // Edit
	Dataset: 'Zestaw danych', // Dataset
	Delete: 'Usuń', // Delete
	Add: 'Dodaj', // Add
	Up: 'W górę', // Move Up
	Down: 'W dół', // Move Down
	PleaseInputName: 'Wprowadź nazwę zestawu danych', // Please input dataset name.
	DatasetNameError: 'Nazwa zestawu danych jest nieprawidłowa. Nie używaj ograniczonych symboli < > \ : ? * / | " oraz nie używaj . (kropka) jako pierwszego symbolu w nazwie', // The dataset name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the dataset name.
	DatasetNameOnlySpacesError: 'Nazwa zestawu danych jest nieprawidłowa. Nie używaj samych spacji jako nazwy.', // The dataset name is invalid. Please do not use spaces only as dataset name.
	DatasourceNameError: 'Nazwa źródła danych jest nieprawidłowa. Nie używaj ograniczonych symboli < > \ : ? * / | " oraz nie używaj . (kropka) jako pierwszego symbolu w nazwie', // The datasource name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the datasource name.
	NewDataset: 'Nowy zestaw danych', // New Dataset
	TableName: 'NazwaTabeli', // TableName
	DatasetDesigner: 'Kreator zestawu danych', // Dataset Designer
	Untitled: 'Brak tytułu', // Untitled
	Categories: 'Kategorie', // Categories
	Comment: 'Komentarz', // Comment
	Yes: 'Tak', // Yes
	No: 'Nie', // No
	Expand: 'Expand',
	Collapse: 'Collapse',
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
	datasourceUnknown: 'Deleted',

	// designer mode modal
	SelectCreateMode: 'Wybierz tryb towrzenia zestawu danych', // Please select create dataset mode
	VisualDesigner: 'Visual Designer', // Visual Designer
	SQLDesigner: 'SQL Designer', // SQL Designer
	Confirmation: 'Potwierdzenie', // Confirmation
	CloseDatasetDesignerConfirm: 'Czy chcesz opuścić kreator zestawu danych i odrzucić zmiany?', // Do you want to leave dataset designer and discard the changes?
	ChangeUseCacheConfirm: 'W zestawie danych dashboardu, nieobsługiwane elementy będą odrzucane. Jesteś pewien, że chcesz przełączyć?', // In dashboard dataset, the followings that are not supported will be discarded, Are you sure to switch?
	DeleteFieldConfirm: 'Czy chcesz usunąć to {{fieldType}} pole ({{fieldName}})?', // Do you want to delete this {{fieldType}} Field({{fieldName}})?
	CreateDataSetIframeTitle: 'Create DataSet',
	EditDataSetIframeTitle: 'Edit DataSet',
	CreateDataSourceIframeTitle: 'Create DataSource',
	EditDataSourceIframeTitle: 'Edit DataSource',
	// choose dataset type
	ChooseDatasetTypeTitle: 'Wybierz typ zestawu danych', // Please select dataset type
	ChooseReportDataset: 'Dla raportu', // For Report
	ChooseDashboardDataset: 'Dla dashboardu', // For Dashboard
	IntroduceReport: 'Zestaw danych dla raportu będzie przeliczany za każdym razem, gdy będzie używany.', // The dataset for report will be calculated every time when it is consumed.
	IntroduceDashboard: 'Zestaw danych dla dashboardu będzie pzeliczany podczas zapisu.', // The dataset for dashboard will be calculated and cached when it is saved.

	// data type
	Number: 'Number',
	Integer: 'Integer',
	Float: 'Float',
	String: 'String',
	DateTime: 'DateTime',
	Date: 'Date',
	Boolean: 'Boolean',
	Guid: 'GUID', // Guid
	Unknown: 'Nieobsługiwany', // Unsupported

	// tabs
	Relationships: 'Relacje', // Relationships
	Fields: 'Pola', // Fields
	Filters: 'Filtry', // Filters
	CommonFilters: 'Filtry', // Filters
	WebURIFilters: 'Filtry sieciowe URI', // Web URI Filters
	Options: 'Opcje', // Options
	Field: 'Pole', // Field
	DataType: 'TypDanych', // DataType
	Multivalue: 'Multiwartość', // Multivalue

	// relationships tab
	DataSource: 'Źródło danych', // Data Source
	DataSources: 'Źródła danych', // Data Sources
	CreateDatasetTip: 'Kliknij "Źródło danych", aby dodać źródło danych', // Click "Data Source" to add data source
	AddCustomSqlTable: 'Dodaj własną tabelę SQL', // Add Custom SQL Table
	Preview: 'Podgląd', // Preview
	AddNewDataSource: 'Dodan nowe źródło danych', // Add New Data Source
	SearchForDataSource: 'Szukaj źródła danych', // Search for Data Source
	Schema: 'Schemat', // Schema
	Table: 'Tabela', // Table
	View: 'Widok', // View
	CustomSqlTables: 'Własny zbiór SQL', // Custom Sql Collection
	CustomSqlTable: 'Własna tabela SQL', // Custom Sql Table
	PreviewData: 'Podgląd danych', // Preview Data
	ThisTableHasBeenUsed: 'Ta tabela jest używana', // This table has been used.
	NoDatasource: 'Dodaj źródło danych', // Please add datasource
	DropTablesHere: 'Upuść tabele tutaj', // Drop Tables Here
	Join: 'JOIN', // Join
	Union: 'UNION', // Union
	Replace: 'REPLACE',
	Operator: 'Operator', // Operator
	InnerJoin: 'INNER JOIN', // Inner Join
	LeftJoin: 'LEFT JOIN', // Left Join
	RightJoin: 'RIGHT JOIN', // Right Join
	FullJoin: 'FULL JOIN', // Full Join
	UnionAll: 'UNION ALL', // Union All
	AddCustomSQLTable: 'Dodaj własną tabelę SQL', // Add Custom SQL Table
	UnionTip: 'Upuść tutaj, aby połączyć', // Drop here to union
	OutputFieldName: 'Nazwa pola wyjśćia', // Output Field Name
	NameCanNotBeEmpty: 'Nazwa nie może być pusta.', // Name can not be empty.
	NameAlreadyExist: 'Nazwa {{name}} już istnieje.',  // Name {{name}} already exist.
	CanNotRemove: '{{datasource}} jest używane i nie może zostać usunięte w tym momencie', // {{datasource}} is being used and cannot be removed at the moment.
	ConfirmRemoveDataSource: '{{datasource}} is being used in the dataset, are you sure to remove?',
	CustomTableCanNotRemove: '{{datasource}} jest używane w zestawie danych i nie może zostać usunięte w tym momencie', // {{datasource}} is being used in the dataset and cannot be removed at the moment.
	CustomTableCanNotEdit: '{{datasource}} jest używane w zestawie danych i nie może zostać zmodyfikowane w tym momencie', // {{datasource}} is being used in the dataset and cannot be modified at the moment.
	ConfirmEditCustomTable: '{{datasource}} is being used in the dataset, are you sure to edit?',
	AddJoinCondition: 'Dodaj warunek JOIN', // Add Join Condition
	AddUnionCondition: 'Dodaj warunek UNION', // Add Union Condition
	CustomTables: 'Własne tabele', // Custom Tables
	FetchDataFailed: 'Pozyskiwanie danych nie powiodło się', // Fetch data failed
	NoTableMatchedTip: 'Nie ma tabeli pasującej to wyszukiwania', // There is no table match the search.
	SearchForTables: 'Szukaj tabel', // Search for tables
	Procedure: 'Procedura składowana', // Stored procedure
	TableHasBeenUsed: 'Ustaw alias tabeli', // Set table alias
	TableHasBeenUsedTip: 'Ustaw alias dla wykorzystanej tabeli', // Table has been used, please set table alias
	PleaseEnterAlias: 'Wprowadź alias tabeli', // Please enter table alias
	Confirm: 'Potwierdź', // Confirm
	TableNameAlreadyExists: 'Nazwa tabeli {{name}} już istnieje', // The table name {{name}} already exists
	TableNameCanNotBeEmpty: 'Nazwa tabeli nie może być pusta', // The table name can not be empty
	ReplaceTable: 'Replace Table',
	ConfirmReplace: 'Confirm to replace {{source}} with {{target}}?',

	// custome sql table
	ChooseDataConnection: 'Wybierz połączenie danych', // Choose Data Connection
	SQLCommand: 'Zapytanie SQL', // SQL Command
	SameNameMsg: 'Tabela o nazwie "{{name}}" już istnieje.', // A table named "{{name}}" already exists.
	InvalidSql: 'Błąd SQL, nieprawidłowy parametr {{parameter}}', // Sql Error, invalid parameter: {{parameter}}
	QueryType: 'WpisywanieZapytania', // QueryType
	QueryType_Text: 'Tekst', // Text
	QueryType_StoredProcedure: 'Procedura składowana', // Stored procedure
	DeleteCustomSqlTableTitle: 'Usuń własną tabelę SQL', // Delete Custom Sql Table
	DeleteCustomSqlTableConfirmMsg: 'Usunąć własną tabelę SQL "{{name}}" na zawsze?', // Delete Custom Sql Table "{{name}}" forever?

	Procedures: 'Procedury', // Procedures
	ProcedureParameterName: 'Nazwa Parametru', // Parameter Name
	ProcedureParameterType: 'Typ Danych', // Data Type
	ProcedureParameterValueType: 'Typ Wartości', // Value Type
	ProcedureParameterDefaultValue: 'Wartość Domyślna', // Default Value
	InParam: 'Parametr W',
	ResultSet: 'Zestaw wynikowy', // Result Set
	CustomTableBindedParameterNotFound: 'Bieżąca niestandardowa tabela Sql jest uszkodzona. Nie znaleziono następujących powiązanych parametrów: {{invalidParametersName}}.', // The current custom Sql table is corrupted, the following bound parameters are not found:
	CustomTableParameterNotFound: 'The current custom Sql table is corrupted, the following bound parameters are not found: {{invalidParametersName}}.',

	// fields tab
	Detail: 'Szczegół', // Detail
	GroupBy: 'GROUP BY', // Group By
	DetailView: 'Widok szczegółowy', // Detail View
	GroupByView: 'Widok GROUP BY', // GroupBy View
	CustomField: 'Własne pole', // Custom Field
	SqlExpressionField: 'Pole wyrażenia SQL', // Sql Expression Field
	CalculatedField: 'Pole wyliczane', // Calculated Field
	CategoryField: 'Pole kategorii', // Category Field
	AddCustomFields: 'Dodaj własne pola', // Add Custom Fields
	FieldName: 'Nazwa pola', // Field Name
	FieldFormat: 'Format pola', // Field Format
	EditColumn: 'Edytuj kolumnę', // Edit Column
	ChooseFunction: 'Wybierz funkcję', // Choose Function
	Description: 'Komentarz', // Comment
	Syntax: 'Składnia', // Syntax
	DatasetFields: 'Pola zestawu danych', // Dataset Fields
	Aggregation: 'Agregacja', // Aggregation
	GroupRules: 'Zasady grupy', // Group Rules
	GroupSize: 'Rozmiar grupy', // Group Size
	RangeOfValues: 'Zakres wartości', // Range Of Values
	MinimumValue: 'Minimalna wartość', // Minimum Value
	MaximumValue: 'Maksymalna wartość', // Maximum Value
	Items: 'Elementy', // Items
	Groups: 'Grupy', // Groups
	SwitchViewConfirm: 'Przełączenie widoku sprawi, że utracisz aktualne ustawienia. Kontynuować?', // Switch view would lost current settings, continue?
	CategoryGroupNameMustBeUnique: 'Nazwa grupy musi być unikalna.', // Group name must be unique
	CategoryAtLeastTwoPointsInGroupRange: 'Co najmniej dwa punkty w zakresie grupowania', // At least two points in grouping range.
	CategoryGroupNameCanNotBeEmpty: 'Nazwa grupy nie może być pusta.', // Group name can not be empty.
	CategoryPointAlreadyExist: 'Punkt ({{point}}) już istnieje.', // Point({{point}}) already exist.
	CategoryPleaseInsertAPoint: 'Wprowadź punkt.', // Please insert a point.
	Bins: 'Przedziały', // Bins
	CustomGrouping: 'Własne grupowanie', // Custom Grouping
	LeftOpenRightClose: 'Wartość1 < Wartość <= Wartość2', // Value1 < Value <= Value2
	LeftCloseRightOpen: 'Wartość1 <= Wartość < Wartość2', // Value1 <= Value < Value2
	IncludeLessMinValue: 'Uwzględniaj mniej niż wartość minimalna', // Include less than Min value
	IncludeMoreMaxValue: 'Uwzględniaj więcej niż wartość maksymalna', // Include more than Max value
	CategoryBinMinShouldLessThanMax: 'Wartość minimalna powinna być mniejsza niż wartość maksymalna', // The min value should be less than max value.
	CategoryBinMinCanNotBeEmpty: 'Wartość minimalna nie może być pusta', // The min value can not be empty.
	CategoryBinMaxCanNotBeEmpty: 'Wartość maksymalna nie może być pusta', // The max value can not be empty.
	InsertPoint: 'Wprowadź punkt segmentacji danych', // Insert data segmentation point
	Insert: 'Wprowadź', // Insert
	GroupRange: 'Zakres wartości grupy', // Group Value Range
	GroupName: 'Nazwa grupy', // Group Name
	GroupValue: 'Wartość', // Value
	EmptyFieldsCollectionTip: 'Najpierw dodaj pola wyjścia, aby pokazać tutaj.', // First add output fields to show here.
	EmptyFieldsSearchResultTip: 'Nie ma pól pasujących do wyszukiwania', // There is no field match the search.
	DragColumnToGroup: 'Upuść kolumnę tutaj, aby stworzyć grupę', // Drop Column Here to do group.
	DragColumnToAggregation: 'Upuść kolumnę tutaj, aby stworzyć agregację', // Drop Column Here to do aggregation.
	FieldDetailTitle: 'W tym trybie możesz wybrać i modyfikować pola używane jako wyjście', // In this mode, you could select and modify some fields to used as output
	FieldGroupTitle: 'W tym trybie możesz grupować pola i jednocześnie wykonywać agregacje', // In this mode, you could group some field and do the aggregation same time
	FieldColumnLabel: 'Pole', // Field
	FieldDisplayLabel: 'Wyjście', // Output
	FieldDatatypeLabel: 'Typ', // Type
	FieldTargetDataTypeLabel: 'Docelowy typ', // Target Type
	FieldAliasLabel: 'Alias', // Alias
	FieldDesLabel: 'Opis', // Description
	FieldExpression: 'Wyrażenie', // Expression
	ExpressionIsEmptyMsg: 'Wyrażenie nie może być puste', // Expression could not be empty
	CustomFieldAliasCanNotBeEmpty: 'Alias własnego pola nie może być pusty', // Custom field \'s alias could not be empty
	FieldIsReferByOther: 'Nie można zmienić obecnego pola, inne pole odnosi się do niego', // Could not change current field, it is referred by other field
	NameContainsNonWord: 'Określona nazwa jest nieprawidłowa. Nie używaj ograniczonego znaku "{{word}}', // The specified name is not valid. Please do not use restricted character "{{word}}"
	FieldExistError: 'Kolumna "{{column}}" już isnieje wśród kolumn zestawu danych', // Column "{{column}}" already exists in dataset columns
	ErrorMessage: 'Wiadomość błędu', // Error Message
	SuccessMessage: 'Wiadomość powodzenia', // Success Message
	Function: 'Funkcja', // Function
	ReferField: 'Pole referencyjne', // Refer Field
	ReferTable: 'Tabela referencyjna', // Refer Table
	CalculatedFields: 'Pola wyliczane', // Calculated Fields
	Expression: 'Wyrażenie', // Expression
	CategoryNameAlreadyExist: 'Nazwa kategorii \'{{name}}\' już istnieje', // Category name \'{{name}}\' already exist
	CalculateCategoryAll: 'Wszystko', // All
	SearchForFields: 'Szukaj pól', // Search for fields

	// filters tab
	MoveUp: 'W górę', // Move Up
	MoveDown: 'W dół', // Move Down
	ValueType: 'Typ wartości', // Value Type
	Value: 'Wartość', // Value
	And: 'Oraz', // And
	Constant: 'Stała', // Constant
	AddFilter: 'Dodaj filtr', // Add Filter
	URIParameters: 'Parametr URI', // URI Parameter
	FieldType: 'Typ pola', // Field Type
	StartsWith: 'RozpoczynaSięOd', // StartsWith
	NotStartsWith: 'NieRozpoczynaSięOd', // NotStartsWith
	EndsWith: 'KończySię', // EndsWith
	NotEndsWith: 'NieKończySię', // NotEndsWith
	Contains: 'Zawiera', // Contains
	NotContains: 'NieZawiera', // NotContains
	Is: 'Jest', // Is
	NotIs: 'NieJest', // NotIs
	In: 'W', // In
	NotIn: 'NieW', // NotIn
	Between: 'Pomiędzy', // Between
	tableFilter: 'Tabele', // Tables
	andFilter: 'Oraz', // And
	orFilter: 'Lub', // Or
	addRule: 'Dodaj regułę', // Add rule
	addGroup: 'Dodaj grupę', // Add group
	UserContextParameter: 'Parametr Kontekstu Użytkownika', // User Context Parameter
	OrganizationContextParameter: 'Parametr Kontekstu Organizacji', // Organization Context Parameter
	ConstantParameter: 'Stały Parametr', // Constant Parameter

	// options tab
	ConnectDbType: 'Podłącz typ bazy danych', // Connect Database Type
	ConnectMode: 'Typ bazy danych:', // Dataset Type:
	DirectConnection: 'Dla raportu', // For Report
	UseCache: 'Dla dashboardu', // For Dashboard
	Parameter: 'Parametr', // Parameter
	ContextField: 'Pole kontekstu', // Context Field
	DefaultValue: 'Domyślna wartość', // DefaultValue
	UserContext: 'Kontekst użytkownika', // User Context
	OrganizationContext: 'Dane preferencji organizacji', // Organization Context
	Source: 'źródło danych', // Data Source
	SetPreviewValue: 'Ustaw parametr podglądu', // Set Preview Parameter
	ParameterType: 'Typ parametru', // Parameter Type
	UserInput: 'Dane wejściowe użytkownika', // User Input
	UseCacheTip: 'Zestaw danych dla dashboardu będzie przeliczany i cache\'owany przy zapisie', // The dataset for dashboard will be calculated and cached when it is saved.
	DirectConnectionTip: 'Zetsaw danych dla raportu będzie przeliczany za każdym razem, gdy będzie używany.', // The dataset for report will be calculated every time when it is consumed.
	AddParameter: 'Dodaj parametr', // Add Parameter
	CanNotSaveAlertAboutUseCache: 'Nie można używać trybu \'$t(UseCache)\', gdy zestaw danych ma parametr typu \'$t(UserInput)\'.', // Can not use \'$t(UseCache)\' mode when dataset has \'$t(UserInput)\' type parameter.
	InvalidParameterNameError: 'nazwa parametru może zawierać tylko litery, liczby oraz _. Pierwszy znak nie może być liczbą, a długość powinna znajdować się w przedziale 1-32.', // Parameter name can only contains letter, number and _, the first character can not be a number, and the length should be between 1-32.
	ParameterAlreadyExistsError: 'Parametr "{{parameter}}" już istnieje.', // Parameter "{{parameter}}" already exists.
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
	Organization: 'Organizacja', // organization

	// datasource
	CreateDatasource: 'Utwórz źródło danych', // Create Data Source
	TestConnection: 'Testuj połączenie', // Test Connection
	ConnectError: 'Błąd połączenia', // Connection error
	ConnectSuccess: 'Poprawnie połączono', // Connect successfully.
	Create: 'Utwórz', // Create
	EditDatasource: 'Edytuj źródło danych', // Edit Data Source
	ReconfigDatasource: 'Konfiguruj Źródło Danych', // Reconfigure Data Source
	Update: 'Zaktualizuj', // Update
	Local: 'Lokalnie', // Local
	Embed: 'Osadź', // Embed
	Web: 'Sieć', // Web
	FileSystem: 'System plików', // File System
	Name: 'Nazwa', // Name
	User: 'Użytkownik', // User
	SecurityToken: 'Token zabezpieczeń', // Security Token
	CacheExpiration: 'Wygaśnięcie Cache', // Cache Expiration
	CacheExpirationMode: 'Tryb wygaśnięcia Cache', // Cache Expiration Mode
	Password: 'Hasło', // Password
	FilePassword: 'HasłoPliku', // FilePassword
	Server: 'Serwer', // Server
	Host: 'Host', // Host
	Port: 'Port', // Port
	CommandTimeout: 'Limit czasu polecenia (s)', // Command Timeout(s)
	CommandTimeoutLimitation: 'Limit czasu polecenia musi być wartością typu Integer', // Command timeout must be an integer value
	Database: 'Baza danych', // Database
	Service_Name: 'Nazwa usługi', // Service Name
	Encrypt: 'Szyfruj', // Encrypt
	SIP: 'Zasady wnioskowania Schematu', // Schema Infer Policy
	AllowHiddenSheets: 'Załaduj ukryte arkusze', // Load Hidden Sheets
	AllowDBNull: 'Skonwertuj puste komórki na DBNull', // Convert empty cell to DBNull
	UseAuth: 'Użyj autentykacji', // Use Auth
	XPath: 'XPath', // XPath
	ConnectionString: 'ParmaetryPołączenia', // ConnectionString
	Url: 'Link', // Url
	JsonPath: 'Ścieżka JSON', // Json Path
	JsonHttpMethod: 'Metoda HTTP', // HTTP Method
	JsonHttpPostMethod: 'POST', // POST
	JsonHttpGetMethod: 'GET', // GET
	JsonParameterName: 'Nazwa', // Name
	JsonParameterType: 'Typ parametru', // Parameter Type
	JsonParameterDataType: 'Typ danych', // Data Type
	JsonParameterDefaultValue: 'Domyślna wartość', // Default value
	JsonParameterLabel: 'Parametr', // Parameter
	JsonParameterAdd: 'Dodaj parametr', // Add Parameter
	HttpHeaderKey: 'Key',
	HttpHeaderValue: 'Value',
	HttpHeadersLabel: 'Http Headers',
	AddHttpHeader: 'Add HttpHeader',
	UseHttpHeaders: 'Use Http Headers(Advanced)',
	LineDelimiter: 'Ogranicznik linii', // Line Delimiter
	ColumnDelimiter: 'Ogranicznik kolumn', // Column Delimiter
	CodePage: 'Strona kodu', // Code Page
	AuthMode: 'Tryb autentykacji', // AuthMode
	GrantType: 'GrantType',
	GrantType_password: 'password',
	GrantType_client_credentials: 'client_credentials',
	AutoColumnName: 'Używaj pierwszego wiersza jako nagłówka', // Use First Row as Header
	OAuthTokenEndpoint: 'Punkt końcowy tokenu', // Token Endpoint
	OAuthClientId: 'ID klienta', // Client Id
	OAuthClientSecret: 'Sekret klienta', // Client Secret
	OAuthUserName: 'NazwaUżytkownika', // UserName
	OAuthPassword: 'Hasło', // Password
	OAuthScope: 'Scope',
	SelectFile: 'Wybierz plik...', // Select File...
	SourceType: 'TypŹródła', // SourceType
	UseConfigString: 'Użyj parametrów połączenia (Zaawansowane)', // Use Configuration String(Advanced)
	UseURIParameters: 'Użyj parametrów URI (Zaawansowane)', // Use URI Parameters(Advanced)
	FileReady: '{{file}} jest gotowy do wgrania', // {{file}} is ready to upload
	FileInProcess: 'Wgrywanie {{file}}', // Uploading {{file}}
	FileUploaded: '{{file}} został wgrany', // {{file}} has been uploaded
	FileUploadWithEmptyName: 'Plik został przekazany', // File has been uploaded
	FileError: 'Błąd wgrywania {{file}}', // Upload {{file}} error
	OAuth2: 'OAuth2', // OAuth2
	Basic: 'Podstawowe', // Basic
	None: 'Brak', // None
	ExtractingData: 'PozyskiwanieDanych', // ExtractingData
	ExtractingDataMsg: 'Pozyskiwanie danych z pliku do bazy danych', // Extracting file data to database
	DataExtractionFailed: 'Nie udało się pozyskać danych', // Data extraction failed
	DataSourceCategory_All: 'Wszystko', // All
	DataSourceCategory_RDBMS: 'RDBMS', // RDBMS
	DataSourceCategory_File: 'Plik', // File
	DataSourceCategory_NoSqlDB: 'Baza danych NoSQL', // NoSqlDB
	DataSourceCategory_ODBC: 'ODBC', // ODBC
	DataSourceCategory_Web: 'Sieć', // Web
	CorrectFormatFile: 'Zapisz swój plik w poprawnym formacie', // Please save your file in the correct format
	ExcelCorrectFormatFile: 'Zapisz swój plik Excel 2003 w formacie Excel 2007', // Please save your Excel 2003 File as Excel 2007 file format
	searchPlaceHolder: 'Wprowadź, aby szukać', // Please input to search
	noSearchResultTip: 'brak wyniku', // no result
	loadingDatabases: 'Wczytywanie baz danych', // Loading Databases...
	next: 'Następny', // Next
	back: 'Poprzedni', // Previous
	cancel: 'Anuluj', // Cancel
	workSheet: 'ArkuszRoboczy', // WorkSheet
	renameWorkSheet: 'Nazwa nowego arkusza', // New Sheet Name
	renameColumnName: 'Zmień nazwę', // Rename
	textType: 'Tekst', // Text
	numberType: 'Number', // Number
	datetimeType: 'DateTime', // DateTime
	booleanType: 'Boolean', // Boolean
	selectSheetToImport: 'Wybierz/Zmień nazwę arkuszy', // Select / Rename Sheets
	create_excel_datasource_error1: 'Musisz wybrać co najmniej jeden arkusz', // You must select one sheet at least
	create_excel_datasource_error2: 'Nazwy następujących arkuszy nie powinny zawierać więcej niż 30 znaków:\n{{msg}}', // The following sheet names should be no more than 30 characters:\n{{msg}}
	create_excel_datasource_error3: 'Następujące akursze zawierając zduplikowane lub puste nazwy kolumn, bądź długość nazwy kolumny przekracza 30 znaków. \n{{msg}}', // The following sheets contain duplicate or empty column name, or the length of the column name is more than 30 characters. \n{{msg}}.
	create_excel_datasource_error3_msg_prefix: 'Arkusz', // Sheet
	'reconfigDataSource!name': 'Konfiguruj', // Reconfigure
	'reconfigDataSource!description': 'Konfiguruj ten dokument', // Reconfigure this document

	// Document List
	dlDatasetType: 'Typ zestawu danych', // Dataset Type
	dlDashboardDataset: 'Dla dashboardu', // For Dashboard
	dlReportDataset: 'Dla raportu', // For Report
	dlDataProvider: 'Dostawca danych', // Data Provider
	dlDataSource: 'Źródło danych', // Data Source

	// Errors
	err_10008: 'Pole obliczeniowe "{calculatedField}" odnosi się do nieokreślonego pola "{referredField}".', // Calculated field "{calculatedField}" is referencing an undefined field "{referredField}".
	err_10009: 'Błąd składni w wyrażeniu pola obliczeniowego "{calculatedField}". {message}', // Syntax error found in calculated field expression "{calculatedField}". {message}
	err_10010: 'Pole grupy "{groupField}" jest nieokreślone.', // Group field "{groupField}" is undefined.
	err_10011: 'Pole agregujące "{aggregationField}" odnosi się do nieokreślonego pola "{referredField}".', // Aggregation field "{aggregationField}" is referencing an undefined field "{referredField}".
	err_10012: 'Pole kategorii "{categoryField}" odnosi się do nieokreślonego pola "{referredField}".', // Category field "{categoryField}" is referencing an undefined field "{referredField}".
	err_10013: 'Pole obliczeniowe "{calculatedField}" odnosi się do nieokreślonego parametru "{referredParameter}".', // Calculated field "{calculatedField}" is referencing an undefined parameter "{referredParameter}".
	err_10014: 'Wyrażenie SQL "{sqlExpression}" do tabeli "{table}" odnosi się do nieokreślonego parametru "{referredParameter}".', // Sql expression "{sqlExpression}" on table "{table}" is referencing an undefined parameter "{referredParameter}".
	err_10015: 'Filtr "{filter}" odnosi się do nieokreślonego parametru "{referredParameter}".', // Filter "{filter}" is referencing an undefined parameter "{referredParameter}".
	err_10016: 'Wystąpił błąd podczas działania: {message}', // Runtime error occurred: {message}
	err_10017: 'Filtrowanie z użycium operatora BETWEEN wymaga dwóch parametrów.', // Filter with BETWEEN operator requires 2 parameters.
	err_10018: 'W trybie \'For Dashboard\' CustomSql nie może odnosić się do parametru "{referredParameter}" kontekstu użytkownika.', // In \'For Dashboard\' mode,CustomSql cannot reference a User Context parameter "{referredParameter}".
	err_10019: 'W trybie \'For Dashboard\' pole obliczeniowe "{calculatedField}" nie może odnosić się do parametru "{referredParameter}" kontekstu użytkownika.', // In \'For Dashboard\' mode,Calculated field "{calculatedField}" cannot reference a User Context parameter "{referredParameter}".
	err_10020: 'W trybie \'For Dashboard\' wyrażenie SQL "{sqlExpression}" do tabeli "{table}" nie może odnosić się do parametru "{referredParameter}" kontekstu użytkownika.', // In \'For Dashboard\' mode,Sql expression "{sqlExpression}" on table "{table}" can\'t reference an User Context parameter "{referredParameter}".
	err_10021: 'Przekroczono maksymalny limit kolumn. Wartość limitu: 512.\nAktualna liczba: {currentCount}.', // Exceeded max column\'s count, limit count: 512.\nCurrent count: {currentCount}.
	err_10022: 'Pole obliczeniowe "{calculatedField}" nie może odnosić się do samego siebie', // Calculated field "{calculatedField}" cannot reference itself.
	err_10023: 'Pole obliczeniowe zawiera odwołanie cykliczne', // Calculated field contains cycle reference.
	err_10024: 'Pole w warunku JOIN/UNION jest niespójne i nie może zostać skonwertowane.', // The join/union condition field type is inconsistent and can not be converted.
	err_10025: 'Nieudane pobieranie baz danych. Nie można odnaleźć serwera lub jest niedostępny. Sprawdź swoje ustawienia i upewnij się, że serwer pozwala na połączenia zdalne.', // Get databases failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections.
	err_10026: 'Nieudane pobieranie listy baz danych. Nie można odnaleźć serwera lub jest niedostępny. Sprawdź swoje ustawienia i upewnij się, że serwer pozwala na połączenia zdalne. Jeśli wciąż nie możesz się połączyć, wprowadź nazwę bazy danych/usługi ręcznie.', // Get database list failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections. If connection still failed, please input the database/service name manually.
	err_10027: 'Pobieranie schematu nie powiodło się. Upewnij się, że: \ n1, Twoje ustawienia są prawidłowe. \ N2, Serwer umożliwia połączenia zdalne. \ N3, Źródło danych jest dostępne. \ n4, parametry URI są prawidłowe.', // Get schema failed. Please make sure: \n1, Your settings are valid.\n2, The server allows remote connections.\n3, The data source is available. \n4, The URI parameters are valid.
	err_10028: 'Niestandardowa tabela SQL nie może zawierać zduplikowanej kolumny: "{{column}}"', // Custom SQL table could not contain duplicate column:"{{column}}".
	err_10029: 'Filtr "W" nie może zawierać pustej grupy oraz/lub.', // In filter cannot contain empty and/or group.
	err_10034: 'Wyrażenie SQL odnosi się do niezdefiniowanego parametru "{{referredParameter}}".', // Sql expression is referencing an undefined parameter "{{referredParameter}}".
	err_10035: 'W trybie \'Dla dashboardu\' wyrażenie Sql expression can\'t reference an {{context}} parameter "{{referredParameter}}".', // In \'For Dashboard\' mode,Sql expression can\'t reference an {{context}} parameter "{{referredParameter}}".
	err_10036: 'Następujące powiązane parametry nie zostały znalezione w niestandardowej tabeli SQL: "{{referredParameters}}".', // The following bound parameters are not found in custom Sql table: "{{referredParameters}}".

	// update datasource error
	err_20001: 'Dokument rozszerzenia źródła danych nie został znaleziony', // Datasource extension document not found.
	err_20002: 'Załącznik DataSourceFile nie został znaleziony', // DataSourceFile attachment not found.
	err_20003: 'Nie udało się wyodrębnić źródła danych.', // Datasource extraction failed.
	err_20004: 'Nie masz uprawnień, aby zaktualizować źródło danych.', // You don\'t have permission to update datasource.
	err_20005: 'Dokument źródła danych nie został znaleziony.', // Datasource document not found.
	err_20006: 'Nieprawidłowe ID dokumentu źródła danych.', // Invalid datasource document id
	err_20007: 'Nie można dołączyć danych do nielokalnego pliku źródła danych.', // Unable to append data onto non-local-file datasource.
	err_20008: 'Nie znaleziono prawidłowej definicji schematu w parametrach połączenia źródeł danych.', // No valid schema definition found in datasource connection string.
	err_20009: 'Błąd parametru: Nie udało się powiązać {{parameterName}}', // Parameter error: Failed to bind {{parameterName}}

	err_100001: 'Nieprawidłowy parametr: {name}.', // Invalid parameter: {name}.
	err_100002: 'Błąd wewnętrzny serwera: {message}.', // Internal server error: {message}.
	err_100003: 'Źródło danych "{name}" już istnieje', // Data source "{name}" already exists.
	err_100004: 'Zestaw danych "{name}" już istnieje.', // Dataset "{name}" already exists.
	err_100005: 'Dostawca danych "{name}" nie został znaleziony.', // Data provider "{name}" not found.
	err_100006: 'Źródło danych nie może być puste.',  // Data source name cannot be empty.
	err_100007: 'Dostawca danych nie może być pusty.', // Data provider cannot be empty
	err_100008: 'Parametry połączenia nie mogą być puste.', // Connection string cannot be empty.
	err_100009: 'Ten dokument jest obecnie aktualizowany przez inną operację. Spróbuj później', // This document is being updated by another operation. Please try later.
	err_100010: 'Nie masz uprawnienia, aby utworzyć źródło danych.', // You don\'t have permission to create data source.
	err_100011: 'Nie masz odpowiedniej licencji, aby utworzyć źródło danych.', // You don\'t have sufficient license to create data source.
	err_100012: 'Nieprawidłowy kontekst użytkownika: {claimName}.', // Invalid user context: {claimName}.
	err_100013: 'Nieprawidłowa nazwa dokumentu. Nazwa dokumentu nie może być pusta, a także zawierać zastrzeżonych symboli: < > \\ : ? * / | \" oraz rozpoczynać się od . (kropka) ', // Invalid document name. Document name cannot be empty and please do not use restricted symbols < > \\ : ? * / | \" and do not use . (dot) as the first symbol in the document name.
	err_100014: 'Nie masz wystarczającyh uprawnień do dostępu do źródła danych "{{name}}"', // You have not enough permission to access datasource "{{name}}
	err_100015: 'Nie masz wystarczających uprawnień do dostępu do określonych źródeł danych lub jedno ze źródeł nie istnieje', // You have not enough permission to access referenced datasources, or one or more datasources do not exist.
	err_100016: 'Pole w warunku JOIN/UNION jest niespójne i nie może zostać skonwertowane.', // The join/union condition field type is inconsistent and can not be converted.
	err_100017: '"{{key}}" wartość "{{value}}" na "{{ptype}}" jest nieprawidłową wartością {{dtype}}.', // The "{{key}}" value "{{value}}" on "{{ptype}}" is an invalid {{dtype}} value.
	err_100018: 'Nie znaleziono dokumentu.', // Document not found.
	err_100019: 'Nie masz uprawnień do dostępu do dokumentu.', // You don not have permission to access the document
	err_100020: 'Nieprawidłowy typ dokumentu.', // Wrong document type
	err_100021: 'Nie można połączyć się ze źródłem danych {{name}}.', // Can not connect to datasource {{name}}.
	err_100022: 'Nie masz uprawnień do aktualizacji zestawu danych.', // You don\'t have permission to update the data set.
	err_100023: 'Brak dostępnego pracownika COT.',  // No available COT worker

	err_100018_desc: 'Error trying to resolve datasource "{{ids}}"',

	E_60000: 'Metoda nie jest obsługiwana.', // Method is not supported
	E_60001: 'Określona nazwa zbioru nie jest obsługiwana w metodach serii GetSchema.', // Specified collection name is not supported in GetSchema series methods.
	E_60002: 'Nie można utworzyć komendy przy nieaktywnym połączeniu.', // Cannot create command on closed connection.
	E_60003: 'Nie można uzyskać informacji o schemacie przy nieaktywnym połączeniu.', // Cannot get schema information on closed connection.
	E_60004: 'Nie można odnaleźć tabel okeślonych w wartościach ograniczeń.', // Table(s) specified in restriction values cannot be found.
	E_60005: 'Niepoprawny typ instrukcji SQL.', // Invalid sql statement type.
	E_60006: 'Nie znaleziono poprawnych wierszy danych w źródłe danych.', // No valid data rows found in file datasource.
	E_60007: 'Nie udało się ustawić licencji SpreadServices.', // Failed to set SpreadServices license.
	E_60008: 'Nie udało się otworzyć pliku Excel.', // Failed to open Excel file.
	E_60009: 'Nie znaleziono dostępnych arkuszy w pliku Excel.', // No available sheets found in Excel file.
	E_60010: 'CommandText to null lub jest pusty.', // CommandText is null or empty
	E_60011: 'Nieprawidłowa wartość konfiguracji.', // Invalid config value.
	E_60012: 'Nie można pobrać informacji o tabeli MongoDB.', // Cannot get MongoDB table info.
	E_60013: 'Nie można pobrać informacji o kolumnie tabeli MongoDB.', // Cannot get MongoDB table column info.
	E_60014: 'Nieobsługiwana funkcja agregacji.', // Unsupported aggregation function.
	E_60015: 'Nieobsługiwana funkcja.', // Unsupported function.
	E_60016: 'Nieobsługiwany operator.', // Unsupported operator.
	E_60017: 'Nieoczekiwane słowo kluczowe.', // Unexpected keyword
	E_60018: 'Nie można przekształcić String w liczbę.', // Cannot convert string to number
	E_60019: 'Nieprawidłowe wartości ograniczeń.', // Invalid restriction values.
	E_60020: 'Nie można odnaleźć podtabeli.', // Cannot find sub-table.
	E_60021: 'Nieobsługiwany typ operacji.', // Unsupported operation type.
	E_60022: 'Konfiguracja parametrów połączenia jest wymagana.', // Connection string config section is required.
	E_60023: 'Brakujący parametry.', // Missing parameter(s).
	E_60024: 'Wystąpił błąd sieci podczas pozyskiwania danych zdalnych.', // Network error found when fetching remote data.
	E_60025: 'Nie można załadować schematu z XMLa.', // Cannot load schema from XML string
	E_60026: 'Nieobsługiwany typ wartości parametru.', // Unsupported parameter value type.
	E_60027: 'Nie można skonwertować kwerendy SQL na komendę Salesforce.', // Cannot translate SQL to Salesforce command.
	E_60028: 'Wystąpił błąd podczas wykonywania zapytania. {{PrimitiveSQLError}}', // An error occurred when executing primitive query. {{PrimitiveSQLError}}
	E_60029: 'W Salesforce GROUPBY nie jest obsługiwane, gdy istnieje podzapytanie.', // In Salesforce provider GROUPBY is not supported when there\'s sub - query.
	E_60030: 'W Salesforce tylko operator \' =\' jest obsługiwany w klauzuli JOIN.', // In salesforce provider only operator \' =\' is supported in JOIN clause.
	E_60031: 'W Salesforce ID kolumny jest wymagane po lewej i/lub prawej stronie w warunku JOIN.', // In salesforce provider an Id column is required on left-side and/or right-side in JOIN constraint.
	E_60032: 'Nieobsługiwany typ wartości parametru w Salesforce.', // Unsupported parameter value type in Salesforce provider.
	E_60033: 'Nie można odnaleźć określonej tabeli w Salesforce.', // Cannot find the specified table in Salesforce provider.
	E_60034: 'Nie powinno używać się nazwy schematu tabeli, której połączenie właściciela ma ustawioną konfigurację \'TablePrefix\'.', // Should not use table schema name in command whose owner connection has config \'TablePrefix\' set.
	E_60035: 'Tabela \'{TableName}\' nie została znaleziona.', // Table \'{TableName}\' not found.
	E_60039: 'Nie można pobrać informacji o schemacie.', // Can not get schema information.
	E_60040: 'Brakuje sekcji \'SchemaDefinition\' w parametrach połączenia.', // Section \'SchemaDefinition\' is missing in connection string.
	E_60046: 'Nie można znaleźć pasującego skoroszytu Excela określonego zdefiniowanym schematem.', // Can not find matched Excel sheet specified by defined schema.
	E_60047: 'Liczba kolumn w skoroszycie Excela nie odpowiada liczbie kolumn zdefiniowanej w schemacie.', // Excel sheet columns count does not match the count of columns defined in schema
	E_60048: 'Kolumny skoroszytu Excela nie pasują do tych zdefiniowanych w schemacie.', // Excel sheet columns do not match the ones defined in schema
	E_60100: 'Niewłaściwa ścieżka JSON.', // Incorrect json path.
	E_60101: 'Przekroczono maksymalny limit kolumn. Wartość limitu: 512.', // Exceeded max column\'s count, limit count: 512.
	E_60200: 'Niepusty zestaw wierszy jest wymagany dla inferencji kolumnowego typu danych.', // A non-empty row collection is required for column data type inference.
	E_60201: 'Arkusz Excel nie powinien być pusty', // Excel sheet should not be empty.
	E_60300: 'Kolumna <{{columnName}}> arkusza <{{sheetName}}> nie jest prawidłowym typem <{{targetType}}>', // Column <{{columnName}}> of sheet <{{sheetName}}> is not recognized as valid <{{targetType}}>
	E_50000: 'Spróbuj zarejestrować null SourceLoader.', // Try to register a null SourceLoader.
	E_50001: 'Spróbuj zarejestrować zduplikowanego SourceLoader.', // Try to register a duplicated SourceLoader.
	E_50002: 'Spróbuj odrejestrować null SourceLoader.', // Try to unregister a null SourceLoader.
	E_50003: 'Spróbuj odrejestrować nieistniejące SourceLoader.', // Try to unregister a inexistent SourceLoader.
	E_50004: 'Nie można znaleźć własciwego SourceLoader.', // Can\'t find proper SourceLoader.
	E_70000: 'Nie udało się zdobyć tokena dostępu.', // Failed to acquire access token
	E_70001: 'Błąd sieci.', // Network error.
	E_40001: 'SqlOptimizer nie udało się wykonać pierwontej kwerendy SQL do źródła danych.', // SqlOptimizer failed on executing primitive sql on data source.
	E_40002: 'Nie można odnaleźć określonej tabeli.', // Cannot find the specified table in context.
	E_40003: 'Nie można odnaleźć określonej kolumny \'{ColumnName}\'.', // Cannot find the specified column \'{ColumnName}\' in context.
	E_40004: 'Znaleziono więcej niż jedną pasującą kolumnę.', // Found more than on matched columns in context.
	E_40005: 'Found more than one matched tables in context.',
	E_90001: 'Główne słowo kluczowe nie jest obsługiwane.', // Top keyword not supported.
	E_90002: 'Niepoprawna składnia obok \'{Token}\'.', // Incorrect syntax near \'{Token}\'.
	E_90003: 'Niepoprawna składnia w instrukcji SQL.', // Incorrect syntax in the sql statement.
	E_90004: 'Nieprawidłowa wartość literału.', // Invalid literal value.
	E_90005: 'EPrzewidywano wyrażenie literału.', // Expecting literal expression.
	E_90006: 'Tylko wyrażenia kolumnowe są dozwolone w klauzuli ORDERBY.', // Only column expressions are allowed in ORDERBY clause.
	E_90007: 'Znak cytowania jest wymagany w odniesieniu do obiektu z nazwą będącą słowem kluczowym.', // Quotation mark required on object with a keyword-name.
	E_90008: 'Funkcja nie jest obsługiwana.', // Function not supported.
	E_90009: 'Niepasująca definicja parametrów funkcji.', // Function parameters definition not matched.'
	E_90010: 'Parametr tekstowy nie jest rozpoznawaną wartością liczbową.', // Parameter text is not a recognizable enumeration value.
	E_90011: 'Tylko wyrażenia kolumnowe są dozwolone w klauzuli GROUPBY', // Only column expressions are allowed in GROUPBY clause.
	E_90012: 'Błąd SqlParser.', // SqlParser visitor error.
	E_90013: 'Tylko pojedyncze wyrażenie jest dozwolone.', // Only single expression is allowed.
	E_90014: 'Każde wyrażenie grupowania musi zawierać co najmniej jedną kolumnę, która nie jest odnośnikiem zewnętrznym.', // Each GROUP BY expression must contain at least one column that is not an outer reference.
	E_90015: 'Nie można użyć agregatu ani podzapytania w wyrażeniu klauzuli GROUP BY.', // Cannot use an aggregate or a subquery in an expression used for the group by list of a GROUP BY clause.
	E_80001: 'Nie można znaleźć określonej kolumny \'{TargetColumnName}\'.', // Cannot find the specified column \'{TargetColumnName}\'.
	E_80002: 'Znaleziono zduplikowane nazwy kolumn.', // Duplicated column names found.
	E_80003: 'Funkcje agregujące nie mogą być użyte w klauzuli GROUPBY.', // Aggregation functions cannot be used in GROUPBY clause
	E_80004: 'Wyrażenia zwracając wiele wartości nie mogą być użyte jako klucze GROUPBY.', // Expressions returning multiple values cannot be used as GroupBy keys.
	E_80005: 'Indeks elementu wartości krotki poza zakresem.', // Value tuple item index out of range.
	E_80006: 'Przekroczono maksymalną liczbę elementów krotki.', // Exceeded max tuple item count.
	E_80007: 'Wyrażenie warunku JOIN musi być BinaryOperationExpression, zwracającym wartość boolean.', // JOIN constraint expression must be a BinaryOperationExpression which returns a boolean value.
	E_80008: 'TableContext nie może obsłużyć klauzuli.', // TableContext cannot support clause.
	E_80009: 'Wyrażenie kolumnowe wybrane w SELECT musi zwracać pojedynczą wartość.', // Column expression being selected in SELECT clause must return single value.
	E_80010: 'Nie można użyć wyrażeń kolumnowych i wyrażeń agregujących jednocześnie w klauzuli SELECT.', // Cannot use column-expressions and aggregation-expressions together in SELECT clause.
	E_80011: 'Nieprzewidziany typ wejścia CompiledFunc.', // Unexpected CompiledFunc input type.
	E_80012: 'Wyrażenie zwracające wiele wartości nie może zostać użyte w klauzuli HAVING.', // Expressions returning multiple values cannot be used in HAVING clause.
	E_80013: 'Wyrażenie w klauzuli HAVING musi zwrócić wartość boolean.', // Expressions in HAVING clause must return a boolean value.
	E_80014: 'Określony typ JOIN nie jest obsługiwany.', // Specified JOIN type not supported.
	E_80015: 'Funkcje agregujące nie mogą zostać użyte w warunku klauzuli JOIN.', // Aggregation functions cannot be used in constraint of JOIN clause.
	E_80016: 'OFFSET nie może być mniejszy niż zero w klauzuli LIMIT.', // Offset cannot be less than zero in LIMIT clause.
	E_80017: 'Limit nie może być mniejszy niż zero w klauzuli LIMIT.', // Limit cannot be less than zero in LIMIT clause.
	E_80018: 'Funkcje agregujące nie mogą zostać użyte w klauzuli ORDERBY.', // Aggregation functions cannot be used in ORDERBY clause.
	E_80019: 'Nieobsługiwany kierunek sortowania w ORDERBY.', // Unsupported ORDERBY direction.
	E_80020: 'Tabele będące częścią UNION muszą mieć tę samą liczbę kolumn.', // Tables participating UNION must have same count of each one\'s column.
	E_80021: 'Wyrażenie w klauzuli WHERE musi zwracać wartość boolean.', // Expressions in WHERE clause must return a boolean value.
	E_80022: 'Funkcje agregujące nie mogą zostać użyte w klauzuli WHERE.', // Aggregation functions cannot be used in WHERE clause.
	E_80023: 'Znaleziono zduplikowane nazwy parametrów.', // Duplicated parameter names found.
	E_80024: 'Nie można znaleźć określonego parametru.', // Cannot find the specified parameter
	E_80025: 'Błąd wewnętrznego egzekutora. Grupa kolumn zawiera kolumny należące do innej grupy.', // Internal executor error. A column-group contains column(s) belonged to another group.
	E_80026: 'Przekroczono maksymalny limit kolumn. Wartość limitu: 512.', // Exceeded max column\'s count, limit count: 512.,
	E_80027: 'Wybrane wyrażenie kolumnowe odnosi się do kolumn, które nie są kluczem grupowania kolumn w klauzuli GROUP BY.', // Selected column expression is referencing columns which are not the group-by key columns in GROUPBY clause.'
	E_80028: 'Nie można znaleźć określonej tabeli.', // Cannot find the specified table.
	E_80029: 'Błąd wewnętrznego egzekutora. Metoda lub kod nie powinny zostać wykonane.', // Internal executor error. Method or code should not be reached
	E_80030: 'Nie można odnaleźć tabeli zawierającej określoną kolumnę.', // Cannot identify owner table of the specified column
	E_80031: 'Wyrażenia wewnątrz funkcji powinny zwracać pojedynczą wartość.', // Expressions inside function should return single value.
	E_80032: 'Określona funkcja nie jest obsługiwana w MemoryExecutor.', // Specified function not supported in MemoryExecutor.
	E_80033: 'Błąd przy dopasowaniu podpisu funkcji.', // Failed on matching function signature.
	E_80034: 'Funkcja nie może akceptować wektorów jako parametr.', // Function cannot accept array values as parameter.
	E_80035: 'Funkcje agregujące nie mogą zostać zagnieżdżone.', // Aggregation functions cannot be nested.
	E_80036: 'Nieprawidłowe typy danych argumentów w funkcji agregującej.', // Invalid operand data types in aggregation function.
	E_80037: 'Słowo kluczowe nie jest obsługiwane w funkcji agregującej.', // Keyword not supported in aggregation function.
	E_80038: 'Funkcja nie może akceptować wewnętrznych funkcji agregujących jako parametr.', // Function cannot accept inner aggregation functions as parameter.
	E_80039: 'Wyrażenie listy może przyjmować tylko zestaw pojedynczych wartości lub wektor', // List expression can only take a set of single-value expressions or an array-value expressions as content.
	E_80040: 'Nieprawidłowe typy danych argumentów w wyrażeniu operacji.', // Invalid operand data type in operation expression.
	E_80041: 'Nieprawidłowy operator w wyrażeniu operacji.', // Invalid operator in operation expression.
	E_80042: 'Nieobsługiwany operator w wyrażeniu operacji.', // Unsupported operator in operation expression.
	E_80043: 'Wymagane wyrażenie o wartości Boolean.', // Boolean-value expression required.
	E_80044: 'Nie można użyć wyrażenia wielowartościowego jako lewa strona wyrażenia w BinaryOperation.', // Cannot use a multi-value expression as left-side expression in a BinaryOperation.
	E_80045: 'W wyrażeniu IN/NOTIN lewa strona wyrażenia musi zwracać pojedynczą wartość.', // In IN/NOTIN expression left-side expression must return single value.
	E_80046: 'W wyrażeniu IN/NOTIN prawa strona wyrażenia musi zwracać zbiór wartości.', // In IN/NOTIN expression right-side expression must return a value collection."
	E_80047: 'Niekompatybilne typy wyjścia wyrażenia znaleziono w BinaryOperation.', // Incompatible expression input types found in BinaryOperation.
	E_80048: 'Kontekst niezarejestrowany.', // Context not registered.
	E_80049: 'Nazwa parametru to null lub jest pusta.', // Parameter name is null or empty.
	E_80050: 'Niepradłowy prefix nazwy parametru lub zły format.', // Wrong parameter name prefix or bad format.
	E_80051: 'Parametry funkcji są niepoprawne.', // Function parameters count incorrect.
	E_80052: 'Egzekutor pamięci SQL akceptuje tylko instrukcję SELECT.', // Memory sql executor accepts only SELECT statement.
	E_80053: 'Podzapytanie wymaga aliasu.', // Sub-query expression requires an Alias.
	E_80054: 'Zmiana nazwy nie jest obsługiwana w określonym kontekście tabeli.', // Renaming is not supported on specified table context.
	E_80055: 'Nie można odnaleźć określonej tabeli \'{TargetTableName}\' w tabelach wejścia MemoryExecutor.', // Cannot find the specified table \'{TargetTableName}\' in MemoryExecutor input tables.
	E_80056: 'Ten typ wartości nie jest obsługiwany w agregacjach.', // Type of value is not supported in aggregation.
	E_80057: 'Niepoprawna konwersja typu wartości.', // Invalid value type conversion.
	E_80058: 'W funkcji IIF zarówno Prawda, jak i Fałsz muszą zwracać wartości o podobnych typach.', // In IIF function the True part expression and the False part expression must return values of same or similar types.
	E_80059: 'Nie odnaleziono właściwych konwerterów typów danych pomiędzy tymi typami.', // No proper data type converters found between types.
	E_80060: 'Nie można zastosować operacji matematycznej pomiędzy wartościami o tym typie.', // Cannot apply math operation between values of the specified types.
	E_80061: 'Nie można skonwertować wartości do określoneego typu wartości.', // Cannot convert value to the specified enumeration type.
	E_80062: 'Nie można skonwertować wartości null do typu wartości', // Cannot convert null value to a value type.
	E_80063: 'Funkcja wymaga parametru typu Array.', // Function requires an Array parameter.
	E_80064: 'Nieobsługiwana wartość LIKE/NOTLIKE.', // Unsupported LIKE/NOTLIKE value.
	E_80065: 'Nie udało się zwolnić wewnętrznych zasobów SourceTable\'s.', // Failed to dispose SourceTable\'s inner resources.

	err_DataSourceAccessDenied: 'Nie masz uprawnień do dostępu do źródła danych. \nNazwa źródła danych: {{datasourceName}}.', // You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.
	err_DataSourceNotFound: 'Specified datasource document {datasourceId} is not found.',
	err_DataSourceIntegrityCheck: 'Błąd sprawdzania integralności źródła danych o ID {{documentId}}', // Data source with id {{documentId}} integrity check error.
	err_UserNotInOrgnization: 'Tego użytkownika nie ma w żadnej organizacji. Sprawdź parametr "{{propertyName}}" z kontekstem organizacji.', // Current user is not in any orgnization. Please check parameter "{{propertyName}}" with orgnization context.

	// data source append data
	AppendData: 'Dołącz dane', // Append Data
	AppendSource: 'Źródło', // Source
	AppendImport: 'Dodać', // Import
	AppendDataSuccess: 'Dołączanie danych powiodło się', // Append Data Success

	// fields format
	FieldFormat_General: 'Ogólny', // General
	FieldFormat_Number: 'Liczbowy', // Number
	FieldFormat_Currency_USD: 'Waluta ($)', // Currency ($)
	FieldFormat_Currency_EUR: 'Waluta (€)', // Currency (€)
	FieldFormat_Currency_GBP: 'Waluta (£)', // Currency (£)
	FieldFormat_Currency_JPY: 'Waluta (¥)', // Currency (¥)
	FieldFormat_ShortDate: 'Data krótka ({{date}})', // Short Date ({{date}})
	FieldFormat_LongDate: 'Data długa ({{date}})', // Long Date ({{date}})
	FieldFormat_ShortTime: 'Czas krótki ({{time}})', // Short Time ({{time}})
	FieldFormat_LongTime: 'Czas długi ({{time}})', // Long Time ({{time}})
	FieldFormat_Percentage: 'Procentowy (%)', // Percentage (%)
	FieldFormat_Scientific: 'Naukowy ({{number}})', // Scientific ({{number}})

	// dataSourceDisplayName
	'DataSourceDisplayName!Oracle': 'Oracle',
	'DataSourceDisplayName!SqlServer': 'SQL Server',
	'DataSourceDisplayName!MySql': 'Mysql',
	'DataSourceDisplayName!Postgres': 'Postgres',
	'DataSourceDisplayName!Snowflake': 'Snowflake',
	'DataSourceDisplayName!SQLite': 'SQLite',
	'DataSourceDisplayName!Excel': 'Excel',
	'DataSourceDisplayName!Json': 'JSON', // Json
	'DataSourceDisplayName!CSV': 'CSV',
	'DataSourceDisplayName!Xml': 'XML', // Xml
	'DataSourceDisplayName!MongoDB': 'MongoDB',
	'DataSourceDisplayName!ODBC': 'ODBC',
	'DataSourceDisplayName!OData': 'OData',

	// dataset manager error message
	'err_3000': 'The calculation failed due to exceptions or the calculation was canceled by administrator.'
};
