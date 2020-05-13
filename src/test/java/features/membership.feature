
Feature:Verify Patient can enroll for  monthly membership while Registration

  Patient will enroll for monthly membership while Registration
  then Patient should be able to see monthly LGP membership scheme in membership page

  Scenario Outline: Patient can enroll for monthly membership while registration
    Given Patient was on login page
    When Patient click on signup button
    Then Patient should be navigated to invite code page and able to see "see our memberships scheme" option
    When Patient click on see our membership scheme button
    Then Patient should be navigated to membership page with "Memberships" title
    When  Click on LGP membership scheme button
    Then Patient should be able to view monthly membership scheme
    When Patient select monthly scheme and click on Apply for Membership button
    Then Patient should be navigated to disclaimer page with "Disclaimer" and "Fees"
    When Patient accept conditions and click on Apply for Membership
    Then Patient should be navigated to register page with title "Register"
    And provide below details for registration

      | Password            | <Password>            |
      | First Name          | <First Name>          |
      | Last Name           | <Last Name>           |
      | Day                 | <Day>                 |
      | Month               | <Month>               |
      | Year                | <Year>                |
      | Email Address       |  <Email address>     |
      | Postcode            | <Postcode>            |
      | Mobile Phone Number (required) | <Mobile Phone Number> |
    And click on Next button
    Then User should be in Confirm details page

    Examples:
      | Test cases          | Password       | First Name | Last Name | Day | Month | Year |          Email address         | Postcode | Mobile Phone Number |
      | Verify invite code  |Bananaapps123$  |    sree    | lella     |  20 |   Aug | 1985 | lellasreelakshmi123@gmail.com |SL3 8DD |     07543571654        |


@details
Scenario:verify Patient can view membership details

  Given Patient was on homepage
  When Patient clicks on "Memberships" in menu
  Then he should be able to view the following details with title "Current Membership"
    |Billing frequency: Monthly|
    |Net Price: 50 £|
    |  VAT: 0 £     |
    |Gross Price: 50 £|

