export const tenantPL: LanguageKeyValueMap = {
	Yes: 'Dodaj', // Yes
	Close: 'Zamknij', // Close
	tntTenantSchema: 'Schemat Organizacji', // Organization Schema
	tntAddTenant: 'Dodaj Organizację', // Add Organization
	tntEditTenant: 'Edytuj Organizację', // Edit Organization
	tntNoItemsTip: 'brak elementów', // no items
	tntAddProp: 'Dodaj Atrybut', // Add Property
	tntAddTenantProp: 'Dodaj Atrybut Organizacji', // Add Organization Property
	tntEditTenantProp: 'Edytuj Atrybut Organizacji', // Edit Organization Property
	tntPropName: 'Nazwa Atrybutu', // Property Name
	tntPropVlue: 'Wartość Atrybutu', // Property Value
	tntRequired: 'Wymagana', // Required
	tntMultivalued: 'Wielowartościowa', // Multivalued
	tntClose: 'Zamknij', // Close
	tntDelete: 'Usuń Trwale', // Delete Forever
	tntEdit: 'Edytuj', // Edit
	tntName: 'Nazwa', // Name
	tntFromEmail: 'Z adresu email', // From Email
	tntMultiLineTip: 'Jedna wartość na linię', // One value per line
	tntRequiredTip: '(Wymagany)', // (Required)
	tntAdd: 'Dodaj', // Add
	tntSave: 'Zapisz', // Save
	tntCancel: 'Anuluj', // Cancel
	tntTenantMembers: 'Członkowie Organizacji', // Organization Members
	tntSelectMembers: 'Wybierz Członków', // Select Members
	tntUsername: 'Nazwa użytkownika', // Username
	tntEmail: 'Email', // Email
	tntProvider: 'Dostawca', // Provider
	tntMembers: '{{count}} użytkowników', // {{count}} member(s)
	tntDeleteTenantProp: 'Usuń Atrybut Organizacji', // Delete Organization Property
	tntDeleteTenantPropConfirmMessage: 'Czy chcesz usunąć trwale atrybut organizacji "{{tenantPropName}}"?', // Do you want to delete organization property "{{tenantPropName}}" permanently?
	tntDeleteTenant: 'Usuń organizację', // Delete Organization
	tntDeleteTenantConfirmMessage: 'Czy chcesz trwale usunąć organizację "{{tenantName}}"?', // Do you want to delete organization "{{tenantName}}" permanently?
	tntNoMemberTip: 'Brak Użykowników w organizacji.', // No Users in the organization. Please click
	tntAddMember: 'Dodaj.', // Add

	tntTenantBasicInformation: 'Podstawowe Informacje', // Basic Information
	tntTenantRoles: 'Role Organizacji', // Organization Roles
	tntSelectRoles: 'Wybierz Role', // Select Roles
	tntTenantMoveUp: 'W Górę', // Move Up
	tntTenantMoveDown: 'W Dół', // Move Down
	tntExpandAll: 'Rozwiń Wszystkie', // Expand All
	tntCollapseAll: 'Zwiń wszystkie', // Collapse All
	tntActions: 'Akcje', // Actions
	tntGlobal: 'Global',
	tntRoleName: 'Nazwa Roli', // Role Name
	tntUsersNumber: 'Numer Użytkownika', // Users Number
	tntNewOrganization: 'NowaOrganizacja', // NewOrganization
	tntTenantPermissions: 'Uprawnienia', // Permissions
	tntNoRolesTip: 'Brak Ról w organizacji.', // No Roles in the organization.
	tntNoPermissionsTip: 'Brak Ról w organizacji.', // No Roles in the organization.
	tntPermissionsName: 'Nazwa', // Name
	tntPermissionsDescription: 'Opis', // Description
	tntInvisible: 'Niewidoczny', // Invisible
	tntDisableSubView: 'Disable sub-organization view　value',
	tntDisableSubEdit: 'Disable Sub-organization edit　value',

	tntErrorOrganizationNameNull: 'Nazwa organizacji jest wymagana.', // Organization name is required.
	tntErrorOrganizationNameDuplicated: 'Nazwa organizacji powtarza się.', // Organization name is duplicated.
	tntErrorInvalidCharInName: 'Nazwa organizacji nie może zawierać znaków: < > / \\ $', // Organization name could not contain characters: < > / \\ $
	tntErrorFromPropNull: 'Wartość atrybutu jest wymagana.', // Property value is required.

	tntErrorOrganizationPropNameNull: 'Organization property name is required.',
	tntErrorOrganizationPropNameDuplicated: 'Organization property name is duplicated.',

	error_5001: 'Nazwa organizacji nie może być pusta.', // Organization name can not be empty.
	error_5002: 'Organizacja o nazwie "{{TenantName}}" już istnieje.', // Organization with name "{{TenantName}}" already exists.
	error_5003: 'Atrybut organizacji nie może być pusty', // Organization property name can not be empty.
	error_5004: 'Atrybut organizacji o nazwie "{{TenantPropName}}" już istnieje', // Organization property with name "{{TenantPropName}}" already exists
	error_5005: 'Nazwa atrybutu "{{TenantPropName}}" jest zarezerwowana', // The tenant property name "{{TenantPropName}}" is reserved.
	error_5006: 'Wartość z adresu email już istnieje', // The from email "{{FromEmail}}" already exists.
};

export const portalPL: LanguageKeyValueMap = {
	'account-management-organization!title': 'Organizacje', // Organizations
	'account-management-organization!description': 'Zarządzanie Organizacjami', // Organization Management
};
