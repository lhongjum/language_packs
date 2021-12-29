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
	ttEndTime: 'Czas zakończenia', // End Time
	ttInitiator: 'Inicjator', // Initiator
	ttProgress: 'Progres', // Progress
	ttWorkerLabel: 'Nazwa usługi', // Worker Name
	ttOrgPath: 'Organizacja', // Organization
	ttBackToList: 'Wróć do listy', // Back to list
	ttCancelTask: 'Anuluj zadanie', // Cancel Task
	ttAllTask: 'Zadania', // All Tasks
	ttInProgressTask: 'W trakcie', // In Progress Tasks
	ttKilledTask: 'Anulowane', // Canceled Tasks
	ttErrorTask: 'Nieudane', // Failed Tasks
	ttDocDescription: 'Nazwa dokumentu: {{name}} \nTyp dokumentu: {{label}}', // Document Name: {{name}} \n Document Type: {{label}}
	'ttProgressText_Deployment ignored': 'Wdrożenie zignorowano', // Deployment ignored
	'ttProgressText_Finished': 'Zakończony', // Finished
	'ttProgressText_Finished reading result': 'Zakończony wynik odczytu', // Finished reading result
	'ttProgressText_Reading result stream': 'Odczytywanie strumienia wyników', // Reading result stream
	'ttProgressText_Ready to read result stream': 'Gotowy do odczytu strumienia wyników', // Ready to read result stream
	'ttProgressText_Result verification': 'Weryfikacja wyników', // Result verification
	'ttProgressText_Result verified': 'Wynik zweryfikowany', // Result verified
	'ttProgressText_Canceled': 'Anulowany', // Canceled
	'ttProgressText_Selecting worker': 'Wybór workera', // Selecting worker

	// task error
	RTJobCanceled: 'Zadanie zdalne zostało anulowane.', // Remote job has been cancelled.
	ArgumentError: 'Oczekiwane zadanie z bezwzględnym lub względnym adresem URL.', // Expected task with absolute or relative URL.
	InvalidOperation: 'Nieoczekiwany stan zadania zdalnego.', // Unexpected remote job state.
	TaskCanceled: 'Zadanie zostało anulowane przez administratora lub zadanie jest automatycznie anulowane, ponieważ upłynął limit czasu zadania lub zadanie zostało przerwane.', // The task is canceled by administrator or the task is automatically canceled because the task has timed out or the task is aborted.
	HttpRequestError: 'Nie można odczytać danych z połączenia transportowego: istniejące połączenie zostało wymuszone przez hosta zdalnego.', // Unable to read data from the transport connection: An existing connection was forcibly closed by the remote host.
	LRTProtocol: 'Nie udało się odczytać stanu LRT.', // Failed to read LRT status.
	LRTNotFound: 'Nie znaleziono LRT.', // LRT not found.
	CannotFetchDataFromWorker: 'Nie można pobrać danych od pracownika', // Can not fetch data from the worker
	WorkerResponseValidationError: 'W żądaniu weryfikacji wykryto błąd podczas przesyłania wyników.', // Error during result transmission has been revealed within verification request.
	WorkerVerifyResultFailed: 'Sprawdź, czy wynik obliczeń nie powiódł się.', // Verify the calculation result failed.
	WorkerReadResultFailed: 'Odczytanie wyniku obliczeń nie powiodło się.', // Read the calculation result failed.
	WorkerUnauthorized: 'Pracownik "{{name}}" jest nieautoryzowany.', // The Worker "{{name}}" is unauthorized.
	'reporting_worker_report_cyclic_parameter_references': 'Wystąpił błąd podczas pobierania informacji o raporcie: Wykryto odwołania do parametrów raportu cyklicznego.', // An error occurred when getting report info: Cyclic report parameter references detected.
	'reporting_worker_fail_check_no_dataset': 'Wystąpił błąd podczas procedury sprawdzania niepowodzenia raportu: Nie określono zestawu danych.', // An error occurred during report fail check procedure: Dataset not specified.
	'10002': 'Nie znaleziono encji.', // Entity not found.
	'10005': 'Ciąg pusty lub pusty nie może być użyty jako identyfikator encji.', // Null or empty string can not be used as id of an entity.
	'10008': 'Brak uprawnień dostępu do kolekcji.', // No permission to access collection.
	'10013': 'Wystąpił błąd podczas dostępu do bazy danych.', // An error occurred when accessing database.
	'10017': 'Niezarejestrowana kolekcja.', // Unregistered collection.

	ttTextNoDataAvailable: 'Brak danych', // No Data Available

	// Saga
	sagaErrorConnection: 'Błąd połączenia', // Connection Error
	sagaErrorConnectionDetails: 'Nie można załadować wymaganych danych', // Unable to load reqired data

};
