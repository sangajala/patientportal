$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/membership.feature");
formatter.feature({
  "line": 1,
  "name": "Verify user can enroll for  monthly membership while Registration",
  "description": "As a user\r\nI will enroll for monthly membership while Registration\r\nthen I should be able to see monthly LGP membership scheme in membership page",
  "id": "verify-user-can-enroll-for--monthly-membership-while-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "",
  "description": "",
  "id": "verify-user-can-enroll-for--monthly-membership-while-registration;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "As end user I was on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on signup button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be navigated to invite code page and able to see \"see our memberships scheme\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on see our membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be navigated to membership page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on LGP membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be able to view monthly membership scheme",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I select monthly scheme and click on Apply for Membership button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be navigated to disclaimer page with \"Disclaimer\" and \"Fees\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I accept conditions and click on Apply for Membership",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should be navigated to register page with title \"Register\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "provide below details for registration",
  "rows": [
    {
      "cells": [
        "Password",
        "\u003cPassword\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "First Name",
        "\u003cFirst Name\u003e"
      ],
      "line": 21
    },
    {
      "cells": [
        "Last Name",
        "\u003cLast Name\u003e"
      ],
      "line": 22
    },
    {
      "cells": [
        "Day",
        "\u003cDay\u003e"
      ],
      "line": 23
    },
    {
      "cells": [
        "Month",
        "\u003cMonth\u003e"
      ],
      "line": 24
    },
    {
      "cells": [
        "Year",
        "\u003cYear\u003e"
      ],
      "line": 25
    },
    {
      "cells": [
        "Email Address",
        "\u003cEmail address\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "Postcode",
        "\u003cPostcode\u003e"
      ],
      "line": 27
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "\u003cMobile Phone Number\u003e"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "should  be able to see the \"\u003cError Message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "verify-user-can-enroll-for--monthly-membership-while-registration;;",
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
        "Mobile Phone Number",
        "Error Message"
      ],
      "line": 35,
      "id": "verify-user-can-enroll-for--monthly-membership-while-registration;;;1"
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
        "lellasreelakshmiabc@gmail.com",
        "SL3 8DD",
        "",
        "Online Portal page is opened"
      ],
      "line": 36,
      "id": "verify-user-can-enroll-for--monthly-membership-while-registration;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1701900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "",
  "description": "",
  "id": "verify-user-can-enroll-for--monthly-membership-while-registration;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "As end user I was on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on signup button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be navigated to invite code page and able to see \"see our memberships scheme\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on see our membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be navigated to membership page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on LGP membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be able to view monthly membership scheme",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I select monthly scheme and click on Apply for Membership button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be navigated to disclaimer page with \"Disclaimer\" and \"Fees\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I accept conditions and click on Apply for Membership",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should be navigated to register page with title \"Register\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
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
      "line": 20
    },
    {
      "cells": [
        "First Name",
        "sree"
      ],
      "line": 21
    },
    {
      "cells": [
        "Last Name",
        "lella"
      ],
      "line": 22
    },
    {
      "cells": [
        "Day",
        "20"
      ],
      "line": 23
    },
    {
      "cells": [
        "Month",
        "Aug"
      ],
      "line": 24
    },
    {
      "cells": [
        "Year",
        "1985"
      ],
      "line": 25
    },
    {
      "cells": [
        "Email Address",
        "lellasreelakshmiabc@gmail.com"
      ],
      "line": 26
    },
    {
      "cells": [
        "Postcode",
        "SL3 8DD"
      ],
      "line": 27
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "should  be able to see the \"Online Portal page is opened\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "membershipSteps.as_end_user_I_was_on_login_page()"
});
formatter.result({
  "duration": 7287742600,
  "status": "passed"
});
formatter.match({
  "location": "membershipSteps.i_click_on_signup_button()"
});
formatter.result({
  "duration": 412974400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "see our memberships scheme",
      "offset": 59
    }
  ],
  "location": "membershipSteps.iShouldBeNavigatedToInviteCodePageAndAbleToSeeOption(String)"
});
formatter.result({
  "duration": 93334700,
  "status": "passed"
});
formatter.match({
  "location": "membershipSteps.iClickOnSeeOurMembershipSchemeButton()"
});
formatter.result({
  "duration": 96250100,
  "status": "passed"
});
formatter.match({
  "location": "membershipSteps.iShouldBeNavigatedToMembershipPage()"
});
formatter.result({
  "duration": 50920300,
  "status": "passed"
});
formatter.match({
  "location": "membershipSteps.i_click_on_LGP_membership_scheme_button()"
});
formatter.result({
  "duration": 180509800,
  "status": "passed"
});
formatter.match({
  "location": "membershipSteps.i_should_be_able_to_view_monthly_membership_scheme()"
});
formatter.result({
  "duration": 169237000,
  "status": "passed"
});
formatter.match({
  "location": "membershipSteps.i_select_monthly_scheme_and_click_on_Apply_for_Membership_button()"
});
formatter.result({
  "duration": 72180200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disclaimer",
      "offset": 47
    },
    {
      "val": "Fees",
      "offset": 64
    }
  ],
  "location": "membershipSteps.iShouldBeNavigatedToDisclaimerPageWithAnd(String,String)"
});
formatter.result({
  "duration": 37020300,
  "status": "passed"
});
formatter.match({
  "location": "membershipSteps.i_accept_conditions_and_click_on_Apply_for_Membership()"
});
formatter.result({
  "duration": 278106900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 51
    }
  ],
  "location": "membershipSteps.iShouldBeNavigatedToRegisterPageWithTitle(String)"
});
formatter.result({
  "duration": 32161500,
  "status": "passed"
});
formatter.match({
  "location": "membershipSteps.provide_below_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 957583800,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 72729000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Portal page is opened",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 97168500,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.RegloginMeddbaseSteps.should_be_able_to_see_the(RegloginMeddbaseSteps.java:61)\r\n\tat ✽.Then should  be able to see the \"Online Portal page is opened\"(src/test/java/features/membership.feature:30)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1711364100,
  "status": "passed"
});
formatter.before({
  "duration": 85400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "As I subscribed for monthly membership scheme I can able to view the monthly membership details",
  "description": "",
  "id": "verify-user-can-enroll-for--monthly-membership-while-registration;as-i-subscribed-for-monthly-membership-scheme-i-can-able-to-view-the-monthly-membership-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.after({
  "duration": 67800,
  "status": "passed"
});
});