
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
	PleaseInputName: 'Wprowadź nazwę zestawu danych', // Please input dataset name.
	DatasetNameError: 'Nazwa zestawu danych jest nieprawidłowa. Nie używaj ograniczonych symboli < > \ : ? * / | " oraz nie używaj . (kropka) jako pierwszego symbolu w nazwie', // The dataset name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the dataset name.
	DatasetNameOnlySpacesError: 'Nazwa zestawu danych jest nieprawidłowa. Nie używaj samych spacji jako nazwy.', // The dataset name is invalid. Please do not use spaces only as dataset name.
	DatasourceNameError: 'Nazwa źródła danych jest nieprawidłowa. Nie używaj ograniczonych symboli < > \ : ? * / | " oraz nie używaj . (kropka) jako pierwszego symbolu w nazwie', // The datasource name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the datasource name.
	NewDataset: 'Nowy zestaw danych', // New Dataset
	TableName: 'Nazwa tabeli', // TableName
	DatasetDesigner: 'Kreator zestawu danych', // Dataset Designer
	Untitled: 'Brak tytułu', // Untitled
	Categories: 'Kategorie', // Categories
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
	reloadDCSParamsComment: 'Adapt datasource parameters',
	reloadDSCParams: 'Adapt Datasource Parameters',
	reloadDCSParamsSuccess: 'Success to adapt datasource parameters.',
	reloadDSCParamsMessage: 'The datasource parameters has changed and been adapted, whether to save the document immediately and refresh the COT?',
	AutoSaveSuccess: 'The dataset was successfully saved automatically',
	AutoSaveComment: 'Auto save',

	// designer mode modal
	SelectCreateMode: 'Wybierz tryb towrzenia zestawu danych', // Please select create dataset mode
	VisualDesigner: 'Visual Designer', // Visual Designer
	SQLDesigner: 'SQL Designer', // SQL Designer
	Confirmation: 'Potwierdzenie', // Confirmation
	CloseDatasetDesignerConfirm: 'Czy chcesz opuścić kreator zestawu danych i odrzucić zmiany?', // Do you want to leave dataset designer and discard the changes?
	ChangeUseCacheConfirm: 'In cached dataset, the followings that are not supported will be discarded, Are you sure to switch?',
	DeleteFieldConfirm: 'Czy chcesz usunąć to {{fieldType}} pole ({{fieldName}})?', // Do you want to delete this {{fieldType}} Field({{fieldName}})?
	DeleteAllInvalidField: 'Wyczyść wszystkie nieprawidłowe pola', // Clear all the invalid fields
	DeleteAllInvalidFieldsConfirm: 'Czy chcesz wyczyścić wszystkie nieprawidłowe pola?', // Do you want to clear all the invalid fields?
	IncrementalUpdateSettingLostConfirm: 'Czy chcesz usunąć ustawienie aktualizacji przyrostowej?', // Do you want to remove the incremental update setting?
	BinaryToImageConfirm: 'Obsługuj tylko dane obrazu, kontynuować?', // Only support the image data, continue?
	CreateDataSetIframeTitle: 'Utwórz zestaw danych', // Create DataSet
	EditDataSetIframeTitle: 'Edytuj zestaw danych', // Edit DataSet
	CreateDataSourceIframeTitle: 'Utwórz źródło danych', // Create DataSource
	EditDataSourceIframeTitle: 'Edytuj źródło danych', // Edit DataSource
	RevisionCheckTitle: 'Update the version of the relevant reports',
	RefRevisionUpdateWarning: 'To zajmie trochę czasu i istnieje ryzyko, że operacja może spowodować uszkodzenie dokumentu, do którego odnosi się odniesienie.',
	UpdateFailed: 'Nie udało się zaktualizować wersji zależnej.',
	UpdateSuccess: 'Uaktualnienie wersji zależnej powiodło się.',
	DocumentNotFound: 'Obecny dokument nie został znaleziony.',
	DocumentBeReferencedMessage: 'Do tych dokumentów odnosi się inny dokument.',
	ReferencedDocuments: 'Dokumenty zaskarżone:',

	// choose dataset type
	ChooseDatasetTypeTitle: 'Wybierz typ zestawu danych', // Please select dataset type
	ChooseReportDataset: 'Direct Dataset',
	ChooseDashboardDataset: 'Cached Dataset',
	IntroduceReport: 'The direct dataset will be calculated every time when it is consumed.',
	IntroduceDashboard: 'The cached dataset will be calculated and cached when it is saved.',

	// data type
	Number: 'Number',
	Integer: 'Integer',
	Float: 'Float',
	String: 'String',
	DateTime: 'DateTime',
	Date: 'Date',
	Boolean: 'Boolean',
	Guid: 'GUID', // Guid
	Binary: 'Binary',
	Unknown: 'Nieobsługiwany', // Unsupported

	// tabs
	Relationships: 'Relacje', // Relationships
	Fields: 'Pola', // Fields
	Filters: 'Filtry', // Filters
	CommonFilters: 'Filtry', // Filters
	WebURIFilters: 'Filtry sieciowe URI', // Web URI Filters
	// Parameters: 'Parametrów', // Parameters
	Options: 'Opcje', // Options
	Field: 'Pole', // Field
	DataType: 'TypDanych', // DataType
	Multivalue: 'Multiwartość', // Multivalue

	// relationships tab
	DataSource: 'Źródło Danych', // Data Source
	DataSources: 'Źródła Danych', // Data Sources
	CreateDatasetTip: 'Kliknij "Źródło danych", aby dodać źródło danych', // Click "Data Source" to add data source
	AddCustomSqlTable: 'Dodaj własną tabelę SQL', // Add Custom SQL Table
	Preview: 'Podgląd', // Preview
	AddNewDataSource: 'Dodano nowe źródło danych', // Add New Data Source
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
	ConfirmRemoveDataSource: 'W zbiorze danych używane jest {{datasource}}. Czy na pewno chcesz usunąć?', // {{datasource}} is being used in the dataset, are you sure to remove?
	CustomTableCanNotRemove: '{{datasource}} jest używane w zestawie danych i nie może zostać usunięte w tym momencie', // {{datasource}} is being used in the dataset and cannot be removed at the moment.
	CustomTableCanNotEdit: '{{datasource}} jest używane w zestawie danych i nie może zostać zmodyfikowane w tym momencie', // {{datasource}} is being used in the dataset and cannot be modified at the moment.
	ConfirmEditCustomTable: 'W zbiorze danych używane jest {{datasource}}. Czy na pewno chcesz edytować?', // {{datasource}} is being used in the dataset, are you sure to edit?
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
	ReplaceTable: 'Zastąp tabelę', // Replace Table
	ConfirmReplace: 'Czy potwierdzasz, że chcesz zamienić {{source}} na {{target}}?', // Confirm to replace {{source}} with {{target}}?
	GenerateAliasSqlDescription: 'Genereuj alias według MS_Description', // Generate alias by MS_Description
	GenerateAliasPostgreDescription: 'Generuj alias według Komentarza', // Generate alias by Comment
	GenerateAliasDescriptionOrMappingConfig: 'Wygeneruj alias według opisu lub konfiguracji odwzorowania źródła danych', // Generate alias by description or datasource mapping configuration
	NoSchema: '(Brak schematu)', // (No Schema)

	// custome sql table
	ChooseDataConnection: 'Wybierz połączenie danych', // Choose Data Connection
	SQLCommand: 'Zapytanie SQL', // SQL Command
	SameNameMsg: 'Tabela o nazwie "{{name}}" już istnieje.', // A table named "{{name}}" already exists.
	UndefinedParameter: 'Sql zawiera niezdefiniowany parametr: {{parameter}}. Kliknij przycisk „Parametry”, aby go wygenerować i skonfigurować.', // The Sql contains undefined parameter: {{parameter}}. Please click the "Parameters" button to generate and configure it.
	InvalidParameter: 'The Sql contains invalid parameter:{{parameter}}. For cached dataset, the parameter type should be constant in the custom sql table.',
	CaseNotMatchedParameters: 'Sql zawiera niedopasowany parametr: {{parameter}}, wielkość liter musi być odpowiednio dopasowana.', // The Sql contains not matched parameter: {{parameter}}, the case must match sensitively.
	InvalidSql: 'Błąd SQL, nieprawidłowy parametr {{parameter}}', // Sql Error, invalid parameter: {{parameter}}
	QueryType: 'Zawartość zapytania', // QueryType
	QueryType_Text: 'Tekst', // Text
	QueryType_StoredProcedure: 'Procedura składowana', // Stored procedure
	QueryType_NativeQuery: 'Zapytanie Natywne', // Native Query
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
	CustomTableParameterNotFound: 'Bieżąca niestandardowa tabela Sql jest uszkodzona, nie znaleziono następujących powiązanych parametrów: {{invalidParametersName}}.', // The current custom Sql table is corrupted, the following bound parameters are not found: {{invalidParametersName}}.
	ProcedureNotSupported: 'Procedura "{{name}}" nie jest obsługiwana lub nie została znaleziona.', // The procedure "{{name}}" is not supported or not found.
	NoAvailableProcedures: 'Brak dostępnych procedur', // No available procedures
	NoItems: 'Brak przedmiotów', // No Items
	SelectNewProcedure: 'Wybierz procedurę', // Please select a procedure

	// fields tab
	Detail: 'Szczegóły', // Detail
	GroupBy: 'Grupowanie', // Group By
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
	Calculated: 'Obliczony', // Calculated
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
	ClickPlugButtonToAdd: 'Click "+" button to add calculated field.',
	FieldDetailTitle: 'W tym trybie możesz wybrać i modyfikować pola używane jako wyjście', // In this mode, you could select and modify some fields to used as output
	FieldGroupTitle: 'W tym trybie możesz grupować pola i jednocześnie wykonywać agregacje', // In this mode, you could group some field and do the aggregation same time
	FieldColumnLabel: 'Pole', // Field
	FieldDisplayLabel: 'Wyjście', // Output
	DataVizAIHintsLabel: 'Data Category', // Data Category
	FieldDatatypeLabel: 'Typ', // Type
	FieldTargetDataTypeLabel: 'Docelowy typ', // Target Type
	FieldAliasLabel: 'Alias', // Alias
	FieldDesLabel: 'Opis', // Description
	FieldExpression: 'Wyrażenie', // Expression
	ExpressionIsEmptyMsg: 'Wyrażenie nie może być puste', // Expression could not be empty
	ExpressionContainUndefinedParameter: 'The expression contains undefined parameter: {{parameter}}. Please click the "Parameters" button to generate and configure it.',
	ExpressionContainInvalidParameter: 'The expression contains invalid parameter: {{parameter}}. For cached dataset, the parameter type should be constant in the expression.',
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
	CreateFieldSuccessfully: 'Field \'{{fieldName}}\' created successfully',

	// Dataset Data Viz AI Hint types
	Currency: 'Waluta',
	ImageURL: 'Obrazu URL',
	ImageBinary: 'Obraz Binarny',
	GeoRegion: 'Geografia (Region)',
	GeoLatitude: 'Geografia (Szerokość)',
	GeoLongitude: 'Geografia (Długość geograficzna)',

	// filters tab
	MoveUp: 'W górę', // Move Up
	MoveDown: 'W dół', // Move Down
	ValueType: 'Typ parametru', // Parameter Type
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

	// parameters tab
	ConnectDbType: 'Podłącz typ bazy danych', // Connect Database Type
	ConnectMode: 'Typ bazy danych:', // Dataset Type:
	DirectConnection: 'Direct Dataset',
	UseCache: 'Cached Dataset',
	Parameter: 'Parametr', // Parameter
	DataModelParameter: 'Parametr', // Parameter
	DatasourceParameter: 'Parametr źródła danych', // Datasource Parameter
	ContextField: 'Pole kontekstu', // Context Field
	DefaultValue: 'Domyślna wartość', // DefaultValue
	UserContext: 'Kontekst użytkownika', // User Context
	OrganizationContext: 'Dane preferencji organizacji', // Organization Context
	Source: 'źródło danych', // Data Source
	SetPreviewValue: 'Ustaw parametr podglądu', // Set Preview Parameter
	ParameterType: 'Typ parametru', // Parameter Type
	UserInput: 'Dane wejściowe użytkownika', // User Input
	UseCacheTip: 'The cached dataset will be calculated and cached when it is saved.',
	DirectConnectionTip: 'The direct dataset will be calculated every time when it is consumed.',
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

	// options tab
	IncrementalUpdating: 'Aktualizacja przyrostowa', // Incremental Update

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
	FilePassword: 'Hasło Pliku', // FilePassword
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
	HttpHeaderKey: 'Klucz', // Key
	HttpHeaderValue: 'Wartość', // Value
	HttpHeadersLabel: 'Nagłówki HTTP', // Http Headers
	AddHttpHeader: 'Dodaj nagłówek HTTP', // Add HttpHeader
	UseHttpHeaders: 'Użyj nagłówków HTTP (zaawansowane)', // Use Http Headers(Advanced)
	LineDelimiter: 'Ogranicznik linii', // Line Delimiter
	ColumnDelimiter: 'Ogranicznik kolumn', // Column Delimiter
	CodePage: 'Strona kodu', // Code Page
	AuthMode: 'Tryb autentykacji', // AuthMode
	GrantType: 'Typ udzielenia', // GrantType
	GrantType_password: 'Hasło', // password
	GrantType_client_credentials: 'poświadczenia_klienta', // client_credentials
	AutoColumnName: 'Używaj pierwszego wiersza jako nagłówka', // Use First Row as Header
	OAuthTokenEndpoint: 'Punkt końcowy tokenu', // Token Endpoint
	OAuthClientId: 'ID klienta', // Client Id
	OAuthClientSecret: 'Sekret klienta', // Client Secret
	OAuthUserName: 'NazwaUżytkownika', // UserName
	OAuthPassword: 'Hasło', // Password
	OAuthScope: 'Zakres', // Scope
	SelectFile: 'Wybierz plik...', // Select File...
	SourceType: 'Typ Źródła', // SourceType
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
	workSheet: 'Arkusz Roboczy', // WorkSheet
	renameWorkSheet: 'Nazwa nowego arkusza', // New Sheet Name
	renameColumnName: 'Zmień nazwę', // Rename
	textType: 'Tekst', // Text
	numberType: 'Number', // Number
	datetimeType: 'DateTime', // DateTime
	booleanType: 'Boolean', // Boolean
	dateType: 'Date', // Date
	selectSheetToImport: 'Wybierz/Zmień nazwę arkuszy', // Select / Rename Sheets
	create_excel_datasource_error1: 'Musisz wybrać co najmniej jeden arkusz', // You must select one sheet at least
	create_excel_datasource_error2: 'Nazwy następujących arkuszy nie powinny zawierać więcej niż 30 znaków:\n{{msg}}', // The following sheet names should be no more than 30 characters:\n{{msg}}
	create_excel_datasource_error3: 'Następujące akursze zawierając zduplikowane lub puste nazwy kolumn, bądź długość nazwy kolumny przekracza 30 znaków. \n{{msg}}', // The following sheets contain duplicate or empty column name, or the length of the column name is more than 30 characters. \n{{msg}}.
	create_excel_datasource_error3_msg_prefix: 'Arkusz', // Sheet
	'reconfigDataSource!name': 'Konfiguruj', // Reconfigure
	'reconfigDataSource!description': 'Konfiguruj ten dokument', // Reconfigure this document

	// Document List
	dlDatasetType: 'Typ zestawu danych', // Dataset Type
	dlDashboardDataset: 'Cached Dataset',
	dlReportDataset: 'Direct Dataset',
	dlDataProvider: 'Dostawca danych', // Data Provider
	dlDataSource: 'Źródło Danych', // Data Source

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
	err_10018: 'In \'Cached Dataset\' mode,CustomSql cannot reference a User Context parameter "{referredParameter}".',
	err_10019: 'In \'Cached Dataset\' mode,Calculated field "{calculatedField}" cannot reference a User Context parameter "{referredParameter}".',
	err_10020: 'In \'Cached Dataset\' mode,Sql expression "{sqlExpression}" on table "{table}" can\'t reference an User Context parameter "{referredParameter}".',
	err_10021: 'Przekroczono maksymalny limit kolumn. Wartość limitu: 512.\nAktualna liczba: {currentCount}.', // Exceeded max column\'s count, limit count: 512.\nCurrent count: {currentCount}.
	err_10022: 'Pole obliczeniowe "{calculatedField}" nie może odnosić się do samego siebie', // Calculated field "{calculatedField}" cannot reference itself.
	err_10023: 'Pole obliczeniowe zawiera odwołanie cykliczne', // Calculated field contains cycle reference.
	err_10024: 'Pole w warunku JOIN/UNION jest niespójne i nie może zostać skonwertowane.', // The join/union condition field type is inconsistent and can not be converted.
	err_10025: 'Nieudane pobieranie baz danych. Nie można odnaleźć serwera lub jest niedostępny. Sprawdź swoje ustawienia i upewnij się, że serwer pozwala na połączenia zdalne.', // Get databases failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections.
	err_10026: 'Nieudane pobieranie listy baz danych. Nie można odnaleźć serwera lub jest niedostępny. Sprawdź swoje ustawienia i upewnij się, że serwer pozwala na połączenia zdalne. Jeśli wciąż nie możesz się połączyć, wprowadź nazwę bazy danych/usługi ręcznie.', // Get database list failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections. If connection still failed, please input the database/service name manually.
	err_10027: 'Pobieranie schematu nie powiodło się. Upewnij się, że: \ n1, Twoje ustawienia są prawidłowe. \ N2, Serwer umożliwia połączenia zdalne. \ N3, Źródło danych jest dostępne. \ n4, parametry URI są prawidłowe.', // Get schema failed. Please make sure: \n1, Your settings are valid.\n2, The server allows remote connections.\n3, The data source is available. \n4, The URI parameters are valid.
	err_10028: 'Niestandardowa tabela SQL nie może zawierać zduplikowanej kolumny: "{{column}}"', // Custom SQL table could not contain duplicate column:"{{column}}".
	err_10029: 'Filtr "W" nie może zawierać pustej grupy oraz/lub.', // In filter cannot contain empty and/or group.
	err_10030: 'The model fields duplicated',
	err_10034: 'Wyrażenie SQL odnosi się do niezdefiniowanego parametru "{{referredParameter}}".', // Sql expression is referencing an undefined parameter "{{referredParameter}}".
	err_10035: 'In \'Cached Dataset\' mode,Sql expression can\'t reference an {{context}} parameter "{{referredParameter}}".',
	err_10036: 'Następujące powiązane parametry nie zostały znalezione w niestandardowej tabeli SQL: "{{referredParameters}}".', // The following bound parameters are not found in custom Sql table: "{{referredParameters}}".
	err_10037: '{{option}} option cannot be empty.',

	err_40001: 'Wiele źródeł danych nie jest obsługiwanych w przypadku aktualizacji przyrostowych.', // MultiDatasource is not supported in incremental update.
	err_40002: 'Niestandardowa tabela SQL nie jest obsługiwana w przypadku aktualizacji przyrostowej.', // Custom SQL table is not supported in incremental update.
	err_40003: 'Pola grupowe nie mogą być używane w aktualizacji przyrostowej.', // Group fields is not allowed to use in incremental update.
	err_40004: 'Pola kategorii nie mogą być używane w aktualizacji przyrostowej.', // Category fields is not allowed to use in incremental update.
	err_40005: 'Pole aktualizacji przyrostowej nie zawiera pól.', // Incremental update field does not contain in fields.
	err_40006: 'Ustawienia aktualizacji przyrostowej są puste.', // Incremental update settings is empty.

	// update datasource error
	err_20001: 'Dokument rozszerzenia źródła danych nie został znaleziony', // Datasource extension document not found.
	err_20002: 'Załącznik DataSourceFile nie został znaleziony', // DataSourceFile attachment not found.
	err_20003: 'Nie udało się wyodrębnić źródła danych.', // Datasource extraction failed.
	err_20004: 'Nie masz uprawnień, aby zaktualizować źródło danych.', // You don\'t have permission to update datasource.
	err_20005: 'Dokument źródła danych nie został znaleziony.', // Datasource document not found.
	err_20006: 'Nie znaleziono dokumentu.', // Document not found.
	err_20007: 'Nie można dołączyć danych do nielokalnego pliku źródła danych.', // Unable to append data onto non-local-file datasource.
	err_20008: 'Nie znaleziono prawidłowej definicji schematu w parametrach połączenia źródeł danych.', // No valid schema definition found in datasource connection string.
	err_20009: 'Błąd parametru: Nie udało się powiązać {{parameterName}}', // Parameter error: Failed to bind {{parameterName}}
	err_21001: 'Nieprawidłowe ID dokumentu źródła danych.', // Invalid datasource document id

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
	err_100030: 'Parametry połączenia zamapowanego źródła danych wykorzystały pole kontekstu do mapowania nazw, a schemat źródła danych nie jest zgodny ze schematem mapowania nazw.', // The mapped datasource connection string has used the context field for name mapping, and the datasource schema does not match the name mapping schema.
	err_100032: 'Nieznana baza danych {{databaseName}}.', // Unknown database {{databaseName}}.
	err_100033: 'Opcja bazy danych nie może być pusta.', // Database option cannot be empty.
	err_100034: 'Pobieranie schematu nie powiodło się. Upewnij się, że: \ n1, Twoje ustawienia są prawidłowe. \ N2, Serwer umożliwia połączenia zdalne. \ N3, Źródło danych jest dostępne. \ n4, parametry URI są prawidłowe.', // Get schema failed. Please make sure: \n1, Your settings are valid.\n2, The server allows remote connections.\n3, The data source is available. \n4, The URI parameters are valid.

	err_100018_desc: 'Błąd podczas próby rozwiązania źródła danych „{{ids}}”', // Error trying to resolve datasource "{{ids}}"

	err_DataSourceAccessDenied: 'Nie masz uprawnień do dostępu do źródła danych. \nNazwa źródła danych: {{datasourceName}}.', // You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.
	err_DataSourceNotFound: 'Nie znaleziono określonego dokumentu źródła danych „{{datasourceId}}”.', // Specified datasource document "{{datasourceId}}" is not found.
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

	'DataSourceDisplayName!SparkSQL': 'SparkSQL',
	'DataSourceDisplayName!Hive': 'Hive',
	'DataSourceDisplayName!GBase8s': 'GBase8s',
	'DataSourceDisplayName!GBase8a': 'GBase8a',
	'DataSourceDisplayName!ElasticSearch': 'ElasticSearch',
	'DataSourceDisplayName!DM': 'DM',
	'DataSourceDisplayName!TimeScale': 'TimeScale',
	'DataSourceDisplayName!GreenPlum': 'GreenPlum',
	'DataSourceDisplayName!TiDB': 'TiDB',
	'DataSourceDisplayName!ALIAnalyticDBMySql': 'AnalyticDB(MySQL)',
	'DataSourceDisplayName!Kingbase': 'Kingbase',
	'DataSourceDisplayName!Hana': 'Hana',
	'DataSourceDisplayName!BigQuery': 'BigQuery',
	'DataSourceDisplayName!Db2': 'DB2',

	// keys used in descriptors
	'UID': 'Użytkownik', // User
	'UserName': 'Nazwa użytkownika', // UserName
	'User ID': 'Użytkownik', // User,
	'Server:Port(e.g. localhost:39013))': 'Serwer:Port(e.g. localhost:39013))', // Server:Port(e.g. localhost:39013))
	'ALIAnalyticDBMySql': 'AnalyticDB for MySQL',
	'ProjectId': 'Project Id',
	'OAuthPvtKeyPath': 'Key Path',
	'OAuthAccessToken': 'Access Token',
	'OAuthRefreshToken': 'Refresh Token',
	'BigQuery-OAuthClientId': 'Client Id',
	'BigQuery-OAuthClientSecret': 'Client Secret',

	// dataset manager error message
	'err_3000': 'Obliczenie nie powiodło się z powodu wyjątków lub obliczenia zostały anulowane przez administratora.', // The calculation failed due to exceptions or the calculation was canceled by administrator.

};

export const gridDataPL = {
	cgridMore: 'Więcej', // More
};
