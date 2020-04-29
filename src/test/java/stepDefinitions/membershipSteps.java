package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.membershipEnrollment;
import utils.Base;

import java.util.Map;

import static utils.Base.loginpage;

public class membershipSteps extends Base {

    @Given("^As end user I was on login page$")
    public void as_end_user_I_was_on_login_page() throws Throwable {
        initializeDriver();
        loginpage.NavigateToUrl();
    }

    @When("^I click on signup button$")
    public void i_click_on_signup_button() throws Throwable {
        loginpage.clicksignupbutton();
    }

    @Then("^I should be navigated to invite code page and able to see \"([^\"]*)\" option$")
    public void iShouldBeNavigatedToInviteCodePageAndAbleToSeeOption(String arg0) throws Throwable {
        Assert.assertTrue(membershipenrollment.isSeeOurMembershipSchemeButtonDisplayed());
    }

    @When("^I click on see our membership scheme button$")
    public void iClickOnSeeOurMembershipSchemeButton() {
        membershipenrollment.clickonSeeOurMembershipSchemeButton();
//utils.click(driver,membershipenrollment.seeOurMembershipSchemeButton);
    }

    @Then("^I should be navigated to membership page$")
    public void iShouldBeNavigatedToMembershipPage() {
        Assert.assertTrue(membershipenrollment.isMembershipPageDisplayed());
    }


    @When("^I click on LGP membership scheme button$")
    public void i_click_on_LGP_membership_scheme_button() throws Throwable {
        membershipenrollment.clickonLGPScheme();
    }

    @Then("^I should be able to view monthly membership scheme$")
    public void i_should_be_able_to_view_monthly_membership_scheme() throws Throwable {
        Assert.assertTrue(membershipenrollment.ismonthlySchemeDisplayed());
    }

    @Then("^I select monthly scheme and click on Apply for Membership button$")
    public void i_select_monthly_scheme_and_click_on_Apply_for_Membership_button() throws Throwable {
        membershipenrollment.clickonApplyMembershipSchemeButton();
    }

    @Then("^I should be navigated to disclaimer page with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iShouldBeNavigatedToDisclaimerPageWithAnd(String arg0, String arg1) throws Throwable {
        Assert.assertTrue(membershipenrollment.isDisclaimerPageDisplayed());
    }

    @When("^I accept conditions and click on Apply for Membership$")
    public void i_accept_conditions_and_click_on_Apply_for_Membership() throws Throwable {
        membershipenrollment.clickonCheckboxesandApplyMembership();
    }

    @Then("^I should be navigated to register page with title \"([^\"]*)\"$")
    public void iShouldBeNavigatedToRegisterPageWithTitle(String arg0) throws Throwable {
        Assert.assertTrue(membershipenrollment.isRegisterPageDisplayed());
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

    @Then("^I should be able to register successfully$")
    public void i_should_be_able_to_register_successfully() throws Throwable {

    }


}
