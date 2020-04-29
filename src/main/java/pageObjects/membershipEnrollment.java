package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.Base;

public class membershipEnrollment extends Base {

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
    WebElement DisclaimerTitle;
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

    public boolean isMembershipPageDisplayed() {

        return membershipTitle.isDisplayed();

    }

    public boolean ismonthlySchemeDisplayed() {
        utils.waitForElementVisibility(driver, monthlySchemeOption);
        return monthlySchemeOption.isDisplayed();

    }

    public boolean isDisclaimerPageDisplayed() {

        return DisclaimerTitle.isDisplayed();

    }

    public boolean isRegisterPageDisplayed() {

        return RegisterTitle.isDisplayed();

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



