
export const es = {
	Save: 'Save',
	OK: 'OK',
	Preview: 'Preview',
	SetPreviewValue: 'Set Preview Parameter',
	MessageBox: 'Message',
	PreviewDataLimitation: 'Preview data, show 100 lines at most.',
	DatasetPreview: 'Dataset Preview',
	SuccessMessage: 'Success Message',
	ErrorMessage: 'Error Message',

	err_10002: 'Entity not found.',
	err_10008: 'Calculated field "{{calculatedField}}" is referencing an undefined field "{{referredField}}".',
	err_10009: 'Syntax error found in calculated field expression "{{calculatedField}}". {{message}}',
	err_10010: 'Group field "{{groupField}}" is undefined.',
	err_10011: 'Aggregation field "{{aggregationField}}" is referencing an undefined field "{{referredField}}".',
	err_10012: 'Category field "{{categoryField}}" is referencing an undefined field "{{referredField}}".',
	err_10013: 'Calculated field "{{calculatedField}}" is referencing an undefined parameter "{{referredParameter}}".',
	err_10014: 'Sql expression "{{sqlExpression}}" on table "{{table}}" is referencing an undefined parameter "{{referredParameter}}".',
	err_10015: 'Filter "{{filter}}" is referencing an undefined parameter "{{referredParameter}}".',
	err_10016: 'Runtime error occurred: {{message}}',
	err_10017: 'Filter with BETWEEN operator requires 2 parameters.',
	err_10018: 'In \'For Dashboard\' mode,CustomSql can not reference an {{context}} parameter "{{referredParameter}}".',
	err_10019: 'In \'For Dashboard\' mode,Calculated field "{{calculatedField}}" can not reference an {{context}} parameter "{{referredParameter}}".',
	err_10020: 'In \'For Dashboard\' mode,Sql expression "{{sqlExpression}}" on table "{{table}}" can\'t reference an {{context}} parameter "{{referredParameter}}".',
	err_10022: 'Calculated field "{{calculatedField}}" can not reference itself.',
	err_10023: 'Calculated field contains cycle reference.',
	err_10024: 'The join/union condition field type is inconsistent and can not be converted.',
	err_10025: 'Get databases failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections.',
	err_10026: 'Get database list failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections. If connection still failed, please input the database/service name manually.',
	err_10027: 'Get schema failed. Please make sure: \n1, Your settings are valid.\n2, The server allows remote connections.\n3, The data source is available. \n4, The URI parameters are valid.',
	err_10028: 'Custom SQL table could not contain duplicate column:"{{column}}".',
	err_10029: 'In filter cannot contain empty and/or group.',
	err_10034: 'Sql expression is referencing an undefined parameter "{{referredParameter}}".',
	err_10035: 'In \'For Dashboard\' mode,Sql expression can\'t reference an {{context}} parameter "{{referredParameter}}".',
	err_10036: 'The following bound parameters are not found in custom Sql table: "{{referredParameters}}".',
	err_100017: 'The user context value is invalid and can not be converted.',
	err_100024: 'The \'{{key}}\' with the value of \'{{value}}\' on {{ptype}} is an invalid {{dtype}} value.',
	err_100025: 'The \'{{key}}\' has more than 1 values but it is a single {{dtype}} value on {{ptype}}.',
	err_100026: 'The literal value \'{{value}}\' of constant parameter \'{{key}}\' can not be converted to data type {{dtype}}.',

	E_60000: 'Method is not supported.',
	E_60001: 'Specified collection name is not supported in GetSchema series methods.',
	E_60002: 'Can not create command on closed connection.',
	E_60003: 'Can not get schema information on closed connection.',
	E_60004: 'Table(s) specified in restriction values can not be found.',
	E_60005: 'Invalid sql statement type.',
	E_60006: 'No valid data rows found in file datasource.',
	E_60007: 'Failed to set SpreadServices license.',
	E_60008: 'Failed to open Excel file.',
	E_60009: 'No available sheets found in Excel file.',
	E_60010: 'CommandText is null or empty.',
	E_60011: 'Invalid config value.',
	E_60012: 'Can not get MongoDB table info.',
	E_60013: 'Can not get MongoDB table column info.',
	E_60014: 'Unsupported aggregation function.',
	E_60015: 'Unsupported function.',
	E_60016: 'Unsupported operator.',
	E_60017: 'Unexpected keyword.',
	E_60018: 'Can not convert string to number.',
	E_60019: 'Invalid restriction values.',
	E_60020: 'Can not find sub-table.',
	E_60021: 'Unsupported operation type.',
	E_60022: 'Connection string config section is required.',
	E_60023: 'Missing parameter(s).',
	E_60024: 'Network error found when fetching remote data.',
	E_60025: 'Can not load schema from xml string.',
	E_60026: 'Unsupported parameter value type.',
	E_60027: 'Can not translate sql to Salesforce command.',
	E_60028: 'An error occured when executing primitive query. {{PrimitiveSQLError}}',
	E_60029: 'In Salesforce provider GROUPBY is not supported when there\'s sub - query.',
	E_60030: 'In salesforce provider only operator \' =\' is supported in JOIN clause.',
	E_60031: 'In salesforce provider an Id column is required on left-side and/or right-side in JOIN constraint.',
	E_60032: 'Unsupported parameter value type in Salesforce provider.',
	E_60033: 'Can not find specified table in Salesforce provider.',
	E_60034: 'Should not use table schema name in command whose owner connection has config \'TablePrefix\' set.',
	E_60035: 'Table "{{TableName}}" not found.',
	E_60039: 'Can not get schema information.',
	E_60040: 'Section \'SchemaDefinition\' is missing in connection string.',
	E_60046: 'Can not find matched Excel sheet specified by defined schema.',
	E_60047: 'Excel sheet columns count does not match the count of columns defined in schema.',
	E_60048: 'Excel sheet columns do not match the ones defined in schema.',
	E_60100: 'Incorrect json path.',
	E_60101: 'Exceeded max column\'s count, limit count: 1024.',
	E_60200: 'A non-empty row collection is required for column data type inference.',
	E_60201: 'Excel sheet should not be empty.',
	E_60300: 'Column <{{columnName}}> of sheet <{{sheetName}}> is not recognized as valid <{{targetType}}>',
	E_50000: 'Try to register a null SourceLoader.',
	E_50001: 'Try to register a duplicated SourceLoader.',
	E_50002: 'Try to unregister a null SourceLoader.',
	E_50003: 'Try to unregister a inexistent SourceLoader.',
	E_50004: 'Can\'t find proper SourceLoader or Can not find the file under the specified path.',
	E_70000: 'Failed to acquire access token.',
	E_70001: 'Network error.',
	E_70002: '401 Unauthorized Error. Please use the correct authmode.',
	E_70003: '404 Not Found Error. Please use the correct request source.',
	E_70004: 'No data returned from the remote server. Please make sure that the remote server has data returned.',
	E_40001: 'SqlOptimizer failed on executing primitive sql on data source.',
	E_40002: 'Can not find specified table in context.',
	E_40003: 'Can not find specified column "{{ColumnName}}" in context.',
	E_40004: 'Found more than one matched columns in context.',
	E_40005: 'Found more than one matched tables in context.',
	E_90001: 'Top keyword not supported.',
	E_90002: 'Incorrect syntax near {{Token}}.',
	E_90003: 'Incorrect syntax in the sql statement.',
	E_90004: 'Invalid literal value.',
	E_90005: 'Expecting literal expression.',
	E_90006: 'Only column expressions are allowed in ORDERBY clause.',
	E_90007: 'Quotation mark required on object with a keyword-name.',
	E_90008: 'Function not supported.',
	E_90009: 'Function parameters definition not matched.',
	E_90010: 'Parameter text is not a recognizable enumeration value.',
	E_90011: 'Only column expressions are allowed in GROUPBY clause.',
	E_90012: 'SqlParser visitor error.',
	E_90013: 'Only single expression is allowed.',
	E_90014: 'Each GROUP BY expression must contain at least one column that is not an outer reference.',
	E_90015: 'Cannot use an aggregate or a subquery in an expression used for the group by list of a GROUP BY clause.',
	E_80001: 'Can not find specified column.',
	E_80002: 'Duplicated column names found.',
	E_80003: 'Aggregation functions can not be used in GROUPBY clause.',
	E_80004: 'Expressions returning multiple values can not be used as GroupBy keys.',
	E_80005: 'Value tuple item index out of range.',
	E_80006: 'Exceeded max tuple item count.',
	E_80007: 'JOIN constraint expression must be a BinaryOperationExpression which returns a boolean value.',
	E_80008: 'TableContext can not support clause.',
	E_80009: 'Column expression being selected in SELECT clause must return single value.',
	E_80010: 'Can not used column-expressions and aggregation-expressions together in SELECT clause.',
	E_80011: 'Unexpected CompiledFunc input type.',
	E_80012: 'Expressions returning multiple values can not be used in HAVING clause.',
	E_80013: 'Expressions in HAVING clause must return a boolean value.',
	E_80014: 'Specified JOIN type not supported.',
	E_80015: 'Aggregation functions can not be used in constraint of JOIN clause.',
	E_80016: 'Offset can not be less than zero in LIMIT clause.',
	E_80017: 'Limit can not be less than zero in LIMIT clause.',
	E_80018: 'Aggregation functions can not be used in ORDERBY clause.',
	E_80019: 'Unsupported ORDERBY direction.',
	E_80020: 'Tables participating UNION must have same count of each one\'s column.',
	E_80021: 'Expressions in WHERE clause must return a boolean value.',
	E_80022: 'Aggregation functions can not be used in WHERE clause.',
	E_80023: 'Duplicated parameter names found.',
	E_80024: 'Can not find specified parameter.',
	E_80025: 'Internal executor error. A column-group contains column(s) belonged to another group.',
	E_80026: 'Exceeded max column\'s count, limit count: 1024.',
	E_80027: 'Selected column expression is referencing columns which are not the group-by key columns in GROUPBY clause.',
	E_80028: 'Can not find specified table.',
	E_80029: 'Internal executor error. Method or code should not be reached.',
	E_80030: 'Can not identify owner table of specified column.',
	E_80031: 'Expressions inside function should return single value.',
	E_80032: 'Specified function not supported in MemoryExecutor.',
	E_80033: 'Failed on matching function signature.',
	E_80034: 'Function can not accept array values as parameter.',
	E_80035: 'Aggregation functions can not be nested.',
	E_80036: 'Invalid operand data types in aggregation function.',
	E_80037: 'Keyword not supported in aggregation function.',
	E_80038: 'Function can not accept inner aggregation functions as parameter.',
	E_80039: 'List expression can only take a set of single-value expressions or an array-value expressions as content.',
	E_80040: 'Invalid operand data type in operation expression.',
	E_80041: 'Invalid operator in operation expression.',
	E_80042: 'Unsupported operator in operation expression.',
	E_80043: 'Boolean-value expression required.',
	E_80044: 'Can not use a multi-value expression as left-side expression in a BinaryOperation.',
	E_80045: 'In IN/NOTIN expression left-side expression must return single value.',
	E_80046: 'In IN/NOTIN expression right-side expression must return a value collection."',
	E_80047: 'Incompatible expression input types found in BinaryOperation.',
	E_80048: 'Context not registered.',
	E_80049: 'Parameter name is null or empty.',
	E_80050: 'Wrong parameter name prefix or bad format.',
	E_80051: 'Function parameters count incorrect.',
	E_80052: 'Memory sql executor accepts only SELECT statement.',
	E_80053: 'Sub-query expression requires an Alias.',
	E_80054: 'Renaming is not supported on specified table context.',
	E_80055: 'Can not find specified table in MemoryExecutor input tables.',
	E_80056: 'Type of value is not supported in aggregation.',
	E_80057: 'Invalid value type conversion.',
	E_80058: 'In IIF function the True part expression and the False part expression must return values of same or similar types.',
	E_80059: 'No proper data type converters found between types.',
	E_80060: 'Can not apply math operation between values of specified types.',
	E_80061: 'Can not convert value to specified enumeration type.',
	E_80062: 'Can not convert null value to a value type.',
	E_80063: 'Function requires an Array parameter.',
	E_80064: 'Unsupported LIKE/NOTLIKE value.',
	E_80065: 'Failed to dispose SourceTable\'s inner resources.',

	err_DataSourceAccessDenied: 'You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.',
	err_DataSourceNotFound: 'Specified datasource document {datasourceId} is not found.',
	err_DataSourceIntegrityCheck: 'Data source with id {{documentId}} integrity check error.',
	err_UserNotInOrgnization: 'Current user is not in any orgnization. Please check parameter "{{propertyName}}" with orgnization context.',
};