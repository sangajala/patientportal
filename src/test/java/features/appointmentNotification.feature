Feature:  verifying appointment notification in home page notifications

  @first
  Scenario Outline:Patient can view the earliest booked appointment in the homepage notifications as the first notification in the list
    Given Patient was on homepage
    When Patient clicks on Book Appointment
    And  chooses Payer Type as "<Payer type>"
    And  Appointment Type as "<Appointment type>"
    Then Patient should be navigated to Appointment filters page and see a message "Please use the filters if you wish to refine your search"
    When Patient clicks on Search button
    Then Appointment search Results should be displayed
    When Patient clicks on "1" available appointment details
    Then Patient sees a message "The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours." on Appointment Details page
    And get appointment type from details page
    When Patient clicks on Book Appointment button on Details Page
    Then Appointment Booking Complete confirmation message "was successfully completed" should be displayed
    When Patient clicks on Online Portal
    Then He should view booked appointment notification in homePage notifications

    Examples:
      | Payer type | Appointment type |
      | Patient    | Consultation     |


