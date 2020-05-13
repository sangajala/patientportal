package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;
import utils.basePage;

public class appointmentNotificationSteps extends baseStepDefs {

    @Given("^Patient is in the Patient portal homepage$")
    public void patientIsInThePatientPortalHomepage() throws Exception {
        loginpage.NavigateToUrl();
        loginpage.loginToMeddBase();
        Assert.assertTrue(loginpage.isUserLoggedIn());

    }

    @Then("^Patient should be able to view the recently booked appointment$")
    public void patientShouldBeAbleToViewTheRecentlyBookedAppointment() {
    homepage.chkAppointmentNotifications();
    }
}
