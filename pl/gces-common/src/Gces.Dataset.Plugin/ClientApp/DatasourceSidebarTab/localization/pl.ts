export const datasourceSchedulingPL: LanguageKeyValueMap = {

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
	taskItemTextNextRun: 'Następne uruchomienie', // Next run:
	taskItemTextManually: 'Ręcznie', // Manually
	taskItemTextNever: 'Nigdy', // Never

	// Task Editor
	taskNoScheduleTemplateTip: 'Brak szablonu planowania', // no schedule template
	taskEditorCloneFromTemplate: 'Użyj Szablonu', // Use Template
	taskEditorChooseTemplate: 'Wybierz Szablon', // Choose Template
	taskEditorTemplateHasBeenDeleted: 'Szablon został usunięty', // Template has been deleted
	taskEditorHeaderDetails: 'Szczegóły', // Details
	taskEditorInputPlaceholderDescription: 'Opis zadania', // Task description
	taskEditorLabelExecution: 'Wykonanie', // Execution
	taskEditorExecutionManual: 'Ręczne', // Manual
	taskEditorExecutionOneTime: 'Jednorazowe', // One-Time
	taskEditorExecutionScheduled: 'Planowane', // Scheduled
	taskEditorLabelStart: 'Start', // Start
	taskEditorBtnCreateText: 'Utwórz zadanie', // Create Task
	taskEditorBtnUpdateText: 'Zaktualizuj zadanie', // Update Task
	taskEditorBtnCancelText: 'Anuluj', // Cancel
	taskEditorLabelMail: 'Powiadomienie Email', // Email Notification
	taskEditorLabelMailTooltip: 'Wyślij komunikat o błędzie do określonej skrzynki pocztowej, gdy wykonanie zadania nie powiedzie się', // Send the failure message to the specified mailbox when the task execution failed
	taskEditorLabelFolderLocation: 'Lokalizacja Folderu', // Folder Location
	taskEditorLabelMailLabel: 'Please enter email notification',
	taskEditorLabelFolderLocationToolTip: 'Upewnij się, że uprawnienia do odczytu i zapisu są dostępne dla określonej lokalizacji folderu', // Please ensure that Read and Write permissions are given for the specified folder location
	locationPlaceholder: 'Podaj lokalizację folderu', // Please input the folder location
	taskEditorLabelAction: 'Akcja', // Action
	taskEditorMailLabelInvalidDomainTip: 'Nieprawidłowa Domena Email', // Invalid Email Domain
	taskEditorEmailFormatError: 'Email format is invalid',
	taskEditorDescriptionError: 'Task description should not ben empty',
	validate: 'Weryfikuj', // Verify
	overwrite: 'Nadpisz', // OverWrite
	append: 'Dołącz Dane', // Append Data
	sagaTextErrorInvalidLocation: 'Invalid Location',
	sagaTextErrorInvalidLocation_30013: 'Write permission is denied',
	sagaTextErrorInvalidLocation_30014: 'Delete permission is denied',
	sagaTextErrorInvalidLocation_30015: 'Location does not exist',
	sagaTextErrorInvalidLocation_30016: 'Each schedule should correspond to a separate directory',
	sagaTextErrorInvalidLocation_30017: 'Read permission is denied',
	sagaTextSuccessVerifyLocation: 'The location inputted is valid',
	sagaTextSuccessMessageVerifyLocation: 'The location inputted is valid',

	// Recurrence Editor
	recEditorHeaderRepeat: 'Powtórz', // Repeat
	recEditorLabelStart: 'Start', // Start
	recEditorLabelEnd: 'Koniec', // End
	recEditorPlaceholderNoEndDate: 'Brak daty końcowej', // No End Date
	recEditorDailyEditor: 'Dziennie', // Daily
	recEditorWeeklyEditor: 'Tygodniowo', // Weekly
	recEditorMonthlyEditor: 'Miesięcznie', // Monthly

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
	monthlyEditorTextOnTheFirst: 'On the first', // W pierwszy
	monthlyEditorTextLastDay: 'Dzień', // Day
	monthlyEditorTextLastWeekday: 'Dzień roboczy', // Weekday

	// SAGA: enable/disable task
	sagaTextErrorUpdatingTaskList: 'Błąd podczas aktualizowania listy zadań', // Error updating task list
	sagaTextErrorGettingTaskHistory: 'Błąd podczas pobierania historii zadań', // Error getting task history
	sagaTextErrorUpdatingHistory: 'Błąd podczas aktualizowania historii zadań', // Error updating history list

	sagaTextErrorCreatingTask: 'Nie utworzono zadania', // Task was NOT created
	sagaTextErrorUpdatingTask: 'Nie zaktualizowano zadania', // Task was NOT updated
	sagaTextErrorDeletingTask: 'Nie skasowano zadania', // Task was NOT deleted
	sagaTextErrorStartingTask: 'Nie uruchomiono zadania', // Task was NOT started
	sagaToggleNotification: 'Obecny status zadania: {{status, lowercase}}', // Task is now {{status, lowercase}}

	sagaTextErrorGetDataset: 'Błąd wczytywania zestawu danych', // Error loading dataset
	sagaFailed: 'Wtyczka planująca: Nieznany błąd', // Scheduling Plugin: Unknown Error

	// Tabs
	'scheduleTasks!name': 'Zadania', // Tasks
	'scheduleTasks!description': 'Zadania zaplanowane dla tego dokumentu', // Scheduled tasks for the document
	'scheduleHistory!name': 'Historia', // History
	'scheduleHistory!description': 'Historia wykonania zaplanowanych zadań', // Scheduled task execution history

	// Fields info
	searchFieldsPlaceHolder: 'Przeszukaj pola', // Search fields

	// data type
	Number: 'Liczba', // Number
	String: 'Napis', // String
	DateTime: 'DataCzas', // DateTime
	Date: 'Data', // Date
	Boolean: 'Boolean',
	Guid: 'GUID', // Guid
	Unknown: 'Nieobsługiwany', // Unsupported

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
