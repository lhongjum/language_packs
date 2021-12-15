export const portalPL: LanguageKeyValueMap = {
	'prepareDataForDashboard!name': 'Przygotuj dane', // Prepare Data
	'prepareDataForReport!name': 'Prepare Data', // Prepare Data
	'dashboard!name': 'DASHBOARD',
	'referenceDataSourceNames!name': 'REFERENCED DATASOURCES',
	'report!name': 'RAPORT', // REPORT
	'datasource!name': 'ŹRÓDŁO DANYCH', // DATA SOURCE
};

export const datasetPL: LanguageKeyValueMap = {
	'PrepareData!title': 'Przygotuj dane', // Prepare Data
	'PrepareData!dataModel': 'Model danych', // Data Model
	'PrepareData!dataset': 'Zestaw danych', // Dataset
	'cacheModel!dashboard!title': 'Cached Model',
	'dataModel!dashboard!title': 'Direct Query Model',
	'dataset!dashboard!title': 'Cached Dataset',
	'streamingDataset!dashboard!title': 'Streaming Dataset',
	'pushDataset!dashboard!title': 'Push Dataset',
	'dataModel!report!title': 'Model danych', // Data Model
	'dataset!report!title': 'Direct Dataset',
	'streamingDataset!report!title': 'Zbiór danych strumieniowych', // Streaming Dataset
	'pushDataset!report!title': 'Push Dataset',
	'action-create': 'Create',
	'prepareDataTip!dashboard!dataset': 'The Cached Dataset executes a preset query and caches the data in the server to provide high performance data analysis and interactivity.',
	'prepareDataTip!dashboard!dataModel': 'This data model executes automatically generated query directly on the configured datasource to provide real-time updated data to Dashboards and Reports.',
	'prepareDataTip!dashboard!cacheModel': 'This data model sources data from all the configured sources and caches the data in the server in a Entity-Relationship structure to provide a high performance and interactive experience.',
	'prepareDataTip!dashboard!streamingDataset': 'This dataset provides a schema for an external source to stream data in real-time using web end points. Only a limited data is stored and it remains in-memory.',
	'prepareDataTip!dashboard!pushDataset': 'This dataset provides a schema for an external source to push real-time data to the Wyn server using web end points. The data can be used in dashboards and is stored as a dataset cache.',
	'prepareDataTip!report!dataset': 'The Direct Query Dataset stores a preset query and queries the datasource directly when it is executed to provide real-time updated data for documents.',
	'prepareDataTip!report!dataModel': 'This data model executes automatically generated query directly on the configured datasource to provide real-time updated data to Dashboards and Reports.',
	'prepareDataTip!report!streamingDataset': 'This dataset provides a schema for an external source to stream data in real-time using web end points. Only a limited data is stored and it remains in-memory.',
	'prepareDataTip!report!pushDataset': 'This dataset provides a schema for an external source to push real-time data to the Wyn server using web end points. The data can be used in dashboards and is stored as a dataset cache.',
	InputCachedModelNameTip: 'Input Cached Model Name',
	PleaseInputCachedModelName: 'Please Input Cached Model Name.',
	CachedModelNameOnlySpacesError: 'The cached model name is invalid. Please do not use spaces only as name.',
	InvalidCachedModelName: 'The cached model name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the cached model name',
	CachedModelNameExisted: 'Name {{name}} already exist.',
	CreateCacheModelHint: 'Click the OK button to enter the CacheModel designer, and the document has been created.',
	cacheModelName: 'Cache Model Name'
};
