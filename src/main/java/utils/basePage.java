/**
 *
 */
package utils;

import java.util.Properties;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;


public abstract class basePage {

    private static final int MAX_TIMEOUT = 60;
    public static final String USERNAME = "roopa34";
    public static final String AUTOMATE_KEY = "DwSmUzndiirmqdy9bhVf";
    public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
    public utilities utils = new utilities();


    public static WebDriver driver;


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

            waitDriver = new WebDriverWait(driver, TIMEOUT);
            driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);

        } catch (Exception exception) {

        }
    }

}
