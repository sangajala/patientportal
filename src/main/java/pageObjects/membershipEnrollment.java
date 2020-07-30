package pageObjects;

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

    private @FindBy(xpath = "//*[@ng-repeat='type in membership']")
    WebElement LGPSchemes;
    private @FindBy(xpath = "//li[contains(text(),'LGP_MonthlyScheme')]")
    WebElement LGPMonthlySchemes;
    private @FindBy(xpath = "//li[contains(text(),'LGP_AnnualScheme')]")
    WebElement LGPAnnualSchemes;
    private @FindBy(xpath = "//p[@ng-show='showMembershipData']/span")
    WebElement monthlySchemeDetails;
    private @FindBy(xpath = "//p[@ng-show='showMembershipData']/span")
    WebElement annualSchemeDetails;

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
    private @FindBy(xpath = "//div[contains(text(),'There are no membership schemes available.')]")
    WebElement noMembershipschemeMessage;



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

    public boolean isMembershipSchemesDisplayed(String txt1, String txt2)
    {
        utils.reload(driver);
        // LGPSchemes.isDisplayed();
        if(LGPMonthlySchemes.getText().equals(txt1))
        {if(LGPAnnualSchemes.getText().equals(txt2))
        {
            return true;
        }}
        return false;
    }

    public boolean isNoMembershipMessageDisplayed(String text)
    {

        return  noMembershipschemeMessage.isDisplayed();
    }

}



