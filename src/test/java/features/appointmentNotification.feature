Feature:  View Appointment Notification in MedDbase Patient portal

  Background:
    Given Patient is in the Patient portal homepage

   @first
    Scenario: Appointment notification to be seen in the homepage
     Then Patient should be able to view the recently booked appointment


  @sriram
  Scenario: Appointment notification icon and the count validation
    When then reads the count of the icon
    When The patient logs off and login again
    And  The count in the icon should be increased by one