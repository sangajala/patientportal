package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.basePage;

import java.io.IOException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.endsWith;
import static org.hamcrest.Matchers.equalTo;

public class ShouldBeAbleToNavigateToFaqPageSteps extends baseStepDefs {

    @Given("^As end user i am the Patient booking website$")
    public void as_end_user_i_am_the_Patient_booking_website() throws IOException {

        loginpage.NavigateToUrl();
    }

    @When("^I will login by entering the \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_will_login_by_entering_the_and(String userName, String password) {
        loginpage.enterUserName().sendKeys(userName);
        loginpage.enterPassword().sendKeys(password);
        loginpage.ClickOnSignin();
    }

    @When("^I will click/tap on the FAQ link$")
    public void i_will_click_tap_on_the_FAQ_link() throws InterruptedException {

        homepage.clickFaqLink();
    }

    @Then("^I should be navigated to FAQ page$")
    public void i_should_be_navigated_to_FAQ_page() throws InterruptedException {
        assertThat("Navigated to wrong page , please invesigate",
                homepage.getTheCurrent(), endsWith("faq"));
    }

    @Then("^I Should view page title as \"([^\"]*)\"$")
    public void i_Should_view_page_title_as(String title) throws Throwable {
        assertThat("wrong title as been displayed pls investigate",
                faqpage.getTitle(), equalTo(title));
    }

    @Then("^I Should view all FAQS$")
    public void i_Should_view_all_FAQS() throws Throwable {
        assertThat("All Faqs not displayed pls be investigate",
                faqpage.getAllFAQSList().size() == 7);

    }


}
