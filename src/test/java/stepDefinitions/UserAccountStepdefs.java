package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class UserAccountStepdefs extends baseStepDefs {
    @Given("^Admin is in login page$")
    public void adminNavigateToUrl() throws Throwable {
        loginpage.NavigateToUrl();
    }

    @When("^Admin login with username and password as \"([^\"]*)\" \"([^\"]*)\"$")
    public void adminUsernameAndPasswordAs(String username, String password) throws Throwable {
        loginpage.loginToDoctorPortal(username,password);
    }

    @Then("^Admin should not be navigate to Home page with \"([^\"]*)\"$")
    public void adminShouldNotBeNavigateToHomePageWith(String title) throws Throwable {
        Assert.assertFalse(title.equals(homepage.getTheTitleOfThePage()));
    }

    @Then("^Admin should be navigate to Home page with \"([^\"]*)\"$")
    public void adminShouldBeNavigateToHomePageWith(String title) throws Throwable {
        Assert.assertEquals(title,homepage.getTheTitleOfThePage());
    }

    @And("^Admin should able to see Dashboard$")
    public void adminShouldAbleToSeeDashboard() {
        Assert.assertTrue(homepage.isUserCanSeeDashBoard());
    }

    @When("^Admin select log out$")
    public void adminSelectLogOut() {
        homepage.logout();
    }

    @Then("^Admin should be navigate back to Login page successfully$")
    public void adminShouldBeNavigateBackToLoginPageSuccessfully() {
        Assert.assertTrue(loginpage.isUserInLoginPage());
    }
}
