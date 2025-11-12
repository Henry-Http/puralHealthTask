Feature: SauceDemo Login Functionality

  Background:
    Given I open the SauceDemo login page

  Scenario: Standard user logs in successfully
    When I login with "standard_user" and "secret_sauce"
    Then I should see the products page

  Scenario: Locked out user cannot log in
    When I login with "locked_out_user" and "secret_sauce"
    Then I should see an error message saying "Epic sadface: Sorry, this user has been locked out."

  Scenario: Problem user logs in with UI inconsistencies
    When I login with "problem_user" and "secret_sauce"
    Then I should see UI inconsistencies on the product page
