export const tilePL: LanguageKeyValueMap = {

	// Tile
	tTextNoWorkers: 'Brak wolnych Usług Raportowych', // No Workers Available
	tStatusIdle: 'NA', // Idle

	tBtnTitleEnable: 'Włącz aktualizację kafelka', // Enable Tile Updates
	tBtnTitleDisable: 'Wyłącz aktualizację kafelka', // Disable Tile Updates

	// Tasks Tile
	ttStatusTextInProgress: 'W trakcie', // In Progress
	ttStatusTextComplete: 'Ukończono', // Complete
	ttStatusTextInCancelled: 'Anulowano', // Cancelled
	ttStatusTextInFailed: 'Niepowodzenie', // Failed
	ttStatusTextInQueued: 'W kolejce', // Queued
	ttStatus: 'Status',
	ttStartTime: 'Czas rozpoczęcia', // Start Time
	ttEndTime: 'End Time',
	ttInitiator: 'Initiator',
	ttProgress: 'Progres', // Progress
	ttWorkerLabel: 'Nazwa Usługi', // Worker Name
	ttOrgPath: 'Organization',
	ttBackToList: 'Wróć do listy', // Back to list
	ttCancelTask: 'Anuluj Zadanie', // Cancel Task
	ttAllTask: 'Zadania', // All Tasks
	ttInProgressTask: 'W trakcie', // In Progress Tasks
	ttKilledTask: 'Anulowane', // Canceled Tasks
	ttErrorTask: 'Nieudane', // Failed Tasks
	ttDocDescription: 'Nazwa dokumentu: {{name}} \nTyp dokumentu: {{label}}', // Document Name: {{name}} \n Document Type: {{label}}
	'ttProgressText_Deployment ignored': 'Deployment ignored',
	'ttProgressText_Finished': 'Finished',
	'ttProgressText_Finished reading result': 'Finished reading result',
	'ttProgressText_Reading result stream': 'Reading result stream',
	'ttProgressText_Ready to read result stream': 'Ready to read result stream',
	'ttProgressText_Result verification': 'Result verification',
	'ttProgressText_Result verified': 'Result verified',
	'ttProgressText_Canceled': 'Canceled',
	'ttProgressText_Selecting worker': 'Selecting worker',

	// task error
	RTJobCanceled: 'Remote job has been cancelled.',
	ArgumentError: 'Expected task with absolute or relative URL.',
	InvalidOperation: 'Unexpected remote job state.',
	TaskCanceled: 'The task is canceled by administrator or the task is automatically canceled because the task has timed out or the task is aborted.',
	HttpRequestError: 'Unable to read data from the transport connection: An existing connection was forcibly closed by the remote host.',
	LRTProtocol: 'Failed to read LRT status.',
	LRTNotFound: 'LRT not found.',
	CannotFetchDataFromWorker: 'Can not fetch data from the worker',
	WorkerResponseValidationError: 'Error during result transmission has been revealed within verification request.',
	WorkerVerifyResultFailed: 'Verify the calculation result failed.',
	WorkerReadResultFailed: 'Read the calculation result failed.',
	WorkerUnauthorized: 'The Worker "{{name}}" is unauthorized.',
	'reporting_worker_report_cyclic_parameter_references': 'An error occurred when getting report info: Cyclic report parameter references detected.',
	'reporting_worker_fail_check_no_dataset': 'An error occurred during report fail check procedure: Dataset not specified.',
	'10002': 'Entity not found.',
	'10005': 'Null or empty string can not be used as id of an entity.',
	'10008': 'No permission to access collection.',
	'10013': 'An error occurred when accessing database.',
	'10017': 'Unregistered collection.',

	ttTextNoDataAvailable: 'Brak danych', // No Data Available

	// Saga
	sagaErrorConnection: 'Błąd połączenia', // Connection Error
	sagaErrorConnectionDetails: 'Nie można załadować wymaganych danych', // Unable to load reqired data

};
