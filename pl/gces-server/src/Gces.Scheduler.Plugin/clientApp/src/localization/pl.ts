export const schedulingPL: LanguageKeyValueMap = {

	// Global
	taskStatusEnabled: 'Włączono', // Enabled
	taskStatusDisabled: 'Wyłączono', // Disabled

	// Tabs
	tasksTabCaption: 'Zadania', // Tasks
	tasksTabDescription: 'Zadania zaplanowane dla dokumentu', // Scheduled tasks for the document

	historyTabCaption: 'Historia', // History
	historyTabDescription: 'Historia zaplanowanych zadań', // Scheduled task execution history

	// Tasks Tab
	tasksTabHeader: 'Zaplanowane zadania', // Scheduled Tasks
	tasksTabNoTasks: 'Brak zaplanowanych zadań dla tego dokumentu', // There are no scheduled tasks for this document
	tasksTabBtnAddTask: 'Dodaj zadanie', // Add Task

	// Task Item
	taskItemRunBtnTitle: 'Uruchom zadanie', // Run Task
	taskItemMenuBtnTitle: 'Akcje', // Actions
	taskItemMenuEnableText: 'Włącz', // Enable
	taskItemMenuEnableTitle: 'Włącz zadanie', // Enable Task
	taskItemMenuDisableText: 'Wyłącz', // Disable
	taskItemMenuDisableTitle: 'Wyłącz zadanie', // Disbale Task
	taskItemMenuEditText: 'Edytuj', // Edit
	taskItemMenuEditTitle: 'Edytuj zadanie', // Edit Task
	taskItemMenuDeleteText: 'Skasuj', // Delete
	taskItemMenuDeleteTitle: 'Skasuj zadanie', // Delete Task
	taskItemMenuDuplicateText: 'Duplikuj', // Duplicate
	taskItemMenuDuplicateTitle: 'Duplikuj zadanie', // Duplicate Task
	taskItemTextNextRun: 'Następne uruchomienie', // Next run: ### dwukropek
	taskItemTextManually: 'Ręcznie', // Manually
	taskItemTextNever: 'Nigdy', // Never
	taskDuplicateSuffix: '-Kopia', // -Copy

	// Task Editor
	taskNoScheduleTemplateTip: 'Brak szablonu planowania', // no schedule template  ### wielka litera
	taskEditorHeaderDetails: 'Szczegóły', // Details
	taskEditorInputPlaceholderDescription: 'Opis zadania', // Task description
	taskEditorLabelExecution: 'Wykonanie', // Execution  ### tutaj zależnie od kontekstu bardziej może pasować "Wykonanie"
	taskEditorExecutionManual: 'Ręczne', // Manual
	taskEditorExecutionOneTime: 'Jednorazowe', //  One-Time
	taskEditorExecutionScheduled: 'Planowane', // Scheduled
	taskEditorLabelStart: 'Start', // Start
	taskEditorBtnCreateText: 'Utwórz zadanie', // Create Task
	taskEditorBtnUpdateText: 'Zaktualizuj zadanie', // Update Task
	taskEditorBtnCancelText: 'Anuluj', // Cancel
	oneTimeStartTimeLimit: 'Czas rozpoczęcia nie może zostać ustawiony na mniej niż 5 minut od teraz', // The start time cannot be set to any time less than 5 minutes from now
	oneTimeStartTimeLimitTitle: 'Niewłaściwy czas', // Invalid time
	taskEditorDescriptionError: 'Opis zadania nie może być pusty', // Task description should not be empty
	fileNameError: 'Nazwa pliku nie może być pusta', // File name should not be empty
	fullPathError: 'Ścieżka do pliku nie może być pusta', // File path should not be empty

	// Recurrence Editor
	recEditorCloneFromTemplate: 'Użyj szablonu', // Use Template
	recEditorChooseTemplate: 'Wybierz szablon', // Choose Template
	recEditorTemplateHasBeenDeleted: 'Szablon został skasowany', // Template has been deleted
	recEditorHeaderRepeat: 'Powtórz', // Repeat
	recEditorLabelStart: 'Start', // Start
	recEditorLabelEnd: 'Koniec', // End
	recEditorPlaceholderNoEndDate: 'Brak daty końcowej', // No End Date
	recEditorDailyEditor: 'Dziennie', // Daily
	recEditorWeeklyEditor: 'Tygodniowo', // Weekly
	recEditorMonthlyEditor: 'Miesięcznie', // Monthly
	// UWAGA! Tu jest masakra, póki co zrobiłem skróty, bo w polskim trudniej niż w angielskim. Nie mogę tego znaleźć w apce.
	// Daily Editor
	dailyEditorTextAt: 'O {{time}}', // At {{time}}
	dailyEditorTextEvery: 'Co', // Every
	dailyEditorTextUnits: 'godzin', // hour(s)

	// Weekly Editor
	weeklyEditorTextEvery: 'Każda/y', // Every
	weeklyEditorTextUnits: 'tygodnia', // week(s)

	// Monthly Editor
	monthlyEditorTextEvery: 'Powtórz co', // Every
	monthlyEditorTextUnits: 'miesięcy', // month(s)
	monthlyEditorTextOnDay: 'W dniu', // On day
	monthlyEditorTextOnDayUnits: '',
	monthlyEditorTextOnTheLast: 'W ostatni', // On the last
	monthlyEditorTextLastDay: 'Dzień', // Day
	monthlyEditorTextLastWeekday: 'Dzień roboczy', // Weekday

	// Delivery Editor
	delEditorHeader: 'Dostarczanie', // Delivery
	delEditorMenuEmail: 'Email', // Email
	delEditorMenuLocal: 'Lokalny magazyn', // Local Storage
	delEditorMenuWFS: 'Udostępnianie plików', // File Share

	delEditorLocalStoreForever: 'Przechowuj bezterminowo', // Store forever
	delEditorLocalStoreUntil: 'Przechowuj do...', // Store until...
	delEditorLocalDeleteAfter: 'Usuń po...', // Expiry Duration... ### a może wygaśnięcia / wygaszenia?
	delEditorLocalTextOnDayUnits: 'Dniach', // Day(s)
	delEditorLocalAllowAnonymous: 'Dostęp anonimowy', // Allow anonymous

	delEditorWFSLabelFileName: 'Nazwa pliku', // File Name
	delEditorWFSLabelPath: 'Ścieżka', // Path
	delEditorWFSLabelOverwrite: 'Nadpisz istniejące', // Overwrite existing
	delEditorWFSLabelUser: 'Użytkownik', // User
	delEditorWFSLabelPassword: 'Hasło', // Password

	delEditorMailStoreForever: 'Przechowuj bezterminowo', // Store forever
	delEditorMailStoreUntil: 'Przechowuj do...', // Store until...
	delEditorMailDeleteAfter: 'Usuń po...', // Expiry Duration...
	delEditorMailAllowAnonymous: 'Dostęp anonimowy', // Allow anonymous

	expiryTimeUnitHour: 'Godzinach', // Hours
	expiryTimeUnitDay: 'Dniach', // Days
	expiryTimeUnitWeek: 'Tygodniach', // Weeks
	expiryTimeUnitMonth: 'Miesiącach', // Months
	expiryTimeUnitYear: 'Latach', // Years

	delEditorMailLabelEmailTo: 'Wyślij mailem do', // Email to
	delEditorMailLabelEmailToLabel: 'Wpisz adres e-mail do', // Please enter email to
	delEditorMailLabelEmailToIsInvalid: 'Niepoprawny format email', // Email format is invalid
	delEditorMailLabelInvalidDomainTip: 'Niepoprawna domena', // Invalid Email Domain
	delEditorMailLabelReplyTo: 'Odpowiedz do', // Reply To
	delEditorMailLabelReplyToLabel: 'Wpisz odpowiedź do', // Please enter reply to
	delEditorMailLabelSubject: 'Temat', // Subject
	delEditorMailLabelSubjectToolTip: 'Możesz odnieść się do dowolnego parametru w temacie, korzystając ze znaku zapytania (?), po którym podasz nazwę parametru. Nazwa raportu może zostać dodana poprzez &ReportName. Czas uruchomienia raportu może zostać dodany poprzez &ExecutionTime.', // You can reference any parameter in the subject by entering a question mark (?) followed by the parameter\'s name.The report\'s name can be referenced with the special placeholder &ReportName. The time the report was run can be referenced with the special placeholder &ExecutionTime.
	delEditorMailLabelBody: 'Treść', // Body
	delEditorMailLabelBodyToolTip: 'Możesz odnieść się do dowolnego parametru w treści, korzystając ze znaku zapytania (?), po którym podasz nazwę parametru. Nazwa raportu może zostać dodana poprzez &ReportName. Czas uruchomienia raportu może zostać dodany poprzez &ExecutionTime. Jeżeli wybrano typ załącznika \'Wyślij raport jako treść\', możesz dodać załącznik przy użyciu wzorca &ExportResult', // You can reference any parameter in the message body by entering a question mark (?) followed by the parameter\'s name.The report\'s name can be referenced with the special placeholder &ReportName. The time the report was run can be referenced with the special placeholder &ExecutionTime. If attachment type is \'Send Report as Body\', the attachment in the email body can be referenced with the special placeholder &ExportResult.
	delEditorMailLabelAttachmentType: 'Typ załącznika', // Attachment Type
	delEditorMailAttachmentFile: 'Załącznik', // File Attachment
	delEditorMailAttachmentLink: 'Link do pobrania', // Download Link
	delEditorMailAttachmentBody: 'Wyślij raport jako treść', // Send Report as Body
	delEditorMailSubject: 'Raport od Wyn Enterprise', // Report from Wyn Enterprise
	delEditorMailBody: 'Oto raport &ReportName. Ten raport został wykonany o &ExecutionTime. Raport znajduje się w załączniku lub jest podlinkowany. &Link', // Here is the &ReportName report. This report was run at &ExecutionTime. The report is linked or attached below. &Link

	delEditorMenuAppMsg: 'Wiadomość aplikacji', // Application Message
	delEditorAppMsgSubject: 'Zaplanowany raport', // Scheduled Report
	delEditorAppMsgBody: 'Zaplanuj zadanie dla raportu "&ReportName" zostało zakończone o godzinie &ExecutionTime', // Schedule task for the report "&ReportName" has been finished at &ExecutionTime, please review it.
	delEditorAppMsgLabelAppName: 'Nazwa aplikacji', // Application Name
	delEditorAppMsgLabelAppNameToolTip: 'Nazwa aplikacji, do której zostanie wysłana wiadomość', // The application name which will send message to
	delEditorAppMsgLabelSubject: 'Temat wiadomości', // Message Subject
	delEditorAppMsgLabelSubjectToolTip: 'Możesz odnieść się do dowolnego parametru w temacie, korzystając ze znaku zapytania (?), po którym podasz nazwę parametru. Nazwa raportu może zostać dodana poprzez &ReportName. Czas uruchomienia raportu może zostać dodany poprzez &ExecutionTime.', // 'You can reference any parameter in the subject by entering a question mark (?) followed by the parameter\'s name. The report\'s name can be referenced with the special placeholder &ReportName. The time the report was run can be referenced with the special placeholder &ExecutionTime.
	delEditorAppMsgLabelBody: 'Treść wiadomości', // Message Body
	delEditorAppMsgLabelBodyToolTip: 'Możesz odwołać się do dowolnego parametru w treści wiadomości, wprowadzając znak zapytania (?), A następnie nazwę parametru. Do nazwy raportu można się odwołać za pomocą specjalnego symbolu zastępczego &ReportName. Do czasu uruchomienia raportu można się odwołać za pomocą specjalnego symbolu zastępczego &ExecutionTime. Jeśli typ załącznika to „Wyślij raport jako treść”, do załącznika w treści wiadomości e-mail można się odwołać za pomocą specjalnego symbolu zastępczego &ExportResult.', // You can reference any parameter in the message body by entering a question mark (?) followed by the parameter\'s name. The report\'s name can be referenced with the special placeholder &ReportName. The time the report was run can be referenced with the special placeholder &ExecutionTime. If attachment type is \'Send Report as Body\', the attachment in the email body can be referenced with the special placeholder &ExportResult.
	delEditorAppMsgLabelRecipients: 'Odbiorcy wiadomości', // Message Recipients
	delEditorAppMsgLabelRecipientsToolTip: 'Odbiorcy wiadomości. Należy pamiętać, że wszyscy użytkownicy w organizacjach podrzędnych mogą również otrzymywać wiadomości, jeśli organizacja nadrzędna jest zaznaczona', // The recipients of the message. Note that all the users in the sub-organizations can also receive the messages if the parent organization is checked
	WeChat4Work: 'Enterprise WeChat',
	DingTalk: 'Ding Ding',
	appMsgOrgs: 'Organizacje', // Organizations
	appMsgRoles: 'Role', // Roles
	appMsgUsers: 'Użytkownicy', // Users
	delEditorAppMsgOnlineLink: 'Online link', // Online Link
	delEditorAppMsgDownloadLink: 'Pobierz link', // Download Link

	// Reporting Editor
	reportingEditorHeaderExportFormat: 'Format eksportu', // Export Format
	reportingEditorAdvancedExportSettings: 'Zaawansowane', // Advanced Settings
	reportingEditorHeaderParameters: 'Parametry', // Parameters
	reportingEditorParametersStateInitializing: 'Rozpoczynanie...', // Initializing...
	reportingEditorParametersStateValidating: 'Sprawdzanie poprawności...', // Validating... ### Ewentualnie po prostu "Sprawdzanie..."
	reportingEditorParametersStateValid: 'Poprawne parametry', // Valid Parameters
	reportingEditorParametersStateinvalid: 'Niepoprawne parametry', // Invalid Parameters
	reportingEditorTextNoParameters: 'Raport nie ma parametrów', // report has no parameters

	// Job Editor Saga
	jeSagaQueueErrorTaskFailed: 'Nie udało się wykonać zadania', // Task Failed  ### Tutaj do ustalenia jak tłumaczymy Failed
	jeSagaQueueErrorExecFailed: 'Nie udało się uruchomić zadania', // Unable to execute task'
	jeSagaQueueErrorNoWorkers: 'Usługi Raportowe niedostępne', // No workers available
	jeSagaQueueErrorUnknown: 'Nieznany błąd', // Unknown Error

	jeSagaTextJobEditorError: 'Błąd edytora zadań', // Job Editor Error ### Do ustalenia czy Job chcemy tak zostawić -- być może jako "zadanie", ale wtedy może się mieszać z Task
	jeSagaTextParametersError: 'Nie można pobrać parametrów raportu', // Unable to get report parameters
	jeSagaTextParameterValuesError: 'Nie można pobrać wartości parametrów', // Unable to get parameter values

	jeSagaFail: 'Edytor zadań: Nieznany błąd', // Reporting Job Editor: Unknown Error ### jw.

	// History Tab
	histTabHeaderRunning: 'Przetwarzanie', // Running ### Uruchomiony? - do ustalenia
	histTabHeaderResults: 'Wyniki', // Results
	histTabNoHistory: 'Nie ma historii zadań dla tego dokumentu', // There is no task history for this document

	// History & Job Items
	hiStatusCancelled: 'Anulowano', // Cancelled
	hiStatusFailed: 'Niepowodzenie', // Failed ### Tutaj do ustalenia jak tłumaczymy Failed -- w tym miejscu lepiej mogłoby pasować Niepowodzenie
	hiStatusCompleted: 'Ukończono', // Completed
	hiStatusAccomplished: 'Ukończono', // Completed
	jiStatusQueued: 'W kolejce', // Queued
	jiStatusRunning: 'Przetwarzanie', // Running  ### Uruchomiony?

	hiTitleDownload: 'Pobieranie', // Download
	hiTitleShowError: 'Pokaż szczegóły błędu', // Show error details
	hiTitleShowWarn: 'Pokaż szczegóły ostrzeżenia', // Show warning details

	// Security Error Message
	securityErr_10001: '[Błąd zabezpieczeń] Discovery Client otrzymał błąd dokumentu.', // [Security Error] Discovery Client Retrieves discovery document error. ### Discovery Document i Client tak zostawiamy?
	securityErr_10002: '[Błąd zabezpieczeń] Otrzymano błąd dokumentu.', // [Security Error] Get discovery document error. ### jw.
	securityErr_10003: '[Błąd zabezpieczeń] Błąd przy odświeżaniu tokena.', // [Security Error] Request refresh token error..
	securityErr_10004: '[Błąd zabezpieczeń] Get access token error: \n1, The organization in which the task is created does not exist.\n2, The user who creates the task is not in the specified organization.\n3, The user who creates the task does not exist.',

	// Execution Error Message
	executionErr_10001: '[Błąd wykonania] Nieznany status zadania', // [Execution Error] Unknown cot task status.
	executionErr_10002: '[Błąd wykonania] Nie znaleziono zadania', // [Execution Error] Cot task not found.
	executionErr_10003: '[Błąd wykonania] Zadanie nie zostało utworzone', // [Execution Error] Cot task not created.
	executionErr_10004: '[Błąd wykonania] Wystąpił błąd IO: {{errorMessage}}.', // [Execution Error] An IO error occured: {{errorMessage}}.
	executionErr_11001: '[Execution Error] The specified directory is not found or permission deny.', // [Execution Error] The specified directory is not found or permission deny.
	executionErr_11002: '[Błąd wykonania] Nie masz uprawnień dostępu do źródła danych.', // [Execution Error] You don\"t have permission to access datasource.
	executionErr_11003: '[Błąd wykonania] Plik: {{ errorUsing }} jest w użyciu a pliku: { { errorDestroy } } nie można wyodrębnić. Sprawdź format pliku.', // File: {{ errorUsing }} is being used and file: { { errorDestroy } } can\"t be extracted,please check the file format.
	executionErr_11004: '[Błąd wykonania] Plik: {{ errorUsing }} jest w użyciu', // [Execution Error] File: {{ errorUsing }} is being used.',
	executionErr_11005: '[Błąd wykonania] Pliku: {{ errorDestroy }} nie można wyodrębnić. Sprawdź format pliku.', // [Execution Error] File: {{ errorDestroy }} can\"t be extracted, please check the file format or the file password.',
	executionErr_11006: '[Błąd wykonania] Operacja nadpisania nie jest wspierana dla wielu plików jednocześnie', // [Execution Error] Overwrite operation does not support multiple files.',
	executionErr_11007: '[Błąd wykonania] Nie można uzyskać poprawnej odpowiedzi z Cot API.', // [Execution Error] Cannot get correct response from refresh cot api.
	executionErr_12001: '[Błąd wykonania] Wyjątek RefreshCot {{errorMessage}}.', // [Execution Error] RefreshCot exception. {{errorMessage}}.
	executionErr_13001: '[Błąd wykonania] {{errorMessage}}.', // [Execution Error] {{errorMessage}}.

	// Deployment Error Message
	deploymentErr_10001: '[Błąd wdrożenia] Błąd domeny: adres odbiorcy spoza Twojej organizacji', // [Deployment Error] Email domain error: Recipients email address outside your organization.
	deploymentErr_10002: '[Błąd wdrożenia] Błąd przy wysyłce wiadomości: {{errorMessage}}.', // [Deployment Error] Mailing error: {{errorMessage}}.
	deploymentErr_10003: '[Błąd wdrożenia] Błąd przy wysyłce wiadomości: {{errorMessage}}.', // [Deployment Error] Mailing error: {{errorMessage}}.
	deploymentErr_10004: '[Błąd wdrożenia] Błąd przy wysyłce wiadomości: {{errorMessage}}.', // [Deployment Error] Mailing error: {{errorMessage}}.
	deploymentErr_10005: '[Błąd wdrożenia] Błąd przy wysyłce wiadomości: {{errorMessage}}.', // [Deployment Error] Mailing error: {{errorMessage}}.
	deploymentErr_10006: '[Błąd wdrożenia] Błąd przy udostępnianiu pliku: {{errorMessage}}', // [Deployment Error] File share error: {{errorMessage}}
	deploymentErr_10007: '[Błąd wdrożenia] Minął termin ważności dokumentu', // [Deployment Error] Result expiration date have already passed.
	deploymentErr_10008: '[Błąd wdrożenia] Nie dostarczono ponieważ raport jest pusty.', // [Deployment Error] Not delivered because the report is empty.

	// GraphQl Error Message
	taskErr_30001: 'Wymagane uprawnienia', // Permission Required.
	taskErr_30002: 'Nie znaleziono dokumentu', // Document not found.
	taskErr_30003: 'Wymagane uprawniania administratora lub właściciela dokumentu.', // Administrator or document owner required. ### "Wymagane uprawnienia..."?
	taskErr_30004: 'Nie można utworzyć zadania - zadanie jest nieprawidłowe', // Failed to create task - task is invalid. ### literówka =
	taskErr_30005: 'Nie można utworzyć zadania - data "Przechowuj do" jest wcześniejsza niż data startu.', // Failed to create task - Store until is earlier than start time ### "Przechowuj do" wziąłbym w cudzysłów albo wyróżnił w inny sposób
	taskErr_30006: 'Nie można utworzyć zadania - adres odbiorcy spoza Twojej organizacji.', // Failed to create task - recipients email address outside your organization. ### tak jak wcześniej
	taskErr_30007: 'Nie znaleziono zadania <{{taskId}}>.', // Task <{{taskId}}> not found.
	taskErr_30008: 'Podano nieprawidłowe dane zadania', // Invalid task data provided.
	taskErr_30009: 'Zadanie <{{taskId}}> jest nieprawidłowe.', // Task <{{taskId}}> is invalid.
	taskErr_30010: 'Nie można dołączyć danych do źródła <{docEnv.Value.Title}>.', // Datasorce <{docEnv.Value.Title}> is unable to append data.
	taskErr_30011: 'Lokalizacja <{taskInfoDto.Location }> nie istnieje.', // Location <{taskInfoDto.Location }> not exists
	taskErr_30012: 'Nieprawidłowa operacja: <{taskInfoDto.OperationType}>.', // Invalid operation: <{taskInfoDto.OperationType}>.
	taskErr_30019: 'Nie możesz utworzyć lub zaktualizować zadania ręcznego i jednorazowego, ze względu na ustawienia wprowadzone przez administratora.', // Your cannot create or update manual and one time task due to settings by administrator.
	taskErr_30020: 'Nie można udostępniać plików ze względu na ustawienia wprowadzone przez administratora.', // Delivery cannot be file share due to settings by administrator.
	taskErr_30021: 'Identyfikator URI portalu jest wymagany podczas tworzenia zadań do raportu. Prosimy o kontakt z administratorem.', // Portal URI is required when creating tasks for report. Please contact the Administrator.
	taskErr_30022: 'Identyfikator URI portalu jest wymagany podczas tworzenia zadań dla źródła danych. Prosimy o kontakt z administratorem.', // Portal URI is required when creating tasks for data source. Please contact the Administrator.
	taskErr_30023: 'Identyfikator URI portalu jest wymagany podczas tworzenia zadań dla zestawu danych. Prosimy o kontakt z administratorem.', // Portal URI is required when creating tasks for dataset. Please contact the Administrator.
	taskErr_30024: 'Nie można utworzyć zadania, bieżący zbiór danych utworzył już zadanie w innej organizacji.', // Failed to create task, the current dataset has already created the task in other organization.
	taskErr_30025: 'Nie udało się zaktualizować zadania w magazynie DB i trwałości wykonywania: pod warunkiem, że zadanie jest nieaktualne.', // Failed to update task in DB storage and execution persistence: provided task is outdated.
	taskErr_30027: 'Template used in this task did not exist.',

	// SAGA: enable/disable task
	sagaTextErrorUpdatingTaskList: 'Błąd podczas aktualizowania listy zadań', // Error updating task list
	sagaTextErrorGettingTaskHistory: 'Błąd podczas pobierania historii zadań', // Error getting task history
	sagaTextErrorUpdatingHistory: 'Błąd podczas aktualizowania historii zadań', // Error updating history list

	sagaTextErrorCreatingTask: 'Nie utworzono zadania', // Task was NOT created
	sagaTextErrorUpdatingTask: 'Nie zaktualizowano zadania', // Task was NOT updated
	sagaTextErrorDeletingTask: 'Nie skasowano zadania', // Task was NOT deleted
	sagaTextErrorStartingTask: 'Nie uruchomiono zadania', // Task was NOT started
	sagaTextErrorDuplicatingTask: 'Nie zdluplikowano zadania', // Task was not duplicated
	sagaToggleNotification: 'Obecny status zadania: {{status, lowercase}}', // Task is now {{status, lowercase}}

	sagaFailed: 'Wtyczka planująca: Nieznany błąd', // Scheduling Plugin: Unknown Error

	sagaTextErrorInvalidLocation: 'Nieprawidłowa lokalizacja', // Invalid Location
	sagaTextErrorInvalidLocation_30013: 'Brak uprawnień do zapisu', // Write permission is denied
	sagaTextErrorInvalidLocation_30014: 'Brak uprawnień do usuwania', // Delete permission is denied
	sagaTextErrorInvalidLocation_30015: 'Brak uprawnień do odczytu lub lokalizacja nie istnieje', // Location does not exist or Read permission is denied
	sagaTextErrorInvalidLocation_30016: 'Każdy harmonogram powinien odpowiadać osobnemu katalogowi', // Each schedule should correspond to a separate directory
	sagaTextErrorInvalidLocation_30017: 'Brak uprawnień do odczytu', // Read permission is denied
	sagaTextSuccessVerifyLocation: 'Lokalizacja zweryfikowana', // Task Location is verified.
	sagaTextSuccessMessageVerifyLocation: 'Podany adres jest prawidłowy',  // the location inputed is valid.

	// Tabs
	'scheduleTasks!name': 'Zadania', // Tasks
	'scheduleTasks!description': 'Zadania zaplanowane dla tego dokumentu', // Scheduled tasks for the document

	'scheduleHistory!name': 'Historia', // History
	'scheduleHistory!description': 'Historia wykonania zaplanowanych zadań', // Scheduled task execution history

	// Timezone ### To pomijamy?
	taskExecutingTimezone: 'Strefa czasowa uruchomienia', // Executing Timezone
	'timezone_Etc/GMT+11': '(UTC-11:00) Coordinated Universal Time-11',
	'timezone_America/Adak': '(UTC-10:00) Aleutian Islands',
	'timezone_Pacific/Honolulu': '(UTC-10:00) Hawaii',
	'timezone_Pacific/Marquesas': '(UTC-09:30) Marquesas Islands',
	'timezone_America/Anchorage': '(UTC-09:00) Alaska',
	'timezone_Etc/GMT+9': '(UTC-09:00) Coordinated Universal Time-09',
	'timezone_America/Tijuana': '(UTC-08:00) Baja California',
	'timezone_Etc/GMT+8': '(UTC-08:00) Coordinated Universal Time-08',
	'timezone_America/Los_Angeles': '(UTC-08:00) Pacific Time (US & Canada)',
	'timezone_America/Phoenix': '(UTC-07:00) Arizona',
	'timezone_America/Chihuahua': '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
	'timezone_America/Denver': '(UTC-07:00) Mountain Time (US & Canada)',
	'timezone_America/Guatemala': '(UTC-06:00) Central America',
	'timezone_America/Chicago': '(UTC-06:00) Central Time (US & Canada)',
	'timezone_Pacific/Easter': '(UTC-06:00) Easter Island',
	'timezone_America/Mexico_City': '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
	'timezone_America/Regina': '(UTC-06:00) Saskatchewan',
	'timezone_America/Bogota': '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
	'timezone_America/Cancun': '(UTC-05:00) Chetumal',
	'timezone_America/New_York': '(UTC-05:00) Eastern Time (US & Canada)',
	'timezone_America/Port-au-Prince': '(UTC-05:00) Haiti',
	'timezone_America/Havana': '(UTC-05:00) Havana',
	'timezone_America/Indiana/Indianapolis': '(UTC-05:00) Indiana (East)',
	'timezone_America/Grand_Turk': '(UTC-05:00) Turks and Caicos',
	'timezone_America/Asuncion': '(UTC-04:00) Asuncion',
	'timezone_America/Halifax': '(UTC-04:00) Atlantic Time (Canada)',
	'timezone_America/Caracas': '(UTC-04:00) Caracas',
	'timezone_America/Cuiaba': '(UTC-04:00) Cuiaba',
	'timezone_America/La_Paz': '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
	'timezone_America/Santiago': '(UTC-04:00) Santiago',
	'timezone_America/St_Johns': '(UTC-03:30) Newfoundland',
	'timezone_America/Araguaina': '(UTC-03:00) Araguaina',
	'timezone_America/Sao_Paulo': '(UTC-03:00) Brasilia',
	'timezone_America/Cayenne': '(UTC-03:00) Cayenne, Fortaleza',
	'timezone_America/Argentina/Buenos_Aires': '(UTC-03:00) City of Buenos Aires',
	'timezone_America/Godthab': '(UTC-03:00) Greenland',
	'timezone_America/Montevideo': '(UTC-03:00) Montevideo',
	'timezone_America/Punta_Arenas': '(UTC-03:00) Punta Arenas',
	'timezone_America/Miquelon': '(UTC-03:00) Saint Pierre and Miquelon',
	'timezone_America/Bahia': '(UTC-03:00) Salvador',
	'timezone_Etc/GMT+2': '(UTC-02:00) Coordinated Universal Time-02',
	'timezone_Atlantic/Azores': '(UTC-01:00) Azores',
	'timezone_Atlantic/Cape_Verde': '(UTC-01:00) Cabo Verde Is.',
	'timezone_Etc/UTC': '(UTC) Coordinated Universal Time',
	'timezone_Europe/London': '(UTC+00:00) Dublin, Edinburgh, Lisbon, London',
	'timezone_Atlantic/Reykjavik': '(UTC+00:00) Monrovia, Reykjavik',
	'timezone_Africa/Sao_Tome': '(UTC+00:00) Sao Tome',
	'timezone_Africa/Casablanca': '(UTC+01:00) Casablanca',
	'timezone_Europe/Berlin': '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
	'timezone_Europe/Budapest': '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
	'timezone_Europe/Paris': '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
	'timezone_Europe/Warsaw': '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
	'timezone_Africa/Lagos': '(UTC+01:00) West Central Africa',
	'timezone_Asia/Amman': '(UTC+02:00) Amman',
	'timezone_Europe/Bucharest': '(UTC+02:00) Athens, Bucharest',
	'timezone_Asia/Beirut': '(UTC+02:00) Beirut',
	'timezone_Africa/Cairo': '(UTC+02:00) Cairo',
	'timezone_Europe/Chisinau': '(UTC+02:00) Chisinau',
	'timezone_Asia/Damascus': '(UTC+02:00) Damascus',
	'timezone_Asia/Hebron': '(UTC+02:00) Gaza, Hebron',
	'timezone_Africa/Johannesburg': '(UTC+02:00) Harare, Pretoria',
	'timezone_Europe/Kiev': '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
	'timezone_Asia/Jerusalem': '(UTC+02:00) Jerusalem',
	'timezone_Europe/Kaliningrad': '(UTC+02:00) Kaliningrad',
	'timezone_Africa/Khartoum': '(UTC+02:00) Khartoum',
	'timezone_Africa/Tripoli': '(UTC+02:00) Tripoli',
	'timezone_Africa/Windhoek': '(UTC+02:00) Windhoek',
	'timezone_Asia/Baghdad': '(UTC+03:00) Baghdad',
	'timezone_Europe/Istanbul': '(UTC+03:00) Istanbul',
	'timezone_Asia/Riyadh': '(UTC+03:00) Kuwait, Riyadh',
	'timezone_Europe/Minsk': '(UTC+03:00) Minsk',
	'timezone_Europe/Moscow': '(UTC+03:00) Moscow, St. Petersburg',
	'timezone_Africa/Nairobi': '(UTC+03:00) Nairobi',
	'timezone_Asia/Tehran': '(UTC+03:30) Tehran',
	'timezone_Asia/Dubai': '(UTC+04:00) Abu Dhabi, Muscat',
	'timezone_Europe/Astrakhan': '(UTC+04:00) Astrakhan, Ulyanovsk',
	'timezone_Asia/Baku': '(UTC+04:00) Baku',
	'timezone_Europe/Samara': '(UTC+04:00) Izhevsk, Samara',
	'timezone_Indian/Mauritius': '(UTC+04:00) Port Louis',
	'timezone_Europe/Saratov': '(UTC+04:00) Saratov',
	'timezone_Asia/Tbilisi': '(UTC+04:00) Tbilisi',
	'timezone_Europe/Volgograd': '(UTC+04:00) Volgograd',
	'timezone_Asia/Yerevan': '(UTC+04:00) Yerevan',
	'timezone_Asia/Kabul': '(UTC+04:30) Kabul',
	'timezone_Asia/Tashkent': '(UTC+05:00) Ashgabat, Tashkent',
	'timezone_Asia/Yekaterinburg': '(UTC+05:00) Ekaterinburg',
	'timezone_Asia/Karachi': '(UTC+05:00) Islamabad, Karachi',
	'timezone_Asia/Qyzylorda': '(UTC+05:00) Qyzylorda',
	'timezone_Asia/Kolkata': '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
	'timezone_Asia/Colombo': '(UTC+05:30) Sri Jayawardenepura',
	'timezone_Asia/Kathmandu': '(UTC+05:45) Kathmandu',
	'timezone_Asia/Almaty': '(UTC+06:00) Astana',
	'timezone_Asia/Dhaka': '(UTC+06:00) Dhaka',
	'timezone_Asia/Omsk': '(UTC+06:00) Omsk',
	'timezone_Asia/Yangon': '(UTC+06:30) Yangon (Rangoon)',
	'timezone_Asia/Bangkok': '(UTC+07:00) Bangkok, Hanoi, Jakarta',
	'timezone_Asia/Barnaul': '(UTC+07:00) Barnaul, Gorno-Altaysk',
	'timezone_Asia/Hovd': '(UTC+07:00) Hovd',
	'timezone_Asia/Krasnoyarsk': '(UTC+07:00) Krasnoyarsk',
	'timezone_Asia/Novosibirsk': '(UTC+07:00) Novosibirsk',
	'timezone_Asia/Tomsk': '(UTC+07:00) Tomsk',
	'timezone_Asia/Shanghai': '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
	'timezone_Asia/Irkutsk': '(UTC+08:00) Irkutsk',
	'timezone_Asia/Singapore': '(UTC+08:00) Kuala Lumpur, Singapore',
	'timezone_Australia/Perth': '(UTC+08:00) Perth',
	'timezone_Asia/Taipei': '(UTC+08:00) Taipei',
	'timezone_Asia/Ulaanbaatar': '(UTC+08:00) Ulaanbaatar',
	'timezone_Australia/Eucla': '(UTC+08:45) Eucla',
	'timezone_Asia/Chita': '(UTC+09:00) Chita',
	'timezone_Asia/Tokyo': '(UTC+09:00) Osaka, Sapporo, Tokyo',
	'timezone_Asia/Pyongyang': '(UTC+09:00) Pyongyang',
	'timezone_Asia/Seoul': '(UTC+09:00) Seoul',
	'timezone_Asia/Yakutsk': '(UTC+09:00) Yakutsk',
	'timezone_Australia/Adelaide': '(UTC+09:30) Adelaide',
	'timezone_Australia/Darwin': '(UTC+09:30) Darwin',
	'timezone_Australia/Brisbane': '(UTC+10:00) Brisbane',
	'timezone_Australia/Sydney': '(UTC+10:00) Canberra, Melbourne, Sydney',
	'timezone_Pacific/Port_Moresby': '(UTC+10:00) Guam, Port Moresby',
	'timezone_Australia/Hobart': '(UTC+10:00) Hobart',
	'timezone_Asia/Vladivostok': '(UTC+10:00) Vladivostok',
	'timezone_Australia/Lord_Howe': '(UTC+10:30) Lord Howe Island',
	'timezone_Pacific/Bougainville': '(UTC+11:00) Bougainville Island',
	'timezone_Asia/Srednekolymsk': '(UTC+11:00) Chokurdakh',
	'timezone_Asia/Magadan': '(UTC+11:00) Magadan',
	'timezone_Pacific/Norfolk': '(UTC+11:00) Norfolk Island',
	'timezone_Asia/Sakhalin': '(UTC+11:00) Sakhalin',
	'timezone_Pacific/Guadalcanal': '(UTC+11:00) Solomon Is., New Caledonia',
	'timezone_Asia/Kamchatka': '(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky',
	'timezone_Pacific/Auckland': '(UTC+12:00) Auckland, Wellington',
	'timezone_Etc/GMT-12': '(UTC+12:00) Coordinated Universal Time+12',
	'timezone_Pacific/Fiji': '(UTC+12:00) Fiji',
	'timezone_Pacific/Chatham': '(UTC+12:45) Chatham Islands',
	'timezone_Etc/GMT-13': '(UTC+13:00) Coordinated Universal Time+13',
	'timezone_Pacific/Tongatapu': "(UTC+13:00) Nuku'alofa",
	'timezone_Pacific/Apia': '(UTC+13:00) Samoa',
	'timezone_Pacific/Kiritimati': '(UTC+14:00) Kiritimati Island',

	// Reporting Plugin Exceptions
	reportingPluginUnknown: 'Nieznany błąd podczas wykonywania zadania', // An unknown error occured during task execution
	reportingPluginLrt: 'Wystąpił wyjątek LRT we wtyczce raportującej', // An LRT exception occured in reporting plugin
	reportingPluginBadResponse: 'Usługa raportowa odpowiedziała błędem', // Worker responded with error
	reportingPluginStreaming: 'Wystąpił błąd podczas transmisji z usługi raportowej', // An error occured during streaming from worker
	reportingPluginResponseVerification: 'Wystąpił błąd po transmisji wyników z usługi raportowej', // An error have been revealed after streaming result from worker

	// Worker Exceptions
	reportingWorkerExportInvalidParameters: 'Niewłaściwe parametry raportu', // Invalid report parameters
	reportingWorkerExportUnknownRenderingExt: 'Nieznane rozszerzenie przetwarzania {0}', // Unknown rendering extension {0}

	reportingWorkerTaskInitUnknown: 'Nieznany błąd podczas wykonywania zadania przez Usługę Raportową: {0}', // An unknown error occured during worker task execution: {0}
	reportingWorkerTaskInitFileNotFound: 'Plik {0} nie został znaleziony', // File {0} not found
	reportingWorkerTaskInitUnableToLoadFile: 'Nie można załadować pliku {0}', // Unable to load file {0}

	reportingWorkerFailCheckInvalidParameters: 'Niepoprawne parametru raportu', // Invalid report parameters
	reportingWorkerFailCheckUnknown: 'Nieznany błąd podczas wykonywania zadania przez usługę raportową: {0}', // An unknown error occured during worker task execution: {0}
	reportingWorkerFailCheckNoDataset: 'Nie wybrano zestawu danych', // Dataset not specified

	reportingWorkerRenderingDatasetNotFound: 'Wybrany zestaw danych nie został znaleziony, bądź jest niedstępny z powodu braku wystarczających uprawnień', // Specified dataset not found or inaccessible due to insufficient permissions
	reportingWorkerRenderingDatasourceNotFound: 'Wybrane źródło dancyh nie zostało znalezione, bądź jest niedostępne z powodu braku wystarczającyh uprawnień', // Specified datasource not found or inaccessible due to insufficient permissions
	reportingWorkerRenderingUnknown: 'Nieznany błąd podczas wykonywania zadania przez usługę raportową: {0}', // An unknown error occured during worker task execution: {0}
	reportingWorkerFailCheckDataNotAllowed: 'Określony jako {0} \"{1}"  niedostępny z powodu niewystarczających uprawnień', // 'Specified {0} \'{1}\' inaccessible due to insufficient permissions',
	reportingWorkerRenderingCancelled: 'Zadanie zostało anulowane przez administratora lub zadanie jest automatycznie anulowane, ponieważ upłynął limit czasu zadania lub zadanie zostało przerwane', // 'The task is canceled by administrator or the task is automatically canceled because the task has timed out or the task is aborted.',

	reportingWorkerReportUnknown: 'Nieznany błąd podczas pobierania informacji o raporcie: {0}', // An unknown error occured when getting report info: {0}
	reportingWorkerReportCyclicParameterReferences: 'Wykryto cykliczne odwołania parametrów raportu', // Cyclic report parameter references detected
	// TODO, please move to report plugin in future.
	'reporting_worker_fail_check_no_dataset': 'Wystąpił błąd podczas sprawdzania raportu: nie wskazano Zestawu Danych', // An error occurred during report fail check procedure: Dataset not specified
	reportingWorkerJobCancelled: 'Zadanie zostało anulowane przez administratora lub zadanie jest automatycznie anulowane, ponieważ upłynął limit czasu zadania lub zadanie zostało przerwane', // 'The task is canceled by administrator or the task is automatically canceled because the task has timed out or the task is aborted.',

	// Relative Dates
	dtTextBack: 'Powrót do kalendarza',
	tbSpecificDate: 'Konkretna data',
	tbRelativeDate: 'Data względna',
	rdOf: 'na',
	rdDay: 'dzień',
	rdWeek: 'tydzień',
	rdMonth: 'miesiąc',
	rdQuarter: 'kwartał',
	rdYear: 'rok',
	rdCurrent: 'obecny',
	rdPrevious: 'poprzedni',
	rdNext: 'następny',
	rdBeginning: 'początek',
	rdEnd: 'koniec'
};
