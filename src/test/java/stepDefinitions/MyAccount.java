package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import utils.basePage;

import java.io.IOException;

public class MyAccount extends baseStepDefs {

    @Given("^patient with my account login to the portal$")
    public void patientWithAllFullMedicalHistoryLogsIntoThePortal() {
        loginpage.loginToMeddBase(prop.getProperty("myaccount_medical_history_username"), prop.getProperty("myaccount_medical_history_password"));
    }


    @When("^Patient Choose MyAccount$")
    public void patient_Choose_MyAccount() throws Throwable {
        accountdetailspage.gotoMyAccount();
    }

    @When("^Patient enters Firstname as \"([^\"]*)\"$")
    public void patientEntersFirstnameAs(String fn) throws Throwable {

        utils.Write(accountdetailspage.FirstName, fn);

    }

    //
    @When("^Surname as \"([^\"]*)\"$")
    public void surnameAs(String sn) throws Throwable {
        utils.Write(accountdetailspage.SurName, sn);

    }

    //
    @When("^Patient enters Relationship as \"([^\"]*)\" and TelephoneNumber as \"([^\"]*)\"$")
    public void patient_enters_Relationship_as_and_TelephoneNumber_as(String rel, String TeleNo) throws Throwable {
        utils.Write(accountdetailspage.Relationship, rel);
        utils.Write(accountdetailspage.TelephoneNumb, TeleNo);
    }

    //
    @When("^Patient enters Address(\\d+) as \"([^\"]*)\" and City as \"([^\"]*)\"$")
    public void patient_enters_Address_as_and_City_as(String add1, String Add2, String city) throws Throwable {
        utils.Write(accountdetailspage.Address1, add1);
        utils.Write(accountdetailspage.Address2, Add2);
        utils.Write(accountdetailspage.Address1, city);
    }

    //
//
    @When("^Patient enters Country as \"([^\"]*)\" and Postcode as \"([^\"]*)\"$")
    public void patient_enters_Country_as_and_Postcode_as(String county, String postcode) throws Throwable {

        utils.Write(accountdetailspage.County, county);
        utils.Write(accountdetailspage.Postcode, postcode);
    }

    @And("^Patient enters Password as \"([^\"]*)\"$")
    public void patientEntersPasswordAs(String pass) throws Throwable {
        utils.Write(accountdetailspage.Password, pass);
    }


    //
    @When("^select Save Changes button$")
    public void select_Save_Changes_button() throws Throwable {
        accountdetailspage.setClickSavechangeButton();
    }

    //
    @Then("^Message is displayed Account Updated Successfully$")
    public void message_is_displayed_Account_Updated_Successfully() throws Throwable {
        accountdetailspage.displayupdatesuccessfully();
    }

    //
    @And("^Patient checked the Email checkbox for Appointment booked confirmation$")
    public void patientCheckedTheEmailCheckboxForAppointmentBookedConfirmation() throws Throwable {
        accountdetailspage.Clickonemailcheckboxtobookappointment();
    }

    @And("^Patient  checked the SMS checkbox for Appointment booked confirmation$")
    public void patientCheckedTheSMSCheckboxForAppointmentBookedConfirmation() throws Throwable {
        accountdetailspage.Clickonsmscheckboxtobookappointment();
    }

    @Then("^\"([^\"]*)\" message is displayed$")
    public void messageIsDisplayed(String arg0) throws Throwable {
        accountdetailspage.displayupdatesuccessfully();
    }


    @Then("^patient is logggedout$")
    public void patientIsLogggedout() throws IOException {
        homepage.ClickUserIcon();
        homepage.Clickmyaccount();
        homepage.ClickLogOut();
    }

    @When("^patient logged in back$")
    public void patientLoggedInBack() throws IOException {
        loginpage.NavigateToUrl();
        loginpage.loginToMeddBase();
    }

    @Then("^patient should see the account page being updated$")
    public void patientShouldSeeTheAccountPageBeingUpdated() throws IOException, InterruptedException {
        homepage.ClickUserIcon();
        homepage.Clickmyaccount();
        utils.waitForElementPresence(driver, By.xpath("//*[@id=\"ng-app\"]/body/div/div[2]/div[4]/div/div"));
    }

    //
    @And("^clear the input data in the form$")
    public void clearTheInputDataInTheForm() throws Throwable {
        accountdetailspage.clearaccountdetilsfields();
    }

    @Then("^data updated should be \"([^\"]*)\"$")
    public void dataUpdatedShouldBe(String arg0) throws Throwable {

    }

    @And("^Patient in my account page enters Password$")
    public void patientInMyAccountPageEntersPassword() {
        utils.Write(accountdetailspage.Password, prop.getProperty("myaccount_medical_history_password"));
    }
}




