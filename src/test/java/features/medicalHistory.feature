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



