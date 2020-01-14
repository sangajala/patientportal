Feature: login to medibase with different user accounts



Scenario Outline: Login with multiple set of data

Given I navigate to meddbase login page
When I enter username as "<Username>"
And I enter password  as "<Password>"
And I click on sign in button
And I click on log out button


Examples: 

|Username|Password|
|teena@bananaapps.co.uk|Bananaapps123|
|test123@test.com|invalid|