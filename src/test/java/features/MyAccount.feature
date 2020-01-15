
Feature: Patient Portal MyAccount Features

  Background:
    Given Patient launch the browser
    When Patient enters username as "mail4vijaya@gmail.com"
     And password as "Meddbase1234"
    And  Patient click on  signin button
    Then Patient is navigated to patient portal home page

  @myaccount
  Scenario Outline: Patient information,Address and Contact details are auto populated
  and enters all the Next Kin details

    When Patient Choose  MyAccount
    And patient clicks MyAccount
    And clear the input data in the form
    #clear
    And Patient enters Firstname as "<FirstName>"
    And Surname as "<Surname>"
    And Patient enters Relationship as "<Relationship>" and TelephoneNumber as "<TelephoneNumber>"

    And Patient enters Address1 as "<Address1>" and City as "<City>"
    And Patient enters Country as "<Country>" and Postcode as "<Postcode>"
    And  Patient enters Password as "<password>"
    And select Save Changes button
    Then Message is displayed Account Updated Successfully
    Then patient is logggedout
    When patient logged in back
   Then patient should see the account page being updated
    #Then data updated should be "<FirstName>,<Surname>,<Relationship>,<Address1>,<City>,<Country>,<Postcode>,<password>"

    Examples:
      | FirstName | Surname | Relationship | password     | TelephoneNumber | Address1        | City   | Country | Postcode |
      | sadaf     | hashim | Mother       | Meddbase1234 | 0789789789      | 1 colyton close | London | UK      | HA0 2HG  |


    @options
  Scenario Outline: Patient have option to  select preferred contact method

    When Patient Choose  MyAccount
    And patient clicks MyAccount
    And Patient checked the Email checkbox for Appointment booked confirmation
    And Patient  checked the SMS checkbox for Appointment booked confirmation
    And Patient enters Password as "<password>"
    And select Save Changes button
    Then  "Account Updated Successfully" message is displayed

    Examples:
      | password     |
      | Meddbase1234|