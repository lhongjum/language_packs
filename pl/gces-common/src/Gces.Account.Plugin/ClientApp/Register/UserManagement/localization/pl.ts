export const userPL: LanguageKeyValueMap = {
	// common
	cmNoMembersInOrg: 'No members in Organization',

	UserManagement: 'Zarządzanie użytkownikiem', // User Management
	Yes: 'Dodaj', // Yes
	Edit: 'Edytuj', // Edit
	Delete: 'Usuń', // Delete
	Save: 'Zapisz', // Save
	Cancel: 'Anuluj', // Cancel
	Close: 'Zamknij', // Close
	AddUser: 'Create User', // Add User
	SelectMenbers: 'Select Members',
	EditUser: 'Edytuj użytkownika', // Edit User
	SearchText: 'szukaj tekstu', // search text
	DeleteUser: 'Usuń użytkownika', // Delete User
	RemoveUserFromOrg: 'Remove User from Organization',
	Username: 'Nazwa użytkownika', // Username
	Email: 'Email',
	Mobile: 'Numer telefonu', // Mobile Number
	FirstName: 'Imię', // First Name
	LastName: 'Nazwisko', // Last Name
	FullName: 'Imię i nazwisko', // Full Name
	Password: 'Hasło', // Password
	ConfirmPassword: 'Potwierdź hasło', // Confirm Password
	Roles: 'Role', // Roles
	Provider: 'Dostawca', // Provider
	Organizations: 'Organizacje', // Organizations
	Status: 'Status',
	Enabled: 'Włączone', // Enabled
	Disabled: 'Wyłączony', // Disabled
	Enable: 'Włącz', // Enable
	Disable: 'Wyłącz', // Disable
	Locked: 'Zablokowany', // Locked
	Actions: 'Działania', // Actions
	GetUsersError: 'Pobierz błędy użytkowników', // Get users error
	UsernameIsRequired: 'Nazwa użytkownika jest wymagana', // Username is required
	UsernameAlreadyExists: 'Nazwa użytkownika już istnieje', // Username already exists
	EmailIsRequired: 'Email jest wymagany', // Email is required
	EmailIsInvalid: 'Email jest nieprawidłowy', // Email is invalid
	EmailAlreadyExists: 'Email już istnieje', // Email already exists
	MobileAlreadyExists: 'Numer telefonu komórkowego już istnieje', // Mobile already exists
	WeakPasswordRequirement: 'Hasło nie może być puste', // Password can not be null
	StrongPasswordRequirement: 'Hasło musi mieć co najmniej 8 znaków, zawierać co najmniej 1 małą literę, co najmniej 1 dużą literę i co najmniej jedną liczbę.', // Password must be at least 8 characters in length, contain at least 1 lowercase letter, 1 uppercase letter and 1 number.
	PasswordNotMatch: 'Hasła nie pasują do siebie.', // Password and confirm password do not match.
	PasswordIsBlank: 'Password cannot only contain whitespace charaters',
	DeleteUserConfirmMessage: 'Czy chcesz usunąć użytkownika "{{user}}" na zawsze?', // Do you want to delete user "{{user}}" permanently?
	RemoveUserConfirmMessage: 'Do you want to remove user "{{user}}" from organization "{{organization}}"?',
	OneRolePerLine: ' (jedna rola na linię)', // (One role per line)
	OneValuePerLine: ' (jedna wartość na linię)', // One value per line
	Import: 'Import',
	Export: 'Eksport', // Export
	Users: 'Użytkownicy', // Users
	Template: 'Szablon', // Template
	NewUserName: 'nazwa nowego użytkownika', // new user name
	NewUserEmail: 'email nowego użytkownika', // new user email
	SelectValue: 'wybierz wartość', // select value
	NullValue: '<pusty>', // empty
	ImportUsers: 'Importuj użytkowników', // Import Users
	DragDropFile: 'Przenieś & upuść plik tutaj', // Drag & Drop File Here
	Or: 'lub', // or
	ClickHere: 'kliknij tutaj', // click here
	SelectFile: 'aby wybrać plik', // to select file
	ExportTemplate: 'Eksportuj szablon', // Export Template
	UnlockUser: 'Odblokuj użytkownika', // Unlock User
	UnlockUserConfirm: 'Czy chcesz odblokować użytkownika "{{user}}" ?', // Do you want to unlock user "{{user}}" ?
	UserTemplate: 'szablon_użytkownika', // user_template
	ErrorRemoveAdminFromAdministratorRole: "Nie można usunąć użytkownika '{{userName}}' z roli '{{roleName}}'.", // Can not remove user '{{userName}}' from role '{{roleName}}'.
	ImportUsersSuccessMsg: 'Pomyślnie zaimportowano {{count}} użytkowników.', // Successfully imported {{count}} user(s).
	ImportUsersFailMsg: 'Nie udało się zaimportować {{count}} użytkowników, <a href="{{url}}" target="_blank">kliknij tutaj, aby poznać szczegóły</a>.', // {{count}} user(s) failed to import, <a href="{{url}}" target="_blank">click here for details</a>.
	ImportUsersFailed: 'Import użytkowników nie powiódł się.', // Import users failed

	// select members
	smSelectMembers: 'Select Members',
	smEmptyResult: 'empty result',
	smMembers: '({{count}} members)',
	smAddUser: 'Add',

	UserDetail: 'User Details',
	ShowSubOrg: 'Show the members of Sub-organization',
	NotShowSubOrg: 'Not show the members of Sub-organization',
	RemoveUser: 'Remove user from the current organization',

	udBasicInfo: 'Basic Information',
	udEmpty: '[empty]',
	NoOrganizations: '[No Organization]',
	NoRoles: '[No Role]',
	onlyNoMemberOfSubOrg: 'remove user from organization can only be used when not show the members of sub-organization',
	ecNoMemberTip: 'No Users in the organization. Please click',

	Error: 'Error',
	umError_1028: 'User "admin" can not be deleted.',
	umError_5010: 'You cannot remove yourself from the current organization.',
	rmError_5011: 'You cannot remove yourself from the current organization role.',
};