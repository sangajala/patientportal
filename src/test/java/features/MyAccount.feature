Feature: Patient Portal MyAccount Features

  @Nam
  Scenario Outline: Verify Patient can update his/her personal information

    Given Patient launch the browser
    When patient with my account login to the portal
    And Patient choose MyAccountImage
    When Patient Choose MyAccount
    And clear the input data in the form
    And clear Date of Birth in the form
    And Patient enters Firstname as "<Firstname>"
    And Surname as "<Surname>"
    And Patient enters day of the DOB "<Day>"
    And selects month by using drop down "<Month>"
    And Enters year as "<Year>"
    And Patient enters Address1 as "<Address1>" and City as "<City>"
    And Patient enters Country as "<Country>"
    And Enters Postcode as "<Postcode>"
    And Patient enters NextToKin name as "<NameOfKin>"
    And Patient enters NextToKin surname as "<SurnameOfKin>"
    And Patient enters Relationship as "<Relationship>" and NextToKin TelephoneNumber as "<TelephoneNumber>"
    And Patient enters contact details as "<Mobile Number>"
    And Enters telephoneNumber "<PatientTelephoneNumber>"
    And Patient in my account page enters Password
    And select Save Changes button
    Then Message is displayed Account Updated Successfully
    Then patient should see the account page firstname updated as "<Firstname>"
    And Patient should see the account page surname updated as "<Surname>"
    Then patient is logggedout
    When patient logged in back
    Then patient should see the account page firstname updated as "<Firstname>"
    And Patient should see the account page surname updated as "<Surname>"


   # Then data updated should be "<Firstname>,<Surname>,<Relationship>,<Address1>,<City>,<Country>,<Postcode>"

    Examples:
      | Firstname | Surname |NameOfKin|SurnameOfKin| Relationship  | TelephoneNumber | Address1        | City   | Country | Postcode |Day |Month| Year  |Mobile Number|PatientTelephoneNumber|
      | Aman     | hashim  | Anita   |    Dhirde  |Mother         | 0789789789      | 1 colyton close | London | UK      | HA0 2HG  |01 |Mar   |2012  |07553678095  |07911 123456          |


  @Nam
  Scenario: Patient have option to  select preferred contact method
    Given Patient launch the browser
    When patient with my account login to the portal
    And Patient choose MyAccountImage
    When Patient Choose MyAccount
    And Patient checked the Email checkbox for Appointment booked confirmation
    And Patient checked the SMS checkbox for Appointment booked confirmation
    And Patient in my account page enters Password
    And select Save Changes button
    Then Message is displayed Account Updated Successfully

  @Nam
  Scenario Outline: Validations for mandatory fields
    Given Patient launch the browser
    When patient with my account login to the portal
    And Patient choose MyAccountImage
    When Patient Choose MyAccount
    And clear the input data in the form
    And clear Date of Birth in the form
    And Patient enters Firstname as "<Firstname>"
    And Surname as "<Surname>"
    And Patient enters day of the DOB "<Day>"
    And selects month by using drop down "<Month>"
    And Enters year as "<Year>"
    And Enters Postcode as "<Postcode>"
    And Enters email as "<Email Address>"
    And Patient enters contact details as "<Mobile Number>"
    And Patient in my account page enters Password
    And select Save Changes button
    Then Patient should be able to see the error message "<Error Message>"

    Examples:
      |  Firstname |Surname   | Day | Month | Year | Postcode   | Email Address            | Mobile Number | Error Message |
      | Test        |  User      | 1   |  Mar |2012  |          |    valarmathiuk@gmail.com | 07834771592 |Validation: a home postcode must be specified |
      | Test        |  User      | 1   |  Mar  |2012  | NN4 7PA  |teena@bananaapps.co.uk| 07834771592  |Validation: the email address must be unique.|
      | Test        |  User      | 1   |  Mar  |2012  | NN4 7PA  |valarmathiuk@         | 07834771592  |Email address isn't valid.                    |
      | Test        |  User      | 1   |  Mar  |2012  | NN4 7PA  | valarmathiuk@gmail.com| 9876a        |The phone number includes unexpected characters.|
      | Test        |  User      | 1   |  Mar  |2012  | NN4 7PA  | valarmathiuk@gmail.com| 0783477159222222222  |The phone number isn't valid.           |
      | Test        |  User      | 1   |  Mar  |2012  | NN4 7PA  | valarmathiuk@gmail.com| 0783477159222222222222222222222 |The phone number is too long.|
   #  | Test        |  User      | 20  |  Mar |2020 | NN4 7PA  |  valarmathiuk@gmail.com | 07834771592  |Invalid Date Of Birth        |
   #  | 1234       | User      | 01  | Mar    | 2012 | NN4 7PA |  valarmathiuk@gmail.com|07834771592   | Invalid Name |
   #  | Test       | 1234      | 01  | Mar    | 2012 | NN4 7PA |  valarmathiuk@gmail.com|07834771592   | Invalid Surname |
   #  | @nam       | User      | 01  | Mar    | 2012 | NN4 7PA |  valarmathiuk@gmail.com|07834771592   | Invalid Name |
   #  |Test      | @ran      | 01  | Mar    | 2012 | NN4 7PA |  valarmathiuk@gmail.com|07834771592   | Invalid Surname |

  @Nam
  Scenario Outline: Verify if the Address field accepts address outside the UK

    Given Patient launch the browser
    When patient with my account login to the portal
    And Patient choose MyAccountImage
    When Patient Choose MyAccount
    And clear the input data in the form
    And Patient enters Firstname as "<Firstname>"
    And Surname as "<Surname>"
    And Patient enters Address1 as "<Address1>" and City as "<City>"
    And Patient enters Country as "<Country>"
    And Enters Postcode as "<Postcode>"
    And Patient in my account page enters Password
    And select Save Changes button
    Then Patient should be able to see the error message "<Error Message>"

    Examples:
      | Firstname | Surname   | Address1   | City       | Country |Postcode |Error Message  |
      | sadaf     | hashim    |24/16       |Mohammadpur | Dhaka  | 1207     |Invalid Address  |
      | sadaf     | hashim    |Renuka Niwas|Pune        | India  | 411038   |Invalid Address  |

  @Nam
  Scenario Outline: Validations for Password

    Given Patient launch the browser
    When patient with my account login to the portal
    And Patient choose MyAccountImage
    When Patient Choose MyAccount
    And clear the input data in the form
    And clear Date of Birth in the form
    And Patient enters Firstname as "<Firstname>"
    And Surname as "<Surname>"
    And Patient enters day of the DOB "<Day>"
    And selects month by using drop down "<Month>"
    And Enters year as "<Year>"
    And Enters Postcode as "<Postcode>"
    And Enters email as "<Email Address>"
    And Patient enters contact details as "<Mobile Number>"
    And Patient enters Password as "<Password>"
    And select Save Changes button
    Then Patient should be able to see the error message "<Error Message>"

    Examples:
      |  Firstname |Surname   | Day | Month | Year | Postcode | Email Address            |Password| Mobile Number | Error Message |
      | Test       |  User    | 1   |  Mar |2012  | NN4 7PA   |    valarmathiuk@gmail.com |         | 07834771592 |password isn't set. |
      | Test       |  User    | 1   |  Mar |2012  | NN4 7PA   |    valarmathiuk@gmail.com |London12 | 07834771592 |Incorrect password |
