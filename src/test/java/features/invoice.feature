Feature:Patient Portal Invoices

@first
  Scenario: Patient is able to generate invoice as PDF and received invoice on registered Email ID
      Given Patient logged in
      When Patient clicks on "Invoices" in menu
      When patients clicks on all invoices
      When Patient select first invoice that appears on the search result
      Then  Patient is navigated to Invoice Details page
      And  Patient clicks on E-mail PDF invoice button
      Then Success Invoice was sucessfully sent to your email address message is displayed
      When  Patient select Back button
      Then patient is navigated back to Invoice page

@second
  Scenario: Patient is able to generate UnPaid invoice as PDF and received UnPaid invoice on registered Email ID
  Given Patient logged in
    When Patient clicks on "Invoices" in menu
    When patient clicks on unpaid invoices
    When Patient select first UnPaid invoice that appears on the search result
    Then  Patient is navigated to Invoice Details page
    And  Patient clicks on E-mail PDF invoice button
    Then Success Invoice was sucessfully sent to your email address message is displayed
    When  Patient select Back button
    Then patient is navigated back to Invoice page
  @invoice
   Scenario Outline: Patient is able to see Invoice Details for UnPaid invoice
     Given Patient logged in
     When  Patient clicks on "Invoices" in menu
     When patient clicks on unpaid invoices
     When Then Patient is navigated to Invoice Details page with number "1456"
     Then Patient is able to see "<Invoice Details>""<Item details>"
     Examples:
    |  Invoice Details   | Item details    |
    |12/05/2020 - No: 1456 | Net Price: £500|

  @paidInvoice
    Scenario Outline: Patient is able to see Invoice Details for Paid invoice
      Given  Patient logged in
      When  Patient clicks on "Invoices" in menu
      When patient clicks on paid invoices
      When Then Patient is navigated to Invoice Details page with number "872"
      Then Patient is able to see "<Invoice Details>""<Item details>"
      Examples:
        |  Invoice Details   |Item details    |
        | 23/03/2020 - No: 872|Net Price: £250|

@reg
  Scenario Outline: Patient is able to see Invoice when book an appointment
    Given Patient logged in
    When Patient clicks on Book Appointment
    And chooses Payer Type as "<Payer type>"
    And Appointment Type as "<Appointment type>"
    Then Patient should be navigated to Appointment filters page and see a message "Please use the filters if you wish to refine your search"
    When  Patient clicks on Preferred Clinician
    And chooses  Preferred Clinician  as "<Clinician>"
    When Patient clicks on Preferred Site
    And  chooses Preferred Site as "<Site>"
    When Patient clicks on Preferred Time and Date
    And chooses Preferred Time and Date as "<Time>"  "<Date>"
    When Patient clicks on Search button
    Then Appointment search Results should be displayed
    When Patient clicks on "1" available appointment details
    And Patient clicks on Book Appointment button on Details Page
    Then Appointment Booking Complete confirmation message "was successfully completed" should be displayed
    When Patient clicks on "Invoices" in menu
    And patient clicks on unpaid invoices
    And Patient select first UnPaid invoice that appears on the search result
    Then Patient should able to see "<Appointment type>"

    Examples:
      | Payer type | Appointment type | Clinician     | Site          | Time      | Date       |
      | Patient    | Health Screen     | Any Clinician | Work location | Afternoon   | 20/05/2020 |
