Feature: Login Page Tests
  As a user, I want to ensure the login page works correctly.

  Background:
    Given I am on the login page

  # Scenario: Button is disabled when fields are empty
  #   Then the login button should be disabled

  # Scenario: Login with invalid credentials shows error message
  #   When I enter "invalidUser" as username and "invalidPassword" as password
  #   And I click the login button
  #   Then I should see an error message containing "Your username is invalid!"

  Scenario: Login with valid credentials redirects to homepage
    When I enter "tomsmith" as username and "SuperSecretPassword!" as password
    And I click the login button
    Then I should be redirected to a URL containing "/secure"
    And I should see a heading containing "Secure Area"

  # Scenario: Forgot Password link redirects correctly
  #   When I click the "Forgot Password" link
  #   Then I should be redirected to a URL containing "/forgot_password"

  # Scenario: Password visibility toggle works
  #   Given I enter "testPassword" in the password field
  #   When I click the password visibility toggle
  #   Then the password field should be of type "text"
