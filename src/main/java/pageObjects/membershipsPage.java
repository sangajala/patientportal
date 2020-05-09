package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.basePage;

import java.io.IOException;

public class membershipsPage extends basePage {

    private @FindBy(xpath = "//div[@class='panel panel-bordered ng-scope']//div[@class='panel-body']")
    WebElement details;

    public membershipsPage()  {
        super();

    }
    public void NavigateToUrl() throws IOException {
        //initializeDriver();
        driver.navigate().to(prop.getProperty("url"));

    }

    public void membershipsPagedetails() {
        //details.isDisplayed();
        try {
            details.isDisplayed();
            utils.waitToLoad();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
}

