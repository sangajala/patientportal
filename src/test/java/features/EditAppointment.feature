Feature: Verifying Edit Appointment functionality

  In Order to edit the Appointment
  As a Admin
  I need to have Booked Appointment

  Scenario Outline: Editing Appointment Date, Time, Site, AppointmentType, Doctor, Comments by Admin successfully

    Given Admin navigate to url "https://thedoctorsportal.com/"
    When  Admin enter username password
      | username      | password   |
      | Admin@lgp.com | Admin@123$ |
    And   Admin click on submit button to login to admin portal
    Then  Admin should be navigate to home page
    When Admin click on Appointments from left side panel and select Book Appointment
    Then Admin should be navigate to Book Appointment screen
    When  Admin select date '30-12-2020'
    And   Admin select site 'In Hours'
    And   Admin select Time '10:00'
    And   Admin select patient 'James Wood'
    And   Admin select AppointmentType 'Consultation'
    And   Admin select DoctorName 'Dr. Lakshmi'
    And   Admin enter comments 'Hi Doctor, This is James'
    And   Admin click submit button
    Then  Admin should get validation message
    And   Booking should be updated in All Appointment screen with Confirmed status
    When  Admin click on Appointments and select All Appointments
    And   Admin select the same appointment and click edit icon for particular booking
    Then  Admin should navigate to edit Appointment screen
    When  Admin edit "<date>"
    And   Admin edit "<site>"
    And   Admin edit "<Time>"
    And   Admin edit "<patient>"
    And   Admin edit "<AppointmentType>"
    And   Admin edit "<DoctorName>"
    And   Admin edit "<comments>"
    And   Admin click on submit button
    Then  Admin should get a validation message "Appointment updated successfully"
    And   Admin able to see updated data on the corresponding booking

    Examples:
      | date       | site         | Time  | patient     | AppointmentType | DoctorName  | comments                 |
      | 29-12-2020 | Out of Hours | 9:00  | James Woods | Health Screen   | Dr. Lakshmi | Hi Doctor, This is James |
      | 29-12-2020 | In Hours     | 22:30 | James Woods | Consultation    | Dr. Lakshmi | Hi Doctor, This is James |

  Scenario Outline: Verify Admin can not edit the booking time to with in 2 hours from current time

    Given Admin navigate to url "https://thedoctorsportal.com/"
    When  Admin enter username password
      | username      | password   |
      | Admin@lgp.com | Admin@123$ |
    And   Admin click on submit button to login to admin portal
    Then  Admin should be navigate to home page
    When Admin click on Appointments from left side panel and select Book Appointment
    Then Admin should be navigate to Book Appointment screen
    When  Admin select date '30-12-2020'
    And   Admin select site 'In Hours'
    And   Admin select Time '10:00'
    And   Admin select patient 'James Wood'
    And   Admin select AppointmentType 'Consultation'
    And   Admin select DoctorName 'Dr. Lakshmi'
    And   Admin enter comments 'Hi Doctor, This is James'
    And   Admin click submit button
    Then  Admin should get validation message
    And   Booking should be updated in All Appointment screen with Confirmed status
    When  Admin click on Appointments and select All Appointments
    And   Admin select the same appointment and click edit icon for particular booking
    Then  Admin should navigate to edit Appointment screen
    When  Admin edit "<date>"
          # enter the current date
    And   Admin edit "<Time>"
          # enter the time ( i.e with in 2 hour from the current time)
    And   Admin click on submit button
    Then Admin should get validation message "Please select future time, You can not book appointment within 2 hours from current time"

    Examples:
      | date | Time |
      |      |      |