export const portalResourcePL: LanguageKeyValueMap = {
	'shortcut-categories!description': '',
	'shortcut-categories!props!text': 'Kategorie', // Categories
	'shortcut-categories!title': 'Skrót do kategorii', // Categories Shortcut
	'geojson-storge-management!title': 'GeoJson', // GeoJson
	'geojson-storge-management!description': 'GeoJson Storage Management', // GeoJson Storge Management
	'shortcut-themes!description': '',
	'shortcut-themes!props!text': 'Motywy', // Themes
	'shortcut-themes!title': 'Skrót do motywów', // Themes Shortcut
	'shortcut-image!description': ' ',
	'shortcut-image!props!text': 'Obrazy', // Images
	'shortcut-image!title': 'Skrót do obrazów', // Images Shortcut
	'rename-geo!name': 'Zmień nazwę dokumentu', // Rename document
	'rename-geo!description': 'Zmień nazwę dokumentu', // Rename document
};

export const shareResourcePL: LanguageKeyValueMap = {
	// Header
	headerItemTextUploadNew: 'Załaduj dokument', // Upload Document
	headerItemHeaderAddNew: 'Dodaj nowy...', // Add new...
	headerItemTextAdminPortal: 'Portal administratora', // Admin Portal
	headerItemTextLogout: 'Wyloguj', // Logout
	repeatName: 'Dokument ({{newName}}) już istnieje.', // Document({{newName}}) already exists.
	renameDocNotFound: 'Nie znaleziono dokumentu (Być może został usunięty. Proszę odświeżyć stronę).', // Document not found(Maybe has been removed. Please refresh the page).
	noRenameDocPermission: 'Brak uprawnień do zmiany nazwy dokumentu', // No permission to rename the document.
	// Upload Dialog
	udTextFiles: '{{count}} plik', // {{count}} file
	udTextFiles_plural: '{{count}} pliki', // {{count}} files

	udTitleUpload: 'Załaduj', // Upload
	udTitleUploading: 'Przesyłanie...', // Uploading...

	udTextStatusNoFiles: 'nie wybrano plików', // no files selected
	udTextStatusInitializing: 'rozpoczynanie...', // initializing...
	udTextStatusInProgress: 'Przesłano {{count}} z {{total}}', // {{count}} of {{total}} uploaded

	udTextStatusReadyToCommitPartial: 'Gotowy, aby zatwierdzić {{countText}} z {{total}}', // Ready to commit {{countText}} out of {{total}}
	udTextStatusReadyToCommit: 'Gotowy, aby zatwierdzić!', // Ready to commit!

	udHeaderInvalid: 'Niepoprawny', // Invalid
	udHeaderUnresolved: 'Nierozwiązany', // Unresolved
	udHeaderAlreadyExists: 'Już istnieje', // Already exist
	udHeaderReadyToCommit: 'Gotowy do zatwierdzenia', // Ready to commit
	udHeaderUploading: 'Przesyłanie', // Uploading

	udBtnTextCommit: 'Zatwierdź', // Commit
	udBtnTextCommitValidOnly: 'Zatwierdź tylko poprawne', // Commit Valid Only
	udBtnTextCancel: 'Anuluj', // Cancel

	udDNDTextDropFiles: 'Przeciągnij i upuść pliki tutaj', // Drag & Drop Files Here
	udDNDTextClickHere: 'lub kliknij tutaj, aby wybrać pliki', // or click here to select files

	// Upload File Item
	ufiTextUploading: 'Ładowanie', // Uploading...
	ufiBtnTitleKeepBoth: 'Zachowaj oba dokumenty', // Keep both documents
	ufiBtnTitleOverwrite: 'Nadpisz dokument', // Overwrite document

	// Upload Saga
	usErrorTextSessionError: 'Błąd podczas ładowania', // Upload session error
	usErrorTextValidationError: 'Błąd sprawdzania poprawności', // Validation Error
	usErrorTextValidationErrorDetails: 'Nie można pobrać statusu sprawdzania poprawności', // We were unable to get validation status. Sorry
	usErrorTextUploadCommitError: 'Błąd zatwierdzania', // Upload Error
	usErrorTextUploadCommitErrorDetails: 'Nie można zatwierdzić', // We were unable to commit. Sorry
	usErrorTextCancelationError: 'Nie można przerwać ładowania tego pliku', // We couldn\'t cancel uploading of this file. Sorry

	// Upload Other
	uoTextUnknownFileType: 'Nieznany typ pliku', // Unknown File Type
	uoTextUnsupportedFileType: 'Nieobsługiwany typ pliku', // Unsupported File Type

	rename: 'Zmień nazwę dokumentu', // Rename Document
	untitled: 'Brak tytułu', // Untitled
	save: 'Zapisz', // Save
	cancel: 'Anuluj', // Cancel
	name: 'Nazwa', // Name
	description: 'Opis', // Description
	OK: 'OK', // OK
	Close: 'Zamknij', // Close
	messageBox: 'Wiadomość', // Message Box
	hierarchyEditorTitle: 'Edytor hierarchii', // Hierarchy Editor
	geoJsonSearchPlaceHolder: 'Szukaj GeoJSON', // search geojson
	noGeoJsonTip: 'Brak GeoJSON, załaduj najpierw GeoJSON', // No GeoJson, Please Upload Geojson first
	noGeoJsonMatchTip: 'Nie połączono pasującego GeoJSON', // No matched GeoJson Matched
	dropGeojsonHere: 'Umieść GeoJSON tutaj', // Drop GeoJson Here
	joinTitle: 'Dołącz', // Join
	equals: 'Równe', // Equals
	joinTo: 'Dołącz do', // Join To
	joinInfo: 'Wybierz atrybut i wartość z "{{leftTableTitle}}" które odnosiły się do "{{rightTableTitle}}"', // Select propety and value from "{{leftTableTitle}}" which used to refer to "{{rightTableTitle}}"
	error_300000: 'Nieznany błąd!', // Unknow Error!
	error_300001: 'Dokument już istnieje!', // Document has existed!
	error_300002: 'Inny dokument odwołuje się do tego dokumentu!', // Document is referred by another document!
	error_300003: 'Odmowa dostępu!', // Access Denied!
	error_300004: 'Nieprawidłowy dokument!', // Invalid Document!
	error_300005: 'Dokument został skasowany!', // Document was removed!
	error_300006: 'Nie znaleziono dokumentu!', // Document was not found!

	UnknowError: 'Nieznany błąd!', // Unknown Error!
};
