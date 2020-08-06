package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.AccountdetailsPage;
import utils.basePage;

import java.io.IOException;

public class MyAccount extends baseStepDefs {

    @Given("^patient with my account login to the portal$")
    public void patientWithMyAccountLogsIntoThePortal() {
        loginpage.loginToMeddBase(prop.getProperty("myaccount_medical_history_username"), prop.getProperty("myaccount_medical_history_password"));
    }
    @And("^Patient choose MyAccountImage$")
    public void patientChooseMyAccountImage() {
        accountdetailspage.gotoMyAccount();
    }

    @When("^Patient Choose MyAccount$")
    public void patient_Choose_MyAccount() throws Throwable {
        Thread.sleep(3000);
        accountdetailspage.ClickMyAccount();
    }
    @When("^Patient enters Firstname as \"([^\"]*)\"$")
    public void patientEntersFirstnameAs(String fn) throws Throwable {

        utils.Write(accountdetailspage.FirstName, fn);

    }

    @When("^Surname as \"([^\"]*)\"$")
    public void surnameAs(String sn) throws Throwable {
        utils.Write(accountdetailspage.SurName, sn);

    }

    @And("^Patient enters day of the DOB \"([^\"]*)\"$")
    public void patientEntersDayOfTheDOB(String day) throws Throwable {
        utils.Write(accountdetailspage.dayTextBox, day);
    }
    @And("^selects month by using drop down \"([^\"]*)\"$")
    public void selectsMonthByUsingDropDown(String month) throws Throwable {
       utils.SelectUsingVisibleText(accountdetailspage.monthDropDown,month);
    }
    @And("^Enters year as \"([^\"]*)\"$")
    public void entersYearAs(String year) throws Throwable {
        utils.Write(accountdetailspage.yearTextBox, year);
    }
    @And("^Patient enters Relationship as \"([^\"]*)\" and NextToKin TelephoneNumber as \"([^\"]*)\"$")
    public void patientEntersRelationshipAsAndNextToKinTelephoneNumberAs(String rel, String TeleNo) throws Throwable {
        utils.Write(accountdetailspage.Relationship, rel);
        utils.Write(accountdetailspage.TelephoneNumb, TeleNo);
    }

    @When("^Patient enters Address(\\d+) as \"([^\"]*)\" and City as \"([^\"]*)\"$")
    public void patient_enters_Address_as_and_City_as(String add1, String Add2, String city) throws Throwable {
        utils.Write(accountdetailspage.Address1, add1);
        utils.Write(accountdetailspage.Address2, Add2);
        utils.Write(accountdetailspage.Address1, city);
    }
    @And("^Patient enters Country as \"([^\"]*)\"$")
    public void patientEntersCountryAs(String country) throws Throwable {
        utils.Write(accountdetailspage.County,country);
    }

    @And("^Enters Postcode as \"([^\"]*)\"$")
    public void entersPostcodeAs(String postcode) throws Throwable {
        utils.Write(accountdetailspage.Postcode,postcode);
    }
    @And("^Patient enters NextToKin name as \"([^\"]*)\"$")
    public void patientEntersNextToKinNameAs(String kinName) throws Throwable {
        utils.Write(accountdetailspage.nextToKinNameTextBox,kinName);
    }
    @And("^Patient enters NextToKin surname as \"([^\"]*)\"$")
    public void patientEntersNextToKinSurnameAs(String kinSurname) throws Throwable {
        utils.Write(accountdetailspage.nextToKinSurnameTextBox,kinSurname);
    }

    @And("^Patient enters Password as \"([^\"]*)\"$")
    public void patientEntersPasswordAs(String pass) throws Throwable {
        utils.Write(accountdetailspage.Password, pass);
    }
    @When("^select Save Changes button$")
    public void select_Save_Changes_button() throws Throwable {
        accountdetailspage.setClickSavechangeButton();
    }

    @Then("^Message is displayed Account Updated Successfully$")
    public void message_is_displayed_Account_Updated_Successfully() throws Throwable {
        accountdetailspage.displayupdatesuccessfully();
    }

    @And("^Patient checked the Email checkbox for Appointment booked confirmation$")
    public void patientCheckedTheEmailCheckboxForAppointmentBookedConfirmation() throws Throwable {

        accountdetailspage.Clickonemailcheckboxtobookappointment();
    }

    @And("^Patient checked the SMS checkbox for Appointment booked confirmation$")
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
    public void patientLoggedInBack() throws IOException, InterruptedException {
        loginpage.NavigateToUrl();
        //loginpage.loginToMeddBase();
        loginpage.loginToMeddBase(prop.getProperty("myaccount_medical_history_username"), prop.getProperty("myaccount_medical_history_password"));

        //utils.waitForElementPresence(driver, By.xpath("//*[@id=\"ng-app\"]/body/div/div[2]/div[4]/div/div"));
        Thread.sleep(3000);
        homepage.ClickUserIcon();
        homepage.Clickmyaccount();
    }

    @And("^clear the input data in the form$")
    public void clearTheInputDataInTheForm() throws Throwable {
        accountdetailspage.clearaccountdetilsfields();
    }

    @And("^Patient in my account page enters Password$")
    public void patientInMyAccountPageEntersPassword() {
        utils.Write(accountdetailspage.Password, prop.getProperty("myaccount_medical_history_password"));
    }

    @And("^clear Date of Birth in the form$")
    public void clearDateOfBirthInTheForm() {
    accountdetailspage.clearBirthTextBox();
    }

    @And("^Patient enters contact details as \"([^\"]*)\"$")
    public void patientEntersContactDetailsAs(String mb) throws Throwable {
        utils.Write(accountdetailspage.mobileNumberTextBox, mb);
    }
    @And("^Enters telephoneNumber \"([^\"]*)\"$")
    public void entersTelephoneNumber(String TelNo) throws Throwable {
        utils.Write(accountdetailspage.PatientTelephoneNoTextBox, TelNo);
    }

    @And("^Enters email as \"([^\"]*)\"$")
    public void entersEmailAs(String email) throws Throwable {
        utils.Write(accountdetailspage.emailTextBox,email);
    }

    @Then("^Patient should be able to see the error message \"([^\"]*)\"$")
    public void patientShouldBeAbleToSeeTheErrorMessage(String errormessage) throws Throwable {
       // Thread.sleep(3000);
        Assert.assertTrue(accountdetailspage.getErrorMessage().contains(errormessage));
    }


    @Then("^patient should see the account page firstname updated as \"([^\"]*)\"$")
    public void patientShouldSeeTheAccountPagefirstnameUpdatedAs(String FirstName) throws Throwable {
      // boolean isFirstNameDisplayed = accountdetailspage.getFirstName(FirstName);
      //  Assert.assertTrue(isFirstNameDisplayed);
        Thread.sleep(3000);
        Assert.assertTrue(accountdetailspage.getFirstName().contains(FirstName));
    }


    @And("^Patient should see the account page surname updated as \"([^\"]*)\"$")
    public void patientShouldSeeTheAccountPageSurnameUpdatedAs(String SurName) throws Throwable {

        Assert.assertTrue(accountdetailspage.getLastName().contains(SurName));

    }
}




