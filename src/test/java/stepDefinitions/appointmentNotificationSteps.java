package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import utils.basePage;

import java.util.ArrayList;
import java.util.List;

public class AppointmentNotificationSteps extends baseStepDefs {



    List<String> appntDetails=new ArrayList<String>();


    @Given("^get appointment details$")
    public void get_appointment_details() throws Throwable {
        appntDetails.add(appointmentdetails.getAppointmentPrice());
        appntDetails.add(appointmentdetails.getAppointmentSite());
        appntDetails.add(appointmentdetails.getAppointSchedule());
        appntDetails.add(appointmentdetails.getAppointmentClinician());
        appntDetails.add(appointmentdetails.getAppointType());
        for (String data : appntDetails)
        {
            System.out.println(data);
        }
    }

    @When("^Patient clicks on \"([^\"]*)\" notification in notification panel$")
    public void patient_clicks_on_notification_in_notification_panel(String arg1) throws Throwable {
        homepage.toReloadPage();
        homepage.clickOnfirstNotification();
    }


    @Then("^Patient should be able to view the recently booked appointment in the home page$")
    public void patientShouldBeAbleToViewTheRecentlyBookedAppointmentInTheHomePage() throws Exception {

       for (String data : appntDetails) {
            Assert.assertTrue(existingappointments.isAppointmentDataPresent(data));

        }

    }
}



