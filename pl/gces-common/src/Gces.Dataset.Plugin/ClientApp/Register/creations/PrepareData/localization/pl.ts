export const portalPL: LanguageKeyValueMap = {
	'prepareDataForDashboard!name': 'Przygotuj dane do dashboardu', // Prepare Data
	'prepareDataForReport!name': 'Przygotuj dane do raportu', // Prepare Data
	'dashboard!name': 'DASHBOARD', // DASHBOARD
	'referenceDataSourceNames!name': 'REFERENCYJNE ŹRÓDŁA DANYCH', // REFERENCED DATASOURCES
	'report!name': 'RAPORT', // REPORT
	'datasource!name': 'ŹRÓDŁO DANYCH', // DATA SOURCE
};

export const datasetPL: LanguageKeyValueMap = {
	'PrepareData!title': 'Przygotuj dane', // Prepare Data
	'PrepareData!dataModel': 'Model danych', // Data Model
	'PrepareData!dataset': 'Zestaw danych', // Dataset
	'cacheModel!dashboard!title': 'Model w pamięci podręcznej', // Cached Model
	'dataModel!dashboard!title': 'Model zapytań bezpośrednich', // Direct Query Model
	'dataset!dashboard!title': 'Zbiór danych w pamięci podręcznej', // Cached Dataset
	'streamingDataset!dashboard!title': 'Zbiór danych strumieniowych', // Streaming Dataset
	'pushDataset!dashboard!title': 'Prześlij zbiór danych', // Push Dataset
	'dataModel!report!title': 'Model danych', // Data Model
	'dataset!report!title': 'Bezpośredni zbiór danych', // Direct Dataset
	'streamingDataset!report!title': 'Zbiór danych strumieniowych', // Streaming Dataset
	'pushDataset!report!title': 'Prześlij zbiór danych', // Push Dataset
	'action-create': 'Stwórz', // Create
	'prepareDataTip!dashboard!dataset': 'Zestaw danych w pamięci podręcznej wykonuje wstępnie ustawione zapytanie i buforuje dane na serwerze w celu zapewnienia wysokiej wydajności analizy danych i interaktywności.', // The Cached Dataset executes a preset query and caches the data in the server to provide high performance data analysis and interactivity.
	'prepareDataTip!dashboard!dataModel': 'Ten model danych wykonuje automatycznie generowane zapytania bezpośrednio w skonfigurowanym źródle danych, aby zapewnić aktualizowane w czasie rzeczywistym dane do pulpitów nawigacyjnych i raportów.', // This data model executes automatically generated query directly on the configured datasource to provide real-time updated data to Dashboards and Reports.
	'prepareDataTip!dashboard!cacheModel': 'Ten model danych pozyskuje dane ze wszystkich skonfigurowanych źródeł i buforuje dane na serwerze w strukturze Encja-Relacja, aby zapewnić wysoką wydajność i interaktywne środowisko.', // This data model sources data from all the configured sources and caches the data in the server in a Entity-Relationship structure to provide a high performance and interactive experience.
	'prepareDataTip!dashboard!streamingDataset': 'Ten zestaw danych udostępnia schemat zewnętrznego źródła do strumieniowego przesyłania danych w czasie rzeczywistym przy użyciu internetowych punktów końcowych. Tylko ograniczone dane są przechowywane i pozostają w pamięci.', // This dataset provides a schema for an external source to stream data in real-time using web end points. Only a limited data is stored and it remains in-memory.
	'prepareDataTip!dashboard!pushDataset': 'Ten zestaw danych zapewnia schemat dla zewnętrznego źródła do wypychania danych w czasie rzeczywistym na serwer Wyn przy użyciu internetowych punktów końcowych. Dane mogą być używane w pulpitach nawigacyjnych i są przechowywane jako pamięć podręczna zestawu danych.', // This dataset provides a schema for an external source to push real-time data to the Wyn server using web end points. The data can be used in dashboards and is stored as a dataset cache.
	'prepareDataTip!report!dataset': 'Zestaw danych zapytania bezpośredniego przechowuje wstępnie ustawione zapytanie i wysyła zapytanie do źródła danych bezpośrednio po jego wykonaniu, aby zapewnić aktualizowane w czasie rzeczywistym dane dla dokumentów.', // The Direct Query Dataset stores a preset query and queries the datasource directly when it is executed to provide real-time updated data for documents.
	'prepareDataTip!report!dataModel': 'Ten model danych wykonuje automatycznie generowane zapytania bezpośrednio w skonfigurowanym źródle danych, aby zapewnić aktualizowane w czasie rzeczywistym dane do pulpitów nawigacyjnych i raportów.', // This data model executes automatically generated query directly on the configured datasource to provide real-time updated data to Dashboards and Reports.
	'prepareDataTip!report!streamingDataset': 'Ten zestaw danych udostępnia schemat zewnętrznego źródła do strumieniowego przesyłania danych w czasie rzeczywistym przy użyciu internetowych punktów końcowych. Tylko ograniczone dane są przechowywane i pozostają w pamięci.', // This dataset provides a schema for an external source to stream data in real-time using web end points. Only a limited data is stored and it remains in-memory.
	'prepareDataTip!report!pushDataset': 'Ten zestaw danych zapewnia schemat dla zewnętrznego źródła do wypychania danych w czasie rzeczywistym na serwer Wyn przy użyciu internetowych punktów końcowych. Dane mogą być używane w pulpitach nawigacyjnych i są przechowywane jako pamięć podręczna zestawu danych.', // This dataset provides a schema for an external source to push real-time data to the Wyn server using web end points. The data can be used in dashboards and is stored as a dataset cache.
	InputCachedModelNameTip: 'Wprowadź nazwę modelu w pamięci podręcznej', // Input Cached Model Name
	PleaseInputCachedModelName: 'Wprowadź nazwę modelu w pamięci podręcznej.', // Please Input Cached Model Name.
	CachedModelNameOnlySpacesError: 'Nazwa modelu w pamięci podręcznej jest nieprawidłowa. Proszę nie używać spacji tylko jako nazwy.', // The cached model name is invalid. Please do not use spaces only as name.
	InvalidCachedModelName: 'Nazwa modelu w pamięci podręcznej jest nieprawidłowa. Proszę nie używać zastrzeżonych symboli < > \ : ? * / | " i nie używaj . (kropka) jako pierwszego symbolu w nazwie modelu w pamięci podręcznej', // The cached model name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the cached model name
	CachedModelNameExisted: 'Nazwa {{name}} już istnieje.', // Name {{name}} already exist.
	CreateCacheModelHint: 'Kliknij przycisk OK, aby wejść do projektanta CacheModel, a dokument został utworzony.', // Click the OK button to enter the CacheModel designer, and the document has been created.
	cacheModelName: 'Nazwa modelu pamięci podręcznej' // Cache Model Name
};
