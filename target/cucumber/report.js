$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/invoice.feature");
formatter.feature({
  "line": 1,
  "name": "Patient Portal Invoices",
  "description": "",
  "id": "patient-portal-invoices",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Patient is able to see Invoice Details for UnPaid invoice",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-unpaid-invoice",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@invoice"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Patient logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Patient clicks on \"Invoices\" in menu",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "patient clicks on unpaid invoices",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Then Patient is navigated to Invoice Details page with number \"1186\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Patient is able to see \"\u003cInvoice Details\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-unpaid-invoice;",
  "rows": [
    {
      "cells": [
        "Invoice Details"
      ],
      "line": 34,
      "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-unpaid-invoice;;1"
    },
    {
      "cells": [
        "25/04/2020 - No: 1186 Total: 240 - Paid: 0 - Balance: 240"
      ],
      "line": 35,
      "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-unpaid-invoice;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1811900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Patient is able to see Invoice Details for UnPaid invoice",
  "description": "",
  "id": "patient-portal-invoices;patient-is-able-to-see-invoice-details-for-unpaid-invoice;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@invoice"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Patient logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Patient clicks on \"Invoices\" in menu",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "patient clicks on unpaid invoices",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Then Patient is navigated to Invoice Details page with number \"1186\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Patient is able to see \"25/04/2020 - No: 1186 Total: 240 - Paid: 0 - Balance: 240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvoicesSteps.patientLoggedIn()"
});
formatter.result({
  "duration": 10649390700,
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
  "duration": 1099124900,
  "status": "passed"
});
formatter.match({
  "location": "InvoicesSteps.patientClicksOnUnpaidInvoices()"
});
formatter.result({
  "duration": 3210972399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1186",
      "offset": 63
    }
  ],
  "location": "InvoicesSteps.thenPatientIsNavigatedToInvoiceDetailsPageWithNumber(String)"
});
formatter.result({
  "duration": 3175856900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25/04/2020 - No: 1186 Total: 240 - Paid: 0 - Balance: 240",
      "offset": 24
    }
  ],
  "location": "InvoicesSteps.patientIsAbleToSee(String)"
});
formatter.result({
  "duration": 95618500,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.InvoicesSteps.patientIsAbleToSee(InvoicesSteps.java:100)\r\n\tat ✽.Then Patient is able to see \"25/04/2020 - No: 1186 Total: 240 - Paid: 0 - Balance: 240\"(src/test/java/features/invoice.feature:32)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1464677000,
  "status": "passed"
});
});