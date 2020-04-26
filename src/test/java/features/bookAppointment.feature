Feature: End to end functions of booking and viewing Appointments in patient portal
  Background:
    Given Patient navigates to Meddbase Patient Portal Login Page
   # When patient enters username as "lakshmi@bananaapps.co.uk" Password as "Bananaapps2"
    When patient enters username as "mail4vijaya@gmail.com" Password as "Meddbase1234"
    And clicks on Signin
    Then Patient should be navigated to Meddbase Patient Portal Homepage


  @defaultsearch@smoke
  Scenario Outline: Booking an appointment by default search

  When Patient clicks on Book Appointment
    And  chooses Payer Type as "<Payer type>"
    And  Appointment Type as "<Appointment type>"
    Then Patient should be navigated to Appointment filters page and see a message "Please use the filters if you wish to refine your search"
    When Patient clicks on Search button
    Then Appointment search Results should be displayed
    When Patient clicks on "1" available appointment details
    Then Patient sees a message "The patient will be charged £35.00 if you cancel the appointment within 1 hours." on Appointment Details page
   #Then Appointment Details page should be opened
    When Patient clicks on Book Appointment button on Details Page
    Then Appointment Booking Complete confirmation message "was successfully completed" should be displayed

    Examples:
      | Payer type | Appointment type |
     #| Patient    | Consultation     |
     | Patient    | Phone Consultation |
      #| Patient    | Video Conference   |
     # | Insurer    | Consultation     |
     # | Insurer | Phone Consultation |


  @BookByAppointmentFilters
  Scenario Outline: Booking an Appointment using Appointment Filters

    When Patient clicks on Book Appointment
    And chooses Payer Type as "<Payer type>"
    And Appointment Type as "<Appointment type>"
    Then Patient should be navigated to Appointment filters page and see a message "Please use the filters if you wish to refine your search"
    When Patient clicks on Preferred Clinician
    And chooses  Preferred Clinician  as "<Clinician>"
    When Patient clicks on Preferred Site
    And  chooses Preferred Site as "<Site>"
    When Patient clicks on Preferred Time and Date
    And chooses Preferred Time and Date as "<Time>"  "<Date>"
    When Patient clicks on Search button
    Then Appointment search Results should be displayed
    When Patient clicks on "1" available appointment details
    Then Patient sees a message "The patient will be charged £35.00 if you cancel the appointment within 1 hours." on Appointment Details page
      #When Patient clicks on appointment details
   # Then Appointment Details page should be opened
    When Patient clicks on Book Appointment button on Details Page
    Then Appointment Booking Complete confirmation message "was successfully completed" should be displayed
    #Then Appointment Booking Complete confirmation message should be displayed

    Examples:
      | Payer type | Appointment type | Clinician     | Site          | Time      | Date       |
      | Patient    | Consultation     | Any Clinician | Work location | Afternoon   | 10/01/2020 |
     # | Insurer    | Consultation     | Kaaru kaaru    | Work Location | Afternoon | 03/01/2020 |


  @viewExistingAppointments
  Scenario:  Patient can view Existing Appointments

    When Patient clicks on Existing Appointments
    Then Patient should be able to view recently Booked Appointments with a message "In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed."

  @cancelAppointment
  Scenario: Cancel an Existing Appointment
    When Patient clicks on Existing Appointments
    Then Patient should be able to view recently Booked Appointments with a message "In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed."
    When Patient clicks on "1" available existing Appointment details
    Then Cancel Appointment button should be visible
    When Patient clicks Cancel Appointment button
    Then Cancel Info Page with a message "Cancellation fee" should be displayed
    When Patient clicks on Cancel Appointment button on Cancel Info page
    Then Appointment successfully cancelled message "successfully cancelled"should be displayed

  @chkForIncreaseinCountOfExistingApptmntAndCountOfUpcomingAppointmentsAfterBookApptmt
  Scenario Outline: To check the existing appointments count increases once a new appointment is booked
    When Patient clicks on Online Portal
    Then gets the count of upcoming Appointment notifications
    When Patient clicks on Existing Appointments
    Then Patient should be able to view recently Booked Appointments with a message "In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed."
    And gets the count of existing appointments
    When  Patient clicks on Book Appointment
    And  chooses Payer Type as "<Payer type>"
    And  Appointment Type as "<Appointment type>"
    Then Patient should be navigated to Appointment filters page and see a message "Please use the filters if you wish to refine your search"
    When Patient clicks on Search button
    Then Appointment search Results should be displayed
    When Patient clicks on "1" available appointment details
   # Then Patient sees a message "The patient will be charged £35.00 if you cancel the appointment within 1 hours." on Appointment Details page
    Then Patient sees a message "The patient will be charged at 10% of the full price plus £35.00 fixed fee if you cancel the appointment within 1 hours." on Appointment Details page
   #Then Appointment Details page should be opened
    When Patient clicks on Book Appointment button on Details Page
    Then Appointment Booking Complete confirmation message "was successfully completed" should be displayed
    Then Patient clicks on Existing Appointments
    Then the count of existing appointments should increase
    Then Patient clicks on Online Portal
    Then the count of upcoming appointments should increase

    Examples:
      | Payer type | Appointment type |
     | Patient    | Consultation     |
     # | Patient    | Phone Consultation |
      #| Patient    | Video Conference   |
     # | Insurer    | Consultation     |
     # | Insurer | Phone Consultation |

  @chkForDecreaseinCountOfExistingApptmntAndCountOfUpcomingAppointmentsAfterCancelApptmt
  Scenario: To check the existing appointments count decreases once a booked appointment is cancelled
    When Patient clicks on Online Portal
    Then gets the count of upcoming Appointment notifications
    When Patient clicks on Existing Appointments
    Then Patient should be able to view recently Booked Appointments with a message "In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed."
    And gets the count of existing appointments
    When Patient clicks on "1" available existing Appointment details
    Then Cancel Appointment button should be visible
    When Patient clicks Cancel Appointment button
    Then Cancel Info Page with a message "Cancellation fee" should be displayed
    When Patient clicks on Cancel Appointment button on Cancel Info page
    Then Appointment successfully cancelled message "successfully cancelled"should be displayed
    Then Patient clicks on Existing Appointments
    Then the count of existing appointments should decrease
    Then Patient clicks on Online Portal
    Then the count of upcoming appointments should decrease



