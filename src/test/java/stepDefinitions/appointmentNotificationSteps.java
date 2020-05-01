package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import utils.Base;

public class appointmentNotificationSteps extends Base {



    String appointmentType;
    String appointmentPrice;
    String appointmentClinician;
    String appointmentSchedule;
    String appointmentSite;

    @Given("^get appointment details$")
    public void get_appointment_details() throws Throwable {

         appointmentType=appointmentdetails.getAppointSchedule();
         appointmentPrice=appointmentdetails.getAppointSchedule();
         appointmentClinician=appointmentdetails.getAppointSchedule();
         appointmentSchedule=appointmentdetails.getAppointSchedule();
         appointmentSite=appointmentdetails.getAppointSchedule();


    }

    @When("^Patient clicks on \"([^\"]*)\" notification in notification panel$")
    public void patient_clicks_on_notification_in_notification_panel(String arg1) throws Throwable {
       homepage.clickOnfirstNotification();
    }

    @Then("^Patient should be able to view the recently booked appointment$")
    public void patient_should_be_able_to_view_the_recently_booked_appointment() throws Throwable {




    }

}



