$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/invoice.feature");
formatter.feature({
  "line": 1,
  "name": "Patient Portal Invoices",
  "description": "",
  "id": "patient-portal-invoices",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Patient is able to see Invoice Details for Paid invoice",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-paid-invoice",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@paidInvoice"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Patient logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Patient clicks on \"Invoices\" in menu",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "patient clicks on paid invoices",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Patient select first Paid invoice that appears on the search result",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Patient is able to see \"\u003cInvoice Details\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-paid-invoice;",
  "rows": [
    {
      "cells": [
        "Invoice Details"
      ],
      "line": 45,
      "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-paid-invoice;;1"
    },
    {
      "cells": [
        "23/03/2020 - No: 872"
      ],
      "line": 46,
      "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-paid-invoice;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3130200,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Patient is able to see Invoice Details for Paid invoice",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-paid-invoice;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@paidInvoice"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Patient logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Patient clicks on \"Invoices\" in menu",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "patient clicks on paid invoices",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Patient select first Paid invoice that appears on the search result",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Patient is able to see \"23/03/2020 - No: 872\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvoicesSteps.patientLoggedIn()"
});
formatter.result({
  "duration": 11564672300,
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
  "duration": 1104098000,
  "status": "passed"
});
formatter.match({
  "location": "InvoicesSteps.patientClicksOnPaidInvoices()"
});
formatter.result({
  "duration": 3186820300,
  "status": "passed"
});
formatter.match({
  "location": "InvoicesSteps.patientSelectFirstPaidInvoiceThatAppearsOnTheSearchResult()"
});
formatter.result({
  "duration": 3244292100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/03/2020 - No: 872",
      "offset": 24
    }
  ],
  "location": "InvoicesSteps.patientIsAbleToSee(String)"
});
formatter.result({
  "duration": 3060372000,
  "status": "passed"
});
formatter.after({
  "duration": 1191635900,
  "status": "passed"
});
});