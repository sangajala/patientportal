package stepDefinitions;


import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import utils.basePage;

import java.util.ArrayList;
import java.util.List;

public class AppointmentNotificationStep extends baseStepDefs {


    String appointmentType;


    @And("^get appointment type from details page$")
    public void getAppointmentTypeFromDetailsPage() {
        appointmentType = appointmentdetails.getAppointType();
    }


    @Then("^He should view booked appointment notification in homePage notifications$")
    public void heShouldViewBookedAppointmentNotificationInHomePageNotifications() {

        Assert.assertTrue(homepage.isAppntnotificationDisplayedinHomepage(appointmentType));
    }


}







