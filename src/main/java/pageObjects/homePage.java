package pageObjects;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import newutilis.Waitfor;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;


import org.openqa.selenium.support.How;
import org.testng.Assert;
import utils.basePage;


public class homePage extends basePage {

    public @FindBy(xpath = "//img[@src='assets/images/profile.jpg']")
    WebElement userIcon;

    public @FindBy(xpath = "//a[contains(text(),' Logout')]")
    WebElement logOutLink;

    @FindBy(css = "a[ui-sref='faq']")
    private WebElement faqLink;


    private @FindBy(xpath = "//span[contains(text(),'Online Portal')]")
    WebElement OnlinePortalLink;
    private @FindBy(xpath = "//h3[contains(text(),'Your upcoming appointments')]")
    WebElement homePageApptmtNotificationTitle;
    private @FindBy(xpath = "//h3[@class='panel-title pt-1']")
    WebElement homePageApptmtNotificationDet;
    public @FindBy(xpath = "" + "//a[contains(text(),'My account')]")
    WebElement myAccounticon;


    private @FindBy(css = "i.icon.wb-bell")
    WebElement notificationIcon;
    private @FindBy(linkText = "All notifications")
    WebElement AllNotificationLink;
    private @FindBy(css = "span.icon.fa.fa-home")
    WebElement homePageIcon;
    private @FindBy(xpath = "//div[@class='panel-body']/ul/li")
    List<WebElement> notificationListInHomePage;
    private @FindBy(xpath = "//div[@class=’scrollable-content’]/a[1]/div/div[2]/h6")
    WebElement firstNotificationLinkTitle;
//div[contains(text(),"Appointment 'Consultation' is due soon")]

    private @FindBy(css = "span.badge.badge-danger.up.ng-binding")
    WebElement NotificationIconNumber;

    public boolean isAppntnotificationDisplayed(String appmnt, String appmntType) {
        WebElement text = driver.findElement(By.xpath("//a[1]/div/div[2]/div[contains(text(),\"Appointment '" + appmntType + "' is due soon\")]"));
        utils.waitForElementVisibility(driver, text);
        if (text.isDisplayed()) {
            return true;
        }
        return false;
    }
    public boolean isAppntnotificationDisplayedinHomepage(String appmntType) {
        WebElement text = driver.findElement(By.xpath("//li[1]/div/div[2]/span[contains(text(),\"Appointment '" + appmntType + "' is due soon\")]"));
        utils.waitForElementVisibility(driver, text);
        if (text.isDisplayed()) {
            return true;
        }
        return false;
    }

    public void clickOnfirstNotification() {
        utils.clickOnWebElement(driver, notificationListInHomePage.get(0));

    }


    public void clickOnNotificationIcon() {
        utils.clickOnWebElement(driver, notificationIcon);
    }

    public void clickOnAllNotificationLink() throws InterruptedException {
        utils.waitToLoad();
        utils.clickOnWebElement(driver, AllNotificationLink);
    }

    public void clickOnhomePageIcon() {
        utils.clickOnWebElement(driver, homePageIcon);
    }

    public int getNoOnNotificationIcon() {
        utils.waitForElementVisibility(driver, NotificationIconNumber);
        String count = NotificationIconNumber.getText();
        System.out.println("The no is   " + count);
        int no;
        no = Integer.parseInt(count);
        return no;
    }

    public homePage() {
        super();
    }


    public void ClickUserIcon() {
        userIcon.click();
    }


    public void ClickLogOut() {
        logOutLink.click();
    }


    public void clickFaqLink() throws InterruptedException {
        Waitfor.waitForElementClick(faqLink);
        //faqLink.click();
        new Actions(driver).moveToElement(faqLink).click().build().perform();


    }

    public String getTheCurrent() throws InterruptedException {
        return driver.getCurrentUrl();
    }


    public void chkAppointmentNotifications() {
        try {
            utils.waitToLoad();
            Assert.assertTrue(homePageApptmtNotificationTitle.isDisplayed());
            Assert.assertTrue(homePageApptmtNotificationDet.isDisplayed());

        } catch (Exception e) {
            Assert.fail("Notification not displayed" + e.getMessage());
        }

    }

    public int getNoOfRowsInTable(WebDriver driver) {

        List<WebElement> rows = driver.findElements(By.xpath("//div[@class='panel-body']/ul/li"));
        System.out.println("No of notifications in panel : " + rows.size());
        return rows.size();
    }

    public WebElement getOnlinePortalLink() {
        return OnlinePortalLink;
    }

    public void write(WebElement label, String value) {
        label.sendKeys(value);
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();

        }
    }

    public void Clickmyaccount() {
        utils.waitForElementClickable(driver, myAccounticon);
        myAccounticon.click();
    }


    public void toReloadPage() {

        utils.reload(driver);
    }


}
