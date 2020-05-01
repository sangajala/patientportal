$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/notifications.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying notifications generated under notifications icon and in home page notification panel",
  "description": "when booking and cancelling appointments and when receiving message from admin portal.",
  "id": "verifying-notifications-generated-under-notifications-icon-and-in-home-page-notification-panel",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Patient can view appointment notification and invoice in notifications icon and  in home page notifications panel",
  "description": "when he/she book new appointment",
  "id": "verifying-notifications-generated-under-notifications-icon-and-in-home-page-notification-panel;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Patient was on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "gets the count of notifications in home page notification panel",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "gets the count of notifications by accessing notification icon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Patient clicks on Book Appointment",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "chooses Payer Type as \"\u003cPayer type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Appointment Type as \"\u003cAppointment type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Patient should view appointment notification and invoice for newly booked appointment in homepage notifications panel",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Patient clicks on Notifications icon and clicks on All Notifications in dropdown menu",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Patient should view appointment notification and invoice for newly booked appointment in notifications",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "verifying-notifications-generated-under-notifications-icon-and-in-home-page-notification-panel;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel;",
  "rows": [
    {
      "cells": [
        "Payer type",
        "Appointment type"
      ],
      "line": 28,
      "id": "verifying-notifications-generated-under-notifications-icon-and-in-home-page-notification-panel;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel;;1"
    },
    {
      "cells": [
        "Patient",
        "Consultation"
      ],
      "line": 29,
      "id": "verifying-notifications-generated-under-notifications-icon-and-in-home-page-notification-panel;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1537900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Patient can view appointment notification and invoice in notifications icon and  in home page notifications panel",
  "description": "when he/she book new appointment",
  "id": "verifying-notifications-generated-under-notifications-icon-and-in-home-page-notification-panel;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Patient was on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "gets the count of notifications in home page notification panel",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "gets the count of notifications by accessing notification icon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Patient clicks on Book Appointment",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "chooses Payer Type as \"Patient\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Appointment Type as \"Consultation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Patient should view appointment notification and invoice for newly booked appointment in homepage notifications panel",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Patient clicks on Notifications icon and clicks on All Notifications in dropdown menu",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Patient should view appointment notification and invoice for newly booked appointment in notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "notificationsSteps.patient_was_on_homepage()"
});
formatter.result({
  "duration": 11982904700,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.gets_the_count_of_notifications_in_home_page_notification_panel()"
});
formatter.result({
  "duration": 31596100,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.gets_the_count_of_notifications_by_accessing_notification_icon()"
});
formatter.result({
  "duration": 3734148000,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 3402496800,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_clicks_on_Book_Appointment()"
});
formatter.result({
  "duration": 240378300,
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
  "duration": 333651600,
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
  "duration": 836571800,
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
  "duration": 3161648500,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 260599200,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1087781200,
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
  "duration": 182060400,
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
  "duration": 3175364200,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 199960200,
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
  "duration": 3125513500,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 3313578300,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.patientShouldViewAppointmentNotificationAndInvoiceForNewlyBookedAppointmentInHomepageNotificationsPanel()"
});
formatter.result({
  "duration": 608138200,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.patient_clicks_on_Notifications_icon_and_clicks_on_All_Notifications_in_dropdown_menu()"
});
formatter.result({
  "duration": 3639565300,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.patient_should_view_appointment_notification_and_invoice_for_newly_booked_appointment_in_notifications()"
});
formatter.result({
  "duration": 91673100,
  "status": "passed"
});
formatter.after({
  "duration": 773875900,
  "status": "passed"
});
formatter.before({
  "duration": 142400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Patient can not view appointment notification and invoice of existing appointment in notifications",
  "description": "when he/she cancel that appointment",
  "id": "verifying-notifications-generated-under-notifications-icon-and-in-home-page-notification-panel;patient-can-not-view-appointment-notification-and-invoice-of-existing-appointment-in-notifications",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "Patient was on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "gets the count of notifications in home page notification panel",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "gets the count of notifications by accessing notification icon",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Patient should be able to view recently Booked Appointments with a message \"In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "gets the count of existing appointments",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Patient clicks on \"1\" available existing Appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Cancel Appointment button should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Patient clicks Cancel Appointment button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Cancel Info Page with a message \"Cancellation fee\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Patient clicks on Cancel Appointment button on Cancel Info page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Appointment successfully cancelled message \"successfully cancelled\"should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Patient should not view appointment notification and invoice for cancelled appointment in homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Patient clicks on Notifications icon and clicks on All Notifications in dropdown menu",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Patient should not view appointment notification and invoice for cancelled appointment in all notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "notificationsSteps.patient_was_on_homepage()"
});
formatter.result({
  "duration": 10874993600,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.gets_the_count_of_notifications_in_home_page_notification_panel()"
});
formatter.result({
  "duration": 26303700,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.gets_the_count_of_notifications_by_accessing_notification_icon()"
});
formatter.result({
  "duration": 3739696600,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 3350630900,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnExistingAppointments()"
});
formatter.result({
  "duration": 1565428300,
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
  "duration": 3199465800,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.getsTheCountOfExistingAppointments()"
});
formatter.result({
  "duration": 24498100,
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
  "duration": 103708200,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.cancelAppointmentButtonShouldBeVisible()"
});
formatter.result({
  "duration": 44819300,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksCancelAppointmentButton()"
});
formatter.result({
  "duration": 226374000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancellation fee",
      "offset": 33
    }
  ],
  "location": "bookAppointmentSteps.cancelInfoPageWithAMessageShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 3194845600,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnCancelAppointmentButtonOnCancelInfoPage()"
});
formatter.result({
  "duration": 182233700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully cancelled",
      "offset": 44
    }
  ],
  "location": "bookAppointmentSteps.appointmentSuccessfullyCancelledMessageShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 3187990100,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 3377210400,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.patientShouldNotViewAppointmentNotificationAndInvoiceForCancelledAppointmentInHomepage()"
});
formatter.result({
  "duration": 47200,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.patient_clicks_on_Notifications_icon_and_clicks_on_All_Notifications_in_dropdown_menu()"
});
formatter.result({
  "duration": 3468777400,
  "status": "passed"
});
formatter.match({
  "location": "notificationsSteps.patientShouldNotViewAppointmentNotificationAndInvoiceForCancelledAppointmentInAllNotifications()"
});
formatter.result({
  "duration": 1023856000,
  "error_message": "java.lang.AssertionError: expected [17] but found [16]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:389)\r\n\tat org.testng.Assert.assertEquals(Assert.java:399)\r\n\tat stepDefinitions.notificationsSteps.patientShouldNotViewAppointmentNotificationAndInvoiceForCancelledAppointmentInAllNotifications(notificationsSteps.java:72)\r\n\tat ✽.Then Patient should not view appointment notification and invoice for cancelled appointment in all notifications(src/test/java/features/notifications.feature:49)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 723540800,
  "status": "passed"
});
});