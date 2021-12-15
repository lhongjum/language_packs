export const resEN: LanguageKeyValueMap = {
	'createSemanticModel!name': 'Create Data Model',

	selectModelType: 'Select Model Type',
	specifyDatasource: 'Specify a data source',
	configDatasource: 'Config data source',
	selectTableAndView: 'Select tables and views',
	generateModel: 'Generate a model',
	filterItems: 'Filter items by name:',
	findAdditionRelations: 'Find additional relations:',
	selectOrClearAllItems: 'Select or clear all items:',
	modelAlreadyExist: "Data model '{{name}}' already exist.",
	invalidSemanticModelName: 'The data model name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the data model name.',

	connectError: 'Connection error',
	connectSuccess: 'Connect successfully',
	connectionErrorCode_100012: 'Invalid user context: {{claimName}}.',

	dataSource: 'Data Source',
	back: 'Back',
	next: 'Next',
	done: 'Done',
	close: 'Close',
	expand: 'Expand',
	collapse: 'Collapse',
	CreateSemanticIframeTitle: 'Create Data Model',
	EditSemanticIframeTitle: 'Edit Data Model',
	// Designer
	// App Bar
	abSave: 'Save Draft',
	abSaveAndPublish: 'Save And Publish',
	revisionCheckTitle: 'Update the version of the relevant reports',
	refRevisionUpdateWarning: 'This will take some time, and there is a risk that the operation may cause the relevant reports to be corrupted.',
	abValidate: 'Validate',
	abProperties: 'Properties',
	documentBeReferencedMessage: 'This document is referenced by other document.',
	referencedDocuments: 'Relevant Reports:',

	// Workspace
	wsName: 'Name',
	wsAdd: 'Add',
	wsRemove: 'Remove',
	wsRegenerate: 'Regenerate',
	wsSearch: 'Search',
	wsEntities: 'Entities',
	wsAttributes: 'Attributes',
	wsRelations: 'Relations',
	searchNoResult: 'no items',
	wsAttribute: 'Attribute',
	wsType: 'Type',
	wsDescription: 'Description',

	wsRelatedRelation: 'Related Relation',
	wsRelatedEntity: 'Related Entity',

	// Props
	ppsModel: 'Model',
	ppsConnection: 'Connection',
	ppsModelName: 'Model Name',
	ppsCommandTimeout: 'Command Timeout(s)',
	ppsCommandTimeoutLimitation: 'Command timeout must be an integer value',
	ppsConnectionString: 'Connection String',
	ppsAdd: 'Add',
	ppsCancel: 'Cancel',
	ppsDelete: 'Delete',

	ppsEntity: 'Entity',
	ppsAddEntity: 'Add Entity',
	ppsInformation: 'Information',
	ppsParameters: 'Parameters',
	ppsNaming: 'Naming',
	ppsAppearance: 'Appearance',
	ppsAttributes: 'Attributes',
	ppsId: 'ID',
	ppsBindingMode: 'Binding Mode',
	ppsTableOrView: 'Table or View',
	ppsBinding: 'Binding',
	ppsQuery: 'Query',
	ppsProcedure: 'Procedure',
	ppsAdvanced: 'Advanced',
	ppsPrompt: 'Prompt',
	ppsPromptDescription: 'Enter text to prompt consumers of the report to select a value.',
	ppsStatic: 'Static',
	ppsPromptMode: 'Allow Values',
	ppsPromptModeDescription: '"Any value" allows the user to enter any value. They must know what values are permissible. "From the database" allows you to choose an attribute in the database to get values from. The list of distinct values from the selected attribute will be shown to the user as the values they can select as input. "From a list" allows you to enter a list of values that will be shown to the user as the values they can select from as input.',
	ppsDefaultValue: 'With Default',
	ppsPromptDefaultValueDescription: 'Enter default value here. Select the \'(null)\' value from the list to make the default value \'null\'.',
	ppsValidValues: 'Valid Values',
	ppsAs: 'as',
	ppsValidValuesDescription: 'Enter a set of values that make up the list. For each row, enter a value on the left used as input into the stored procedure, and a corresponding label on the right that will be displayed to the user viewing the report.',
	ppsAttributeBinding: 'Attribute',
	ppsAttributeBindingDescription: 'The list of distinct values from this attribute will be shown to the user as available options that they can select from as input into the stored procedure.',
	ppsAnyValue: 'Any Value',
	ppsFromTheDatabase: 'From The Database',
	ppsFromAList: 'From A List',
	ppsAllowNull: 'Allow Null',
	ppsPromptAllowNullDescription: 'Determines if the user can enter a null value for the prompt.',
	ppsDataType: 'Data Type',
	ppsLogicalDataType: 'As Date Type',
	ppsName: 'Name',
	ppsActAs: 'Act As',
	ppsCollectionName: 'Collection Name',
	ppsDescription: 'Description',
	ppsHidden: 'Hidden',
	ppsFormat: 'Format',
	ppsCollapseInRelations: 'Collapse In Relations',
	ppsDefaultAggregateAttributes: 'Default Aggregate Attributes',
	ppsDefaultDetailAttributes: 'Default Detail Attributes',
	ppsIdentifyingAttributes: 'Identifying Attributes',
	ppsCommon: 'Common',
	ppsDiscourageGrouping: 'Discourage Grouping',
	ppsIsAggregate: 'Is Aggregate',
	ppsNullable: 'Nullable',
	ppsSupportsBlank: 'Support Blank Values',
	ppsSupportsNull: 'Support Null Values',
	ppsValueSelection: 'Value Selection',
	'valueSelection!0': 'None',
	'valueSelection!1': 'Dropdown',
	'valueSelection!2': 'List',
	ppsVariationOf: 'Variation Of',
	ppsType: 'Type',
	ppsExpression: 'Expression',
	'dataType!0': 'Null',
	'dataType!1': 'DateTime',
	'dataType!2': 'Float',
	'dataType!4': 'Decimal',
	'dataType!8': 'Integer',
	'dataType!16': 'Boolean',
	'dataType!32': 'String',
	'dataType!64': 'Binary',
	'dataType!127': 'All',
	'dataType!128': 'EntityKey',

	// Security Filter Editor
	ppsSecurityFilter: 'Security Filter',
	ppsFilterExpress: 'Filter Expression',
	ppsUseExistingFilter: 'Use Existing Filter',
	'ppsSecurityFilterOperation!EqualTo': 'Equals',
	'ppsSecurityFilterOperation!NotEqualTo': 'Not Equals',
	'ppsSecurityFilterOperation!In': 'In',
	'ppsSecurityFilterOperation!NotIn': 'Not In',
	ppsSecurityFilterDeleteConfirmTitle: 'Confirm removing filter attribute',
	ppsSecurityFilterDeleteConfirmMessage: 'This expression defined for this filter is also used as a filter in the following entities:({{entities}}). Do you want to delete all the filters that reference this attribute?',
	ppsSecurityFilterDeleteAll: 'Delete All',
	ppsSecurityFilterDeleteOne: 'Only Delete This',
	ppsNoExistingSecurityFilter: 'no existing filter',
	ppsSecurityFilterClickToSelect: 'Click...',

	ppsEntityTree: 'Entity Tree',
	ppsAttributeTree: 'Attribute Tree',

	// Items Editor
	ppsEdit: 'Edit',
	ppsSave: 'Save',
	ppsApply: 'Apply',
	ppsBack: 'Back',
	ppsAddItem: 'Add Item',
	ppsNItems: '[{{count}} items]',
	ppsEmpty: '<Empty>',
	ppsCollectionIsEmpty: 'Collection is empty',

	ppsAttribute: 'Attribute',
	ppsAddAttribute: 'Add Attribute',
	ppsRelation: 'Relation',
	ppsAddRelation: 'Add Relation',
	ppsCardinality: 'Cardinality',
	'cardinality!0': 'One',
	'cardinality!1': 'Many',
	'cardinality!2': 'OptionalOne',
	'cardinality!3': 'OptionalMany',
	'cardinality!hint!0': 'Each {{target}} has one and only one {{source}}.',
	'cardinality!hint!1': 'Each {{target}} has one or more {{sources}}.',
	'cardinality!hint!2': 'Each {{target}} has zero or one {{source}}.',
	'cardinality!hint!3': 'Each {{target}} has zero or more {{sources}}.',
	ppsRecursive: 'Recursive',
	ppsIncludeSelf: 'Include Self',
	ppsHiddenFields: 'Hidden Fields',
	ppsView: 'View',
	ppsAttributeList: 'Attribute List',
	ppsRelationList: 'Relation List',
	ppsCondition: 'Condition',
	ppsSourceEntity: 'Source Entity',
	ppsTargetEntity: 'Target Entity',
	ppsSourceColumns: 'Source Columns',
	ppsTargetColumns: 'Target Columns',
	ppsLoading: '[...loading...]',
	ppsPleaseSelectTargetEntity: 'please select target entity',

	// Entity Props Title
	entityIdTitle: 'A unique identifier for the entity.',
	entityNameTitle: 'The name of the entity.',
	entityBindingTitle: 'The binding to the database object which represents the entity.',
	entityCollectionNameTitle: 'The name of a collection of instances of the entity. This allows you to correct for irregular plural spellings.',
	entityDescriptionTitle: 'The description is shown as a tooltip when the user hovers over the entity in the designer.',
	entityHiddenTitle: 'Hides the entity from the root list of entities in the designer. If the entity is used in a relation, it will appear in the relation accordingly.',
	entityCollapseInRelationsTitle: 'The value indicates whether the parent and child entities of this entity are directly connected.',
	entitySecurityFilterTitle: 'The attribute to use as a filter for this entity.',
	entityDefaultAggregateAttributesTitle: 'The aggregate attributes to show in client applications when this entity displays as an aggregate.',
	entityDefaultDetailAttributesTitle: 'The attributes that client applications show when this entity displays.',
	entityIdentifyingAttributesTitle: 'The attributes that client applications use to identify an instance of the entity to the user.',

	// Attribute Props Title
	attrIdTitle: 'A unique identifier for the attribute.',
	attrNameTitle: 'The name of the attribute.',
	attrBindingTitle: 'The binding to the database object which represents this item.',
	attrDataTypeTitle: 'The data type of the attribute. If an Expression is present, the DataType value must match the DataType value of the Expression.',
	attrLogicalDataTypeTitle: 'This data type of the attribute should be treated as Date.',
	attrDescriptionTitle: 'The Description is shown as a tooltip when the user hovers over the attribute in the designer.',
	attrDiscourageGroupingTitle: 'This value indicates whether the client application discourages the user from grouping on this attribute. DiscourageGrouping should be set on fields with unique values, for example, phone numbers. If the attribute is a key or identifying attribute of the entity, the client application groups on the entity\'s key attributes instead.',
	attrFormatTitle: 'The .NET Framework format string used to format the value of the attribute.',
	attrHiddenTitle: 'This value indicates whether the model item is displayed to the user.',
	attrIsAggregate: 'This value indicates whether the attribute is an aggregate that can be calculated in the context of not just the containing entity, but also any other entity for which there is a one-to-many relationship within the containing entity. If this is not set, the attribute is treated as scalar. IsAggregate can only be true for attributes with non-anchored expressions.',
	attrNullableTitle: 'This value indicates whether the attribute can have a null value. It is used for determining how to execute join operations correctly considering cardinality',
	attrValueSelectionTitle: 'This value determines the client application behavior for selecting values of the attribute, based on the expected number of unique values. Three options are available: None, Dropdown, and List. By default, None is selected which requires the user to type in a value. When Dropdown specified, the unique values are displayed in a simple dropdown. When List is specified, the unique values are displayed in the UI as a list. If IsAggregate is True, then this attribute is ignored.',
	attrSupportsNullValuesTitle: 'Specifies whether or not the "null" value is a meaningful value for the field and should be shown to end users in prompts. When Supports Null Values is on, some filtering optimizations in queries are restricted.',
	attrSupportsBlankValuesTitle: 'Specifies whether or not the empty string (blank) value is a meaningful value for the field and should be shown to end users in prompts. When Supports Blank Values is on, some filtering optimizations in queries are restricted.',
	attrExpressionTitle: 'The Expression of the attribute.',

	// Relation Props Title
	relIdTitle: 'The unique identifier for the relation.',
	relNameTitle: 'The name of the relation.',
	relBindingTitle: 'The binding to the database object which represents this item.',
	relCardinalityTitle: 'This value indicates the cardinality of the relation.',
	relDescriptionTitle: 'The Description value is shown as a tooltip when the user hovers over the relation in the designer.',
	relHiddenTitle: 'This value indicates whether the model item is displayed to the user.',
	relRecursiveTitle: 'This value indicates whether the relationship is traversed repeatedly by default.',
	relIncludeSelfTitle: 'This value indicates whether repeating traversal of the relation includes zero traversals.',
	relHiddenFieldsTitle: 'This element indicates whether the client application displays the relation\'s target entity fields when the relation is used to reach the entity.',

	// Add Attribute Props Title
	addAttrNameTitle: 'The name of the attribute.',
	addAttrDescriptionTitle: 'The Description is shown as a tooltip when the user hovers over the attribute in the designer.',
	addAttrAttributeTypeTitle: 'The type of attribute you want to add.',
	addAttrDatabaseFieldTitle: 'Select an existing column.',

	// Prompt
	continueDraft: 'Continue Draft',
	continueDraftDescription: 'A draft was saved of your last changes. Do you want to edit from the saved draft? If you select No, all changes made in your last editing session will be lost and you\'ll be returned to the latest production version of the model.',
	confirmation: 'Confirmation',
	yes: 'Yes',
	no: 'No',
	delete: 'Delete',
	cancel: 'Cancel',
	deleteConfirm: 'Delete Permanently',
	deleteEntityConfirmMsg: 'Do you want to delete entity({{name}}) permanently?',
	deleteAttributeConfirmMsg: 'Do you want to delete attribute({{name}}) permanently?',
	deleteRelationConfirmMsg: 'Do you want to delete relation({{name}}) permanently?',
	closeDesignerConfirm: 'Do you want to leave data model designer and discard the changes?',
	comment: 'Comment',
	commentDesc: 'Comment(This comment appears in the model version history.)',

	// Add Property
	databaseColumn: 'Database Field',
	databaseColumnDesp: 'Choose this option to create a new attribute base on a field in the database.',
	relatedEntity: 'Related Entity',
	relatedEntityDesp: 'Use this option to choose an attribute from a related entity which will then appear directly on this entity.',
	expression: 'SQL Expression',
	expressionDesp: 'Choose this option to create a new attribute based on a SQL expression.',
	attributeSource: 'Attribute Source',
	attributeType: 'Attribute Type',
	expressionDefinition: 'Expression Definition',
	preview: 'Preview',
	selectDatabaseField: 'Select Database Field',
	emptyAttributeName: 'Attribute name can not be empty.',
	emptySQLExpression: 'The SQL expression can not be empty when adding a SQL expression attribute.',
	expressionValidate: 'Validate',
	expressionPreviewSchema: 'Preview Schema',
	expressionPreviewData: 'Preview Data',
	validSQLExpression: 'Please verify the SQL expression before saving',
	cannotRemoveAttr: 'The attribute ({{name}}) exists in ({{setting}}) setting and cannot be removed',
	'Column Name': 'Column Name',
	'Size': 'Size',
	'Data Type': 'Data Type',
	'Is Nullable': 'Is Nullable',

	// Validate, Save, Publish message.
	validateSuccess: 'Model validated successfully.',
	saveDraftSuccess: 'Model saved as draft successfully.',
	saveAndPublishDraftSuccess: 'Model saved and published successfully.',
	getDatabasesFailed: 'Get databases failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections.',
	updateFailed: 'Failed to update dependent version.',
	updateSuccess: 'Update dependent version succeeded.',
	documentNotFound: 'The current document was not found.',
	modelBreakingChanges: 'Model Breaking Changes',
	publishBrokenReport: 'The \'{{name}}\' report was broken by your changes, therefore it is still bound to the old version of this model so that users can view this report without errors.',

	// MessageBox
	MessageBox: 'Message',
	OK: 'OK',
	Yes: 'Yes',
	No: 'No',

	// build in user context
	name: 'name',
	email: 'email',
	phone_number: 'phone number',
	given_name: 'given name',
	family_name: 'family name',
	role: 'role',
	full_name: 'full name',

	// Storage Exception
	SemanticModelError_EntityNotFound: 'Entity not found (or You do not have sufficient permissions on this document to perform the action).',

	// Data Source
	Name: 'Name',
	User: 'User',
	Server: 'Server',
	Host: 'Host',
	Port: 'Port',
	Password: 'Password',
	Database: 'Database',
	CommandTimeout: 'Command Timeout(s)',
	noSearchResultTip: 'no result',
	loadingDatabases: 'Loading Databases...',
	Service_Name: 'Service Name',
	searchPlaceHolder: 'Please input to search',
	TestConnection: 'Test Connection',
	'DataSourceDisplayName!Oracle': 'Oracle',
	'DataSourceDisplayName!SqlServer': 'SQL Server',
	'DataSourceDisplayName!MySql': 'Mysql',
	'DataSourceDisplayName!Postgres': 'Postgres',

	// model type selector
	'modelType!report': 'Direct Query Model',
	'modelType!dashboard': 'Cached Model',
};
