Feature: Booking Appointment from admin portal

  In Order to book Appointment for registered patient
  As a admin
  I have to login to Admin portal and fill all mandatory fields and submit the form

  Scenario Outline: Booking In Hours Appointment for Out of practice hours (i.e before 9:00 and after 17:30) from admin portal

    Given Admin navigate to url "https://thedoctorsportal.com/"
    When  Admin enter username "Admin@lgp.com"
    And   Admin enter password "Admin@123$"
    And   Admin click on submit button to login to admin portal
    Then  Admin should be navigate to home page
    When  Admin click on Appointments from left side panel
    And   Admin select Book Appointment
    Then  Admin should be navigate to Book Appointment screen
    When  Admin select "<date>"
    And   Admin select "<site>"
    And   Admin select "<Time>"
    And   Admin select "<patient>"
    And   Admin select "<AppointmentType>"
    And   Admin select "<DoctorName>"
    And   Admin click submit button
    Then  Admin should get validation message

    Examples:
      | date       | site     | Time  | patient     | AppointmentType    | DoctorName  |
      | 29-07-2020 | In Hours | 8:00  | James Woods | Health Screen      | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 8:30  | James Woods | Consultation       | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 18:00 | James Woods | Consultation       | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 1:00  | James Woods | Consultation       | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 5:30  | James Woods | Health Screen      | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 22:00 | James Woods | Nurse Consultation | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 21:30 | James Woods | Consultation       | Dr. Lakshmi |


  Scenario Outline: Booking In Hours Appointment with in the practice hours (i.e 9:00 to 17:30) from admin portal

    Given Admin navigate to url "https://thedoctorsportal.com/"
    When  Admin enter username "Admin@lgp.com"
    And   Admin enter password "Admin@123$"
    And   Admin click on submit button to login to admin portal
    Then  Admin should be navigate to home page
    And   Admin should able to see Dashboard
    When  Admin click on Appointments from left side panel
    And   Admin select Book Appointment
    Then  Admin should be navigate to Book Appointment screen
    When  Admin select "<date>"
    And   Admin select "<site>"
    And   Admin select "<Time>"
    And   Admin select "<patient>"
    And   Admin select "<AppointmentType>"
    And   Admin select "<DoctorName>"
    And   Admin click submit button
    Then  Admin should get validation message
    And   Booking should be updated in All Appointment screen with Confirmed status

    Examples:
      | date       | site     | Time  | patient     | AppointmentType    | DoctorName  |
      | 29-07-2020 | In Hours | 9:00  | James Woods | Health Screen      | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 9:30  | James Woods | Consultation       | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 11:30 | James Woods | Consultation       | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 13:00 | James Woods | Consultation       | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 15:30 | James Woods | Health Screen      | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 17:00 | James Woods | Nurse Consultation | Dr. Lakshmi |
      | 29-07-2020 | In Hours | 17:30 | James Woods | Consultation       | Dr. Lakshmi |


  Scenario Outline: Booking new appointment for registered patient by assigning the Doctor from the admin portal

    Given Admin navigate to url "https://thedoctorsportal.com/"
    When  Admin enter username password
      | username      | password   |
      | Admin@lgp.com | Admin@123$ |
    And  Admin click on submit button to login to admin portal
    Then Admin should be navigate to home page
    When Admin click on Appointments from left side panel
    And  Admin select Book Appointment
    Then Admin should be navigate to Book Appointment screen
    When  Admin select "<date>"
    And   Admin select "<site>"
    And   Admin select "<Time>"
    And   Admin select "<patient>"
    And   Admin select "<AppointmentType>"
    And   Admin select "<DoctorName>"
    And   Admin click submit button
    Then  Admin should get validation message
    And   Booking should be updated in All Appointment screen with Confirmed "<status>"

    Examples:
      | date       | site         | Time  | patient     | AppointmentType | DoctorName  | status    |
      | 29-07-2020 | In Hours     | 9:00  | James Woods | Health Screen   | Dr. Lakshmi | Confirmed |
      | 29-07-2020 | Out of Hours | 22:30 | James Woods | Consultation    | Dr. Lakshmi | Confirmed |


  Scenario Outline: Booking new appointment for registered patient with out assign Doctor from the admin portal

    Given Admin navigate to url "https://thedoctorsportal.com/"
    When  Admin enter username password
      | username      | password   |
      | Admin@lgp.com | Admin@123$ |
    And   Admin click on submit button to login to admin portal
    Then  Admin should be navigate to home page
    And   Admin should able to see Dashboard
    When  Admin click on Appointments from left side panel
    And   Admin select Book Appointment
    Then  Admin should be navigate to Book Appointment screen
    When  Admin select "<date>"
    And   Admin select "<site>"
    And   Admin select "<Time>"
    And   Admin select "<patient>"
    And   Admin select "<AppointmentType>"
    And   Admin enter "<comments>"
    And   Admin click submit button
    Then  Admin should get validation message
    And   Appointment booking should be updated in All Appointment screen with Pending "<status>"

    Examples:
      | date       | site         | Time  | patient     | AppointmentType | comments                 | status  |
      | 29-07-2020 | In Hours     | 9:00  | James Woods | Health Screen   | Hi Doctor, This is James | Pending |
      | 29-07-2020 | Out of Hours | 22:30 | James Woods | Consultation    | Hi Doctor, This is James | Pending |


  Scenario Outline: Booking new appointment with in 2 hours from the current time in current day

    Given Admin navigate to url "https://thedoctorsportal.com/"
    When  Admin enter username password
      | username      | password   |
      | Admin@lgp.com | Admin@123$ |
    And  Admin click on submit button to login to admin portal
    Then Admin should be navigate to home page
    And  Admin should able to see Dashboard
    When Admin click on Appointments from left side panel
    And  Admin select Book Appointment
    Then Admin should be navigate to Book Appointment screen
    When  Admin select "<date>"
    And   Admin select "<site>"
    And   Admin select "<Time>"
    And   Admin select "<patient>"
    And   Admin select "<AppointmentType>"
    And   Admin select "<DoctorName>"
    And   Admin enter "<comments>"
    And  Admin click submit button
    Then Admin should get validation message "Please select future time, You can not book appointment within 2 hours from current time"

    Examples:
      | date   | site         | Time                     | patient     | AppointmentType    | DoctorName  | comments                 |
      | TE day | In Hours     | with in 2hr from TE time | James Woods | Health Screen      | Dr. Lakshmi | Hi Doctor, This is James |
      | TE day | Out of Hours | with in 2hr from TE time | James Woods | Video Consultation | Dr. Lakshmi | Hi Doctor, This is James |
      #TE = Test Execution
      #TE day = Test Execution day
  Scenario Outline: Verify Admin can not book appointment for past time or past day

    Given Admin navigate to url "https://thedoctorsportal.com/"
    When  Admin enter username password
      | username      | password   |
      | Admin@lgp.com | Admin@123$ |
    And  Admin click on submit button to login to admin portal
    Then Admin should be navigate to home page
    And  Admin should able to see Dashboard
    When Admin click on Appointments from left side panel
    And  Admin select Book Appointment
    Then Admin should be navigate to Book Appointment screen
    When  Admin select "<date>"
    And   Admin select "<site>"
    And   Admin select "<Time>"
    And   Admin select "<patient>"
    And   Admin select "<AppointmentType>"
    And   Admin select "<DoctorName>"
    And   Admin enter "<comments>"
    And  Admin click submit button
    Then Admin should get validation message "Please select future time, You can not book appointment within 2 hours from current time"

    Examples:
      | date            | site         | Time             | patient     | AppointmentType    | DoctorName  | comments                 |
      | TE day          | In Hours     | select past time | James Woods | Health Screen      | Dr. Lakshmi | Hi Doctor, This is James |
      | TE day          | Out of Hours | select past time | James Woods | Video Consultation | Dr. Lakshmi | Hi Doctor, This is James |
      | select past day | In Hours     | select time      | James Woods | Health Screen      | Dr. Lakshmi | Hi Doctor, This is James |
      | select past day | Out of Hours | select time      | James Woods | Video Consultation | Dr. Lakshmi | Hi Doctor, This is James |
