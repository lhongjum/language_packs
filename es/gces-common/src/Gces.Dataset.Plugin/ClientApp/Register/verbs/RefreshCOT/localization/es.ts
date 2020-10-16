export const refreshCotES = {
	OK: 'OK',
	Cancel: 'Cancel',
	Close: 'Close',
	Yes: 'Yes',
	No: 'No',
	MessageBox: 'Message',
	RefreshDataSet: 'Refresh Dataset',
	Refreshing: 'Refreshing',
	RefreshComplete: 'Refresh Complete',
	NoNeedRefresh: 'No need to refresh this dataset.',
	RefreshDatasetFailed: 'Refresh dataset failed',
	RefreshDatasetConfirmMsg: 'Do you want to refresh the current dataset cache?',
	DocumentInOperation: 'This document is being updated by another operation. Please try later.',

	// update error
	err_100001: 'Invalid parameter: {{name}}.',
	err_100002: 'Internal server error: {{message}}.',
	err_100009: 'This document is being updated by another operation. Please try later.',
	err_100012: 'Invalid user context: {{claimName}}.',
	err_100014: 'You have not enough permission to access datasource "{{name}}"',
	err_100015: 'You have not enough permission to access referenced datasources, or one or more datasources do not exist.',
	err_100017: 'The "{{key}}" value "{{value}}" on "{{ptype}}" is an invalid {{dtype}} value.',
	err_100018: 'Document not found.',
	err_100019: 'You don not have permission to access the document.',
	err_100021: 'Can not connect to datasource {{name}}.',
	err_100022: 'You don\'t have permission to update the data set.',
	err_100023: 'No available COT worker.',
	err_100018_desc: 'Error trying to resolve datasource "{{ids}}"',
	err_400001: 'Please check parameter "{{propertyName}}" with orgnization context. The organization of the current user does not have this context.',

	// dataset manager error message
	'err_3000': 'The calculation failed due to exceptions or the calculation was canceled by administrator.'
};