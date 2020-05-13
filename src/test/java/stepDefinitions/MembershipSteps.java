package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.io.IOException;
import java.util.List;
import java.util.Map;



public class MembershipSteps extends baseStepDefs {


    @Given("^Patient was on login page$")
    public void patientWasOnLoginPage() throws IOException {

        loginpage.NavigateToUrl();
    }


    @When("^Patient click on signup button$")
    public void patient_click_on_signup_button() throws Throwable {
        loginpage.clicksignupbutton();
    }

    @Then("^Patient should be navigated to invite code page and able to see \"([^\"]*)\" option$")
    public void patientShouldBeNavigatedToInviteCodePageAndAbleToSeeOption(String arg0) throws Throwable {
        Assert.assertTrue(membershipenrollment.isSeeOurMembershipSchemeButtonDisplayed());
    }

    @When("^Patient click on see our membership scheme button$")
    public void patientClickOnSeeOurMembershipSchemeButton() {
        membershipenrollment.clickonSeeOurMembershipSchemeButton();
//utils.click(driver,membershipenrollment.seeOurMembershipSchemeButton);
    }

    @Then("^Patient should be navigated to membership page with \"([^\"]*)\" title$")
    public void patientShouldBeNavigatedToMembershipPageWithTitle(String arg0) throws Throwable {
        Assert.assertTrue(membershipenrollment.isMembershipPageDisplayed(arg0));
    }


    @When("^Click on LGP membership scheme button$")
    public void click_on_LGP_membership_scheme_button() throws Throwable {
        membershipenrollment.clickonLGPScheme();
    }

    @Then("^Patient should be able to view monthly membership scheme$")
    public void patient_should_be_able_to_view_monthly_membership_scheme() throws Throwable {
        Assert.assertTrue(membershipenrollment.ismonthlySchemeDisplayed());
    }

    @Then("^Patient select monthly scheme and click on Apply for Membership button$")
    public void patient_select_monthly_scheme_and_click_on_Apply_for_Membership_button() throws Throwable {
        membershipenrollment.clickonApplyMembershipSchemeButton();
    }

    @Then("^Patient should be navigated to disclaimer page with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void patientShouldBeNavigatedToDisclaimerPageWithAnd(String arg0, String arg1) throws Throwable {
        Assert.assertTrue(membershipenrollment.isDisclaimerPageDisplayed(arg0, arg1));
    }

    @When("^Patient accept conditions and click on Apply for Membership$")
    public void patient_accept_conditions_and_click_on_Apply_for_Membership() throws Throwable {
        membershipenrollment.clickonCheckboxesandApplyMembership();
    }

    @Then("^Patient should be navigated to register page with title \"([^\"]*)\"$")
    public void patientShouldBeNavigatedToRegisterPageWithTitle(String arg0) throws Throwable {
        Assert.assertTrue(membershipenrollment.isRegisterPageDisplayed(arg0));
    }

    @Then("^provide below details for registration$")
    public void provide_below_details_for_registration(DataTable datatable) throws Throwable {
        Map<String, String> testdata = datatable.asMap(String.class, String.class);

        for (Map.Entry<String, String> entry : testdata.entrySet()) {

            System.out.println("Key = " + entry.getKey() +
                    ", Value = " + entry.getValue());

            loginpage.enterDataAndSubmit(entry.getKey(), entry.getValue());
        }

    }

    @Then("^User should be in Confirm details page$")
    public void userShouldBeInConfirmDetailsPage() {
        Assert.assertTrue(loginpage.confirmButton());
    }


    @Then("^he should be able to view the following details with title \"([^\"]*)\"$")
    public void heShouldBeAbleToViewTheFollowingDetailsWithTitle(String arg0, List<String> dataTable) throws Throwable {
       Assert.assertTrue(membershipspage.isCurrentMembershipDisplayed(arg0));


        boolean flag = false;
        for (String data : dataTable) {
            if (membershipspage.areMembershipDetailsDisplayed(data)) {
                flag = true;
            }
            Assert.assertTrue(flag);
        }

    }


}

