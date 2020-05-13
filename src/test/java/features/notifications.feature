Feature:Verifying notifications generated when booking and cancelling appointments and verifying
  incoming messages under notifications icon and in notifications page

  Scenario Outline:Patient can view appointment notification and invoice in notifications under notification icon and  in notifications page
  when he/she book earliest appointment

    Given Patient was on homepage
    And gets the number on notification icon
    And gets the count of notifications by accessing notification icon
    When Patient clicks on Online Portal
    And Patient clicks on Book Appointment
    And  chooses Payer Type as "<Payer type>"
    And  Appointment Type as "<Appointment type>"
    Then Patient should be navigated to Appointment filters page and see a message "Please use the filters if you wish to refine your search"
    When Patient clicks on Search button
    Then Appointment search Results should be displayed
    When Patient clicks on "1" available appointment details
    Then Patient sees a message "The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours." on Appointment Details page
    And get appointment type from details
    When Patient clicks on Book Appointment button on Details Page
    Then Appointment Booking Complete confirmation message "was successfully completed" should be displayed
    When Patient clicks on Online Portal
    Then the number on notification icon should be increased by refreshing the page
    When Patient clicks on Notifications icon
    Then He should view booked "appointment" notification in notifications
    When He clicks on All Notifications link in dropdown menu
    Then He should view appointment notification and invoice for newly booked appointment in notification page
    Examples:
      | Payer type | Appointment type |
      | Patient    | Consultation |


  Scenario:Patient can not view appointment notification and invoice of existing appointment in notifications page
  when he/she cancel that appointment
    Given Patient was on homepage
    And gets the number on notification icon
    And gets the count of notifications by accessing notification icon
    When Patient clicks on Online Portal
    When Patient clicks on Existing Appointments
    Then Patient should be able to view recently Booked Appointments with a message "In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed."
    And  gets the count of existing appointments
    When Patient clicks on "1" available existing Appointment details
    Then Cancel Appointment button should be visible
    When Patient clicks Cancel Appointment button
    Then Cancel Info Page with a message "Cancellation fee" should be displayed
    When Patient clicks on Cancel Appointment button on Cancel Info page
    Then Appointment successfully cancelled message "successfully cancelled"should be displayed
    When Patient clicks on Online Portal
    Then the number on notification icon should be decreased by refreshing the page
    When Patient clicks on Notifications icon
    And He clicks on All Notifications link in dropdown menu
    Then He should not view appointment notification and invoice for cancelled appointment in notification page

  Scenario: Patient can view incoming message in notification page
    Given Patient was on homepage
    When Patient clicks on Notifications icon
    And He clicks on All Notifications link in dropdown menu
    Then Patient should be able to view incoming message notification
