Feature: Login Page Elements

  Scenario: Verify visibility of login and password fields
    Given A user is at the login page
    When A user checks the login and password fields
    Then The login and password fields should be visible

  Scenario: Verify the clickability of the login button
    Given A user is at the login page
    When A user checks the login button
    Then The login button should be clickable