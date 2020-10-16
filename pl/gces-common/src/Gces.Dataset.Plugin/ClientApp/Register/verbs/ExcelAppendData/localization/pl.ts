export const appendDataPL = {
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
	E_60017: 'Nieoczekiwane słowo kluczowe.', // Unexpected keyword
	E_60018: 'Nie można przekształcić String w liczbę.', // Cannot convert string to number
	E_60019: 'Nieprawidłowe wartości ograniczeń.', // Invalid restriction values.
	E_60021: 'Nieobsługiwany typ operacji.', // Unsupported operation type.
	E_60022: 'Konfiguracja parametrów połączenia jest wymagana.', // Connection string config section is required.
	E_60034: 'Nie powinno używać się nazwy schematu tabeli, której połączenie właściciela ma ustawioną konfigurację \'TablePrefix\'.', // Should not use table schema name in command whose owner connection has config \'TablePrefix\' set.
	E_60046: 'Nie można znaleźć pasującego skoroszytu Excela określonego zdefiniowanym schematem.', // Can not find matched Excel sheet specified by defined schema.
	E_60047: 'Liczba kolumn w skoroszycie Excela nie odpowiada liczbie kolumn zdefiniowanej w schemacie.', // Excel sheet columns count does not match the count of columns defined in schema
	E_60048: 'Kolumny skoroszytu Excela nie pasują do tych zdefiniowanych w schemacie.', // Excel sheet columns do not match the ones defined in schema
	E_60101: 'Przekroczono maksymalny limit kolumn. Wartość limitu: 512.', // Exceeded max column\'s count, limit count: 512.
	E_60200: 'Niepusty zestaw wierszy jest wymagany dla inferencji kolumnowego typu danych.', // A non-empty row collection is required for column data type inference.
	E_60201: 'Arkusz Excel nie powinien być pusty', // Excel sheet should not be empty.
	E_60300: 'Kolumna <{{columnName}}> arkusza <{{sheetName}}> nie jest prawidłowym typem <{{targetType}}>', // Column <{{columnName}}> of sheet <{{sheetName}}> is not recognized as valid <{{targetType}}>
	E_80002: 'Znaleziono zduplikowane nazwy kolumn.', // Duplicated column names found.
	E_80006: 'Przekroczono maksymalną liczbę elementów krotki.', // Exceeded max tuple item count.
	E_80026: 'Przekroczono maksymalny limit kolumn. Wartość limitu: 512.', // Exceeded max column\'s count, limit count: 512.,
	E_80028: 'Nie można znaleźć określonej tabeli.', // Cannot find the specified table.
	E_80029: 'Błąd wewnętrznego egzekutora. Metoda lub kod nie powinny zostać wykonane.', // Internal executor error. Method or code should not be reached
	E_80030: 'Nie można odnaleźć tabeli zawierającej określoną kolumnę.', // Cannot identify owner table of the specified column

	// data source append data
	AppendData: 'Dołącz dane', // Append Data
	AppendSource: 'Źródło', // Source
	AppendImport: 'Dodać', // Import
	AppendDataSuccess: 'Dołączanie danych powiodło się', // Append Data Success
	FileReady: '{{file}} jest gotowy do wgrania', // {{file}} is ready to upload
	FileInProcess: 'Wgrywanie {{file}}', // Uploading {{file}}
	FileUploaded: '{{file}} został wgrany', // {{file}} has been uploaded
	FileUploadWithEmptyName: 'Plik został przekazany', // File has been uploaded
	FileError: 'Błąd wgrywania {{file}}', // Upload {{file}} error
};
