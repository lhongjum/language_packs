export const schedulingPL: LanguageKeyValueMap = {

	// Global
	taskStatusEnabled: 'Włączono', // Enabled
	taskStatusDisabled: 'Wyłączono', // Disabled

	// Tabs
	tasksTabCaption: 'Zadania', // Tasks
	tasksTabDescription: 'Zaplanowane zadania dla dokumentu', // Scheduled tasks for the document

	historyTabCaption: 'Historia', // History
	historyTabDescription: 'Historia wykonania zaplanowanych zadań', // Scheduled task execution history

	// Tasks Tab
	tasksTabHeader: 'Zaplanowane zadania', // Scheduled Tasks
	tasksTabNoTasks: 'Nie ma zaplanowanych zadań dla tego dokumentu', // There are no scheduled tasks for this document
	tasksTabBtnAddTask: 'Dodaj zadanie', // Add Task

	// Task Item
	taskItemRunBtnTitle: 'Uruchom zadania', // Run Task
	taskItemMenuBtnTitle: 'Działania', // Actions
	taskItemMenuEnableText: 'Włącz', // Enable
	taskItemMenuEnableTitle: 'Włącz zadanie', // Enable Task
	taskItemMenuDisableText: 'Wyłącz', // Disable
	taskItemMenuDisableTitle: 'Wyłącz zadanie', // Disable Task
	taskItemMenuEditText: 'Edytuj', // Edit
	taskItemMenuEditTitle: 'Edytuj zadanie', // Edit Task
	taskItemMenuDeleteText: 'Usuń', // Delete
	taskItemMenuDeleteTitle: 'Usuń zadanie', // Delete Task
	taskItemTextNextRun: 'Następne uruchomienie:', // Next run:
	taskItemTextManually: 'Ręcznie', // Manually
	taskItemTextNever: 'Nigdy', // Never

	// Task Editor
	taskNoScheduleTemplateTip: 'brak szablonu harmonogramu', // no schedule template
	taskEditorHeaderDetails: 'Szczegóły', // Details
	taskEditorInputPlaceholderDescription: 'Opis zadania', // Task description
	taskEditorLabelExecution: 'Uruchomnienie', // Execution
	taskEditorExecutionManual: 'Ręczne', // Manual
	taskEditorExecutionOneTime: 'Jeden raz', // One-Time
	taskEditorExecutionScheduled: 'Planowy', // Scheduled
	taskEditorLabelStart: 'Start',
	taskEditorBtnCreateText: 'Utwórz zadanie', // Create Task
	taskEditorBtnUpdateText: 'Aktualizuj zadanie', // Update Task
	taskEditorBtnCancelText: 'Anuluj', // Cancel
	oneTimeStartTimeLimit: 'Czas rozpoczęcia nie może być ustawiony na czas mniejszy niż 5 minut od teraz', // The start time cannot be set to any time less than 5 minutes from now
	oneTimeStartTimeLimitTitle: 'Nieprawidłowy czas', // Invalid time
	taskEditorDescriptionError: 'Opis zadania nie powinien być pusty', // Task description should not be empty
	fileNameError: 'Nazwa pliku nie powinna być pusta', // File name should not be empty
	fullPathError: 'Ścieżka do pliku nie powinna być pusta', // File path should not be empty

	// Recurrence Editor
	recEditorCloneFromTemplate: 'Użyj szablonu', // Use Template
	recEditorChooseTemplate: 'Wybierz szablon', // Choose Template
	recEditorTemplateHasBeenDeleted: 'Szablon został usunięty', // Template has been deleted
	recEditorHeaderRepeat: 'Powtarzaj', // Repeat
	recEditorLabelStart: 'Start', // Start
	recEditorLabelEnd: 'Zakończ', // End
	recEditorPlaceholderNoEndDate: 'Brak daty zakończenia', // No End Date
	recEditorDailyEditor: 'Codziennie', // Daily
	recEditorWeeklyEditor: 'Co tydzień', // Weekly
	recEditorMonthlyEditor: 'Co miesiąc', // Monthly

	// Daily Editor
	dailyEditorTextAt: 'O {{time}}', // At {{time}}
	dailyEditorTextEvery: 'Każdej', // Every
	dailyEditorTextUnits: 'godzinie', // hour(s)

	// Weekly Editor
	weeklyEditorTextEvery: 'Każdego', // Every
	weeklyEditorTextUnits: 'tygodnia', // week(s)

	// Monthly Editor
	monthlyEditorTextEvery: 'Każdego', // Every
	monthlyEditorTextUnits: 'miesiąca', // month(s)
	monthlyEditorTextOnDay: 'W dniu', // On day
	monthlyEditorTextOnDayUnits: '',
	monthlyEditorTextOnTheLast: 'Ostatniego', // On the last
	monthlyEditorTextOnTheFirst: 'Pierwszego', // On the first
	monthlyEditorTextLastDay: 'Dnia', // Day
	monthlyEditorTextLastWeekday: 'Dnia powszedniego', // Weekday

	// Delivery Editor
	delEditorHeader: 'Dostawa', // Delivery 
	delEditorMenuEmail: 'Email',
	delEditorMenuLocal: 'Lokalny magazyn', // Local Storage
	delEditorMenuWFS: 'Udostępnienie pliku', // File Share

	delEditorLocalStoreForever: 'Przechowuj na zawsze', // Store forever
	delEditorLocalStoreUntil: 'Przechowuj do ...', // Store until...
	delEditorLocalDeleteAfter: 'Czas wygaśnięcia ...', // Expiry Duration...
	delEditorLocalTextOnDayUnits: 'Dni', // Day(s)
	delEditorLocalAllowAnonymous: 'Zezwalaj na anonimowość', // Allow anonymous

	delEditorWFSLabelFileName: 'Nazwa pliku', // File Name
	delEditorWFSLabelPath: 'Ścieżka', // Path
	delEditorWFSLabelOverwrite: 'Nadpisz istniejące', // Overwrite existing
	delEditorWFSLabelUser: 'Użytkownik', // User
	delEditorWFSLabelPassword: 'Hasło', // Password

	delEditorMailStoreForever: 'Przechowuj na zawsze', // Store forever
	delEditorMailStoreUntil: 'Przechowuj do ...', // Store until...
	delEditorMailDeleteAfter: 'Czas wygaśnięcia ...', // Expiry Duration...
	delEditorMailAllowAnonymous: 'Zezwalaj na anonimowość', // Allow anonymous

	expiryTimeUnitHour: 'Godziny', // Hours
	expiryTimeUnitDay: 'Dni', // Days
	expiryTimeUnitWeek: 'Tygodnie', // Weeks
	expiryTimeUnitMonth: 'Miesiące', // Months
	expiryTimeUnitYear: 'Lata', // Years

	delEditorMailLabelEmailTo: 'Wyślij e-mail do', // Email To
	delEditorMailLabelEmailToLabel: 'Wpisz adres e-mail do', // Please enter email to
	delEditorMailLabelEmailToIsInvalid: 'Format adresu e-mail jest nieprawidłowy', // Email format is invalid
	delEditorMailLabelInvalidDomainTip: 'Nieprawidłowa domena adresu e-mail', // Invalid Email Domain
	delEditorMailLabelReplyTo: 'Odpowiedz do', // Reply To
	delEditorMailLabelReplyToLabel: 'Wpisz odpowiedź do', // Please enter reply to
	delEditorMailLabelSubject: 'Temat', // Subject
	delEditorMailLabelSubjectToolTip:  'Możesz odwołać się do dowolnego parametru w temacie wprowadzając znak zapytania (?) a następnie nazwę parametru. Do nazwy pulpitu nawigacyjnego można się odwołać za pomocą symbolu zastępczego &DashboardName. Do czasu aktualizacji zestawów danych używanych na pulpicie nawigacyjnym można się odwołać za pomocą specjalnego symbolu zastępczego &DataRefreshTime.', // You can reference any parameter in the subject by entering a question mark (?) followed by the parameter\'s name.The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime.
	delEditorMailLabelBody: 'Treść', // Body
	delEditorMailLabelBodyToolTip: 'Możesz odwołać się do dowolnego parametru w treści wiadomości wprowadzając znak zapytania (?) a następnie nazwę parametru. Do nazwy pulpitu nawigacyjnego można się odwołać za pomocą symbolu zastępczego &DashboardName. Do czasu aktualizacji zestawów danych używanych na pulpicie nawigacyjnym można się odwołać za pomocą specjalnego symbolu zastępczego &DataRefreshTime.', // You can reference any parameter in the message body by entering a question mark (?) followed by the parameter\'s name.The dashboard\'s name can be referenced with the special placeholder &DashboardName. The update time of datasets used in the dashboard can be referenced with the special placeholder &DataRefreshTime.
	delEditorMailLabelAttachmentType: 'Typ Załącznika', // Attachment Type
	delEditorMailAttachmentFile: 'Załącznik', // File Attachment
	delEditorMailAttachmentLink: 'Link do pobrania', // Download Link
	delEditorMailAttachmentBody: 'Wyślij panel jako treść', // Send Dashboard as Body
	delEditorMailSubject: 'Zaplanowany pulpit nawigacyjny', // Scheduled Dashboard
	delEditorMailBody: 'Oto pulpit nawigacyjny &DashboardName. Czas aktualizacji przywoływanych zestawów danych to &DataRefreshTime. Pulpit nawigacyjny jest połączony poniżej. &Link', // Here is the &DashboardName dashboard. The update time of referenced datasets is &DataRefreshTime. The dashboard is linked below. &Link

	// Reporting Editor
	reportingEditorHeaderExportFormat: 'Format eksportu', // Export Format
	reportingEditorAdvancedExportSettings: 'Ustawienia zaawansowane', // Advanced Settings
	reportingEditorHeaderParameters: 'Parametry', // Parameters
	reportingEditorParametersStateInitializing: 'Inicjowanie...', //Initializing...
	reportingEditorParametersStateValidating: 'Weryfikuję...', // Validating...
	reportingEditorParametersStateValid: 'Prawidłowe parametry', // Valid Parameters
	reportingEditorParametersStateinvalid: 'Nieprawidłowe parametry', // Invalid Parameters
	reportingEditorTextNoParameters: 'pulpit nawigacyjny nie ma parametrów', // dashboard has no parameters
	reportingEditorFormatPdf: 'PDF',
	reportingEditorFormatExcel: 'Excel',
	reportingEditorFormatHTML: 'HTML',
	reportingEditorFormatCSV: 'CSV',
	reportingEditorFormatJSON: 'JSON',
	reportingEditorFormatImage: 'Image',
	reportingEditorFormatWord: 'Word',

	// Job Editor Saga
	jeSagaQueueErrorTaskFailed: 'Zadanie nie powiodło się', // Task Failed
	jeSagaQueueErrorExecFailed: 'Nie można wykonać zadania', // Unable to execute task
	jeSagaQueueErrorNoWorkers: 'Brak dostępnych workerów', // No workers available
	jeSagaQueueErrorUnknown: 'Nieznany błąd', // Unknown Error

	jeSagaTextJobEditorError: 'Błąd edytora zadań', // Job Editor Error
	jeSagaTextParametersError: 'Nie można pobrać parametrów panelu', // Unable to get dashboard parameters
	jeSagaTextParameterValuesError: 'Nie można pobrać wartości parametrów', // Unable to get parameter values

	jeSagaFail: 'Reporting Job Editor: Nieznany Błąd', // Reporting Job Editor: Unknown Error

	// History Tab
	histTabHeaderRunning: 'W trakcie', // Running
	histTabHeaderResults: 'Rezultat', // Results
	histTabNoHistory: 'Nie ma historii zadań dla tego dokumentu', // There is no task history for this document

	// History & Job Items
	hiStatusCancelled: 'Anulowany', // Cancelled
	hiStatusFailed: 'Niepowodzenie', // Failed
	hiStatusCompleted: 'Zakończony', // Completed
	hiStatusAccomplished: 'Zakończony', // Completed
	jiStatusQueued: 'W kolejce', // Queued
	jiStatusRunning: 'W trakcie', // Running

	hiTitleDownload: 'Pobierz', // Download
	hiTitleShowError: 'Pokaż szczegóły błędu', // Show error details
	hiTitleShowWarn: 'Pokaż szczegóły ostrzeżenia', // Show warning details

	// Security Error Message
	securityErr_10001: '[Błąd zabezpieczeń] Discovery Client otrzymał błąd dokumentu.', // [Security Error] Discovery Client Retrieves discovery document error.
	securityErr_10002: '[Błąd zabezpieczeń] Otrzymano błąd dokumentu.', // [Security Error] Get discovery document error.
	securityErr_10003: '[Błąd zabezpieczeń] Błąd przy odświeżaniu tokena. \r\nException:{{errorMessage}}. \r\nStackTracke:{{stackTrace}}.',
	securityErr_10004: '[Błąd zabezpieczeń] {{errorMessage}}.',
	securityErr_10004_1: '[Błąd zabezpieczeń] The organization where the task was created does not exist.',

	// Execution Error Message
	executionErr_10001: '[Błąd wykonania] Nieznany status zadania', // [Execution Error] Unknown cot task status.
	executionErr_10002: '[Błąd wykonania] Nie znaleziono zadania', // [Execution Error] Cot task not found.
	executionErr_10003: '[Błąd wykonania] Zadanie nie zostało utworzone', // [Execution Error] Cot task not created.
	executionErr_10004: '[Błąd wykonania] Wystąpił błąd IO: {{errorMessage}}.', // [Execution Error] An IO error occured: {{errorMessage}}.
	executionErr_11001: '[Błąd wykonania] Wskazany katalog nie został znaleziony.', // [Execution Error] The specified directory is not found.
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
	taskErr_30019: 'Nie możesz tworzyć ani aktualizować zadań ręcznych i jednorazowych ze względu na ustawienia wprowadzone przez administratora.', // Your cannot create or update manual and one time task due to settings by administrator.
	taskErr_30020: 'Nie można udostępniać plików z powodu ustawień administratora.', // Delivery cannot be file share due to settings by administrator.
	taskErr_30021: 'Identyfikator URI portalu jest wymagany podczas tworzenia zadań do raportu. Prosimy o kontakt z Administratorem', // Portal URI is required when creating tasks for report. Please contact the Administrator

	// SAGA: enable/disable task
	sagaTextErrorUpdatingTaskList: 'Błąd podczas aktualizowania listy zadań', // Error updating task list
	sagaTextErrorGettingTaskHistory: 'Błąd podczas pobierania historii zadań', // Error getting task history
	sagaTextErrorUpdatingHistory: 'Błąd podczas aktualizowania historii zadań', // Error updating history list

	sagaTextErrorCreatingTask: 'Nie utworzono zadania', // Task was NOT created
	sagaTextErrorUpdatingTask: 'Nie zaktualizowano zadania', // Task was NOT updated
	sagaTextErrorDeletingTask: 'Nie skasowano zadania', // Task was NOT deleted
	sagaTextErrorStartingTask: 'Nie uruchomiono zadania', // Task was NOT started
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

	'dashboardScheduleTasks!name': 'Zadania', // Tasks
	'dashboardScheduleTasks!description': 'Zadania zaplanowane dla tego dokumentu', // Scheduled tasks for the document

	'dashboardScheduleHistory!name': 'Historia', // History
	'dashboardScheduleHistory!description': 'Historia wykonania zaplanowanych zadań', // Scheduled task execution history

	// Timezone
	taskExecutingTimezone: 'Strefa czasowa uruchomienia', // Executing Timezone
	'timezone_Etc/GMT+11': '(UTC-11:00) Uniwersalny czas koordynowany-11',
	'timezone_America/Adak': '(UTC-10:00) Wyspy Aleuckie',
	'timezone_Pacific/Honolulu': '(UTC-10:00) Hawaje',
	'timezone_Pacific/Marquesas': '(UTC-09:30) Markizy',
	'timezone_America/Anchorage': '(UTC-09:00) Alaska',
	'timezone_Etc/GMT+9': '(UTC-09:00) Uniwersalny czas koordynaowany-09',
	'timezone_America/Tijuana': '(UTC-08:00) Kalifornia Dolna',
	'timezone_Etc/GMT+8': '(UTC-08:00) Uniwersalny czas koordynaowany-08',
	'timezone_America/Los_Angeles': '(UTC-08:00) Czas Pacyficzny (USA & Kanada)',
	'timezone_America/Phoenix': '(UTC-07:00) Arizona',
	'timezone_America/Chihuahua': '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
	'timezone_America/Denver': '(UTC-07:00) Czas Górski (USA & Kanada)',
	'timezone_America/Guatemala': '(UTC-06:00) Ameryka Śordkowa',
	'timezone_America/Chicago': '(UTC-06:00) Czas Środkowy (USA & Kanada)',
	'timezone_Pacific/Easter': '(UTC-06:00) Wyspa Wielkanocna',
	'timezone_America/Mexico_City': '(UTC-06:00) Guadalajara, Meksyk (miasto), Monterrey',
	'timezone_America/Regina': '(UTC-06:00) Saskatchewan',
	'timezone_America/Bogota': '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
	'timezone_America/Cancun': '(UTC-05:00) Chetumal',
	'timezone_America/New_York': '(UTC-05:00) Czas Wschodni (USA & Kanada)',
	'timezone_America/Port-au-Prince': '(UTC-05:00) Haiti',
	'timezone_America/Havana': '(UTC-05:00) Hawana',
	'timezone_America/Indiana/Indianapolis': '(UTC-05:00) Indiana (Wschód)',
	'timezone_America/Grand_Turk': '(UTC-05:00) Turks & Caicos',
	'timezone_America/Asuncion': '(UTC-04:00) Asuncion',
	'timezone_America/Halifax': '(UTC-04:00) Czas Atlantycki (Kanada)',
	'timezone_America/Caracas': '(UTC-04:00) Caracas',
	'timezone_America/Cuiaba': '(UTC-04:00) Cuiaba',
	'timezone_America/La_Paz': '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
	'timezone_America/Santiago': '(UTC-04:00) Santiago',
	'timezone_America/St_Johns': '(UTC-03:30) Nowa Funlandia',
	'timezone_America/Araguaina': '(UTC-03:00) Araguaina',
	'timezone_America/Sao_Paulo': '(UTC-03:00) Brasilia',
	'timezone_America/Cayenne': '(UTC-03:00) Cayenne, Fortaleza',
	'timezone_America/Argentina/Buenos_Aires': '(UTC-03:00) Buenos Aires',
	'timezone_America/Godthab': '(UTC-03:00) Greenlandia',
	'timezone_America/Montevideo': '(UTC-03:00) Montevideo',
	'timezone_America/Punta_Arenas': '(UTC-03:00) Punta Arenas',
	'timezone_America/Miquelon': '(UTC-03:00) Saint Pierre & Miquelon',
	'timezone_America/Bahia': '(UTC-03:00) Salwador',
	'timezone_Etc/GMT+2': '(UTC-02:00) Uniwersalny czas koordynaowany-02',
	'timezone_Atlantic/Azores': '(UTC-01:00) Azory',
	'timezone_Atlantic/Cape_Verde': '(UTC-01:00) Wyspy Zielonego Przylądka',
	'timezone_Etc/UTC': '(UTC) Uniwersalny czas koordynaowany',
	'timezone_Europe/London': '(UTC+00:00) Dublin, Edynburg, Lizbona, Londyn',
	'timezone_Atlantic/Reykjavik': '(UTC+00:00) Monrovia, Reykjavik',
	'timezone_Africa/Sao_Tome': '(UTC+00:00) Wyspy Świętego Tomasza',
	'timezone_Africa/Casablanca': '(UTC+01:00) Casablanca',
	'timezone_Europe/Berlin': '(UTC+01:00) Amsterdam, Berlin, Berno, Rzym, Sztokfolm, Wiedeń',
	'timezone_Europe/Budapest': '(UTC+01:00) Belgrad, Bratislawa, Budapeszt, Ljubljana, Praga',
	'timezone_Europe/Paris': '(UTC+01:00) Bruksela, Kopenhaga, Madryt, Paryż',
	'timezone_Europe/Warsaw': '(UTC+01:00) Sarajewo, Skopje, Warszawa, Zagrzeb',
	'timezone_Africa/Lagos': '(UTC+01:00) Afryka Środkowozachodnia',
	'timezone_Asia/Amman': '(UTC+02:00) Amman',
	'timezone_Europe/Bucharest': '(UTC+02:00) Ateny, Bukareszt',
	'timezone_Asia/Beirut': '(UTC+02:00) Bejrut',
	'timezone_Africa/Cairo': '(UTC+02:00) Kair',
	'timezone_Europe/Chisinau': '(UTC+02:00) Kiszyniów',
	'timezone_Asia/Damascus': '(UTC+02:00) Damaszek',
	'timezone_Asia/Hebron': '(UTC+02:00) Gaza, Hebron',
	'timezone_Africa/Johannesburg': '(UTC+02:00) Harare, Pretoria',
	'timezone_Europe/Kiev': '(UTC+02:00) Helsinki, Kijów, Ryga, Sofia, Tallinn, Wilno',
	'timezone_Asia/Jerusalem': '(UTC+02:00) Jerozolima',
	'timezone_Europe/Kaliningrad': '(UTC+02:00) Kaliningrad',
	'timezone_Africa/Khartoum': '(UTC+02:00) Chartum',
	'timezone_Africa/Tripoli': '(UTC+02:00) Trypolis',
	'timezone_Africa/Windhoek': '(UTC+02:00) Windhuk',
	'timezone_Asia/Baghdad': '(UTC+03:00) Bagdad',
	'timezone_Europe/Istanbul': '(UTC+03:00) Stambuł',
	'timezone_Asia/Riyadh': '(UTC+03:00) Kuwejt, Rijad',
	'timezone_Europe/Minsk': '(UTC+03:00) Mińsk',
	'timezone_Europe/Moscow': '(UTC+03:00) Moskwa, St. Petersburg',
	'timezone_Africa/Nairobi': '(UTC+03:00) Nairobi',
	'timezone_Asia/Tehran': '(UTC+03:30) Teheran',
	'timezone_Asia/Dubai': '(UTC+04:00) Abu Zabi, Maskat',
	'timezone_Europe/Astrakhan': '(UTC+04:00) Astrachań, Uljanowsk',
	'timezone_Asia/Baku': '(UTC+04:00) Baku',
	'timezone_Europe/Samara': '(UTC+04:00) Iżewsk, Samara',
	'timezone_Indian/Mauritius': '(UTC+04:00) Port Louis',
	'timezone_Europe/Saratov': '(UTC+04:00) Saratow',
	'timezone_Asia/Tbilisi': '(UTC+04:00) Tbilisi',
	'timezone_Europe/Volgograd': '(UTC+04:00) Wołgograd',
	'timezone_Asia/Yerevan': '(UTC+04:00) Erywań',
	'timezone_Asia/Kabul': '(UTC+04:30) Kabul',
	'timezone_Asia/Tashkent': '(UTC+05:00) Aszchabad, Taszkient',
	'timezone_Asia/Yekaterinburg': '(UTC+05:00) Jekaterynburg',
	'timezone_Asia/Karachi': '(UTC+05:00) Islamabad, Karaczi',
	'timezone_Asia/Qyzylorda': '(UTC+05:00) Kyzylorda',
	'timezone_Asia/Kolkata': '(UTC+05:30) Cennaj, Kalkuta, Mumbai, Nowe Delhi',
	'timezone_Asia/Colombo': '(UTC+05:30) Sri Dźajawardanapura Kotte',
	'timezone_Asia/Kathmandu': '(UTC+05:45) Katmandu',
	'timezone_Asia/Almaty': '(UTC+06:00) Astana',
	'timezone_Asia/Dhaka': '(UTC+06:00) Dakka',
	'timezone_Asia/Omsk': '(UTC+06:00) Omsk',
	'timezone_Asia/Yangon': '(UTC+06:30) Rangun',
	'timezone_Asia/Bangkok': '(UTC+07:00) Bangkok, Hanoi, Dżakarta',
	'timezone_Asia/Barnaul': '(UTC+07:00) Barnaul, Gorno-Altaysk',
	'timezone_Asia/Hovd': '(UTC+07:00) Hovd',
	'timezone_Asia/Krasnoyarsk': '(UTC+07:00) Krasnojarsk',
	'timezone_Asia/Novosibirsk': '(UTC+07:00) Nowosybirsk',
	'timezone_Asia/Tomsk': '(UTC+07:00) Tomsk',
	'timezone_Asia/Shanghai': '(UTC+08:00) Pekin, Chongqing, Hong Kong, Urumqi',
	'timezone_Asia/Irkutsk': '(UTC+08:00) Irkuck',
	'timezone_Asia/Singapore': '(UTC+08:00) Kuala Lumpur, Singapur',
	'timezone_Australia/Perth': '(UTC+08:00) Perth',
	'timezone_Asia/Taipei': '(UTC+08:00) Tajpej',
	'timezone_Asia/Ulaanbaatar': '(UTC+08:00) Ułan Bator',
	'timezone_Australia/Eucla': '(UTC+08:45) Eucla',
	'timezone_Asia/Chita': '(UTC+09:00) Chita',
	'timezone_Asia/Tokyo': '(UTC+09:00) Osaka, Sapporo, Tokio',
	'timezone_Asia/Pyongyang': '(UTC+09:00) Pjongjang',
	'timezone_Asia/Seoul': '(UTC+09:00) Seul',
	'timezone_Asia/Yakutsk': '(UTC+09:00) Jakuck',
	'timezone_Australia/Adelaide': '(UTC+09:30) Adelaide',
	'timezone_Australia/Darwin': '(UTC+09:30) Darwin',
	'timezone_Australia/Brisbane': '(UTC+10:00) Brisbane',
	'timezone_Australia/Sydney': '(UTC+10:00) Canberra, Melbourne, Sydney',
	'timezone_Pacific/Port_Moresby': '(UTC+10:00) Guam, Port Moresby',
	'timezone_Australia/Hobart': '(UTC+10:00) Hobart',
	'timezone_Asia/Vladivostok': '(UTC+10:00) Władywostok',
	'timezone_Australia/Lord_Howe': '(UTC+10:30) Lord Howe',
	'timezone_Pacific/Bougainville': '(UTC+11:00) Wyspa Bougainville',
	'timezone_Asia/Srednekolymsk': '(UTC+11:00) Czokurdach',
	'timezone_Asia/Magadan': '(UTC+11:00) Magadan',
	'timezone_Pacific/Norfolk': '(UTC+11:00) Wyspa Norfolk',
	'timezone_Asia/Sakhalin': '(UTC+11:00) Sachalin',
	'timezone_Pacific/Guadalcanal': '(UTC+11:00) Wyspy Salomona, Nowa Kaledonia',
	'timezone_Asia/Kamchatka': '(UTC+12:00) Anadyr, Pietropawłowsk Kamczacki',
	'timezone_Pacific/Auckland': '(UTC+12:00) Auckland, Wellington',
	'timezone_Etc/GMT-12': '(UTC+12:00) Uniwersalny czas koordynowany+12',
	'timezone_Pacific/Fiji': '(UTC+12:00) Fidżi',
	'timezone_Pacific/Chatham': '(UTC+12:45) Wyspy Chatham',
	'timezone_Etc/GMT-13': '(UTC+13:00) Uniwersalny czas koordynowany+13',
	'timezone_Pacific/Tongatapu': "(UTC+13:00) Nuku'alofa",
	'timezone_Pacific/Apia': '(UTC+13:00) Samoa',
	'timezone_Pacific/Kiritimati': '(UTC+14:00) Kiritimati',
};
