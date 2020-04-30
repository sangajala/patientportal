$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/regloginMeddBase.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validations",
  "description": "",
  "id": "registration;validations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "rows": [
    {
      "cells": [
        "Invite code",
        "\u003cInvite code\u003e"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "\u003cPassword\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "\u003cFirst Name\u003e"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "\u003cLast Name\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "\u003cDay\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "\u003cMonth\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "\u003cYear\u003e"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "\u003cEmail address\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "\u003cPostcode\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "\u003cMobile Phone Number\u003e"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"\u003cError Message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "registration;validations;",
  "rows": [
    {
      "cells": [
        "Invite code",
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
      "line": 24,
      "id": "registration;validations;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Please enter an invite code"
      ],
      "line": 25,
      "id": "registration;validations;;2"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Name isn\u0027t set."
      ],
      "line": 26,
      "id": "registration;validations;;3"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "keerthi",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Surname isn\u0027t set"
      ],
      "line": 27,
      "id": "registration;validations;;4"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$sssdfgghh",
        "myneni",
        "myn",
        "",
        "",
        "",
        "indramails@gmail.com",
        "",
        "",
        "Date of birth isn\u0027t set."
      ],
      "line": 28,
      "id": "registration;validations;;5"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "myn",
        "myn",
        "23",
        "",
        "",
        "indramails@gmail.com",
        "",
        "",
        "Date of birth isn\u0027t set."
      ],
      "line": 29,
      "id": "registration;validations;;6"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "myn",
        "myn",
        "",
        "Jun",
        "",
        "indramails@gmail.com",
        "",
        "",
        "Date of birth isn\u0027t set."
      ],
      "line": 30,
      "id": "registration;validations;;7"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "myn",
        "myn",
        "23",
        "Jun",
        "1986",
        "",
        "tw77rw",
        "07834771592",
        "Email address isn\u0027t set."
      ],
      "line": 31,
      "id": "registration;validations;;8"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "myn",
        "myn",
        "23",
        "Jun",
        "1986",
        "indramails@gmail.com",
        "",
        "",
        "Post code isn\u0027t set."
      ],
      "line": 32,
      "id": "registration;validations;;9"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "myn",
        "myn",
        "23",
        "Jun",
        "1986",
        "indramails@gmail.com",
        "tw77rw",
        "",
        "Phone number isn\u0027t set."
      ],
      "line": 33,
      "id": "registration;validations;;10"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "myn",
        "myn",
        "23",
        "Jun",
        "1986",
        "keerthi.allagmail.com",
        "tw77rw",
        "07834771592",
        "Email address isn\u0027t valid."
      ],
      "line": 34,
      "id": "registration;validations;;11"
    },
    {
      "cells": [
        "b0dc8",
        "",
        "myn",
        "myn",
        "23",
        "Jun",
        "1986",
        "indramails@gmail.com",
        "tw77rw",
        "07834771592",
        "Password isn\u0027t set."
      ],
      "line": 35,
      "id": "registration;validations;;12"
    },
    {
      "cells": [
        "b0dc8",
        "Banana",
        "myn",
        "myn",
        "23",
        "Jun",
        "1986",
        "indramails@gmail.com",
        "tw77rw",
        "07834771592",
        "Password should be at least 8 characters long."
      ],
      "line": 36,
      "id": "registration;validations;;13"
    },
    {
      "cells": [
        "b0dc8",
        "Sahithi0416",
        "myn",
        "myn",
        "23",
        "Jun",
        "1986",
        "indramails@gmail.com",
        "tw77rw",
        "07834771592",
        "This account is already registered on our system"
      ],
      "line": 37,
      "id": "registration;validations;;14"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "mun",
        "myn",
        "23",
        "Jun",
        "1986",
        "indramails@gmail.com",
        "tw77rw",
        "sdfghjjkkhgffghh",
        "The phone number includes unexpected characters."
      ],
      "line": 38,
      "id": "registration;validations;;15"
    },
    {
      "cells": [
        "b0dc8",
        "Bananaapps123$",
        "myn",
        "myn",
        "23",
        "Jun",
        "1986",
        "keerthi.allagmail.com",
        "tw7 7rw",
        "07834771592",
        "Email address isn\u0027t valid."
      ],
      "line": 39,
      "id": "registration;validations;;16"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3505700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        ""
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        ""
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        ""
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        ""
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        ""
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        ""
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        ""
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        ""
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        ""
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Please enter an invite code\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 10284800700,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 361802800,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 221073400,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 52100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter an invite code",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3255676000,
  "status": "passed"
});
formatter.after({
  "duration": 1502196200,
  "status": "passed"
});
formatter.before({
  "duration": 140900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        ""
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        ""
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        ""
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        ""
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        ""
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        ""
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        ""
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Name isn\u0027t set.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 8063869900,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 736271900,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 1054932800,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 249001400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name isn\u0027t set.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3129849600,
  "status": "passed"
});
formatter.after({
  "duration": 978306900,
  "status": "passed"
});
formatter.before({
  "duration": 84100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "keerthi"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        ""
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        ""
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        ""
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        ""
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        ""
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        ""
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Surname isn\u0027t set\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 8245085100,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 333710400,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 1150299000,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 253177400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname isn\u0027t set",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3158779300,
  "status": "passed"
});
formatter.after({
  "duration": 1064183500,
  "status": "passed"
});
formatter.before({
  "duration": 106100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$sssdfgghh"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myneni"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        ""
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        ""
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        ""
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        ""
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Date of birth isn\u0027t set.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7400427200,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 339480300,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 1424501800,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 171558100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date of birth isn\u0027t set.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3130048900,
  "status": "passed"
});
formatter.after({
  "duration": 1132708500,
  "status": "passed"
});
formatter.before({
  "duration": 70500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        ""
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        ""
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        ""
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Date of birth isn\u0027t set.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7363040100,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 337569500,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 1709795000,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 192609900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date of birth isn\u0027t set.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3136035800,
  "status": "passed"
});
formatter.after({
  "duration": 1003086900,
  "status": "passed"
});
formatter.before({
  "duration": 82000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        ""
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        ""
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        ""
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Date of birth isn\u0027t set.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7471363200,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 307233900,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 1819371000,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 219106300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date of birth isn\u0027t set.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3142635700,
  "status": "passed"
});
formatter.after({
  "duration": 1040722300,
  "status": "passed"
});
formatter.before({
  "duration": 96900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        ""
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "tw77rw"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "07834771592"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Email address isn\u0027t set.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7384550300,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 620648300,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 2212891500,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 198545400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email address isn\u0027t set.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3123756300,
  "status": "passed"
});
formatter.after({
  "duration": 1025386200,
  "status": "passed"
});
formatter.before({
  "duration": 117400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        ""
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Post code isn\u0027t set.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7257950700,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 302107100,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 1802242600,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 169487700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Post code isn\u0027t set.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3141657700,
  "status": "passed"
});
formatter.after({
  "duration": 942268800,
  "status": "passed"
});
formatter.before({
  "duration": 55100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "tw77rw"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        ""
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Phone number isn\u0027t set.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7360389000,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 631953700,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 2119010200,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 244708500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone number isn\u0027t set.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3155535700,
  "status": "passed"
});
formatter.after({
  "duration": 1169287500,
  "status": "passed"
});
formatter.before({
  "duration": 79100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "keerthi.allagmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "tw77rw"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "07834771592"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Email address isn\u0027t valid.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7665060400,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 329988400,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 2343194200,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 236586200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email address isn\u0027t valid.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3130364300,
  "status": "passed"
});
formatter.after({
  "duration": 935387900,
  "status": "passed"
});
formatter.before({
  "duration": 66800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        ""
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "tw77rw"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "07834771592"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Password isn\u0027t set.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7530343600,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 664964100,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 2264124300,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 203419100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password isn\u0027t set.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3145539300,
  "status": "passed"
});
formatter.after({
  "duration": 1021437500,
  "status": "passed"
});
formatter.before({
  "duration": 103300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Banana"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "tw77rw"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "07834771592"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Password should be at least 8 characters long.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7393793500,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 653947000,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 2491670400,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 254322600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password should be at least 8 characters long.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3146160500,
  "status": "passed"
});
formatter.after({
  "duration": 1106823200,
  "status": "passed"
});
formatter.before({
  "duration": 81100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Sahithi0416"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "tw77rw"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "07834771592"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"This account is already registered on our system\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7803193200,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 680576500,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 2599963800,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 261821500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This account is already registered on our system",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3165544600,
  "status": "passed"
});
formatter.after({
  "duration": 1109135600,
  "status": "passed"
});
formatter.before({
  "duration": 185100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "mun"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "indramails@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "tw77rw"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "sdfghjjkkhgffghh"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"The phone number includes unexpected characters.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7852166900,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 385888500,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 2631531900,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 227127000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The phone number includes unexpected characters.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3120354000,
  "status": "passed"
});
formatter.after({
  "duration": 970598900,
  "status": "passed"
});
formatter.before({
  "duration": 72400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Validations",
  "description": "",
  "id": "registration;validations;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "provide below details",
  "matchedColumns": [
    0,
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
        "Invite code",
        "b0dc8"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "Bananaapps123$"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "myn"
      ],
      "line": 11
    },
    {
      "cells": [
        "Last Name",
        "myn"
      ],
      "line": 12
    },
    {
      "cells": [
        "Day",
        "23"
      ],
      "line": 13
    },
    {
      "cells": [
        "Month",
        "Jun"
      ],
      "line": 14
    },
    {
      "cells": [
        "Year",
        "1986"
      ],
      "line": 15
    },
    {
      "cells": [
        "Email Address",
        "keerthi.allagmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Postcode",
        "tw7 7rw"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mobile Phone Number (required)",
        "07834771592"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should  be able to see the \"Email address isn\u0027t valid.\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegloginMeddbaseSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 7401669800,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.navigate_to_registration_page()"
});
formatter.result({
  "duration": 552446200,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.provide_below_details(DataTable)"
});
formatter.result({
  "duration": 2080985600,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 172272600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email address isn\u0027t valid.",
      "offset": 28
    }
  ],
  "location": "RegloginMeddbaseSteps.should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 3139108600,
  "status": "passed"
});
formatter.after({
  "duration": 1795263500,
  "status": "passed"
});
});