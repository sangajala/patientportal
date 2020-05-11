package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.basePage;

import java.util.List;


public class allNotificationsPage extends basePage {

    private @FindBy(xpath = "//h1[contains(text(),'Notifications')]")
    WebElement notificationTitle;

    private @FindBy(xpath="//div[@class='page-content container-fluid ng-scope']/ul/li")
    List<WebElement> countOfNotifications;
    private @FindBy(xpath = "//h4[contains(text(),'Message')]")
    WebElement message;



    public int getCountOfNotifiactions() {
        utils.waitForElementVisibility(driver, notificationTitle);
        System.out.println("No of notifications are : " + countOfNotifications.size());
        return countOfNotifications.size();
    }
    public boolean isMessageDisplayed()
    {
       return message.isDisplayed();
    }


}