package utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserFactory {

    private static final int MAX_TIMEOUT = 60;
    public static String USERNAME = "deepthikaligi1";
    public static String AUTOMATE_KEY = "XjAEsGPh6QzDEg9fBsxf";
    public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";


    //single ton
    //Factory pattern

    static WebDriver driver;


    public static WebDriver getDriver() {
        if(driver == null){
            return createDriverInstance();
        }
        return driver;
    }

    private static WebDriver createDriverInstance() {
         String BROWSER = System.getProperty("BROWSER");
         String HOST = System.getProperty("HOST");

        USERNAME = System.getProperty("USERNAME");
        AUTOMATE_KEY = System.getProperty("AUTOMATE_KEY");

        System.out.println("HOST"+System.getProperty("HOST"));
        System.out.println("BR"+System.getProperty("BROWSER"));

        if (BROWSER == null) {
            BROWSER = "CHROME";
        }
        if (HOST == (null)) {
            HOST = "LOCAL";
        }


        if (HOST.equalsIgnoreCase("browserstack")) {
            try {
            DesiredCapabilities caps = new DesiredCapabilities();
            if (BROWSER.equalsIgnoreCase("CHROME")) {

                caps.setCapability("browser", "Chrome");
                caps.setCapability("browser_version", "81.0");
                caps.setCapability("os", "OS X");
                caps.setCapability("os_version", "Catalina");
                caps.setCapability("resolution", "1920x1080");
                caps.setCapability("name", "Bstack-[Java] Sample Test");


            } else if (BROWSER.equalsIgnoreCase("FIREFOX")) {
                caps.setCapability("browser", "Firefox");
                caps.setCapability("browser_version", "76.0 beta");
                caps.setCapability("os", "OS X");
                caps.setCapability("os_version", "Catalina");
                caps.setCapability("resolution", "1920x1080");
                caps.setCapability("name", "Bstack-[Java] Sample Test");

            } else if (BROWSER.equalsIgnoreCase("IE")) {
                caps.setCapability("browser", "IE");
                caps.setCapability("browser_version", "11.0");
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("resolution", "1024x768");
                caps.setCapability("name", "Bstack-[Java] Sample Test");

            } else if (BROWSER.equalsIgnoreCase("SAFARI")) {
                caps.setCapability("browser", "Safari");
                caps.setCapability("browser_version", "13.0");
                caps.setCapability("os", "OS X");
                caps.setCapability("os_version", "Catalina");
                caps.setCapability("resolution", "1024x768");
                caps.setCapability("name", "Bstack-[Java] Sample Test");

            }
            else {
                caps.setCapability("browser", "Chrome");
                caps.setCapability("browser_version", "81.0");
                caps.setCapability("os", "OS X");
                caps.setCapability("os_version", "Catalina");
                caps.setCapability("resolution", "1024x768");
                caps.setCapability("name", "Bstack-[Java] Sample Test");

            }

                driver = new RemoteWebDriver(new URL(URL), caps);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        } else {

            if (BROWSER.equalsIgnoreCase("CHROME")) {
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
            } else if (BROWSER.equalsIgnoreCase("FIREFOX")) {
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
            } else if (BROWSER.equalsIgnoreCase("SAFARI")) {
                driver = new SafariDriver();
            }
            else {
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
            }
        }


        driver.manage().timeouts().implicitlyWait(MAX_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().window().maximize();


        return driver;
    }

    public static void close() {
        driver.quit();
        driver = null;
    }
}
