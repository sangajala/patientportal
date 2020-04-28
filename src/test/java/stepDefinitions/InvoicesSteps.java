package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
<<<<<<< Updated upstream
=======
import org.testng.Assert;
import pageObjects.invoicePage;
import pageObjects.navbarPage;
>>>>>>> Stashed changes
import utils.Base;
import utils.utilities;

public class InvoicesSteps extends Base {




    @When("^patients clicks on all invoices$")
 public void patientsClicksOnAllInvoices()
   {
          invoicepage.patientsclickonall();

   }

    @When("^Patient select first invoice that appears on the search result$")
    public void patientSelectFirstInvoiceThatAppearsOnTheSearchResult() throws Throwable {
       invoicepage.patientclicksonfirstinvoice();
    }

    @When("^Patient clicks on \"([^\"]*)\" in menu$")
    public void patientClicksOnInMenu(String menu) throws Throwable {
        navbarpage.gotoMenu(menu);

    }

    @Then("^Patient is navigated to Invoice Details page$")
    public void patientIsNavigatedToInvoiceDetailsPage() throws Throwable{
        invoicepage.backbutn.isDisplayed();

    }

    @And("^Patient clicks on E-mail PDF invoice button$")
    public void patientClicksOnEMailPDFInvoiceButton() throws Throwable {
        invoicepage.emailbutton();
    }

    @Then("^Success Invoice was sucessfully sent to your email address message is displayed$")
    public void successInvoiceWasSucessfullySentToYourEmailAddressMessageIsDisplayed() throws Throwable{
        utilities utils=new utilities();
        utils.waitForElementPresence(driver, By.xpath("//div[contains(@class,'alert alert-success dark ng-scope')]"));

      invoicepage .emailsentsuccessfullymsg();



    }

    @When("^Patient select Back button$")
    public void patientSelectBackButton() throws Throwable { ;
        invoicepage.selectbackbutton();
    }

    @Then("^patient is navigated back to Invoice page$")
    public void patientIsNavigatedBackToInvoicePage() throws Throwable{
        invoicepage.patientnavigatesbacktohomepage();


    }

    @When("^Patient select first UnPaid invoice that appears on the search result$")
    public void patientSelectFirstUnPaidInvoiceThatAppearsOnTheSearchResult() throws Throwable {
invoicepage.patientclicksonfirstinvoice();
    }

    @Given("^Patient logged in$")
    public void patientLoggedIn() throws Exception
    {
        initializeDriver();
        loginpage.NavigateToUrl();
        loginpage.loginToMeddBase();
    }

    @When("^patient clicks on unpaid invoices$")
    public void patientClicksOnUnpaidInvoices() {
        invoicepage.patiendclickonunpaidinvoice();

    }


    @Then("^Patient is able to see \"([^\"]*)\"$")
    public void patientIsAbleToSee(String details) throws Throwable {
        Assert.assertTrue(invoicepage.invoiceDetails(details));

    }

    @When("^patient clicks on paid invoices$")
    public void patientClicksOnPaidInvoices() {
        invoicepage.patiendclickonpaidinvoice();
    }

    @When("^Patient select first Paid invoice that appears on the search result$")
    public void patientSelectFirstPaidInvoiceThatAppearsOnTheSearchResult() {
        invoicepage.patientclicksonfirstinvoice();
    }
}