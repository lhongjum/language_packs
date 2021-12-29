export const wizardPL: LanguageKeyValueMap = {
	UseConfigString: 'Użyj parametrów połączenia (Zaawansowane)', // Use Configuration String(Advanced)
	Name: 'Nazwa', // Name
	User: 'Użytkownik', // User
	Server: 'Serwer', // Server
	Host: 'Host', // Host
	Port: 'Port', // Port
	Password: 'Hasło', // Password
	Database: 'Baza danych', // Database
	CommandTimeout: 'Limit czasu polecenia (s)', // Command Timeout(s)
	noSearchResultTip: 'brak wyniku', // no result
	loadingDatabases: 'Wczytywanie baz danych', // Loading Databases...
	Service_Name: 'Nazwa usługi', // Service Name
	searchPlaceHolder: 'Wprowadź, aby szukać', // Please input to search
	dataSource: 'Źródło danych', // Data Source
	CommandTimeoutLimitation: 'Limit czasu polecenia musi być wartością typu Integer', // Command timeout must be an integer value
	testConnection: 'Testuj połączenie', // Test Connection

	'createAnalysisModel!name': 'Utwórz model danych', // Create Data Model
	selectModelType: 'Wybierz typ modelu', // Select model type
	specifyDatasource: 'Określ źródło danych', // Specify a data source
	configDatasource: 'Konfiguruj źródło danych', // Config data source
	selectTableAndView: 'Wybierz tabele i widoki', // Select tables and views
	generateModel: 'Generuj model', // Generate a model
	filterItems: 'Filtruj po nazwie:', // Filter items by name:
	findAdditionRelations: 'Uwzględnij aktualne relacje', // Include current relations
	findRelatedTables: 'Uwzględnij powiązane tabele', // Include related tables
	selectOrClearAllItems: 'Wybierz lub wyczyść wszystkie', // Select or clear all items:
	modelAlreadyExist: "Model danych '{{name}}' już istnieje.", // Data model '{{name}}' already exist.
	invalidAnalysisModelName: 'Nazwa modelu danych jest nieprawidłowa. Proszę nie używać zastrzeżonych znaków < > \ : ? * / | " i nie używać . (dot) jako pierwszy symbol nazwy modelu danych.', // The data model name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the data model name.

	back: 'Wstecz', // Back
	next: 'Następny', // Next
	done: 'Zrobione', // Done
	close: 'Zamknij', // Close

	'DataSourceDisplayName!Oracle': 'Oracle',
	'DataSourceDisplayName!SqlServer': 'SQL Server',
	'DataSourceDisplayName!MySql': 'Mysql',
	'DataSourceDisplayName!Postgres': 'Postgres',
	'DataSourceDisplayName!Hive': 'Hive',
	'DataSourceDisplayName!Hana': 'Hana',
	'DataSourceDisplayName!TimeScale': 'TimeScale',
	'DataSourceDisplayName!MonetDB': 'MonetDB',
	'DataSourceDisplayName!ALIAnalyticDBMySql': 'AnalyticDB(MySQL)',
	'DataSourceDisplayName!MariaDB': 'MariaDB',
	'DataSourceDisplayName!Db2': 'Db2',
	'DataSourceDisplayName!BigQuery': 'BigQuery',
	'DataSourceDisplayName!Json': 'Json',

	tables: 'Tabele', // Tables
	views: 'Widoki', // Views

	noDataSource: 'Nie można znaleźć dostępnego źródła danych', // Could not find available data source

	dataSourceType: 'Typ źródła danych', // Data Source Type
	'dataSourceType!0': 'Wbudowane źródło danych', // Embedded Data Source
	'dataSourceType!1': 'Udostępnione źródło danych', // Shared Data Source
	dataProvider: 'Dostawca danych', // Data Provider
	loadingDatasources: 'Ładowanie źródeł danych...', // Loading Data Sources...
	ProjectId: 'Id Projektu', // Project Id
	OAuthServiceAcctEmail: 'Konto usługi', // Service Account
	OAuthPvtKeyPath: 'Kluczowa ścieżka', // Key Path
	OAuthAccessToken: 'Token dostępu', // Access Token
	OAuthRefreshToken: 'Odśwież token', // Refresh Token
	'BigQuery-OAuthClientId': 'Id Klienta', // Client Id
	'BigQuery-OAuthClientSecret': 'Sekret klienta', // Client Secret
	AuthMode: 'Tryb uwierzytelniania', // AuthMode
 
	// Cache Mode
	data: 'Dane', // Data
	getData: 'Otrzymaj dane', // Get Data
	chooseDataSource: 'Wybierz źródło danych', // Choose data source
	selectAndEditTables: 'Wybierz i edytuj tabele', // Select and edit tables
	selectAndEditColumns: 'Wybierz i edytuj kolumny', // Select and edit columns
	loadData: 'Załaduj dane', // Load data
	addTableBySql: 'Dodaj tabelę według sql', // Add Table By Sql
	editTableBySql: 'Edytuj tabelę według sql', // Edit Table By Sql
	tableName: 'Nazwa tabeli', // Table Name
	type: 'Typ', // Type
	alias: 'Alias', // Alias
	addTable: 'Dodaj tabelę', // Add Table
	editTable: 'Edytuj tabelę', // Edit Table
	editColumn: 'Edytuj kolumnę', // Edit Column
	saveAndContinueAdding: 'Zapisz i kontynuuj dodawanie', // Save And Continue Adding
	addColumnBySql: 'Dodaj kolumnę według wyrażenia Sql', // Add Column By Sql Expression
	editColumnBySql: 'Edytuj kolumnę według wyrażenia Sql', // Edit Column By Sql Expression
	columnName: 'Nazwa kolumny', // Column Name
	totalNumberOfRows: 'Całkowita liczba wierszy', // Total Number Of Rows
	progress: 'Postęp', // Progress
	status: 'Status', // Status
	calculating: 'Obliczanie', // Calculating
	downloadLog: 'Pobierz dziennik', // Download Log
	ok: 'OK', // OK
	ReadData: 'Przeczytaj dane', // Read data
	FindDatabase: 'Znajdź pamięć podręczną', // Find cache storage
	TransportData: 'Przenieś dane', // Transport data
	LoadToDatabase: 'Załaduj do pamięci podręcznej', // Load to cache storage
	loading: 'Ładowanie', // Loading
	succeeded: 'Udało się', // Successful
	failed: 'Nie udało się', // Failed
	reloadFailedTables: 'Ponowne wczytaj nieudane tabele', // Reload Failed Tables
	getLockError: 'Blokada wygasa, a designer automatycznie zapisze zmiany i zamknie się', // The lock expires, and the designer will automatically save and close
	autoSave: 'Automatyczny zapis', // Auto Save
	modelAdaptation: 'Adaptacja modelu', // Model Adaptation
	cannotDeleteLastEntity : 'Nie można usunąć ostatniej jednostki', // Cannot delete the last entity
	cannotDeleteLastAttribute : 'Nie można usunąć ostatniego atrybutu', // Cannot delete the last Attribute
	reload: 'Przeładuj', // Reload
	lastLoadTime: 'Czas ostatniego ładowania', // Last Load Time
	retry: 'Ponów', // Retry
	exit: 'Wyjdź', // Exit
	reloadData: 'Przeładuj dane', // Reload Data
	selectTablesToReload: 'Wybierz tabele do przeładowania', // Select tables to reload
	'unsupportedDatatype!title': 'Nieobsługiwane typy danych', // Unsupported data types
	'unsupportedDatatype!content': 'Nieobsługiwane kolumny to: {{column}}', // The unsupported columns are: {{column}}
	tableWithParameterHint: 'Niedozwolone jest wybieranie tabel z parametrami.', // It is not allowed to select tables with parameters.
	table: 'Tabela', // Table
	view: 'Widok', // View
	sql: 'SQL', // SQL
 
	// data type
	Number: 'Number',
	Text: 'Text',
	Boolean: 'Boolean',
	Binary: 'Binary',
	GUID: 'GUID',
	Date: 'Date',
	DateTime: 'DateTime',
};