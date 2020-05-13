/**
 *
 */
package stepDefinitions;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import utils.BrowserFactory;
import utils.basePage;

/**
 * @author Niharika
 *
 *
 */
public class AfterActionsHook {


    @After
    public static void tearDown(Scenario scenario) {

        WebDriver driver = BrowserFactory.getDriver();

        byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshotBytes, "image/png");


    }

}
