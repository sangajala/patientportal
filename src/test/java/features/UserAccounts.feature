@login
Feature: Verifying the Admin login credentials and log out features

  In Order to verify the Login and Logout
  As a Admin
  I need to have Valid credentials and In Valid credentials


  Scenario Outline: Verifying Admin Login with In Valid credentials

    Given Admin is in login page
    When  Admin login with username and password as "<username>" "<password>"
    Then  Admin should not be navigate to Home page with "<PageTitle>"

    Examples:
      | username         | password     | PageTitle       |
      | Admin@lgp.com    | Testing@123$ | LGP Appointment |
      | Testing1@lgp.com | Admin@123$   | LGP Appointment |
      | Testing1@lgp.com |              | LGP Appointment |
      |                  | Admin@123$   | LGP Appointment |
      |                  |              | LGP Appointment |
      | Testing          | Testing      | LGP Appointment |


  Scenario Outline: Verifying the Admin login and Log Out successfully with valid credentials

    Given Admin is in login page
    When  Admin login with username and password as "<username>" "<password>"
    And   Admin should able to see Dashboard
    When  Admin select log out
    Then  Admin should be navigate back to Login page successfully

    Examples:
      | username      | password   |
      | Admin@lgp.com | Admin@123$ |


  Scenario Outline: Verifying Admin Login with Valid credentials

    Given Admin is in login page
    When  Admin login with username and password as "<username>" "<password>"
    Then  Admin should be navigate to Home page with "<PageTitle>"

    Examples:
      | username      | password   | PageTitle       |
      | Admin@lgp.com | Admin@123$ | LGP Appointment |

