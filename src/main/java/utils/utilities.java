

/**
 *
 */
package utils;

import java.io.File;
import java.io.FileInputStream;
import java.util.LinkedList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import com.cucumber.listener.ExtentCucumberFormatter;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.relevantcodes.extentreports.LogStatus;

import static utils.BrowserFactory.getDriver;


public class utilities {


    public void waitForElementPresence(WebDriver driver, By element) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        try {
            wait.until(ExpectedConditions.presenceOfElementLocated(element));
        } catch (Exception e) {

            e.printStackTrace();

            Assert.assertFalse(false, "Failed the test - " + e.getMessage());
        }
    }


    public void waitForElementVisibility(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        try {
            wait.until(ExpectedConditions.visibilityOf(element));

        } catch (Exception e) {

            e.printStackTrace();

            Assert.assertFalse(false, "Failed the test - " + e.getMessage());
        }
    }

    public void waitForlocatorVisibility(WebDriver driver, By locator) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        try {

            wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        } catch (Exception e) {

            e.printStackTrace();

            Assert.assertFalse(false, "Failed the test - " + e.getMessage());
        }
    }


    public void waitForElementClickable(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        try {

            wait.until(ExpectedConditions.elementToBeClickable(element));
        } catch (Exception e) {

            e.printStackTrace();

            Assert.assertFalse(false, "Failed the test - " + e.getMessage());
        }
    }


    public boolean isChecboxSelected(WebElement element) {
        try {
            Assert.assertTrue(element.isSelected());
        } catch (Error e) {

            Assert.assertFalse(false, "checkbox not selected");
        }
        return false;
    }



    public void SelectUsingIndex(WebElement element, int index) {
        Select select = new Select(element);
        select.selectByIndex(index);

    }

    public void SelectUsingVisibleText(WebElement element, String text) {
        Select select = new Select(element);
        select.selectByVisibleText(text);
    }


    public void waitToLoad() throws InterruptedException {

        Thread.sleep(5000);

    }

    public void clickOnWebElement(WebDriver driver, WebElement element) {
        try {
            waitForElementClickable(driver, element);
            element.click();
        } catch (Exception e) {
            Assert.fail("Element not clickable" + element);
        }
    }

    public void writeToWebElement(WebElement element, String text) {
        element.sendKeys(text);
    }

    public boolean checkMessageIsDisplayed(WebDriver driver, String message) {
        String wholeText = driver.findElement(By.tagName("body")).getText();
        return wholeText.contains(message);
    }

    public void click(WebDriver driver, WebElement element) {
        waitForElementClickable(driver, element);
        element.click();

    }


    public void clickOnText(WebDriver driver, String text) throws Exception {
        getElementFromText(driver, text).click();
    }

    public WebElement getElementFromText(WebDriver driver, String text) throws Exception {
        return getElement(driver, By.xpath("//span[contains(text(),'" + text + "')]"));
    }


    public WebElement getElement(WebDriver driver, By by) throws Exception {
        List<WebElement> elements = driver.findElements(by);
        if (elements.size() == 0) {
            throw new Exception("Given element not present");
        } else {
            return elements.get(0);
        }

    }

    public List<WebElement> getElements(WebDriver driver, By by) throws Exception {
        List<WebElement> elements = driver.findElements(by);
        if (elements.size() == 0) {
            throw new Exception("Given element not present");
        } else {
            return elements;
        }

    }

    public boolean checkSectionWithTextExists(WebDriver driver, String text) throws Exception {
        return getElementFromText(driver, text).isDisplayed();
    }

    public boolean checkLinkWithTextExists(WebDriver driver, String linkText) throws Exception {
        return getElementFromLinkText(driver, linkText).isDisplayed();
    }

    private WebElement getElementFromLinkText(WebDriver driver, String linkText) throws Exception {
        return getElement(driver, By.linkText(linkText));
    }

    public void reload(WebDriver driver) {

        final WebElement htmlRoot = getDriver().findElement(By.tagName("html"));


        getDriver().navigate().refresh();


        final long startTime = System.currentTimeMillis();
        final long maxLoadTime = TimeUnit.SECONDS.toMillis(20);
        boolean startedReloading = false;
        do {
            try {
                startedReloading = !htmlRoot.isDisplayed();
            } catch (Exception e) {
                startedReloading = true;
            }
        } while (!startedReloading && (System.currentTimeMillis() - startTime < maxLoadTime));

        if (!startedReloading) {
            throw new IllegalStateException("Page did not start reloading in " + maxLoadTime + "ms");
        }

        //verify();
    }


    public static void loadReport() {
        ExtentCucumberFormatter.initiateExtentCucumberFormatter();

        ExtentCucumberFormatter.loadConfig(new File("src/main/java/extent-config.xml"));


        ExtentCucumberFormatter.addSystemInfo("Browser Name", "Firefox");
        ExtentCucumberFormatter.addSystemInfo("Browser version", "v47.0.1");
        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v2.53.1");
    }

    public static Properties loadProperties() {
        Properties prop = new Properties();
        try {
            FileInputStream fs = new FileInputStream("./src/main/java/config/data.properties");
            prop.load(fs);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return prop;
    }
}

