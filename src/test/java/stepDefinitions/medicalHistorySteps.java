package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import utils.basePage;
import pageObjects.medicalHistoryPage;


import java.util.List;

public class medicalHistorySteps extends baseStepDefs {
    @Given("^Patient launch the browser$")
    public void patient_launch_the_browser() throws Throwable {

        loginpage.NavigateToUrl();
    }

    @When("^Patient enters username as \"([^\"]*)\"$")
    public void patient_enters_username_as(String un) throws Throwable {
        loginpage.enterUserName().sendKeys(un);

    }

    @When("^password as \"([^\"]*)\"$")
    public void password_as(String pw) throws Throwable {
        loginpage.enterPassword().sendKeys(pw);
    }

    @When("^Patient click on  signin button$")
    public void patient_click_on_signin_button() throws Throwable {
        loginpage.ClickOnSignin();
    }

    @Then("^Patient is navigated to patient portal home page$")
    public void patient_is_navigated_to_patient_portal_home_page() throws Throwable {
        navbarpage.VerifyBookAppointment();

    }
    @When("^Patient click on Home link$")
    public void patient_click_on_Home_link() throws Throwable {
        medicalHistoryPage.Clickonhomelink();

    }

    @And("^Patient should be navigated to Patient Portal Homepage$")
    public void patient_should_be_navigated_to_Patient_Portal_Homepage() throws Throwable {
        navbarpage.VerifyBookAppointment();
    }

    @When("^patient navigate to \"([^\"]*)\" menu$")
    public void patientNavigateToMenu(String menu) throws Throwable {
        System.out.println(" Menu Item : " + menu);
        navbarpage.gotoMenu(menu);
    }

    @And("^Patient should be able to view the documents related to his Medical History$")
    public void patientShouldBeAbleToViewTheDocumentsRelatedToHisMedicalHistory() {


    }

    @And("^Patient clicks on Prescription \\(Acute\\)$")
    public void patientClicksOnPrescriptionAcute() {
        medicalHistoryPage.ClickonPrescription();
    }

    @Then("^Patient can see the Prescription list$")
    public void patientCanSeeThePrescriptionList() {
        medicalHistoryPage.prescriptionmessagedisplayed();
    }

    @When("^Patient clicks on first Prescription on the list$")
    public void patientClicksOnFirstPrescriptionOnTheList() {
        medicalHistoryPage.clickonprescription1();
    }

    @Then("^Patient can view the Prescription  details$")
    public void patientCanViewThePrescriptionDetails() {
        medicalHistoryPage.viewprescriptiondetails();
    }

    @Given("^patient with all full medical history logs into the portal$")
    public void patientWithAllFullMedicalHistoryLogsIntoThePortal() {
        loginpage.loginToMeddBase(prop.getProperty("full_medical_history_username"), prop.getProperty("full_medical_history_password"));
    }

    @Then("^the medical history page should have below options$")
    public void theMedicalHistoryPageShouldHaveBelowOptions(List<String> dataTable) throws InterruptedException {

        // utils.waitToLoad();
        boolean flag = false;
        for (String option : dataTable) {
            Assert.assertTrue((medicalHistoryPage.isOptionAvailable(option)));
        }

    }


    @Then("^he should see record with title \"([^\"]*)\"$")
    public void heShouldSeeRecordWithTitle(String title) throws Throwable {
        if(!title.equals(""))
            Assert.assertTrue(medicalHistoryPage.checkRecordExist(title));

    }

    @When("^he navigate to \"([^\"]*)\"$")
    public void heNavigateTo(String title) throws Throwable {
        medicalHistoryPage.gotoSection(title);
    }

    @Then("^he should see record with detail \"([^\"]*)\"$")
    public void heShouldSeeRecordWithDetail(String detail) throws Throwable {
        if (detail.equalsIgnoreCase("download")) {
            Assert.assertTrue(medicalHistoryPage.checkLinkExist(detail));
        } else {
            Assert.assertTrue(medicalHistoryPage.checkRecordExist(detail));
        }
    }

}
