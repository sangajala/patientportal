package stepDefinitions.old;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import stepDefinitions.baseStepDefs;

public class NotificationsSteps extends baseStepDefs {

    int noOnIconBefore=0;
    int notifCountBefore=0;
    int notifCountAfter=0;
    int noOnIconAfter=0;
    String appmntType;

    @Given("^Patient was on homepage$")
    public void patient_was_on_homepage() throws Throwable {

        loginpage.NavigateToUrl();
        loginpage.loginToDoctorPortal();
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
    @When("^He clicks on All Notifications link in dropdown menu$")
    public void heClicksOnAllNotificationslinkInDropdownMenu() throws InterruptedException {
        homepage.clickOnAllNotificationLink();
    }
    @Then("^He should view appointment notification and invoice for newly booked appointment in notification page$")
    public void heShouldViewAppointmentNotificationAndInvoiceForNewlyBookedAppointmentInNotificationPage() {
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

    @Then("^He should not view appointment notification and invoice for cancelled appointment in notification page$")
    public void heShouldNotViewAppointmentNotificationAndInvoiceForCancelledAppointmentInNotificationPage() {

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

    @And("^get appointment type from details$")
    public void getAppointmentTypeFromDetails() {
        appmntType= appointmentdetails.getAppointType();
    }

    @When("^Patient clicks on Notifications icon$")
    public void patientClicksOnNotificationsIcon() {
        homepage.clickOnNotificationIcon();
    }

    @Then("^He should view booked \"([^\"]*)\" notification in notifications$")
    public void heShouldViewBookedNotificationInNotifications(String appmnt) throws Throwable {
        Assert.assertTrue(homepage.isAppntnotificationDisplayed(appmnt,appmntType));
    }

}
