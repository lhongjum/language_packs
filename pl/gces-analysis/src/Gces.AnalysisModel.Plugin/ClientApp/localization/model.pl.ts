export const modelPL: LanguageKeyValueMap = {
	analysisModel: 'Data Model Designer',
	CloseAnalysisDesignerConfirm: 'Do you want to leave data model designer and discard the changes?',
	confirmation: 'Potwierdzenie', // Confirmation
	yes: 'Tak', // Yes
	no: 'Nie', // No
	save: 'Save',
	cancel: 'Anuluj', // Cancel
	add: 'Dodaj', // Add
	setSecurityFilterValue: 'Set Security Filter Value(s)',
	undo: 'Undo',
	redo: 'Redo',
	validate: 'Validate',
	entities: 'Entities',
	addEntity: 'Add Entity',
	addRelation: 'Add Relationship',
	resetLayout: 'Reset Layout',
	markPathStart: 'Mark Path Start',
	markPathEnd: 'Mark Path End',
	clearMark: 'Clear Mark',
	viewSettings: 'View Settings',
	updateAnalysisModel: 'Update Data Model',
	saveAnalysisModel: 'Save Data Model',
	Description: 'Description',
	comment: 'Comment',
	deleteRelation: 'Delete Relationship',
	delete: 'Delete',
	unpin: 'Unpin',
	pin: 'Pin',
	relationFromTo: 'from \'{{sourceEntity}}\'[{{sourceColumns}}] to \'{{targetEntity}}\'[{{targetColumns}}]',
	addAttribute: 'Add Attribute',
	deleteAttribute: 'Delete Attribute',
	deleteEntity: 'Delete Entity',
	search: 'Search',
	searchNoResult: 'brak wyników', // no items
	editorEmpty: '<Pusty>', // <Empty>
	FetchDataFailed: 'Pozyskiwanie danych nie powiodło się', // Fetch data failed
	ConnectSuccess: 'Poprawnie połączono', // Connect successfully.
	validateSuccess: 'Sprawdzanie poprawności modelu zakończone.', // Model validated successfully.
	Properties: 'Properties',
	beHidden: 'Already hidden',
	saveTips: 'Please click "Save" to complete the creation of the model',

	// cardinality
	'cardinality!0': '1 To 1',
	'cardinality!1': '1 To N',
	'cardinality!2': '0..1 To N',
	'cardinality!3': 'N To 1',
	'cardinality!4': 'N To 0..1',
	'cardinality!hint!0': 'One {{source}} record corresponds to one {{target}} record.',
	'cardinality!hint!1': 'One {{source}} record corresponds to many {{target}} records.',
	'cardinality!hint!2': 'Zero or one {{source}} record corresponds to many {{target}} records.',
	'cardinality!hint!3': 'Many {{source}} records correspond to one {{target}} record.',
	'cardinality!hint!4': 'Many {{source}} records correspond to zero or one {{target}} record.',

	// home
	diagram: 'Diagram',
	relationshipManagement: 'Relationship Management',
	settings: 'Settings',

	// relationship management
	available: 'Active',
	name: 'Name',
	fromEntity: 'From: Entities (Attributes)',
	toEntity: 'To: Entities (Attributes)',
	cardinality: 'Cardinality',
	bidirectionCrossFiltering: 'Bidirectional Cross Filter',

	// Data Type
	'DataType!0': 'Number',
	'DataType!1': 'Text',
	'DataType!2': 'Boolean',
	'DataType!3': 'Binary',
	'DataType!4': 'GUID',
	'DataType!5': 'Date',
	'DataType!6': 'DateTime',

	// Editor
	show: 'Show',
	empty: 'Empty',
	apply: 'Apply',
	textItem: '[{{count}} item]',
	textItem_plural: '[{{count}} items]',
	greaterThanMaxLength: 'Must be less than or equal to the maximum length {{ maxLength }}',
	notMatchPattern: 'Must match the regex {{ pattern }}',
	'multipleValues!label': '<...>',
	'multipleValues!title': 'multiple values',
	sourceEntity: 'Source Entity',
	targetEntity: 'Target Entity',
	sourceColumns: 'Source Attributes',
	targetColumns: 'Target Attributes',

	// Security Filter Editor
	filterExpression: 'Filtruj Wyrażenie', // Filter Expression
	'securityFilterOperator!0': 'Równy', // Equals
	'securityFilterOperator!1': 'W', // In
	'securityFilterOperator!2': 'Różny od', // Not Equals
	'securityFilterOperator!3': 'Nie W', // Not In
	userContext: 'Kontekst użytkownika', // User Context
	organizationContext: 'Dane preferencji organizacji', // Organization Context

	// user & organization context
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

	// Model Setting
	dataSourceSetting: 'Data Source Settings',
	connectionString: 'Connection String',

	// notifications
	'pathNotFound!title': 'Path not found',
	'pathNotFound!Description': 'There is no connective path between entity {{label1}} and entity {{label2}}.',
	relationCheckFailed: 'Relations checking failed',
	multipleDirectRelations: 'There are multiple connective paths between entity {{name1}} and entity {{name2}}.',
	multiplePathRelations: 'There are multiple paths between entity {{name1}} and entity {{name2}}. Path1 is {{path1}}. Path2 is {{path2}}.',

	// Sidebar
	propertyTips: 'Select one or more model objects to set their properties.',
	'attribute!title': 'ATTRIBUTE',
	'entity!title': 'ENTITY',
	'relation!title': 'RELATION',
	'viewSettings!title': 'VIEW SETTINGS',
	CAT_NAMING: 'NAMING',
	CAT_INFORMATION: 'INFORMATION',
	CAT_COMMON: 'COMMON',
	CAT_RELATION: 'RELATION',
	CAT_APPEARANCE: 'Wygląd', // Appearance
	PROP_Name: 'Name',
	PROP_ID: 'ID',
	PROP_IsNullable: 'Is Nullable',
	PROP_IsUnique: 'Is Unique',
	PROP_Binding: 'Binding',
	PROP_IsHidden: 'Is Hidden',
	PROP_SecurityFilter: 'Security Filter',
	PROP_Cardinality: 'Cardinality',
	PROP_CrossFilter: 'Bidirectional Cross Filter',
	PROP_Inactive: 'Make Relation Inactive',
	PROP_Condition: 'Condition',
	PROP_ShowNodeLabel: 'Always Show Node Label',
	PROP_ShowLinkCardinality: 'Show Link Cardinality',
	attr_BindingType_binding: 'Binding',
	attr_BindingType_query: 'Query',
	field: 'Field',
	table: 'Table',
	view: 'View',
	sqlExpression: 'SQL Expression',
	sqlQuery: 'SQL Query',
	logicalDataType: 'Logical Data Type',
	CLRDataType: 'System Data Type',
	conditionSelectSourceEntity: 'please select source entity',
	conditionSelectTargetEntity: 'please select target entity',

	// confirm
	confirmDeleteAttribute: "Confirm to remove the attribute '{{attribute}}' on entity '{{entity}}'?",
	confirmDeleteRelation: "Confirm to remove the relation between '{{source}}' and '{{target}}'?",
	confirmDeleteEntity: "Confirm to remove the entity '{{name}}'?",
	withSecurityFilters: "Security filters that refer to '{{name}}' will be deleted as well.",
	withRelations: "Relations that refer to '{{name}}' will be deleted as well.",
	withSecurityFiltersAndRelations: "Security filters and Relations that refer to '{{name}}' will be deleted as well.",

	// property grid
	emptyListPlaceholder: 'Select an item to see properties',
	gridSearchPlaceholder: 'enter property name here...',
	closeSearchBtnTitle: 'Close',
	noCommonProperties: 'There are no common properties',
	textUnknownProperty: 'Unknown Property:',

	// preview
	preview: 'Preview ({{name}})',
	'preview!title': 'Preview',
	previewNoRows: 'Preview No Rows',
	previewNoResult: 'Preview No Results',
	'preview!attribute': 'Attribute',
	'preview!operator': 'Operator',
	'preview!value': 'Value',
};