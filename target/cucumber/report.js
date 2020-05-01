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
      "line": 27,
      "value": "# | Patient    | Phone Consultation |"
    },
    {
      "line": 28,
      "value": "# | Patient    | Video Conference   |"
    },
    {
      "line": 29,
      "value": "# | Insurer    | Consultation     |"
    },
    {
      "line": 30,
      "value": "# | Insurer | Phone Consultation |"
    }
  ],
  "line": 34,
  "name": "Booking an Appointment using Appointment Filters",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@BookByAppointmentFilters"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "chooses Payer Type as \"\u003cPayer type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Appointment Type as \"\u003cAppointment type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Patient clicks on Preferred Clinician",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "chooses  Preferred Clinician  as \"\u003cClinician\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Patient clicks on Preferred Site",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "chooses Preferred Site as \"\u003cSite\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Patient clicks on Preferred Time and Date",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "chooses Preferred Time and Date as \"\u003cTime\u003e\"  \"\u003cDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "#    Then Patient sees a message \"The patient will be charged £35.00 if you cancel the appointment within 1 hours.\" on Appointment Details page"
    }
  ],
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
      "comments": [
        {
          "line": 59,
          "value": "#| Patient    | Consultation     | Any Clinician | Work location | Afternoon | 30/04/2020 |"
        },
        {
          "line": 60,
          "value": "#| Insurer    | Consultation     | Kaaru kaaru    | Work Location | Morning | 02/05/2020 |"
        }
      ],
      "cells": [
        "Insurer",
        "Consultation",
        "Kaaru kaaru",
        "Home",
        "Morning",
        "02/05/2020"
      ],
      "line": 61,
      "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1000352,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Patient navigates to Meddbase Patient Portal Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Patient enters account credentials who has all the accounts setup",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Patient should be navigated to Meddbase Patient Portal Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_navigates_to_Meddbase_Patient_Portal_Login_Page()"
});
formatter.result({
  "duration": 3251848828,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientEntersAccountCredentialsWhoHasAllTheAccountsSetup()"
});
formatter.result({
  "duration": 450234715,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage()"
});
formatter.result({
  "duration": 5032020398,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "#| Patient    | Consultation     | Any Clinician | Work location | Afternoon | 30/04/2020 |"
    },
    {
      "line": 60,
      "value": "#| Insurer    | Consultation     | Kaaru kaaru    | Work Location | Morning | 02/05/2020 |"
    }
  ],
  "line": 61,
  "name": "Booking an Appointment using Appointment Filters",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@BookByAppointmentFilters"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "chooses Payer Type as \"Insurer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Appointment Type as \"Consultation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Patient clicks on Preferred Clinician",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "chooses  Preferred Clinician  as \"Kaaru kaaru\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Patient clicks on Preferred Site",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "chooses Preferred Site as \"Home\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Patient clicks on Preferred Time and Date",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "chooses Preferred Time and Date as \"Morning\"  \"02/05/2020\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "#    Then Patient sees a message \"The patient will be charged £35.00 if you cancel the appointment within 1 hours.\" on Appointment Details page"
    }
  ],
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
  "duration": 107713986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Insurer",
      "offset": 23
    }
  ],
  "location": "bookAppointmentSteps.choosesPayerTypeAs(String)"
});
formatter.result({
  "duration": 349207659,
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
  "duration": 489856770,
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
  "duration": 5088545278,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredClinician()"
});
formatter.result({
  "duration": 80497632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kaaru kaaru",
      "offset": 34
    }
  ],
  "location": "bookAppointmentSteps.choosesPreferredClinicianAs(String)"
});
formatter.result({
  "duration": 5089024993,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredSite()"
});
formatter.result({
  "duration": 85789808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 27
    }
  ],
  "location": "bookAppointmentSteps.choosesPreferredSiteAs(String)"
});
formatter.result({
  "duration": 5152576227,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredTimeAndDate()"
});
formatter.result({
  "duration": 92305969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Morning",
      "offset": 36
    },
    {
      "val": "02/05/2020",
      "offset": 47
    }
  ],
  "location": "bookAppointmentSteps.choosesPreferredTimeAndDateAs(String,String)"
});
formatter.result({
  "duration": 10350652273,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 106811362,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 889476953,
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
  "duration": 85794806,
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
  "duration": 5086169210,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 71072775,
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
  "duration": 5071000965,
  "status": "passed"
});
formatter.after({
  "duration": 116794686,
  "status": "passed"
});
});