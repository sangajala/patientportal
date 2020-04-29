Feature:Verify user can enroll for  monthly membership while Registration
As a user
  I will enroll for monthly membership while Registration
  then I should be able to see monthly LGP membership scheme in membership page

  Scenario Outline:
    Given As end user I was on login page
    When I click on signup button
    Then I should be navigated to invite code page and able to see "see our memberships scheme" option
    When I click on see our membership scheme button
    Then I should be navigated to membership page
    When I click on LGP membership scheme button
    Then I should be able to view monthly membership scheme
    When I select monthly scheme and click on Apply for Membership button
    Then I should be navigated to disclaimer page with "Disclaimer" and "Fees"
    When I accept conditions and click on Apply for Membership
    Then I should be navigated to register page with title "Register"
    And provide below details for registration

      | Password            | <Password>            |
      | First Name          | <First Name>          |
      | Last Name           | <Last Name>           |
      | Day                 | <Day>                 |
      | Month               | <Month>               |
      | Year                | <Year>                |
      | Email Address        | <Email address>       |
      | Postcode            | <Postcode>            |
      | Mobile Phone Number (required) | <Mobile Phone Number> |
    And click on Next button
    Then should  be able to see the "<Error Message>"



    Examples:
      | Test cases          | Password       | First Name | Last Name | Day | Month | Year |          Email address         | Postcode | Mobile Phone Number |Error Message|
      | Verify invite code  |Bananaapps123$  |    sree    | lella     |  20 |   Aug | 1985 | lellasreelakshmiabc@gmail.com  |SL3 8DD |                    |Online Portal page is opened|



Scenario:As I subscribed for monthly membership scheme I can able to view the monthly membership details

  #Given I logged in and I was on homePage
 # When  I click on "Memberships" in menu
  #Then I should be able to view current monthly membership scheme in membership page