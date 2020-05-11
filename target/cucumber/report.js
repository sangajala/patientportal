$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/membership.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Patient can enroll for  monthly membership while Registration",
  "description": "\r\nPatient will enroll for monthly membership while Registration\r\nthen Patient should be able to see monthly LGP membership scheme in membership page",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Patient can enroll for monthly membership while registration",
  "description": "",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;patient-can-enroll-for-monthly-membership-while-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Patient was on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Patient click on signup button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Patient should be navigated to invite code page and able to see \"see our memberships scheme\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Patient click on see our membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Patient should be navigated to membership page with \"Memberships\" title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on LGP membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Patient should be able to view monthly membership scheme",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Patient select monthly scheme and click on Apply for Membership button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Patient should be navigated to disclaimer page with \"Disclaimer\" and \"Fees\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Patient accept conditions and click on Apply for Membership",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Patient should be navigated to register page with title \"Register\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "provide below details for registration",
  "rows": [
    {
      "cells": [
        "Password",
        "\u003cPassword\u003e"
      ],
      "line": 21
    },
    {
      "cells": [
        "First Name",
        "\u003cFirst Name\u003e"
      ],
      "line": 22
    },
    {
      "cells": [
        "Last Name",
        "\u003cLast Name\u003e"
      ],
      "line": 23
    },
    {
      "cells": [
        "Day",
        "\u003cDay\u003e"
      ],
      "line": 24
    },
    {
      "cells": [
        "Month",
        "\u003cMonth\u003e"
      ],
      "line": 25
    },
    {
      "cells": [
        "Year",
        "\u003cYear\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "Email Address",
        "\u003cEmail address\u003e"
      ],
      "line": 27
    },
    {
      "cells": [
        "Postcode",
        "\u003cPostcode\u003e"
      ],
      "line": 28
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "\u003cMobile Phone Number\u003e"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be in Confirm details page",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;patient-can-enroll-for-monthly-membership-while-registration;",
  "rows": [
    {
      "cells": [
        "Test cases",
        "Password",
        "First Name",
        "Last Name",
        "Day",
        "Month",
        "Year",
        "Email address",
        "Postcode",
        "Mobile Phone Number"
      ],
      "line": 34,
      "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;patient-can-enroll-for-monthly-membership-while-registration;;1"
    },
    {
      "cells": [
        "Verify invite code",
        "Bananaapps123$",
        "sree",
        "lella",
        "20",
        "Aug",
        "1985",
        "lellasreelakshmi123@gmail.com",
        "SL3 8DD",
        "07543571654"
      ],
      "line": 35,
      "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;patient-can-enroll-for-monthly-membership-while-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 165301,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Patient can enroll for monthly membership while registration",
  "description": "",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;patient-can-enroll-for-monthly-membership-while-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Patient was on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Patient click on signup button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Patient should be navigated to invite code page and able to see \"see our memberships scheme\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Patient click on see our membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Patient should be navigated to membership page with \"Memberships\" title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on LGP membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Patient should be able to view monthly membership scheme",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Patient select monthly scheme and click on Apply for Membership button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Patient should be navigated to disclaimer page with \"Disclaimer\" and \"Fees\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Patient accept conditions and click on Apply for Membership",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Patient should be navigated to register page with title \"Register\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "provide below details for registration",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 21
    },
    {
      "cells": [
        "First Name",
        "sree"
      ],
      "line": 22
    },
    {
      "cells": [
        "Last Name",
        "lella"
      ],
      "line": 23
    },
    {
      "cells": [
        "Day",
        "20"
      ],
      "line": 24
    },
    {
      "cells": [
        "Month",
        "Aug"
      ],
      "line": 25
    },
    {
      "cells": [
        "Year",
        "1985"
      ],
      "line": 26
    },
    {
      "cells": [
        "Email Address",
        "lellasreelakshmi123@gmail.com"
      ],
      "line": 27
    },
    {
      "cells": [
        "Postcode",
        "SL3 8DD"
      ],
      "line": 28
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "07543571654"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be in Confirm details page",
  "keyword": "Then "
});
formatter.match({
  "location": "MembershipSteps.patientWasOnLoginPage()"
});
formatter.result({
  "duration": 2403108600,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patient_click_on_signup_button()"
});
formatter.result({
  "duration": 586677500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "see our memberships scheme",
      "offset": 65
    }
  ],
  "location": "MembershipSteps.patientShouldBeNavigatedToInviteCodePageAndAbleToSeeOption(String)"
});
formatter.result({
  "duration": 89213700,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patientClickOnSeeOurMembershipSchemeButton()"
});
formatter.result({
  "duration": 186551899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Memberships",
      "offset": 53
    }
  ],
  "location": "MembershipSteps.patientShouldBeNavigatedToMembershipPageWithTitle(String)"
});
formatter.result({
  "duration": 67571201,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.click_on_LGP_membership_scheme_button()"
});
formatter.result({
  "duration": 283156000,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patient_should_be_able_to_view_monthly_membership_scheme()"
});
formatter.result({
  "duration": 262502400,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patient_select_monthly_scheme_and_click_on_Apply_for_Membership_button()"
});
formatter.result({
  "duration": 151536100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disclaimer",
      "offset": 53
    },
    {
      "val": "Fees",
      "offset": 70
    }
  ],
  "location": "MembershipSteps.patientShouldBeNavigatedToDisclaimerPageWithAnd(String,String)"
});
formatter.result({
  "duration": 106103900,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patient_accept_conditions_and_click_on_Apply_for_Membership()"
});
formatter.result({
  "duration": 406457299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 57
    }
  ],
  "location": "MembershipSteps.patientShouldBeNavigatedToRegisterPageWithTitle(String)"
});
formatter.result({
  "duration": 38520000,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.provide_below_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 2009161400,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 668087500,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.userShouldBeInConfirmDetailsPage()"
});
formatter.result({
  "duration": 872482100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1309544801,
  "status": "passed"
});
formatter.before({
  "duration": 79599,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "verify Patient can view membership details",
  "description": "",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;verify-patient-can-view-membership-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@details"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "Patient was on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Patient clicks on \"Memberships\" in menu",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "he should be able to view the following details with title \"Current Membership\"",
  "rows": [
    {
      "cells": [
        "Billing frequency: Monthly"
      ],
      "line": 44
    },
    {
      "cells": [
        "Net Price: 50 £"
      ],
      "line": 45
    },
    {
      "cells": [
        "VAT: 0 £"
      ],
      "line": 46
    },
    {
      "cells": [
        "Gross Price: 50 £"
      ],
      "line": 47
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NotificationsSteps.patient_was_on_homepage()"
});
formatter.result({
  "duration": 6505364799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Memberships",
      "offset": 19
    }
  ],
  "location": "InvoicesSteps.patientClicksOnInMenu(String)"
});
formatter.result({
  "duration": 5854080201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Current Membership",
      "offset": 60
    }
  ],
  "location": "MembershipSteps.heShouldBeAbleToViewTheFollowingDetailsWithTitle(String,String\u003e)"
});
formatter.result({
  "duration": 806437900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 442517600,
  "status": "passed"
});
});