export const pl: LanguageKeyValueMap = {
	ExternalAuthenticationError: 'Błąd zewnętrznej autentykacji', // External authentication error
	InvalidUsernameOrPassword: 'Nieprawidłowa nazwa użytkownika lub hasło.', // Invalid user name or password.
	Login: 'Login',
	NoBindingInfoForUser: "Brak informacji powiązań dla użytkownika '{{userName}}'.", // No binding information for user '{{userName}}'.
	PasswordCountLimit: 'Wprowadzono nieprawidłowe hasło {{times}} razy, prosimy spróbować ponownie po {{minutes}} minutach.', // You have entered the wrong password {{times}} times, please try again after {{minutes}} minutes.
	PasswordRequired: 'Hasło jest wymagane.', // Password is required
	ProviderNotExist: "Zewnętrzny dostawca '{{providerName}}' nie istnieje.", // External user provider '{{providerName}}' does not exist.
	UnknownUserId: 'Nieznane id użytkownika', // Unknown user id
	UsernameRequired: 'Nazwa użytkownika jest wymagana.', // User name is required
	LOGO: 'LOGO',
	Password: 'Hasło', // Password
	RememberMe: 'Zapamiętaj mnie', // Password
	SignIn: 'Zaloguj', // Sign in
	SignInToYourAccount: 'Zaloguj do konta', // Sign in to your account
	Username: 'Nazwa użytkownika', // Username
	ForgotPassword: 'Nie pamiętasz hasła?', // Forgot password?

	// forgot password
	ResetPassword: 'Zresetuj hasło', // Reset Password
	ResetPasswordTip: 'Wprowadź adres email powiązany z kontem.', // Enter the email address associated with your account.
	EnterEmailAddress: 'Wprowadź adres email', // Enter Email Address
	SendResetPasswordEmail: 'Wyślij wiadomość ze zmianą hasła', // Send Reset Password Email
	InvalidEmailError: 'Nieprawidłowy adres email.', // Invalid email address.
	UserWithEmailNotFoundError: 'Użytkownik powiązany z tym kontem nie został znaleziony.', // The user associated with the email was not found.
	ResetPasswordRequestTooFrequentlyError: 'Wysłano zbyt wiele próśb o zresetowanie hasła. Prosimy spróbować później.', // Sorry, the request to reset the password associated with the email is too frequently, please try later.
	SendResetPasswordRequestFailedError: 'Nie udało się zresetować hasła. Prosimy spróbować ponownie.', // Sorry, failed to reset user password, please try again.

	// forgot password confirm
	ForgotPasswordConfirmMessage: "Na adres '{{email}}' została wysłana wiadomość z instrukcjami do zresetowania hasła.", // We have sent an email to your mailbox '{{email}}', please follow the instructions to reset your password.
	GoToLoginPage: 'Powrót na stronę logowania', // Go Back to Log In Page

	// reset password
	Save: 'Zapisz', // Save
	SetNewPassword: 'Ustaw nowe hasło', // Set New Password
	EnterNewPassword: 'Wprowadź nowe hasło', // Enter New Password
	ConfirmNewPassword: 'Potwierdź nowe hasło', // Confirm New Password
	InvalidResetPasswordRequestError: 'Nieprawidłowe żądanie resetowania hasła.', // Invalid reset password request.
	PasswordEmptyError: 'Hasło nie może być puste.', // Password can not be empty.
	InvalidPasswordFormatError: 'Hasło musi mieć co najmniej 8 znaków, zawierać co najmniej 1 małą literę, 1 wielką literę i 1 cyfrę.', // Password must be at least 8 characters in length, contain at least 1 lowercase letter, 1 uppercase letter and 1 number.
	ConfirmPasswordNotMatchError: 'Podane hasła są różne.', // Confirm password and password do not match.
	InvalidResetPasswordCodeError: 'Nieprawidłowy kod resetowania hasła.', // Invalid reset password code.
	PasswordAlreadyResetError: 'Hasło zostało zresetowane.', // The password has been reset.
	ExpiredResetPasswordRequestError: 'Żądanie zresetowania hasła wygasło.', // The request to reset password has expired.
	UserNotFoundError: 'Użytkownik powiązany z prośbą o zresetowanie hasła nie został znaleziony.', // User associated with the reset password request is not found.
	InvalidEmailSettingsError: 'Wykryto nieprawidłowe konfiguracje poczty email. Skontaktuj się z administratorem, aby skonfigurować działające konto email.', // Invalid email configurations detected, please contact administrator to set up a working email account.
	ExpiredResetPasswordLinkError: 'Link do resetowania hasła wygasł.', // Sorry, the link to reset password has expired.
	EmptyIdentityUri: 'Nie udało się wysłać wiadomości email. Podaj poprawny adres URL serwera tożsamości w pliku konfiguracyjnym.', // Failed to send email, please provide the valid identity server URL in the configuration file.
	EmptyPortalUri: 'Nie udało się wysłać wiadomości e-mail. Podaj poprawny identyfikator URI portalu na stronie ustawień interfejsu użytkownika.', // Failed to send email, please provide the valid portal URI in the UI settings page.'

	// reset password confirm
	ResetPasswordConfirmMessage: 'Pomyślnie zresetowano hasło. Zaloguj się przy użyciu nowego hasła.', // You have successfully reset your password, please log in with your new password.

	// login to tenant
	Ok: 'OK',
	SelectOrganization: 'Please select organization',
	TenantDoesNotExist: 'The specified organization does not exist, please log in again.',
	UserDoesNotBelongToTenant: 'User does not belong the specified organization, please log in again.',
}