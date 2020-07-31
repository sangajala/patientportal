@valar
Feature: Medical history

#  Verify the User should be able to view the medical history.
#  Verify user should see 'No results' message on the page.
#  Verify that if no documents message is shown if no documents - vaccination
#  Verify that if no documents message is shown if no prescription -prescription
#  Verify that if no documents message is shown if no documents - document
#  verify that user can download the document
#  verify that user can preview the document

#  happy 3

#  list of vaccination

#  list of pres

#  document - preview
#  document download

#  unhappy 100000000000

#  user - all three
#  user - dont have any of them

  @smoke@regression@medicalhistory

  Scenario Outline: Verify that the history available for all types of medical history
    Given Patient launch the browser
    Given patient with all full medical history logs into the portal
    When Patient clicks on "Medical History" in menu
    Then the medical history page should have below options
      | Prescription (Acute) |
      | Vaccination          |
      | Document             |
    When he navigate to "<Section>"
    Then he should see record with title "<Item Title>"
    When he navigate to "<Item Title>"
    Then he should see record with title "<Field Title>"
    Then he should see record with detail "<Field Details>"

    Examples:
      | Section              | Item Title                            | Field Title               | Field Details                                                            |
      | Prescription (Acute) | Prescription for Lord Nazim, Muhammad | Drug to prescribe (Acute) | Alvita absorbent cotton BP 1988 (Alliance Healthcare (Distribution) Ltd) |
      | Prescription (Acute) | Prescription for Lord Nazim, Muhammad | Quantity                  | 1                                                                        |
      | Vaccination          | Vaccination for Lord Nazim, Muhammad  | Vaccination               | Flu Vaccination                                                          |
      | Document             | Test Document.docx                    |                           | Download                                                                 |


  #Verify that if patient does not have medical History then he/she should see 'no records' message on the page
   Scenario Outline: Verify that if patient does not have medical History then he/she should see no records message on the page
    Given Patient launch the browser
     When Patient enters username as "<username>"
     And password as "<password>"
     And  Patient signin to portal
     Then Patient is navigated to patient portal home page
    When Patient navigate to "Medical History" page
    Then Patient will see no records message

     Examples:
       |username | password|
       |valarmathiuk@gmail.com|Valar65649|


    Scenario Outline: Verify that patient does not have any one of the (document or prescription or vaccination)
    then he/she should not see that option
    Given Patient launch the browser
    When Patient enters username as "<username>"
    And password as "<password>"
    And  Patient signin to portal
    Then Patient is navigated to patient portal home page
    When Patient navigate to "Medical History" page
    Then the medical history page should have "<Item1>"
    And the medical history page should have "<Item2>"
    And Patient should not see the "<Item3>"
    And Patient should not see the "No records found message"

    Examples:
    |Item1                | Item2              | Item3       |username | password|
    |Vaccination          |Prescription (Acute)|  Document   |teena@bananaapps.co.uk|London12|
    |Document             |Prescription (Acute)| Vaccination |avi@hotmail.com       |London12|
    |Vaccination          |Document            |Prescription (Acute)|chhabra.teena@gmail.com|London12|


  Scenario Outline: Verify that patient does not have any two of the (document or prescription or vaccination)
  then he/she should not see corresponding options
    Given Patient launch the browser
    When Patient enters username as "<username>"
    And password as "<password>"
    And  Patient signin to portal
    Then Patient is navigated to patient portal home page
    When Patient navigate to "Medical History" page
    Then the medical history page should have "<Item1>"
    And Patient should not see the "<Item2>"
    And Patient should not see the "<Item3>"
    And Patient should not see the "No records found message"

    Examples:
      |Item1                | Item2              | Item3       |username | password|
     |Document              |Prescription (Acute)|Vaccination |roopaworld@yahoo.com|Meddbaselogin1|
     |Vaccination           |Document            |Prescription (Acute|mksirish@yahoo.com|London12|
      |Prescription (Acute) |Document            |Vaccination |gade.sailus@gmail.com|London12     |




