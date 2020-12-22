export const en: LanguageKeyValueMap = {
	ExternalAuthenticationError: 'External authentication error',
	InvalidUsernameOrPassword: 'Invalid user name or password.',
	Login: 'Login',
	NoBindingInfoForUser: "No binding information for user '{{userName}}'.",
	PasswordCountLimit: 'You have entered the wrong password {{times}} times, please try again after {{minutes}} minutes.',
	PasswordRequired: 'Password is required.',
	ProviderNotExist: "External user provider '{{providerName}}' does not exist.",
	UnknownUserId: 'Unknown user id',
	UsernameRequired: 'User name is required.',
	LOGO: 'LOGO',
	Password: 'Password',
	RememberMe: 'Remember me',
	SignIn: 'Sign in',
	SignInToYourAccount: 'Sign in to your account',
	Username: 'Username',
	ForgotPassword: 'Forgot password?',

	// forgot password
	ResetPassword: 'Reset Password',
	ResetPasswordTip: 'Enter the email address associated with your account.',
	EnterEmailAddress: 'Enter Email Address',
	SendResetPasswordEmail: 'Send Reset Password Email',
	InvalidEmailError: 'Invalid email address.',
	UserWithEmailNotFoundError: 'The user associated with the email was not found.',
	ResetPasswordRequestTooFrequentlyError: 'Sorry, the request to reset the password associated with the email is too frequently, please try later.',
	SendResetPasswordRequestFailedError: 'Sorry, failed to reset user password, please try again.',

	// forgot password confirm
	ForgotPasswordConfirmMessage: "We have sent an email to your mailbox '{{email}}', please follow the instructions to reset your password.",
	GoToLoginPage: 'Go Back to Log In Page',

	// reset password
	Save: 'Save',
	SetNewPassword: 'Set New Password',
	EnterNewPassword: 'Enter New Password',
	ConfirmNewPassword: 'Confirm New Password',
	InvalidResetPasswordRequestError: 'Invalid reset password request.',
	PasswordEmptyError: 'Password can not be empty.',
	InvalidPasswordFormatError: 'Password must be at least 8 characters in length, contain at least 1 lowercase letter, 1 uppercase letter and 1 number.',
	ConfirmPasswordNotMatchError: 'Confirm password and password do not match.',
	InvalidResetPasswordCodeError: 'Invalid reset password code.',
	PasswordAlreadyResetError: 'The password has been reset.',
	ExpiredResetPasswordRequestError: 'The request to reset password has expired.',
	UserNotFoundError: 'User associated with the reset password request is not found.',
	InvalidEmailSettingsError: 'Invalid email configurations detected, please contact administrator to set up a working email account.',
	ExpiredResetPasswordLinkError: 'Sorry, the link to reset password has expired.',
	EmptyIdentityUri: 'Failed to send email, please provide the valid identity server URL in the configuration file.',
	EmptyPortalUri: 'Failed to send email, please provide the valid portal URI in the UI settings page.',

	// reset password confirm
	ResetPasswordConfirmMessage: 'You have successfully reset your password, please log in with your new password.',

	// login to tenant
	Ok: 'OK',
	SelectOrganization: 'Please select organization',
	TenantDoesNotExist: 'The specified organization does not exist, please log in again.',
	UserDoesNotBelongToTenant: 'User does not belong the specified organization, please log in again.',
}