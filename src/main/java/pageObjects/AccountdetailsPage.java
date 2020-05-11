package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import utils.basePage;

import java.io.IOException;
import java.util.List;

public class AccountdetailsPage extends basePage {


    public @FindBy(xpath = "//span[contains(@class,'avatar-online')]")
    WebElement MyAccountImage;
    public @FindBy(xpath = " //a[contains(text(),'My account')]")
    WebElement MyAccountButton;
    public @FindBy(xpath = "(//input[@type='text'])[2]")
    WebElement FirstName;
    public @FindBy(xpath = " (//input[@type='text'])[3]")
    WebElement SurName;
    public @FindBy(xpath = " (//input[@type='text'])[14]")
    WebElement Relationship;
    public @FindBy(xpath = "(//input[@type='text'])[15]")
    WebElement TelephoneNumb;
    public @FindBy(xpath = "(//input[@type='text'])[6]")
    WebElement Address1;
    public @FindBy(xpath = "(//input[@type='text'])[7] ")
    WebElement Address2;
    public @FindBy(xpath = "(//input[@type='text'])[9]")
    WebElement city;
    public @FindBy(xpath = "(//input[@type='text'])[10] ")
    WebElement County;
    public @FindBy(xpath = "(//input[@type='text'])[11]")
    WebElement Postcode;
    public @FindBy(xpath = "//input[contains(@placeholder,'Password')]")
    WebElement Password;
    public @FindBy(xpath = "//button[contains(@class,'btn btn-primary block-display')]")
    WebElement clickSavechangeButton;
    public @FindBy(xpath = "//div[contains(@class,'alert alert-info top-margin ng-scope')]")
    WebElement updatesSuccessfully;

    public @FindBy(xpath = "(//input[@type='checkbox'])[7]")
    WebElement emailcheckbox;
    public @FindBy(xpath = "(//input[@type='checkbox'])[8]")
    WebElement smscheckbox;
    public @FindBy(xpath = "//h1[@class='page-title ng-binding']")
    WebElement displayaccountpage;



    public AccountdetailsPage() {
        super();
    }

    public void ClickMyAccountImage() {
        MyAccountImage.click();
    }

    public void ClickMyAccount() {
        MyAccountButton.click();
        System.out.println("after clicking");
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();

            Assert.fail("Account page not displayed" + e.getMessage());
        }
    }

    public void setClickSavechangeButton() {
        clickSavechangeButton.click();
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void displayupdatesuccessfully() {
        updatesSuccessfully.isDisplayed();
        Assert.assertTrue(updatesSuccessfully.isDisplayed(), "msgnotdisplayed");
    }

    public void Clickonemailcheckboxtobookappointment() {
        utils.isChecboxSelected(emailcheckbox);
        emailcheckbox.click();
    }

    public void Clickonsmscheckboxtobookappointment() {
        utils.isChecboxSelected(smscheckbox);
        smscheckbox.click();

    }

    public void clearaccountdetilsfields() throws InterruptedException {
        System.out.println("In clear fun");
        List<WebElement> formData= driver.findElements(By.xpath("//div[@class='form-group']/input"));
        for(int i=0;i<formData.size();i++){
             System.out.println(i+": "+formData.get(i));
             formData.get(i).clear();


            //for(WebElement w:formData){
            // w.getText
             //System.out.println(w.getText());
               // System.out.println(w);
            //formData.clear();


        }

    }

}


