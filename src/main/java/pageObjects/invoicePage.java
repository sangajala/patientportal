package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

import utils.basePage;

import java.io.IOException;

public class invoicePage extends basePage {

    public @FindBy(xpath = "*//div[@class='page ng-scope']/div[4]/div/button[1]")
    WebElement Allinvoice;

    public @FindBy(xpath = "//li[contains(@class,'list-group-item ng-binding ng-scope')][1]")
    WebElement firstinvoice;

    public @FindBy(xpath = "//button[contains(@class,'btn btn-primary ng-scope')][2]")
    WebElement emailbtn;
    public @FindBy(xpath = "//div[contains(@class,'alert alert-success dark ng-scope')]")
    WebElement emailsentmessage;

    public @FindBy(xpath = "*[@id=\"ng-app\"]/body[1]/div[1]/div/div/button[1]")
    WebElement backbutn;
    public @FindBy(xpath = "//li[10]//a[1]")
    WebElement invoicebutton;
   // public @FindBy(xpath = "//button[contains(@class,'btn btn-primary')][2]")
  public @FindBy(xpath = "*//div[@class='page ng-scope']/div[4]/div/button[2]")
    WebElement unpaidinvoice;
    public @FindBy(xpath = "*//div[@class='page ng-scope']/div[4]/div/button[3]")
    WebElement paidInvoice;

   public @FindBy(xpath="//p[@class='ng-binding']")
   WebElement InvoiceDetails;
    public @FindBy(xpath = "//div[@class='ng-binding ng-scope']")
    WebElement itemDetails;
    public @FindBy(xpath = "//h4[contains(text(),'Creditor details')]")
    WebElement CreditorDetails;
    public @FindBy(xpath = "//h4[contains(text(),'Debtor details')]")
    WebElement DebtorDetails;



    public invoicePage()  {

        super();
    }

	public void patientsclickonall() {
        //(webdriver,webelement)
        utils.waitForElementClickable(driver,Allinvoice);
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
            Allinvoice.click();

    }

    public void patientclicksonfirstinvoice() {
        utils.waitForElementClickable(driver,firstinvoice);
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
        firstinvoice.click();
    }

    public void emailbutton() {
        utils.waitForElementPresence(driver, By.xpath( "//button[contains(@class,'btn btn-primary ng-scope')][2]"));
        utils.waitForElementClickable(driver,emailbtn);
        emailbtn.click();

    }
    public void emailsentsuccessfullymsg() {

        utils.waitForElementPresence(driver, By.xpath("//div[contains(@class,'alert alert-success dark ng-scope')]"));
        emailsentmessage.isDisplayed();
    }
    public void selectbackbutton() {
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
        backbutn.click();
    }
    public void patientnavigatesbacktohomepage()
    {
        firstinvoice.isDisplayed();
        Assert.assertTrue(firstinvoice.isDisplayed(),"msgnotdisplayed");
    }
   public void selectParticularInvoice(String inv) throws InterruptedException {
       utils.waitToLoad();
    WebElement invoice=driver.findElement(By.xpath("//li[contains(text(),'"+inv+"')]"));
    invoice.click();
   }
   public boolean invoiceDetails(String details){
       utils.waitForElementPresence(driver,By.xpath("//p[@class='ng-binding']"));
       System.out.println(InvoiceDetails.getText());
        return InvoiceDetails.getText().contains(details);
   }
    public boolean itemDetails(String details){
        utils.waitForElementPresence(driver,By.xpath("//div[@class='ng-binding ng-scope']"));
        System.out.println(itemDetails.getText());
        return itemDetails.getText().contains(details);
    }
    public void patiendclickonunpaidinvoice(){
        utils.waitForElementClickable(driver,unpaidinvoice);
        unpaidinvoice.click();
    }

    public void patiendclickonpaidinvoice(){
        utils.waitForElementPresence(driver,By.xpath("//div[@class='page ng-scope']/div[4]/div/button[3]"));
        System.out.println("before wait for element clickable" );
        paidInvoice.click();
    }

   }
