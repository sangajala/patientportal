$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/notifications.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying notifications are generated when booking and cancelling appointments and verifying",
  "description": "incoming messages under notifications icon",
  "id": "verifying-notifications-are-generated-when-booking-and-cancelling-appointments-and-verifying",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Patient can view appointment notification and invoice in notifications icon and  in home page notifications panel",
  "description": "when he/she book new appointment",
  "id": "verifying-notifications-are-generated-when-booking-and-cancelling-appointments-and-verifying;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel",
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
  "name": "gets the number on notification icon",
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
  "name": "the number on notification icon should be increased by refreshing the page",
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
  "id": "verifying-notifications-are-generated-when-booking-and-cancelling-appointments-and-verifying;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel;",
  "rows": [
    {
      "cells": [
        "Payer type",
        "Appointment type"
      ],
      "line": 28,
      "id": "verifying-notifications-are-generated-when-booking-and-cancelling-appointments-and-verifying;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel;;1"
    },
    {
      "cells": [
        "Patient",
        "Consultation"
      ],
      "line": 29,
      "id": "verifying-notifications-are-generated-when-booking-and-cancelling-appointments-and-verifying;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1858500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Patient can view appointment notification and invoice in notifications icon and  in home page notifications panel",
  "description": "when he/she book new appointment",
  "id": "verifying-notifications-are-generated-when-booking-and-cancelling-appointments-and-verifying;patient-can-view-appointment-notification-and-invoice-in-notifications-icon-and--in-home-page-notifications-panel;;2",
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
  "name": "gets the number on notification icon",
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
  "name": "the number on notification icon should be increased by refreshing the page",
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
  "location": "NotificationsSteps.patient_was_on_homepage()"
});
formatter.result({
  "duration": 18330866200,
  "status": "passed"
});
formatter.match({
  "location": "NotificationsSteps.getsTheNumberOnNotificationIcon()"
});
formatter.result({
  "duration": 255768400,
  "status": "passed"
});
formatter.match({
  "location": "NotificationsSteps.gets_the_count_of_notifications_by_accessing_notification_icon()"
});
formatter.result({
  "duration": 4817821800,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 3719773500,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_clicks_on_Book_Appointment()"
});
formatter.result({
  "duration": 352612100,
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
  "duration": 405939300,
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
  "duration": 920751800,
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
  "duration": 3378390800,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 414965600,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1158069000,
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
  "duration": 300868500,
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
  "duration": 3379201700,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 608083300,
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
  "duration": 3402236400,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 3787855900,
  "status": "passed"
});
formatter.match({
  "location": "NotificationsSteps.theNumberOnNotificationIconShouldBeIncreasedByRefreshingThePage()"
});
formatter.result({
  "duration": 1590837600,
  "status": "passed"
});
formatter.match({
  "location": "NotificationsSteps.patient_clicks_on_Notifications_icon_and_clicks_on_All_Notifications_in_dropdown_menu()"
});
formatter.result({
  "duration": 4229303700,
  "status": "passed"
});
formatter.match({
  "location": "NotificationsSteps.patient_should_view_appointment_notification_and_invoice_for_newly_booked_appointment_in_notifications()"
});
formatter.result({
  "duration": 495318000,
  "status": "passed"
});
formatter.after({
  "duration": 993946800,
  "status": "passed"
});
formatter.before({
  "duration": 66400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Patient can not view appointment notification and invoice of existing appointment in notifications",
  "description": "when he/she cancel that appointment",
  "id": "verifying-notifications-are-generated-when-booking-and-cancelling-appointments-and-verifying;patient-can-not-view-appointment-notification-and-invoice-of-existing-appointment-in-notifications",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "Patient was on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "gets the number on notification icon",
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
  "name": "the number on notification icon should be decreased by refreshing the page",
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
  "location": "NotificationsSteps.patient_was_on_homepage()"
});
formatter.result({
  "duration": 2551800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1EBNG06\u0027, ip: \u0027192.168.0.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat pageObjects.loginPage.NavigateToUrl(loginPage.java:58)\r\n\tat stepDefinitions.NotificationsSteps.patient_was_on_homepage(NotificationsSteps.java:22)\r\n\tat ✽.Given Patient was on homepage(src/test/java/features/notifications.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NotificationsSteps.getsTheNumberOnNotificationIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotificationsSteps.gets_the_count_of_notifications_by_accessing_notification_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnExistingAppointments()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "bookAppointmentSteps.getsTheCountOfExistingAppointments()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "bookAppointmentSteps.cancelAppointmentButtonShouldBeVisible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksCancelAppointmentButton()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnCancelAppointmentButtonOnCancelInfoPage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotificationsSteps.theNumberOnNotificationIconShouldBeDecreasedByRefreshingThePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotificationsSteps.patient_clicks_on_Notifications_icon_and_clicks_on_All_Notifications_in_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotificationsSteps.patientShouldNotViewAppointmentNotificationAndInvoiceForCancelledAppointmentInAllNotifications()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 317600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1EBNG06\u0027, ip: \u0027192.168.0.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat stepDefinitions.AfterActionsHook.tearDown(AfterActionsHook.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:295)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:84)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:90)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 63200,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Patient can view incoming message in notifications",
  "description": "",
  "id": "verifying-notifications-are-generated-when-booking-and-cancelling-appointments-and-verifying;patient-can-view-incoming-message-in-notifications",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "Patient was on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "Patient clicks on Notifications icon and clicks on All Notifications in dropdown menu",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Patient should be able to view incoming message notification",
  "keyword": "Then "
});
formatter.match({
  "location": "NotificationsSteps.patient_was_on_homepage()"
});
formatter.result({
  "duration": 2651900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1EBNG06\u0027, ip: \u0027192.168.0.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat pageObjects.loginPage.NavigateToUrl(loginPage.java:58)\r\n\tat stepDefinitions.NotificationsSteps.patient_was_on_homepage(NotificationsSteps.java:22)\r\n\tat ✽.Given Patient was on homepage(src/test/java/features/notifications.feature:52)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NotificationsSteps.patient_clicks_on_Notifications_icon_and_clicks_on_All_Notifications_in_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotificationsSteps.patientShouldBeAbleToViewIncomingMessageNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 176700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1EBNG06\u0027, ip: \u0027192.168.0.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat stepDefinitions.AfterActionsHook.tearDown(AfterActionsHook.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:295)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:84)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:90)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
});