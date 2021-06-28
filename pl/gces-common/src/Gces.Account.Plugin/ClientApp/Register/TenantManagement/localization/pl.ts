export const tenantPL: LanguageKeyValueMap = {
	Yes: 'Dodaj', // Yes
	Close: 'Zamknij', // Close
	tntTenantSchema: 'Schemat organizacji', // Organization Schema
	tntAddTenant: 'Dodaj organizację', // Add Organization
	tntEditTenant: 'Edytuj organizację', // Edit Organization
	tntNoItemsTip: 'brak elementów', // no items
	tntAddProp: 'Dodaj atrybut', // Add Property
	tntAddTenantProp: 'Dodaj atrybut organizacji', // Add Organization Property
	tntEditTenantProp: 'Edytuj atrybut organizacji', // Edit Organization Property
	tntPropName: 'Nazwa atrybutu', // Property Name
	tntPropVlue: 'Wartość atrybutu', // Property Value
	tntRequired: 'Wymagana', // Required
	tntMultivalued: 'Wielowartościowa', // Multivalued
	tntClose: 'Zamknij', // Close
	tntDelete: 'Usuń trwale', // Delete Forever
	tntEdit: 'Edytuj', // Edit
	tntName: 'Nazwa', // Name
	tntFromEmail: 'Z adresu email', // From Email
	tntMultiLineTip: 'Jedna wartość na linię', // One value per line
	tntRequiredTip: '(Wymagany)', // (Required)
	tntAdd: 'Dodaj', // Add
	tntSave: 'Zapisz', // Save
	tntCancel: 'Anuluj', // Cancel
	tntTenantMembers: 'Członkowie organizacji', // Organization Members
	tntSelectMembers: 'Wybierz członków', // Select Members
	tntUsername: 'Nazwa użytkownika', // Username
	tntEmail: 'Email', // Email
	tntProvider: 'Dostawca', // Provider
	tntMembers: '{{count}} użytkowników', // {{count}} member(s)
	tntDeleteTenantProp: 'Usuń atrybut organizacji', // Delete Organization Property
	tntDeleteTenantPropConfirmMessage: 'Czy chcesz usunąć trwale atrybut organizacji "{{tenantPropName}}"?', // Do you want to delete organization property "{{tenantPropName}}" permanently?
	tntDeleteTenant: 'Usuń organizację', // Delete Organization
	tntDeleteTenantConfirmMessage: 'Czy chcesz trwale usunąć organizację "{{tenantName}}"?', // Do you want to delete organization "{{tenantName}}" permanently?
	tntNoMemberTip: 'Brak użykowników w organizacji.', // No Users in the organization. Please click
	tntAddMember: 'Dodaj.', // Add

	tntTenantBasicInformation: 'Podstawowe informacje', // Basic Information
	tntTenantRoles: 'Role organizacji', // Organization Roles
	tntSelectRoles: 'Wybierz role', // Select Roles
	tntTenantMoveUp: 'W górę', // Move Up
	tntTenantMoveDown: 'W dół', // Move Down
	tntExpandAll: 'Rozwiń wszystkie', // Expand All
	tntCollapseAll: 'Zwiń wszystkie', // Collapse All
	tntActions: 'Akcje', // Actions
	tntGlobal: 'Ogólny', // Global
	tntRoleName: 'Nazwa roli', // Role Name
	tntUsersNumber: 'Numer użytkownika', // Users Number
	tntNewOrganization: 'Nowa organizacja', // NewOrganization
	tntTenantPermissions: 'Uprawnienia', // Permissions
	tntNoRolesTip: 'Brak ról w organizacji.', // No Roles in the organization.
	tntNoPermissionsTip: 'Brak ról w organizacji.', // No Roles in the organization.
	tntPermissionsName: 'Nazwa', // Name
	tntPermissionsDescription: 'Opis', // Description
	tntInvisible: 'Niewidoczny', // Invisible
	tntDisableSubView: 'Wyłącz wartość widoku organizacji podrzędnej', // Disable sub-organization view　value
	tntDisableSubEdit: 'Wyłącz wartość edycji organizacji podrzędnej', // Disable Sub-organization edit　value

	tntErrorOrganizationNameNull: 'Nazwa organizacji jest wymagana.', // Organization name is required.
	tntErrorOrganizationNameDuplicated: 'Nazwa organizacji powtarza się.', // Organization name is duplicated.
	tntErrorInvalidCharInName: 'Nazwa organizacji nie może zawierać znaków: < > / \\ $', // Organization name could not contain characters: < > / \\ $
	tntErrorFromPropNull: 'Wartość atrybutu jest wymagana.', // Property value is required.

	tntErrorOrganizationPropNameNull: 'Nazwa właściwości organizacji jest wymagana.', // Organization property name is required.
	tntErrorOrganizationPropNameDuplicated: 'Nazwa właściwości organizacji jest zduplikowana.', // Organization property name is duplicated.

	error_5001: 'Nazwa organizacji nie może być pusta.', // Organization name can not be empty.
	error_5002: 'Organizacja o nazwie "{{TenantName}}" już istnieje.', // Organization with name "{{TenantName}}" already exists.
	error_5003: 'Atrybut organizacji nie może być pusty', // Organization property name can not be empty.
	error_5004: 'Atrybut organizacji o nazwie "{{TenantPropName}}" już istnieje', // Organization property with name "{{TenantPropName}}" already exists
	error_5005: 'Nazwa atrybutu "{{TenantPropName}}" jest zarezerwowana', // The tenant property name "{{TenantPropName}}" is reserved.
	error_5006: 'Wartość z adresu email już istnieje', // The from email "{{FromEmail}}" already exists.
};

export const portalPL: LanguageKeyValueMap = {
	'account-management-organization!title': 'Organizacje', // Organizations
	'account-management-organization!description': 'Zarządzanie organizacjami', // Organization Management
};
