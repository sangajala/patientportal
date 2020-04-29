package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import utils.Base;

public class appointmentNotificationSteps extends Base {

    @Given("^Patient is in the Patient portal homepage$")
    public void patientIsInThePatientPortalHomepage() throws Exception {
        initializeDriver();
        loginpage.NavigateToUrl();
        loginpage.loginToMeddBase();
        Assert.assertTrue(loginpage.isUserLoggedIn());

    }

    @Then("^Patient should be able to view the recently booked appointment$")
    public void patientShouldBeAbleToViewTheRecentlyBookedAppointment() {
    homepage.chkAppointmentNotifications();
      // System.out.println(homepage.getNoOfRowsInTable(driver));
    }
}
