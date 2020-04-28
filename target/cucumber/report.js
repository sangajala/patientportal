$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/bookAppointment.feature");
formatter.feature({
  "line": 1,
  "name": "End to end functions of booking and viewing Appointments in patient portal",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 29,
      "value": "#| Patient    | Video Conference   |"
    },
    {
      "line": 30,
      "value": "# | Insurer    | Consultation     |"
    },
    {
      "line": 31,
      "value": "# | Insurer | Phone Consultation |"
    }
  ],
  "line": 35,
  "name": "Booking an Appointment using Appointment Filters",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@BookByAppointmentFilters"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "chooses Payer Type as \"\u003cPayer type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Appointment Type as \"\u003cAppointment type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Patient clicks on Preferred Clinician",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "chooses  Preferred Clinician  as \"\u003cClinician\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Patient clicks on Preferred Site",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "chooses Preferred Site as \"\u003cSite\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Patient clicks on Preferred Time and Date",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "chooses Preferred Time and Date as \"\u003cTime\u003e\"  \"\u003cDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 51,
      "value": "#When Patient clicks on appointment details"
    },
    {
      "line": 52,
      "value": "# Then Appointment Details page should be opened"
    }
  ],
  "line": 53,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 55,
      "value": "#Then Appointment Booking Complete confirmation message should be displayed"
    }
  ],
  "line": 57,
  "name": "",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters;",
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
      "line": 58,
      "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters;;1"
    },
    {
      "cells": [
        "Patient",
        "Consultation",
        "Any Clinician",
        "Work location",
        "Afternoon",
        "30/04/2020"
      ],
      "line": 59,
      "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5067600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Patient navigates to Meddbase Patient Portal Login Page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "# When patient enters username as \"lakshmi@bananaapps.co.uk\" Password as \"Bananaapps2\""
    }
  ],
  "line": 5,
  "name": "patient enters username as \"roopaworld@yahoo.com\" Password as \"Meddbaselogin1\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Patient should be navigated to Meddbase Patient Portal Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_navigates_to_Meddbase_Patient_Portal_Login_Page()"
});
formatter.result({
  "duration": 14128836100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "roopaworld@yahoo.com",
      "offset": 28
    },
    {
      "val": "Meddbaselogin1",
      "offset": 63
    }
  ],
  "location": "bookAppointmentSteps.patient_enters_username_as_Password_as(String,String)"
});
formatter.result({
  "duration": 1101087800,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.clicks_on_Signin()"
});
formatter.result({
  "duration": 280917700,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage()"
});
formatter.result({
  "duration": 5063890100,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Booking an Appointment using Appointment Filters",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@BookByAppointmentFilters"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "chooses Payer Type as \"Patient\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Appointment Type as \"Consultation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Patient clicks on Preferred Clinician",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "chooses  Preferred Clinician  as \"Any Clinician\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Patient clicks on Preferred Site",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "chooses Preferred Site as \"Work location\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Patient clicks on Preferred Time and Date",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "chooses Preferred Time and Date as \"Afternoon\"  \"30/04/2020\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 51,
      "value": "#When Patient clicks on appointment details"
    },
    {
      "line": 52,
      "value": "# Then Appointment Details page should be opened"
    }
  ],
  "line": 53,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_clicks_on_Book_Appointment()"
});
formatter.result({
  "duration": 307513000,
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
  "duration": 414137700,
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
  "duration": 1065218800,
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
  "duration": 5122785600,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredClinician()"
});
formatter.result({
  "duration": 151718800,
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
  "duration": 5196867200,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredSite()"
});
formatter.result({
  "duration": 169730100,
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
  "duration": 5255598500,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredTimeAndDate()"
});
formatter.result({
  "duration": 166365600,
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
  "duration": 10658533300,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 164953900,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1336348200,
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
  "duration": 124505600,
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
  "duration": 5220073000,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 172082400,
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
  "duration": 5109898600,
  "status": "passed"
});
formatter.after({
  "duration": 1417857500,
  "status": "passed"
});
});