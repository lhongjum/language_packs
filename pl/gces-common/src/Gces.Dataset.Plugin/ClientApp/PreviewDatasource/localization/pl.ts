
export const pl =  {
	OK: 'OK', // OK
	MessageBox: 'Wiadomość', // Message
	PreviewDataLimitation: 'Podgląd danych, pokaż maksymalnie 100 linijek', // Preview data, show 100 lines at most.
	err_10021: 'Przekroczono maksymalną liczbę kolumn, limit wynosi: 1024.\nAktualna liczba: {{currentCount}}.', // Exceeded max column\'s count, limit count: 1024.\nCurrent count: {{currentCount}}.
	FetchDataFailed: 'Pozyskanie danych nie powiodło się.', // Fetch data failed.
	err_100001: 'Nieprawidłowy parametr: {name}.', // Invalid parameter: {name}.
	err_100002: 'Błąd wewnętrzny serwera: {message}.', // Internal server error: {message}.
	err_100005: 'Dostawca danych "{name}" nie został znaleziony.', // Data provider "{name}" not found.
	err_100008: 'Parametry połączenia nie mogą być puste.', // Connection string cannot be empty.
	err_100009: 'Ten dokument jest obecnie aktualizowany przez inną operację. Spróbuj później', // This document is being updated by another operation. Please try later.
	err_100014: 'Nie masz wystarczającyh uprawnień do dostępu do źródła danych "{{name}}"', // You have not enough permission to access datasource "{{name}}
	err_100018: 'Nie znaleziono dokumentu.', // Document not found.
	err_100019: 'Nie masz uprawnień do dostępu do dokumentu.', // You don not have permission to access the document
	err_100020: 'Nieprawidłowy typ dokumentu.', // Wrong document type
	err_100021: 'Nie można połączyć się ze źródłem danych {{name}}.', // Can not connect to datasource {{name}}.
	err_100018_desc: 'Error trying to resolve datasource "{{ids}}"',

	E_40001: 'SqlOptimizer nie udało się wykonać pierwontej kwerendy SQL do źródła danych.', // SqlOptimizer failed on executing primitive sql on data source.
	E_40002: 'Nie można odnaleźć określonej tabeli.', // Cannot find the specified table in context.
	E_40003: 'Nie można odnaleźć określonej kolumny \'{ColumnName}\'.', // Cannot find the specified column \'{ColumnName}\' in context.
	E_40004: 'Znaleziono więcej niż jedną pasującą kolumnę.', // Found more than on matched columns in context.
	E_40005: 'Found more than one matched tables in context.',
	E_50000: 'Spróbuj zarejestrować null SourceLoader.', // Try to register a null SourceLoader.
	E_50001: 'Spróbuj zarejestrować zduplikowanego SourceLoader.', // Try to register a duplicated SourceLoader.
	E_50002: 'Spróbuj odrejestrować null SourceLoader.', // Try to unregister a null SourceLoader.
	E_50003: 'Spróbuj odrejestrować nieistniejące SourceLoader.', // Try to unregister a inexistent SourceLoader.
	E_50004: 'Nie można znaleźć własciwego SourceLoader.', // Can\'t find proper SourceLoader.
	E_60001: 'Określona nazwa zbioru nie jest obsługiwana w metodach serii GetSchema.', // Specified collection name is not supported in GetSchema series methods.
	E_60003: 'Nie można uzyskać informacji o schemacie przy nieaktywnym połączeniu.', // Cannot get schema information on closed connection.
	E_60006: 'Nie znaleziono poprawnych wierszy danych w źródłe danych.', // No valid data rows found in file datasource.
	E_60007: 'Nie udało się ustawić licencji SpreadServices.', // Failed to set SpreadServices license.
	E_60008: 'Nie udało się otworzyć pliku Excel.', // Failed to open Excel file.
	E_60009: 'Nie znaleziono dostępnych arkuszy w pliku Excel.', // No available sheets found in Excel file.
	E_60012: 'Nie można pobrać informacji o tabeli MongoDB.', // Cannot get MongoDB table info.
	E_60013: 'Nie można pobrać informacji o kolumnie tabeli MongoDB.', // Cannot get MongoDB table column info.
	E_60018: 'Nie można przekształcić String w liczbę.', // Cannot convert string to number
	E_60019: 'Nieprawidłowe wartości ograniczeń.', // Invalid restriction values.
	E_60023: 'Brakujący parametry.', // Missing parameter(s).
	E_60024: 'Wystąpił błąd sieci podczas pozyskiwania danych zdalnych.', // Network error found when fetching remote data.
	E_60025: 'Nie można załadować schematu z XMLa.', // Cannot load schema from XML string
	E_60028: 'Wystąpił błąd podczas wykonywania zapytania. {{PrimitiveSQLError}}', // An error occurred when executing primitive query. {{PrimitiveSQLError}}
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
	E_70000: 'Nie udało się zdobyć tokena dostępu.', // Failed to acquire access token
	E_70001: 'Błąd sieci.', // Network error.
	E_80001: 'Nie można znaleźć określonej kolumny \'{TargetColumnName}\'.', // Cannot find the specified column \'{TargetColumnName}\'.
	E_80002: 'Znaleziono zduplikowane nazwy kolumn.', // Duplicated column names found.
	E_80024: 'Nie można znaleźć określonego parametru.', // Cannot find the specified parameter
	E_80026: 'Przekroczono maksymalny limit kolumn. Wartość limitu: 512.', // Exceeded max column\'s count, limit count: 512.,
	E_80028: 'Nie można znaleźć określonej tabeli.', // Cannot find the specified table.
	E_80048: 'Kontekst niezarejestrowany.', // Context not registered.
	E_80059: 'Nie odnaleziono właściwych konwerterów typów danych pomiędzy tymi typami.', // No proper data type converters found between types.
	E_80062: 'Nie można skonwertować wartości null do typu wartości', // Cannot convert null value to a value type.

	err_DataSourceAccessDenied: 'Nie masz uprawnień do dostępu do źródła danych. \nNazwa źródła danych: {{datasourceName}}.', // You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.
	err_DataSourceNotFound: 'Specified datasource document "{{datasourceId}}" is not found.',
};
