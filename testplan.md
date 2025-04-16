# Test Plan - Gherkin Syntax

## Feature: Bill Pay

  #### Scenario: Submit Bill Payment with Valid Data
    Given the user is logged in and on the "Bill Pay" page
    When the user fills in the bill payment form with valid data
    And submits the payment
    Then the bill payment should be completed
    And the confirmation message "Bill Payment Complete" should be visible

## Feature: Login Flow

  #### Scenario: Login with Valid Credentials
    Given the user is on the login page
    When the user enters a valid username and password
    And clicks the "Log In" button
    Then the user should be redirected to the "Accounts Overview" page
    And the page should contain "Accounts Overview"

  #### Scenario: Login with Invalid Credentials
    Given the user is on the login page
    When the user enters an invalid username and password
    And clicks the "Log In" button
    Then an error message "An internal error has occurred and has been logged" should be displayed

## Feature: Open New Account

  #### Scenario: Open a New Savings Account
    Given the user is logged in and on the "Open New Account" page
    When the user selects "SAVINGS" as the account type
    And selects an account to make the initial deposit from
    And submits the form
    Then a new savings account should be created
    And the page should display the message "Account Opened!"
    And the new account ID should be visible

## Feature: Transfer Funds

  #### Scenario: Transfer Funds Successfully
    Given the user is logged in and on the "Transfer Funds" page
    When the user enters a valid amount to transfer
    And selects the source and destination accounts
    And submits the transfer request
    Then the confirmation message should display the transfer details:
      | Transfer Amount | Source Account | Destination Account |
      | $100.00         | 12345          | 67890               |

  #### Scenario: Transfer Funds with Missing Amount
    Given the user is logged in and on the "Transfer Funds" page
    When the user leaves the "Amount" field empty
    And selects the source and destination accounts
    And attempts to submit the form
    Then an error message should be displayed indicating that the transfer failed
    And the user should remain on the transfer page
