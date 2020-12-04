export const rolePL: LanguageKeyValueMap = {
	cmAdd: 'Dodaj', // Add
	cmSave: 'Zapisz', // Save
	cmCancel: 'Anuluj', // Cancel
	cmDelete: 'Usuń', // Delete
	cmEmptyResult: 'pusty wynik', // empty result
	cmMessageBox: 'Wiadomość', // Message
	cmOK: 'OK',

	otExpandAll: 'Rozwiń Wszystko', // Expand All
	otCollapseAll: 'Zwiń Wszystko', // Collapse All
	otOrganizationRoot: 'Global',
	cmAddRole: 'Dodaj Rolę', // Add Role
	rcDeleteRole: 'Usuń Rolę', //Delete Role
	rcDeleteRoleConfirmMessage: 'Czy jesteś pewien, że chcesz usunąć rolę "{{RoleName}}"?', // Are you sure you want to delete the role "{{RoleName}}"?
	rcRoleName: 'Nazwa Roli', // Role Name
	ecRoleMembers: 'Użytkownicy Roli', // Role Members
	ecPermissions: 'Uprawnienia', // Permissions
	ecSelectMembers: 'Wybierz Użytkowników', // Select Members
	ecUsername: 'Nazwa Użytkownika', // Username
	ecEmail: 'Email', // Email
	ecProvider: 'Dostawca', // Provider
	ecMembers: '({{count}} members)',
	ecDeleteUser: 'Usuń Użytkownika', // Delete User
	ecDeleteUserConfirmMessage: 'Czy jesteś pewien, że chcesz usunąć użytkownika "{{UserName}}" z roli?', // Are you sure you want to remove the user "{{UserName}}" from the role?
	ecNoMemberTip: 'Brak użytkowników pod rolą, aby dodać, kliknij', // No users under the role, to add, please click

	rmError_2001: 'Rola "{{name}}" już istnieje.', // Role "{{name}}" already exists.
	rmError_2004: 'Nie można zaktualizować członków roli "wszyscy".', // Can not update the members of role "everyone".
	rmError_2005: 'Nie można usunąć członka "admin" z roli "administrator".', // Can not remove the member "admin" from role "administrator".
	rmError_2006: 'Nie można zaktualizować uprawnień roli "administrator".', // Can not update the permissions of role "administrator".
	rmError_2010: 'Nie można utworzyć wbudowanej roli o nazwie "{{name}}"', // Can not create a built-in role named "{{name}}"
	rmError_5010: 'Nie możesz usunąć siebie z bieżącej organizacji.', // You cannot remove yourself from the current organization.
};