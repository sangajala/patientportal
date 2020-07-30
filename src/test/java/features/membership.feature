
Feature:Verify Patient can enroll for  monthly membership while Registration

  Patient will enroll for monthly membership while Registration
  then Patient should be able to see monthly LGP membership scheme in membership page

  @madhavi
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
      | Email Address       |  <Email address>      |
      | Postcode            | <Postcode>            |
      | Mobile Phone Number (required) | <Mobile Phone Number> |
    And click on Next button
    Then User should be in Confirm details page

    Examples:
      | Test cases          | Password       | First Name | Last Name | Day | Month | Year |          Email address         | Postcode | Mobile Phone Number |
      | Verify invite code  |Bananaapps123$  |    sree    | lella     |  20 |   Aug | 1985 | lellasreelakshmi123@gmail.com |SL3 8DD |     07543571654        |




  @madhavi
  Scenario: Verify that patient should be able to see available membership schemes
    Given Patient was on login page
    When Patient click on signup button
    Then Patient should be navigated to invite code page and able to see "see our memberships scheme" option
    When Patient click on see our membership scheme button
    Then Patient should be navigated to membership page with "Memberships" title
    And  Patient should be able to view monthly and annual schemes "LGP_MonthlyScheme" and "LGP_AnnualScheme"

  @madhavi
  Scenario:verify Patient can view membership details

    Given Patient was on homepage
    When Patient clicks on "Memberships" in menu
    Then he should be able to view the following details with title "Current Membership"
      |Billing frequency: Monthly|
      |Net Price: 50 £|
      |  VAT: 10 £     |
      |Gross Price: 60 £|

  @madhavi
  Scenario:verify that Patient can view Invoice for the new Membership is generated

    Given Patient was on login page
    When  patient logged in using new patient login credentials
    Then  patient should be in home page
    When Patient clicks on Invoices in left menu
    Then Patient should be able to view new invoice in his invoices list
    When click on first invoice
    Then patient should be able to view the following details of invoice as
      | 'LGP Membership scheme' |
      | Net Price: £90                                                       |
      | Tax (VAT): £0                                                        |
      | Gross Price: £90                                                     |

  @madhavi
  Scenario: Verify that patient with existing membership account cannot enrol for membership after login to the application
    Given Patient was on login page
    When  patient looged in using login credentials
    Then  patient should be in home page
    When  patient click on back button
    Then  patient should be in signin page
    When   Patient click on signup button
    Then Patient should be navigated to invite code page and able to see "see our memberships scheme" option
    When Patient click on see our membership scheme button
    Then Patient should be navigated to membership page with "Memberships" title
    And  a message "There are no membership schemes available." should be displayed





  @ignore
  Scenario Outline:Verify user would be able to enroll for membership
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

      | Password                       | <Password>            |
      | First Name                     | <First Name>          |
      | Last Name                      | <Last Name>           |
      | Day                            | <Day>                 |
      | Month                          | <Month>               |
      | Year                           | <Year>                |
      | Email Address                  | <Email address>       |
      | Postcode                       | <Postcode>            |
      | Mobile Phone Number (required) | <Mobile Phone Number> |
    And click on Next button
    Then User should be in Confirm details page
    When Patient clicks on  confirm button
    Then patient should go to "Activation Code" page
    And  patient should get the activation code to the "preffered channel"
    And  patient fills the activation code
    Then The registration is successful
    Examples:
      | Password       | First Name | Last Name | Day | Month | Year | Email address                 | Postcode | Mobile Phone Number | preffered channel        |
      | Bananaapps123$ | sree       | lella     | 20  | Aug   | 1985 | lellasreelakshmi123@gmail.com | SL3 8DD  | 07543571654         | registered Email         |
      | Bananaapps123$ | sree       | lella     | 20  | Aug   | 1985 | lellasreelakshmi123@gmail.com | SL3 8DD  | 07543571654         | registered mobile number |



  @ignore
  Scenario: Verify the patient with account can leave the membership from portal after login


  @ignore
  Scenario:Verify "Lookup Address" is getting address information based on post code and door number

    Given Patient was on login page
    When Patient click on signup button
    Then Patient should be navigated to invite code page and able to see "see our memberships scheme" option
    When Patient click on see our membership scheme button
    Then Patient should be navigated to membership page with "Memberships" title
    When Click on LGP membership scheme button
    Then Patient should be able to view monthly membership scheme
    When Patient select monthly scheme and click on Apply for Membership button
    Then Patient should be navigated to disclaimer page with "Disclaimer" and "Fees"
    When Patient accept conditions and click on Apply for Membership
    When patient enter his house number as "46" and postcode as "tw4 7nf"
    And  click on Lookup Address button
    Then patient should see his address "46 Great South West Road" is displayed in Address field
