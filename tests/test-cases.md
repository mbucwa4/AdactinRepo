# Test Plan ILABACCEL-1613 — Exported Test Cases

Exported test count: 6

## ILABACCEL-1607 — Successful login with valid username and password
- Key: ILABACCEL-1607
- Summary: Successful login with valid username and password
- Priority: High
- Preconditions:
  - User has an active registered account with username AutotestB and password IA4073.
  - User is on the login page at https://adactinhotelapp.com.
- Steps:
  1. Action: Navigate to https://adactinhotelapp.com.
     Expected result: The login page loads successfully.
  2. Action: Enter username AutotestB in the Username field.
     Expected result: The username is entered in the field.
  3. Action: Enter password IA4073 in the Password field.
     Expected result: The password is entered in the field.
  4. Action: Click the Login button.
     Expected result: The user is successfully authenticated and redirected to the Search Hotel page SearchHotel.php displaying a welcome message.

## ILABACCEL-1608 — Login attempt with invalid username
- Key: ILABACCEL-1608
- Summary: Login attempt with invalid username
- Priority: High
- Preconditions:
  - User is on the login page at https://adactinhotelapp.com.
- Steps:
  1. Action: Navigate to https://adactinhotelapp.com.
     Expected result: The login page loads successfully.
  2. Action: Enter an invalid or unregistered username such as InvalidUser99 in the Username field.
     Expected result: The invalid username is entered in the field.
  3. Action: Enter password IA4073 in the Password field.
     Expected result: The password is entered in the field.
  4. Action: Click the Login button.
     Expected result: Login fails, the user remains on the login page, and an error message is displayed indicating invalid login details.

## ILABACCEL-1609 — Login attempt with invalid password
- Key: ILABACCEL-1609
- Summary: Login attempt with invalid password
- Priority: High
- Preconditions:
  - User has an active registered account with username AutotestB.
  - User is on the login page at https://adactinhotelapp.com.
- Steps:
  1. Action: Navigate to https://adactinhotelapp.com.
     Expected result: The login page loads successfully.
  2. Action: Enter username AutotestB in the Username field.
     Expected result: The username is entered in the field.
  3. Action: Enter an incorrect password such as WrongPassword99 in the Password field.
     Expected result: The incorrect password is entered in the field.
  4. Action: Click the Login button.
     Expected result: Login fails, the user remains on the login page, and an error message is displayed indicating invalid login details.

## ILABACCEL-1610 — Login attempt with empty username and password fields
- Key: ILABACCEL-1610
- Summary: Login attempt with empty username and password fields
- Priority: Medium
- Preconditions:
  - User is on the login page at https://adactinhotelapp.com.
- Steps:
  1. Action: Navigate to https://adactinhotelapp.com.
     Expected result: The login page loads successfully.
  2. Action: Leave both the Username and Password fields empty.
     Expected result: Both fields remain empty.
  3. Action: Click the Login button.
     Expected result: Validation prevents submission, the user remains on the login page, and a validation message prompts the user to enter required credentials.

## ILABACCEL-1611 — Verification that user lands on correct dashboard after successful login
- Key: ILABACCEL-1611
- Summary: Verification that user lands on correct dashboard after successful login
- Priority: High
- Preconditions:
  - User has active credentials username AutotestB and password IA4073.
  - User is on the login page at https://adactinhotelapp.com.
- Steps:
  1. Action: Navigate to https://adactinhotelapp.com.
     Expected result: The login page loads successfully.
  2. Action: Enter username AutotestB in the Username field.
     Expected result: The username is entered in the field.
  3. Action: Enter password IA4073 in the Password field.
     Expected result: The password is entered in the field.
  4. Action: Click the Login button.
     Expected result: The login attempt is successful and the user is authenticated.
  5. Action: Verify the landing page URL and page elements.
     Expected result: The user is redirected to SearchHotel.php showing the Search Hotel header, welcome greeting Hello AutotestB, and navigation links.

## ILABACCEL-1612 — Verification of appropriate error message on failed login
- Key: ILABACCEL-1612
- Summary: Verification of appropriate error message on failed login
- Priority: Medium
- Preconditions:
  - User is on the login page at https://adactinhotelapp.com.
- Steps:
  1. Action: Navigate to https://adactinhotelapp.com.
     Expected result: The login page loads successfully.
  2. Action: Enter invalid credentials such as username InvalidUser99 and password InvalidPass99.
     Expected result: The invalid credentials are entered in the login form.
  3. Action: Click the Login button.
     Expected result: The authentication attempt is processed and fails.
  4. Action: Observe the displayed error message and password field.
     Expected result: An appropriate error message is clearly displayed in red text indicating invalid login credentials, and the password field is cleared.
