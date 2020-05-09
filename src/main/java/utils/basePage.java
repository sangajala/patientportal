/**
 * 
 */
package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.Before;
import pageObjects.*;
import java.net.URL;

/**
 * @author Niharika
 *
 * 
 */
public abstract class basePage {

	private static final int MAX_TIMEOUT = 60;
	public static final String USERNAME = "salesuser1";
	public static final String AUTOMATE_KEY = "GWXF5zYmqxr1FJtu7XyA";
	public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
	public utilities utils = new utilities();


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

}