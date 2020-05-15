/**
 *
 */
package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.testng.Assert;
import pageObjects.*;

/**
 * @author Niharika
 *
 *
 */
public abstract class basePage {

    private static final int MAX_TIMEOUT = 60;
    public static final String USERNAME = "roopa34";
    public static final String AUTOMATE_KEY = "DwSmUzndiirmqdy9bhVf";
    public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
    public static utilities utils = new utilities();


    //initialize webdriver
    public static WebDriver driver;

    //webdriver wait
    private static WebDriverWait waitDriver;

    public static Properties prop;
    public static Properties OR;

    //timeouts
    private final static int TIMEOUT = 30;
    private final static int PAGE_LOAD_TIMEOUT = 30;


    public basePage() {

        driver = BrowserFactory.getDriver();
        PageFactory.initElements(driver, this);
        prop = utilities.loadProperties();
        try {
            driver.manage().window().maximize();
            waitDriver = new WebDriverWait(driver, TIMEOUT);
            driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
            driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);

        } catch (Exception exception) {

        }
    }

    //<<<<<<FromNavbar>>>>>>>>>///
    public static @FindBy(xpath = "//span[text()='Book Appointment']")
    WebElement bookappointment;


    public static @FindBy(xpath = "//span[contains(text(),'Existing Appointments')]")
    WebElement existingappointments;





    public static void ClickBookAppointment() {

        bookappointment.click();

    }


    public static void ClickExistingAppointments() {

        existingappointments.click();

    }






    public static void clickOnWebElement(WebElement element) {
        utils.waitForElementClickable(driver, element);
        element.click();
    }

    public static WebElement getBookappointment() {
        return bookappointment;
    }

    public static WebElement getExistingappointments() {
        return existingappointments;
    }



    public static boolean VerifyBookAppointment() {
        System.out.println("in verify bookappointment");
        utilities u1 = new utilities();
        u1.waitForElementPresence(driver, By.xpath("//span[contains(text(),'Book Appointment')]"));
        return bookappointment.isDisplayed();


    }


    public static void gotoMenu(String menu) throws InterruptedException {

        utils.waitToLoad();
        try {
            WebElement menuLink = driver.findElement(By.xpath("//span[contains(text(),'" + menu + "')]"));
            if (menuLink.isDisplayed()) {
                menuLink.click();
            } else {
                throw new Exception("Menu link not present " + menu);
            }
        } catch (NoSuchFrameException e) {
            Assert.fail("Menu link not present " + menu);
        } catch (java.lang.Exception e) {
            Assert.fail("Menu link not present " + menu);
        }


    }








}
