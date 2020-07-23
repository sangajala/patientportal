package pageObjects.old;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.basePage;

public class membershipEnrollment extends basePage {

    private @FindBy(xpath = "//button[contains(text(),'See our membership schemes')]")
    WebElement seeOurMembershipSchemeButton;
    private @FindBy(xpath = "//*[@ng-bind-html='navTitle']")
    WebElement membershipTitle;
    private @FindBy(xpath = "//*[@ng-repeat='type in membership']")
    WebElement LGPSchemeButton;
    private @FindBy(xpath = "//span[contains(text(),'Billing frequency: Monthly')]")
    WebElement monthlySchemeOption;
    private @FindBy(xpath = "//button[contains(text(),'Apply for Membership')]")
    WebElement ApplyForMembershipButton;
    private @FindBy(xpath = "//h4[contains(text(),'Disclaimer')]")
    WebElement disclaimer;
    private @FindBy(xpath = "//h4[contains(text(),'Fees')]")
    WebElement fees;

    private @FindBy(xpath = "//input[@ng-model='checkbox3']")
    WebElement checkbox1;
    private @FindBy(xpath = "//input[@ng-model='marketing']")
    WebElement checkbox2;
    private @FindBy(xpath = "//button[contains(text(),'Apply for Membership')]")
    WebElement ApplyForMembershipButton2;
    //'marketing' and @class='ng-pristine ng-valid ng-empty ng-touched']")
    private @FindBy(xpath = "//h3[contains(text(),'Register')]")
    WebElement RegisterTitle;

    public boolean isSeeOurMembershipSchemeButtonDisplayed() {

        return seeOurMembershipSchemeButton.isDisplayed();

    }

    public boolean isMembershipPageDisplayed(String text) {

        return membershipTitle.getText().equals(text);

    }

    public boolean ismonthlySchemeDisplayed() {
        utils.waitForElementVisibility(driver, monthlySchemeOption);
        return monthlySchemeOption.isDisplayed();

    }

    public boolean isDisclaimerPageDisplayed(String text1,String text2) {

       if(disclaimer.getText().equals(text1)) {
           if (fees.getText().equals(text2)) {
               return true;
           }

       }
               return false;

       }





    public boolean isRegisterPageDisplayed(String text) {

        if(RegisterTitle.getText().equals(text))
        {
            return true;
        }
        return false;
    }


    public void clickonSeeOurMembershipSchemeButton() {
        seeOurMembershipSchemeButton.click();


    }

    public void clickonApplyMembershipSchemeButton() {
        ApplyForMembershipButton.click();


    }

    public void clickonCheckboxesandApplyMembership() {

        checkbox1.click();
        checkbox2.click();

        ApplyForMembershipButton2.click();
    }

    public void clickonLGPScheme() {
        LGPSchemeButton.click();


    }

}



