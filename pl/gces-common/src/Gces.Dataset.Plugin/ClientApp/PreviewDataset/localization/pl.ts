
export const pl = {
	Save: 'Zapisz', // Save
	OK: 'OK',
	Preview: 'Podgląd', // Preview
	SetPreviewValue: 'Ustaw parametr poglądu', // Set Preview Parameter
	MessageBox: 'Wiadomość', // Message
	PreviewDataLimitation: 'Podgląd danych, pokaż maksymalnie 100 linijek.', // Preview data, show 100 lines at most.
	ErrorMessage: 'Wiadomość błędu', // Error Message
	SuccessMessage: 'Wiadomość powodzenia', // Success Message

	// Errors
	err_10002: 'Nie znaleziono źródła danych.', // Data Source not found.
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
	err_10018: 'W trybie \'Zbuforowanego zestawu danych\' CustomSql nie może odwoływać się do parametru kontekstu użytkownika "{referredParameter}".', // In \'Cached Dataset\' mode,CustomSql cannot reference a User Context parameter "{referredParameter}".
	err_10019: 'W trybie \'Zbuforowanego zestawu danych\' pole obliczeniowe "{calculatedField}" nie może odwoływać się do parametru kontekstu użytkownika "{referredParameter}".', // In \'Cached Dataset\' mode,Calculated field "{calculatedField}" cannot reference a User Context parameter "{referredParameter}".
	err_10020: 'W trybie \'Zbuforowanego zestawu danycht\' wyrażenie SQL "{sqlExpression}" w tabeli "{table}" nie może odwoływać się do parametru kontekstu użytkownika "{referredParameter}".', // In \'Cached Dataset\' mode,Sql expression "{sqlExpression}" on table "{table}" can\'t reference an User Context parameter "{referredParameter}".
	err_10022: 'Pole obliczeniowe "{calculatedField}" nie może odnosić się do samego siebie', // Calculated field "{calculatedField}" cannot reference itself.
	err_10023: 'Pole obliczeniowe zawiera odwołanie cykliczne', // Calculated field contains cycle reference.
	err_10024: 'Pole w warunku JOIN/UNION jest niespójne i nie może zostać skonwertowane.', // The join/union condition field type is inconsistent and can not be converted.
	err_10025: 'Nieudane pobieranie baz danych. Nie można odnaleźć serwera lub jest niedostępny. Sprawdź swoje ustawienia i upewnij się, że serwer pozwala na połączenia zdalne.', // Get databases failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections.
	err_10026: 'Nieudane pobieranie listy baz danych. Nie można odnaleźć serwera lub jest niedostępny. Sprawdź swoje ustawienia i upewnij się, że serwer pozwala na połączenia zdalne. Jeśli wciąż nie możesz się połączyć, wprowadź nazwę bazy danych/usługi ręcznie.', // Get database list failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections. If connection still failed, please input the database/service name manually.
	err_10027: 'Pobieranie schematu nie powiodło się. Upewnij się, że: \ n1, Twoje ustawienia są prawidłowe. \ N2, Serwer umożliwia połączenia zdalne. \ N3, Źródło danych jest dostępne. \ n4, parametry URI są prawidłowe.', // Get schema failed. Please make sure: \n1, Your settings are valid.\n2, The server allows remote connections.\n3, The data source is available. \n4, The URI parameters are valid.
	err_10028: 'Niestandardowa tabela SQL nie może zawierać zduplikowanej kolumny: "{{column}}"', // Custom SQL table could not contain duplicate column:"{{column}}".
	err_10029: 'Filtr "W" nie może zawierać pustej grupy oraz/lub.', // In filter cannot contain empty and/or group.
	err_10034: 'Wyrażenie SQL odnosi się do niezdefiniowanego parametru "{{referredParameter}}".', // Sql expression is referencing an undefined parameter "{{referredParameter}}".
	err_10035: 'W trybie \'Zbuforowanego zestawu danych\' wyrażenie SQL nie może odwoływać się do parametru {{context}} "{{referredParameter}}".', // In \'Cached Dataset\' mode,Sql expression can\'t reference an {{context}} parameter "{{referredParameter}}".
	err_10036: 'Następujące powiązane parametry nie zostały znalezione w niestandardowej tabeli SQL: "{{referredParameters}}".', // The following bound parameters are not found in custom Sql table: "{{referredParameters}}".
	err_100002: 'Błąd wewnętrzny serwera: {message}.', // Internal server error: {message}.
	err_100017: 'Wartość kontekstu użytkownika jest nieprawidłowa i nie można jej przekonwertować.', // The user context value is invalid and can not be converted.
	err_100024: '\"{{Key}}\" z wartością \"{{value}}\" na {{ptype}} jest nieprawidłową wartością {{dtype}}.', // The \'{{key}}\' with the value of \'{{value}}\' on {{ptype}} is an invalid {{dtype}} value.
	err_100025: '\"{{Key}}\" ma więcej niż 1 wartość, ale jest to pojedyncza {{dtype}} wartość na {{ptype}}.', // The \'{{key}}\' has more than 1 values but it is a single {{dtype}} value on {{ptype}}.
	err_100026: 'Literału \"{{value}}\" parametru stałego \"{{key}}\" nie można przekonwertować na typ danych {{dtype}}.', // The literal value \'{{value}}\' of constant parameter \'{{key}}\' can not be converted to data type {{dtype}}.

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
	E_70002: '401 Unauthorized Error. Żądanie nie zostało zastosowane, ponieważ brakuje ważnych danych uwierzytelniających dla zasobu docelowego.', // 401 Unauthorized Error. The request has not been applied because it lacks valid authentication credentials for the target resource.
	E_70003: '404 Not Found Error. Serwer nie może znaleźć żądanego zasobu.', // 404 Not Found Error. The server can\'t find the requested resource.
	E_70004: 'Żadne dane nie zostały zwrócone ze zdalnego serwera. Upewnij się, że zdalny serwer zwrócił dane.', // No data returned from the remote server. Please make sure that the remote server has data returned.
	E_70005: '400 Bad Request Error. Serwer nie może przetworzyć żądania lub nie może go przetworzyć z powodu czegoś, co jest postrzegane jako błąd klienta (np. Zniekształcona składnia żądania, nieprawidłowe ramkowanie komunikatu żądania lub oszukańcze kierowanie żądań).', // 400 Bad Request Error. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
	E_70006: '403 Forbidden Error. Serwer zrozumiał żądanie, ale odmawia jego autoryzacji.', // 403 Forbidden Error. The server understood the request but refuses to authorize it.
	E_70007: '405 Method Not Allowed. Metoda żądania jest znana serwerowi, ale nie jest obsługiwana przez zasób docelowy.', // 405 Method Not Allowed. The request method is known by the server but is not supported by the target resource.
	E_70008: '500 Internal Server Error. Serwer napotkał nieoczekiwany stan, który uniemożliwił mu realizację żądania.', // 500 Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request.
	E_40001: 'SqlOptimizer nie udało się wykonać pierwontej kwerendy SQL do źródła danych.', // SqlOptimizer failed on executing primitive sql on data source.
	E_40002: 'Nie można odnaleźć określonej tabeli.', // Cannot find the specified table in context.
	E_40003: 'Nie można odnaleźć określonej kolumny \'{ColumnName}\'.', // Cannot find the specified column \'{ColumnName}\' in context.
	E_40004: 'Znaleziono więcej niż jedną pasującą kolumnę.', // Found more than on matched columns in context.
	E_40005: 'Znaleziono więcej niż jedną pasującą tabelę w kontekście.', // Found more than one matched tables in context.
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
	E_110001: 'Serwer proxy JDBC nie działa.', // JDBC proxy is not alive.
	E_110002: 'Pobierz schemat z błędu serwera proxy JDBC.', // Get schema from JDBC proxy error.
	E_110003: 'Wystąpił błąd podczas wykonywania prymitywnego zapytania w proxy JDBC. \ n [{{Provider}}]: {{message}}', // An error occurred when executing primitive query in JDBC proxy. \n[{{Provider}}]: {{message}}
	E_110004: 'Czas połączenia minął.', // Connection time out.

	err_DataSourceAccessDenied: 'Nie masz uprawnień do dostępu do źródła danych. \nNazwa źródła danych: {{datasourceName}}.', // You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.
	err_DataSourceNotFound: 'Nie znaleziono określonego dokumentu źródła danych {datasourceId}.', // Specified datasource document {datasourceId} is not found.
	err_DataSourceIntegrityCheck: 'Błąd sprawdzania integralności źródła danych o ID {{documentId}}', // Data source with id {{documentId}} integrity check error.
	err_UserNotInOrgnization: 'Tego użytkownika nie ma w żadnej organizacji. Sprawdź parametr "{{propertyName}}" z kontekstem organizacji.', // Current user is not in any orgnization. Please check parameter "{{propertyName}}" with orgnization context.

	// data source append data
	AppendData: 'Dołącz dane', // Append Data
	AppendSource: 'Źródło', // Source
	AppendImport: 'Dodać', // Import
	AppendDataSuccess: 'Dołączanie danych powiodło się', // Append Data Success
};
