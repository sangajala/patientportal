$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/invoice.feature");
formatter.feature({
  "line": 1,
  "name": "Patient Portal Invoices",
  "description": "",
  "id": "patient-portal-invoices",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Patient is able to see Invoice when book an appointment",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-when-book-an-appointment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@appointments"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Patient logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "chooses Payer Type as \"\u003cPayer type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Appointment Type as \"\u003cAppointment type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Patient clicks on Preferred Clinician",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "chooses  Preferred Clinician  as \"\u003cClinician\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Patient clicks on Preferred Site",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "chooses Preferred Site as \"\u003cSite\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Patient clicks on Preferred Time and Date",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "chooses Preferred Time and Date as \"\u003cTime\u003e\"  \"\u003cDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Patient clicks on \"Invoices\" in menu",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "patient clicks on unpaid invoices",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Patient select first UnPaid invoice that appears on the search result",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Patient is able to see \"Appointment : Health Screen\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-when-book-an-appointment;",
  "rows": [
    {
      "cells": [
        "Payer type",
        "Appointment type",
        "Clinician",
        "Site",
        "Time",
        "Date"
      ],
      "line": 68,
      "id": "patient-portal-invoices;patient-is-able-to-see-invoice-when-book-an-appointment;;1"
    },
    {
      "cells": [
        "Patient",
        "Health Screen",
        "Any Clinician",
        "Work location",
        "Afternoon",
        "30/04/2020"
      ],
      "line": 69,
      "id": "patient-portal-invoices;patient-is-able-to-see-invoice-when-book-an-appointment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7539400,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Patient is able to see Invoice when book an appointment",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-when-book-an-appointment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@appointments"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Patient logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "chooses Payer Type as \"Patient\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Appointment Type as \"Health Screen\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Patient clicks on Preferred Clinician",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "chooses  Preferred Clinician  as \"Any Clinician\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Patient clicks on Preferred Site",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "chooses Preferred Site as \"Work location\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Patient clicks on Preferred Time and Date",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "chooses Preferred Time and Date as \"Afternoon\"  \"30/04/2020\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Patient clicks on \"Invoices\" in menu",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "patient clicks on unpaid invoices",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Patient select first UnPaid invoice that appears on the search result",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Patient is able to see \"Appointment : Health Screen\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InvoicesSteps.patientLoggedIn()"
});
formatter.result({
  "duration": 86369842300,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_clicks_on_Book_Appointment()"
});
formatter.result({
  "duration": 13289347000,
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
  "duration": 3976427101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health Screen",
      "offset": 21
    }
  ],
  "location": "bookAppointmentSteps.appointmentTypeAs(String)"
});
formatter.result({
  "duration": 6391871799,
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
  "duration": 6993310200,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredClinician()"
});
formatter.result({
  "duration": 3659457999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Clinician",
      "offset": 34
    }
  ],
  "location": "bookAppointmentSteps.choosesPreferredClinicianAs(String)"
});
formatter.result({
  "duration": 6641946299,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredSite()"
});
formatter.result({
  "duration": 1977046200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work location",
      "offset": 27
    }
  ],
  "location": "bookAppointmentSteps.choosesPreferredSiteAs(String)"
});
formatter.result({
  "duration": 6406534601,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredTimeAndDate()"
});
formatter.result({
  "duration": 1054138100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Afternoon",
      "offset": 36
    },
    {
      "val": "30/04/2020",
      "offset": 49
    }
  ],
  "location": "bookAppointmentSteps.choosesPreferredTimeAndDateAs(String,String)"
});
formatter.result({
  "duration": 15286516699,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 1451174600,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1162539400,
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
  "duration": 1658094701,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 1115681500,
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
  "duration": 6463947999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invoices",
      "offset": 19
    }
  ],
  "location": "InvoicesSteps.patientClicksOnInMenu(String)"
});
formatter.result({
  "duration": 1728197600,
  "status": "passed"
});
formatter.match({
  "location": "InvoicesSteps.patientClicksOnUnpaidInvoices()"
});
formatter.result({
  "duration": 4153244401,
  "status": "passed"
});
formatter.match({
  "location": "InvoicesSteps.patientSelectFirstUnPaidInvoiceThatAppearsOnTheSearchResult()"
});
formatter.result({
  "duration": 4617872800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Appointment : Health Screen",
      "offset": 24
    }
  ],
  "location": "InvoicesSteps.patientIsAbleToSee(String)"
});
formatter.result({
  "duration": 1127205599,
  "status": "passed"
});
formatter.after({
  "duration": 26311468700,
  "status": "passed"
});
});