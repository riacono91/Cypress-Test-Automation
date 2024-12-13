# Test Plan: Validating the E-commerce Website

## Objective

The objective of this test plan is to validate the functionality, usability, and compatibility of the e-commerce website, ensuring that key features comply with the specifications and provide an optimal user experience.

## Scope

This test plan will cover the following key features:

1. **Login**: Accessing the website with valid credentials and handling errors with invalid credentials.
2. **Registration**: Creating a new account and handling registration attempts with duplicate data.
3. **Product Search**: Searching for products and verifying the accuracy of results.
4. **Shopping Cart**: Adding and removing products from the cart, dynamically updating the total.
5. **Checkout**: Completing purchases with valid data and verifying order summaries.
6. **Responsiveness**: Testing on both desktop and mobile devices.
7. **Compatibility**: Verifying functionality on Chrome and Firefox browsers.

## Types of Tests

1. **Functional Tests**: Validating the main functionalities of the website (login, registration, product search, cart, checkout).
2. **UI/UX Tests**: Verifying the user experience and interface clarity.
3. **Compatibility Tests**: Ensuring the website works correctly on supported browsers and devices.

## Key Test Cases

### 1. Login

#### Scenario: Successful login with valid credentials
Given the user is on the login page at `https://ecommerce-site.com/login`
When the user enters valid email and password
And clicks the "Login" button
Then the user should be redirected to the dashboard or "Home" page.

#### Scenario: Login attempt with invalid credentials
Given the user is on the login page
When the user enters an invalid email and password combination
And clicks the "Login" button
Then an error message should appear saying "Invalid email or password."

#### Scenario: Error messages for empty input fields
Given the user is on the login page
When the user leaves the email and password fields empty
And clicks the "Login" button
Then an error message should appear for required fields.

### 2. Registration

#### Scenario: Successful account creation
Given the user is on the registration page at `https://ecommerce-site.com/register`
When the user fills in valid details for username, email, and password
And clicks the "Sign up" button
Then the user should be redirected to the "Your Feed" page.

#### Scenario: Attempt to register with duplicate email
Given the user is on the registration page
When the user enters an email already registered
And clicks the "Sign up" button
Then an error message should appear saying "Email already in use."

#### Scenario: Error messages for missing required fields
Given the user is on the registration page
When the user leaves one or more required fields empty
And clicks the "Sign up" button
Then error messages should appear for each missing field.

### 3. Product Search

#### Scenario: Search for existing products
Given the user is on the homepage with a search bar
When the user enters the name of an existing product
And clicks the search icon or presses "Enter"
Then the user should see the product in the search results.

#### Scenario: Search for non-existent products
Given the user is on the homepage with a search bar
When the user enters a keyword that matches no products
And clicks the search icon or presses "Enter"
Then a message should appear saying "No products found."

#### Scenario: Suggestions while typing in the search bar
Given the user is typing in the search bar
When the user enters a partial name of a product
Then relevant product suggestions should appear in real-time.

### 4. Shopping Cart

#### Scenario: Adding a product to the cart
Given the user is on a product page
When the user clicks "Add to Cart"
Then the product should appear in the cart section with correct details.

#### Scenario: Removing a product from the cart
Given the user has items in the shopping cart
When the user clicks the "Remove" icon for a product
Then the product should be removed from the cart
And the total should update dynamically.

#### Scenario: Dynamic cart total update
Given the user has multiple products in the cart
When the user adds or removes items
Then the cart total should update automatically to reflect the changes.

### 5. Checkout

#### Scenario: Completing checkout with valid details
Given the user is on the checkout page
When the user enters valid shipping and payment details
And clicks the "Confirm Order" button
Then the user should be redirected to the order confirmation page
And see a summary of their order.

#### Scenario: Displaying the order summary
Given the user has completed the checkout process
When the user views the confirmation page
Then the page should display the correct order details, including products, address, and total.

#### Scenario: Error messages for missing checkout details
Given the user is on the checkout page
When the user leaves one or more required fields empty
And clicks the "Confirm Order" button
Then error messages should appear for the missing fields.

### 6. Responsiveness

#### Scenario: Responsive layout on desktop
Given the user accesses the site on a desktop resolution (1280x720)
When the user navigates through the site
Then the layout should be correct and all elements should be visible.

#### Scenario: Responsive layout on mobile
Given the user accesses the site on a mobile resolution (375x667)
When the user navigates through the site
Then the layout should adapt to the screen size
And all functionalities should be accessible.

### 7. Compatibility

#### Scenario: Testing on Chrome
Given the user accesses the site using Chrome
When the user performs all key test cases
Then the site should function correctly without issues.

#### Scenario: Testing on Firefox
Given the user accesses the site using Firefox
When the user performs all key test cases
Then the site should function correctly without issues.

## Tools Used

1. **Cypress**: For automating functional and compatibility tests.
2. **Browser Developer Tools**: For verifying responsiveness and compatibility.
3. **Site Documentation**: For cross-referencing the required specifications.

## Success Metrics

1. **Success Rate**: All functional test cases must pass successfully.
2. **Test Coverage**: All key functionalities must be covered by the test plan.
3. **Execution Time**: Tests must be executed within the planned timeline.

## Conclusion

This test plan aims to identify any bugs or discrepancies between the website's behavior and the required specifications, ensuring the e-commerce platform is ready for end-user use.

