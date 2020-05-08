package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;



public class bookAppointmentSteps extends baseStepDefs {
    int countOfExistingAppointments,countOfUpcomingApptmt;
    @Given("^Patient navigates to Meddbase Patient Portal Login Page$")
    public void patient_navigates_to_Meddbase_Patient_Portal_Login_Page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

        loginpage.NavigateToUrl();

    }

    @When("^patient enters username as \"([^\"]*)\" Password as \"([^\"]*)\"$")
    public void patient_enters_username_as_Password_as(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        utils.writeToWebElement(loginpage.getUserName(),arg1);
        utils.writeToWebElement(loginpage.getPassWord(),arg2);

    }

    @When("^clicks on Signin$")
    public void clicks_on_Signin() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        utils.clickOnWebElement(driver,loginpage.getSignIn());

    }

    @Then("^Patient should be navigated to Meddbase Patient Portal Homepage$")
    public void patient_should_be_navigated_to_Meddbase_Patient_Portal_Homepage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // Assert.assertTrue(navbarpage.VerifyBookAppointment(),"Not logged in successfully");
        Assert.assertTrue(loginpage.isUserLoggedIn(),"Patient not logged in succesfully");

    }

    @When("^Patient clicks on Book Appointment$")
    public void patient_clicks_on_Book_Appointment() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // navbarpage.gotoMenu("Book Appointment");
        utils.clickOnWebElement(driver,navbarpage.getBookappointment());
    }

    @And("^chooses Payer Type as \"([^\"]*)\"$")
    public void choosesPayerTypeAs(String pType) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bookappointment.choosePayerType(pType);

    }

    @And("^Appointment Type as \"([^\"]*)\"$")
    public void appointmentTypeAs(String AType) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bookappointment.chooseAppointmentType(AType);

    }


    @Then("^Patient should be navigated to Appointment filters page and see a message \"([^\"]*)\"$")
    public void patientShouldBeNavigatedToAppointmentFiltersPageAndSeeAMessage(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bookappointment.navigateApp(arg0,bookappointment.getApptmtFiltersMsg())  ;


    }

    @When("^Patient clicks on Search button$")
    public void patientClicksOnSearchButton() {
        utils.clickOnWebElement(driver,bookappointment.getSearchBtn());
    }

    @Then("^Appointment search Results should be displayed$")
    public void appointmentSearchResultsShouldBeDisplayed() {
        bookappointment.searchResultsDisplayed();
    }


    @When("^Patient clicks on \"([^\"]*)\" available appointment details$")
    public void patientClicksOnAvailableAppointmentDetails(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        int pos=Integer.parseInt(arg0);
        bookappointment.clickOnSpecificAvailableAppointment(pos);

        //throw new PendingException();
    }

     @Then("^Patient sees a message \"([^\"]*)\" on Appointment Details page$")
    public void patientSeesAMessageOnAppointmentDetailsPage(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
         bookappointment.navigateApp(arg0,bookappointment.getApptmtDetMsg());

    }

   /* @When("^Patient clicks on Book Appointment button$")
    public void patientClicksOnBookAppointmentButton() {
        utils.clickOnWebElement(driver,bookappointment.getBookAppointmentBtn());
    }*/


    @Then("^Appointment Booking Complete confirmation message \"([^\"]*)\" should be displayed$")
    public void appointmentBookingCompleteConfirmationMessageShouldBeDisplayed(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bookappointment.navigateApp(arg0,bookappointment.getBookingCompleteMsg());

    }

    @When("^Patient clicks on Existing Appointments$")
    public void patientClicksOnExistingAppointments() {
        utils.clickOnWebElement(driver,navbarpage.getExistingappointments());
        bookappointment.searchResultsDisplayed();
    }

    @Then("^Patient should be able to view recently Booked Appointments with a message \"([^\"]*)\"$")
    public void patientShouldBeAbleToViewRecentlyBookedAppointmentsWithAMessage(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bookappointment.navigateApp(arg0,bookappointment.getExistingApptmtMsg());



    }

    @When("^Patient clicks on \"([^\"]*)\" available existing Appointment details$")
    public void patientClicksOnAvailableExistingAppointmentDetails(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        int pos=Integer.parseInt(arg0);
        bookappointment.clickOnSpecificAvailableAppointment(pos);
    }

    @Then("^Cancel Appointment button should be visible$")
    public void cancelAppointmentButtonShouldBeVisible() {
        Assert.assertTrue(bookappointment.getCancelApptmtBtn().isDisplayed());

    }

    @When("^Patient clicks Cancel Appointment button$")
    public void patientClicksCancelAppointmentButton() {
        utils.clickOnWebElement(driver,bookappointment.getCancelApptmtBtn());
    }


    @Then("^Cancel Info Page with a message \"([^\"]*)\" should be displayed$")
    public void cancelInfoPageWithAMessageShouldBeDisplayed(String arg0) throws Throwable {
        bookappointment.navigateApp(arg0,bookappointment.getCancelFeeMsg());

    }

    @When("^Patient clicks on Cancel Appointment button on Cancel Info page$")
    public void patientClicksOnCancelAppointmentButtonOnCancelInfoPage() {
        utils.clickOnWebElement(driver,bookappointment.getCancelApptmtBtn2());
    }

    @Then("^Appointment successfully cancelled message \"([^\"]*)\"should be displayed$")
    public void appointmentSuccessfullyCancelledMessageShouldBeDisplayed(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bookappointment.navigateApp(arg0,bookappointment.getCancelConfirmMsg());
    }


    @When("^Patient clicks on Preferred Clinician$")
    public void patientClicksOnPreferredClinician() {
        utils.clickOnWebElement(driver,bookappointment.getPreferredClinician());
    }



    @And("^chooses  Preferred Clinician  as \"([^\"]*)\"$")
    public void choosesPreferredClinicianAs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bookappointment.choosePreferredClinicianAs(arg0);
    }

    @When("^Patient clicks on Preferred Site$")
    public void patientClicksOnPreferredSite() {
        utils.clickOnWebElement(driver,bookappointment.getPreferredSite());
    }

    @And("^chooses Preferred Site as \"([^\"]*)\"$")
    public void choosesPreferredSiteAs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bookappointment.choosePreferredSiteAs(arg0);
    }

    @When("^Patient clicks on Preferred Time and Date$")
    public void patientClicksOnPreferredTimeAndDate() {
        utils.clickOnWebElement(driver,bookappointment.getPreferredTimeDate());
    }


    @And("^chooses Preferred Time and Date as \"([^\"]*)\"  \"([^\"]*)\"$")
    public void choosesPreferredTimeAndDateAs(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
     bookappointment.choosesPreferredTimeAndDateAs(arg0,arg1);
    }

   /* @When("^Patient clicks on Book Appointment on Details Page$")
    public void patientClicksOnBookAppointmentOnDetailsPage() {
        utils.clickOnWebElement(driver,bookappointment.getBookAppointmentBtn());
    }*/

    @When("^Patient clicks on Book Appointment button on Details Page$")
    public void patientClicksOnBookAppointmentButtonOnDetailsPage() {
        utils.clickOnWebElement(driver,bookappointment.getBookAppointmentBtn());
    }

    @And("^gets the count of existing appointments$")
    public void getsTheCountOfExistingAppointments() {
    countOfExistingAppointments=bookappointment.getsearchResults().size();
    System.out.println("Count of existing Appointments :"+countOfExistingAppointments);}

    @Then("^the count of existing appointments should increase$")
    public void theCountOfExistingAppointmentsShouldIncrease() {
     int incrementedCount=bookappointment.getsearchResults().size();
     System.out.println("incremented Count :"+incrementedCount);
     Assert.assertTrue(incrementedCount>countOfExistingAppointments);
    }

    @Then("^the count of existing appointments should decrease$")
    public void theCountOfExistingAppointmentsShouldDecrease() {
        int decrementedCount=bookappointment.getsearchResults().size();
        System.out.println("decremented Count :"+decrementedCount);
        Assert.assertTrue(decrementedCount<countOfExistingAppointments);

    }

    @When("^Patient clicks on Online Portal$")
    public void patientClicksOnOnlinePortal() {
        utils.clickOnWebElement(driver,homepage.getOnlinePortalLink());
        homepage.chkAppointmentNotifications();
    }

    @Then("^gets the count of upcoming Appointment notifications$")
    public void getsTheCountOfUpcomingAppointmentNotifications() {
        countOfUpcomingApptmt=homepage.getNoOfRowsInTable(driver);
    }

    @Then("^the count of upcoming appointments should increase$")
    public void theCountOfUpcomingAppointmentsShouldIncrease() {
        int incrementedCountApp=homepage.getNoOfRowsInTable(driver);
        System.out.println("incremented CountApp :"+incrementedCountApp);
        Assert.assertTrue(incrementedCountApp>countOfUpcomingApptmt);

    }

    @Then("^the count of upcoming appointments should decrease$")
    public void theCountOfUpcomingAppointmentsShouldDecrease() {
        int decrementedCountApp=homepage.getNoOfRowsInTable(driver);
        System.out.println("decremented CountApp :"+decrementedCountApp);
        Assert.assertTrue(decrementedCountApp<countOfUpcomingApptmt);

    }
}
