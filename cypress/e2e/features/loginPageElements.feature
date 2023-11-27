Feature: Login Page Elements

  Background:
  Given A user is at the Login page

  Scenario: Verify visibility of login and password fields
    When A user checks the login and password fields
    Then The login and password fields should be visible

  Scenario: Verify the clickability of the login button
    When A user checks the login button
    Then The login button should be clickable