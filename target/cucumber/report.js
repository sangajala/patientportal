$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/bookAppointment.feature");
formatter.feature({
  "line": 1,
  "name": "End to end functions of booking and viewing Appointments in patient portal",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Booking an appointment by default search",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-by-default-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@defaultsearch"
    },
    {
      "line": 11,
      "name": "@defaultsearch1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "chooses Payer Type as \"\u003cPayer type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Appointment Type as \"\u003cAppointment type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#    Then Patient sees a message \"The patient will be charged £35.00 if you cancel the appointment within 1 hours.\" on Appointment Details page"
    }
  ],
  "line": 22,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then Appointment Details page should be opened"
    }
  ],
  "line": 24,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-by-default-search;",
  "rows": [
    {
      "cells": [
        "Payer type",
        "Appointment type"
      ],
      "line": 28,
      "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-by-default-search;;1"
    },
    {
      "cells": [
        "Patient",
        "Consultation"
      ],
      "line": 29,
      "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-by-default-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1569370,
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
  "comments": [
    {
      "line": 5,
      "value": "# When patient enters username as \"lakshmi@bananaapps.co.uk\" Password as \"Bananaapps2\""
    }
  ],
  "line": 6,
  "name": "patient enters username as \"roopaworld@yahoo.com\" Password as \"Meddbaselogin1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Patient should be navigated to Meddbase Patient Portal Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_navigates_to_Meddbase_Patient_Portal_Login_Page()"
});
formatter.result({
  "duration": 4522495629,
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
  "duration": 423056051,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.clicks_on_Signin()"
});
formatter.result({
  "duration": 105012745,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage()"
});
formatter.result({
  "duration": 5039500341,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Booking an appointment by default search",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-by-default-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@defaultsearch1"
    },
    {
      "line": 11,
      "name": "@defaultsearch"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "chooses Payer Type as \"Patient\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Appointment Type as \"Consultation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#    Then Patient sees a message \"The patient will be charged £35.00 if you cancel the appointment within 1 hours.\" on Appointment Details page"
    }
  ],
  "line": 22,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then Appointment Details page should be opened"
    }
  ],
  "line": 24,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_clicks_on_Book_Appointment()"
});
formatter.result({
  "duration": 82685356,
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
  "duration": 547602271,
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
  "duration": 1253115761,
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
  "duration": 5089448298,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 94693719,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1975235005,
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
  "duration": 100103581,
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
  "duration": 5078095285,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 77049550,
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
  "duration": 5072236540,
  "status": "passed"
});
formatter.after({
  "duration": 117793512,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 30,
      "value": "# | Patient    | Phone Consultation |"
    },
    {
      "line": 31,
      "value": "# | Patient    | Video Conference   |"
    },
    {
      "line": 32,
      "value": "# | Insurer    | Consultation     |"
    },
    {
      "line": 33,
      "value": "# | Insurer | Phone Consultation |"
    }
  ],
  "line": 37,
  "name": "Booking an Appointment using Appointment Filters",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@BookByAppointmentFilters"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "chooses Payer Type as \"\u003cPayer type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Appointment Type as \"\u003cAppointment type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Patient clicks on Preferred Clinician",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "chooses  Preferred Clinician  as \"\u003cClinician\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Patient clicks on Preferred Site",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "chooses Preferred Site as \"\u003cSite\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Patient clicks on Preferred Time and Date",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "chooses Preferred Time and Date as \"\u003cTime\u003e\"  \"\u003cDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#    Then Patient sees a message \"The patient will be charged £35.00 if you cancel the appointment within 1 hours.\" on Appointment Details page"
    }
  ],
  "line": 53,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 54,
      "value": "#When Patient clicks on appointment details"
    },
    {
      "line": 55,
      "value": "# Then Appointment Details page should be opened"
    }
  ],
  "line": 56,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 58,
      "value": "#Then Appointment Booking Complete confirmation message should be displayed"
    }
  ],
  "line": 60,
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
      "line": 61,
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
      "line": 62,
      "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 345780,
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
  "comments": [
    {
      "line": 5,
      "value": "# When patient enters username as \"lakshmi@bananaapps.co.uk\" Password as \"Bananaapps2\""
    }
  ],
  "line": 6,
  "name": "patient enters username as \"roopaworld@yahoo.com\" Password as \"Meddbaselogin1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Patient should be navigated to Meddbase Patient Portal Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_navigates_to_Meddbase_Patient_Portal_Login_Page()"
});
formatter.result({
  "duration": 2409654984,
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
  "duration": 368236911,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.clicks_on_Signin()"
});
formatter.result({
  "duration": 106679039,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage()"
});
formatter.result({
  "duration": 5036383616,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Booking an Appointment using Appointment Filters",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;booking-an-appointment-using-appointment-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@BookByAppointmentFilters"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "chooses Payer Type as \"Patient\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Appointment Type as \"Consultation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Patient clicks on Preferred Clinician",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "chooses  Preferred Clinician  as \"Any Clinician\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Patient clicks on Preferred Site",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "chooses Preferred Site as \"Work location\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Patient clicks on Preferred Time and Date",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "chooses Preferred Time and Date as \"Afternoon\"  \"30/04/2020\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#    Then Patient sees a message \"The patient will be charged £35.00 if you cancel the appointment within 1 hours.\" on Appointment Details page"
    }
  ],
  "line": 53,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 54,
      "value": "#When Patient clicks on appointment details"
    },
    {
      "line": 55,
      "value": "# Then Appointment Details page should be opened"
    }
  ],
  "line": 56,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_clicks_on_Book_Appointment()"
});
formatter.result({
  "duration": 101362452,
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
  "duration": 510682350,
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
  "duration": 1280906710,
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
  "duration": 5084563460,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredClinician()"
});
formatter.result({
  "duration": 85034218,
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
  "duration": 5084169600,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredSite()"
});
formatter.result({
  "duration": 91169341,
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
  "duration": 5149354545,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnPreferredTimeAndDate()"
});
formatter.result({
  "duration": 109007614,
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
  "duration": 10380363154,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 98796866,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1169974134,
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
  "duration": 115666660,
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
  "duration": 5091962244,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 66664526,
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
  "duration": 5072336385,
  "status": "passed"
});
formatter.after({
  "duration": 126329315,
  "status": "passed"
});
formatter.before({
  "duration": 62561,
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
  "comments": [
    {
      "line": 5,
      "value": "# When patient enters username as \"lakshmi@bananaapps.co.uk\" Password as \"Bananaapps2\""
    }
  ],
  "line": 6,
  "name": "patient enters username as \"roopaworld@yahoo.com\" Password as \"Meddbaselogin1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Patient should be navigated to Meddbase Patient Portal Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_navigates_to_Meddbase_Patient_Portal_Login_Page()"
});
formatter.result({
  "duration": 2053296146,
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
  "duration": 320233040,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.clicks_on_Signin()"
});
formatter.result({
  "duration": 88438947,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage()"
});
formatter.result({
  "duration": 5039932979,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 63,
      "value": "# | Insurer    | Consultation     | Kaaru kaaru    | Work Location | Afternoon | 03/01/2020 |"
    }
  ],
  "line": 67,
  "name": "Patient can view Existing Appointments",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;patient-can-view-existing-appointments",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@viewExistingAppointments"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "Patient should be able to view recently Booked Appointments with a message \"In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnExistingAppointments()"
});
formatter.result({
  "duration": 3637242364,
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
  "duration": 5092540633,
  "status": "passed"
});
formatter.after({
  "duration": 109202572,
  "status": "passed"
});
formatter.before({
  "duration": 47909,
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
  "comments": [
    {
      "line": 5,
      "value": "# When patient enters username as \"lakshmi@bananaapps.co.uk\" Password as \"Bananaapps2\""
    }
  ],
  "line": 6,
  "name": "patient enters username as \"roopaworld@yahoo.com\" Password as \"Meddbaselogin1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Patient should be navigated to Meddbase Patient Portal Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_navigates_to_Meddbase_Patient_Portal_Login_Page()"
});
formatter.result({
  "duration": 2183192092,
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
  "duration": 316324066,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.clicks_on_Signin()"
});
formatter.result({
  "duration": 76236096,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage()"
});
formatter.result({
  "duration": 5040610531,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Cancel an Existing Appointment",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;cancel-an-existing-appointment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@cancelAppointment"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "Patient should be able to view recently Booked Appointments with a message \"In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Patient clicks on \"1\" available existing Appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Cancel Appointment button should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Patient clicks Cancel Appointment button",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Cancel Info Page with a message \"Cancellation fee\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Patient clicks on Cancel Appointment button on Cancel Info page",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "Appointment successfully cancelled message \"successfully cancelled\"should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnExistingAppointments()"
});
formatter.result({
  "duration": 3438280138,
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
  "duration": 5083553652,
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
  "duration": 54997020,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.cancelAppointmentButtonShouldBeVisible()"
});
formatter.result({
  "duration": 22361309,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksCancelAppointmentButton()"
});
formatter.result({
  "duration": 66167390,
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
  "duration": 5072314028,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnCancelAppointmentButtonOnCancelInfoPage()"
});
formatter.result({
  "duration": 70516685,
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
  "duration": 5071599633,
  "status": "passed"
});
formatter.after({
  "duration": 116840470,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 84,
  "name": "To check the existing appointments count increases once a new appointment is booked",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;to-check-the-existing-appointments-count-increases-once-a-new-appointment-is-booked",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@chkForIncreaseinCountOfExistingApptmntAndCountOfUpcomingAppointmentsAfterBookApptmt"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "gets the count of upcoming Appointment notifications",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "Patient should be able to view recently Booked Appointments with a message \"In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "gets the count of existing appointments",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "chooses Payer Type as \"\u003cPayer type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Appointment Type as \"\u003cAppointment type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 99,
      "value": "# Then Patient sees a message \"The patient will be charged £35.00 if you cancel the appointment within 1 hours.\" on Appointment Details page"
    },
    {
      "line": 100,
      "value": "# Then Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page"
    },
    {
      "line": 101,
      "value": "#Then Appointment Details page should be opened"
    }
  ],
  "line": 102,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "the count of existing appointments should increase",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "Patient clicks on Online Portal",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "the count of upcoming appointments should increase",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
  "name": "",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;to-check-the-existing-appointments-count-increases-once-a-new-appointment-is-booked;",
  "rows": [
    {
      "cells": [
        "Payer type",
        "Appointment type"
      ],
      "line": 110,
      "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;to-check-the-existing-appointments-count-increases-once-a-new-appointment-is-booked;;1"
    },
    {
      "cells": [
        "Patient",
        "Consultation"
      ],
      "line": 111,
      "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;to-check-the-existing-appointments-count-increases-once-a-new-appointment-is-booked;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48064,
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
  "comments": [
    {
      "line": 5,
      "value": "# When patient enters username as \"lakshmi@bananaapps.co.uk\" Password as \"Bananaapps2\""
    }
  ],
  "line": 6,
  "name": "patient enters username as \"roopaworld@yahoo.com\" Password as \"Meddbaselogin1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Patient should be navigated to Meddbase Patient Portal Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_navigates_to_Meddbase_Patient_Portal_Login_Page()"
});
formatter.result({
  "duration": 1964909643,
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
  "duration": 304140642,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.clicks_on_Signin()"
});
formatter.result({
  "duration": 88951591,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage()"
});
formatter.result({
  "duration": 5032494606,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "To check the existing appointments count increases once a new appointment is booked",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;to-check-the-existing-appointments-count-increases-once-a-new-appointment-is-booked;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@chkForIncreaseinCountOfExistingApptmntAndCountOfUpcomingAppointmentsAfterBookApptmt"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "gets the count of upcoming Appointment notifications",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "Patient should be able to view recently Booked Appointments with a message \"In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "gets the count of existing appointments",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Patient clicks on Book Appointment",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "chooses Payer Type as \"Patient\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Appointment Type as \"Consultation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Patient should be navigated to Appointment filters page and see a message \"Please use the filters if you wish to refine your search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Patient clicks on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "Appointment search Results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Patient clicks on \"1\" available appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 99,
      "value": "# Then Patient sees a message \"The patient will be charged £35.00 if you cancel the appointment within 1 hours.\" on Appointment Details page"
    },
    {
      "line": 100,
      "value": "# Then Patient sees a message \"The patient will be charged at 10% of the full price plus £50.00 fixed fee if you cancel the appointment within 1 hours.\" on Appointment Details page"
    },
    {
      "line": 101,
      "value": "#Then Appointment Details page should be opened"
    }
  ],
  "line": 102,
  "name": "Patient clicks on Book Appointment button on Details Page",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Appointment Booking Complete confirmation message \"was successfully completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "the count of existing appointments should increase",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "Patient clicks on Online Portal",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "the count of upcoming appointments should increase",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 5120599321,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.getsTheCountOfUpcomingAppointmentNotifications()"
});
formatter.result({
  "duration": 11322079,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnExistingAppointments()"
});
formatter.result({
  "duration": 3378764700,
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
  "duration": 5084160575,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.getsTheCountOfExistingAppointments()"
});
formatter.result({
  "duration": 7244706,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_clicks_on_Book_Appointment()"
});
formatter.result({
  "duration": 70412847,
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
  "duration": 328439316,
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
  "duration": 709102549,
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
  "duration": 5071825586,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnSearchButton()"
});
formatter.result({
  "duration": 90728075,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.appointmentSearchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1171566504,
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
  "duration": 126228942,
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
  "duration": 5078252972,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnBookAppointmentButtonOnDetailsPage()"
});
formatter.result({
  "duration": 68719237,
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
  "duration": 5064543946,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnExistingAppointments()"
});
formatter.result({
  "duration": 4164395267,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.theCountOfExistingAppointmentsShouldIncrease()"
});
formatter.result({
  "duration": 7448250,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 5148260066,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.theCountOfUpcomingAppointmentsShouldIncrease()"
});
formatter.result({
  "duration": 10132245,
  "status": "passed"
});
formatter.after({
  "duration": 110841053,
  "status": "passed"
});
formatter.before({
  "duration": 94975,
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
  "comments": [
    {
      "line": 5,
      "value": "# When patient enters username as \"lakshmi@bananaapps.co.uk\" Password as \"Bananaapps2\""
    }
  ],
  "line": 6,
  "name": "patient enters username as \"roopaworld@yahoo.com\" Password as \"Meddbaselogin1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Patient should be navigated to Meddbase Patient Portal Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patient_navigates_to_Meddbase_Patient_Portal_Login_Page()"
});
formatter.result({
  "duration": 2089090899,
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
  "duration": 301416689,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.clicks_on_Signin()"
});
formatter.result({
  "duration": 86770545,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage()"
});
formatter.result({
  "duration": 5036153521,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 112,
      "value": "# | Patient    | Phone Consultation |"
    },
    {
      "line": 113,
      "value": "#| Patient    | Video Conference   |"
    },
    {
      "line": 114,
      "value": "# | Insurer    | Consultation     |"
    },
    {
      "line": 115,
      "value": "# | Insurer | Phone Consultation |"
    }
  ],
  "line": 118,
  "name": "To check the existing appointments count decreases once a booked appointment is cancelled",
  "description": "",
  "id": "end-to-end-functions-of-booking-and-viewing-appointments-in-patient-portal;to-check-the-existing-appointments-count-decreases-once-a-booked-appointment-is-cancelled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@chkForDecreaseinCountOfExistingApptmntAndCountOfUpcomingAppointmentsAfterCancelApptmt"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "Patient clicks on Online Portal",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "gets the count of upcoming Appointment notifications",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "Patient should be able to view recently Booked Appointments with a message \"In the list below you will find your existing appointments. Click on the appointment for more details. If you are able to cancel the appointment, a cancel button will be displayed.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "gets the count of existing appointments",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Patient clicks on \"1\" available existing Appointment details",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "Cancel Appointment button should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "Patient clicks Cancel Appointment button",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "Cancel Info Page with a message \"Cancellation fee\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Patient clicks on Cancel Appointment button on Cancel Info page",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "Appointment successfully cancelled message \"successfully cancelled\"should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "Patient clicks on Existing Appointments",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "the count of existing appointments should decrease",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "Patient clicks on Online Portal",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "the count of upcoming appointments should decrease",
  "keyword": "Then "
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 5120882878,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.getsTheCountOfUpcomingAppointmentNotifications()"
});
formatter.result({
  "duration": 10017042,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnExistingAppointments()"
});
formatter.result({
  "duration": 8669459599,
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
  "duration": 5086373574,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.getsTheCountOfExistingAppointments()"
});
formatter.result({
  "duration": 6912242,
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
  "duration": 50989264,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.cancelAppointmentButtonShouldBeVisible()"
});
formatter.result({
  "duration": 20764760,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksCancelAppointmentButton()"
});
formatter.result({
  "duration": 72528620,
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
  "duration": 5070780483,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnCancelAppointmentButtonOnCancelInfoPage()"
});
formatter.result({
  "duration": 64656464,
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
  "duration": 5067330923,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnExistingAppointments()"
});
formatter.result({
  "duration": 7251441295,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.theCountOfExistingAppointmentsShouldDecrease()"
});
formatter.result({
  "duration": 7868260,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.patientClicksOnOnlinePortal()"
});
formatter.result({
  "duration": 5132922985,
  "status": "passed"
});
formatter.match({
  "location": "bookAppointmentSteps.theCountOfUpcomingAppointmentsShouldDecrease()"
});
formatter.result({
  "duration": 8945490,
  "status": "passed"
});
formatter.after({
  "duration": 110411969,
  "status": "passed"
});
});