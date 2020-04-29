package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import utils.Base;

public class notificationsSteps extends Base {

    int homePageCount = 0;
    int notifCountBeforeBookingApp = 0;
    int notifCountAfterBookingApp;

    @Given("^Patient was on homepage$")
    public void patient_was_on_homepage() throws Throwable {
        initializeDriver();
        loginpage.NavigateToUrl();
        loginpage.loginToMeddBase();
        Assert.assertTrue(loginpage.isUserLoggedIn());
    }

    @Given("^gets the count of notifications by accessing notification icon$")
    public void gets_the_count_of_notifications_by_accessing_notification_icon() throws Throwable {
        homepage.clickOnNotificationIcon();
        homepage.clickOnAllNotificationLink();
        notifCountBeforeBookingApp = allnotificationspage.getCountOfNotifiactions(driver);
    }

    @Given("^gets the count of notifications in home page notification panel$")
    public void gets_the_count_of_notifications_in_home_page_notification_panel() throws Throwable {
        //  notifCountBeforeBookingApp=allnotificationspage.getCountOfNotifiactions(driver);
        homePageCount = homepage.getNoOfRowsInTable(driver);
    }

    @When("^Patient clicks on HomePage icon$")
    public void patient_clicks_on_HomePage_icon() throws Throwable {

    }

    @Then("^Patient should view appointment notification and invoice for newly booked appointment in homepage notifications panel$")
    public void patientShouldViewAppointmentNotificationAndInvoiceForNewlyBookedAppointmentInHomepageNotificationsPanel() {
        homepage.reload();
    }

    @When("^Patient clicks on Notifications icon and clicks on All Notifications in dropdown menu$")
    public void patient_clicks_on_Notifications_icon_and_clicks_on_All_Notifications_in_dropdown_menu() throws Throwable {
        homepage.clickOnNotificationIcon();
        homepage.clickOnAllNotificationLink();

    }

    @Then("^Patient should view appointment notification and invoice for newly booked appointment in notifications$")
    public void patient_should_view_appointment_notification_and_invoice_for_newly_booked_appointment_in_notifications() throws Throwable {
        notifCountBeforeBookingApp = notifCountBeforeBookingApp + 2;
        notifCountAfterBookingApp = allnotificationspage.getCountOfNotifiactions(driver);
        System.out.println("Before booking " + notifCountBeforeBookingApp);
        Assert.assertEquals(notifCountBeforeBookingApp, notifCountAfterBookingApp);
        System.out.println("After booking " + notifCountAfterBookingApp);
    }

    @Then("^Patient should not view appointment notification and invoice for cancelled appointment$")
    public void patient_should_not_view_appointment_notification_and_invoice_for_cancelled_appointment() throws Throwable {

    }

    @Then("^Patient should not view appointment notification and invoice for newly booked appointment in notifications$")
    public void patient_should_not_view_appointment_notification_and_invoice_for_newly_booked_appointment_in_notifications() throws Throwable {

    }


}
