package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.Base;

import java.util.List;


public class allNotificationsPage extends Base {

    private @FindBy(xpath = "//h1[contains(text(),'Notifications')]")
    WebElement notificationTitle;

    private @FindBy(xpath="//div[@class='page-content container-fluid ng-scope']/ul/li")
    List<WebElement> countOfNotifications;



    public int getCountOfNotifiactions(WebDriver driver) {
        utils.waitForElementVisibility(driver, notificationTitle);
        System.out.println("No of notifications are : " + countOfNotifications.size());
        return countOfNotifications.size();
    }


}