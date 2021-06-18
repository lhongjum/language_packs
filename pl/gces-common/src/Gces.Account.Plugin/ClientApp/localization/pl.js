export const accountPL = {
	// common
	Add: 'Dodaj', // Add
	Edit: 'Edytuj', // Edit
	Save: 'Zapisz', // Save
	Cancel: 'Anuluj', // Cancel
	Home: 'Start', // Home
	Delete: 'Usuń', // Delete
	Remove: 'Usuń', // Remove
	DeleteConfirm: 'Potwierdź usuwanie', // Delete Confirm
	Yes: 'Tak', // Yes
	No: 'Nie', // No
	All: 'Wszystko', // All
	MoveUp: 'W górę', // Move Up
	MoveDown: 'W dół', // Move Down
	SearchText: 'szukaj tekstu', // search text
	Enabled: 'Włączone', // Enabled
	Error: 'Błąd', // Error
	Close: 'Zamknij', // Close
	More: 'Więcej', // More

	Username: 'Nazwa użytkownika', // Username
	Roles: 'Role', // Roles
	Organizations: 'Organizacje', // Organizations
	Locked: 'Zablokowany', // Locked
	Users: 'Użytkownicy', // Users
	SelectValue: 'wybierz wartość', // select value
	UnlockUser: 'Odblokuj użytkownika', // Unlock User
	UnlockUserConfirm: 'Czy chcesz odblokować użytkownika "{{user}}" ?', // Do you want to unlock user "{{user}}" ?
	Settings: 'Ustawienia', // Settings

	// Generate token
	gtUser: 'Użytkownik', // User
	gtPassword: 'Hasło', // Password
	gtAvatarMenu: 'Ukryj menu awatara', // Hide avatar menu
	gtWelcomeScreen: 'Ukryj ekran powitalny', // Hide welcome screen
	gtGenerateToken: 'Wygeneruj token', // Generate Token
	gtToken: 'Token', // Token
	gtTitle: 'Tytuł', // Title
	gtDescription: 'Opis', // Description
	gtOrgPath: 'Ścieżka organizacyjna', // Organization Path
	gtCreatedTime: 'Czas utworzenia', // Created Time
	gtTokenList: 'Tokeny', // Tokens
	gtIntegratePortalUrl: 'Zintegruj link portalu', // Integrate Portal URL
	gtIntegrateAdminPortalUrl: 'Zintegruj link portalu administratora', // Integrate Admin Portal URL
	gtIntegrateResourcePortalUrl: 'Zintegruj link portalu zasobów', // Integrate Resource Portal URL
	invalid_username_or_password: 'Nieprawidłowy użytkownik lub hasło', // Invalid user or password
	error_description_default: 'Nie udało się pobrać tokena. Użytkownik może być zablokowany/usunięty.', // Failed to get token, maybe it\'s due to user disabled or deleted.
	gtRevoke: 'unieważnij token', // revoke token
	'gtRevoke!btn': 'Unieważnij', // Revoke
	gtGenerateTokenSuccess: 'Poprawnie wygenerowano token', // Token generated successfully
	gtRevokeTokenSuccess: 'Poprawnie unieważniono token', // Token revoked successfully
	gtGenerateUrl: 'wygeneruj link integracji...', // generate integration url...
	gtGenerateUrlTitle: 'Wygeneruj link', // Generate URL
	gtGetToken: 'Pobierz token', // get token
	gtClipboardError: 'Nie można zapisać danych do schowka', // Cannot write data to clipboard
	gtClipboardSuccess: 'Poprawnie skopiowano do schowka', // Successfully copied to clipboard
	gtRevokeToken: 'Unieważnij token', // Revoke token
	gtRevokeTokenConfirmMessage: "Czy chcesz unieważnić token '{{title}}'?", // o you want to revoke token '{{title}}'?
	gtCopyUrl: 'Kopiuj link', // Copy URL
	gtCopyOfflineLicenseString: 'Skopiuj ciąg licencji offline', // Copy Offline license string
	gtExpiryTime: 'Czas wygaśnięcia', // Expiry Time
	error_100001: 'Niepoprawny parametr: {{name}}', // Invalid parameter: {{name}}
	error_100002: 'Nieznany błąd: {{message}}', // Unknown error: {{message}}
	error_100003: 'Nie znaleziono tokena integracji {{id}}', // Integration token not found {{id}}
	error_100004: 'Błąd unieważnienia tokena: {{message}}', // Revoke token error: {{message}}
	error_100005: 'Please confirm that the "Portal URI" in "UI Settings" is already provided before you generate the Integration URL.', // Please confirm that the "Portal URI" in "UI Settings" is already provided before you generate the Integration URL.
	error_100006: 'Żądanie uwierzytelnienia nie powiodło się dla identyfikatora URI portalu „{{url}}”. Nie udało się zażądać roszczeń użytkowników.', // Request authentication failed on Portal URI "{{url}}". Could not request user claims.
	gtExpireTimeInvalid: 'Czas wygaśnięcia jest nieprawidłowy', // The expiry time is invalid
	gtExpireTimeLessThanNow: 'Czas wygaśnięcia nie może być wcześniejszy od lub równy aktualnemu czasowi', // The expiry time cannot be less than or equal current time
	gtState: 'Stan', // State
	gtValid: 'Ważny', // Valid
	gtExpired: 'Wygasły', // Expired

	// Customize properties
	AddProperty: 'Dodaj atrybut', // Add Property
	EditProperty: 'Eydtuj atrybut', // Edit Property
	DeleteProperty: 'Usuń atrybut', // Delete Property
	PropertyName: 'Nazwa atrybutu', // Property Name
	AvailableValues: 'Dostępne wartości', // Available Values
	AvailableValuesDesc: 'Dostępne wartości (jedna wartość na linię)', // Available Values(One value per line)
	ShowInList: 'Pokaż na liście', // Show In List
	DeletePropertyConfirmMessage: 'Czy chcesz skasować atrybut "{{property}}" na stałe?', // Do you want to delete property "{{property}}" permanently?
	PropertyNameRequirement: "Maksymalna długość nazwy atrybutu to 64 znaki. Nazwa nie może zawierać '<', '>', '/' oraz '\\'.", // The max length of customize property name is 64, and it can not contain '<', '>', '/' and '\\'.
	ContinueUpdate: 'Kontynować aktualizację?', // Continue Update?
	UpdatePropertyConfirm: 'Wartości atrybutu "{{propValues}}" są w użyciu. Te wartości będą wolne do użycia, gdy zaktualizujesz atrybut. Czy chcesz kontynować?', // The property values "{{propValues}}" are in use, these values will be cleared if you update the property, do you want to continue?
	NewPropertyName: 'Nazwa nowego atrybutu', // New property name
	NoCustomizePropertiesTip: 'Brak rozszerzonych atrybutów w systemie. Kliknij, aby dodać.', // No extended properties in the system.To add,please click
	AllowEdit: 'Zezwól użytkownikowi na edycję', // Allow User To Edit
	Multivalued: 'Wielowartościowy', // Multivalued
	ShowInProfile: 'Wyświetlaj w Profilu Użytkownika', // Display In User Profile Page
	MultivaluedChangedWarning: 'Uwaga: modyfikacja wielowartościowego atrybutu zmieni wartości niestandardowych atrybutów dla wszystkich ról w systemie.', // Modifying the value of multivalued property of the custom property will cause the value of the custom property of all roles in the system to change, please be careful!

	// Locked  user management
	NoLockedUserTip: 'Brak zablokowanych użtykowników w systemie', // No locked users in the system.

	// Concurrence management
	Ban: 'Zablokuj użytkownika', // Ban User
	IpAddress: 'Adres IP', // IP Address
	BrowserCount: 'Liczba przeglądarek', // BrowserCount
	UserAgent: 'UserAgent', // UserAgent
	loginDate: 'Data logowania', // Login Date
	NoLoginUserTip: 'Brak zalogowanych użytkowników w systemie', // No Logged-in user in the system

	// License
	RegistrationDate: 'Data rejestracji', // Registration Date
	LicenseKey: 'KluczLicencji', // LicenseKey
	ServerGeneratedInfo: 'Informacje Wygenerowane Przez Serwer', // ServerGeneratedInfo
	ExpiryDate: 'Data Wygaśnięcia', // Expiry Date
	LicenseInfo: 'Informacja o Licencji', // License Info
	Register: 'Zarejestruj', // Register
	Deregister: 'Wyrejestruj', // Deregister
	Refresh: 'Odśwież', // Refresh
	ForceOfflineRegister: 'Rejestracja Offline', // Offline Register
	ForceOfflineDeregister: 'Wyrejestrowanie Offline', // Offline Deregister
	ForceOfflineRefresh: 'Odświeżenie Offline', // Offline Refresh
	Summary: 'Podsumowanie', // Summary
	DeregisterConfirm: 'Potwierdź wyrejestrowanie licencji', // Confirm Licence Deregister
	DeregisterConfirmMessage: 'Czy jesteś pewien, że chcesz wyrejestrować licencję "{{license}}"?', // Are you sure you want to deregister license "{{license}}"?
	Succeed: 'Udało się', // Success.
	RefreshConfirm: 'Potwierdź odświeżenie licencji', // Confirm License Refresh
	RefreshConfirmMessage: 'Czy jesteś pewien, że chcesz odświeżyć licencję "{{license}}"?', // Are you sure you want to refresh license "{{license}}"?
	Available: 'Dostępne', // Available
	Included: 'Zawiera', // Included
	Unlimited: 'Nielimitowane', // Unlimited
	NoExpire: 'Nigdy nie wygasa', // Never Expire
	Report: 'Liczba jednoczesnych raportów', // Report concurrence count
	Report_Module: 'Moduł raportu', // Report Module
	Report_Documents: 'Liczba raportów', // Report documents count
	Dashboard: 'Liczba jednoczesnych dashboardów', // Dashboard concurrence count
	Dashboard_Module: 'Moduł dashboardu', // Dashboard Module
	Dashboard_Documents: 'Liczba dashboardów', // Dashboard documents count
	Datasource: 'Liczba źródeł danych', // Datasource count
	YouAreOffline: 'Nie można połączyć się do sieci, jesteś w trybie offline. Prosimy o kontakt', // Could not connect to net, you are in offline mode, pleaset contact us.
	OfflineLicenseString: 'Klucz licencji offline', // Offline license string:
	OfflineRegisterLineUS1: 'Wyn Server nie może połączyć się z Internetem. Aby zarejestrować licencję w trybie offline, postępuj według poniższych wskazówek:', // Wyn Server could not connect to internet.To register license in offline mode follow the below steps:
	OfflineRegisterLineUS2_1: '1. Otwórz rejestrację licencji offline', // 1. Open our offline license registration
	OfflineRegisterLineUS2_2: 'strona', // page
	OfflineRegisterLineUS2_3: ' na urządzeniu z dostępem do Internetu i użyj klucz licencji offline wyświetlany powyżej, aby wygenerować klucz rejestracji licencji z serwera.', //  on a machine with internet access and use the offline license string displayed above to generate a licence registration string from server.
	OfflineRegisterLineUS3: '2. Wklej klucz wygenerowany w poprzednim kroku w polu InformacjeWygenerowanePrzezSerwer i kliknij przycisk Zarejestruj', // 2. Paste the string generated from previous step in ServerGeneratedInfo field and click Register button.

	OfflineRefreshLineUS1: 'Wyn Server nie może połączyć się z Internetem. Aby odświeżyć licencję w trybie offline, postępuj według poniższych wskazówek:', // Wyn Server could not connect to internet.To refresh license in offline mode follow the below steps:
	OfflineRefreshLineUS2_1: '1. Otwórz odświeżanie licencji offline', // 1. Open our offline license refresh
	OfflineRefreshLineUS2_2: 'strona', // page
	OfflineRefreshLineUS2_3: ' na urządzeniu z dostępem do Internetu i użyj klucz licencji offline wyświetlany powyżej, aby wygenerować klucz odświeżania licencji z serwera.', //  on a machine with internet access and use the offline license string displayed above to generate a licence refresh string from server.
	OfflineRefreshLineUS3: '2. Wklej klucz wygenerowany w poprzednim kroku w polu InformacjeWygenerowanePrzezSerwer i kliknij przycisk Odśwież', // 2. Paste the string generated from previous step in ServerGeneratedInfo field and click refresh button.

	OfflineDeregisterLineUS1: 'Wyn Server nie może połączyć się z Internetem. Aby wyrejestrować licencję w trybie offline, postępuj według poniższych wskazówek:', // Wyn Server could not connect to internet.To deregister license in offline mode follow the below steps:
	OfflineDeregisterLineUS2_1: '1. Otwórz wyrejestrowywanie licencji offline', // 1. Open our offline license deactivation
	OfflineDeregisterLineUS2_2: 'strona', // page
	OfflineDeregisterLineUS2_3: ' na urządzeniu z dostępem do Internetu i użyj klucz licencji offline wyświetlany powyżej, aby wygenerować klucz wyrejestrowywania licencji z serwera.', //  on a machine with internet access and use the offline license string displayed above to deregister the licence.
	OfflineDeregisterLineUS3: '2. Kliknij przycisk zamknij, kiedy licencja zostanie poprawnie wyrejestrowana.', // 2. Click Close button when license is deactivated successfully.

	NoLicenseTip: 'Obecnie nie ma licencji. Kliknij w lewym, górnym rogu.', // The current environment has no product license,click on the top left corner
	NoLicenseTipTrialInfo: 'Wersja próbna produktu wygaśnie {{expireDate}}. Kliknij', // The product trial will expire on {{expireDate}}. Click
	NoLicenseTipTrialExpireInfo: 'Wersja próbna produktu wygasła {{expireDate}}. Kliknij', // The product trial has expired on {{expireDate}}. Click
	NoLicenseTipTrialInfoSuffix: 'aby aktywować pełną licencję', // to activate a full license.
	CouldNotRegisterTip: 'Klucz licencji jest już zarejestrowany. Wyrejestruj istniejący klucz, aby zarejestrować nowy.', // Licence key is already registered. Please deregister the existing key to register a new key
	KeyType: 'Typ klucza', // Key Type
	KeyTypeTrial: 'Próbny', // Trial
	KeyTypePerpetual: 'Wieczny', // Perpetual
	KeyTypeAnnual: 'Roczny', // Annual
	ExpiredSuffix: '(wygasł)', // (Expired)
	VersionExpiredSuffix: '(Version not matched))',

	// System configurations
	UserMapping: 'Mapowanie użytkowników', // User Mapping
	AddProvider: 'Dodaj dostawcę', // Add Provider
	ProviderName: 'Nazwa dostawcy', // Provider Name
	Description: 'Opis', // Description
	AddSecurityProvider: 'Dodaj dostawcę zabezpieczeń', // Add Security Provider
	RemoveSecurityProvider: 'Usuń dostawcę zabezpieczeń', // Remove Security Provider
	RemoveSecurityProviderConfirm: 'Czy chcesz usunąć dostawcę zabezpieczeń "{{provider}}"?', // Do you want to remove security provider "{{provider}}"?
	MappingByEmail: 'Mapuj użytkowników przy użyciu adresu email', // Mapping Users By Email
	MappingByMobile: 'Mapuj użytkowników przy użyciu numeru telefonu komórkowego', // Mapping Users By Mobile Number
	Confirm: 'Potwierdź', // Confirm
	MappingByEmailConfirm: 'Czy chcesz zmapować wszystkich zewnętrznych użytkowników do użytkowników wbudowanych przy użyciu adresu email?', // Do you want to mapping all the external users to built-in users by the user's email?
	MappingByMobileConfirm: 'Czy chcesz zmapować wszystkich zewnętrznych użytkowników do użytkowników wbudowanych przy użyciu numeru telefonu komórkowego?', // Do you want to mapping all the external users to built-in users by the user's mobile number?
	ConfirmDoIt: 'Potwierdzić?', // Confirm do it?
	ExternalUserId: 'ID użytkownika zewnętrznego', // External User Id
	ExternalUserName: 'Nazwa użytkownika zewnętrznego', // External User Name
	InnerUserName: 'Nazwa użytkownika wewnętrznego', // Inner User Name
	ExternalUserEmail: 'Email użytkownika zewnętrznego', // External User Email
	ExternalUserMobile: 'Numer telefonu komórkowego użytkownika zewnętrznego', // External User Mobile

	// Client Management
	AllowedGrantTypes: 'Dozwolone typy uprawnień', // Allowed Grant Types
	AllowedScopes: 'Dozwolone zakresy', // Allowed Scopes
	AllowedUris: 'Dozwolone URI', // Allowed Uris
	AccessTokenLifetime: 'Żywotność tokenu dostępu', // Access Token Lifetime

	// Security Providers and External Providers
	'account_provider_local': 'Wbudowany dostawca kont', // Built-In Account Provider
	'account_provider_local_description': 'Wbudowany system zarządzania kontami dostarczany przez lokalną usługę tożsamości.', // The built-in account management system provided by local identity service.
	'account_provider_WeChat4Work': 'Enterprise WeChat', // Enterprise WeChat
	'account_provider_WeChat4Work_description': 'System zarządzania kontami dostarczany przez Enterprise WeChat.', // The account management system provided by enterprise wechat.
	'account_provider_AD Security Provider': 'Active Directory', //
	'account_provider_AD Security Provider_description': 'Dostawca zabezpieczeń Active Directory.', // Active directory security provider
	'account_provider_DingTalk': 'DingTalk',
	'account_provider_DingTalk_description': 'System zarządzania kontami dostarczany przez DingTalk', // The account management system provided by DingTalk

	NoSecurityProviderTip: 'Aktualnie używasz trybu wbudowanego konta do logowania.', // You are currently using the built-in account mode for login
	NoExternalProviderTip: 'Obecnie nie ma żadnego zewnętrznego dostawcy', // Enterprise users are not added currently -- po zmiennej i tym co powyżej wnioskuje
	NoAvailableSecurityProvidersTip: 'Brak dostępnych dostawców', // There is no any Providers available

	'ShowPassword': 'Pokaż hasło', // Show password
	'HidePassword': 'Ukryj hasło', // Hide password

	EnableExternalLoginProviderExplainText: 'Aby włączyć zewnętrznego dostawcę logowania, musisz poprawnie wypełnić obowiązkowe pozycje ustawień (gwiazdką), a następnie możesz zsynchronizować dane od zewnętrznego dostawcy logowania i włączyć inne funkcje (takie jak logowanie jednokrotne, skanowanie kodu QR logowanie i automatyczna synchronizacja danych.', // To enable the external login provider, you need to fill in the mandatory setting items(With an asterisk) correctly, then you can synchronize the data from the external login provider and enable the other functions(such as single sign-on, scan QR code login and automatic data synchronization.
	DataSyncingExplainText: 'Funkcja synchronizacji danych zsynchronizuje wszystkie autoryzowane organizacje, role i użytkowników w zewnętrznym dostawcy logowania do Wyn, oryginalne dane zostaną nadpisane, a niektóre znaki specjalne („/”, „\\”, „<”, „>” i „$”) w nazwie organizacji i nazwa roli zostaną usunięte po zsynchronizowaniu danych.', // The data syncing function will synchronize all the authorized organizations, roles and users in the external login provider to Wyn, the original data will be overwritten and some special characters('/', '\\', '<', '>' and '$') in the organization name and the role name will be removed after the data synchronized.
	DataSyncingFailsExplainText: 'Uwagi: Synchronizacja danych nie powiedzie się, jeśli na tym samym poziomie struktury organizacyjnej istnieją zduplikowane nazwy użytkowników, zduplikowane nazwy ról lub zduplikowane nazwy organizacji.', // Notes: The data syncing will fail if there are duplicated user names, duplicated role names, or duplicated organization names at the same level of the organization structure.

	SyncData: 'Synchronizuj dane', // Sync Data
	SyncingData: 'Synchronizuję dane...', // Syncing Data...
	SyncDataSuccessTitle: 'Dane zsynchronizowane pomyślnie.', // Data synchronized successfully.
	SyncDataSuccess: 'Dane zewnętrznego dostawcy logowania zostały pomyślnie zsynchronizowane.', // External login provider's data synchronized successfully.
	SyncDataDesc: 'Oryginalne dane zostaną nadpisane, a znaki specjalne („/”, „\\”, „<”, „>” i „$”) z nazwy organizacji i roli zostaną usunięte po zsynchronizowaniu danych.', // The original data will be overwritten, and the special characters('/', '\\', '<', '>' and '$') in the organization name and the role name will be removed after the data synchronized.

	SPTestDefaultResult: 'Brak wyniku testu.', // No test result.
	SPTestSuccessResult: 'Test logowania powiódł się.', // Login test successful.
	SPTestFailResult: 'Test logowania nie powiódł się.', // Login test failed.
	LoginTest: 'Test logowania', // Login Test
	UserId: 'Id użytkownika', // User Id
	UserName: 'Nazwa użytkownika', // User Name
	UserContext: 'Kontekst użytkownika', // User Context
	Exception: 'Wyjątek', // Exception
	ErrorMessage: 'Komunikat o błędzie', // Error Message
	SPShowDetail: 'Pokaż szczegóły', // Show Details
	SPHideDetail: 'Ukryj szczegóły', // Hide Details
	Password: 'Hasło', // Password
	Test: 'Test', // Test
	Testing: 'Testowanie', // Testing
	CustomParam: 'Custom Parameter',
	CustomParamDescribe: 'The custom parameter is made up of some key-value pairs, one key-value pair per line, and the key and value split by ":".',

	'setting_item_name!ad security provider!server url': 'Server URL',
	'setting_item_desc!ad security provider!server url': 'Server URL',
	'setting_item_name!ad security provider!admin user': 'Admin User',
	'setting_item_desc!ad security provider!admin user': 'Admin User',
	'setting_item_name!ad security provider!admin password': 'Admin Password',
	'setting_item_desc!ad security provider!admin password': 'Admin Password',
	'setting_item_name!ad security provider!admin groups': 'Admin Groups',
	'setting_item_desc!ad security provider!admin groups': 'Admin Groups',
	'setting_item_name!ad security provider!use ssl/tls': 'Use SSL/TLS',
	'setting_item_desc!ad security provider!use ssl/tls': 'Use SSL/TLS',
	'setting_item_name!ad security provider!user context': 'User Context',
	'setting_item_desc!ad security provider!user context': 'User Context',

	'setting_item_name!open ldap security provider!server url': 'Server URL',
	'setting_item_desc!open ldap security provider!server url': 'Server URL',
	'setting_item_desc!open ldap security provider!admin user': 'Admin User',
	'setting_item_name!open ldap security provider!admin user': 'Admin User',
	'setting_item_desc!open ldap security provider!admin password': 'Admin Password',
	'setting_item_name!open ldap security provider!admin password': 'Admin Password',
	'setting_item_desc!open ldap security provider!admin groups': 'Admin Groups',
	'setting_item_name!open ldap security provider!admin groups': 'Admin Groups',
	'setting_item_desc!open ldap security provider!user name': 'User Name',
	'setting_item_name!open ldap security provider!user name': 'User Name',
	'setting_item_desc!open ldap security provider!user display name': 'User Display Name',
	'setting_item_name!open ldap security provider!user display name': 'User Display Name',
	'setting_item_desc!open ldap security provider!use member chain rule group search': 'Use member chain rule group search',
	'setting_item_name!open ldap security provider!use member chain rule group search': 'Use member chain rule group search',
	'setting_item_desc!open ldap security provider!use ssl/tls': 'Use SSL/TLS',
	'setting_item_name!open ldap security provider!use ssl/tls': 'Use SSL/TLS',
	'setting_item_desc!open ldap security provider!user context': 'User Context',
	'setting_item_name!open ldap security provider!user context': 'User Context',

	'setting_item_name!dingtalk!corpid': 'CorpId',
	'setting_item_desc!dingtalk!corpid': 'CorpId',
	'setting_item_name!dingtalk!appkey': 'AppKey',
	'setting_item_desc!dingtalk!appkey': 'AppKey',
	'setting_item_name!dingtalk!appsecret': 'AppSecret',
	'setting_item_desc!dingtalk!appsecret': 'AppSecret',
	'setting_item_name!dingtalk!agentid': 'AgentId',
	'setting_item_desc!dingtalk!agentid': 'AgentId',
	'setting_item_name!dingtalk!maxconcurrentrequests': 'Max Concurrent Requests',
	'setting_item_desc!dingtalk!maxconcurrentrequests': 'Allowed max number of the concurrent requests when syncing data',
	'setting_item_name!dingtalk!qrcodeappid': 'ScanCodeAppId',
	'setting_item_desc!dingtalk!qrcodeappid': 'The id of the scanning code login application',
	'setting_item_name!dingtalk!qrcodeappsecret': 'ScanCodeAppSecret',
	'setting_item_desc!dingtalk!qrcodeappsecret': 'The secret of the scanning code login application',
	'setting_item_name!dingtalk!enableqrcodelogin': 'EnableScanCodeLogin',
	'setting_item_desc!dingtalk!enableqrcodelogin': 'Enable logging in by scanning QR code',
	'setting_item_name!dingtalk!enablesendingmessage': 'EnableSendingMessage',
	'setting_item_desc!dingtalk!enablesendingmessage': 'Enable sending messages to DingDing',
	'setting_item_name!dingtalk!enableautomaticsynchronization': 'EnableAutomaticSynchronization',
	'setting_item_desc!dingtalk!enableautomaticsynchronization': 'Enable automatically synchronize the data of DingDing',
	'setting_item_name!dingtalk!automaticsynchronizationinterval': 'AutomaticSynchronizationInterval',
	'setting_item_desc!dingtalk!automaticsynchronizationinterval': 'The interval of the automatic data synchronization, in hours, the valid minimum value is 1 hour',

	'setting_item_name!wechat4work!corpid': 'CorpId',
	'setting_item_desc!wechat4work!corpid': 'CorpId',
	'setting_item_name!wechat4work!secret': 'Secret',
	'setting_item_desc!wechat4work!secret': 'Secret',
	'setting_item_name!wechat4work!agentid': 'AgentId',
	'setting_item_desc!wechat4work!agentid': 'AgentId',
	'setting_item_name!wechat4work!maxconcurrentrequests': 'Max Concurrent Requests',
	'setting_item_desc!wechat4work!maxconcurrentrequests': 'Allowed max number of the concurrent requests when syncing data',
	'setting_item_name!wechat4work!enableqrcodelogin': 'EnableScanCodeLogin',
	'setting_item_desc!wechat4work!enableqrcodelogin': 'Enable logging in by scanning QR code',
	'setting_item_name!wechat4work!enablesendingmessage': 'EnableSendingMessage',
	'setting_item_desc!wechat4work!enablesendingmessage': 'Enable sending messages to Enterprise WeChat',
	'setting_item_name!wechat4work!enableautomaticsynchronization': 'EnableAutomaticSynchronization',
	'setting_item_desc!wechat4work!enableautomaticsynchronization': 'Enable automatically synchronize the data of Enterprise WeChat',
	'setting_item_name!wechat4work!automaticsynchronizationinterval': 'AutomaticSynchronizationInterval',
	'setting_item_desc!wechat4work!automaticsynchronizationinterval': 'The interval of the automatic data synchronization, in hours, the valid minimum value is 1 hour',

	// Security Settings
	EnableStrongPasswordPolicy: 'Włącz zasadę silnego hasła', // Enable strong password policy
	EnableStrongPasswordPolicyDescription: 'Hasło musi zawierać: \n    \u2022 1 dużą literę\n    \u2022 1 małą literę\n    \u2022 1 liczbę\n    \u2022 Długość pomiędzy 8-32 znaków\nDomyślne zasady haseł określają jedynie długość, która musi wynosić pomiędzy 1 - 32 znaków i może zawierać dowolny znak.', // The password must contain the following: \n    \u2022 1 uppercase letter\n    \u2022 1 lowercase letter\n    \u2022 1 number\n    \u2022 Length between 8-32 characters\nThe default password policy only requires that the password length be between 1 - 32 characters, and can contain any character.
	UserLockedTime: 'Czask zablokowania użytkownika (minuty)', // User locked time (minutes)
	UserLockedTimeDescription: 'Kiedy użytkownik wprowadzi złe hasło więcej niż 5 razy z rzędu, zostanie zablokowany. Gdy użytkownik jest zablokowany, nie może się zalogować - nawet przy użyciu poprawnego hasła. Możesz zmienić czas zablokowania na dowolną liczbę minut, lub ustawić na 0, aby nie korzystać z blokowania.', // When a user enters the wrong password more than 5 times consecutively, that user will be locked out. During the locked time, the user cannot login, even with the correct password. You can change the locked time to a different value, or set it to 0 to disable the lock behavior.
	AllowUserResetPassword: 'Zezwól użytkownikowi na reset hasła', // Allow user reset password
	AllowUserResetPasswordDescription: 'Włącz tę opcję, aby zezwolić użytkownikowi na reset hasła', // Enable this option allow user to reset his/her password.

	// Claim Mappings
	ClaimName: 'Nazwa poświadczenia', // Claim Name
	UserPropName: 'Nazwa atrybutu użytkownika', // User Property Name
	AddClaim: 'Dodaj poświadczenie', // Add Claim
	DeleteClaim: 'Usuń poświadczenie', // Delete Claim
	DeleteClaimConfirmMessage: "Czy chcesz usunąć kontekst użytkownika '{{claim}}'?", // Do you want to delete user context '{{claim}}'?
	Create: 'Utwórz', // Create

	// Identity Server User Controller Error Code Range 1000 ~ 2000
	error_1001: 'Nieprawidłowy RozmiarStrony lu NumerStrony', // Invalid PageSize or PageNumber
	error_1002: 'Nazwa użytkownika nie może być pusta', // User name can not be empty.
	error_1003: 'Email użytkownika nie może być pusty', // User email can not be empty.
	error_1004: 'Hasło powinno zawierać co najmniej 1 dużą literę, 1 małą literą, 1 liczbę, a długość powinna wnosić pomiędzy 8 a 32 znaków.', // The password should contain at least 1 uppercase letter, 1 lowercase letter and 1 number, and the length should be between 8 and 32.
	error_1005: 'Nazwa użytkownika już istnieje', // User name already exists.
	error_1006: 'Email użytkownika już istnieje', // User email already exists.
	error_1007: 'Rola \'{{role}}\' nie istnieje.', // Role \'{{role}}\' does not exist.'
	error_1008: 'Nieprawidłowy parametr', // Invalid parameter.
	error_1009: 'Nie znaleziono użytkownika', // User not found.
	error_1010: 'Użytkownik już istnieje', // User already exists.
	error_1011: 'Nie znaleziono rozszerzonego atrybutu \'{{prop}}\'.', // Extend property \'{{prop}}\' not found.
	error_1012: 'Wartość \'{{value}}\' jest nieprawidłowa dla rozszerzonego atrybutu \'{{prop}}\'.', // Value \'{{value}}\' is invalid for extend property \'{{prop}}\'.
	error_1013: 'Nie udało się zapisać danych w bazie danych', // Save data to database failed.
	error_1014: 'Nazwa użytkownika nie może zostać zmieniona', // User name can not be modified.
	error_1015: 'Nie znaleziono pliku', // No file found.
	error_1016: 'Nie znaleziono widocznego arkusza', // No visible spread sheet found.
	error_1017: 'Nieprawidłowy format szablonu użytkownika', // Invalid user template format.
	error_1018: 'Nie znaleziono użytkownika', // No user found.
	error_1019: 'Zablokowany użytkownik o ID \'{{id}}\' nie istnieje.', // Locked user with id \'{{id}}\' does not exist.
	error_1020: 'Nieprawidłowe hasło', // Invalid password.
	error_1021: 'Nieprawidłowy token zabezpieczeń', // Invalid security token.
	error_1022: 'Zakazany adres IP', // Forbidden ip address.
	error_1023: 'Język nie jest obsługiwany', // Language is not supported.
	error_1024: 'Numer telefonu komórkowego nie może być pusty', // User mobile number can not be empty.
	error_1025: 'Nieprawidłowy adres email', // Invalid email address.

	// Import users error
	error_1100: "Wiersz [{{rowIndex}}]: ID użytkownika '{{userId}}' już istnieje.", // Row [{{rowIndex}}]: User id '{{userId}}' already exists.
	error_1101: 'Wiersz [{{rowIndex}}]: Nazwa użytkownika nie może być pusta.', // Row [{{rowIndex}}]: User name can not be empty.
	error_1102: "Wiersz [{{rowIndex}}]: Nazwa użytkownika '{{userName}}' już istnieje.", // Row [{{rowIndex}}]: User name '{{userName}}' already exists.
	error_1103: 'Wiersz [{{rowIndex}}]: Email użytkownika nie może być piusty.', // Row [{{rowIndex}}]: User email can not be empty.
	error_1104: "Wiersz [{{rowIndex}}]: Email użytkownika '{{userEmail}}' już istnieje.", // Row [{{rowIndex}}]: User email '{{userEmail}}' already exists.
	error_1105: "Wiersz [{{rowIndex}}]: Numer telefonu komórkowego '{{userMobile}}' już istnieje.", // Row [{{rowIndex}}]: User mobile '{{userMobile}}' already exists.
	error_1106: 'Wiersz [{{rowIndex}}]: Hasło użtykownika nie może być puste.', // Row [{{rowIndex}}]: User password can not be empty.
	error_1107: 'Wiersz [{{rowIndex}}]: Nieprawidłowy format hasła. Hasło powinno zawierać co najmniej 1 dużą literę, 1 małą literą, 1 liczbę, a długość powinna wnosić pomiędzy 8 a 32 znaków.', // Row [{{rowIndex}}]: Invalid password format. The password should contain at least 1 uppercase letter, 1 lowercase letter and 1 number, and the length should be between 8 and 32.
	error_1108: "Wiersz [{{rowIndex}}]: Nieprawidłowy czas utworzenia '{{creationTime}}'.", // Row [{{rowIndex}}]: Invalid creation time '{{creationTime}}'.
	error_1109: "Wiersz [{{rowIndex}}]: Nieprawidłowa wartość '{{value}}' dla pola 'enabled'.", // Row [{{rowIndex}}]: Invalid value '{{value}}' for field 'enabled'.
	error_1110: "Wiersz [{{rowIndex}}]: Rola '{{role}}' nie istnieje.", // Row [{{rowIndex}}]: Role '{{role}}' does not exist.
	error_1111: "Wiersz [{{rowIndex}}]: Nieprawidłowy adres email '{{userEmail}}'.", // Row [{{rowIndex}}]: Invalid email address '{{userEmail}}'.

	// Identity Server Role Controller Error Code Range 2001 ~ 2999
	error_2001: 'Rola \'{{name}}\' już istnieje.', // Role \'{{name}}\' already exists.
	error_2002: 'Nazwa roli nie może być taka sama jak nazwa uprawnienia.', // Role name can not conflict with permission name
	error_2003: 'Nie można usunąć wbudowanej roli.', // Built-in role can not be deleted
	error_2004: "Nie można aktualizować członków roli 'wszyscy'.", // Can not update the members of role 'everyone'.
	error_2005: "Nie można usunąć członka 'admin' z roli 'administrator'.", // Can not remove member 'admin' from role 'administrator'.
	error_2006: "Nie można zmienić uprawnień roli 'administrator'.", // Can not modify the permissions of role 'administrator'.
	// Identity Server Claim Mapping Errors
	error_3001: "Kontekst użytkownika '{{claimName}}' już istnieją.", // User context '{{claimName}}' already exists.
	error_3002: "Kontekst użytkownika o ID '{{claimId}}' nie istnieją.", // User context with id '{{claimId}}' does not exist.
	error_3003: "Niestandardowy atrybut '{{propName}}' nie istnieje.", // Customize property '{{propName}}' does not exist.
	error_3004: 'Wbudowany kontekst użytkownika nie mogą być zmienione.', // Built-in user context can not be modified.
	error_3005: 'Wbudowany kontekst użytkownika nie mogą zostać usunięte.', // Built-in user context can not be deleted.
	error_3006: "Nieprawidłowa nazwa kontekstu użytkownika. Długość nazwy mapowania poświadczeń powinna być pomiędzy 1 a 64 i nie może zawierać '<', '>', '/', '\\', '$' i niektórych nieprawidłowych słów kluczowych.", // Invalid claim mapping name. The length of the claim mapping name should be between 1 and 64, and the name can not contains '<', '>', '/', '\\', '$' and some invalid keywords.
	// Identity Server Custom Property Errors
	error_4001: "Niestandardowy atrybut '{{propName}}' już istnieje.", // Custom property '{{propName}}' already exists.
	error_4002: "Niestandardowy atrybut '{{propName}}' nie istnieje.", // Custom property '{{propName}}' does not exist.
	error_4003: "Niestandardowy atrybut o ID '{{propId}}' nie istnieje.", // Custom property with id '{{propId}}' does not exist.
	error_4004: "Nieprawidłowa nazwa niestandardowego atrybutu. Długość nazwy powinna być pomiędzy 1 a 64 i nie może zawierać '<', '>', '/', '\\', '$' i niektórych nieprawidłowych słów kluczowych.", // Invalid customize property name. The length of customize property name should be between 1 and 64, and the name can not contains '<', '>', '/', '\\', '$' and some invalid keywords.
	// Identity Server Tenant Errors
	error_5001: 'Nazwa tenanta nie może być pusta.', // Tenant name can not be empty.
	error_5002: "Tenant '{{tenantName}}' już istnieje.", // Tenant '{{tenantName}}' already exists.
	error_5003: 'Nazwa atrybutu tenanta nie może być pusta.', // Tenant property name can not be empty.
	error_5004: "Atrybut tenanta '{{tenantPropName}}' already exists.", // Tenant property '{{tenantPropName}}' already exists.
	error_5005: "Atrybut tenanta '{{tenantPropName}}' jest zarezerwowana.", // Tenant property '{{tenantPropName}}' is reserved.
	error_5006: "Tenant z emaila '{{fromEmail}}' już istnieje.", // Tenant from email '{{fromEmail}}' already exists.
	// External Login Provider Errors
	error_6001: "The external login provider '{{providerName}}' does not exist.",
	error_6002: "The sending message function is disabled for the external login provider '{{providerName}}'.",
	error_6003: "Sending message to external login provider '{{providerName}}' failed, error code: {{errCode}}, error message: {{errMsg}}.",
	error_6004: "No valid message recipients found.",
	error_6005: "Duplicated user name '{{userName}}' detected.",
	error_6006: "Duplicated role name '{{roleName}}' detected.",
	error_6007: "Duplicated organization name '{{organizationName}}' detected.",
	error_6008: "Syncing data failed, the original error is: {{errMsg}}",
	// Security Provider Errors
	error_7001: "Dostawca zabezpieczeń „{{providerName}}” nie jest włączony.", // The security provider '{{providerName}}' is not enabled.
	error_7002: "Załadowanie dostawcy zabezpieczeń „{{providerName}}” nie powiodło się.", // Load security provider '{{providerName}}' failed.
	error_7003: 'Nieprawidłowa nazwa użytkownika lub hasło.', // Invalid user name or password.
	error_7004: 'Wymagana jest nazwa użytkownika i hasło.', // User name and password are required.
	error_7005: 'Podano nieprawidłowy parametr.', // Invalid parameter was passed.
	error_7006: 'Logowanie z dostawcą zabezpieczeń nie powiodło się.', // Login with the security provider failed.

	// LicenseActiveResult
	LicenseOprateResultCode_: '',
	LicenseOprateResultCode_1000: 'Nieznany błąd', // Unknown Error
	LicenseOprateResultCode_1001: 'Klucz jest nieprawidłowy.', // Key is invalid.
	LicenseOprateResultCode_2000: 'Nie udało się aktywować.', // Activation failed.
	LicenseOprateResultCode_2001: 'Klucz jest zablokowany.', // Key is disabled.
	LicenseOprateResultCode_2002: 'Niepoprawny typ klucza.', // Key type incorrect.
	LicenseOprateResultCode_2003: 'Maksymalna liczba aktywacji przekroczona.', // Exceeds the maxinum activation count
	LicenseOprateResultCode_2004: 'licencja jest już aktywowana', // license is already activated
	LicenseOprateResultCode_2005: 'Wersja klucza nie pasuje do aktualnej wersji.', // Key's version did not match current version.
	LicenseOprateResultCode_2006: 'Pusty klucz', // Empty Key
	LicenseOprateResultCode_2007: 'Zawartość licencji jest nieprawidłowa.', // License content is not valid.
	LicenseOprateResultCode_3000: 'Nie udało się wyrejestrować', // Deactivation Failed
	LicenseOprateResultCode_3001: 'Nie można wyrejestrować licencji próbnej', // Trial license cannot be deactived
	LicenseOprateResultCode_3002: 'Informacje aktywacji nie pasują.', // Activation info not matched.
	LicenseOprateResultCode_3011: 'Informacje wyerejestrowania nie pasują do tokena', // Deactive info not match Token
	LicenseOprateResultCode_3012: 'Informacje wyerejestrowania nie pasują do urządzenia', // Deactive info not match machine
	LicenseOprateResultCode_3013: 'Informacje wyerejestrowania nie pasują do computerId', // Deactive info not match computerId
};

export const portalPL = {
	'shortcut-org!description': '',
	'shortcut-org!props!text': 'Organizacje', // Organizations
	'shortcut-org!title': 'Skrót Ogranizacji', // Organizations Shortcut
	'shortcut-user!description': '',
	'shortcut-user!props!text': 'Użytkownicy', // Users
	'shortcut-user!title': 'Skrót do użytkowników', // Users Shortcut
	'shortcut-role!description': '',
	'shortcut-role!props!text': 'ról', // Roles
	'shortcut-role!title': 'Skrót do ról', // Roles Shortcut
	'shortcut-locked!description': '',
	'shortcut-locked!props!text': 'Zablokowani', // Locked
	'shortcut-locked!title': 'Skrót do zablokowanych', // Locked Shortcut
	'shortcut-license!description': '',
	'shortcut-license!props!text': 'Licencja', // License
	'shortcut-license!title': 'Skrót do licencji', // License Shortcut
	'account-management-generate-token!title': 'Wygeneruj token', // Generate Token
	'account-management-generate-token!description': 'Wygeneruj token', // Generate Token
};

export const cgridPL = {
	cgridMore: 'Więcej' // More
};