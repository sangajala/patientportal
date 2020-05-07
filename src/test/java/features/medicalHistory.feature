Feature: Medical history


  @smoke@regression@medicalhistory
  Scenario Outline: Verify that the history available for all types of medical history
    Given Patient launch the browser
    Given patient with all full medical history logs into the portal
    When Patient clicks on "Medical History" in menu
    Then the medical history page should have below options
      | Prescription (Acute) |
      | Vaccination          |
      | Documents            |
   When he navigate into "<Section>"
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
