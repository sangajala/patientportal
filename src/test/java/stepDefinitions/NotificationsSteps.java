package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import utils.Base;

public class NotificationsSteps extends Base {

    int noOnIconBefore=0;
    int notifCountBefore=0;
    int notifCountAfter=0;
    int noOnIconAfter=0;

    @Given("^Patient was on homepage$")
    public void patient_was_on_homepage() throws Throwable {
        initializeDriver();
        loginpage.NavigateToUrl();
        loginpage.loginToMeddBase();
        Assert.assertTrue(loginpage.isUserLoggedIn());
    }

    @And("^gets the number on notification icon$")
    public void getsTheNumberOnNotificationIcon() {
        noOnIconBefore = homepage.getNoOnNotificationIcon();

    }

    @Given("^gets the count of notifications by accessing notification icon$")
    public void gets_the_count_of_notifications_by_accessing_notification_icon() throws Throwable {
        homepage.clickOnNotificationIcon();
        homepage.clickOnAllNotificationLink();
        notifCountBefore = allnotificationspage.getCountOfNotifiactions();
    }

    @Then("^the number on notification icon should be increased by refreshing the page$")
    public void theNumberOnNotificationIconShouldBeIncreasedByRefreshingThePage() {
        homepage.toReloadPage();
        //noOnIconBefore = noOnIconBefore + 2;
        noOnIconAfter = homepage.getNoOnNotificationIcon();
        Assert.assertTrue(noOnIconBefore<noOnIconAfter);

    }


    @When("^Patient clicks on Notifications icon and clicks on All Notifications in dropdown menu$")
    public void patient_clicks_on_Notifications_icon_and_clicks_on_All_Notifications_in_dropdown_menu() throws Throwable {
        homepage.clickOnNotificationIcon();
        homepage.clickOnAllNotificationLink();

    }

    @Then("^Patient should view appointment notification and invoice for newly booked appointment in notifications$")
    public void patient_should_view_appointment_notification_and_invoice_for_newly_booked_appointment_in_notifications() throws Throwable {

        System.out.println("Before booking " + notifCountBefore);
        //notifCountBefore = notifCountBefore + 2;
        notifCountAfter = allnotificationspage.getCountOfNotifiactions();
        Assert.assertTrue(notifCountBefore<notifCountAfter);
        System.out.println("After booking " + notifCountAfter);
    }

    @Then("^the number on notification icon should be decreased by refreshing the page$")
    public void theNumberOnNotificationIconShouldBeDecreasedByRefreshingThePage() {
        homepage.toReloadPage();
        noOnIconAfter = homepage.getNoOnNotificationIcon();
        Assert.assertTrue(noOnIconBefore > noOnIconAfter);
    }

    @Then("^Patient should not view appointment notification and invoice for cancelled appointment in all notifications$")
    public void patientShouldNotViewAppointmentNotificationAndInvoiceForCancelledAppointmentInAllNotifications() {


        System.out.println("Before cancelling " + notifCountBefore);
        //notifCountBefore= notifCountBefore - 2;
        notifCountAfter = allnotificationspage.getCountOfNotifiactions();
        Assert.assertTrue(notifCountBefore > notifCountAfter);
        System.out.println("After cancelling " + notifCountAfter);
    }

    @Then("^Patient should be able to view incoming message notification$")
    public void patientShouldBeAbleToViewIncomingMessageNotification() {
        Assert.assertTrue(allnotificationspage.isMessageDisplayed());
    }
}
