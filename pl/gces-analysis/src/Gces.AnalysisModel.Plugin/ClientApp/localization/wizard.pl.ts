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

	dataSourceType: 'Data Source Type',
	'dataSourceType!0': 'Embedded Data Source',
	'dataSourceType!1': 'Shared Data Source',
	dataProvider: 'Data Provider',
	loadingDatasources: 'Loading Data Sources...',
	ProjectId: 'Project Id',
	OAuthServiceAcctEmail: 'Service Account',
	OAuthPvtKeyPath: 'Key Path',
	OAuthAccessToken: 'Access Token',
	OAuthRefreshToken: 'Refresh Token',
	'BigQuery-OAuthClientId': 'Client Id',
	'BigQuery-OAuthClientSecret': 'Client Secret',
	AuthMode: 'AuthMode',

	// Cache Mode
	data: 'Data',
	getData: 'Get Data',
	chooseDataSource: 'Choose data source',
	selectAndEditTables: 'Select and edit tables',
	selectAndEditColumns: 'Select and edit columns',
	loadData: 'Load data',
	addTableBySql: 'Add Table By Sql',
	editTableBySql: 'Edit Table By Sql',
	tableName: 'Table Name',
	type: 'Type',
	alias: 'Alias',
	addTable: 'Add Table',
	editTable: 'Edit Table',
	editColumn: 'Edit Column',
	saveAndContinueAdding: 'Save And Continue Adding',
	addColumnBySql: 'Add Column By Sql Expression',
	editColumnBySql: 'Edit Column By Sql Expression',
	columnName: 'Column Name',
	totalNumberOfRows: 'Total Number Of Rows',
	progress: 'Progress ',
	status: 'Status',
	calculating: 'Calculating',
	downloadLog: 'Download Log',
	ok: 'OK',
	ReadData: 'Read data',
	FindDatabase: 'Find cache storage',
	TransportData: 'Transport data',
	LoadToDatabase: 'Load to cache storage',
	loading: 'Loading',
	succeeded: 'Successful',
	failed: 'Failed',
	reloadFailedTables: 'Reload Failed Tables',
	getLockError: 'The lock expires, and the designer will automatically save and close',
	autoSave: 'Auto Save',
	modelAdaptation: 'Model Adaptation',
	cannotDeleteLastEntity : 'Cannot delete the last entity',
	cannotDeleteLastAttribute : 'Cannot delete the last Attribute',
	reload: 'Reload',
	lastLoadTime: 'Last Load Time',
	retry: 'Retry',
	exit: 'Exit',
	reloadData: 'Reload Data',
	selectTablesToReload: 'Select tables to reload',
	'unsupportedDatatype!title': 'Unsupported data types',
	'unsupportedDatatype!content': 'The unsupported columns are: {{column}}',
	tableWithParameterHint: 'It is not allowed to select tables with parameters.',
	table: 'Table',
	view: 'View',
	sql: 'SQL',

	// data type
	Number: 'Number',
	Text: 'Text',
	Boolean: 'Boolean',
	Binary: 'Binary',
	GUID: 'GUID',
	Date: 'Date',
	DateTime: 'DateTime',
};