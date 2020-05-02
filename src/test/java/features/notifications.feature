Feature:Verifying notifications generated under notifications icon and in home page notification panel
  when booking and cancelling appointments and when receiving message from admin portal.



  Scenario Outline:Patient can view appointment notification and invoice in notifications icon and  in home page notifications panel
  when he/she book new appointment

    Given Patient was on homepage
    And gets the count of notifications in home page notification panel
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
    When Patient clicks on Book Appointment button on Details Page
    Then Appointment Booking Complete confirmation message "was successfully completed" should be displayed
    When Patient clicks on Online Portal
    Then Patient should view appointment notification and invoice for newly booked appointment in homepage notifications panel
    When Patient clicks on Notifications icon and clicks on All Notifications in dropdown menu
    Then Patient should view appointment notification and invoice for newly booked appointment in notifications
    Examples:
      | Payer type | Appointment type |
      | Patient    | Consultation |

  Scenario:Patient can not view appointment notification and invoice of existing appointment in notifications
  when he/she cancel that appointment
    When Patient was on homepage
    And gets the count of notifications in home page notification panel
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
    Then Patient should not view appointment notification and invoice for cancelled appointment in homepage
    When Patient clicks on Notifications icon and clicks on All Notifications in dropdown menu
    Then Patient should not view appointment notification and invoice for cancelled appointment in all notifications