export const resPL: LanguageKeyValueMap = {
	'createSemanticModel!name': 'Stwórz Model Semantyczny', // Create Semantic Model

	specifyDatasource: 'Określ źródło danych', // Specify a data source
	configDatasource: 'Konfiguruj źródło danych', // Config data source
	selectTableAndView: 'Wybierz tabele i widoki', // Select tables and views
	generateModel: 'Generuj model', // Generate a model
	filterItems: 'Filtruj po nazwie:', // Filter items by name:
	findAdditionRelations: 'Znajdź dodatkowe relacje:', // Find additional relations:
	selectOrClearAllItems: 'Wybierz lub wyczyść wszystkie', // Select or clear all items:
	modelAlreadyExist: "Model semantyczny '{{name}}' już istnieje.", // Semantic model '{{name}}' already exist.
	invalidSemanticModelName: 'Nazwa modelu semantycznego jest nieprawidłowa. Nie używaj ograniczonych symboli < > \ : ? * / | " oraz nie używaj . (kropka) jako pierwszego symbolu w nazwie', // The semantic model name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the semantic model name.

	connectError: 'Błąd połączenia', // Connection error
	connectSuccess: 'Poprawnie połączono', // Connect successfully
	connectionErrorCode_100012: 'Nieprawidłowy kontekst użytkownika: {{claimName}}.', // Invalid user context: {{claimName}}.

	dataSource: 'Źródło Danych', // Data Source
	back: 'Wstecz', // Back
	next: 'Następny', // Next
	done: 'Zrobione', // Done
	close: 'Close',
	CreateSemanticIframeTitle: 'Create Semantic Model',
	EditSemanticIframeTitle: 'Edit Semantic Model',

	// Designer
	// App Bar
	abSave: 'Zapisz Wersję Roboczą', // Save Draft
	abSaveAndPublish: 'Zapisz i Publikuj', // Save And Publish
	abValidate: 'Sprawdź poprawność', // Validate
	abProperties: 'Właściwości', // Properties

	// Workspace
	wsName: 'Nazwa', // Name
	wsAdd: 'Dodaj', // Add
	wsRemove: 'Usuń', // Remove
	wsRegenerate: 'Przegeneruj', // Regenerate
	wsSearch: 'Szukaj', // Search
	wsEntities: 'Encje', // Entities
	wsAttributes: 'Atrybuty', // Attributes
	wsRelations: 'Relacje', // Relations
	searchNoResult: 'brak wyników', // no items
	wsAttribute: 'Atrybut', // Attribute
	wsType: 'Typ', // Type
	wsDescription: 'Opis', // Description

	wsRelatedRelation: 'Powiązana Relacja', // Related Relation
	wsRelatedEntity: 'Powiązane encje', // Related Entity

	// Props
	ppsModel: 'Model',
	ppsConnection: 'Połączenie', // Connection
	ppsModelName: 'Nazwa Modelu', // Model Name
	ppsCommandTimeout: 'Limit Czasu Polecenia (s)', // Command Timeout(s)
	ppsCommandTimeoutLimitation: 'Limit czasu musi być liczbą całkowitą', // Command timeout must be an integer value
	ppsConnectionString: 'Parametry Połączenia', // Connection String
	ppsAdd: 'Dodaj', // Add
	ppsCancel: 'Anuluj', // Cancel
	ppsDelete: 'Usuń', // Delete

	ppsEntity: 'Encja', // Entity
	ppsAddEntity: 'Dodaj Encję', // Add Entity
	ppsInformation: 'Informacje', // Information
	ppsParameters: 'Parametry', // Parameters
	ppsNaming: 'Nazwy', // Naming
	ppsAppearance: 'Wygląd', // Appearance
	ppsAttributes: 'Atrybuty', // Attributes
	ppsId: 'ID',
	ppsBindingMode: 'Tryb Wiązania', // Binding Mode
	ppsTableOrView: 'Tabela lub Widok', // Table or View
	ppsBinding: 'Wiązanie', // Binding
	ppsQuery: 'Zapytanie', // Query
	ppsProcedure: 'Procedura', // Procedure
	ppsAdvanced: 'Zaawansowane', // Advanced
	ppsPrompt: 'Podpowiedź', // Prompt
	ppsPromptDescription: 'Wprowadź tekst aby poprosić użytkowników raportu o wybranie wartości.', // Enter text to prompt consumers of the report to select a value.
	ppsStatic: 'Statyczny', // Static
	ppsPromptMode: 'Dozwolone Wartości', // Allow Values
	ppsPromptModeDescription: '"Dowolna wartość" pozwala użytkownikowi na wprowadzenie dowolnej dozwolonej wartości. "Z bazy danych" pozwala na wybór atrybutu z bazy danych do pobrania wartości. Lista różnych wartości z wybranego atrybutu będzie pokazana użytkownikowi jako lista możliwych wartości do wyboru. "Z listy" pozwala na wprowadzenie listy wartości, z której użytkownik będzie mógł wybrać odpowiednie pozycje.', // "Any value" allows the user to enter any value. They must know what values are permissible. "From the database" allows you to choose an attribute in the database to get values from. The list of distinct values from the selected attribute will be shown to the user as the values they can select as input. "From a list" allows you to enter a list of values that will be shown to the user as the values they can select from as input.
	ppsDefaultValue: 'Wartość Domyślna', // With Default
	ppsPromptDefaultValueDescription: 'Wprowadź wartość domyślną. Wybierz wartość \'(pusty)\' z listy, aby domyślną wartością był \'null\'.', // Enter default value here. Select the \'(null)\' value from the list to make the default value \'null\'.
	ppsValidValues: 'Dozwolone Wartości', // Valid Values
	ppsAs: 'jako', // as
	ppsValidValuesDescription: 'Wprowadź zestaw wartości do utworzenia listy. Dla każdego wiersza z lewej strony wprowadź wartość, która zostanie przekazana do procedury składowanej. Z prawej strony należy wprowadzić etykietę, która zostanie wyświetlona użytkownikowi przeglądającemu raport.', // Enter a set of values that make up the list. For each row, enter a value on the left used as input into the stored procedure, and a corresponding label on the right that will be displayed to the user viewing the report.
	ppsAttributeBinding: 'Atrybut', // Attribute
	ppsAttributeBindingDescription: 'Lista różnych wartości dla tego atrybutu zostanie przedstawiona użytkownikowi jako możliwe opcje do przekazania do procedury składowanej.', // The list of distinct values from this attribute will be shown to the user as available options that they can select from as input into the stored procedure.
	ppsAnyValue: 'Dowolna Wartość', // Any Value
	ppsFromTheDatabase: 'Z Bazy Danych', // From The Database
	ppsFromAList: 'Z Lisrt', // From A List
	ppsAllowNull: 'Zezwól na puste', // Allow Null
	ppsPromptAllowNullDescription: 'Określa, czy użytkownik może wprowadzić pustą wartość.', // Determines if the user can enter a null value for the prompt.
	ppsDataType: 'Typ Danych', // Data Type
	ppsLogicalDataType: 'Jako Data', // As Date Type
	ppsName: 'Nazwa', // Name
	ppsActAs: 'Jak', // Act As
	ppsCollectionName: 'Nazwa Kolekcji', // Collection Name
	ppsDescription: 'Opis', // Description
	ppsHidden: 'Ukryty', // Hidden
	ppsFormat: 'Format',
	ppsCollapseInRelations: 'Zwiń w Relacjach', // Collapse In Relations
	ppsDefaultAggregateAttributes: 'Domyślne Atrybuty Agregacji', // Default Aggregate Attributes
	ppsDefaultDetailAttributes: 'Domyślne Atrybuty Szczegółów', // Default Detail Attributes
	ppsIdentifyingAttributes: 'Atrybuty Identyfikujące', // Identifying Attributes
	ppsCommon: 'Zwykłe', // Common
	ppsDiscourageGrouping: 'Odradzaj Grupowanie', // Discourage Grouping
	ppsIsAggregate: 'Jest Agregatem', // Is Aggregate
	ppsNullable: 'Może Być Pusty', // Nullable
	ppsSupportsBlank: 'Wspiera Puste Wartości', // Support Blank Values
	ppsSupportsNull: 'Wspiera Wartości null', // Support Null Values
	ppsValueSelection: 'Wybór Wartości', // Value Selection
	'valueSelection!0': 'Brak', // None
	'valueSelection!1': 'Lista Rozwijana', // Dropdown
	'valueSelection!2': 'Lista', // List
	ppsVariationOf: 'Wariacja', // Variation Of
	ppsType: 'Typ', // Type
	ppsExpression: 'Wyrażenie', // Expression
	'dataType!0': 'Null',
	'dataType!1': 'DataCzas', // DateTime
	'dataType!2': 'Float',
	'dataType!4': 'Decimal',
	'dataType!8': 'Integer',
	'dataType!16': 'Boolean',
	'dataType!32': 'Napis', // String
	'dataType!64': 'Binarny', // Binary
	'dataType!127': 'Wszystkie', // All
	'dataType!128': 'KluczEncji', // EntityKey

	// Security Filter Editor
	ppsSecurityFilter: 'Filtr bezpieczeństwa', // Security Filter
	ppsFilterExpress: 'Filtruj Wyrażenie', // Filter Expression
	ppsUseExistingFilter: 'Użyj Istniejącego Filtru', // Use Existing Filter
	'ppsSecurityFilterOperation!EqualTo': 'Równy', // Equals
	'ppsSecurityFilterOperation!NotEqualTo': 'Różny od', // Not Equals
	'ppsSecurityFilterOperation!In': 'W', // In
	'ppsSecurityFilterOperation!NotIn': 'Nie W', // Not In
	ppsSecurityFilterDeleteConfirmTitle: 'Potwierdź usunięcie atrybutu filtru', // Confirm removing filter attribute
	ppsSecurityFilterDeleteConfirmMessage: 'To wyrażenie jest również używane jako filtr w następujących encjach:({{entities}}). Czy chcesz usunąć wszystkie filtry, które odnoszą się do tego atrybutu?', // This expression defined for this filter is also used as a filter in the following entities:({{entities}}). Do you want to delete all the filters that reference this attribute?
	ppsSecurityFilterDeleteAll: 'Usuń Wszystko', // Delete All
	ppsSecurityFilterDeleteOne: 'Usuń Tylko Ten Atrybut', // Only Delete This
	ppsNoExistingSecurityFilter: 'brak istniejącego filtru', // no existing filter
	ppsSecurityFilterClickToSelect: 'Klik...', // Click...

	ppsEntityTree: 'Drzewko Encji', // Entity Tree
	ppsAttributeTree: 'Drzewko Atrybutów', // Attribute Tree

	// Items Editor
	ppsEdit: 'Edytuj', // Edit
	ppsSave: 'Zapisz', // Save
	ppsApply: 'Zastosuj', // Apply
	ppsBack: 'Wstecz', // Back
	ppsAddItem: 'Dodaj element', // Add Item
	ppsNItems: '[{{count}} elementów]', // [{{count}} items]
	ppsEmpty: '<Pusty>', // <Empty>
	ppsCollectionIsEmpty: 'Kolekcja jest pusta', // Collection is empty

	ppsAttribute: 'Atrybut', // Attribute
	ppsAddAttribute: 'Dodaj Atrybut', // Add Attribute
	ppsRelation: 'Relacja', // Relation
	ppsAddRelation: 'Dodaj Relację', // Add Relation
	ppsCardinality: 'Rodzaj Relacji', // Cardinality
	'cardinality!0': 'Jeden', // One
	'cardinality!1': 'Wiele', // Many
	'cardinality!2': 'JedenOpcjonalna', // OptionalOne
	'cardinality!3': 'WieleOpcjonalna', // OptionalMany
	'cardinality!hint!0': 'Każdy {{target}} ma jeden i tylko jeden {{source}}.', // Each {{target}} has one and only one {{source}}.
	'cardinality!hint!1': 'Każdy {{target}} ma jeden lub więcej {{sources}}.',  // Each {{target}} has one or more {{sources}}.
	'cardinality!hint!2': 'Każdy {{target}} ma zero lub jeden {{source}}.',   // Each {{target}} has zero or one {{source}}.
	'cardinality!hint!3': 'Każdy {{target}} ma zero lub więcej {{sources}}.', // Each {{target}} has zero or more {{sources}}
	ppsRecursive: 'Rekurencyjna', // Recursive
	ppsIncludeSelf: 'Zwrotna', // Include Self
	ppsHiddenFields: 'Ukryte Pola', // Hidden Fields
	ppsView: 'Widok', // View
	ppsAttributeList: 'Lista Atrybutów', // Attribute List
	ppsRelationList: 'Lista Relacji', // Relation List
	ppsCondition: 'Warunek', // Condition
	ppsSourceEntity: 'Encja Źródłowa', // Source Entity
	ppsTargetEntity: 'Encja Docelowa', // Target Entity
	ppsSourceColumns: 'Kolumny Źródłowe', // Source Columns
	ppsTargetColumns: 'Kolumny Docelowe', // Target Columns
	ppsLoading: '[...wczytywanie...]', // [...loading...]
	ppsPleaseSelectTargetEntity: 'wybierz encję docelową', // please select target entity

	// Entity Props Title
	entityIdTitle: 'Unikalny identyfikator encji', // A unique identifier for the entity.
	entityNameTitle: 'Nazwa encji', // The name of the entity.
	entityBindingTitle: 'Powiązanie do obiektu bazy danych, który reprezentuje encję', // The binding to the database object which represents the entity.
	entityCollectionNameTitle: 'Nazwa kolekcji instancji encji. Pozwala na korektę odmiany w liczbie mnogiej.', // The name of a collection of instances of the entity. This allows you to correct for irregular plural spellings.
	entityDescriptionTitle: 'Opis jest wyświetlany jako podpowiedź podczas najechania kursorem na encję w projektancie.', // The description is shown as a tooltip when the user hovers over the entity in the designer.
	entityHiddenTitle: '', // Hides the entity from the root list of entities in the designer. If the entity is used in a relation, it will appear in the relation accordingly.
	entityCollapseInRelationsTitle: 'Wartość wskazuje, czy encje nadrzędne i podrzędne tej encji są bezpośrednio połączone.', // The value indicates whether the parent and child entities of this entity are directly connected.
	entitySecurityFilterTitle: 'Atrybut używany jako filtr dla tej encji.', // The attribute to use as a filter for this entity.
	entityDefaultAggregateAttributesTitle: 'Atrybuty agregatu wyświetlane w aplikacji jeśli ta encja jest wyświetlana jako agregat.', // The aggregate attributes to show in client applications when this entity displays as an aggregate.
	entityDefaultDetailAttributesTitle: 'Atrybuty wyświetlane w aplikacji jeśli ta encja jest wyświetlana.', // The attributes that client applications show when this entity displays.
	entityIdentifyingAttributesTitle: 'Atrybuty wykorzystywane przez aplikację do identyfikacji instancji encji dla użytkownika.', // The attributes that client applications use to identify an instance of the entity to the user.

	// Attribute Props Title
	attrIdTitle: 'Unikalny identyfikator atrybutu.', // A unique identifier for the attribute.
	attrNameTitle: 'Nazwa atrybutu.', // The name of the attribute.
	attrBindingTitle: 'Powiązanie do obiektu bazy danych, który reprezentuje tę pozycję.', // The binding to the database object which represents this item.
	attrDataTypeTitle: 'Typ danych atrybutu. Jeśli jest Wyrażeniem, to typ danych musi pokrywać się z typem danych Wyrażenia.', // The data type of the attribute. If an Expression is present, the DataType value must match the DataType value of the Expression.
	attrLogicalDataTypeTitle: 'Ten typ danych atrybutu powinien być traktowany jako Data.', // This data type of the attribute should be treated as Date.
	attrDescriptionTitle: 'Opis jest wyświetlany jako podpowiedź podczas najechania kursorem na atrybut w projektancie.', // The Description is shown as a tooltip when the user hovers over the attribute in the designer.
	attrDiscourageGroupingTitle: 'Ta wartość wskazuje, czy aplikacja odradza użytkownikowi grupowanie tego atrybutu. Odradzaj Grupowanie powinno być ustawione dla pól z unikalnymi wartościami, jak na przykład numery telefonów. Jeśli atrybut jest kluczem lub atrybutem identyfikującym encji, aplikacja grupuje po kluczach encji', // This value indicates whether the client application discourages the user from grouping on this attribute. DiscourageGrouping should be set on fields with unique values, for example, phone numbers. If the attribute is a key or identifying attribute of the entity, the client application groups on the entity\'s key attributes instead.
	attrFormatTitle: 'Ciąg formatujący .NET Framework dla wartości tego atrybutu.', // The .NET Framework format string used to format the value of the attribute. ### https://docs.microsoft.com/pl-pl/dotnet/standard/base-types/standard-numeric-format-strings
	attrHiddenTitle: 'Ta wartość wskazuje czy element modelu jest wyświetlany użytkownikowi.', // This value indicates whether the model item is displayed to the user.
	attrIsAggregate: 'Ta wartość wskazuje, czy atrybut jest agregatemm który może być obliczony w kontekście nie tylko zawierającej encji, ale również każdej innej encji, dla której występuje relacja jeden-wiele z encją zawierającą. Jeśli ta wartość nie jest ustawiona, atrybut traktowany jest jako skalarny. JestAgregatem może być wybrane tylko dla atrybutów z niezakotwiczonymi wyrażeniami.', // This value indicates whether the attribute is an aggregate that can be calculated in the context of not just the containing entity, but also any other entity for which there is a one-to-many relationship within the containing entity. If this is not set, the attribute is treated as scalar. IsAggregate can only be true for attributes with non-anchored expressions.
	attrNullableTitle: 'Ta wartość wskazuje czy atrybut może przyjmować puste wartości. Jest wykorzystywana do określenia w jaki sposób poprawnie wykonać operacje łączenia biorąc pod uwagę rodzaj relacji.', // This value indicates whether the attribute can have a null value. It is used for determining how to execute join operations correctly considering cardinality
	attrValueSelectionTitle: 'Ta wartość określa zachowanie aplikacji przy wybieraniu wartości dla atrybutu, bazując na oczekiwanej liczbie unikalnych wartości. Dostępne są trzy opcje: Brak, Lista Rozwijana oraz Lista. Domyślna opcja to Brak, która wymaga wpisania wartości przez użytkownika. Przy wybraniu Listy Rozwijanej unikalne wartości wyświetlane są w prostym menu rozwijanym. Przy wybraniu Listy unikalne wartości są wyświetlane w interfejsie jako lista. Atrybut ignorowany w przypadku zaznaczenia opcji JestAgregatem.', // This value determines the client application behavior for selecting values of the attribute, based on the expected number of unique values. Three options are available: None, Dropdown, and List. By default, None is selected which requires the user to type in a value. When Dropdown specified, the unique values are displayed in a simple dropdown. When List is specified, the unique values are displayed in the UI as a list. If IsAggregate is True, then this attribute is ignored.
	attrSupportsNullValuesTitle: 'Określa, czy wartości "null" są znaczące dla użytkownika oraz powinny być wyświetlane. Jeśli opcja Wspiera Puste Wartości jest zaznaczona, optymalizacja filtrowania w zapytaniach jest ograniczona.', // Specifies whether or not the "null" value is a meaningful value for the field and should be shown to end users in prompts. When Supports Null Values is on, some filtering optimizations in queries are restricted.
	attrSupportsBlankValuesTitle: 'Określa, czy puste wartości są znaczące dla użytkownika oraz powinny być wyświetlane. Jeśli opcja Wspiera Puste Wartości jest zaznaczona, optymalizacja filtrowania w zapytaniach jest ograniczona.', // Specifies whether or not the empty string (blank) value is a meaningful value for the field and should be shown to end users in prompts. When Supports Blank Values is on, some filtering optimizations in queries are restricted.
	attrExpressionTitle: 'Wyrażenie atrybutu.', // The Expression of the attribute.

	// Relation Props Title
	relIdTitle: 'Unikalny identyfikator relacji.', // The unique identifier for the relation.
	relNameTitle: 'Nazwa relacji.', // The name of the relation.
	relBindingTitle: 'Powiązanie do obiektu bazy danych, który reprezentuje tę pozycję.', // The binding to the database object which represents this item.
	relCardinalityTitle: 'Wartość określająca rodzaj relacji.', // This value indicates the cardinality of the relation.
	relDescriptionTitle: 'Opis jest wyświetlany jako podpowiedź podczas najechania kursorem na relację w projektancie.', // The Description value is shown as a tooltip when the user hovers over the relation in the designer.
	relHiddenTitle: 'Ta wartość wskazuje, czy element modelu jest wyświetlany użytkownikowi.', // This value indicates whether the model item is displayed to the user.
	relRecursiveTitle: 'Ta wartość wskazuje, czy relacja jest domyślnie wielokrotnie przenoszona.', // This value indicates whether the relationship is traversed repeatedly by default. ###
	relIncludeSelfTitle: 'Ta wartość wskazuje, czy wielokrotne przenoszenie relacji uwzględnia brak przenoszenia.', // This value indicates whether repeating traversal of the relation includes zero traversals. ###
	relHiddenFieldsTitle: 'Ta wartość wskazuje, czy aplikacja wyświetla pola encji docelowej z relacji.', // This element indicates whether the client application displays the relation\'s target entity fields when the relation is used to reach the entity. ###

	// Add Attribute Props Title
	addAttrNameTitle: 'Nazwa atrybutu.', // The name of the attribute.
	addAttrDescriptionTitle: 'Opis jest wyświetlany jako podpowiedź podczas najechania kursorem na atrybut w projektancie.', // The Description is shown as a tooltip when the user hovers over the attribute in the designer.
	addAttrAttributeTypeTitle: 'Typ atrybutu, który chcesz dodać.', // The type of attribute you want to add.
	addAttrDatabaseFieldTitle: 'Wybierz istniejącą kolumnę.', // Select an existing column.

	// Prompt
	continueDraft: 'Wznów wersję roboczą', // Continue Draft
	continueDraftDescription: 'Czy chcesz przywrócić wersję roboczą zawierającą ostatnie zmiany? Przy wyborze Nie wszystkie zmiany wprowadzone w ostatniej sesji zostaną utracone i otwarta zostanie najświeższa wersja produkcyjna modelu.', // A draft was saved of your last changes. Do you want to edit from the saved draft? If you select No, all changes made in your last editing session will be lost and you\'ll be returned to the latest production version of the model.
	confirmation: 'Potwierdzenie', // Confirmation
	yes: 'Tak', // Yes
	no: 'Nie', // No
	delete: 'Usuń', // Delete
	cancel: 'Anuluj', // Cancel
	deleteConfirm: 'Usuń na stałe', // Delete Permanently
	deleteEntityConfirmMsg: 'Czy chcesz usunąć encję({{name}}) na stałe?', // Do you want to delete entity({{name}}) permanently?
	deleteAttributeConfirmMsg: 'Czy chcesz usunąć atrybut({{name}}) na stałe?', // Do you want to delete attribute({{name}}) permanently?
	deleteRelationConfirmMsg: 'Czy chcesz usunąć relację({{name}}) na stałe?', // Do you want to delete relation({{name}}) permanently?
	closeDesignerConfirm: 'Czy chcesz opuścić projektanta modelu semantycznego i odrzucić zmiany?', // Do you want to leave semantic model designer and discard the changes?
	comment: 'Komentarz', // Comment
	commentDesc: 'Komentarz (ten komentarz pojawi się w historii wersji modelu)', // Comment(This comment appears in the model version history.)

	// Add Property
	databaseColumn: 'Pole Bazy Danych', // Database Field
	databaseColumnDesp: 'Wybierz tę opcję, aby utworzyć nową bazę atrybutów w polu w bazie danych.', // Choose this option to create a new attribute base on a field in the database.
	relatedEntity: 'Powiązana Encja', // Related Entity
	relatedEntityDesp: 'Użyj tej opcji aby wybrać atrybut z powiązanej encji, który powinien pojawić się bezpośrednio na tej encji.', // Use this option to choose an attribute from a related entity which will then appear directly on this entity.
	expression: 'Wyrażenie SQL', // SQL Expression
	expressionDesp: 'Wybierz tę opcję aby stworzyć nowy atrybut bazujący na wyrażeniu SQL.', // Choose this option to create a new attribute based on a SQL expression.
	attributeSource: 'Źródło Atrybutu', // Attribute Source
	attributeType: 'Typ Atrybutu', // Attribute Type
	expressionDefinition: 'Definicja Wyrażenia', // Expression Definition
	preview: 'Podgląd', // Preview
	selectDatabaseField: 'Wybierz Pole Bazy Danych', // Select Database Field
	emptyAttributeName: 'Nazwa atrybuti nie może być pusta.', // Attribute name can not be empty.
	emptySQLExpression: 'Wyrażenie SQL nie może być puste podczas dodawania atrybutu wyrażenia SQL.', // The SQL expression can not be empty when adding a SQL expression attribute.
	expressionValidate: 'Sprawdź poprawność', // Validate
	expressionPreviewSchema: 'Podgląd Schematu', // Preview Schema
	expressionPreviewData: 'Podgląd Danych', // Preview Data
	validSQLExpression: 'Sprawdź poprawność wyrażenia SQL przed zapisaniem', // Please verify the SQL expression before saving
	cannotRemoveAttr: 'Atrybut ({{name}}) istnieje w ustawieniu ({{setting}}) i nie może zostać usunięty', // The attribute ({{name}}) exists in ({{setting}}) setting and cannot be removed
	'Column Name': 'Nazwa kolumny', // Column Name
	'Size': 'Rozmiar', // Size
	'Data Type': 'Typ danych', // Data Type
	'Is Nullable': 'Nullable', // Is Nullable

	// Validate, Save, Publish message.
	validateSuccess: 'Sprawdzanie poprawności modelu zakończone.', // Model validated successfully.
	saveDraftSuccess: 'Model został zapisany jako wersja robocza.', // Model saved as draft successfully.
	saveAndPublishDraftSuccess: 'Model został zapisany i opublikowany.', // Model saved and published successfully.
	getDatabasesFailed: 'Pobieranie baz danych nie powiodło się. Serwer nie został znaleziony lub jest niedostęny. Zweryfikuj ustawienia i upewnij się, że serwer zezwala na połączenia zdalne.', // Get databases failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections.
	modelBreakingChanges: 'Część Zmian Psuje Model', // Model Breaking Changes
	publishBrokenReport: 'Raport \'{{name}}\' został uszkodzony przez wprowadzone zmiany, dlatego nadal jest powiązany z poprzednią wersją modelu, tak aby mógł być wyświetlany bez błędów.', // The \'{{name}}\' report was broken by your changes, therefore it is still bound to the old version of this model so that users can view this report without errors.

	// MessageBox
	MessageBox: 'Komunikat', // Message
	OK: 'OK',
	Yes: 'Tak', // Yes
	No: 'Nie', // No

	// build in user context
	name: 'nazwa', // name
	email: 'email',
	phone_number: 'nr telefonu', // phone number
	given_name: 'imię', // given name
	family_name: 'nazwisko', // family name
	role: 'rola', // role

	// Storage Exception
	SemanticModelError_EntityNotFound: 'Encja nie została znaleziona lub brakuje uprawnień do wykonania tej akcji.', // Entity not found (or You do not have sufficient permissions on this document to perform the action).

	// Data Source
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
	TestConnection: 'Testuj połączenie', // Test Connection
	'DataSourceDisplayName!Oracle': 'Oracle',
	'DataSourceDisplayName!SqlServer': 'SQL Server',
	'DataSourceDisplayName!MySql': 'Mysql',
	'DataSourceDisplayName!Postgres': 'Postgres',
};
