$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/appointmentNotification.feature");
formatter.feature({
  "line": 1,
  "name": "View Appointment Notification in MedDbase Patient portal",
  "description": "",
  "id": "view-appointment-notification-in-meddbase-patient-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Patient can view the recently booked appointment in the homepage",
  "description": "",
  "id": "view-appointment-notification-in-meddbase-patient-portal;patient-can-view-the-recently-booked-appointment-in-the-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Patient was on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "chooses Payer Type as \"\u003cPayer type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Appointment Type as \"\u003cAppointment type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "get appointment details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Patient clicks on \"1\" notification in notification panel",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Patient should be able to view recently Booked Appointments with a message \"In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Patient clicks on \"1\" available existing Appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Patient should be able to view the recently booked appointment",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "view-appointment-notification-in-meddbase-patient-portal;patient-can-view-the-recently-booked-appointment-in-the-homepage;",
  "rows": [
    {
      "cells": [
        "Payer type",
        "Appointment type"
      ],
      "line": 26,
      "id": "view-appointment-notification-in-meddbase-patient-portal;patient-can-view-the-recently-booked-appointment-in-the-homepage;;1"
    },
    {
      "cells": [
        "Patient",
        "Consultation"
      ],
      "line": 27,
      "id": "view-appointment-notification-in-meddbase-patient-portal;patient-can-view-the-recently-booked-appointment-in-the-homepage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1188800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Patient can view the recently booked appointment in the homepage",
  "description": "",
  "id": "view-appointment-notification-in-meddbase-patient-portal;patient-can-view-the-recently-booked-appointment-in-the-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Patient was on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "chooses Payer Type as \"Patient\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Appointment Type as \"Consultation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "get appointment details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Patient clicks on \"1\" notification in notification panel",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Patient should be able to view recently Booked Appointments with a message \"In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Patient clicks on \"1\" available existing Appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Patient should be able to view the recently booked appointment",
  "keyword": "Then "
});
formatter.match({
  "location": "notificationsSteps.patient_was_on_homepage()"
});
formatter.result({
  "duration": 12488536200,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_clicks_on_Book_Appointment()"
});
formatter.result({
  "duration": 159315700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient",
      "offset": 23
    }
  ],
  "location": "bookAppointmentSteps.choosesPayerTypeAs(String)"
});
formatter.result({
  "duration": 433182100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Consultation",
      "offset": 21
    }
  ],
  "location": "bookAppointmentSteps.appointmentTypeAs(String)"
});
formatter.result({
  "duration": 878230200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please use the filters if you wish to refine your search",
      "offset": 75
    }
  ],
  "location": "bookAppointmentSteps.patientShouldBeNavigatedToAppointmentFiltersPageAndSeeAMessage(String)"
});
formatter.result({
  "duration": 3126635500,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 199573800,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1155009500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "bookAppointmentSteps.patientClicksOnAvailableAppointmentDetails(String)"
});
formatter.result({
  "duration": 189470700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.",
      "offset": 24
    }
  ],
  "location": "bookAppointmentSteps.patientSeesAMessageOnAppointmentDetailsPage(String)"
});
formatter.result({
  "duration": 3146874600,
  "status": "passed"
});
formatter.match({
  "location": "appointmentNotificationSteps.get_appointment_details()"
});
formatter.result({
  "duration": 197015700,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 143295200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "was successfully completed",
      "offset": 51
    }
  ],
  "location": "bookAppointmentSteps.appointmentBookingCompleteConfirmationMessageShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 3114596500,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 3262554500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "appointmentNotificationSteps.patient_clicks_on_notification_in_notification_panel(String)"
});
formatter.result({
  "duration": 1005079700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.",
      "offset": 76
    }
  ],
  "location": "bookAppointmentSteps.patientShouldBeAbleToViewRecentlyBookedAppointmentsWithAMessage(String)"
});
formatter.result({
  "duration": 3154929900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "bookAppointmentSteps.patientClicksOnAvailableExistingAppointmentDetails(String)"
});
formatter.result({
  "duration": 41436400,
  "error_message": "java.lang.AssertionError: Element not clickable[[ChromeDriver: chrome on WINDOWS (5c7cf01790d994c43de22b0826d9a5ca)] -\u003e xpath: //ul[@class\u003d\u0027list-group list-group-bordered ng-scope\u0027]/li]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat utils.utilities.clickOnWebElement(utilities.java:267)\r\n\tat pageObjects.bookAppointment.clickOnSpecificAvailableAppointment(bookAppointment.java:203)\r\n\tat stepDefinitions.bookAppointmentSteps.patientClicksOnAvailableExistingAppointmentDetails(bookAppointmentSteps.java:131)\r\n\tat ✽.When Patient clicks on \"1\" available existing Appointment details(src/test/java/features/appointmentNotification.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "appointmentNotificationSteps.patient_should_be_able_to_view_the_recently_booked_appointment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 731047500,
  "status": "passed"
});
});