export const errorPL: LanguageKeyValueMap = {
	// AnalysisControllerException
	error_98000: 'Nieoczekiwany wyjątek: {{exmsg}}', // Unexpected exception: {{exmsg}}
	error_98001: 'Zła treść żądania.', // Bad request body.
	error_98002: 'Nieprawidłowe informacje o źródle danych.', // Invalid DataSourceInfo.
	error_98003: 'Nie udało się uzyskać informacji o dostawcy \'{{provider}}\'. {{exmsg}}', // Failed to get information of provider \'{{provider}}\'. {{exmsg}}
	error_98004: 'Nie znaleziono dokumentu lub nie masz wystarczających uprawnień, aby uzyskać do niego dostęp.', // The document was not found or you have not enough permission to access it.
	error_98005: 'Wymagane jest uprawnienie UPDATE.', // UPDATE permission required.
	error_98006: 'Bieżący model nie jest zgodny ze schematem bazy danych.', // Current model does not match the database schema.
	error_98007: 'Nie udało się połączyć z bazą danych.', // Failed to connect to the database.
	error_98008: 'Nie udało się pobrać tabel.', // Failed to get tables.
	error_98009: 'Nie udało się pobrać kolumn.', // Failed to get columns.
	error_98010: 'Nie udało się utworzyć modelu danych.', // Failed to create data model.
	error_98011: 'Nie udało się zweryfikować jednostki.', // Failed to validate the entity.
	error_98012: 'Nie udało się zweryfikować atrybutu.', // Failed to validate the attribute.
	error_98013: 'Nie udało się zweryfikować modelu danych.', // Failed to validate the data model.
	error_98014: 'Nie udało się zapisać modelu danych.', // Failed to save the data model.
	error_98015: 'Nie udało się zaktualizować modelu danych.', // Failed to update the data model.
	error_98016: 'Nie udało się wczytać modelu danych.', // Failed to load the data model.
	error_98017: 'Nie udało się wyświetlić podglądu encji.', // Failed to preview the entity.
	error_98018: 'Nie udało się pobrać baz danych.', // Failed to get databases.
	error_98019: 'Liczba wybranych tabel/widoków jest większa niż maksymalny limit: {{limit}}.', // The number of selected tables/views is greater than the maximum limit: {{limit}}.
	error_98020: 'Nie można pobrać schematu tabeli {{binding}}.', // Can not get the schema of table {{binding}}.
	error_98021: 'Nie można uzyskać informacji z kolumny {{column}} w tabeli {{table}}.', // Can not get the information of column {{column}} on the table {{table}}.
	error_98022: 'Nie udało się zweryfikować relacji.', // Failed to validate the relation.
	error_98023: 'Nie udało się zweryfikować filtrów zabezpieczających, utwórz atrybut niestandardowy i użyj funkcji CAST, aby przekonwertować wartość atrybutu na zgodny typ danych.', // Failed to validate the security filter(s), please create a custom attribute and use the CAST function to convert the attribute value into a compatible datatype.
	// DataProviderServiceException
	error_93001: 'Brak wartości kontekstu użytkownika wymaganych przez parametry połączenia w zakresie bieżącego użytkownika. Właściwości kontekstu: {{contexts}}', // User context values required by connection string are missing on current user\'s scope. Context properties: {{contexts}}
	error_93002: '\'Baza danych\' nie jest skonfigurowana podczas połączenia.', // \'Database\' is not configured on connection.
	error_93003: 'Dostawca {{provider}} nie jest zarejestrowany.', // Provider {{provider}} not registered.
	error_93004: 'Dostawca {{provider}} nie obsługuje funkcji analizy danych DirectQuery.', // Provider {{provider}} does not support DirectQuery data analysis feature.
	error_93005: 'Dostawca nie jest przypisany.', // Provider is not assigned.
	error_93006: 'Nie udało się utworzyć połączenia.', // Failed to create connection.
	error_93007: 'Nie udało się otworzyć połączenia.', // Failed to open connection.
	error_93008: 'Nie udało się uzyskać kolumn.', // Failed to get the columns.
	error_93009: 'Nie udało się uzyskać kluczy obcych.', // Failed to get the foreign keys.
	error_93010: 'Nie udało się pobrać tabel.', // Failed to get tables.
	error_93011: 'Nie udało się uzyskać wyświetleń.', // Failed to get views.
	error_93012: 'Nie udało się przetestować połączenia.', // Failed to test connection.
	error_93013: 'Nie udało się wykonać SQL.', // Failed to execute SQL.
	error_93014: 'Nie udało się odczytać danych SQL.', // Failed to read SQL data.
	error_93015: 'Nie udało się pobrać baz danych.', // Failed to get databases.

	// IntegrityValidationException
	error_96001: 'Brak identyfikatora i nazwy w jednostce.', // Id and name are missing on an entity.
	error_96002: 'Brak identyfikatora w jednostce \'{{name}}\'.', // Id is missing on entity \'{{name}}\'.
	error_96003: 'Brak nazwy w jednostce {{id}}.', // Name is missing on entity {{id}}.
	error_96004: 'Na jednostkach znaleziono zduplikowaną nazwę \'{{name}}\'.', // Duplicated name \'{{name}}\' was found on entities.
	error_96005: 'Zduplikowany identyfikator {{id}} został znaleziony w więcej niż jednym modelu.', // Duplicated id {{id}} was found on more than one model items.
	error_96006: 'Brak identyfikatora i nazwy w relacji.', // Id and name are missing on a relation.
	error_96007: 'Brak identyfikatora w relacji \'{{name}}\'.', // Id is missing on relation \'{{name}}\'.
	error_96008: 'Brak nazwy w relacji {{id}}.', // Name is missing on relation {{id}}.
	error_96009: 'W relacjach {{ids}} znaleziono zduplikowaną nazwę \'{{name}}\'.', // Duplicated name \'{{name}}\' was found on relations {{ids}}.
	error_96010: 'Brak identyfikatora i nazwy w atrybucie encji \'{{entityname}}\'.', // Id and name are missing on an attribute of entity \'{{entityname}}\'.
	error_96011: 'Brakuje identyfikatora w atrybucie \'{{name}}\' jednostki \'{{entityname}}\'.', // Id is missing on attribute \'{{name}}\' of entity \'{{entityname}}\'.
	error_96012: 'Brak nazwy w atrybucie {{id}} jednostki \'{{entityname}}\'.', // Name is missing on attribute {{id}} of entity \'{{entityname}}\'.
	error_96013: 'Zduplikowana nazwa \'{{name}}\' została znaleziona w atrybutach {{ids}} encji \'{{entityname}}\'.', // Duplicated name \'{{name}}\' was found on attributes {{ids}} of entity \'{{entityname}}\'.
	error_96014: 'Model nie zawiera encji.', // Model contains no entities.
	error_96015: 'Jednostka \'{{name}}\' nie zawiera żadnych atrybutów.', // Entity \'{{name}}\' contains no attributes.
	error_96018: 'Brak atrybutów źródłowych relacji \'{{name}}\'.', // Source attribute(s) of relation \'{{name}}\' are missing.
	error_96019: 'Brak atrybutów docelowych relacji \'{{name}}\'.', // Target attribute(s) of relation \'{{name}}\' are missing.
	error_96020: 'Atrybut źródłowy \'{{att}}\' relacji \'{{name}}\' jest niedozwolony.', // Source attribute \'{{att}}\' of relation \'{{name}}\' is illegal.
	error_96021: 'Atrybut docelowy \'{{att}}\' relacji \'{{name}}\' jest niedozwolony.', // Target attribute \'{{att}}\' of relation \'{{name}}\' is illegal.
	error_96022: 'Co najmniej jeden atrybut źródłowy i atrybut docelowy relacji \'{{name}}\' są takie same.', // One or more source attributes and target attributes of relation \'{{name}}\' are the same.
	error_96024: 'DataAnalysisModel jest NULLem.', // DataAnalysisModel is null.
	error_96025: 'Model jest pusty.', // Model is null.
	error_96026: 'DataSource nie jest skonfigurowane.', // DataSource is not configured.
	error_96027: 'ConnectionString DataSource nie jest skonfigurowany.', // ConnectionString of the dataSource is not configured.
	error_96028: 'Dostawca dataSource nie jest skonfigurowany.', // Provider of the dataSource is not configured.
	error_96029: 'Identyfikator przywoływanego dokumentu DSC źródła danych nie jest skonfigurowany.', // Referenced DSC document id of the dataSource is not configured.
	error_96030: 'Typ źródła danych jest nierozpoznawalny.', // Datasource type is unrecognizable.
	error_96031: 'Dwukierunkowe filtrowanie krzyżowe musi być włączone w relacji jeden do jednego \'{{name}}\'.', // Bi-direction cross filtering must be enabled on the one-to-one relation \'{{name}}\'.
	error_96032: 'Błąd wewnętrzny.', // Internal error.
	error_96033: 'Istnieje wiele bezpośrednich relacji między podmiotem \'{{name1}}\' i podmiotem \'{{name2}}\'.', // There are multiple direct relations between entity \'{{name1}}\' and entity \'{{name2}}\'.
	error_96034: 'Powiązanie nie jest skonfigurowane w encji \'{{name}}\'.', // Binding is not configured on entity \'{{name}}\'.
	error_96035: 'Powiązanie nie jest skonfigurowane w atrybucie \'{{name}}\' encji \'{{entityname}}\'.', // Binding is not configured on attribute \'{{name}}\' of entity \'{{entityname}}\'.
	error_96036: 'Istnieje wiele ścieżek między podmiotem \'{{name1}}\' i podmiotem \'{{name2}}\'. Ścieżka1 to \'{{path1}}\'. Ścieżka2 to \'{{path2}}\'.', // There are multiple paths between entity \'{{name1}}\' and entity \'{{name2}}\'. Path1 is \'{{path1}}\'. Path2 is \'{{path2}}\'.
	error_96037: 'Liczba atrybutów źródłowych i docelowych w relacji \'{{name}}\' nie jest zgodna.', // Count of source and target attributes on relation \'{{name}}\' does not match.
	error_96038: 'Atrybuty źródłowe w relacji \'{{name}}\' nie należą do tej samej encji.', // Source attributes on relation \'{{name}}\' do not belong to the same entity.
	error_96039: 'Atrybuty docelowe w relacji \'{{name}}\' nie należą do tej samej encji.', // Target attributes on relation \'{{name}}\' do not belong to the same entity.
	error_96040: 'Nie udało się zdeserializować: atrybut o identyfikatorze \'{{attid}}\' nie jest zdefiniowany.', // Failed to deserialize: Attribute with id \'{{attid}}\' is not defined.
	error_96041: 'Atrybut źródłowy nie jest skonfigurowany w filtrze bezpieczeństwa \'{{filtername}}\'.', // Source attribute is not configured in security filter \'{{filtername}}\'.
	error_96042: 'Atrybut źródłowy \'{{attributename}}\' w filtrze bezpieczeństwa \'{{filtername}}\' nie należy do bieżącego modelu danych.', // Source attribute \'{{attributename}}\' in security filter \'{{filtername}}\' does not belong to current data model.
	error_96043: 'Nazwa właściwości kontekstu nie jest skonfigurowana w filtrze bezpieczeństwa \'{{filtername}}\'.', // Context property name is not configured in security filter \'{{filtername}}\'.
	error_96044: 'Flaga IsUnique musi być prawdziwa w atrybucie \'{{attribute}}\', który jest używany jako pole relacyjne encji bocznej \'1\' \'{{entity}}\' w relacji \'{{relation}}\'.', // The IsUnique flag required to be true on the attribute \'{{attribute}}\' that is used as the relational field of the \'1\' side entity \'{{entity}}\' in the relation \'{{relation}}\'.
	error_96045: 'Flaga IsUnique musi być prawdziwa zarówno w \'{{attribute1}}\' encji \'{{entity1}}\' i \'{{attribute2}}\' encji \'{{entity2}}\' w relacji jeden do jednego \'{{relation}}\'.', // The IsUnique flag required to be true on both the \'{{attribute1}}\' of the entity \'{{entity1}}\' and the \'{{attribute2}}\' of the entity \'{{entity2}}\' in the one to one relation \'{{relation}}\'.

	// inner exception
	error_inner: 'internal error: {{msg}}',

	// rename graphql
	err_20001: '{{parameter}} jest wymaganym parametrem.', // {{parameter}} is a required parameter.
	err_20002: 'Dokument "{{newName}}" już istnieje.', // Document "{{newName}}" already exists.
	err_20006: 'Dokument "{{documentProperty}}" nie został znaleziony.', // Document "{{documentProperty}}" is not found.
	err_20009: 'Nie można zmienić nazwy dokumentu. Nie masz wystarczających uprawnień. Skontaktuj się z administratorem.', // The document cannot be renamed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.
	err_20014: 'Niewłaściwa nazwa dokumentu. Nazwa dokumentu nie może być pusta oraz używać symboli < > \\ : ? * / | \". Nie używaj . (kropka) jako pierwszy symbol w nazwie dokumentu.', // Invalid document name. Document name can not be empty and please do not use restricted symbols < > \\ : ? * / | \" and do not use . (dot) as the first symbol in the document name.

	// JDBC proxy error message
	'err_5001': 'Can not connect to JDBC proxy.',

	// AutoModelBuilderException
	error_96201: 'Nie udostępniono narzędzia do rozpoznawania schematów źródła danych.', // DatasourceSchemaResolver is not provided.
	error_96202: 'Narzędzie do rozpoznawania znaków źródła danych nie jest dostępne.', // DatasourceCharacterResolver is not provided.
	error_96203: 'Brak definicji źródła danych.', // Datasource definition is missing.
	error_96204: 'Znaleziono co najmniej jedną pustą nazwę tabeli.', // One or more empty table names found.
	error_96205: "W tabeli '{{table}}' znaleziono jedną lub więcej pustych nazw kolumn.", // One or more empty column names found in table '{{table}}'.
	error_96206: "Brak typu DbDataType w kolumnie '{{column}}' tabeli '{{table}}'.", // DbDataType is missing on column '{{column}}' of table '{{table}}'.
	error_96207: 'Nie udało się rozwiązać schematu źródła danych.', // Failed to resolve datasource schema.
	error_96208: "Nie można wywnioskować logicznego typu danych z typu danych bazy danych '{{dbdatatype}}'.", // Failed to infer logical data type from database data type '{{dbdatatype}}'.
	error_96209: 'Znaleziono jedną lub więcej pustych nazw relacji.', // One ore more empty relation names found.
	error_96210: "Nie udało się znaleźć kolumny odniesienia relacji '{{relation}}'.", // Failed to find referencing column of relation '{{relation}}'.
	error_96211: "Nie udało się znaleźć kolumny odniesienia relacji '{{relation}}'.", // Failed to find referenced column of relation '{{relation}}'.
	error_96212: 'Nie udało się rozpoznać znaku źródła danych.', // Failed to resolve datasource character.

	// LocalEntity
	error_98024: 'Fail to validate the local entity.',
	error_98025: 'The {{column}} column type error.',
	error_98026: 'Can not to get local entity Generator.',

	// Entity Parameter
	error_98027: 'Failed to validate the entity parameter.',
	error_98028: 'Not support the entity with Custom SQL.',

	// localEntityGraphql
	error_98037: 'Excel connection failed to open.',
	error_60200: 'Niepusty zestaw wierszy jest wymagany dla inferencji kolumnowego typu danych.', // A non-empty row collection is required for column data type inference.
	error_60201: 'Arkusz Excel nie powinien być pusty', // Excel sheet should not be empty.
	error_60009: 'Nie znaleziono dostępnych arkuszy w pliku Excel.', // No available sheets found in Excel file.
	error_60008: 'This is an encrypted file, please provide the password.',

	// GetData
	error_98029: 'Failed to open the document. It may be due to multiple people editing the current document at the same time, or there is a problem with the cache database.',
	error_98030: 'Failed to get the edit lock in cache mode.',
	error_98031: 'Failed to get data.',
	error_98032: 'Failed to select one available cache node.',

	error_200001: '"{{value}}" in {{row}} row and {{column}} column of the {{entityName}} table cannot be converted from a {{originalType}} type to a {{conversionType}} type.',
	error_200002: '{{logicalDataType}} type is not supported.',
	error_200003: 'Data is not exist or invalid.',
	error_200004: 'Access denied to "{{directory}}"',
	error_200005: 'Failed to convert value in {{row}} row to target data type.',
	error_200006: 'Unknown runtime errors occurred.',
	error_200007: 'Failed to generate binary files.',
	error_200008: 'Model documentId is empty.',
	error_200009: 'Cannot get the cache node.',
	error_200010: 'Failed to transport files.',
	error_200011: 'Failed to generate cache.',
	error_200012: 'Failed to generate cache.',
	error_200013: 'Failed to generate cache.',
	error_200015: 'Failed to execute SQL initialization script in cache.',

	error_100000001: 'Failed to get cache storage node.',
	error_100000002: 'Data is found in inactive cache node.',
	error_100000003: 'Data is not found in active cache node.',
	error_100000004: 'Data is not exist.',
	error_100000005: 'Operation is canceled in client.',
	error_100000006: 'Client internal error.',
	error_100000007: 'System shutdown.',
	error_100000008: 'Cache node is offline.',
	error_100000009: 'Failed to get lock.',
	error_100000010: 'Failed to update cache lock.',
	error_200000001: 'Client is unavailable.',
	error_200000002: 'Cache storage is not start.',
	error_200000003: 'Cache storage error.',
	error_200000004: 'Server operation is canceled.',
	error_200000005: 'Cache is occupied.',
	error_200000006: 'Server internal error.',
	error_200000007: 'Failed to release lock.',
	error_200000008: 'Failed to get lock.',

	error_98036: 'Failed to validate data sources.',
	err_100018: 'Document not found.',
	error_98038: 'The cache is being rebuilt and the document cannot be edited.',
	error_98039: 'Failed to convert a value of the column {{ columnName }} to data type {{ convertedType }} .',
};