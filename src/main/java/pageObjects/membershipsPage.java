package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.Base;

import java.io.IOException;

public class membershipsPage extends Base {

    private @FindBy(xpath = "//div[@class='panel panel-bordered ng-scope']//div[@class='panel-body']")
    WebElement details;

    public membershipsPage() throws IOException {
        super();

    }
    public void NavigateToUrl() throws IOException {
        //initializeDriver();
        driver.navigate().to(prop.getProperty("url"));

    }

    public void membershipsPagedetails() throws InterruptedException {
        //details.isDisplayed();

            details.isDisplayed();
            utils.waitToLoad();



    }
}

