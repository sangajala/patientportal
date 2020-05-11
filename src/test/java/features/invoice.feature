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
