Feature: Login to medd base with valid credentials

  In order to login to medd base with valid credentails
  as a user
  I have to provide valid user name and password

  Scenario Outline: login with valid data
    Given user navigates to meddbase login page
    When I enter user name as "<LoginUsername>"
    And I enter password as "<Password>"
    And I click on Submit button
    Then I should be directed to home page




    Examples:

      | LoginUsername          | Password    |
      | teena@bananaapps.co.uk | London12    |
      | test@test123.com       | testing1234 |
