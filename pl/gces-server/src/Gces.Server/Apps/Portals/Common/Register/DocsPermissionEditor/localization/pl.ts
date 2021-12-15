export const DocsPermissionEditorPL: LanguageKeyValueMap = {
	DocsPermissionEditor: 'Uprawnienie', // Permission
	Action: 'Czynność', // Action
	AddNew: 'Dodaj nowe uprawnienie', // Add New Permission
	RemoveExisting: 'Usuń istniejące uprawnienie', // Remove Existing Permission
	RemoveExistingAndAddNew: 'Usuń istniejące i dodaj nowe uprawnienie', // Remove Existing And Add New Permission
	OK: 'OK',
	Cancel: 'Anuluj', // Cancel
	Close: 'Zamknij', // Close

	// permission role display name
	roleName_Everyone: 'Wszyscy', // Everyone
	roleName_administrator: 'Administrator',
	roleName_orgadmin: 'Administrator Organizacji', // Organization Administrator

	Read: 'Odczyt', // Read
	ReadAndWrite: 'Odczyt / Zapis', // Read / Write
	Execute: 'Wykonaj', // Execute
	ExecuteAndCreate: 'Wykonaj / Utwórz zestaw danych', // Execute / Create DataSet
	FullControl: 'Full Control',

	docsPermissionNoRoleTip: 'Brak roli', // No Roles!
	docsPermissionRemovingTip: 'Ta czynność usunie wszystkie wspólne uprawnienia wybranych dokumentów.', // This action will remove all the existing shared permissions of the selected documents.
	DocsPermissionChangePermissionSuccess: 'Poprawnie zmieniono uprawnienia', // Permissions for selected documents updated successfully
	shareReferencedDocs: 'Zastosuj minimalne wymagane dostępy dla dokumentu referencyjnego', // Apply minimum required permission on referenced document

	// error
	DocsPermissionGetRoleError: 'Niepowodzenie przy pobieraniu ról', // Failed to get roles
	DocsPermissionChangePermissionError: 'Niepowodzenie przy zmianie uprawnień', // Failed to change Permissions
};
