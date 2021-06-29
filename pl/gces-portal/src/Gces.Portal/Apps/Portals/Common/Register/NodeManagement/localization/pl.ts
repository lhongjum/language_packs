export const portalPL: LanguageKeyValueMap = {
	'nodeManagement!title': 'Node management', // Node Management
	'nodeManagement!description': 'Node management', // Node Management
	nodes: 'Węzły', // Nodes
	globalSettings: 'Ogólne ustawienia', // Global Settings
	getNodeFailed: 'Pobieranie węzłów nie powiodło się', // Get Nodes Failed
	addNode: 'Dodaj węzeł', // Add Node
	removeNode: 'Usuń', // Delete
	'removeNode!title': 'Usuń węzeł', // Delete Node
	'removeNode!description': 'Czy chcesz usunąć obecny węzeł?', // Do you want delete the current node?
	nodeName: 'Nazwa węzła', // Node Name
	nodeDescription: 'Opis', // Description
	nodeStatus: 'Status węzła', // Node Status
	up: 'Online', // Online
	down: 'Offline', // Offline
	nodeHost: 'Host', // Host
	nodePort: 'Port', // Port
	nodeType: 'Typ węzła', // Node Type
	'nodeType!primary': 'Węzeł podstawowy', // Primary Node
	'nodeType!secondary': 'Węzeł drugorzędny', // Secondary Node
	'nodeType!client': 'Client Node', // Client Node
	downloadUrl: 'Pobierz adres URL', // Download URL
	download: 'Pobierz', // Download
	copy: 'Kopiuj', // Copy
	token: 'Token', // Token
	error_valueNotBeEmpty: 'Wartość nie może być pusta', // Value should not be empty.
	error_HostIsInvalid: 'Niepoprawny IP', // Invalid IP
	error_PortIsInvalid: 'Niepoprawny port', // Invalid Port
	error_InvalidUrl: 'Niepoprawny URL', // Invalid URL
	nodeBasicInfo: 'Podstawowe miejsce', // Basic Information
	nodeSettings: 'Ustawienia', // Settings
	installHelpTitle: 'Jak zainstalować?', // How to install?
	save: 'Zapisz', // Save
	cancel: 'Anuluj', // Cancel,
	'yes': 'Tak', // Yes
	'close': 'Zamknij', // Close
	serviceName: 'Nazwa serwisu', // Service Name
	serviceVersion: 'Wersja', // Wersja
	serviceStatus: 'Status', // Status
	serviceInfos: 'Informacje serwisowe', // Service Information
	'serviceName_worker': 'Report Worker',
	'serviceName_cotworker': 'Cot Worker',
	'serviceName_dashboardworker': 'Dashboard Worker',
	'serviceStatus_starting': 'W trakcie', // Running
	'serviceStatus_running': 'W trakcie', // Running
	'serviceStatus_stopped': 'Zatrzymany', // Stopped
	'serviceStatus_notinstalled': 'Nie zainstalowany', // Not Installed
	'serviceStatus_uninstall': 'Odinstaluj', // uninstall
	'runCommandLine': 'Uruchom wiersz poleceń jako administrator:', // Run command line as administrator:
	'step1!description1': 'Krok 1: Pobierz i zainstaluj', // Step 1: Download and install
	'step1!description2': '.NET Core Runtime',
	'step1!description3': '(Recommend version 3.1.7)',
	'step2!description1': 'Krok 2: Kliknij i pobierz', // Step 2: Click and Download
	'step2!description2': 'binary zip',
	'step2!description3': 'file.',
	'step3!description': 'Krok 3: Uruchom skrypt Shell.', // Step 3: Execute shell script.
	stop: 'Stop',
	start: 'Start',
	install: 'Instaluj', // Install
	uninstall: 'Odinstaluj', // Uninstall
	identityUrl: 'Tożsamość serwera URL', // Identity Server URL
	logLevel: 'Log Level',
	primaryNodeHost: 'Primary Node Host', // Primary Node Host
	primaryNodePort: 'Primary Node Port', // 'Primary Node Port',
	success: 'Sukces', // Success
	failed: 'Niepowiedzenie', // Failed
	warning: 'Ostrzeżenie', // Warning
	Name_Had_Be_Existed: 'Nazwa już wykorzystana.', // Name existed.
	Member_Is_Not_Found: 'Węzeł jest wyłączony', // Node is offline.
	Request_Sent_Successfully: 'Żądanie wysłane pomyślnie.', // Request sent successfully.
	Start_Service_Failed: 'Uruchomienie usługi nie powiodło się.', // Start service failed.
	Stop_Service_Failed: 'Zatrzymanie usługi nie powiodło się.', // Stop service failed.
	Install_Service_Failed: 'Instalacja usługi nie powiodła się.', // Install service failed.
	Uninstall_Service_Failed: 'Nie udało się odinstalować usługi.', // Uninstall service failed.
	Operation_Is_Not_Supported: 'Nieprawidłowa operacja dla bieżącego węzła.', // Invalid operation for current node.
	Invalid_Secret_Key: 'Nieprawidłowy tajny klucz.', // Invalid secret key.
	Save_Success: 'Zapisano pomyślnie ', // Save successfully
	Cant_Get_Data_From_Primary: 'Nie można pobrać danych z węzła podstawowego. Upewnij się, że główny węzeł jest uruchomiony', // Can not get data from the primary node. Please make sure the primary node is alive.
	primaryNodeNotInited: 'Węzeł dodatkowy nie może połączyć się z węzłem nadrzędnym z jednego z następujących powodów: \n1. Host twojego węzła podstawowego nie powinien nasłuchiwać na \'127.0.0.1\' lub \'localhost\'. \N2. Adres URL tożsamości nie jest publiczny. Nie powinno nasłuchiwać na \'127.0.0.1\' lub \'localhost\'.', // The secondary node can not connect to primacy node due to one of the following reasons: \n1. The host of your primary node should be not listening on \'127.0.0.1\' or \'localhost\'.\n2. The identity url is not public. It should be not listening on \'127.0.0.1\' or \'localhost\'.
	settings_changed: 'Zapisz ustawienia', // Save Settings
	'settings_changed!description1': 'Chcesz zapisać swoje zmiany? Wszystkie usługi w bieżącym węźle zostaną zrestartowane.', // Do you want save your changes? All services in the current node will be restarted.
	'settings_changed!description2': 'Chcesz zapisać swoje zmiany? Wszystkie usługi we wszystkich węzłach zostaną zrestartowane.', // Do you want save your changes? All services in the all nodes will be restarted.

	Error_Node_50000: 'Adres IP węzła podstawowego jest niedostępny.', // The primary node IP is unavailable.
};
