package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import utils.Base;

import java.io.IOException;

public class invoicePage extends Base {

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
    public @FindBy(xpath = "//div[@class='col-md-6 ng-binding'][1]")
    WebElement CreditDetails;
    public @FindBy(xpath = "//div[@class='col-md-6 ng-binding'][2]]")
    WebElement DebitDetails;



    public invoicePage() throws IOException {

        super();
    }

	public void patientsclickonall() {
        //(webdriver,webelement)
        utils.waitForElementClickable(driver,Allinvoice);
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            Allinvoice.click();
            e.printStackTrace();

        }
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
        emailbtn.click();
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
    public void emailsentsuccessfullymsg() {
        emailsentmessage.isDisplayed();
        utils.waitForElementPresence(driver, By.xpath("//div[contains(@class,'alert alert-success dark ng-scope')]"));
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();

        }

    }
    public void selectbackbutton() {

        utils.waitForElementClickable(driver, backbutn);
        // WebElement element=driver.findElement(By.xpath("//button[contains(text(),'Back')]"));
        //Actions actions=new Actions((driver));
        //actions.moveToElement(element).click().perform();
        try {
            Thread.sleep(3000);
            backbutn.click();
        } catch (Exception e) {
            e.printStackTrace();
        }

       // backbutn.click();
    }
    public void patientnavigatesbacktohomepage()
    {
        firstinvoice.isDisplayed();
        Assert.assertTrue(firstinvoice.isDisplayed(),"msgnotdisplayed");
    }

   public boolean invoiceDetails(String details){
       try {
           Thread.sleep(3000);
       } catch (Exception e) {
           e.printStackTrace();
       }
        return InvoiceDetails.getText().contains(details);
   }
  // public boolean creditDetails(String c){
      // return CreditDetails.getText().contains(c);
  // }
   // public boolean debitDetails(String d){
      //  return DebitDetails.getText().contains(d);
   // }

    public void patiendclickonunpaidinvoice(){
        utils.waitForElementPresence(driver,By.xpath("//div[@class='page ng-scope']/div[4]/div/button[2]"));
        System.out.println("before wait for element clickable" );
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
        unpaidinvoice.click();
    }

    public void patiendclickonpaidinvoice(){
        utils.waitForElementPresence(driver,By.xpath("//div[@class='page ng-scope']/div[4]/div/button[3]"));
        System.out.println("before wait for element clickable" );
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
        paidInvoice.click();
    }

}
