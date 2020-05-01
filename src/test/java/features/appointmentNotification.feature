Feature:  View Appointment Notification in MedDbase Patient portal



   @first
    Scenario:Patient can view the recently booked appointment in the homepage
     Given Patient was on homepage
     When Patient clicks on Book Appointment
     And  chooses Payer Type as "<Payer type>"
     And  Appointment Type as "<Appointment type>"
     Then Patient should be navigated to Appointment filters page and see a message "Please use the filters if you wish to refine your search"
     When Patient clicks on Search button
     Then Appointment search Results should be displayed
     When Patient clicks on "1" available appointment details
     Then Patient sees a message "The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours." on Appointment Details page
     And get appointment details
     When Patient clicks on Book Appointment button on Details Page
     Then Appointment Booking Complete confirmation message "was successfully completed" should be displayed
     When Patient clicks on Online Portal
     And Patient clicks on "1" notification in notification panel
     Then Patient should be able to view recently Booked Appointments with a message "In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed."
     When Patient clicks on "1" available existing Appointment details
     Then Patient should be able to view the recently booked appointment

  @sriram
  Scenario: Appointment notification icon and the count validation
    When then reads the count of the icon
    When The patient logs off and login again
    And  The count in the icon should be increased by one