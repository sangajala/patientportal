$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/membership.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Patient can enroll for  monthly membership while Registration",
  "description": "\r\nPatient will enroll for monthly membership while Registration\r\nthen Patient should be able to see monthly LGP membership scheme in membership page",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "",
  "description": "",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Patient was on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Patient click on signup button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Patient should be navigated to invite code page and able to see \"see our memberships scheme\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Patient click on see our membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Patient should be navigated to membership page with \"Memberships\" title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on LGP membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Patient should be able to view monthly membership scheme",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Patient select monthly scheme and click on Apply for Membership button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Patient should be navigated to disclaimer page with \"Disclaimer\" and \"Fees\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Patient accept conditions and click on Apply for Membership",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Patient should be navigated to register page with title \"Register\"",
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
  "name": "User should be in Confirm details page",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;;",
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
      "line": 33,
      "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;;;1"
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
      "line": 34,
      "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1147900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "",
  "description": "",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Patient was on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Patient click on signup button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Patient should be navigated to invite code page and able to see \"see our memberships scheme\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Patient click on see our membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Patient should be navigated to membership page with \"Memberships\" title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on LGP membership scheme button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Patient should be able to view monthly membership scheme",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Patient select monthly scheme and click on Apply for Membership button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Patient should be navigated to disclaimer page with \"Disclaimer\" and \"Fees\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Patient accept conditions and click on Apply for Membership",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Patient should be navigated to register page with title \"Register\"",
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
        "lellasreelakshmi123@gmail.com"
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
        "07543571654"
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
  "name": "User should be in Confirm details page",
  "keyword": "Then "
});
formatter.match({
  "location": "MembershipSteps.patientWasOnLoginPage()"
});
formatter.result({
  "duration": 9782815200,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patient_click_on_signup_button()"
});
formatter.result({
  "duration": 590138100,
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
  "duration": 104498800,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patientClickOnSeeOurMembershipSchemeButton()"
});
formatter.result({
  "duration": 121028200,
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
  "duration": 56911200,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.click_on_LGP_membership_scheme_button()"
});
formatter.result({
  "duration": 266899100,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patient_should_be_able_to_view_monthly_membership_scheme()"
});
formatter.result({
  "duration": 269315800,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patient_select_monthly_scheme_and_click_on_Apply_for_Membership_button()"
});
formatter.result({
  "duration": 120897400,
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
  "duration": 103571600,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.patient_accept_conditions_and_click_on_Apply_for_Membership()"
});
formatter.result({
  "duration": 401717000,
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
  "duration": 40973800,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.provide_below_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 1744578000,
  "status": "passed"
});
formatter.match({
  "location": "RegloginMeddbaseSteps.click_on_Next_button()"
});
formatter.result({
  "duration": 94573600,
  "status": "passed"
});
formatter.match({
  "location": "MembershipSteps.userShouldBeInConfirmDetailsPage()"
});
formatter.result({
  "duration": 303311000,
  "status": "passed"
});
formatter.after({
  "duration": 735353100,
  "status": "passed"
});
formatter.before({
  "duration": 111900,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "verify Patient can view membership details",
  "description": "",
  "id": "verify-patient-can-enroll-for--monthly-membership-while-registration;verify-patient-can-view-membership-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@details"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "Patient was on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Patient clicks on \"Memberships\" in menu",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "he should be able to view the following details with title \"Current Membership\"",
  "rows": [
    {
      "cells": [
        "Billing frequency: Monthly"
      ],
      "line": 43
    },
    {
      "cells": [
        "Net Price: 50 £"
      ],
      "line": 44
    },
    {
      "cells": [
        "VAT: 0 £"
      ],
      "line": 45
    },
    {
      "cells": [
        "Gross Price: 50 £"
      ],
      "line": 46
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NotificationsSteps.patient_was_on_homepage()"
});
formatter.result({
  "duration": 14414600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1EBNG06\u0027, ip: \u0027192.168.0.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat pageObjects.loginPage.NavigateToUrl(loginPage.java:58)\r\n\tat stepDefinitions.NotificationsSteps.patient_was_on_homepage(NotificationsSteps.java:22)\r\n\tat ✽.Given Patient was on homepage(src/test/java/features/membership.feature:40)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 413600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1EBNG06\u0027, ip: \u0027192.168.0.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat stepDefinitions.AfterActionsHook.tearDown(AfterActionsHook.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:110)\r\n",
  "status": "failed"
});
});