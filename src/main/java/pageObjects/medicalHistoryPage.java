package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.basePage;

import java.io.IOException;
import java.util.List;

public class medicalHistoryPage extends basePage {
    public @FindBy(xpath = "//a[contains(text(),'Home')]")
    WebElement homelink;
    //public @FindBy(xpath = " //div[@class='alert alert-info alert-icon ng-scope']")
   // WebElement msgdisplay;
    public @FindBy(xpath = "//span[contains(text(),'Prescription (Acute)')]")
    WebElement Prescriptionacute;
    public @FindBy(xpath = "//*[@id=\"ng-app\"]/body/div/div[2]/div[4]/ul/li[1]/h5/span")
    WebElement prescriptionlist1;
    public @FindBy(xpath = "//*[@id=\"ng-app\"]/body/div/div[2]/div[4]/ul/li[2]/h5/span")
    WebElement prescriptionlist2;
    public @FindBy(xpath = "//span[@class='ng-binding']")
    WebElement prescriptiondetails;

    public @FindBy(xpath = "//span[@ng-bind-html='medicalHistoryItem.Label']")
    List<WebElement> options;

    public medicalHistoryPage()  {
        super();
    }

    public void Clickonhomelink() {

        homelink.click();
    }
   public void ClickonPrescription() {
      utils.waitForElementClickable(driver,Prescriptionacute);
       Prescriptionacute.click();

   }
   public void prescriptionmessagedisplayed()
   {
       try {
           utils.waitToLoad();
           prescriptionlist1.isDisplayed();
           prescriptionlist2.isDisplayed();
           utils.waitToLoad();
       }catch (InterruptedException e) {
           e.printStackTrace();
       }

   }
   public void viewprescriptiondetails()
   { try {
       prescriptiondetails.isDisplayed();
       utils.waitToLoad();
   } catch (InterruptedException e){
       e.printStackTrace();
   }
   }
   public void clickonprescription1()
   { try {


       prescriptionlist1.click();
       utils.waitToLoad();
   } catch (InterruptedException e){
       e.printStackTrace();
   }
   }

    public boolean isOptionAvailable(String option) {
        for(WebElement element:options){
            if(element.getText().equals(option)){
                return true;
            }
        }
        return  false;

    }

    public void gotoSection(String section) throws Exception {
        utils.clickOnText(driver,section);
    }

    public boolean checkRecordExist(String title) throws Exception {
        return utils.checkSectionWithTextExists(driver,title);
    }



    public boolean checkLinkExist(String link) throws Exception {
            return utils.checkLinkWithTextExists(driver,link);
    }



    }



