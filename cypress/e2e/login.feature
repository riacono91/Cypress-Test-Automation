Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page at "https://secure1.inmotionhosting.com/index/login"
    When the user enters valid email and password
    And clicks the "Log In" button
    Then the user should be redirected to the dashboard or "Home" page
